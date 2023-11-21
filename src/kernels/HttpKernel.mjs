import { Pipeline } from '@stone-js/pipeline'
import { LogicException } from '../index.mjs'
import { BootProviders } from './bootstrap/BootProviders.mjs'
import { RequestHandled } from '../events/RequestHandled.mjs'
import { RegisterProviders } from './bootstrap/RegisterProviders.mjs'
import { isClass } from '../Utils.mjs'
import { Response } from '../Response.mjs'

export class HttpKernel {
  static NAME = 'http'

  #app
  #endedAt
  #startedAt

  constructor ({ app }) {
    this.#app = app
  }

  get app () {
    return this.#app
  }

  get router () {
    if (!this.#app.has('router')) {
      throw new LogicException('No Router provided. Must bind a router to the container.')
    }

    return this.#app.get('router')
  }

  get executionDuration () {
    return this.#endedAt - this.#startedAt
  }

  get bootstrappers () {
    return [RegisterProviders, BootProviders]
      .concat(this.#app.get('app.bootstrappers', []))
      .concat(this.#app.get('http.bootstrappers', []))
      .reduce((prev, curr) => prev.concat(prev.includes(curr) ? [] : curr), [])
  }

  get middleware () {
    return this.skipMiddleware() ? [] : this.#app.get('http.middleware', [])
  }

  get requestMiddleware () {
    return this.middleware.filter(v => isClass(v) && !!v.prototype.handle)
  }

  get responseMiddleware () {
    return this.middleware.filter(v => isClass(v) && !!v.prototype.response)
  }

  get routeMiddleware () {
    const request = this.#app.get('request')
    const route = request?.route()
    return route ? this.router.gatherRouteMiddleware(route) : []
  }

  get terminateMiddleware () {
    return this
      .middleware
      .concat(this.routeMiddleware)
      .filter(v => isClass(v) && !!v.prototype.terminate)
  }

  async run () {
    let response
    this.#startedAt = Date.now()

    try {
      response = await this._sendRequestThroughRouter()
    } catch (error) {
      await this._reportException(error)
      response = await this._renderException(error)
    }

    this.#endedAt = Date.now()

    return await this._afterRunning(response)
  }

  bootstrap () {
    if (!this.#app.hasBeenBootstrapped) {
      return this.#app.bootstrapWith(this.bootstrappers)
    }
  }

  terminate () {
    const request = this.#app.get('request')
    const response = this.#app.get('response')

    return new Pipeline(this.#app.container)
      .send(request, response)
      .through(this.terminateMiddleware)
      .via('terminate')
      .thenReturn()
  }

  skipMiddleware () {
    return this.#app.get('http.skip_middleware', false)
  }

  async _sendRequestThroughRouter () {
    if (!this.#app.has('request')) {
      throw new LogicException('No Request provided. Must bind a Request to the container.')
    }

    await this.bootstrap()

    return new Pipeline(this.#app.container)
      .send(this.#app.get('request'))
      .through(this.requestMiddleware)
      .then(request => this.router.dispatch(request))
  }

  async _afterRunning (resp) {
    const request = this.#app.get('request')
    const response = await new Pipeline(this.#app.container)
      .send(request, resp)
      .through(this.responseMiddleware)
      .via('response')
      .then((_, res) => res)

    this
      .#app
      .registerInstance(Response, response, ['response'])
      .emit(RequestHandled, new RequestHandled(request, response))
      .emit('http.request.handled', new RequestHandled(request, response))

    return response
  }

  async _reportException (exception) {
    const handler = this.#app.get('exceptionHandler')
    if (handler) {
      await handler.report(exception)
    } else if (this.app.isDebug()) {
      console.log(exception)
    }
    return this
  }

  async _renderException (exception) {
    const handler = this.#app.get('exceptionHandler')
    if (handler) { return handler.render(exception) }
    return exception
  }
}

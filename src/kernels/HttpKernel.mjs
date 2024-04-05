import { Request } from '../Request.mjs'
import { Response } from '../Response.mjs'
import { Pipeline } from '@stone-js/pipeline'
import { RequestHandled } from '../events/RequestHandled.mjs'
import { BootProviders } from '../bootstrap/BootProviders.mjs'
import { RegisterProviders } from '../bootstrap/RegisterProviders.mjs'
import { LogicException, RuntimeException, isClass, isFunction } from '@stone-js/common'

export class HttpKernel {
  static NAME = 'http'

  #context
  #endedAt
  #startedAt
  #resolvedAppModule

  constructor ({ context }) {
    this.#context = context
  }

  get router () {
    if (!this.#context.has('router')) {
      throw new RuntimeException('No Router provided. Must bind a router to the container.')
    }

    return this.#context.get('router')
  }

  get executionDuration () {
    return this.#endedAt - this.#startedAt
  }

  get bootstrappers () {
    return [RegisterProviders, BootProviders]
      .concat(this.#context.get('app.bootstrappers', []))
      .concat(this.#context.get('http.bootstrappers', []))
      .reduce((prev, curr) => prev.concat(prev.includes(curr) ? [] : curr), [])
  }

  get middleware () {
    return this.skipMiddleware() ? [] : this.#context.get('http.middleware', [])
  }

  get requestMiddleware () {
    return this.middleware.filter(v => isClass(v) && !!v.prototype.handle)
  }

  get responseMiddleware () {
    return this.middleware.filter(v => isClass(v) && !!v.prototype.response)
  }

  get routeMiddleware () {
    const request = this.#context.get('request')
    const route = request?.route()
    return route ? this.router.gatherRouteMiddleware(route) : []
  }

  get terminateMiddleware () {
    return this
      .middleware
      .concat(this.routeMiddleware)
      .filter(v => isClass(v) && !!v.prototype.terminate)
  }

  async run (request) {
    let response
    this.#startedAt = Date.now()

    try {
      response = await this._sendRequestThroughDestination(request)
    } catch (error) {
      await this._reportException(error)
      response = await this._renderException(error)
    }

    this.#endedAt = Date.now()

    return await this._afterRunning(response)
  }

  async terminate () {
    const request = this.#context.get('request')
    const response = this.#context.get('response')

    if (this.#resolvedAppModule?.terminate) {
      await this.#resolvedAppModule.terminate()
    }

    return Pipeline
      .create(this.#context.container)
      .send(request, response)
      .through(this.terminateMiddleware)
      .via('terminate')
      .thenReturn()
  }

  skipMiddleware () {
    return this.#context.get('http.skip_middleware', false)
  }

  async _sendRequestThroughDestination (request) {
    if (!request) {
      throw new RuntimeException('No Request provided.')
    }

    this.#context.registerInstance(Request, request, ['request'])
    this.#context.registerInstance('originalRequest', request.clone())

    await this.#bootstrap()

    return Pipeline
      .create(this.#context.container)
      .send(request)
      .through(this.requestMiddleware)
      .then(v => this._prepareDestination(v))
  }

  async _prepareDestination (request) {
    if (this.#context.has('router')) {
      return this.router.dispatch(request)
    }

    const App = this.#context.appModule

    if (isFunction(App)) {
      this.#resolvedAppModule = isClass(App) ? new App(this.#context.container) : await App(this.#context.container)
      return this.#resolvedAppModule?.run ? this.#resolvedAppModule.run() : this.#resolvedAppModule
    }

    throw new LogicException('The app module must be a Class or a function')
  }

  async _afterRunning (resp) {
    const request = this.#context.get('request')
    const response = await Pipeline
      .create(this.#context.container)
      .send(request, resp)
      .through(this.responseMiddleware)
      .via('response')
      .then((_, res) => res)

    this
      .#context
      .registerInstance(Response, response, ['response'])
      .emit(RequestHandled, new RequestHandled(request, response))
      .emit('http.request.handled', new RequestHandled(request, response))

    return response
  }

  async _reportException (exception) {
    const handler = this.#context.get('exceptionHandler')
    if (handler) {
      await handler.report(exception)
    } else if (this.#context.isDebug()) {
      console.log(exception)
    }
    return this
  }

  async _renderException (exception) {
    const handler = this.#context.get('exceptionHandler')
    if (handler) { return handler.render(exception) }
    return exception
  }

  prepareResponse (request, response) {
    this.#context?.emit(Event.PREPARING_RESPONSE, new Event(Event.PREPARING_RESPONSE, this, { request, response }))

    response = response.skipPreparing ? response : this.#toResponse(request, response) // Skip prepare for frontend context

    this.#context?.emit(Event.RESPONSE_PREPARED, new Event(Event.RESPONSE_PREPARED, this, { request, response }))

    return response
  }

  #toResponse (request, response) {
    // if ([null, undefined].includes(response)) {
    //   response = Response.empty()
    // } else if (response.toResponse) {
    //   response = response.toResponse()
    // } else if (isString(response)) {
    //   response = Response.fromString(response)
    // } else if (['object', 'number', 'boolean'].includes(typeof response)) {
    //   response = Response.json(response)
    // }

    if (response.statusCode === Response.HTTP_NOT_MODIFIED) {
      response.setNotModified()
    }

    return response.prepare(request)
  }

  #bootstrap () {
    if (!this.#context.hasBeenBootstrapped) {
      return this.#context.bootstrapWith(this.bootstrappers)
    }
  }
}

import { Response } from './Response.mjs'

export class MetaResponse extends Response {
  #metadata

  constructor (content = null, status = 200, headers = {}, metadata = {}) {
    super(content, status, headers)

    this.#metadata = metadata
  }

  get metadata () {
    return this.#metadata
  }

  get decorators () {
    return this.metadata.decorators ?? {}
  }

  get RouteDecorator () {
    return this.decorators.route
  }
}

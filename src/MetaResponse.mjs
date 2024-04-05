import { Response } from './Response.mjs'

export class MetaResponse {
  #response
  #metadata

  constructor (response, metadata) {
    this.#response = response
    this.#metadata = metadata
  }

  getResponse () {
    return this.#response
  }

  getMetadata () {
    return this.#metadata ?? {}
  }

  getDecorators () {
    return this.getMetadata().decorators ?? {}
  }

  getRouteDecorator () {
    return this.getDecorators().route
  }

  getResponseDecorator () {
    return this.getDecorators().response
  }

  getStatus () {
    if (this.#response instanceof Response) {
      return this.#response.status
    } else {
      return this.getResponseDecorator()?.status
    }
  }

  getHeaders () {
    if (this.#response instanceof Response) {
      return this.#response.headers
    } else {
      return this.getResponseDecorator()?.headers
    }
  }

  getContent () {
    if (this.#response instanceof Response) {
      return this.#response.content
    } else {
      return this.#response
    }
  }

  toResponse () {
    return Response.create(this.getContent(), this.getStatus(), this.getHeaders())
  }
}

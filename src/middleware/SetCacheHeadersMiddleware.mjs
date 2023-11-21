import { BinaryFileResponse } from "../BinaryFileResponse.mjs"

/**
 * Class representing a SetCacheHeadersMiddleware.
 *
 * @author Mr. Stone <pierre.evens16@gmail.com>
 */
export class SetCacheHeadersMiddleware {
  #config

  constructor({ config }) {
    this.#config = config
  }
  
  response (request, response, next) {
    if (
      !request.isMethodCacheable() || 
      !response.content || 
      !(response instanceof BinaryFileResponse)
    ) {
      return next(request, response)
    }

    response
      .isNotModified(request)
      .setCache(this.#config.get('http.cache', {}))

    return next(request, response)
  }
}

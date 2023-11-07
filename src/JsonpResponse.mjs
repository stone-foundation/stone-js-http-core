import { JsonResponse } from './JsonResponse.mjs'
import { InvalidArgumentException } from './index.mjs'

export class JsonpResponse extends JsonResponse {
  #callback

  setCallback (callback) {
    this.#callback = callback
    return this
  }

  getCallback () {
    return this.#callback ?? this.request.query[this.app.get('http.jsonp.callback.name')]
  }

  setJson (jsonString) {
    this._data = jsonString

    let callback = this.getCallback()

    if (!callback) {
      throw new InvalidArgumentException('No callback provided.')
    }

    if (Array.isArray(callback)) {
      callback = callback.shift()
    }

    if (!this.hasHeader('Content-Type')) {
      this
        .setContentType('json')
        .setHeader('X-Content-Type-Options', 'nosniff')
    }

    if (typeof callback === 'string' && callback.length !== 0) {
      this.setContentType('javascript')

      callback = callback.replace(/[^[]\w$.]/g, '')

      if (jsonString === undefined) {
        jsonString = ''
      } else if (typeof jsonString === 'string') {
        jsonString = jsonString
          .replace(/\u2028/g, '\\u2028')
          .replace(/\u2029/g, '\\u2029')
      }

      // the /**/ is a specific security mitigation for "Rosetta Flash JSONP abuse"
      // the typeof check is just to reduce client error noise
      jsonString = `/**/ typeof ${callback} === 'function' && ${callback}(${jsonString});`
    }

    return this.setContent(jsonString)
  }
}

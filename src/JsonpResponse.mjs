import { isString } from '@stone-js/common'
import { JsonResponse } from './JsonResponse.mjs'

/**
 * Class representing a JsonpResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 * @credit https://github.com/expressjs/express/blob/master/lib/response.js
 */
export class JsonpResponse extends JsonResponse {
  #callback

  /**
   * Set callback.
   *
   * @param {(string|string[])} callback
   * @returns {this}
   */
  setCallback (callback) {
    this.#callback = callback
    return this
  }

  /**
   * Get callback.
   *
   * @returns {(string|string[])}
   */
  getCallback () {
    return this.#callback ?? this.incomingEvent.query[this.config.get('app.http.jsonp.callback.name')]
  }

  /**
   * Make Json response.
   *
   * @returns {this}
   */
  _makeJson () {
    let callback = this.getCallback()

    if (!callback) {
      throw new TypeError('No callback provided.')
    }

    if (Array.isArray(callback)) {
      callback = callback.shift()
    }

    if (!this.hasHeader('Content-Type')) {
      this
        .setContentType('json')
        .setHeader('X-Content-Type-Options', 'nosniff')
    }

    if (!isString(this.content)) {
      this._content = this._morphToJson(this.content, this.config.get('app.http.json', {}))
    }

    if (isString(callback) && callback.length) {
      this
        .setContentType('javascript')
        .setHeader('X-Content-Type-Options', 'nosniff')

      callback = callback.replace(/[^[]\w$.]/g, '')

      if (isString(this.content)) {
        this._content = this.content
          .replace(/\u2028/g, '\\u2028')
          .replace(/\u2029/g, '\\u2029')
      }

      // the /**/ is a specific security mitigation for "Rosetta Flash JSONP abuse"
      // the typeof check is just to reduce client error noise
      this._content = `/**/ typeof ${callback} === 'function' && ${callback}(${this.content});`
    }

    return this
  }
}

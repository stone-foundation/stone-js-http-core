import { escape } from 'lodash-es'
import { Buffer } from 'safe-buffer'
import { OutgoingHttpResponse } from './OutgoingHttpResponse.mjs'

/**
 * Class representing a RedirectResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class RedirectResponse extends OutgoingHttpResponse {
  #targetUrl

  /**
   * Create a RedirectResponse.
   *
   * @param  {(string|URL)} url
   * @param  {number} [statusCode=302]
   * @param {(Object|Map|Headers)} [headers={}]
   */
  constructor (url, statusCode = 302, headers = {}) {
    super('', statusCode, headers)

    if (!this.isRedirect()) {
      throw new TypeError(`This HTTP status(${statusCode}) code is not a redirect.`)
    }

    if (this.isMovedPermanently() && !this.#hasCacheControl(headers)) {
      this.removeHeader('cache-control')
    }

    this.setTargetUrl(url)
  }

  /**
   * Set target url.
   *
   * @param   {(string|URL)} url
   * @returns {this}
   */
  setTargetUrl (url) {
    if (!url) {
      throw TypeError('Cannot redirect to an empty URL.')
    }

    this.#targetUrl = url

    return this.#redirect()
  }

  #redirect () {
    const url = escape(this.#location().getHeader('Location'))

    return this
      .format({
        default: () => '',
        text: () => `${this.statusMessage}. Redirecting to ${url}`,
        html: () => `<p>${this.statusMessage}. Redirecting to <a href="${url}">${url}</a></p>`
      })
      .setHeader('Content-Length', Buffer.byteLength(this._content))
  }

  #location () {
    if (this.#targetUrl === 'back') {
      this.#targetUrl = this.incomingEvent.getHeader('Referrer', '/')
    }

    const matches = /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?\/\/[^\\/?]+/.exec(this.#targetUrl)
    const position = matches ? matches[0].length + 1 : 0

    return this.setHeader('Location', `${this.#targetUrl.slice(0, position)}${encodeURIComponent(this.#targetUrl.slice(position))}`)
  }

  #hasCacheControl (headers) {
    return Object.keys(headers).map(v => v.toLowerCase()).includes('cache-control')
  }
}

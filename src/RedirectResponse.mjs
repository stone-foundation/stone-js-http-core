import escape from 'lodash/escape'
import { Buffer } from 'safe-buffer'
import { OutgoingHttpResponse } from './OutgoingHttpResponse.mjs'
import { LogicError } from '@stone-js/common'

export class RedirectResponse extends OutgoingHttpResponse {
  #targetUrl

  constructor (url, status = 302, headers = {}) {
    super('', status, headers)

    if (!this.isRedirect()) {
      throw new LogicError(`This HTTP status(${status}) code is not a redirect.`)
    }

    if (this.isMovedPermanently() && !this.#hasCacheControl(headers)) {
      this.removeHeader('cache-control')
    }

    this.setTargetUrl(url)
  }

  setTargetUrl (url) {
    if (!url) {
      throw LogicError('Cannot redirect to an empty URL.')
    }

    this.#targetUrl = url

    return this.#redirect()
  }

  isMovedPermanently () {
    return [OutgoingHttpResponse.HTTP_MOVED_PERMANENTLY].includes(this._statusCode)
  }

  #redirect () {
    const url = escape(this.#location().getHeader('Location'))

    return this
      .format({
        default: () => '',
        text: () => `${this.statusMessage}. Redirecting to ${this.#targetUrl}`,
        html: () => `<p>${this.statusMessage}. Redirecting to <a href="${url}">${url}</a></p>`
      })
      .setHeader('Content-Length', Buffer.byteLength(this._content))
  }

  #location () {
    if (this.#targetUrl === 'back') {
      this.#targetUrl = this.request.getHeader('Referrer') ?? '/'
    }

    return this.setHeader('Location', encodeURIComponent(this.#targetUrl))
  }

  #hasCacheControl (headers) {
    return Object.keys(headers).map(v => v.toLowerCase()).includes('cache-control')
  }
}

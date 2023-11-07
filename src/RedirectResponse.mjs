import encodeUrl from 'encodeUrl'
import escapeHtml from 'escapeHtml'
import { Buffer } from 'safe-buffer'
import { Response } from './Response.mjs'
import { InvalidArgumentException } from './index.mjs'

export class RedirectResponse extends Response {
  #targetUrl

  constructor (url, status = 302, headers = {}) {
    super('', status, headers)

    if (!this.isRedirect()) {
      throw new InvalidArgumentException(`This HTTP status(${status}) code is not a redirect.`)
    }

    if (this.isMovedPermanently() && !this.#hasCacheControl(headers)) {
      this.removeHeader('cache-control')
    }

    this.setTargetUrl(url)
  }

  setTargetUrl (url) {
    if (!url) {
      throw InvalidArgumentException('Cannot redirect to an empty URL.')
    }

    this.#targetUrl = url

    return this.#redirect()
  }

  isMovedPermanently () {
    return [Response.HTTP_MOVED_PERMANENTLY].includes(this._statusCode)
  }

  #redirect () {
    const url = escapeHtml(this.#location().getHeader('Location'))

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

    return this.setHeader('Location', encodeUrl(this.#targetUrl))
  }

  #hasCacheControl (headers) {
    return Object.keys(headers).map(v => v.toLowerCase()).includes('cache-control')
  }
}

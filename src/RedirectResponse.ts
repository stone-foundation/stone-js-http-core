import { escape } from 'lodash-es'
import { Buffer } from 'safe-buffer'
import { HttpError } from './errors/HttpError'
import { Container } from '@stone-js/service-container'
import { IncomingHttpEvent } from './IncomingHttpEvent'
import { OutgoingHttpResponse, OutgoingHttpResponseOptions } from './OutgoingHttpResponse'

/**
 * Options for creating a Redirect HTTP Response.
 */
export interface RedirectResponseOptions extends OutgoingHttpResponseOptions {
  url: string | URL
}

/**
 * Class representing a RedirectResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class RedirectResponse extends OutgoingHttpResponse {
  private targetUrl?: string | URL

  /**
   * Create a RedirectResponse.
   *
   * @param options - Options for creating the RedirectResponse.
   * @throws HttpError if the status code is not a redirect code.
   */
  constructor (options: RedirectResponseOptions) {
    super(options)

    if (!this.isRedirect()) {
      throw new HttpError(`This HTTP status(${String(this.status)}) code is not a redirect.`)
    }

    if (this.isMovedPermanently() && !this.hasCacheControl()) {
      this.setHeader('Cache-Control', 'public, max-age=31536000')
    }

    this.setTargetUrl(options.url ?? (options.content as any)?.redirect ?? options.content)
  }

  /**
   * Set target URL.
   *
   * @param url - The target URL to set.
   * @returns The current instance for method chaining.
   * @throws HttpError if the URL is empty.
   */
  setTargetUrl (url: string | URL): this {
    if (url === undefined) { throw new HttpError('Cannot redirect to an empty URL.') }
    this.targetUrl = url
    return this
  }

  /**
   * Prepare the response before sending.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   * @returns The current instance of the response for chaining.
   */
  async prepare (event: IncomingHttpEvent, container?: Container): Promise<this> {
    this.setIncomingEventResolver(() => event)
    this.prepareRedirection()
    await super.prepare(event, container)
    return this
  }

  /**
   * Prepare the redirection.
   *
   * @returns The current instance for method chaining.
   */
  private prepareRedirection (): this {
    const url = escape(this.location().getHeader('Location', '/'))

    return this
      .format({
        default: () => '',
        text: () => `${String(this.statusMessage)}. Redirecting to ${url}`,
        html: () => `<p>${String(this.statusMessage)}. Redirecting to <a href="${url}">${url}</a></p>`
      })
      .setHeader('Content-Length', Buffer.byteLength(String(this.content)).toString())
  }

  /**
   * Set the Location header for the response.
   *
   * @returns The current instance for method chaining.
   */
  private location (): this {
    if (this.targetUrl === 'back') {
      this.targetUrl = this.incomingEvent.getHeader('Referrer', '/')
    }

    const matches = /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?\/\/[^\\/?]+/.exec(String(this.targetUrl))
    const position = (matches !== null) ? matches[0].length + 1 : 0

    return this.setHeader('Location', `${String(this.targetUrl).slice(0, position)}${encodeURIComponent(String(this.targetUrl).slice(position))}`)
  }

  /**
   * Check if the headers include Cache-Control.
   *
   * @returns True if Cache-Control is present, otherwise false.
   */
  private hasCacheControl (): boolean {
    return this.getHeaderNames().map((v) => v.toLowerCase()).includes('cache-control')
  }
}

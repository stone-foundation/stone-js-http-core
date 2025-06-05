import { escape } from 'lodash-es'
import { Buffer } from 'safe-buffer'
import { IContainer } from '@stone-js/core'
import { HttpError } from './errors/HttpError'
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
  static readonly OUTGOING_HTTP_RESPONSE = 'stonejs@outgoing_http_redirect_response'
  private targetUrl?: string | URL

  /**
   * Create an instance of RedirectResponse from the given path or URL.
   *
   * @param url - The path or URL to redirect to. If a string is provided, it will be treated as a relative path.
   * @param statusCode - The HTTP status code for the redirect (default is 302).
   * @returns A new instance of RedirectResponse.
   */
  static to (url: string | URL, statusCode: number = 302): RedirectResponse {
    return new RedirectResponse({ url, statusCode })
  }

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
  async prepare (event: IncomingHttpEvent, container?: IContainer): Promise<this> {
    this.setIncomingEventResolver(() => event)
    this.prepareRedirection()
    await super.prepare(event, container)
    return this.setPrepared(true)
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
    return this.setHeader('Location', String(this.targetUrl))
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

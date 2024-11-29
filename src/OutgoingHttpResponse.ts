
import vary from 'vary'
import { mime } from 'send'
import statuses from 'statuses'
import { Buffer } from 'safe-buffer'
import { HttpError } from './errors/HttpError'
import { createHash, Encoding } from 'node:crypto'
import { IncomingHttpEvent } from './IncomingHttpEvent'
import { CookieCollection } from './cookies/CookieCollection'
import { HeadersType, IOutgoingHttpResponse } from './declarations'
import { CookieOptions, HttpJsonConfig } from './options/HttpConfig'
import { HTTP_NOT_ACCEPTABLE, HTTP_NOT_MODIFIED } from './constants'
import { IBlueprint, OutgoingResponse, OutgoingResponseOptions } from '@stone-js/core'

/**
 * Options for creating an Outgoing HTTP Response.
 */
export interface OutgoingHttpResponseOptions extends OutgoingResponseOptions {
  headers?: HeadersType
}

/**
 * Class representing an Outgoing HTTP Response.
 * Extends the OutgoingResponse class and provides additional features
 * such as setting headers, cookies, and interacting with IncomingHttpEvent.
 */
export class OutgoingHttpResponse extends OutgoingResponse implements IOutgoingHttpResponse {
  static OUTGOING_HTTP_RESPONSE = 'stonejs@outgoing_http_response'

  protected _charset?: Encoding
  protected _blueprintResolver?: () => IBlueprint | undefined
  protected _incomingEventResolver?: () => IncomingHttpEvent

  protected readonly _headers: Headers
  protected readonly _cookieCollection: CookieCollection

  /**
   * Create an instance of OutgoingHttpResponse.
   *
   * @param options - Options for the outgoing HTTP response.
   * @returns A new instance of OutgoingHttpResponse.
   */
  static create<T extends OutgoingHttpResponse = OutgoingHttpResponse>(options: OutgoingHttpResponseOptions): T {
    return new this(options) as T
  }

  /**
   * Constructor for OutgoingHttpResponse.
   * Initializes headers and cookies based on the provided options.
   *
   * @param options - Options for the outgoing HTTP response.
   */
  constructor (options: OutgoingHttpResponseOptions) {
    super(options)
    this._headers = new Headers()
    this._cookieCollection = CookieCollection.create()

    this.setHeaders(options.headers ?? {})
  }

  /**
   * Get the HTTP status code.
   *
   * @returns The HTTP status code.
   */
  get status (): number | undefined {
    return this.statusCode
  }

  /**
   * Get the headers of the response.
   *
   * @returns The headers of the response as a Headers object.
   */
  get headers (): Headers {
    return this._headers
  }

  /**
   * Get the character set encoding.
   * Defaults to 'utf-8' if not explicitly set.
   *
   * @returns The character set encoding.
   */
  get charset (): Encoding {
    return this._charset ?? 'utf-8'
  }

  /**
   * Get the ETag of the response.
   *
   * @returns The value of the ETag header, if present.
   */
  get etag (): string | undefined {
    return this.getHeader('ETag')
  }

  /**
   * Get the Vary header as an array of values.
   *
   * @returns The Vary header values split by comma, or undefined if not present.
   */
  get vary (): string[] | undefined {
    return this.getHeader('Vary', '')?.split(/[\s,]+/)
  }

  /**
   * Get the Last-Modified date of the response.
   *
   * @returns The value of the Last-Modified header, if present.
   */
  get lastModified (): string | undefined {
    return this.getHeader('Last-Modified')
  }

  /**
   * Get the associated IncomingHttpEvent.
   *
   * @throws Error if the IncomingHttpEvent resolver is not set.
   * @returns The associated IncomingHttpEvent.
   */
  get incomingEvent (): IncomingHttpEvent {
    if (this._incomingEventResolver === undefined) {
      throw new Error('Must set an IncomingHttpEvent resolver.')
    }
    return this._incomingEventResolver()
  }

  /**
   * Get the blueprint associated with the response.
   *
   * @returns The blueprint or undefined if not set.
   */
  get blueprint (): IBlueprint | undefined {
    return this._blueprintResolver?.()
  }

  /**
   * Get the regular expression for matching charset in content type.
   *
   * @protected
   * @returns The regular expression for matching charset in content type.
   */
  protected get charsetRegExp (): RegExp {
    return /;\s*charset\s*=/
  }

  /**
   * Set multiple headers for the response.
   *
   * @param values - A key-value pair of headers to be set.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setHeaders (values: HeadersType): this {
    const headers = values instanceof Headers || values instanceof Map ? values.entries() : Object.entries(values)
    headers.forEach(([key, value]) => this.setHeader(key, value))
    return this
  }

  /**
   * Set a single header for the response.
   * If the header is "Content-Type," ensures charset is set appropriately.
   *
   * @param key - The header name.
   * @param value - The value of the header.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setHeader (key: string, value: string | string[]): this {
    if (Array.isArray(value)) {
      value.forEach((v) => this.appendHeader(key, v))
    } else if (key.toLowerCase() === 'content-type') {
      this.ensureCharset(value)
    } else {
      this._headers.set(key, value)
    }
    return this
  }

  /**
   * Append a value to an existing header or create a new header.
   *
   * @param key - The header name.
   * @param value - The value to append.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  appendHeader (key: string, value: string): this {
    const existingValue = this._headers.get(key)
    if (existingValue !== null) {
      this._headers.set(key, `${existingValue}, ${value}`)
    } else {
      this._headers.set(key, value)
    }
    return this
  }

  /**
   * Get all headers of the response.
   *
   * @param asMap - Whether to return the headers as a Map.
   * @returns The headers as a Headers instance or a Map.
   */
  getHeaders (asMap: boolean = false): Headers | Map<string, string> {
    return asMap ? new Map(this._headers.entries()) : this._headers
  }

  /**
   * Get a specific header by name.
   *
   * @param key - The header name.
   * @param fallback - A fallback value if the header does not exist.
   * @returns The value of the header or the fallback value.
   */
  getHeader (key: string, fallback?: string): string | undefined {
    return this._headers.get(key) ?? fallback
  }

  /**
   * Get all header names.
   *
   * @returns An array of all header names.
   */
  getHeaderNames (): string[] {
    return Array.from(this._headers.keys())
  }

  /**
   * Check if a specific header exists.
   *
   * @param key - The header name to check.
   * @returns True if the header exists, false otherwise.
   */
  hasHeader (key: string): boolean {
    return this._headers.has(key)
  }

  /**
   * Remove headers from the response.
   *
   * @param key - The header or headers to be removed.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  removeHeader (key: string | string[]): this {
    ([] as string[]).concat(key).forEach((header) => this._headers.delete(header))
    return this
  }

  /**
   * Set the HTTP status code of the response.
   * Also sets a default status message if none is provided.
   *
   * @param code - The HTTP status code.
   * @param text - Optional status message.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   * @throws HttpError if the status code is invalid.
   */
  setStatus (code: number, text?: string): this {
    if (code < 100 || code >= 600) {
      throw new HttpError(`The HTTP status code "${code}" is not valid.`)
    }
    this._statusCode = code
    this._statusMessage = text ?? statuses.message[code] ?? 'unknown status'
    return this
  }

  /**
   * Set the response content.
   * If the content should be JSON, it will be converted appropriately.
   *
   * @param value - The content to set.
   * @param options - The JSON options.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setContent (value: unknown, options: Partial<HttpJsonConfig> = {}): this {
    this._content = this.shouldBeJson(value) ? this.morphToJson(value, options) : value ?? ''
    return this
  }

  /**
   * Set a cookie for the response.
   *
   * @param name - The name of the cookie.
   * @param value - The value of the cookie.
   * @param options - Optional settings for the cookie.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setCookie (name: string, value: unknown, options: CookieOptions = {}): this {
    if (typeof name !== 'string') { throw new HttpError('Cookie name must be a non-empty string.') }
    this._cookieCollection.add(name, value, options)
    return this
  }

  /**
   * Clear a specific cookie from the response.
   *
   * @param name - The name of the cookie to be cleared.
   * @param force - Whether to force the removal of the cookie, even if it doesn't exist.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  clearCookie (name: string, force = false): this {
    if (typeof name !== 'string') { throw new HttpError('Cookie name must be a non-empty string.') }
    this._cookieCollection.remove(name, force)
    return this
  }

  /**
   * Clear all cookies from the response.
   *
   * @param force - Whether to force the removal of all cookies.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  clearCookies (force = false): this {
    this._cookieCollection.clear(force)
    return this
  }

  /**
   * Secure all cookies by setting the "Secure" attribute.
   *
   * @param value - Whether to set or unset the "Secure" attribute for cookies.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  secureCookies (value = true): this {
    this._cookieCollection.secure(value)
    return this
  }

  /**
   * Set the character set for the response.
   *
   * @param value - The character encoding to use.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setCharset (value: string): this {
    this._charset = value as BufferEncoding
    return this
  }

  /**
   * Set the content type of the response.
   *
   * @param value - The MIME type for the response.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   * @throws Error if the provided MIME type is invalid.
   */
  setContentType (value: string): this {
    const mimeType = value.includes('/') ? value : mime.lookup(value)
    if (mimeType !== undefined) {
      return this.setHeader('Content-Type', mimeType)
    } else {
      throw new Error(`Invalid MIME type: ${value}`)
    }
  }

  /**
   * Set the content type by file extension.
   *
   * @param value - The file extension.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setType (value: string): this {
    return this.setContentType(value)
  }

  /**
   * Set link headers for the response.
   *
   * @param links - An object representing links to set.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setLinks (links: Record<string, string>): this {
    const linkHeader = Object.entries(links)
      .map(([key, val]) => `<${val}>; rel="${key}"`)
      .join(', ')
    return this.setHeader('Link', linkHeader)
  }

  /**
   * Handles content negotiation based on the `Accept` header of the incoming request.
   *
   * @param formats - An object where keys are MIME types and values are functions that return the content for that MIME type.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  format (formats: Record<string, () => unknown>): this {
    const types = Object.keys(formats).filter(v => v !== 'default')
    const type = types.length > 0 ? this.incomingEvent.acceptsTypes(...types) : undefined

    if (typeof type === 'string' && formats[type] !== undefined) {
      this.setContentType(type).setContent(formats[type]())
    } else if (formats.default !== undefined) {
      this.setContent(formats.default())
    } else {
      this.setStatus(HTTP_NOT_ACCEPTABLE).setContent(`Invalid types (${types.join(',')})`)
    }

    return this.addVary('Accept')
  }

  /**
   * Add a field to the Vary header.
   *
   * @param field - The field to add to the Vary header.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  addVary (field: string | string[]): this {
    vary(this as any, field)
    return this
  }

  /**
   * Set the ETag for the response.
   *
   * @param etag - The ETag value to set.
   * @param weak - Whether the ETag should be marked as weak.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setEtag (etag?: string, weak = false): this {
    if (etag === undefined) {
      this.removeHeader('ETag')
    } else {
      const formattedEtag = etag.startsWith('"') ? etag : `"${etag}"`
      this.setHeader('ETag', `${weak ? 'W/' : ''}${formattedEtag}`)
    }
    return this
  }

  /**
   * Set the Last-Modified header for the response.
   *
   * @param date - The date to set as the Last-Modified header.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setLastModified (date?: Date): this {
    if (date === undefined) {
      this.removeHeader('Last-Modified')
    } else {
      this.setHeader('Last-Modified', date.toUTCString())
    }
    return this
  }

  /**
   * Set the resolver for the incoming HTTP event.
   *
   * @param resolver - A function that returns the incoming HTTP event.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setIncomingEventResolver (resolver: () => IncomingHttpEvent): this {
    this._incomingEventResolver = resolver
    return this
  }

  /**
   * Set the resolver for the blueprint.
   *
   * @param resolver - A function that returns the blueprint.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  setBlueprintResolver (resolver: () => IBlueprint | undefined): this {
    this._blueprintResolver = resolver
    return this
  }

  /**
   * Check if the status code is invalid.
   *
   * @returns True if the status code is invalid, otherwise false.
   */
  isInvalid (): boolean {
    const code = this.statusCode ?? 500
    return code < 100 || code >= 600
  }

  /**
   * Check if the status code represents an informational response.
   *
   * @returns True if the status code is informational, otherwise false.
   */
  isInformational (): boolean {
    const code = this.statusCode ?? 500
    return code >= 100 && code < 200
  }

  /**
   * Check if the status code represents a successful response.
   *
   * @returns True if the status code is successful, otherwise false.
   */
  isSuccessful (): boolean {
    const code = this.statusCode ?? 500
    return code >= 200 && code < 300
  }

  /**
   * Check if the status code is 200 (OK).
   *
   * @returns True if the status code is 200, otherwise false.
   */
  isOk (): boolean {
    return this.statusCode === 200
  }

  /**
   * Check if the status code is 205 (Reset Content).
   *
   * @returns True if the status code is 205, otherwise false.
   */
  isResetContent (): boolean {
    return this.statusCode === 205
  }

  /**
   * Check if the response is empty.
   *
   * @returns True if the status code indicates an empty response, otherwise false.
   */
  isEmpty (): boolean {
    return [204, 304].includes(this.statusCode ?? 500)
  }

  /**
   * Check if the status code represents a redirection.
   *
   * @returns True if the status code is a redirection, otherwise false.
   */
  isRedirection (): boolean {
    const code = this.statusCode ?? 500
    return code >= 300 && code < 400
  }

  /**
   * Check if the response is a redirect.
   *
   * @param location - The optional location to check for redirection.
   * @returns True if the status code indicates a redirect, otherwise false.
   */
  isRedirect (location?: string): boolean {
    const code = this.statusCode ?? 500
    return [301, 302, 303, 307, 308].includes(code) && (location === undefined || this.getHeader('Location') === undefined)
  }

  /**
   * Check if the status code is 301 (Moved Permanently).
   *
   * @returns True if the status code is 301, otherwise false.
   */
  isMovedPermanently (): boolean {
    return this.statusCode === 301
  }

  /**
   * Check if the status code represents a client error.
   *
   * @returns True if the status code is a client error, otherwise false.
   */
  isClientError (): boolean {
    const code = this.statusCode ?? 500
    return code >= 400 && code < 500
  }

  /**
   * Check if the status code is 401 (Unauthorized).
   *
   * @returns True if the status code is 401, otherwise false.
   */
  isUnauthorized (): boolean {
    return this.statusCode === 401
  }

  /**
   * Check if the status code is 403 (Forbidden).
   *
   * @returns True if the status code is 403, otherwise false.
   */
  isForbidden (): boolean {
    return this.statusCode === 403
  }

  /**
   * Check if the status code is 404 (Not Found).
   *
   * @returns True if the status code is 404, otherwise false.
   */
  isNotFound (): boolean {
    return this.statusCode === 404
  }

  /**
   * Check if the status code represents a server error.
   *
   * @returns True if the status code is a server error, otherwise false.
   */
  isServerError (): boolean {
    const code = this.statusCode ?? 500
    return code >= 500 && code < 600
  }

  /**
   * Check if the response is validateable.
   *
   * @returns True if the response has Last-Modified or ETag headers, otherwise false.
   */
  isValidateable (): boolean {
    return this.hasHeader('Last-Modified') || this.hasHeader('ETag')
  }

  /**
   * Prepare the response before sending.
   *
   * @param event - The incoming HTTP event.
   * @param blueprint - Optional blueprint settings for the response.
   * @returns The current instance of the response for chaining.
   */
  prepare (event: IncomingHttpEvent, blueprint?: IBlueprint): this {
    return this
      .setBlueprintResolver(() => blueprint)
      .setIncomingEventResolver(() => event)
      .prepareCookies()
      .setContentTypeIfNeeded()
      .handleCacheHeaders()
      .prepareContentHeaders()
  }

  /**
   * Set the content type if it's not already set.
   *
   * @returns The current instance of the response for chaining.
   */
  protected setContentTypeIfNeeded (): this {
    if (!this.hasHeader('Content-Type')) {
      switch (typeof this.content) {
        case 'string':
          this.setContentType('html')
          break
        case 'object':
        case 'number':
        case 'boolean':
          if (Buffer.isBuffer(this.content)) {
            this.setContentType('bin')
          } else {
            this.setContentType('json')
            this.setContent(this.content, this.blueprint?.get('stone.http.json', {}))
          }
          break
      }
    }
    return this
  }

  /**
   * Handle cache headers like ETag and Last-Modified.
   *
   * @returns The current instance of the response for chaining.
   */
  protected handleCacheHeaders (): this {
    if (this.incomingEvent.isFresh(this)) {
      this.setStatus(HTTP_NOT_MODIFIED)
    }
    return this
  }

  /**
   * Prepare content-related headers such as Content-Length and ETag.
   *
   * @returns The current instance of the response for chaining.
   */
  protected prepareContentHeaders (): this {
    if (this.isInformational() || this.isEmpty()) {
      this.setContent(undefined).removeHeader(['Content-Type', 'Content-Length', 'Transfer-Encoding'])
    } else if (this.isResetContent()) {
      this.setContent(undefined).setHeader('Content-Length', '0').removeHeader('Transfer-Encoding')
    } else {
      this.setContentHeaders()
    }
    return this
  }

  /**
   * Set content headers such as Content-Length and ETag.
   *
   * @returns The current instance of the response for chaining.
   */
  protected setContentHeaders (): this {
    let length = 0
    const type = this.getHeader('Content-Type')
    const etagFn = this.blueprint?.get('stone.http.etag.function', this.defaultEtagFn.bind(this))
    const generateETag = !this.hasHeader('ETag') && typeof etagFn === 'function'

    if (typeof this.content === 'string' && typeof type === 'string' && !this.charsetRegExp.test(type)) {
      this.setContentType(`${type}; charset=${String(this.charset)}`)
    }

    if (this.content !== undefined) {
      length = this.calculateContentLength(generateETag)
      this.setHeader('Content-Length', String(length))
    }

    if (generateETag && length > 0 && typeof this.content === 'string') {
      this.setEtag(etagFn(this.content, this.charset))
    }

    if (this.hasHeader('Transfer-Encoding')) {
      this.removeHeader('Content-Length')
    }

    if (this.incomingEvent.isMethod('HEAD')) {
      this.setContent(null)
    }
    return this
  }

  /**
   * Calculate the content length.
   *
   * @param generateETag - Whether to generate an ETag for the content.
   * @returns The content length.
   */
  protected calculateContentLength (generateETag: boolean): number {
    if (Buffer.isBuffer(this.content)) {
      return this.content.length
    } else if (!generateETag && typeof this.content === 'string' && this.content.length < 1000) {
      return Buffer.byteLength(this.content, this.charset)
    } else {
      this._content = Buffer.from(String(this.content), this.charset)
      this._charset = undefined
      return String(this.content).length
    }
  }

  /**
   * Ensure that the "Content-Type" header has a charset specified.
   *
   * @param value - The "Content-Type" header value.
   * @returns The current instance of OutgoingHttpResponse for chaining.
   */
  protected ensureCharset (value: string): this {
    if (!this.charsetRegExp.test(value)) {
      const type = value.split(';').shift() ?? 'text/html'
      this
        .setCharset(mime.charsets.lookup(type.trim(), 'UTF-8'))
        .setContentType(this.charset !== undefined ? `${type}; charset=${this.charset.toLowerCase()}` : value)
    }

    return this
  }

  /**
   * Determine if the content should be serialized as JSON.
   *
   * @param content - The content to check.
   * @returns True if the content should be serialized as JSON, otherwise false.
   */
  protected shouldBeJson (content: unknown): boolean {
    return !Buffer.isBuffer(content) && ['object', 'number', 'boolean'].includes(typeof content)
  }

  /**
   * Convert the given content to a JSON string.
   *
   * @param content - The content to convert.
   * @param options - Options to customize the serialization process.
   * @returns A JSON string representation of the content.
   * @throws HttpError if the content cannot be converted to JSON.
   */
  protected morphToJson (content: unknown, options: Partial<HttpJsonConfig> = {}): string {
    try {
      return this.stringify(content, options.replacer, options.spaces, options.escape)
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new HttpError(error.message, { cause: error })
      }
      throw new HttpError('Unknown error occurred during JSON serialization.')
    }
  }

  /**
   * Prepare cookies by setting the appropriate headers.
   *
   * @returns The current instance of the response for chaining.
   */
  protected prepareCookies (): this {
    if (!this._cookieCollection.isEmpty()) {
      this._cookieCollection
        .setSecret(this.blueprint?.get('stone.secret') ?? '')
        .setOptions(this.blueprint?.get('stone.http.cookie.options') ?? {})

      if (this.incomingEvent.isSecure) {
        this.secureCookies(true)
      }

      this.setHeader('Set-Cookie', this._cookieCollection.all(true))
    }

    return this
  }

  /**
   * Generate a default ETag for the given content.
   *
   * @param content - The content to generate an ETag for.
   * @param encoding - The encoding to use.
   * @returns The generated ETag as a base64 string.
   */
  protected defaultEtagFn (content: string, encoding: Encoding): string {
    return Buffer.from(this.getHashedContent(content, encoding)).toString('base64')
  }

  /**
   * Get the hashed content using the specified encoding.
   *
   * @param content - The content to hash.
   * @param encoding - The encoding to use for hashing.
   * @returns The hashed content as a hexadecimal string.
   */
  protected getHashedContent (content: string, encoding: Encoding): string {
    return createHash('sha256').update(content, encoding).digest('hex')
  }

  /**
   * Convert the given value to a JSON string with optional escaping.
   *
   * @param value - The value to convert.
   * @param replacer - A function or array that alters the behavior of the stringification process.
   * @param spaces - The number of spaces to use for pretty-printing the JSON string.
   * @param escape - Whether to escape special characters.
   * @returns The JSON string representation of the value.
   */
  protected stringify (
    value: unknown,
    replacer?: HttpJsonConfig['replacer'],
    spaces?: string,
    escape?: boolean
  ): string {
    const json = JSON.stringify(value, replacer, spaces)

    if (escape === true) {
      return json.replace(/[<>&]/g, (c) => {
        return { '<': '\u003c', '>': '\u003e', '&': '\u0026' }[c] ?? c
      })
    }

    return json
  }
}

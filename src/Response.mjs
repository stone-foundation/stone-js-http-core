import { HttpResponseException } from './exceptions/HttpResponseException.mjs'
import { InvalidArgumentException } from './exceptions/InvalidArgumentException.mjs'

/**
 * InspiredBy: Symfony and Laravel
 * @see: https://github.com/symfony/symfony/blob/6.4/src/Symfony/Component/HttpFoundation/Response.php
 */
export class Response {
  static HTTP_CONTINUE = 100
  static HTTP_SWITCHING_PROTOCOLS = 101
  static HTTP_PROCESSING = 102 // RFC2518
  static HTTP_EARLY_HINTS = 103 // RFC8297
  static HTTP_OK = 200
  static HTTP_CREATED = 201
  static HTTP_ACCEPTED = 202
  static HTTP_NON_AUTHORITATIVE_INFORMATION = 203
  static HTTP_NO_CONTENT = 204
  static HTTP_RESET_CONTENT = 205
  static HTTP_PARTIAL_CONTENT = 206
  static HTTP_MULTI_STATUS = 207 // RFC4918
  static HTTP_ALREADY_REPORTED = 208 // RFC5842
  static HTTP_IM_USED = 226 // RFC3229
  static HTTP_MULTIPLE_CHOICES = 300
  static HTTP_MOVED_PERMANENTLY = 301
  static HTTP_FOUND = 302
  static HTTP_SEE_OTHER = 303
  static HTTP_NOT_MODIFIED = 304
  static HTTP_USE_PROXY = 305
  static HTTP_RESERVED = 306
  static HTTP_TEMPORARY_REDIRECT = 307
  static HTTP_PERMANENTLY_REDIRECT = 308 // RFC7238
  static HTTP_BAD_REQUEST = 400
  static HTTP_UNAUTHORIZED = 401
  static HTTP_PAYMENT_REQUIRED = 402
  static HTTP_FORBIDDEN = 403
  static HTTP_NOT_FOUND = 404
  static HTTP_METHOD_NOT_ALLOWED = 405
  static HTTP_NOT_ACCEPTABLE = 406
  static HTTP_PROXY_AUTHENTICATION_REQUIRED = 407
  static HTTP_REQUEST_TIMEOUT = 408
  static HTTP_CONFLICT = 409
  static HTTP_GONE = 410
  static HTTP_LENGTH_REQUIRED = 411
  static HTTP_PRECONDITION_FAILED = 412
  static HTTP_REQUEST_ENTITY_TOO_LARGE = 413
  static HTTP_REQUEST_URI_TOO_LONG = 414
  static HTTP_UNSUPPORTED_MEDIA_TYPE = 415
  static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416
  static HTTP_EXPECTATION_FAILED = 417
  static HTTP_I_AM_A_TEAPOT = 418 // RFC2324
  static HTTP_MISDIRECTED_REQUEST = 421 // RFC7540
  static HTTP_UNPROCESSABLE_ENTITY = 422 // RFC4918
  static HTTP_LOCKED = 423 // RFC4918
  static HTTP_FAILED_DEPENDENCY = 424 // RFC4918
  static HTTP_TOO_EARLY = 425 // RFC-ietf-httpbis-replay-04
  static HTTP_UPGRADE_REQUIRED = 426 // RFC2817
  static HTTP_PRECONDITION_REQUIRED = 428 // RFC6585
  static HTTP_TOO_MANY_REQUESTS = 429 // RFC6585
  static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431 // RFC6585
  static HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451 // RFC7725
  static HTTP_INTERNAL_SERVER_ERROR = 500
  static HTTP_NOT_IMPLEMENTED = 501
  static HTTP_BAD_GATEWAY = 502
  static HTTP_SERVICE_UNAVAILABLE = 503
  static HTTP_GATEWAY_TIMEOUT = 504
  static HTTP_VERSION_NOT_SUPPORTED = 505
  static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506 // RFC2295
  static HTTP_INSUFFICIENT_STORAGE = 507 // RFC4918
  static HTTP_LOOP_DETECTED = 508 // RFC5842
  static HTTP_NOT_EXTENDED = 510 // RFC2774
  static HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511 // RFC6585

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
   */
  static #HTTP_RESPONSE_CACHE_CONTROL_DIRECTIVES = {
    must_revalidate: false,
    no_cache: false,
    no_store: false,
    no_transform: false,
    public: false,
    private: false,
    proxy_revalidate: false,
    max_age: true,
    s_maxage: true,
    stale_if_error: true, // RFC5861
    stale_while_revalidate: true, // RFC5861
    immutable: false,
    last_modified: true,
    etag: true
  }

  static STATUS_TEXTS = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing', // RFC2518
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status', // RFC4918
    208: 'Already Reported', // RFC5842
    226: 'IM Used', // RFC3229
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect', // RFC7238
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Content Too Large', // RFC-ietf-httpbis-semantics
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot', // RFC2324
    421: 'Misdirected Request', // RFC7540
    422: 'Unprocessable Content', // RFC-ietf-httpbis-semantics
    423: 'Locked', // RFC4918
    424: 'Failed Dependency', // RFC4918
    425: 'Too Early', // RFC-ietf-httpbis-replay-04
    426: 'Upgrade Required', // RFC2817
    428: 'Precondition Required', // RFC6585
    429: 'Too Many Requests', // RFC6585
    431: 'Request Header Fields Too Large', // RFC6585
    451: 'Unavailable For Legal Reasons', // RFC7725
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates', // RFC2295
    507: 'Insufficient Storage', // RFC4918
    508: 'Loop Detected', // RFC5842
    510: 'Not Extended', // RFC2774
    511: 'Network Authentication Required' // RFC6585
  }

  _headers
  _content
  _version
  _charset
  _exception
  _statusCode
  _statusText
  #originalContent
  #headerCacheControl

  constructor (content = '', status = 200, headers = {}) {
    this
      .setHeaders(headers)
      .setContent(content)
      .setStatusCode(status)
      .setProtocolVersion('1.0')
  }

  get status () {
    return this.statusCode
  }

  get headers () {
    return this._headers
  }

  setHeaders (headers) {
    this._headers = new Map(Object.entries(headers ?? {}))
    return this
  }

  get statusText () {
    return this._statusText
  }

  get statusCode () {
    return this._statusCode
  }

  setStatusCode (code, text = null) {
    this._statusCode = code

    if (this.isInvalid()) {
      throw new InvalidArgumentException(`The HTTP status code "${code}" is not valid.`)
    }

    if (text === null) {
      this._statusText = Response.STATUS_TEXTS[code] ?? 'unknown status'
    } else {
      this._statusText = text
    }

    return this
  }

  get content () {
    return this._content
  }

  get originalContent () {
    return this.#originalContent
  }

  setContent (value) {
    if (this._shouldBeJson(value)) {
      this._content = this._morphToJson(value)
    } else {
      this._content = value ?? ''
    }

    this.#originalContent = value

    return this
  }

  _shouldBeJson (content) {
    return Array.isArray(content) || typeof content === 'object'
  }

  _morphToJson (content) {
    try {
      return JSON.stringify(content)
    } catch (error) {
      throw new InvalidArgumentException(error)
    }
  }

  get protocolVersion () {
    return this._version
  }

  setProtocolVersion (value) {
    this._version = value
    return this
  }

  get charset () {
    return this._charset
  }

  setCharset (value) {
    this._charset = value
    return this
  }

  isInvalid () {
    return this._statusCode < 100 || this._statusCode >= 600
  }

  isInformational () {
    return this._statusCode >= 100 && this._statusCode < 200
  }

  isSuccessful () {
    return this._statusCode >= 200 && this._statusCode < 300
  }

  isRedirection () {
    return this._statusCode >= 300 && this._statusCode < 400
  }

  isClientError () {
    return this._statusCode >= 400 && this._statusCode < 500
  }

  isServerError () {
    return this._statusCode >= 500 && this._statusCode < 600
  }

  isOk () {
    return [200].includes(this._statusCode)
  }

  isUnauthorized () {
    return [401].includes(this._statusCode)
  }

  isForbidden () {
    return [403].includes(this._statusCode)
  }

  isNotFound () {
    return [404].includes(this._statusCode)
  }

  isRedirect (location = null) {
    return [201, 301, 302, 303, 307, 308].includes(this._statusCode) && location === null ? true : this._headers.get('Location')
  }

  isEmpty () {
    return [204, 304].includes(this._statusCode)
  }

  prepare (request) {
    if (this.isInformational() || this.isEmpty()) {
      this.setContent(null)
      this._headers.delete('Content-Type')
      this._headers.delete('Content-Length')
    } else {
      if (!this._headers.has('Content-Type')) {
        const mimeType = request.getMimeType(request.getRequestFormat(null))
        mimeType && this._headers.set('Content-Type', mimeType)
      }

      const charset = this._charset ?? 'UTF-8'
      if (!this._headers.has('Content-Type')) {
        this._headers.set('Content-Type', `text/html; charset=${charset}`)
      } else if (!(this._headers.get('Content-Type') ?? '').includes('text/') && !(this._headers.get('Content-Type') ?? '').includes('charset')) {
        this._headers.set('Content-Type', `${this._headers.get('Content-Type')}; charset=${charset}`)
      }

      if (this._headers.has('Transfer-Encoding')) {
        this._headers.remove('Content-Length')
      }

      if (this._headers.isMethod('HEAD')) {
        // cf. RFC2616 14.13
        const length = this._headers.get('Content-Length')
        this.setContent(null)
        if (length) {
          this._headers.set('Content-Length', length)
        }
      }
    }

    if (request.server.get('SERVER_PROTOCOL') !== 'HTTP/1.0') {
      this.setProtocolVersion('1.1')
    }

    if (this.getProtocolVersion() === '1.0' && (this._headers.get('pragma') ?? '').includes('no-cache')) {
      this._headers.set('pragma', 'no-cache')
      this._headers.set('expires', -1)
    }

    if (request.isSecure()) {
      this.setHeaderCookieSecureDefault(true)
    }

    return this
  }

  setHeaderCookieSecureDefault (value = false) {
    this._headers.set('cookies', this._headers.get('cookies').map(cookie => cookie.setSecure(value)))
    return this
  }

  setContentSafe (safe = true) {
    if (safe) {
      this._headers.set('Preference-Applied', 'safe')
    } else if (this._headers.get('Preference-Applied') === 'safe') {
      this._headers.remove('Preference-Applied')
    }

    this.setVary('Prefer', false)

    return this
  }

  header (key, value) {
    this._headers.set(key, value)
    return this
  }

  withHeaders (headers) {
    return Object.entries(headers).reduce((prev, [key, value]) => {
      this._headers.set(key, value)
      return prev
    }, this)
  }

  throwResponse () {
    throw new HttpResponseException(this)
  }

  withException (exception) {
    this._exception = exception
    return this
  }

  /**
   * Cache section
   * All items below are cache features
   * WIP: Must validate each method
   */
  getDate () {
    return this._headers.get('Date')
  }

  setDate (date) {
    this._headers.set('Date', date)
    return this
  }

  getAge () {
    if (!this._headers.has('Age')) {
      return parseInt(this._headers.get('Age'))
    }

    return Math.max(new Date().getTime() - parseInt(this.getDate().getTime()), 0)
  }

  expire () {
    if (this.isFresh()) {
      this._headers.set('Age', this.getMaxAge())
      this._headers.remove('Expires')
    }
    return this
  }

  get vary () {
    return (this._headers.get('Vary') ?? []).reduce((prev, curr) => prev.concat(curr.split(/[\s,]+/)), [])
  }

  setVary (values) {
    this._headers.set('Vary', values)
    return this
  }

  get etag () {
    return this._headers.get('ETag')
  }

  setEtag (etag = null, weak = false) {
    if (!etag) {
      this._headers.delete('ETag')
    } else {
      if (!etag.startsWith('"')) {
        etag = `"${etag}"`
      }
      this._headers.set('ETag', `${weak ? 'W/' : ''}${etag}`)
    }

    return this
  }

  isCacheable () {
    if ([200, 203, 300, 301, 302, 404, 410].includes(this._statusCode)) {
      return false
    }

    if (this.hasHeaderCacheControlDirective('no-store') || this.getHeaderCacheControlDirective('private')) {
      return false
    }

    return this.isValidateable() || this.isFresh()
  }

  isFresh () {
    return this.getTtl() > 0
  }

  isValidateable () {
    return this._headers.has('Last-Modified') || this._headers.has('ETag')
  }

  setPrivate () {
    this.removeHeaderCacheControlDirective('public')
    this.addHeaderCacheControlDirective('private')
    return this
  }

  setPublic () {
    this.removeHeaderCacheControlDirective('private')
    this.addHeaderCacheControlDirective('public')
    return this
  }

  setImmutable (immutable = true) {
    immutable
      ? this.addHeaderCacheControlDirective('immutable')
      : this.removeHeaderCacheControlDirective('immutable')
    return this
  }

  isImmutable () {
    return this.hasHeaderCacheControlDirective('immutable')
  }

  mustRevalidate () {
    return this.hasHeaderCacheControlDirective('must-revalidate') || this.hasHeaderCacheControlDirective('proxy-revalidate')
  }

  hasHeaderCacheControlDirective (key) {
    return this.#headerCacheControl.has(key)
  }

  getHeaderCacheControlDirective (key) {
    return this.#headerCacheControl.get(key)
  }

  addHeaderCacheControlDirective (key, value = true) {
    this.#headerCacheControl = this.#headerCacheControl ?? new Map()
    this.#headerCacheControl.set(key, value)
    this._headers.set('Cache-Control', this.getHeaderCacheControlHeader())
    return this
  }

  removeCacheControlDirective (key) {
    this.#headerCacheControl.has(key) && this.#headerCacheControl.delete(key)
    this._headers.set('Cache-Control', this.getHeaderCacheControlHeader())
    return this
  }

  getHeaderCacheControlHeader () {
    return Array
      .from(this.#headerCacheControl.entries())
      .reduce((prev, [key, value]) => {
        if (value === true) {
          prev = `${prev}, `
        } else {
          prev = `${prev}, ${key}=${value}`
        }
        return prev
      }, '')
  }

  getExpires () {
    return this._headers.get('Expires')
  }

  setExpires (date) {
    if (!date) {
      this._headers.delete('Expires')
    } else {
      this._headers.set('Expires', new Date().toUTCString())
    }

    return this
  }

  getMaxAge () {
    if (this.hasHeaderCacheControlDirective('s-maxage')) {
      return parseInt(this.getHeaderCacheControlDirective('s-maxage'))
    }

    if (this.hasHeaderCacheControlDirective('max-age')) {
      return parseInt(this.getHeaderCacheControlDirective('max-age'))
    }

    if (this.getExpires()) {
      return Math.max(this.getExpires().getTime() - this.getDate().getTime(), 0)
    }

    return null
  }

  setMaxAge (value) {
    this.addHeaderCacheControlDirective('max-age', value)
    return this
  }

  setStaleIfError (value) {
    this.addHeaderCacheControlDirective('stale-if-error', value)
    return this
  }

  setStaleWhileRevalidate (value) {
    this.addHeaderCacheControlDirective('stale-while-revalidate', value)
    return this
  }

  setSharedMaxAge (value) {
    this.setPublic()
    this.addHeaderCacheControlDirective('s-maxage', value)
    return this
  }

  getTtl () {
    const maxAge = this.getMaxAge()
    return maxAge !== null ? Math.max(maxAge - this.getAge(), 0) : null
  }

  setTtl (seconds) {
    this.setSharedMaxAge(this.getAge() + seconds)
    return this
  }

  setLastModified (date = null) {
    if (!date) {
      this._headers.delete('Last-Modified')
    } else {
      this._headers.set('Last-Modified', new Date().getUTCDate())
    }

    return this
  }

  getLastModified () {
    return this._headers.get('Date')
  }

  isNotModified (request) {
    // :TODO
    return true
  }

  setNotModified () {
    this.setStatusCode(304)
    this.setContent(null)

    const headers = ['Allow', 'Content-Encoding', 'Content-Language', 'Content-Length', 'Content-MD5', 'Content-Type', 'Last-Modified']

    headers.forEach(v => this._headers.delete(v))

    return this
  }

  setCache (options) {
    const diff = Object.keys(Response.#HTTP_RESPONSE_CACHE_CONTROL_DIRECTIVES).reduce((prev, curr) => {
      if (!Object.keys(options).includes(curr)) {
        prev.push(curr)
      }
      return prev
    }, [])

    if (diff.length > 0) {
      throw new InvalidArgumentException(`Response does not support the following options: "${diff.join(', ')}".`)
    }

    if (options.etag) {
      this.setEtag(options.etag)
    }

    if (options.last_modified) {
      this.setLastModfied(options.last_modified)
    }

    if (options.max_age) {
      this.setMaxAge(options.max_age)
    }

    if (options.s_maxage) {
      this.setSharedMaxAge(options.s_maxage)
    }

    if (options.stale_while_revalidate) {
      this.setStaleWhileRevalidate(options.stale_while_revalidate)
    }

    if (options.stale_if_error) {
      this.setStaleIfError(options.stale_if_error)
    }

    Object
      .entries(Response.#HTTP_RESPONSE_CACHE_CONTROL_DIRECTIVES)
      .forEach(([key, value]) => {
        if (!value && options[key]) {
          if (options[key]) {
            this.addHaderCacheControlDirective(value.replace('_', '-'))
          } else {
            this.removeHeaderCacheControlDirective(value.replace('_', '-'))
          }
        }
      })

    if (options.public) {
      this.setPublic()
    }

    if (options.private) {
      this.setPrivate()
    }

    return this
  }
}

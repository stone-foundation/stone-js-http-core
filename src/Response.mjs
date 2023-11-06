import vary from 'vary'
import { mime } from 'send'
import cookie from 'cookie'
import statuses from 'statuses'
import { Buffer } from 'safe-buffer'
import { sign } from 'cookie-signature'
import { createHash } from 'node:crypto'
import { Macroable } from '@stone-js/macroable'
import { HttpResponseException } from './exceptions/HttpResponseException.mjs'
import { InvalidArgumentException } from './exceptions/InvalidArgumentException.mjs'
import { LogicException } from './index.mjs'

/**
 * InspiredBy: Symfony, Laravel and ExpressJS
 * @see: https://github.com/symfony/symfony/blob/6.4/src/Symfony/Component/HttpFoundation/Response.php
 */
export class Response extends Macroable {
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

  static STATUS_TEXTS = statuses.message

  _headers
  _content
  _version
  _charset
  _exception
  _statusCode
  _statusText
  #appResolver
  #requestResolver
  #originalContent
  #headerCacheControl

  constructor (content = '', status = 200, headers = {}) {
    this
      .setStatus(status)
      .setHeaders(headers)
      .setContent(content)
      .setProtocolVersion('1.0')
  }

  get status () {
    return this.statusCode
  }

  get statusText () {
    return this._statusText
  }

  get statusCode () {
    return this._statusCode
  }

  get headers () {
    return Object.fromEntries(this._headers.entries())
  }

  get content () {
    return this._content
  }

  get originalContent () {
    return this.#originalContent
  }

  get charset () {
    return this._charset
  }

  get protocolVersion () {
    return this._version
  }

  get app () {
    if (!this.#appResolver) {
      throw new LogicException('Must set an Application resolver')
    }

    return this.#appResolver()
  }

  get request () {
    if (!this.#requestResolver) {
      throw new LogicException('Must set a Request resolver')
    }

    return this.#requestResolver()
  }

  get vary () {
    return this.getHeader('Vary', []).reduce((prev, curr) => prev.concat(curr.split(/[\s,]+/)), [])
  }

  get #charsetRegExp () {
    return /;\s*charset\s*=/
  }

  setHeaders (headers) {
    this._headers = new Map()
    return Object.entries(headers).reduce((_, [key, value]) => this.setHeader(key, value))
  }

  withHeaders (headers) {
    return this.setHeaders(headers)
  }

  header (key, value) {
    return this.setHeader(key, value)
  }

  setHeader (key, value) {
    value = Array.isArray(value) ? value.map(String) : String(value)

    if (key.toLowerCase() === 'content-type') {
      if (Array.isArray(value)) {
        throw new InvalidArgumentException('Content-Type cannot be set to an Array')
      } else if (!this.#charsetRegExp.test(value)) { // Add charset(Character Sets) to content-type
        let charset = mime.charsets.lookup(value.split(';').shift())
        value += charset ? `; charset=${charset.toLowerCase()}` : ''
      }
    }

    this._headers.set(key, value)

    return this
  }

  appendHeader (key, value) {
    const oldValue = this.getHeader(key)
    return this.setHeader(key, oldValue ? [].concat(oldValue, value) : value)
  }

  getHeader (key, fallback = null) {
    return this._headers.get(key) ?? fallback
  }

  hasHeader (key) {
    return this._headers.has(key)
  }

  removeHeader (key) {
    key = Array.isArray(key) ? key : [key]
    
    for (const item of key) {
      this._headers.delete(item)
    }

    return this
  }

  setStatus (code, text = null) {
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
    return !Buffer.isBuffer(content) && ['object', 'number', 'boolean'].includes(typeof content)
  }

  _morphToJson (content) {
    try {
      return this.stringify(content, this.app.get('http.json.replacer'), this.app.get('http.json.spaces'), this.app.get('http.json.escape'))
    } catch (error) {
      throw new InvalidArgumentException(error)
    }
  }

  setCookie (name, value, options = {}) {
    options ??= {}
    options = { ...this.app.get('http.cookie', {}), ...options }

    const secret = this.app.get('http.cookie.secret', this.app.get('http.secret', this.app.get('app.secret')))

    if (options.signed && !secret) {
      throw new LogicException('A secret is required for signed cookies. Please set a secret in configurations.')
    }

    value = typeof value === 'object' ? `j:${this.stringify(value)}` : String(value)
    
    if (options.signed) {
      value = `s:${sign(value, secret)}`
    }

    if (options.maxAge) {
      const maxAge = options.maxAge - 0
      
      if (!NaN(maxAge)) {
        options.expires = new Date(Date.now() + maxAge)
        options.maxAge = Math.floor(maxAge / 1000)
      }
    }

    if (!options.path) {
      options.path = '/'
    }

    this.appendHeader('Set-Cookie', cookie.serialize(name, String(value), options))

    return this
  }

  clearCookie (name, options) {
    return this.setCookie(name, '', { expires: new Date(1), path: '/', ...options })
  }

  secureCookies (value = false) {
    const cookies = this
      .getHeader('Set-Cookie', [])
      .map(v => {
        if (value) {
          return v.includes('Secure') ? v : `${v}; Secure`
        } else {
          return v.replace(/;?\s*[Ss]ecure\s*;?/, '')
        }
      })

    return this.setHeader('Set-Cookie', cookies)
  }

  setProtocolVersion (value) {
    this._version = value
    return this
  }

  setCharset (value) {
    this._charset = value
    return this
  }

  setContentType (value) {
    return this.setHeader('Content-Type', value.includes('/') ? value : mime.lookup(value))
  }

  setType (value) {
    return this.setContentType(value)
  }

  setLinks (links) {
    return this.setHeader(
      'Link',
      Object
        .entries(links)
        .reduce((prev, [key, val]) => `${prev ? ', ' : ''}<${val}>; rel="${key}"`, this.getHeader('Link'))
    )
  }

  format (formats) {
    const keys = Object.keys(formats).filter(v => v !== 'default')
    const key = keys.length > 0 ? this.request.accepts(keys) : null

    if (key) {
      this
        .setContentType(key)
        .setContent(formats[key]())
    } else if (formats.default) {
      this.setContent(formats.default())
    } else {
      this._statusCode = Response.HTTP_NOT_ACCEPTABLE
      this._statusText = `Invalid types (${keys.join(',')})`
    }

    return this.addVary('Accept')
  }

  addVary (field) {
    vary(this, field)
    return this
  }

  setApp (resolver) {
    this.#appResolver = resolver
    return this
  }

  setRequest (resolver) {
    this.#requestResolver = resolver
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
    return [201, 301, 302, 303, 307, 308].includes(this._statusCode) && location === null ? true : this.getHeader('Location')
  }

  isEmpty () {
    return [204, 304].includes(this._statusCode)
  }

  isResetContent () {
    return [205].includes(this._statusCode)
  }

  prepare (request) {
    this.setRequest(() => request)

    switch (typeof this._content) {
      case 'string':
        !this.getHeader('Content-Type') && this.setContentType('html')
        break
      case 'object':
      case 'number':
      case 'boolean':
        if (Buffer.isBuffer(this._content)) {
          !this.getHeader('Content-Type') && this.setContentType('bin')
        } else {
          !this.getHeader('Content-Type') && this.setContentType('json')
        }
        break
    }

    if (this.request.fresh) {
      this._statusCode = Response.HTTP_NOT_MODIFIED
    }

    if (this.isInformational() || this.isEmpty()) {
      this
        .setContent(null)
        .removeHeader(['Content-Type', 'Content-Length', 'Transfer-Encoding'])
    } else if (this.isResetContent()) {
      this
        .setContent(null)
        .setHeader('Content-Length', '0')
        .removeHeader('Transfer-Encoding')
    } else {
      let length, etag
      const etagFn = this.app.get('http.etag.function', this.#defaultEtagFn)
      const generateETag = !this.hasHeader('ETag') && typeof etagFn === 'function'
      this._charset ??= 'UTF-8'

      if (typeof this.getHeader('Content-Type') === 'string') {
        this.setContentType(`${this.getHeader('Content-Type')}; charset=${this._charset}`)
      }

      if (this._content !== undefined) {
        if (Buffer.isBuffer(this._content)) {
          length = this._content.length
        } else if (!generateETag && this._content.length < 1000) {
          length = Buffer.byteLength(this._content, this._charset)
        } else {
          this._content = Buffer.from(chunk, this._charset)
          this._charset = undefined
          length = this._content.length
        }

        this.setHeader('Content-Length', length)
      }

      if (generateETag && length !== undefined) {
        if ((etag = etagFn(this._content, this._charset))) {
          this.setHeader('ETag', etag)
        }
      }

      if (this.hasHeader('Transfer-Encoding')) {
        this.removeHeader('Content-Length')
      }

      if (this.request.isMethod('HEAD')) {
        // cf. RFC2616 14.13
        const length = this.getHeader('Content-Length')
        this.setContent(null)
        if (length) {
          this.setHeader('Content-Length', length)
        }
      }
    }

    if (this.request.server.get('SERVER_PROTOCOL') !== 'HTTP/1.0') {
      this.setProtocolVersion('1.1')
    }

    if (this.request.isSecure()) {
      this.secureCookies(true)
    }

    return this
  }

  setContentSafe (safe = true) {
    if (safe) {
      this.setHeader('Preference-Applied', 'safe')
    } else if (this.getHeader('Preference-Applied') === 'safe') {
      this.removeHeader('Preference-Applied')
    }

    return this.addVary('Prefer')
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

  get etag () {
    return this._headers.get('ETag')
  }

  setEtag (etag = null, weak = false) {
    if (!etag) {
      this.removeHeader('ETag')
    } else {
      if (!etag.startsWith('"')) {
        etag = `"${etag}"`
      }
      this.setHeader('ETag', `${weak ? 'W/' : ''}${etag}`)
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
    this.#headerCacheControl ??= new Map()
    this.#headerCacheControl.set(key, value)
    this.setHeader('Cache-Control', this.getHeaderCacheControlHeader())
    return this
  }

  removeCacheControlDirective (key) {
    this.#headerCacheControl.has(key) && this.#headerCacheControl.delete(key)
    this.setHeader('Cache-Control', this.getHeaderCacheControlHeader())
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
      this.removeHeader('Last-Modified')
    } else {
      this.setHeader('Last-Modified', date.toUTCString())
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
    this.setStatus(304)
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
            this.addHeaderCacheControlDirective(value.replace('_', '-'))
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

  #defaultEtagFn (content, encoding) {
    return Buffer.from(this.#getHashedContent()).toString('base64')
  }

  #getHashedContent (content, encoding) {
    return createHash('sha256').update(content, encoding).digest('hex')
  }

  // From: https://github.com/expressjs/express/blob/master/lib/response.js
  stringify (value, replacer, spaces, escape) {
    // v8 checks arguments.length for optimizing simple call
    // https://bugs.chromium.org/p/v8/issues/detail?id=4730
    var json = replacer || spaces
      ? JSON.stringify(value, replacer, spaces)
      : JSON.stringify(value)
  
    if (escape && typeof json === 'string') {
      json = json.replace(/[<>&]/g, function (c) {
        switch (c.charCodeAt(0)) {
          case 0x3c:
            return '\\u003c'
          case 0x3e:
            return '\\u003e'
          case 0x26:
            return '\\u0026'
          default:
            return c
        }
      })
    }
  
    return json
  }
}

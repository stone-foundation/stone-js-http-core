import vary from 'vary'
import { mime } from 'send'
import statuses from 'statuses'
import { Buffer } from 'safe-buffer'
import { createHash } from 'node:crypto'
import { HttpError } from './errors/HttpError.mjs'
import { isString, isFunction } from '@stone-js/common'
import { OutgoingResponse } from './OutgoingResponse.mjs'
import { CookieCollection } from './cookies/CookieCollection.mjs'
import { HTTP_NOT_ACCEPTABLE, HTTP_NOT_MODIFIED } from './constants/httpStatuses.mjs'
/**
 * Class representing an OutgoingHttpResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * InspiredBy: Symfony, Laravel and ExpressJS.
 */
export class OutgoingHttpResponse extends OutgoingResponse {
  #headers
  #charset
  #configResolver
  #requestResolver
  #cookieCollection

  /**
   * Create an OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=null]
   * @param  {string} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static create (content, statusCode = 200, headers = {}) {
    return new this(content, statusCode, headers)
  }

  /**
   * Create an OutgoingHttpResponse.
   *
   * @param  {*} [content='']
   * @param  {number} [statusCode=200]
   * @param  {Object} [headers={}]
   */
  constructor (content = '', statusCode = 200, headers = {}) {
    super(content, statusCode)

    this
      .setHeaders(headers)
      .setStatus(statusCode)

    this.#cookieCollection = CookieCollection.create()
  }

  /** @return {number} */
  get status () {
    return this.statusCode
  }

  /** @return {(Object|Headers)} */
  get headers () {
    return this.#headers
  }

  /** @return {string} */
  get charset () {
    return this.#charset
  }

  /** @return {string} */
  get etag () {
    return this.#headers.get('ETag')
  }

  /** @return {string} */
  get vary () {
    return this.getHeader('Vary', []).reduce((prev, curr) => prev.concat(curr.split(/[\s,]+/)), [])
  }

  /** @return {string} */
  get lastModified () {
    return this.#headers.get('Last-Modified')
  }

  /** @return {IncomingHttpEvent} */
  get request () {
    if (!this.#requestResolver) {
      throw new TypeError('Must set an IncomingHttpEvent resolver.')
    }

    return this.#requestResolver()
  }

  /** @return {Object} */
  get config () {
    return this.#configResolver()
  }

  /** @return {RegExp} */
  get #charsetRegExp () {
    return /;\s*charset\s*=/
  }

  /**
   * Set headers.
   *
   * @param   {(Object|Map|Headers)} values
   * @returns {this}
   */
  setHeaders (values) {
    this.#headers ??= new Headers()
    const headers = values instanceof Headers || values instanceof Map ? values.entries() : Object.entries(values)
    headers.forEach(([key, value]) => this.setHeader(key, value))
    return this
  }

  /**
   * Set header.
   *
   * @param   {string} key
   * @param   {(string|string[])} value
   * @returns {this}
   */
  setHeader (key, value) {
    value = Array.isArray(value) ? value.map(String) : String(value)

    if (key.toLowerCase() === 'content-type') {
      if (Array.isArray(value)) {
        throw new TypeError('Content-Type cannot be set to an Array')
      } else if (!this.#charsetRegExp.test(value)) { // Add charset(Character Sets) to content-type
        this.#charset = mime.charsets.lookup(value.split(';').shift().trim())
        value += this.#charset ? `; charset=${this.#charset.toLowerCase()}` : ''
      }
    }

    this.#headers.set(key, value)

    return this
  }

  /**
   * Append header.
   *
   * @param   {string} key
   * @param   {(string|string[])} value
   * @returns {this}
   */
  appendHeader (key, value) {
    this.#headers.append(key, value)
    return this
  }

  /**
   * Get headers.
   *
   * @param   {boolean} [hasMap=false]
   * @returns {(Map|Headers)}
   */
  getHeaders (hasMap = false) {
    return hasMap ? new Map(this.headers.entries()) : this.headers
  }

  /**
   * Get header.
   *
   * @param   {string} key
   * @param   {*} [fallback=null]
   * @returns {string}
   */
  getHeader (key, fallback = null) {
    return this.#headers.get(key) ?? fallback
  }

  /**
   * Get header names.
   *
   * @returns {string[]}
   */
  getHeaderNames () {
    return this.#headers.keys()
  }

  /**
   * Has header.
   *
   * @param   {string} key
   * @returns {boolean}
   */
  hasHeader (key) {
    return this.#headers.has(key)
  }

  /**
   * Remove header.
   *
   * @param   {(string|string[])} key
   * @returns {this}
   */
  removeHeader (key) {
    [].concat(key).forEach(v => this.#headers.delete(v))
    return this
  }

  /**
   * Set status.
   *
   * @param   {string} code
   * @param   {string} [text=null]
   * @returns {this}
   */
  setStatus (code, text = null) {
    this._statusCode = code

    if (this.isInvalid()) {
      throw new TypeError(`The HTTP status code "${code}" is not valid.`)
    }

    this._statusMessage = text ?? statuses.message[code] ?? 'unknown status'

    return this
  }

  /**
   * Set content.
   *
   * @param   {string} value
   * @param   {Object} options
   * @returns {this}
   */
  setContent (value, options = {}) {
    this._content = this._shouldBeJson(value) ? this._morphToJson(value, options) : value ?? ''
    return this
  }

  /**
   * Set cookie.
   *
   * @param   {string} name
   * @param   {string} value
   * @param   {Object} options
   * @returns {this}
   */
  setCookie (name, value, options = {}) {
    this.#cookieCollection.add(name, value, options)
    return this
  }

  /**
   * Clear cookie.
   *
   * @param   {string} name
   * @param   {string} [force=false]
   * @returns {this}
   */
  clearCookie (name, force = false) {
    this.#cookieCollection.remove(name)
    force && this.#cookieCollection.remove(name, force)
    return this
  }

  /**
   * Clear cookies.
   *
   * @param   {string} [force=false]
   * @returns {this}
   */
  clearCookies (force = false) {
    this.#cookieCollection.clear()
    force && this.#cookieCollection.clear(force)
    return this
  }

  /**
   * Secure cookies.
   *
   * @param   {string} value
   * @returns {this}
   */
  secureCookies (value = false) {
    this.#cookieCollection.secure(value)
    return this
  }

  /**
   * Set content type charset.
   *
   * @param   {string} value
   * @returns {this}
   */
  setCharset (value) {
    this.#charset = value
    return this
  }

  /**
   * Set content type.
   *
   * @param   {string} value
   * @returns {this}
   */
  setContentType (value) {
    return this.setHeader('Content-Type', value.includes('/') ? value : mime.lookup(value))
  }

  /**
   * Set content type.
   *
   * @alias setContentType
   * @param   {string} value
   * @returns {this}
   */
  setType (value) {
    return this.setContentType(value)
  }

  /**
   * Set link.
   *
   * @param   {Object} links
   * @returns {this}
   */
  setLinks (links) {
    return this.setHeader(
      'Link',
      Object
        .entries(links)
        .reduce((prev, [key, val]) => `${prev ? ', ' : ''}<${val}>; rel="${key}"`, this.getHeader('Link'))
    )
  }

  /**
   * Format response according
   * to the content negotiation.
   *
   * @param   {Object} formats
   * @returns {this}
   */
  format (formats) {
    const keys = Object.keys(formats).filter(v => v !== 'default')
    const key = keys.length > 0 ? this.request.acceptsTypes(keys) : null

    if (key) {
      this
        .setContentType(key)
        .setContent(formats[key]())
    } else if (formats.default) {
      this.setContent(formats.default())
    } else {
      this
        .setStatus(HTTP_NOT_ACCEPTABLE)
        .setContent(`Invalid types (${keys.join(',')})`)
    }

    return this.addVary('Accept')
  }

  /**
   * Add vary.
   *
   * @param   {string} field
   * @returns {this}
   */
  addVary (field) {
    vary(this, field)
    return this
  }

  /**
   * Set ETag.
   *
   * @param   {string} [etag=null]
   * @param   {boolean} [weak=false]
   * @returns {this}
   */
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

  /**
   * Set last modified.
   *
   * @param   {Date} [date=null]
   * @returns {this}
   */
  setLastModified (date = null) {
    if (!date) {
      this.removeHeader('Last-Modified')
    } else {
      this.setHeader('Last-Modified', date.toUTCString())
    }

    return this
  }

  /**
   * Set request resolver.
   *
   * @param   {Function} resolver
   * @returns {this}
   */
  setRequestResolver (resolver) {
    this.#requestResolver = resolver
    return this
  }

  /**
   * Set config resolver.
   *
   * @param   {Function} resolver
   * @returns {this}
   */
  setConfigResolver (resolver) {
    this.#configResolver = resolver
    return this
  }

  /**
   * Is Invalid response.
   *
   * @returns {boolean}
   */
  isInvalid () {
    return this.statusCode < 100 || this.statusCode >= 600
  }

  /**
   * Is Informational response.
   *
   * @returns {boolean}
   */
  isInformational () {
    return this.statusCode >= 100 && this.statusCode < 200
  }

  /**
   * Is Successful response.
   *
   * @returns {boolean}
   */
  isSuccessful () {
    return this.statusCode >= 200 && this.statusCode < 300
  }

  /**
   * Is Ok response.
   *
   * @returns {boolean}
   */
  isOk () {
    return this.statusCode === 200
  }

  /**
   * Is Reset Content response.
   *
   * @returns {boolean}
   */
  isResetContent () {
    return this.statusCode === 205
  }

  /**
   * Is Empty response.
   *
   * @returns {boolean}
   */
  isEmpty () {
    return [204, 304].includes(this.statusCode)
  }

  /**
   * Is Redirection response.
   *
   * @returns {boolean}
   */
  isRedirection () {
    return this.statusCode >= 300 && this.statusCode < 400
  }

  /**
   * Is Redirect response.
   *
   * @returns {boolean}
   */
  isRedirect (location = null) {
    return [201, 301, 302, 303, 307, 308].includes(this.statusCode) && location === null ? true : !!this.getHeader('Location')
  }

  /**
   * Is moved permanently.
   *
   * @returns {boolean}
   */
  isMovedPermanently () {
    return this.statusCode === 301
  }

  /**
   * Is ClientError response.
   *
   * @returns {boolean}
   */
  isClientError () {
    return this.statusCode >= 400 && this.statusCode < 500
  }

  /**
   * Is Unauthorized response.
   *
   * @returns {boolean}
   */
  isUnauthorized () {
    return this.statusCode === 401
  }

  /**
   * Is Forbidden response.
   *
   * @returns {boolean}
   */
  isForbidden () {
    return this.statusCode === 403
  }

  /**
   * Is NotFound response.
   *
   * @returns {boolean}
   */
  isNotFound () {
    return this.statusCode === 404
  }

  /**
   * Is ServerError response.
   *
   * @returns {boolean}
   */
  isServerError () {
    return this.statusCode >= 500 && this.statusCode < 600
  }

  /**
   * Is Validateable.
   *
   * @returns {boolean}
   */
  isValidateable () {
    return this.#headers.has('Last-Modified') || this.#headers.has('ETag')
  }

  /**
   * Prepare response.
   *
   * @param   {IncomingHttpEvent} request
   * @param   {Config} [config=null]
   * @returns {this}
   */
  prepare (request, config = null) {
    this
      .setConfigResolver(() => config)
      .setRequestResolver(() => request)
      ._prepareCookies()

    switch (typeof this.content) { // Set content type
      case 'string':
        !this.hasHeader('Content-Type') && this.setContentType('html')
        break
      case 'object':
      case 'number':
      case 'boolean':
        if (Buffer.isBuffer(this.content)) {
          !this.hasHeader('Content-Type') && this.setContentType('bin')
        } else {
          !this.hasHeader('Content-Type') && this.setContentType('json')
          return this.setContent(this.content, this.config.get('app.http.json', {}))
        }
        break
    }

    if (this.request.isFresh(this)) {
      this.statusCode = HTTP_NOT_MODIFIED
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
      let length
      const type = this.getHeader('Content-Type')
      const etagFn = this.config.get('app.http.etag.function', this._defaultEtagFn)
      const generateETag = !this.hasHeader('ETag') && isFunction(etagFn)
      this.#charset ??= 'UTF-8'

      if (isString(this.content) && isString(type) && !this.#charsetRegExp.test(type)) { // Set charset
        this.setContentType(`${type}; charset=${this.#charset}`)
      }

      if (this.content !== undefined) { // Set Content-Length
        if (Buffer.isBuffer(this.content)) {
          length = this.content.length
        } else if (!generateETag && this.content.length < 1000) {
          length = Buffer.byteLength(this.content, this.#charset)
        } else {
          this._content = Buffer.from(this.content, this.#charset)
          this.#charset = undefined
          length = this.content.length
        }

        this.setHeader('Content-Length', length)
      }

      if (generateETag && length !== undefined) { // Set ETag
        this.setEtag(etagFn(this.content, this.#charset))
      }

      if (this.hasHeader('Transfer-Encoding')) {
        this.removeHeader('Content-Length')
      }

      if (this.request.isMethod('HEAD')) {
        this.setContent(null)
      }
    }

    return this
  }

  /**
   * Throw this reponse as an HttpError.
   *
   * @returns
   */
  throwResponse () {
    throw new HttpError(this)
  }

  /**
   * Should be Json.
   *
   * @param   {*} content
   * @returns {boolean}
   */
  _shouldBeJson (content) {
    return !Buffer.isBuffer(content) && ['object', 'number', 'boolean'].includes(typeof content)
  }

  /**
   * Morph to Json.
   *
   * @param   {*} content
   * @param   {Object} [options={}]
   * @returns {string}
   */
  _morphToJson (content, options = {}) {
    try {
      return this._stringify(content, options.replacer, options.spaces, options.escape)
    } catch (error) {
      throw new TypeError(error)
    }
  }

  /**
   * Prepare Cookies.
   *
   * @returns {this}
   */
  _prepareCookies () {
    if (!this.#cookieCollection.isEmpty()) { // Set cookies
      this
        .#cookieCollection
        .setSecret(this.config.get('app.secret'))
        .setOptions(this.config.get('app.http.cookie'))

      if (this.request.isSecure) {
        this.secureCookies(true)
      }

      this.setHeader('Set-Cookie', this.#cookieCollection.all(true))
    }

    return this
  }

  /**
   * Default ETag function.
   *
   * @param   {string} content
   * @param   {string} encoding
   * @returns {this}
   */
  _defaultEtagFn (content, encoding) {
    return Buffer.from(this._getHashedContent(content, encoding)).toString('base64')
  }

  /**
   * Prepare Cookies.
   *
   * @param   {string} content
   * @param   {string} encoding
   * @returns {this}
   */
  _getHashedContent (content, encoding) {
    return createHash('sha256').update(content, encoding).digest('hex')
  }

  /**
   * Stringify value to json.
   *
   * @param   {(number|Object|boolean)} value
   * @param   {string} replacer
   * @param   {string} spaces
   * @param   {boolean} escape
   * @returns {this}
   */
  _stringify (value, replacer, spaces, escape) {
    const json = JSON.stringify(value, replacer, spaces)

    if (escape) {
      return json?.replace(/[<>&]/g, (c) => {
        return { 0x3c: '\\u003c', 0x3e: '\\u003e', 0x26: '\\u0026' }[c.charCodeAt(0)] ?? c
      })
    }

    return json
  }
}

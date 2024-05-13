import mime from 'mime'
import fresh from 'fresh'
import typeIs from 'type-is'
import accepts from 'accepts'
import { get, has } from 'lodash-es'
import rangeParser from 'range-parser'
import contentTypeLib from 'content-type'
import { CookieCollection } from './cookies/CookieCollection.mjs'
import { IncomingEvent, flattenValues, isString } from '@stone-js/common'

/**
 * Class representing an IncomingHttpEvent.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class IncomingHttpEvent extends IncomingEvent {
  static METHOD_HEAD = 'HEAD'
  static METHOD_GET = 'GET'
  static METHOD_POST = 'POST'
  static METHOD_PUT = 'PUT'
  static METHOD_PATCH = 'PATCH'
  static METHOD_DELETE = 'DELETE'
  static METHOD_PURGE = 'PURGE'
  static METHOD_OPTIONS = 'OPTIONS'
  static METHOD_TRACE = 'TRACE'
  static METHOD_CONNECT = 'CONNECT'

  #ip
  #ips
  #body
  #files
  #query
  #accepts
  #headers
  #cookies
  #protocol
  #queryString

  /**
   * Create an IncomingHttpEvent.
   *
   * @param  {Object} options - Event options.
   * @param  {string} options.ip
   * @param  {string[]} [options.ips=[]]
   * @param  {URL} options.url
   * @param  {Object} [options.body={}]
   * @param  {Object} [options.files={}]
   * @param  {string} [options.locale='en']
   * @param  {string} [options.method='GET']
   * @param  {(Object|Headers)} [options.headers={}]
   * @param  {CookieCollection} [options.cookies=null]
   * @param  {Object} [options.metadata={}]
   * @param  {string} [options.protocol='http']
   * @param  {string} [options.queryString=null]
   * @param  {string} [options.defaultLocale='en']
   * @throws {TypeError}
   */
  constructor ({
    ip,
    ips = [],
    url,
    body = {},
    files = {},
    locale = 'en',
    method = 'GET',
    headers = {},
    cookies = null,
    metadata = {},
    protocol = 'http',
    queryString = null,
    defaultLocale = 'en'
  }) {
    super({ url, metadata, locale, defaultLocale })

    this.#ip = ip
    this.#ips = ips
    this.#body = body
    this.#files = files
    this._method = method
    this.#protocol = protocol
    this.#accepts = accepts(this)
    this.#queryString = queryString
    this.#query = new URLSearchParams(this.#queryString)
    this.#cookies = cookies ?? CookieCollection.create()
    this.#headers = headers instanceof Headers ? headers : new Headers(headers)
  }

  /** @return {string} */
  get ip () {
    return this.#ip
  }

  /** @return {string[]} */
  get ips () {
    return this.#ips
  }

  /** @return {boolean} */
  get isXhr () {
    return this.getHeader('X-Requested-With', '').toLowerCase() === 'xmlhttprequest'
  }

  /** @return {boolean} */
  get isAjax () {
    return this.isXhr
  }

  /** @return {string} */
  get userAgent () {
    return this.getHeader('user-agent')
  }

  /** @return {boolean} */
  get isPrefetch () {
    return [this.getHeader('Purpose'), this.getHeader('Sec-Purpose')].includes('prefetch')
  }

  /** @return {string} */
  get protocol () {
    return this.#protocol
  }

  /** @return {URLSearchParams} */
  get query () {
    return this.#query
  }

  /** @return {string} */
  get queryString () {
    return this.#queryString
  }

  /** @return {Object} */
  get files () {
    return this.#files
  }

  /** @return {Object} */
  get body () {
    return this.#body
  }

  /** @return {string} */
  get etag () {
    return this.getHeader('ETag')
  }

  /** @return {CookieCollection} */
  get cookies () {
    return this.#cookies
  }

  /** @return {(Object|Headers)} */
  get headers () {
    return this.#headers
  }

  /** @return {string[]} */
  get types () {
    return this.#accepts.types()
  }

  /** @return {string[]} */
  get charsets () {
    return this.#accepts.charsets()
  }

  /** @return {string[]} */
  get languages () {
    return this.#accepts.languages()
  }

  /** @return {string[]} */
  get encodings () {
    return this.#accepts.encodings()
  }

  /** @return {string} */
  get charset () {
    return contentTypeLib.parse(this).parameters.charset
  }

  /** @return {string} */
  get contentType () {
    return contentTypeLib.parse(this).type
  }

  /** @return {Object} */
  get params () {
    return this.route().parameters?.()
  }

  /**
   * Get data from request.
   * 1st - Get from route params if exist.
   * 2nd - Get from body if exist.
   * 3rd - Get from query params if exists.
   * 4th - Get from metadata if exists.
   * last - return fallback value.
   *
   * @param   {string} key
   * @param   {*} [fallback=null]
   * @returns {(string|*)}
   */
  get (key, fallback = null) {
    // Get from params
    if (this.route().hasParameter?.(key)) {
      return this.route().parameter(key)
    }

    // Get from body
    if (has(this.#body, key)) {
      return get(this.#body, key)
    }

    // Get from query string
    const query = Object.fromEntries(this.#query.entries())
    if (has(query, key)) {
      return get(query, key)
    }

    // Get from header
    if (this.hasHeader(key)) {
      return this.getHeader(key, fallback)
    }

    // Get from metadata
    return this.metadata(key, fallback)
  }

  /**
   * Get header.
   *
   * @param   {string} name
   * @param   {*} [fallback=null]
   * @returns {(string|*)}
   */
  getHeader (name, fallback = null) {
    if (!name) {
      throw new TypeError('name argument is required.')
    }

    if (!isString(name)) {
      throw new TypeError('name must be a string.')
    }

    const lcName = name.toLowerCase()

    if (['referer', 'referrer'].includes(lcName)) {
      return this.#headers.get('referer') ?? this.#headers.get('referrer') ?? fallback
    }

    return this.#headers.get(name) ?? this.#headers.get(lcName) ?? fallback
  }

  /**
   * Has header.
   *
   * @param   {string} name
   * @returns {boolean}
   */
  hasHeader (name) {
    return this.#headers.has(name)
  }

  /**
   * Content negotiation utils.
   */

  /**
   * Return the first accepted type.
   * If nothing in types is accepted, then false is returned.
   *
   * @param   {...string} values
   * @returns {(boolean|string|string[])}
   */
  acceptsTypes (...values) {
    return this.#accepts.type(flattenValues(values))
  }

  /**
   * Return the first accepted encoding.
   * If nothing in encodings is accepted, then false is returned.
   *
   * @param   {...string} values
   * @returns {(boolean|string|string[])}
   */
  acceptsEncodings (...values) {
    return this.#accepts.encoding(flattenValues(values))
  }

  /**
   * Return the first accepted charset.
   * If nothing in charsets is accepted, then false is returned.
   *
   * @param   {...string} values
   * @returns {(boolean|string|string[])}
   */
  acceptsCharsets (...values) {
    return this.#accepts.charset(flattenValues(values))
  }

  /**
   * Return the first accepted language.
   * If nothing in languages is accepted, then false is returned.
   *
   * @param   {...string} values
   * @returns {(boolean|string|string[])}
   */
  acceptsLanguages (...values) {
    return this.#accepts.language(flattenValues(values))
  }

  /**
   * Get mime type for the given file path or extension.
   *
   * @param   {string} mimeType
   * @returns {(string|null)}
   */
  getMimeType (format) {
    return mime.getType(format)
  }

  /**
   * Get file extension for the given mime type.
   *
   * @param   {string} mimeType
   * @returns {(string|null)}
   */
  getFormat (mimeType) {
    return mime.getExtension(mimeType)
  }

  /**
   * Infer the content-type of a request.
   *
   * @param   {string[]} types
   * @returns {(boolean|string|null)}
   */
  is (types) {
    return typeIs(this, flattenValues(types))
  }

  /**
   * Get request range.
   * When ranges are returned, the array has a "type" property
   * which is the type of range that is required (most commonly, "bytes").
   * Each array element is an object with a "start" and "end" property for the portion of the range.
   *
   * @param   {number} size - The maximum size of the resource.
   * @param   {boolean} [combine=false] - Specifies if overlapping & adjacent ranges should be combined.
   * @returns {Object}
   */
  range (size, combine = false) {
    if (!this.hasHeader('Range')) return
    return rangeParser(size, this.getHeader('Range'), { combine })
  }

  /**
   * Get value by key from json body.
   *
   * @param   {string} key
   * @param   {*} [fallback=null]
   * @returns {*}
   */
  json (key, fallback = null) {
    if (this.is(['json'])) {
      return get(this.#body, key, fallback)
    }

    return fallback
  }

  /**
   * Cache section determining
   * if cache is fresh or stale.
   */

  /**
   * Is cache is fresh.
   *
   * @param   {OutgoingHttpResponse} response
   * @returns {boolean}
   */
  isFresh (response) {
    if (!['GET', 'HEAD'].includes(this.method)) {
      return false
    }

    if ((response.status >= 200 && response.status < 300) || response.status === 304) {
      return fresh(this.#headers, {
        etag: response.etag,
        'last-modified': response.lastModified
      })
    }

    return false
  }

  /**
   * Is cache is stale.
   *
   * @param   {OutgoingHttpResponse} response
   * @returns {boolean}
   */
  isStale (response) {
    return !this.isFresh(response)
  }

  /**
   * Generate an url for the given path.
   *
   * @param   {string} path
   * @returns {string}
   */
  uriForPath (path) {
    return new URL(path, `${this.scheme}://${this.host}`).href
  }

  /**
   * Return filtered files.
   *
   * @param   {string[]} files - Files names.
   * @returns {Object}
   */
  filterFiles (files) {
    return Object.fromEntries(this.#files.entries().filter(([key]) => files.includes(key)))
  }

  /**
   * Return a cloned event.
   *
   * @returns {IncomingHttpEvent}
   */
  clone () {
    return new IncomingHttpEvent({
      ip: this.#ip,
      ips: this.#ips,
      method: this.method,
      locale: this.locale,
      cookies: this.#cookies,
      protocol: this.#protocol,
      metadata: this._metadata,
      queryString: this.#queryString,
      url: structuredClone(this.url),
      body: structuredClone(this.#body),
      defaultLocale: this._defaultLocale,
      files: structuredClone(this.#files),
      headers: structuredClone(this.#headers)
    })
  }
}

import mime from 'mime'
import fresh from 'fresh'
import typeIs from 'type-is'
import accepts from 'accepts'
import { URL } from 'node:url'
import { get, has } from 'lodash-es'
import rangeParser from 'range-parser'
import contentTypeLib from 'content-type'
import { IncomingEvent } from '@stone-js/core'
import { flattenValues, isString } from '@stone-js/common'
import { CookieCollection } from './cookies/CookieCollection.mjs'

/**
 * IncomingHttpEventOptions.
 *
 * @typedef   {Object} IncomingHttpEventOptions
 * @property  {URL} url
 * @property  {string} ip
 * @property  {Object} [body={}]
 * @property  {Object} [files={}]
 * @property  {string[]} [ips=[]]
 * @property  {Object} [source=null]
 * @property  {string} [locale='en']
 * @property  {Object} [metadata={}]
 * @property  {string} [method='GET']
 * @property  {string} [protocol='http']
 * @property  {string} [queryString=null]
 * @property  {string} [defaultLocale='en']
 * @property  {(Object|Headers)} [headers={}]
 * @property  {CookieCollection} [cookies=null]
 */

/**
 * Class representing an IncomingHttpEvent.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class IncomingHttpEvent extends IncomingEvent {
  /**
   * INCOMING_HTTP_EVENT Event name, fires on platform http message.
   *
   * @type {Symbol}
   * @event IncomingHttpEvent#INCOMING_HTTP_EVENT
   */
  static INCOMING_HTTP_EVENT = Symbol('stonejs@incoming_http_event')

  /** @type {string} */
  #ip

  /** @type {string[]} */
  #ips

  /** @type {URL} */
  #url

  /** @type {Object} */
  #body

  /** @type {Object} */
  #files

  /** @type {URLSearchParams} */
  #query

  /** @type {string} */
  #method

  /** @type {Object} */
  #accepts

  /** @type {(Map|Headers|Object)} */
  #headers

  /** @type {CookieCollection} */
  #cookies

  /** @type {string} */
  #protocol

  /** @type {string} */
  #queryString

  /** @type {Function} */
  #userResolver

  /** @type {Function} */
  #routeResolver

  /**
   * Create an IncomingHttpEvent.
   *
   * @param   {IncomingHttpEventOptions} options
   * @returns {IncomingHttpEvent}
   */
  static create (options) {
    return new this(options)
  }

  /**
   * Create an IncomingHttpEvent.
   *
   * @param  {IncomingHttpEventOptions} options
   * @throws {TypeError}
   */
  constructor ({
    ip,
    url,
    ips = [],
    body = {},
    files = {},
    locale = 'en',
    method = 'GET',
    headers = {},
    source = null,
    cookies = null,
    metadata = {},
    protocol = 'http',
    queryString = null,
    defaultLocale = 'en'
  }) {
    super({ type: IncomingHttpEvent.INCOMING_HTTP_EVENT, source, metadata, locale, defaultLocale })

    if (url && !(url instanceof URL)) {
      throw new TypeError('The `url` option must be an instance of `URL`.')
    }

    this.#ip = ip
    this.#ips = ips
    this.#url = url
    this.#body = body
    this.#files = files
    this.#method = method
    this.#protocol = protocol
    this.#accepts = accepts(this)
    this.#queryString = queryString
    this.#query = new URLSearchParams(this.#queryString)
    this.#cookies = cookies ?? CookieCollection.create()
    this.#headers = headers instanceof Headers ? headers : new Headers(headers)
  }

  /** @returns {string} */
  get ip () {
    return this.#ip
  }

  /** @returns {string[]} */
  get ips () {
    return this.#ips
  }

  /** @returns {string} */
  get decodedPathname () {
    try {
      return decodeURIComponent(this.pathname)
    } catch (_) {
      return null
    }
  }

  /** @returns {string} */
  get hash () {
    return this.#url.hash
  }

  /** @returns {string} */
  get host () {
    return this.#url.host
  }

  /** @returns {string} */
  get hostname () {
    return this.#url.hostname
  }

  /** @returns {string} */
  get method () {
    return this.#method
  }

  /** @returns {Object} */
  get params () {
    return this.route().parameters?.()
  }

  /** @returns {string} */
  get path () {
    return this.#url ? `${this.#url.pathname}${this.#url.search}` : null
  }

  /** @returns {string} */
  get pathname () {
    return this.#url.pathname
  }

  /** @returns {string} */
  get protocol () {
    return this.#protocol
  }

  /** @returns {URLSearchParams} */
  get query () {
    return this.#query
  }

  /** @returns {string} */
  get queryString () {
    return this.#queryString
  }

  /** @returns {string} */
  get uri () {
    return this.#url.href
  }

  /** @returns {string} */
  get scheme () {
    return this.protocol
  }

  /** @returns {string[]} */
  get segments () {
    return this.#url.pathname.split('/')
  }

  /** @returns {boolean} */
  get isSecure () {
    return this.protocol === 'https'
  }

  /** @returns {boolean} */
  get isXhr () {
    return this.getHeader('X-Requested-With', '').toLowerCase() === 'xmlhttprequest'
  }

  /** @returns {boolean} */
  get isAjax () {
    return this.isXhr
  }

  /** @returns {string} */
  get userAgent () {
    return this.getHeader('user-agent')
  }

  /** @returns {boolean} */
  get isPrefetch () {
    return [this.getHeader('Purpose'), this.getHeader('Sec-Purpose')].includes('prefetch')
  }

  /** @returns {Object} */
  get files () {
    return this.#files
  }

  /** @returns {Object} */
  get body () {
    return this.#body
  }

  /** @returns {string} */
  get etag () {
    return this.getHeader('ETag')
  }

  /** @returns {CookieCollection} */
  get cookies () {
    return this.#cookies
  }

  /** @returns {(Object|Headers)} */
  get headers () {
    return this.#headers
  }

  /** @returns {string[]} */
  get types () {
    return this.#accepts.types()
  }

  /** @returns {string[]} */
  get charsets () {
    return this.#accepts.charsets()
  }

  /** @returns {string[]} */
  get languages () {
    return this.#accepts.languages()
  }

  /** @returns {string[]} */
  get encodings () {
    return this.#accepts.encodings()
  }

  /** @returns {string} */
  get charset () {
    return contentTypeLib.parse(this).parameters.charset
  }

  /** @returns {string} */
  get contentType () {
    return contentTypeLib.parse(this).type
  }

  /** @returns {Object} */
  get user () {
    return this.userResolver()
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
   * Check current event method.
   *
   * @param   {string} method
   * @returns {boolean}
   */
  isMethod (method) {
    return this.#method.toUpperCase() === method.toUpperCase()
  }

  /**
   * Is current event method is safe.
   *
   * @returns {boolean}
   */
  isMethodSafe () {
    return ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(this.#method)
  }

  /**
   * Is current event method is cacheable.
   *
   * @returns {boolean}
   */
  isMethodCacheable () {
    return ['GET', 'HEAD'].includes(this.#method)
  }

  /**
   * Get uri with or without domain.
   *
   * @param   {boolean} [withDomain=false]
   * @returns {string}
   */
  getUri (withDomain = false) {
    return withDomain ? new URL(this.decodedPathname, this.hostname).href : this.decodedPathname
  }

  /**
   * Return current route or route parameter.
   *
   * @param   {string} [param]
   * @param   {string} [fallback=null]
   * @returns {(string|Object)}
   */
  route (param, fallback = null) {
    const route = this.getRouteResolver()
    return !param ? route : route?.parameters(param, fallback)
  }

  /**
   * Generate an unique identifier for each event.
   *
   * @param   {string} path
   * @returns {string}
   */
  fingerprint () {
    const route = this.route()

    if (!route) {
      throw new TypeError('Unable to generate fingerprint. Route unavailable.')
    }

    return btoa([].concat(route.methods, route.getDomain(), route.uri, this.ip).join('|'))
  }

  /**
   * Get user resolver.
   *
   * @returns {Function}
   */
  getUserResolver () {
    return this.#userResolver ?? (() => null)
  }

  /**
   * Set user resolver.
   *
   * @returns {Function}
   */
  setUserResolver (resolver) {
    this.#userResolver = resolver
    return this
  }

  /**
   * Get route resolver.
   *
   * @returns {Function}
   */
  getRouteResolver () {
    return this.#routeResolver ?? (() => null)
  }

  /**
   * Set route resolver.
   *
   * @returns {Function}
   */
  setRouteResolver (resolver) {
    this.#routeResolver = resolver
    return this
  }

  /**
   * Return a cloned instance.
   *
   * @returns {IncomingHttpEvent}
   */
  clone () {
    return new IncomingHttpEvent({
      ip: this.#ip,
      ips: this.#ips,
      url: this.#url,
      locale: this.locale,
      method: this.#method,
      cookies: this.#cookies,
      protocol: this.#protocol,
      metadata: this.getMetadata(),
      queryString: this.#queryString,
      body: structuredClone(this.#body),
      defaultLocale: this.defaultLocale,
      files: structuredClone(this.#files),
      headers: structuredClone(this.#headers)
    })
  }
}

import { get, set } from 'lodash-es'
import { Macroable } from '@stone-js/common'

/**
 * Class representing an IncomingEvent.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @extends Macroable
 */
export class IncomingEvent extends Macroable {
  _url
  _locale
  _method
  _metadata
  _userResolver
  _routeResolver
  _defaultLocale

  /**
   * Create an IncomingEvent.
   *
   * @param  {Object} options - Event options.
   * @param  {URL} [options.url=null] - Event url.
   * @param  {Object} [options.metadata={}] - Event data.
   * @param  {string} [options.locale='en'] - Event locale.
   * @param  {string} [options.defaultLocale='en'] - Event default locale.
   * @returns {IncomingEvent}
   * @throws {TypeError}
   */
  static create (options) {
    return new this(options)
  }

  /**
   * Create an IncomingEvent.
   *
   * @param  {Object} options - Event options.
   * @param  {URL} [options.url=null] - Event url.
   * @param  {Object} [options.metadata={}] - Event data.
   * @param  {string} [options.locale='en'] - Event locale.
   * @param  {string} [options.defaultLocale='en'] - Event default locale.
   * @throws {TypeError}
   */
  constructor ({
    url = null,
    metadata = {},
    locale = 'en',
    defaultLocale = 'en'
  }) {
    super()

    if (url && !(url instanceof URL)) {
      throw new TypeError('The `url` option must be an instance of `URL`.')
    }

    this._url = url
    this._method = 'GET'
    this._locale = locale
    this._metadata = metadata
    this._defaultLocale = defaultLocale
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
    return this._url?.hash
  }

  /** @returns {string} */
  get host () {
    return this._url?.host
  }

  /** @returns {string} */
  get hostname () {
    return this._url?.hostname
  }

  /** @returns {string} */
  get locale () {
    return this.get('locale', this._locale) ?? this._defaultLocale
  }

  /** @returns {string} */
  get method () {
    return this._method
  }

  /** @returns {Object} */
  get params () {
    return this.route()?.parameters?.() ?? {}
  }

  /** @returns {string} */
  get path () {
    return this._url ? `${this._url?.pathname}${this._url?.search}` : null
  }

  /** @returns {string} */
  get pathname () {
    return this._url?.pathname
  }

  /** @returns {string} */
  get protocol () {
    return this._url?.protocol.replace(':', '')
  }

  /** @returns {Object} */
  get query () {
    return this._url?.searchParams
  }

  /** @returns {string} */
  get uri () {
    return this._url?.href
  }

  /** @returns {string} */
  get scheme () {
    return this.protocol
  }

  /** @returns {string[]} */
  get segments () {
    return this._url?.pathname.split('/')
  }

  /** @returns {Object} */
  get user () {
    return this._userResolver()
  }

  /** @returns {boolean} */
  get isSecure () {
    return this.protocol === 'https'
  }

  /**
   * Check current event method.
   *
   * @param   {string} method
   * @returns {boolean}
   */
  isMethod (method) {
    return this.method.toUpperCase() === method.toUpperCase()
  }

  /**
   * Is current event method is safe.
   *
   * @returns {boolean}
   */
  isMethodSafe () {
    return ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(this.method)
  }

  /**
   * Is current event method is cacheable.
   *
   * @returns {boolean}
   */
  isMethodCacheable () {
    return ['GET', 'HEAD'].includes(this.method)
  }

  /**
   * Get data from request.
   * 1st - Get from route params if exist.
   * 2nd - Get from metadata if exists.
   * last - return fallback value.
   *
   * @param   {string} key
   * @param   {*} [fallback=null]
   * @returns {(string|*)}
   */
  get (key, fallback = null) {
    // Get from route params
    if (this.route()?.hasParameter?.(key)) {
      return this.route().parameter(key)
    }

    // Get from metadata
    return this.metadata(key, fallback)
  }

  /**
   * Set data to request.
   * Add it to metadata.
   *
   * @param   {string} key
   * @param   {string} [value=null]
   * @returns {this}
   */
  set (key, value = null) {
    key = typeof key === 'object' ? key : { [key]: value }

    for (const [name, val] of Object.entries(key)) {
      set(this._metadata, name, val)
    }

    return this
  }

  /**
   * Set locale.
   *
   * @param   {string} locale
   * @returns {this}
   */
  setLocale (locale) {
    this._locale = locale
    return this
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
   * Add data to metadata.
   *
   * @param   {string} locale
   * @returns {this}
   */
  metadata (key, fallback = null) {
    return get(this._metadata, key, fallback)
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
    return this._userResolver ?? (() => null)
  }

  /**
   * Set user resolver.
   *
   * @returns {Function}
   */
  setUserResolver (resolver) {
    this._userResolver = resolver
    return this
  }

  /**
   * Get route resolver.
   *
   * @returns {Function}
   */
  getRouteResolver () {
    return this._routeResolver ?? (() => null)
  }

  /**
   * Set route resolver.
   *
   * @returns {Function}
   */
  setRouteResolver (resolver) {
    this._routeResolver = resolver
    return this
  }

  /**
   * Return a cloned event.
   *
   * @returns {IncomingEvent}
   */
  clone () {
    return new IncomingEvent({
      url: this._url,
      locale: this._locale,
      defaultLocale: this._defaultLocale,
      metadata: structuredClone(this._metadata)
    })
  }
}

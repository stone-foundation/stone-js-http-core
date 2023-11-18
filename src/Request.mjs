import mime from 'mime'
import fresh from 'fresh'
import typeIs from 'type-is'
import accepts from 'accepts'
import { isIP } from 'node:net'
import { get, has } from 'lodash'
import { isClass } from './Utils.mjs'
import rangeParser from 'range-parser'
import contentTypeLib from 'content-type'
import { Macroable } from '@stone-js/macroable'
import { URIMapper } from './mappers/URIMapper.mjs'
import { LogicException } from './exceptions/LogicException.mjs'
import { RuntimeException } from './exceptions/RuntimeException.mjs'
import { NodeJSRequestMapper } from './mappers/NodeJSRequestMapper.mjs'
import { InvalidArgumentException } from './index.mjs'
import { CookieCollection } from './cookies/CookieCollection.mjs'

export class Request extends Macroable {
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

  static FORWARDED_PARAMS = {
    X_FORWARDED_FOR: 'for',
    X_FORWARDED_HOST: 'host',
    X_FORWARDED_PORT: 'host',
    X_FORWARDED_PROTO: 'proto'
  }

  static TRUSTED_HEADERS = [
    'FORWARDED',
    'X_FORWARDED_FOR',
    'X_FORWARDED_HOST',
    'X_FORWARDED_PORT',
    'X_FORWARDED_PROTO',
    'X_FORWARDED_PREFIX'
  ]

  static #mappers = new Map()

  #ip
  #ips
  #url
  #body
  #files
  #query
  #locale
  #method
  #accepts
  #headers
  #cookies
  #metadata
  #protocol
  #queryString
  #appResolver
  #userResolver
  #routeResolver
  #currentMapperName

  #defaultLocale = 'en'

  static createFromUri (uri, mapper = URIMapper) {
    return this
      .setURIMapper(mapper)
      .createFromMapper('uri', uri)
  }

  static createFromNodeRequest (request, mapper = NodeJSRequestMapper) {
    return this
      .setNodeJsMapper(mapper)
      .createFromMapper('node', request)
  }

  static async createFromMapper (name, request) {
    if (this.hasMapper(name)) {
      const Mapper = this.getMapper(name)
      const mapper = isClass(Mapper) ? new Mapper() : { map: Mapper }
      return new this(await mapper.map(request)).#setCurrentMapperName(name)
    }

    throw new LogicException(`No mapper with this name ${name} exists.`)
  }

  static getMapper (name) {
    return this.#mappers.get(name)
  }

  static hasMapper (name) {
    return this.#mappers.has(name)
  }

  static setURIMapper (mapper) {
    return this.setMapper('uri', mapper)
  }

  static setNodeJsMapper (mapper) {
    return this.setMapper('node', mapper)
  }

  static setMappers (mappers) {
    return Object.entries(mappers).reduce((_prev, [name, mapper]) => this.setMapper(name, mapper))
  }

  static setMapper (name, mapper) {
    if (mapper.prototype.map) {
      this.#mappers.set(name,  mapper)
      return this
    }

    throw new LogicException('Mapper must have a `map` method.')
  }

  constructor ({
    ip,
    ips,
    url,
    body,
    files,
    locale,
    method,
    headers,
    cookies,
    metadata,
    protocol,
    queryString,
    defaultLocale
  }) {
    super()

    this.#ip = ip
    this.#url = url
    this.#ips = ips ?? []
    this.#locale = locale
    this.#body = body ?? {}
    this.#files = files ?? {}
    this.#accepts = accepts(this)
    this.#method = method ?? 'GET'
    this.#metadata = metadata ?? {}
    this.#queryString = queryString ?? ''
    this.#protocol = protocol ?? 'HTTP/1.1'
    this.#query = new URLSearchParams(this.#queryString)
    this.#cookies = cookies ?? CookieCollection.instance()
    this.#defaultLocale = defaultLocale ?? this.#defaultLocale
    this.#headers = headers instanceof Headers ? headers : new Headers(headers ?? {})
  }

  get ip () {
    return this.#ip
  }

  get ips () {
    return this.#ips
  }

  get isXhr () {
    return this.header('X-Requested-With', '').toLowerCase() === 'xmlhttprequest'
  }

  get isAjax () {
    return this.isXhr
  }

  get userAgent () {
    return this.header('user-agent')
  }

  get isSecure () {
    this.protocol === 'https'
  }

  get isPrefetch () {
    return [this.#headers.get('Purpose'), this.#headers.get('Sec-Purpose')].includes('prefetch')
  }

  get uri () {
    this.#url.href
  }

  get scheme () {
    return this.#protocol
  }
  
  get protocol () {
    return this.#protocol
  }
  
  get host () {
    return this.#url.host
  }
  
  get hostname () {
    return this.#url.hostname
  }

  get decodedPath () {
    try {
      return decodeURIComponent(this.path)
    } catch (_) {
      return null
    }
  }

  get path () {
    return `${this.#url.pathname}${this.#url.search}`
  }
  
  get pathname () {
    return this.#url.pathname
  }

  get segments () {
    return this.#url.pathname.split('/')
  }
  
  get subdomains () {
    if (!this.hostname) { return [] }
    return isIP(this.hostname)
      ? [this.hostname]
      : this.hostname.split('.').reverse().slice(this.app.get('http.subdomain.offset'))
  }
  
  get query () {
    return this.#query
  }

  get queryString () {
    return this.#queryString
  }
  
  get files () {
    return this.#files
  }
  
  get locale () {
    return this.get('locale', this.#locale) ?? this.#defaultLocale
  }
  
  get etag () {
    return this.#headers.get('ETag')
  }
  
  get method () {
    return this.#method
  }
  
  get cookies () {
    return this.#cookies
  }
  
  get headers () {
    return this.#headers
  }
  
  get types () {
    return this.#accepts.types()
  }
  
  get charsets () {
    return this.#accepts.charsets()
  }
  
  get languages () {
    return this.#accepts.languages()
  }
  
  get encodings () {
    return this.#accepts.encodings()
  }
  
  get charset () {
    return contentTypeLib.parse(this).parameters.charset
  }

  get contentType () {
    return contentTypeLib.parse(this).type
  }

  get currentMapperName () {
    return this.#currentMapperName
  }

  get app () {
    return this.#appResolver()
  }

  get user () {
    return this.#userResolver()
  }

  get (key, fallback = null) {
    // Get from params
    if (this.route().hasParameter(key)) {
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

    return fallback
  }

  param (name, fallback = null) {
    return this.get(name, fallback)
  }

  header (name, fallback = null) {
    if (!name) {
      throw new InvalidArgumentException('name argument is required.')
    }

    if (typeof name != 'string') {
      throw new InvalidArgumentException('name must be a string.')
    }

    name = name.toLowerCase()

    if (['referer', 'referrer'].includes(name)) {
      return this.#headers.get('referer') ?? this.#headers.get('referrer') ?? fallback
    }

    return this.#headers.get(name) ?? fallback
  }

  getHeader (name, fallback = null) {
    return this.header(name, fallback)
  }

  hasHeader (name) {
    return this.#headers.has(name)
  }

  accepts (...values) {
    return this.#accepts.type(this.#flattenValues(values))
  }

  acceptsEncodings (...values) {
    return this.#accepts.encoding(this.#flattenValues(values))
  }

  acceptsCharsets (...values) {
    return this.#accepts.charset(this.#flattenValues(values))
  }

  acceptsLanguages (...values) {
    return this.#accepts.language(this.#flattenValues(values))
  }

  getFormat (mimeType) {
    return mime.getExtension(mimeType)
  }

  getMimeType (format) {
    return mime.getType(format)
  }

  range (size, options) {
    if (!this.hasHeader('Range')) return
    return rangeParser(size, this.header('Range'), options)
  }

  is (types) {
    return typeIs(this, this.#flattenValues(types))
  }

  json (key, fallback = null) {
    if (this.is(['json'])) {
      return get(this.#body, key, fallback)
    }

    return fallback
  }

  isFresh (res) {
    if (!['GET', 'HEAD'].includes(this.#method)) {
      return false
    }

    if ((res.status >= 200 && res.status < 300) || res.status === 304) {
      return fresh(this.#headers, {
        etag: res.etag,
        'last-modified': res.lastModified
      })
    }

    return false
  }

  isTale (res) {
    return !this.isFresh(res)
  }

  route (param, fallback = null) {
    const route = this.getRouteResolver()
    return !param ? route : route.parameters(param, fallback)
  }

  uriForPath (path) {
    path = path.startsWith('/') ? path : `/${path}`
    return `${this.scheme}://${this.host}${path}`
  }

  fingerprint () {
    const route = this.route()

    if (!route) {
      throw new RuntimeException('Unable to generate fingerprint. Route unavailable.')
    }

    return btoa([].concat(route.methods, [route.getDomain(), route.uri, this.ip]).join('|'))
  }

  getAppResolver () {
    return this.#appResolver ?? (() => null)
  }

  setAppResolver (resolver) {
    this.#appResolver = resolver
    return this
  }

  getUserResolver () {
    return this.#userResolver ?? (() => null)
  }

  setUserResolver (resolver) {
    this.#userResolver = resolver
    return this
  }

  getRouteResolver () {
    return this.#routeResolver ?? (() => null)
  }

  setRouteResolver (resolver) {
    this.#routeResolver = resolver
    return this
  }

  metadata (key, fallback = null) {
    return get(this.#metadata, key, fallback)
  }

  setMetadata (value) {
    this.#metadata = value
    return this
  }

  setLocale (locale) {
    this.#locale = locale
    return this
  }

  filterFiles (files) {
    return Object.fromEntries(this.#files.entries().filter(([key]) => files.includes(key)))
  }

  isMethod (method) {
    return this.method.toUpperCase() === method.toUpperCase()
  }

  isMethodSafe () {
    return ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(this.method)
  }

  isMethodCacheable () {
    return ['GET', 'HEAD'].includes(this.method)
  }

  #setCurrentMapperName (name) {
    this.#currentMapperName = name
    return this
  }

  #flattenValues (values) {
    return values.reduce((prev, curr) => prev.concat(curr), [])
  }
}

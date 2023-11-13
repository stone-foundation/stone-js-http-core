import typeIs from 'type-is'
import accepts from 'accepts'
import rangeParser from 'range-parser'
import { Macroable } from '@stone-js/macroable'
import { URIMapper } from './mappers/URIMapper.mjs'
import { LogicException } from './exceptions/LogicException.mjs'
import { RuntimeException } from './exceptions/RuntimeException.mjs'
import { NodeJSRequestMapper } from './mappers/NodeJSRequestMapper.mjs'
import { InvalidArgumentException } from './index.mjs'

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
  #params
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
  #convertedFiles
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
      return new this(await this.getMapper(name).map(request)).#setCurrentMapperName(name)
    }

    throw new LogicException(`No mapper with this name ${name} exists`)
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

  static setMapper (name, Mapper) {
    if (Mapper.prototype.map) {
      this.#mappers.set(name, new Mapper())
      return this
    }

    throw new LogicException('Mapper must have a `map` method')
  }

  constructor ({
    ip,
    ips,
    url,
    body,
    files,
    params,
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
    this.#ips = ips
    this.#body = body
    this.#files = files
    this.#params = params
    this.#locale = locale
    this.#method = method
    this.#cookies = cookies
    this.#metadata = metadata
    this.#protocol = protocol
    this.#cookies = this.cookies
    this.#accepts = accepts(this)
    this.#queryString = queryString
    this.#query = new URLSearchParams(queryString)
    this.#defaultLocale = defaultLocale ?? this.#defaultLocale
    this.#headers = headers instanceof Headers ? headers : new Headers(headers)
  }

  get ip () {
    return this.#ip
  }

  get ips () {
    return this.#ips
  }

  get scheme () {
    return this.#protocol
  }

  get isXhr () {
    return this.header('X-Requested-With', '').toLowerCase() === 'xmlhttprequest'
  }

  get contentTypeFormat () {}

  get userAgent () {
    return this.header('user-agent')
  }

  get isSecure () {
    this.protocol === 'https'
  }

  get isPrefetch () {}

  get segments () {}

  get decodedPath () {}

  get path () {}
  
  get baseUrl () {}
  
  get hostname () {
    return this.#url.hostname
  }

  get uri () {}
  
  get basePath () {}
  
  get pathInfo () {}
  
  get protocol () {
    return this.#protocol
  }
  
  get query () {
    return this.#query
  }
  
  get files () {
    return this.#files
  }
  
  get types () {
    return this.#accepts.types()
  }
  
  get locale () {
    return this.#locale
  }
  
  get method () {
    return this.#method
  }
  
  get format () {}
  
  get cookies () {}
  
  get headers () {
    return this.#headers
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

  get queryString () {
    return this.#queryString
  }

  get currentMapperName () {
    return this.#currentMapperName
  }

  get (key, fallback = null) {
    // Get from params
    if (this.route().hasParameter(key)) {
      return this.route().parameter(key)
    }

    // Get from body
    if (this.#body.has(key)) {
      return this.#body.get(key)
    }

    // Get from query string
    if (this.#query.has(key)) {
      return this.#query.get(key)
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

  range (size, options) {
    if (!this.hasHeader('Range')) return
    return rangeParser(size, this.header('Range'), options)
  }

  is (types) {
    return typeIs(this, this.#flattenValues(types))
  }

  json (key, fallback = null) {}

  route (param, fallback = null) {
    const route = this.getRouteResolver()
    return (!route || !param) ? route : route.parameters(param, fallback)
  }

  user () {
    return this.getUserResolver()
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

  metadata (pattern, fallback = null) {
    return this.#deepGet(this.#metadata, pattern, fallback)
  }

  #deepGet (data, pattern, fallback = null) {
    if (!pattern) {
      return data ?? fallback
    }

    return pattern
      .split('.')
      .reduce((prev, key) => prev?.[key] ?? prev, data ?? fallback)
  }

  setMetadata (value) {
    this.#metadata = value
  }

  filterFiles (files) {}

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

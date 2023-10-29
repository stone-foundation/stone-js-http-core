import { LogicException } from "./exceptions/LogicException.mjs"
import { RuntimeException } from "./exceptions/RuntimeException.mjs"
import { NodeJSRequestMapper } from "./mappers/NodeJSRequestMapper.mjs"
import { URIMapper } from "./mappers/URIMapper.mjs"

export class Request {
  static FORMATS = {}

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
    X_FORWARDED_PROTO: 'proto',
  }

  static TRUSTED_HEADERS = [
    'FORWARDED',
    'X_FORWARDED_FOR',
    'X_FORWARDED_HOST',
    'X_FORWARDED_PORT',
    'X_FORWARDED_PROTO',
    'X_FORWARDED_PREFIX',
  ]

  static #mappers = new Map()

  #body
  #query
  #headers
  #metadata
  #userResolver
  #routeResolver
  #convertedFiles
  #currentMapperName

  #defaultLocale = 'en'

  constructor ({
    ip,
    ips,
    url,
    body,
    query,
    files,
    params,
    locale,
    method,
    format,
    cookies,
    headers,
    charsets,
    metadata,
    languages,
    encodings,
    queryString,
    defaultLocale
  }) {
    this.#body = body
    this.#metadata = metadata
    this.#query = new Map(Object.entries(query ?? {}))
    this.#headers = new Map(Object.entries(headers ?? {}))
    this.defaultLocale = defaultLocale ?? Request.defaultLocale
  }

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

  static setMapper (name, mapper) {
    if (mapper.map) {
      this.#mappers.set(name, mapper)
      return this
    }

    throw new LogicException('Mapper must have a `map` method')
  }

  #setCurrentMapperName (name) {
    this.#currentMapperName = name
    return this
  }

  getCurrentMapperName () {
    return this.#currentMapperName
  }

  get (key, fallback = null) {
    // Get from params
    if (this.route().hasParameter(key)) {
      return this.route().parameter(key)
    }
    
    // Get from payload
    if (this.payload.has(key)) {
      return this.payload.get(key)
    }

    // Get from query string
    if (this.query.has(key)) {
      return this.query.get(key)
    }

    return fallback
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
  
  get scheme () {}

  get contentTypeFormat () {}

  get userAgent () {}

  get isSecure () {}

  get isPrefetch () {}

  get segments () {}

  get decodedPath () {}


  get path () {}
  get query () {}
  get files () {}
  get locale () {}
  get method () {}
  get format () {}
  get baseUrl () {}
  get cookies () {}
  get headers () {}
  get hostname () {}
  get protocol () {}
  get basePath () {}
  get charsets () {}
  get pathInfo () {}
  get languages () {}
  get encodings () {}
  get uri () {}
  get queryString () {}

  isMethod (method) {
    return this.method.toUpperCase() === method.toUpperCase()
  }

  isMethodSafe () {
    return ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(this.method)
  }

  isMethodCacheable () {
    return ['GET', 'HEAD'].includes(this.method)
  }

  static initializeFormats () {
    this.FORMATS = {
      html: ['text/html', 'application/xhtml+xml'],
      txt: ['text/plain'],
      js: ['application/javascript', 'application/x-javascript', 'text/javascript'],
      css: ['text/css'],
      json: ['application/json', 'application/x-json'],
      jsonld: ['application/ld+json'],
      xml: ['text/xml', 'application/xml', 'application/x-xml'],
      rdf: ['application/rdf+xml'],
      atom: ['application/atom+xml'],
      rss: ['application/rss+xml'],
      form: ['application/x-www-form-urlencoded', 'multipart/form-data'],
    }
  }
}
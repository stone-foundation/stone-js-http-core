/**
 * Class representing a HandleCorsMiddleware.
 *
 * @author Mr. Stone <pierre.evens16@gmail.com>
 * @comment Inspired by expressjs Cors https://www.npmjs.com/package/cors
 */
export class HandleCorsMiddleware {
  #config
  #headers
  #headerVary

  constructor({ config }) {
    this.#config = config
    this.#headerVary = []
    this.#headers = new Headers()
  }

  response (request, response, next) {
    const options = this.#getOptions()
    
    this
      .#configureCredentials(options)
      .#configureExposedHeaders(options)
      .#configureOrigin(options, request)

    if (request.isMethod('OPTIONS')) {
      this
        .#configureMaxAge(options)
        .#configureMethods(options)
        .#configureAllowedHeaders(options, request)
      
      if (options.preflightStop) {
        return response
          .addVary(this.#headerVary)
          .setHeaders(this.#headers)
          .header('Content-Length', '0')
          .setStatus(options.successStatus ?? 204)
      }
    }
      
    response
      .addVary(this.#headerVary)
      .setHeaders(this.#headers)

    return next(request, response)
  }

  #getOptions () {
    return { ...this.#getDefaults(), ...this.#config.get('http.cors', {}) }
  }

  #isOriginAllowed (origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      return allowedOrigin.reduce((prev, curr) => this.#isOriginAllowed(origin, curr) || prev, false)
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin)
    } else if (typeof allowedOrigin === 'string' || allowedOrigin instanceof String) {
      return origin === allowedOrigin
    } else {
      return !!allowedOrigin
    }
  }

  #configureOrigin ({ origin }, request) {
    if (!origin || origin === '*') {
      this.#setHeader('Access-Control-Allow-Origin', '*')
    } else if (typeof origin === 'string' || origin instanceof String) {
      this
        .#addVary('Origin')
        .#setHeader('Access-Control-Allow-Origin', origin)
    } else {
      const reqOrigin = request.header('origin')
      this
        .#addVary('Origin')
        .#setHeader('Access-Control-Allow-Origin', this.#isOriginAllowed(reqOrigin, origin) ? reqOrigin : false)
    }

    return this
  }

  #configureMethods ({ methods }) {
    return this.#setHeader('Access-Control-Allow-Methods', Array.isArray(methods) ? methods.join(',') : methods)
  }

  #configureCredentials({ credentials }) {
    return credentials === true ? this.#setHeader('Access-Control-Allow-Credentials', true) : this
  }

  #configureAllowedHeaders ({ allowedHeaders }, request) {
    if (Array.isArray(allowedHeaders)) {
      allowedHeaders = allowedHeaders.join(',')
    } else if (!allowedHeaders) {
      this.#addVary('Access-Control-Request-Headers')
      allowedHeaders = request.header('access-control-request-headers')
    }

    if (allowedHeaders && allowedHeaders.length) {
      this.#setHeader('Access-Control-Allow-Headers', allowedHeaders)
    }

    return this
  }

  #configureExposedHeaders ({ exposedHeaders }) {
    if (Array.isArray(exposedHeaders)) {
      exposedHeaders = exposedHeaders.join(',')
    }

    if (exposedHeaders && exposedHeaders.length) {
      this.#setHeader('Access-Control-Expose-Headers', exposedHeaders)
    }

    return this
  }

  #configureMaxAge ({ maxAge }) {
    maxAge = `${maxAge}`

    if (maxAge.length) {
      this.#setHeader('Access-Control-Max-Age', maxAge)
    }

    return this
  }

  #setHeader (name, value) {
    this.#headers.set(name, value)

    return this
  }

  #addVary (value) {
    this.#headerVary.push(value)

    return this
  }

  #getDefaults () {
    return  {
      origin: '*',
      preflightContinue: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  }
}

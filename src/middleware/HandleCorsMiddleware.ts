import { NextPipe } from '@stone-js/pipeline'
import { HttpCorsConfig } from '../options/HttpConfig'
import { IncomingHttpEvent } from '../IncomingHttpEvent'
import { IBlueprint, KernelContext } from '@stone-js/core'
import { OutgoingHttpResponse } from '../OutgoingHttpResponse'

/**
 * HandleCorsMiddleware is responsible for adding Cross-Origin Resource Sharing (CORS) headers to HTTP responses.
 * It allows controlling how clients from different origins can access the server's resources.
 *
 * @template U - Represents the type of the incoming HTTP event.
 * @template V - Represents the type of the outgoing HTTP response.
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class HandleCorsMiddleware<U extends IncomingHttpEvent, V extends OutgoingHttpResponse> {
  private readonly headers: Headers
  private readonly headerVary: string[]
  private readonly blueprint: IBlueprint

  /**
   * Construct an instance of HandleCorsMiddleware.
   *
   * @param blueprint - The configuration blueprint used for managing CORS settings.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.headerVary = []
    this.blueprint = blueprint
    this.headers = new Headers()
  }

  /**
   * Handle CORS by modifying the response headers based on the configuration.
   *
   * @param param0 - The context containing incoming HTTP event and outgoing HTTP response.
   * @param next - The next middleware function to continue processing the request.
   * @returns The modified kernel context or the next middleware function result.
   */
  handle ({ event, response }: KernelContext<U, V>, next: NextPipe<KernelContext<U, V>>): KernelContext<U, V> | Promise<KernelContext<U, V>> {
    const options = this.getOptions()

    this
      .configureCredentials(options)
      .configureExposedHeaders(options)
      .configureOrigin(options, event)

    if (event.isMethod('OPTIONS')) {
      this
        .configureMaxAge(options)
        .configureMethods(options)
        .configureAllowedHeaders(options, event)

      if (options.preflightStop === true && response !== undefined) {
        response
          .addVary(this.headerVary)
          .setHeaders(this.headers)
          .setHeader('Content-Length', '0')
          .setStatus(options.successStatus ?? 204)
        return next({ event, response })
      }
    }
    if (response !== undefined) {
      response
        .addVary(this.headerVary)
        .setHeaders(this.headers)
    }

    return next({ event, response })
  }

  /**
   * Get the CORS options by merging the blueprint configuration with defaults.
   *
   * @returns The merged CORS options.
   */
  private getOptions (): Partial<HttpCorsConfig> {
    return { ...this.getDefaults(), ...this.blueprint.get('stone.http.cors', {}) }
  }

  /**
   * Check if the given origin is allowed based on the provided configuration.
   *
   * @param origin - The origin to check.
   * @param allowedOrigin - The allowed origins configuration.
   * @returns Whether the origin is allowed.
   */
  private isOriginAllowed (origin: string, allowedOrigin: unknown): boolean {
    if (Array.isArray(allowedOrigin)) {
      return allowedOrigin.reduce((prev, curr) => this.isOriginAllowed(origin, curr) || prev, false)
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin)
    } else if (typeof allowedOrigin === 'string') {
      return origin === allowedOrigin
    } else {
      return allowedOrigin === undefined
    }
  }

  /**
   * Configure the `Access-Control-Allow-Origin` header based on the request origin and CORS options.
   *
   * @param {origin} HttpCorsConfig - The CORS options.
   * @param request - The incoming request.
   * @returns The middleware instance for method chaining.
   */
  private configureOrigin ({ origin }: Partial<HttpCorsConfig>, request: any): this {
    if (origin === undefined || origin === '*') {
      this.setHeader('Access-Control-Allow-Origin', '*')
    } else if (typeof origin === 'string') {
      this.addVary('Origin').setHeader('Access-Control-Allow-Origin', origin)
    } else {
      const reqOrigin = request.header('origin')
      this.addVary('Origin').setHeader('Access-Control-Allow-Origin', this.isOriginAllowed(reqOrigin, origin) ? reqOrigin : 'false')
    }

    return this
  }

  /**
   * Configure the `Access-Control-Allow-Methods` header based on the CORS options.
   *
   * @param {methods} HttpCorsConfig - The CORS options.
   * @returns The middleware instance for method chaining.
   */
  private configureMethods ({ methods }: Partial<HttpCorsConfig>): this {
    return this.setHeader('Access-Control-Allow-Methods', Array.isArray(methods) ? methods.join(',') : methods ?? '*')
  }

  /**
   * Configure the `Access-Control-Allow-Credentials` header if allowed.
   *
   * @param {credentials} HttpCorsConfig - The CORS options.
   * @returns The middleware instance for method chaining.
   */
  private configureCredentials ({ credentials }: Partial<HttpCorsConfig>): this {
    return credentials === true ? this.setHeader('Access-Control-Allow-Credentials', 'true') : this
  }

  /**
   * Configure the `Access-Control-Allow-Headers` header based on the request headers and CORS options.
   *
   * @param {allowedHeaders} HttpCorsConfig - The CORS options.
   * @param request - The incoming request.
   * @returns The middleware instance for method chaining.
   */
  private configureAllowedHeaders ({ allowedHeaders }: Partial<HttpCorsConfig>, request: any): this {
    if (Array.isArray(allowedHeaders)) {
      allowedHeaders = allowedHeaders.join(',')
    } else if (allowedHeaders === undefined) {
      this.addVary('Access-Control-Request-Headers')
      allowedHeaders = request.header('access-control-request-headers')
    }

    if (allowedHeaders !== undefined && allowedHeaders.length > 0 && typeof allowedHeaders === 'string') {
      this.setHeader('Access-Control-Allow-Headers', allowedHeaders)
    }

    return this
  }

  /**
   * Configure the `Access-Control-Expose-Headers` header based on the CORS options.
   *
   * @param {exposedHeaders} HttpCorsConfig - The CORS options.
   * @returns The middleware instance for method chaining.
   */
  private configureExposedHeaders ({ exposedHeaders }: Partial<HttpCorsConfig>): this {
    if (Array.isArray(exposedHeaders)) {
      exposedHeaders = exposedHeaders.join(',')
    }

    if (exposedHeaders !== undefined && exposedHeaders.length > 0) {
      this.setHeader('Access-Control-Expose-Headers', exposedHeaders)
    }

    return this
  }

  /**
   * Configure the `Access-Control-Max-Age` header if provided in the CORS options.
   *
   * @param {maxAge} HttpCorsConfig - The CORS options.
   * @returns The middleware instance for method chaining.
   */
  private configureMaxAge ({ maxAge }: Partial<HttpCorsConfig>): this {
    const newMaxAge = String(maxAge)

    if (newMaxAge.length > 0) {
      this.setHeader('Access-Control-Max-Age', newMaxAge)
    }

    return this
  }

  /**
   * Set a response header.
   *
   * @param name - The name of the header to set.
   * @param value - The value of the header to set.
   * @returns The middleware instance for method chaining.
   */
  private setHeader (name: string, value: string): this {
    this.headers.set(name, value)
    return this
  }

  /**
   * Add a header to the `Vary` list for the response.
   *
   * @param value - The header name to add to `Vary`.
   * @returns The middleware instance for method chaining.
   */
  private addVary (value: string): this {
    this.headerVary.push(value)
    return this
  }

  /**
   * Get the default CORS options.
   *
   * @returns An object containing the default CORS options.
   */
  private getDefaults (): Record<string, string | boolean> {
    return {
      origin: '*',
      preflightContinue: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }
  }
}

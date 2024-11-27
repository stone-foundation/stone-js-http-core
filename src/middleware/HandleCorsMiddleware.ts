import { NextPipe } from '@stone-js/pipeline'
import { HttpCorsConfig } from '../options/HttpConfig'
import { IncomingHttpEvent } from '../IncomingHttpEvent'
import { IBlueprint, KernelContext } from '@stone-js/core'
import { OutgoingHttpResponse } from '../OutgoingHttpResponse'

/**
 * Class representing an HandleCorsMiddleware.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 * @comment Inspired by expressjs Cors https://www.npmjs.com/package/cors
 */
export class HandleCorsMiddleware<U extends IncomingHttpEvent, V extends OutgoingHttpResponse> {
  private readonly headers: Headers
  private readonly headerVary: string[]
  private readonly blueprint: IBlueprint

  /**
   * Create a HandleCorsMiddleware.
   *
   * @param container - The container with configuration.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.headerVary = []
    this.blueprint = blueprint
    this.headers = new Headers()
  }

  /**
   * Handle passable.
   *
   * @param event - The incoming HTTP event.
   * @param response - The outgoing HTTP response.
   * @param next - The next middleware function.
   * @returns The response or the result of the next function.
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

      if (options.preflightStop && response !== undefined) {
        response
          .addVary(this.headerVary[0])
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

  private getOptions (): HttpCorsConfig {
    return { ...this.getDefaults(), ...this.blueprint.get('app.http.cors', {}) } as HttpCorsConfig
  }

  private isOriginAllowed (origin: string, allowedOrigin: unknown): boolean {
    if (Array.isArray(allowedOrigin)) {
      return allowedOrigin.reduce((prev, curr) => this.isOriginAllowed(origin, curr) || prev, false)
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin)
    } else if (typeof allowedOrigin === 'string') {
      return origin === allowedOrigin
    } else {
      return !!allowedOrigin
    }
  }

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

  private configureMethods ({ methods }: Partial<HttpCorsConfig>): this {
    return this.setHeader('Access-Control-Allow-Methods', Array.isArray(methods) ? methods.join(',') : methods ?? '*')
  }

  private configureCredentials ({ credentials }: Partial<HttpCorsConfig>): this {
    return credentials === true ? this.setHeader('Access-Control-Allow-Credentials', 'true') : this
  }

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

  private configureExposedHeaders ({ exposedHeaders }: Partial<HttpCorsConfig>): this {
    if (Array.isArray(exposedHeaders)) {
      exposedHeaders = exposedHeaders.join(',')
    }

    if (exposedHeaders !== undefined && exposedHeaders.length > 0) {
      this.setHeader('Access-Control-Expose-Headers', exposedHeaders)
    }

    return this
  }

  private configureMaxAge ({ maxAge }: Partial<HttpCorsConfig>): this {
    const newMaxAge = `${maxAge}`

    if (newMaxAge.length > 0) {
      this.setHeader('Access-Control-Max-Age', newMaxAge)
    }

    return this
  }

  private setHeader (name: string, value: string): this {
    this.headers.set(name, value)
    return this
  }

  private addVary (value: string): this {
    this.headerVary.push(value)
    return this
  }

  private getDefaults (): Record<string, string | boolean> {
    return {
      origin: '*',
      preflightContinue: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }
  }
}

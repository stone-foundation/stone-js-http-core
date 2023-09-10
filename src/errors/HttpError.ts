import statuses from 'statuses'
import { ErrorOptions, RuntimeError } from '@stone-js/core'

/**
 * Represents options for configuring an error.
 */
export interface HttpErrorOptions extends ErrorOptions {
  headers?: Map<string, string> | Headers
  statusCode?: number
  statusMessage?: string
  body?: unknown
}

/**
 * Class representing an HttpError.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class HttpError extends RuntimeError {
  readonly body: unknown
  readonly headers: Headers
  readonly statusCode: number
  readonly statusMessage: string

  /**
   * Create an HttpError.
   *
   * @param message - The message to log.
   * @param options - The error options.
   */
  constructor (message: string, options: HttpErrorOptions = {}) {
    super(message, options)

    this.name = 'HttpError'
    this.body = options.body
    this.statusCode = options.statusCode ?? 500
    this.statusMessage = options.statusMessage ?? statuses.message[this.statusCode] ?? 'Unknown Status'
    this.headers = options.headers instanceof Map ? new Headers(Object.fromEntries(options.headers.entries())) : options.headers ?? new Headers()
  }
}

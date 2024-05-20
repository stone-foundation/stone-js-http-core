import statuses from 'statuses'
import { RuntimeError } from '@stone-js/common'

/**
 * Class representing an HttpError.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @extends RuntimeError
 */
export class HttpError extends RuntimeError {
  /**
   * Create a HttpError.
   *
   * @param {number} statusCode - The http Status code.
   * @param {*} body - The http body.
   * @param {string} message - The message to log.
   * @param {Object} [options={}] - The error options.
   * @param {Map|Headers} [options.headers={}] - The http headers.
   * @param {number} [options.statusMessage=null] - The http Status message.
   * @param {string} [options.code] - The error code.
   * @param {*} [options.metadata] - Additional information to log.
   * @param {*} [options.cause] - Previous error.
   */
  constructor (statusCode, body, message, options = {}) {
    super(message, options)

    this.body = body
    this.name = 'HttpError'
    this.statusCode = statusCode
    this.headers = options.headers ?? new Headers()
    this.statusMessage = options.statusMessage ?? statuses.message[statusCode]
  }
}

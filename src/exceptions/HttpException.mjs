import { RuntimeException } from './RuntimeException.mjs'

/**
 * Class representing an Exception.
 */
export class HttpException extends RuntimeException {
  static CODE = 'HTTP-500'

  constructor (statusCode, message = '', statusMessage = '', headers = [], previous = null, code = HttpException.CODE) {
    super(message, code, previous)

    this.headers = headers
    this.statusCode = statusCode
    this.statusMessage = statusMessage
  }

  setHeaders (headers) {
    this.headers = headers
    return this
  }
}

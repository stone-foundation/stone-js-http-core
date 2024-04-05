import { HttpException } from './HttpException.mjs'

export class TooManyRequestsHttpException extends HttpException {
  static CODE = 'HTTP_TOO_MANY_REQUESTS-404'

  constructor (retryAfter = undefined, message = '', statusMessage = '', headers = [], previous = null, code = TooManyRequestsHttpException.CODE) {
    super(429, message, statusMessage, { ...headers, 'Retry-After': retryAfter }, previous, code)
  }
}

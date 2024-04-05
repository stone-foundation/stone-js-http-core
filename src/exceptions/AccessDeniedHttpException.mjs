import { HttpException } from './HttpException.mjs'

export class AccessDeniedHttpException extends HttpException {
  static CODE = 'HTTP_ACCES_DENIED-403'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = AccessDeniedHttpException.CODE) {
    super(403, message, statusMessage, headers, previous, code)
  }
}

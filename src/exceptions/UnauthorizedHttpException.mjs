import { HttpException } from './HttpException.mjs'

export class UnauthorizedHttpException extends HttpException {
  static CODE = 'HTTP_UNAUTHORIZED-401'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = UnauthorizedHttpException.CODE) {
    super(401, message, statusMessage, headers, previous, code)
  }
}

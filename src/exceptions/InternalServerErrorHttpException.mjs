import { HttpException } from './HttpException.mjs'

export class InternalServerErrorHttpException extends HttpException {
  static CODE = 'HTTP_INTERNAL_SERVER_ERROR-500'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = InternalServerErrorHttpException.CODE) {
    super(500, message, statusMessage, headers, previous, code)
  }
}

import { HttpException } from './HttpException.mjs'

export class BadRequestHttpException extends HttpException {
  static CODE = 'HTTP_BAD_REQUEST-400'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = BadRequestHttpException.CODE) {
    super(400, message, statusMessage, headers, previous, code)
  }
}

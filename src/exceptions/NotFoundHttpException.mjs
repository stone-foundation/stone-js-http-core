import { HttpException } from './HttpException.mjs'

export class NotFoundHttpException extends HttpException {
  static CODE = 'HTTP_NOT_FOUND-404'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = NotFoundHttpException.CODE) {
    super(404, message, statusMessage, headers, previous, code)
  }
}

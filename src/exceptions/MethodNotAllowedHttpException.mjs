import { HttpException } from './HttpException.mjs'

export class MethodNotAllowedHttpException extends HttpException {
  static CODE = 'HTTP_METHOD_NOT_ALLOWED-405'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = MethodNotAllowedHttpException.CODE) {
    super(405, message, statusMessage, headers, previous, code)
  }
}

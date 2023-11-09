import { HttpException } from "./HttpException.mjs"

export class ServiceUnavailableHttpException extends HttpException {
  static CODE = 'HTTP_SERVICE_UNAVAILABLE-503'

  constructor (message = '', statusMessage = '', headers = [], previous = null, code = ServiceUnavailableHttpException.CODE) {
    super(503, message, statusMessage, headers, previous, code)
  }
}

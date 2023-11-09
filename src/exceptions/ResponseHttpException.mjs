import { HttpException } from "./HttpException.mjs"

export class ResponseHttpException extends HttpException {
  static CODE = 'HTTP_RESPONSE'

  constructor (response) {
    super(response.statusCode, response.content, response.statusMessage, response.headers, null, ResponseHttpException.CODE)
  }
}

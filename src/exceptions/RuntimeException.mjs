export class RuntimeException extends Error {
  static CODE = 'HTTP_RUNTIME-500'

  constructor (message, code = RuntimeException.CODE, previous = null) {
    super()
    this.code = code
    this.message = message
    this.previous = previous
    this.name = 'stone.js.http'
  }
}

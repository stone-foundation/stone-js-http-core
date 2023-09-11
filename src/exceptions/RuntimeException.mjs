export class RuntimeException extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = 'noowow.http'
  }
}

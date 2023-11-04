export class LogicException extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = 'StoneJS.http'
  }
}

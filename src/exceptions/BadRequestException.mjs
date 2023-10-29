export class BadRequestException {
  #response

  constructor (response) {
    this.#response = response
  }

  get response () {
    return this.#response
  }
}

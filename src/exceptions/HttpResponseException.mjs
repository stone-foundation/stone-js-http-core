export class HttpResponseException {
  #response

  constructor (response) {
    this.#response = response
  }

  get response () {
    return this.#response
  }
}
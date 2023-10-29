import { Response } from './Response.mjs'
import { InvalidArgumentException } from './exceptions/InvalidArgumentException.mjs'

export class JsonResponse extends Response {
  _data

  constructor (data = null, status = 200, headers = {}, json = false) {
    super('', status, headers)

    if (json && !['string', 'number', 'boolean'].includes(typeof data)) {
      throw new InvalidArgumentException('When json is set to true, data must be one of these values [string, number, boolean]')
    }

    data ??= {}

    json ? this.setJson(data) : this.setData(data)
  }

  static fromJsonString (data, status = 200, headers = {}) {
    return new this(data, status, headers).setJson(data)
  }

  setJson (jsonString) {
    this._data = jsonString
    this.setContent(jsonString)
    this._headers.set('Content-Type', 'application/json')
    return this
  }

  setData (data) {
    return this.json(this._morphToJson(data))
  }

  get data () {
    return JSON.parse(this._data)
  }
}

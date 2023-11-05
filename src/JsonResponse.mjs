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
    return new this(data, status, headers, true)
  }

  setJson (jsonString) {
    this._data = jsonString
    return this
      .setContent(jsonString)
      .setContentType('json')
  }

  setData (data) {
    return this.setJson(this._morphToJson(data))
  }

  get data () {
    return JSON.parse(this._data)
  }
}

import { Response } from './Response.mjs'

export class BinaryFileResponse extends Response {
  constructor (file, status = 200, headers = {}) {
    super('', status, headers)
  }
}

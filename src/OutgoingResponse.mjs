import { Macroable } from '@stone-js/common'

/**
 * Class representing an OutgoingResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @extends Macroable
 */
export class OutgoingResponse extends Macroable {
  /**
   * Create an OutgoingResponse.
   *
   * @param   {*} content
   * @param   {string} [statusCode=null]
   * @param   {string} [statusMessage=null]
   * @returns {OutgoingResponse}
   */
  static create (content, statusCode = null, statusMessage = null) {
    return new this(content, statusCode, statusMessage)
  }

  /**
   * Create an OutgoingResponse.
   *
   * @param {*} content
   * @param {string} [statusCode=null]
   * @param {string} [statusMessage=null]
   */
  constructor (content, statusCode = null, statusMessage = null) {
    super()
    this._content = content
    this._statusCode = statusCode
    this._originalContent = content
    this._statusMessage = statusMessage
  }

  /** @returns {*} */
  get content () {
    return this._content
  }

  /** @returns {*} */
  get originalContent () {
    return this._originalContent
  }

  /** @returns {number} */
  get statusCode () {
    return this._statusCode
  }

  /** @returns {string} */
  get statusMessage () {
    return this._statusMessage
  }

  /**
   * Prepare response before send it.
   *
   * @param   {IncomingEvent} event
   * @returns {this}
   */
  prepare (_event) {
    return this
  }
}

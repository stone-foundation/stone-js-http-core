import { serialize } from 'cookie'
import { LogicError } from '@stone-js/common'
import { sign, unsign } from 'cookie-signature'

/**
 * cookieOptions.
 *
 * @typedef  {Object} cookieOptions
 * @property {string} path
 * @property {Date} expires
 * @property {string} domain
 * @property {number} maxAge
 * @property {boolean} secure
 * @property {string} sameSite
 * @property {boolean} httpOnly
 */

/**
 * Class representing a Cookie.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class Cookie {
  static SAMESITE_LAX = 'lax'
  static SAMESITE_NONE = 'none'
  static SAMESITE_STRICT = 'strict'

  #name
  #value
  #options

  /**
   * Create a Cookie.
   *
   * @param   {string} name - Cookie name.
   * @param   {string} value - Cookie value.
   * @param   {cookieOptions} [options={}] - Cookie options.
   * @returns {Cookie}
   */
  static create (...args) {
    return new this(...args)
  }

  /**
   * Create a Cookie.
   *
   * @param {string} name - Cookie name.
   * @param {*} value - Cookie value.
   * @param {cookieOptions} [options={}] - Cookie options.
   */
  constructor (name, value, options = {}) {
    this.#name = name
    this.#value = value
    this.#options = options
  }

  /** @returns {string} */
  get name () {
    return this.#name
  }

  /** @returns {*} */
  get value () {
    return this.#value
  }

  /** @returns {cookieOptions} */
  get options () {
    return this.#options
  }

  /** @returns {boolean} */
  get isSigned () {
    return this.#value.startsWith('$$s$$:')
  }

  /** @returns {boolean} */
  get isSerialized () {
    return this.#value.startsWith('$$j$$:')
  }

  /**
   * Set options.
   *
   * @param   {cookieOptions} options
   * @returns {this}
   */
  setOptions (options) {
    this.#options = options
    return this
  }

  /**
   * Update options.
   *
   * @param   {cookieOptions} options
   * @returns {this}
   */
  updateOptions (options) {
    return this.setOptions({ ...this.#options, ...options })
  }

  /**
   * Set value.
   *
   * @param   {*} value
   * @returns {this}
   */
  setValue (value) {
    this.value = value
    return this
  }

  /**
   * Set expires.
   *
   * @param   {Date} value
   * @returns {this}
   */
  setExpires (value) {
    this.#options.expires = value
    return this
  }

  /**
   * Set secure.
   *
   * @param   {boolean} value
   * @returns {this}
   */
  setSecure (value) {
    this.#options.secure = value
    return this
  }

  /**
   * Sign cookie.
   *
   * @param   {string} secret
   * @returns {string}
   * @throws  {LogicError}
   */
  sign (secret) {
    if (typeof this.#value !== 'string') {
      throw new LogicError('Can only sign string value.')
    }

    if (!secret) {
      throw new LogicError('A secret is required to sign the value.')
    }

    if (this.isSigned) {
      throw new LogicError('Cannot sign a signed value.')
    }

    return `$$s$$:${sign(this.#value, secret)}`
  }

  /**
   * Unsign cookie.
   *
   * @param   {string} secret
   * @returns {string}
   * @throws  {LogicError}
   */
  unsign (secret) {
    if (typeof this.#value !== 'string') {
      throw new LogicError('Can only unsign string value.')
    }

    if (!this.isSigned) {
      throw new LogicError('Cannot unsign a non signed value.')
    }

    if (!secret) {
      throw new LogicError('A secret is required to unsign the value.')
    }

    return unsign(this.#value.replace('$$s$$:', ''), secret)
  }

  /**
   * Deserialize cookie.
   *
   * @param   {string} [secret=null]
   * @returns {this}
   * @throws  {LogicError}
   */
  deserialize (secret = null) {
    if (this.isSigned && secret) {
      this.#value = this.unsign(secret)
    }

    if (this.isSerialized) {
      this.#value = JSON.parse(this.#value.replace('$$j$$:', ''))
    }

    return this
  }

  /**
   * Serialize cookie.
   *
   * @param   {string} [secret=null]
   * @returns {string}
   * @throws  {LogicError}
   */
  serialize (secret = null) {
    let value = this.#value

    if (!this.isSerialized) {
      value = typeof value === 'object' ? `$$j$$:${JSON.stringify(value)}` : String(value)
    }

    if (!this.isSigned && secret) {
      value = this.sign(secret)
    }

    return serialize(this.#name, value, this.#options)
  }
}

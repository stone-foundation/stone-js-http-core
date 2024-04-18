import { parse } from 'cookie'
import { Cookie } from './Cookie.mjs'

/**
 * Class representing a CookieCollection.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class CookieCollection {
  #secret
  #options
  #cookies

  /**
   * Create a CookieCollection.
   *
   * @param {string} cookie - String cookie from header.
   * @param {cookieOptions} [options={}] - Cookies options
   * @param {string} [secret=null] - Secret value to sign and unsign cookies.
   * @returns {CookieCollection}
   */
  static create (cookie, options = {}, secret = null) {
    return new this(cookie, options, secret)
  }

  /**
   * Create a CookieCollection.
   *
   * @param {string} cookie - String cookie from header.
   * @param {cookieOptions} [options={}] - Cookies options
   * @param {string} [secret=null] - Secret value to sign and unsign cookies.
   */
  constructor (cookie, options = {}, secret = null) {
    this.#secret = secret
    this.#options = options
    this.#cookies = this.#parse(cookie)
  }

  /**
   * Add cookie.
   *
   * @param   {string} name
   * @param   {*} value
   * @param   {cookieOptions} [options={}]
   * @returns {this}
   */
  add (name, value, options = {}) {
    this.#cookies.set(name, Cookie.create(name, value, { ...this.#options, ...options }))
    return this
  }

  /**
   * Update cookie.
   *
   * @param   {string} name
   * @param   {*} value
   * @param   {cookieOptions} [options={}]
   * @returns {this}
   */
  update (name, value, options = {}) {
    this.has(name) && this.get(name).setValue(value).updateOptions(options)
    return this
  }

  /**
   * Get cookie.
   *
   * @param   {string} name
   * @returns {(Cookie|null)}
   */
  get (name) {
    return this.#cookies.get(name) ?? null
  }

  /**
   * Has cookie.
   *
   * @param   {string} name
   * @returns {boolean}
   */
  has (name) {
    return this.#cookies.has(name)
  }

  /**
   * Remove cookie.
   *
   * @param   {string} name - Cookie name to remove
   * @param   {boolean} [force=false] - Remove only from collection.
   * @returns {this}
   */
  remove (name, force = false) {
    if (force) {
      this.#cookies.delete(name)
    } else {
      this.update(name, '', { expires: new Date(1) })
    }

    return this
  }

  /**
   * All cookies.
   *
   * @param   {boolean} [serialize=false] - Must serialize cookies?.
   * @returns {(Array|Object)}
   */
  all (serialize = false) {
    const values = Array.from(this.#cookies.values())
    return serialize
      ? values.map(v => v.serialize(this.#secret))
      : Object.fromEntries(values.map(v => [v.name, v.value]))
  }

  /**
   * Clear cookies.
   *
   * @param   {boolean} [force=false] - Remove only from collection.
   * @returns {this}
   */
  clear (force = false) {
    if (force) {
      this.#cookies.clear()
    } else {
      this.#cookies.forEach(v => this.update(v.name, '', { expires: new Date(1) }))
    }

    return this
  }

  /**
   * Secure cookies.
   *
   * @param   {boolean} [value=false]
   * @returns {this}
   */
  secure (value = false) {
    this.#cookies.forEach(v => v.setSecure(value))
    return this
  }

  /**
   * Set Secret.
   *
   * @param   {string} value
   * @returns {this}
   */
  setSecret (value) {
    this.#secret = value
    return this
  }

  /**
   * Set options.
   *
   * @param   {cookieOptions} value
   * @returns {this}
   */
  setOptions (value) {
    this.#options = value
    this.#cookies.forEach(v => v.setOptions(value))
    return this
  }

  /**
   * Deserialize cookies.
   *
   * @param   {string} [secret=null]
   * @returns {this}
   */
  deserialize (secret = null) {
    this.#secret = secret ?? this.#secret
    this.#cookies.forEach(v => v.deserialize(this.#secret))
    return this
  }

  #parse (cookie) {
    return new Map(
      Object
        .entries(parse(cookie))
        .map(([name, value]) => [name, Cookie.create(name, value, this.#options).deserialize(this.#secret)])
    )
  }
}

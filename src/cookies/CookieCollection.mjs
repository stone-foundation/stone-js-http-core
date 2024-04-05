import { parse } from 'cookie'
import { Cookie } from './Cookie.mjs'
import { unsign } from 'cookie-signature'

export class CookieCollection {
  #secret
  #options
  #cookies

  static instance (options = {}, secret = null) {
    return new this(options, secret)
  }

  constructor (options = {}, secret = null) {
    this.#secret = secret
    this.#options = options
    this.#cookies = new Map()
  }

  parse (cookieStr) {
    this.#cookies = new Map(
      Object
        .entries(parse(cookieStr))
        .map(([name, value]) => [name, Cookie.instance({ name, value: this.#decode(value) })])
    )
    return this
  }

  add (name, value, options = {}) {
    options = { ...this.#options, ...options }

    if (options.maxAge) {
      const maxAge = options.maxAge - 0

      if (!NaN(maxAge)) {
        options.expires = new Date(Date.now() + maxAge)
        options.maxAge = Math.floor(maxAge / 1000)
      }
    }

    if (!options.path) {
      options.path = '/'
    }

    this.#cookies.set(name, Cookie.instance({ name, value, ...options }))

    return this
  }

  update (name, value, options = {}) {
    this.has(name) && this.get(name).setValue(value).updateOptions(options)
    return this
  }

  get (name) {
    return this.#cookies.get(name)
  }

  all (serialize = false) {
    return serialize ? this.allSerialized() : this.#cookies
  }

  allSerialized () {
    return Array.from(this.#cookies.values()).map(v => v.serialize(this.#secret))
  }

  has (name) {
    return this.#cookies.has(name)
  }

  remove (name, force = false) {
    if (force) {
      this.#cookies.delete(name)
    } else {
      this.update(name, '', { expires: new Date(1) })
    }

    return this
  }

  clear (force = false) {
    if (force) {
      this.#cookies.clear()
    } else {
      this.#cookies.forEach(v => this.update(v.name, '', { expires: new Date(1) }))
    }

    return this
  }

  secure (value = false) {
    this.#cookies.forEach(v => v.setSecure(value))
    return this
  }

  setSecret (value) {
    this.#secret = value
    return this
  }

  setOptions (value) {
    this.#options = value
    return this
  }

  #decode (value) {
    if (value.startsWith('s:')) {
      value = unsign(value.replace('s:', ''), this.#secret)
    }

    if (value.startsWith('j:')) {
      value = JSON.parse(value.replace('j:', ''))
    }

    return value
  }
}

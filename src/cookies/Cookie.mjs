import { serialize } from 'cookie'
import { sign } from 'cookie-signature'
import { LogicException } from '../exceptions/LogicException.mjs'

export class Cookie {
  static SAMESITE_LAX = 'lax'
  static SAMESITE_NONE = 'none'
  static SAMESITE_STRICT = 'strict'

  static instance (params) {
    return new this(params)
  }

  constructor ({
    raw,
    name,
    path,
    value,
    domain,
    signed,
    secure,
    expires,
    httpOnly,
    sameSite,
  }) {
    this.raw = raw
    this.name = name
    this.path = path
    this.value = value
    this.domain = domain
    this.signed = signed
    this.secure = secure
    this.expires = expires
    this.httpOnly = httpOnly
    this.sameSite = sameSite
  }

  get options () {
    return {
      path: this.path,
      domain: this.domain,
      secure: this.secure,
      expires: this.expires,
      httpOnly: this.httpOnly,
      sameSite: this.sameSite,
    }
  }

  setOptions (options) {
    this.path = options.path,
    this.domain = options.domain
    this.secure = options.secure
    this.expires = options.expires
    this.httpOnly = options.httpOnly
    this.sameSite = options.sameSite

    return this
  }

  updateOptions (options) {
    return this.setOptions({ ...this.options, ...options })
  }

  setValue (value) {
    this.value = value
    return this
  }

  setExpires (value) {
    this.expires = value
    return this
  }

  setSecure (value) {
    this.secure = value
    return this
  }

  serialize (secret = null) {
    if (this.signed && !secret) {
      throw new LogicException('A secret is required for signed cookies. Please set a secret in configurations.')
    }
    
    this.value = typeof this.value === 'object' ? `j:${JSON.stringify(this.value)}` : String(this.value)

    if (this.signed) {
      this.value = `s:${sign(this.value, secret)}`
    }

    serialize(this.name, this.value, this.options)

    return this
  }
}

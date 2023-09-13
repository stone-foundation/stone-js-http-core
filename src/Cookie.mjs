export class Cookie {
  static SAMESITE_LAX = 'lax'
  static SAMESITE_NONE = 'none'
  static SAMESITE_STRICT = 'strict'

  #raw
  #sameSite
  #secureDefault

  constructor({
    name,
    path,
    value,
    domain,
    secure,
    expire,
    httpOnly
  }) {
    this.name = name
    this.path = path
    this.value = value
    this.domain = domain
    this.secure = secure
    this.expire = expire
    this.httpOnly = httpOnly
  }

  fromString (cookie) {
    this.#raw = cookie
  }

  setSecure (value) {
    this.secure = value
    return this
  }
}
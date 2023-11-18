import bytes from 'bytes'
import typeIs from 'type-is'
import { URL } from 'node:url'
import rawBody from 'raw-body'
import bodyParser from 'co-body'
import proxyAddr from 'proxy-addr'
import formidable from 'formidable'
import contentType from 'content-type'
import ipRangeCheck from 'ip-range-check'
import { RuntimeException } from '../index.mjs'
import { FileException } from '../exceptions/FileException.mjs'
import { UploadedFile } from '../file/UploadedFile.mjs'

export class NodeJSRequestMapper {
  #url
  #req
  #options

  async map (request, options = {}) {
    this.#req = request
    this.#options = options
    this.#url = new URL(request.url, `http://${request.headers.host}`)

    let body = null
    let files = []

    if (this.#isMultipart()) {
      const res = await this.#getFiles()
      files = res.files
      body = res.fields
    } else {
      body = await this.#getBody()
    }
    
    return {
      body,
      files,
      url: this.#url,
      ip: this.#getIp(),
      ips: this.#getIps(),
      method: request.method,
      headers: request.headers,
      cookies: this.#getCookies(),
      protocol: this.#getProtocol(),
      queryString: this.#url.search,
    }
  }

  #getIp () {
    return proxyAddr(this.#req, this.#isIpTrusted)
  }

  #getIps () {
    const addrs = proxyAddr.all(this.#req, this.#isIpTrusted)
    addrs.reverse().pop()
    return addrs
  }

  async #getBody () {
    this.#req.body ??= {}
    
    if (!typeIs.hasBody(this.#req)) {
      return {}
    }
    
    const length = this.#req.headers['content-length']
    const type = this.#getType(this.#req) ?? this.#options.type ?? 'text/plain'
    const encoding = this.#getCharset(this.#req) ?? this.#options.defaultCharset ?? 'utf-8'
    const limit = typeof this.#options.limit !== 'number' ? bytes.parse(this.#options.limit || '100kb') : this.#options.limit

    if (!typeIs(this.#req, type)) {
      return {}
    }

    try {
      switch (typeIs(req, ['urlencoded', 'json', 'text', 'bin'])) {
        case 'bin':
          return await rawBody(this.#req, { length, limit })
        case 'json':
          return await bodyParser.json(this.#req, { limit, encoding })
        case 'text':
          return await bodyParser.text(this.#req, { limit, encoding })
        case 'urlencoded':
          return await bodyParser.form(this.#req, { limit, encoding })
        default:
          return null
      }
    } catch (error) {
      throw new RuntimeException(error.message, error.code, error)
    }
  }

  #isMultipart () {
    return typeIs(this.#req, ['multipart']) === 'multipart'
  }

  async #getFiles () {
    this.#req.body ??= {}

    if (!typeIs.hasBody(this.#req) || !this.#isMultipart()) return {}

    const form = formidable(this.#options.files ?? {})
    
    try {
      let files
      let fields
      [fields, files] = await form.parse(this.#req)
      return {
        fields,
        files: files.map(v => new UploadedFile(v.filepath, v.originalFilename, v.mimetype))
      }
    } catch (error) {
      throw new FileException(error.message, error.code, error)
    }
  }

  #getProtocol () {
    const proto = this.#req.socket.encrypted ? 'https' : 'http'
    if (!this.#isIpTrusted(this.#req.socket.remoteAddress)) return proto
    return (this.#req.headers['X-Forwarded-Proto'] || proto).split(',').shift().trim()
  }

  #isIpTrusted (ip) {
    const trusted = this.#options.ip.trusted ?? []
    const untrusted = this.#options.ip.untrusted ?? []

    if (untrusted.includes('*') || ipRangeCheck(ip, untrusted)) {
      return false
    }

    if (trusted.includes('*') || ipRangeCheck(ip, trusted)) {
      return true
    }

    return true
  }

  #getType (req) {
    try {
      return contentType.parse(req).type
    } catch (_) {
      return undefined
    }
  }

  #getCharset (req) {
    try {
      return contentType.parse(req).parameters.charset
    } catch (_) {
      return undefined
    }
  }

  #getCookies () {
    const options = this.#options.cookie.options
    const secret = this.#options.cookie.secret ?? this.#options.secret
    return CookieCollection.instance(options, secret).parse(this.#req.headers.cookie)
  }
}

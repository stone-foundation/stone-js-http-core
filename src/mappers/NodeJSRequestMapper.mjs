import bytes from 'bytes'
import typeIs from 'type-is'
import { URL } from 'node:url'
import rawBody from 'raw-body'
import bodyParser from 'co-body'
import proxyAddr from 'proxy-addr'
import formidable from 'formidable'
import contentType from 'content-type'
import ipRangeCheck from 'ip-range-check'
import { FileException } from '../exceptions/FileException.mjs'
import { UploadedFile } from '../file/UploadedFile.mjs'
import { RuntimeException } from '../exceptions/RuntimeException.mjs'
import { SuspiciousOperationException } from '../exceptions/SuspiciousOperationException.mjs'

export class NodeJSRequestMapper {
  #url
  #req
  #options

  async map (request, options = {}) {
    this.#req = request
    this.#options = options
    this.#url = new URL(request.url, `http://${this.#getHost()}`)

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
    return proxyAddr(this.#req, this.#isFromTrustedProxy)
  }

  #getIps () {
    const addrs = proxyAddr.all(this.#req, this.#isFromTrustedProxy)
    addrs.reverse().pop()
    return addrs
  }

  #getProtocol () {
    const proto = this.#req.socket.encrypted ? 'https' : 'http'
    if (!this.#isFromTrustedProxy(this.#req.socket.remoteAddress)) return proto
    return (this.#req.headers['X-Forwarded-Proto'] || proto).split(',').shift().trim()
  }

  #getHost () {
    let host = null
    const url = new URL(this.#options.url)
    const allSubdomainRegex = new RegExp(`^(.+\.)?${url.hostname}$`)

    if (this.#isFromTrustedProxy(this.#req.socket.remoteAddress)) {
      host = (this.#req.headers['X-Forwarded-Host'] || proto).split(',').shift().trim()
    } else if (this.#req.headers.has('host')) {
      host = this.#req.headers['host']
    } else {
      host = url.hostname
    }

    host = host.trim().replace(/:\d+$/, '').toLowerCase()

    // Validate host name as it comes from user
    if (host.replace(/(?:^\[)?[a-zA-Z0-9-:\]_]+\.?/, '').length) {
      throw new SuspiciousOperationException(`Invalid Host ${host}`)
    }

    if (this.#options.hosts.onlySubdomain) {
      if (allSubdomainRegex.test(host)) {
        return host
      }

      throw new SuspiciousOperationException(`Untrusted Host ${host}`)
    }

    if (this.#options.hosts?.trusted?.length || this.#options.hosts?.trustedPattern?.length) {
      if (this.#options.hosts?.trusted?.includes(host)) {
        return host
      }

      if (this.#options.hosts?.trustedPattern?.reduce((prev, pattern) => pattern.test(host) || prev, false)) {
        return host
      }

      throw new SuspiciousOperationException(`Untrusted Host ${host}`)
    }

    return host
  }

  #isFromTrustedProxy (ip) {
    const trusted = this.#options.proxies.trusted ?? []
    const untrusted = this.#options.proxies.untrusted ?? []

    if (untrusted.includes('*') || ipRangeCheck(ip, untrusted)) {
      return false
    }

    if (trusted.includes('*') || ipRangeCheck(ip, trusted)) {
      return true
    }

    return true
  }

  async #getBody () {
    this.#req.body ??= {}
    
    if (!typeIs.hasBody(this.#req)) {
      return {}
    }
    
    const length = this.#req.headers['content-length']
    const type = this.#getType(this.#req) ?? this.#options.body.type ?? 'text/plain'
    const encoding = this.#getCharset(this.#req) ?? this.#options.body.defaultCharset ?? 'utf-8'
    const limit = typeof this.#options.body.limit !== 'number' ? bytes.parse(this.#options.body.limit || '100kb') : this.#options.body.limit

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

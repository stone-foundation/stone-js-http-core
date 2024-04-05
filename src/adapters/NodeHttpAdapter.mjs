import send from 'send'
import http from 'node:http'
import https from 'node:https'
import statuses from 'statuses'
import onFinished from 'on-finished'
import { Request } from '../Request.mjs'
import { BinaryFileResponse } from '../BinaryFileResponse.mjs'
import { FileException } from '../exceptions/FileException.mjs'

export class NodeHttpAdapter {
  #options = {}

  async run (Application, config) {
    this.#options = this.#makeOptions(config)

    return new Promise((resolve, reject) => {
      (this.#options.isSecure ? https : http)
        .createServer(this.#options.serverOptions, async (req, res) => {
          const app = Application.default(config)
          const request = await this.#createRequest(app, req)
          const response = await app.run()

          this.#send({ app, req, res, request, response })

          onFinished(res, async () => await app.stop())
        })
        .listen(this.#options.port, this.#options.hostname, () => {
          this.#options.isDebug && console.log('Server started at:', this.#options.host)
          resolve()
        })
        .once('error', e => {
          this.#options.isDebug && console.log('An error occured', e)
          reject(e)
        })
    })
  }

  #makeOptions (config) {
    return {
      isDebug: config.get('app.debug', false),
      port: config.get('http.server.port', 8080),
      files: config.get('http.files.response', {}),
      protocol: config.get('http.server.protocol', 'http'),
      get host () { return `${this.hostname}:${this.port}` },
      hostname: config.get('http.server.hostname', 'localhost'),
      isSecure: config.get('http.server.protocol', 'http') === 'https',
      serverOptions: {
        key: config.get('http.server.key', undefined),
        cert: config.get('http.server.cert', undefined),
        requestTimeout: config.get('http.server.requestTimeout', 300000)
      }
    }
  }

  async #createRequest (app, req) {
    const request = await Request.createFromNodeRequest(req)
    app.registerInstance(Request, request, ['request'])
    app.registerInstance('originalRequest', request.clone())

    Request.macro('getNodeRequest', () => req)

    return request
  }

  #setStatus (res, response) {
    res.statusCode = response.statusCode ?? 500
    res.statusMessage = response.statusMessage ?? statuses.message[500]

    return this
  }

  #setResHeaders (res, response) {
    res.setHeaders(response.headers)

    return this
  }

  #handleException ({ app, res, exception }) {
    const response = app.kernel.reportException(exception).renderException(exception)

    this.#setStatus(res, response)

    res.end(response.message)

    return this
  }

  #send ({ app, req, res, request, response }) {
    this
      .#setStatus(res, response)
      .#setResHeaders(res, response)

    if (request.isMethod('HEAD')) {
      res.end()
    } else if (response instanceof BinaryFileResponse) {
      this.#sendFile({ app, req, res, response, options: this.#options.files })
    } else {
      res.end(response.content, response.charset)
    }

    return this
  }

  #sendFile ({ app, req, res, response, options }) {
    let streaming
    let done = false

    const file = send(req, response.getEncodedFilePath(), options)

    const onaborted = () => {
      if (!done) {
        done = true
        const error = new FileException('Request aborted', 'HTTP_FILE-ECONNABORTED')
        this.#handleException({ app, res, error })
      }
    }

    onFinished(res, (error) => {
      if (error && error.code === 'ECONNRESET') return onaborted()
      if (error) return this.#handleException({ app, res, error: new FileException(error.message, `HTTP_FILE-${error.code}`, error) })
      if (done) return

      setImmediate(() => {
        if (!done) {
          if (streaming !== false) {
            return onaborted()
          }
          done = true
        }
      })
    })

    file
      .on('error', (error) => {
        if (!done) {
          done = true
          this.#handleException({ app, res, error: new FileException(error.message, `HTTP_FILE-${error.code}`, error) })
        }
      })
      .on('headers', (res) => {
        this.#setResHeaders(res, response)
      })
      .on('directory', () => {
        if (!done) {
          done = true
          const error = new FileException('EISDIR, read', 'HTTP_FILE-EISDIR')
          this.#handleException({ app, res, error })
        }
      })
      .on('file', () => {
        streaming = false
      })
      .on('stream', () => {
        streaming = true
      })
      .on('end', () => {
        if (!done) {
          done = true
        }
      })
      .pipe(res)

    return this
  }
}

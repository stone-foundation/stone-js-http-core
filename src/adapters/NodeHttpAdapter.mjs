import send from 'send'
import http from 'node:http'
import { Request } from '../Request.mjs'
import { LogicException } from '../exceptions/LogicException.mjs'

export class NodeHttpAdapter {
  #config

  get #server () {
    try {
      const url = new URL(this.#config.get('http.url', 'http://localhost:8080'))
      return {
        baseUrl: url,
        port: url.port ?? 8080,
        scheme: url.protocol ?? 'http',
        hostname: url.hostname ?? 'localhost',
        debug: this.#config.get('app.debug', false),
        locale: this.#config.get('app.locale', 'en'),
        env: this.#config.get('app.env', 'production'),
        fallback_locale: this.#config.get('app.fallback_locale', 'en')
      }
    } catch (error) {
      throw new LogicException('Invalid configuration', error)
    }
  }

  async run (Application, config) {
    this.#config = config

    return new Promise((resolve, reject) => {
      http
        .createServer(async (req, res) => {
          const app = Application.default(configurations)
          const request = await Request.createFromNodeRequest(req, this.#server)
          app.registerInstance(Request, request, ['originalRequest'])
          const response = await app.run()
          res.writeHead(response.statusCode, response.headers)
          response.isEmpty() ? res.end() : res.end(response.getContent())
        })
        .listen(
          this.#server.port,
          this.#server.hostname,
          () => {
            resolve()
            this.#config.get('app.debug', false) && console.log('Server started at:', this.#server.baseUrl)
          }
        )
        .once('error', e => {
          reject(e)
          this.#config.get('app.debug', false) && console.log('An error occured', e)
        })
    })
  }

  #send (req, res, request, response) {
    this.#setResHeaders(res, response)

    if (request.isMethod('HEAD')) {
      res.end()
    }
  }

  #sendFile (req, res, response, options) {
    let streaming, done = false
    const file = send(req, response.getEncodedFilePath(), options)

    file
      .on('error', (error) => {
        this.#handleError(res, error)
      })
      .on('headers', (res) => {
        this.#setResHeaders(res, response)
      })
      .on('file', () => {
        streaming = false
      })
      .on('stream', () => {
        streaming = true
      })
      .on('end', () => {
        done = true
      })
      .pipe(res)
  }

  #setStatus (res, response) {
    res.statusCode = response.statusCode
    res.statusMessage = response.statusMessage
  }

  #setResHeaders (res, response) {
    for (const [key, value] of Object.entries(response.headers)) {
      res.setHeader(key, value)
    }
  }

  #handleError (res, error) {
    res.statusCode = error.status || 500
    res.end(error.message)
  }
}

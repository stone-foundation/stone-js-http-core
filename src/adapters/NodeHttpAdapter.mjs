import send from 'send'
import http from 'node:http'
import onFinished from 'on-finished'
import { Request } from '../Request.mjs'
import { BinaryFileResponse } from '../BinaryFileResponse.mjs'

export class NodeHttpAdapter {
  async run (Application, config) {
    return new Promise((resolve, reject) => {
      const isDebug = config.get('app.debug', false)
      const port = config.get('http.server.port', 8080)
      const hostname = config.get('http.server.hostname', 'localhost')
      const requestTimeout = config.get('http.server.requestTimeout', 300000)

      http
        .createServer({ requestTimeout }, async (req, res) => {
          const app = Application.default(config)
          const request = await Request.createFromNodeRequest(req)
          app.registerInstance(Request, request, ['originalRequest'])
          const response = await app.run()
          this.#send(req, res, request, response)
        })
        .listen(port, hostname, () => {
          isDebug && console.log('Server started at:', `${hostname}:${port}`)
          resolve()
        })
        .once('error', e => {
          isDebug && console.log('An error occured', e)
          reject(e)
        })
    })
  }

  #send (req, res, request, response) {
    this
      .#setStatus(res, response)
      .#setResHeaders(res, response)

    if (request.isMethod('HEAD')) {
      res.end()
    } else if (response instanceof BinaryFileResponse) {
      this.#sendFile(req, res, response, {})
    } else {
      res.end(response.content, response.charset)
    }

    return this
  }

  #sendFile (req, res, response, options) {
    let streaming
    let done = false

    const file = send(req, response.getEncodedFilePath(), options)

    const onaborted = () => {
      if (!done) {
        done = true
        const error = new Error('Request aborted')
        error.code = 'ECONNABORTED'
        this.#handleError(res, error)
      }
    }

    onFinished(res, (error) => {
      if (error && error.code === 'ECONNRESET') return onaborted()
      if (error) return this.#handleError(res, error)
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
          this.#handleError(res, error)
        }
      })
      .on('headers', (res) => {
        this.#setResHeaders(res, response)
      })
      .on('directory', () => {
        if (!done) {
          done = true
          const error = new Error('EISDIR, read')
          error.code = 'EISDIR'
          this.#handleError(res, error)
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

  #setStatus (res, response) {
    res.statusCode = response.statusCode
    res.statusMessage = response.statusMessage

    return this
  }

  #setResHeaders (res, response) {
    for (const [key, value] of Object.entries(response.headers)) {
      res.setHeader(key, value)
    }

    return this
  }

  #handleError (res, error) {
    res.statusCode = error.status || 500
    res.end(error.message)

    return this
  }
}

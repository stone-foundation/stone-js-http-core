import { Buffer } from 'safe-buffer'
import { File } from './file/File.mjs'
import { Response } from './Response.mjs'
import contentDisposition from 'content-disposition'
import { LogicException, RuntimeException } from './index.mjs'

export class BinaryFileResponse extends Response {
  #file
  #deleteFileAfterSend

  constructor (
    file,
    status = 200,
    headers = {},
    public = true,
    contentDispositionType = null,
    autoEtag = false,
    autoLastModified = true
  ) {
    super('', status, headers)

    this.setFile(file, contentDispositionType, autoEtag, autoLastModified)

    public && this.setPublic()
  }

  setFile (file, contentDispositionType, autoEtag, autoLastModified) {
    if (!file) {
      throw new RuntimeException('file argument is required.')
    }

    if (!file instanceof File) {
      file = new File(String(file))
    }
    
    if (!file.isReadable()) {
      throw new RuntimeException('File must be readable.')
    }

    this.#file = file

    autoEtag && this.setAutoEtag()
    autoLastModified && this.autoLastModified()

    return this.setContentDisposition(contentDispositionType)
  }

  getFile () {
    return this.#file
  }

  getEncodedFilePath () {
    return this.#file.getEncodedPath()
  }

  setAutoEtag () {
    return this.setEtag(Buffer.from(this.#file.getHashedContent()).toString('base64'))
  }

  autoLastModified () {
    return this.setLastModified(new Date(this.#file.getMTime()))
  }

  setContentDisposition (type) {
    return this
      .setHeader('Content-Type', this.#file.getMimeType('application/octet-stream'))
      .setHeader('Content-Disposition', contentDisposition(this.#file.getPath(), { type }))
  }

  setContent (content) {
    if (content) {
      throw new LogicException('The content cannot be set on a BinaryFileResponse instance.')
    }
    
    return this
  }

  getContent () {
    return false
  }

  deleteFileAfterSend (shouldDelete = true) {
    this.#deleteFileAfterSend = shouldDelete
    return this
  }

  prepare (request) {
    if (this.isInformational() || this.isEmpty()) {
      return super.prepare(request)
    }

    if (!this.hasHeader('Content-Type')) {
      this.setHeader('Content-Type', this.#file.getMimeType('application/octet-stream'))
    }
    
    super.prepare(request)

    const fileSize = this.#file.getSize()

    if (!fileSize) return this

    this
      .removeHeader('Transfer-Encoding')
      .setHeader('Content-Length', fileSize)

    return this
  }
}

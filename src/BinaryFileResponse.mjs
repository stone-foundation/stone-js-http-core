import { Buffer } from 'safe-buffer'
import { File } from './file/File.mjs'
import { isFunction } from '@stone-js/common'
import contentDisposition from 'content-disposition'
import { HTTP_NOT_MODIFIED } from './constants/http_statuses.mjs'
import { OutgoingHttpResponse } from './OutgoingHttpResponse.mjs'

/**
 * Class representing a BinaryFileResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class BinaryFileResponse extends OutgoingHttpResponse {
  #file
  #deleteFileAfterSent

  /**
   * Create a BinaryFileResponse.
   *
   * @param  {(string|File)} file
   * @param  {number} [statusCode=200]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @param  {string} [contentDispositionType=null]
   * @param  {boolean} [autoEtag=false]
   * @param  {boolean} [autoLastModified=false]
   */
  constructor (
    file,
    statusCode = 200,
    headers = {},
    contentDispositionType = null,
    autoEtag = false,
    autoLastModified = true
  ) {
    super('', statusCode, headers)

    this.setFile(file, contentDispositionType, autoEtag, autoLastModified)
  }

  /** @return {boolean} */
  get deleteFileAfterSent () {
    return this.#deleteFileAfterSent
  }

  /**
   * Set file.
   *
   * @param   {(string|File)} file
   * @param   {string} [contentDispositionType=null]
   * @param   {boolean} [autoEtag=false]
   * @param   {boolean} [autoLastModified=false]
   * @returns {this}
   */
  setFile (file, contentDispositionType = null, autoEtag = false, autoLastModified = true) {
    if (!file) {
      throw new TypeError('file argument is required.')
    }

    if (!(file instanceof File)) {
      file = new File(String(file))
    }

    if (!file.isReadable()) {
      throw new TypeError('File must be readable.')
    }

    this.#file = file

    autoEtag && this.autoEtag()
    autoLastModified && this.autoLastModified()

    return this.setContentDisposition(contentDispositionType)
  }

  /**
   * Get file.
   *
   * @returns {File}
   */
  getFile () {
    return this.#file
  }

  /**
   * Get encoded file path.
   *
   * @returns {string}
   */
  getEncodedFilePath () {
    return this.#file.getEncodedPath()
  }

  /**
   * Auto set ETag.
   *
   * @returns {this}
   */
  autoEtag () {
    return this.setEtag(Buffer.from(this.#file.getHashedContent()).toString('base64'))
  }

  /**
   * Auto set last modified.
   *
   * @returns {this}
   */
  autoLastModified () {
    return this.setLastModified(new Date(this.#file.getMTime()))
  }

  /**
   * Set content disposition.
   *
   * @returns {this}
   */
  setContentDisposition (type) {
    return this
      .setHeader('Content-Type', this.#file.getMimeType('application/octet-stream'))
      .setHeader('Content-Disposition', contentDisposition(this.#file.getPath(), { type }))
  }

  /**
   * Set content.
   *
   * @param {*} content
   * @returns {this}
   */
  setContent (content) {
    if (content) {
      throw new TypeError('The content cannot be set on a BinaryFileResponse instance.')
    }

    return this
  }

  /**
   * Get content.
   *
   * @returns {false}
   */
  getContent () {
    return false
  }

  /**
   * Set deleteFileAfterSent.
   *
   * @returns {this}
   */
  setDeleteFileAfterSent (shouldDelete = true) {
    this.#deleteFileAfterSent = shouldDelete
    return this
  }

  /**
   * Prepare response.
   *
   * @param   {IncomingHttpEvent} request
   * @param   {Config} [config=null]
   * @returns {this}
   */
  prepare (request, config = null) {
    this
      .setConfigResolver(() => config)
      .setRequestResolver(() => request)
      ._prepareCookies()

    if (this.request.isFresh(this)) {
      this.statusCode = HTTP_NOT_MODIFIED
    }

    if (this.isInformational() || this.isEmpty()) {
      this.removeHeader(['Content-Type', 'Content-Length', 'Transfer-Encoding'])
    } else {
      const fileSize = this.#file.getSize()
      const etagFn = this.config.get('app.http.etag.function', this._defaultEtagFn)

      if (!fileSize) return this

      this
        .removeHeader('Transfer-Encoding')
        .setHeader('Content-Length', fileSize)

      if (!this.hasHeader('ETag') && isFunction(etagFn) && fileSize) { // Set ETag
        this.setEtag(etagFn(this.#file.getContent(), 'utf-8'))
      }

      if (!this.hasHeader('Content-Type')) {
        this.setHeader('Content-Type', this.#file.getMimeType('application/octet-stream'))
      }
    }

    return this
  }
}

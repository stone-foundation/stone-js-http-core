import mime from 'mime'
import { File } from './File.mjs'
import { basename, extname } from 'node:path'

/**
 * Class representing an UploadedFile.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class UploadedFile extends File {
  #mimeType
  #originalName

  /**
   * Create an UploadedFile.
   *
   * @param  {string} path
   * @param  {string} originalName
   * @param  {string} [mimeType=null]
   */
  constructor (path, originalName, mimeType = null) {
    super(path)
    this.#originalName = basename(originalName)
    this.#mimeType = mimeType ?? 'application/octet-stream'
  }

  /**
   * Get ClientOriginalName.
   *
   * @returns {string}
   */
  getClientOriginalName () {
    return this.#originalName
  }

  /**
   * Get ClientOriginalExtension.
   *
   * @returns {string}
   */
  getClientOriginalExtension () {
    return extname(this.#originalName)
  }

  /**
   * Get ClientMimeType.
   *
   * @returns {string}
   */
  getClientMimeType () {
    return this.#mimeType
  }

  /**
   * Get guessClientExtension.
   *
   * @returns {string}
   */
  guessClientExtension () {
    return mime.getExtension(this.getClientMimeType())
  }

  /**
   * Is valid.
   *
   * @returns {boolean}
   */
  isValid () {
    return this.exists()
  }

  /**
   * Move.
   *
   * @param {string} directory
   * @param {string} [name=null]
   * @returns {this}
   * @throws {TypeError}
   */
  move (directory, name = null) {
    if (this.isValid()) {
      return super.move(directory, name)
    }

    throw new TypeError('No file was uploaded.')
  }
}

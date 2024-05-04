import mime from 'mime'
import { filesize } from 'filesize'
import { createHash } from 'node:crypto'
import { RuntimeError } from '@stone-js/common'
import { basename, dirname, extname, isAbsolute, join, resolve } from 'node:path'
import { statSync, existsSync, accessSync, constants, writeFileSync, readFileSync, mkdirSync, renameSync, chmodSync, rmSync } from 'node:fs'

/**
 * Class representing a File.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class File {
  #path
  #stats

  /**
   * Create an UploadedFile.
   *
   * @param  {string} path
   * @param  {boolean} [checkPath=true]
   */
  constructor (path, checkPath = true) {
    this.#path = path
    checkPath && this.#validateFile()
  }

  /**
   * Get file content.
   *
   * @returns {string}
   */
  getContent () {
    if (!this.isReadable()) {
      throw new TypeError(`Could not get the content of the file (${this.#path}).`)
    }
    return readFileSync(this.#path, 'utf-8')
  }

  /**
   * Write content to file.
   *
   * @param   {string} content
   * @returns {this}
   */
  write (content) {
    if (!this.isWritable()) {
      throw new TypeError(`Could not write content to this file(${this.#path}).`)
    }

    writeFileSync(this.#path, content, 'utf-8')

    return this
  }

  /**
   * Edit file content.
   *
   * @param   {Function} callback
   * @returns {this}
   */
  edit (callback) {
    return this.write(callback(this.getContent()))
  }

  /**
   * Move file.
   *
   * @param {string} directory
   * @param {string} [name=null]
   * @returns {this}
   * @throws {TypeError}
   */
  move (directory, name = null) {
    const target = this.#getTargetFile(directory, name)

    try {
      renameSync(this.getPath(), target.getPath())
    } catch (error) {
      throw new TypeError(`Could not move the file "${this.getPath()}" to "${target.getPath()}" (${error}).`)
    }

    chmodSync(target.getPath(), 0o666)

    return target
  }

  /**
   * Remove file.
   *
   * @param   {boolean} [force=false]
   * @returns {this}
   */
  remove (force = false) {
    try {
      rmSync(this.#path, { force })
    } catch (error) {
      throw new RuntimeError(`Could not remove this file (${this.#path}) (${error}).`)
    }
    return this
  }

  /**
   * Get file HashedContent.
   *
   * @param   {string} [algo='sha256']
   * @returns {string}
   */
  getHashedContent (algo = 'sha256') {
    return createHash(algo)
      .update(this.getContent(), 'utf-8')
      .digest('hex')
  }

  /**
   * Get file size.
   *
   * @param   {boolean} [string=false]
   * @returns {(string|number)}
   */
  getSize (string = false) {
    return string ? filesize(this.#getStats().size) : this.#getStats().size
  }

  /**
   * Get MimeType.
   *
   * @param   {string} [fallback=null]
   * @returns {(string|number)}
   */
  getMimeType (fallback = null) {
    return mime.getType(this.#path) ?? fallback
  }

  /**
   * Get Dirname.
   *
   * @returns {string}
   */
  getDirname () {
    return dirname(this.#path)
  }

  /**
   * Get Path.
   *
   * @returns {string}
   */
  getPath () {
    return this.#path
  }

  /**
   * Get EncodedPath.
   *
   * @returns {string}
   */
  getEncodedPath () {
    return encodeURI(this.getPath())
  }

  /**
   * Get AbsolutePath.
   *
   * @param   {string} [root='']
   * @returns {string}
   */
  getAbsolutePath (root = '') {
    return resolve(root, this.#path)
  }

  /**
   * Get EncodedAbsolutePath.
   *
   * @param   {string} [root='']
   * @returns {string}
   */
  getEncodedAbsolutePath (root = '') {
    return encodeURI(this.getAbsolutePath(root))
  }

  /**
   * Get Basename.
   *
   * @param   {string} [exclude='']
   * @returns {string}
   */
  getBasename (exclude = '') {
    return basename(this.#path, exclude)
  }

  /**
   * Get Filename.
   *
   * @returns {string}
   */
  getFilename () {
    return this.getBasename()
  }

  /**
   * Get name.
   *
   * @returns {string}
   */
  getName () {
    return this.getBasename(this.getExtension())
  }

  /**
   * Get extension.
   *
   * @returns {string}
   */
  getExtension () {
    return extname(this.#path)
  }

  /**
   * Get last access time.
   *
   * @returns {string}
   */
  getATime () {
    return this.#getStats().atimeMs
  }

  /**
   * Get created time.
   *
   * @returns {string}
   */
  getCTime () {
    return this.#getStats().ctimeMs
  }

  /**
   * Get last modified time.
   *
   * @returns {string}
   */
  getMTime () {
    return this.#getStats().mtimeMs
  }

  /**
   * Exists.
   *
   * @returns {boolean}
   */
  exists () {
    return existsSync(this.#path)
  }

  /**
   * Is directory.
   *
   * @returns {boolean}
   */
  isDir () {
    return this.#getStats().isDirectory()
  }

  /**
   * Is file.
   *
   * @returns {boolean}
   */
  isFile () {
    return this.#getStats().isFile()
  }

  /**
   * Is link.
   *
   * @returns {boolean}
   */
  isLink () {
    return this.#getStats().isSymbolicLink()
  }

  /**
   * Is absolute.
   *
   * @returns {boolean}
   */
  isAbsolute () {
    return isAbsolute(this.#path)
  }

  /**
   * Is writable.
   *
   * @returns {boolean}
   */
  isWritable () {
    try {
      return accessSync(this.#path, constants.W_OK) === undefined
    } catch (_) {
      return false
    }
  }

  /**
   * Is readable.
   *
   * @returns {boolean}
   */
  isReadable () {
    try {
      return accessSync(this.#path, constants.R_OK) === undefined
    } catch (_) {
      return false
    }
  }

  /**
   * Is executable.
   *
   * @returns {boolean}
   */
  isExecutable () {
    try {
      return accessSync(this.#path, constants.X_OK) === undefined
    } catch (_) {
      return false
    }
  }

  /**
   * Get file stats.
   *
   * @returns {Object}
   */
  #getStats () {
    if (!this.#stats) {
      this.#stats = statSync(this.#path)
    }

    return this.#stats
  }

  /**
   * Validate file.
   *
   * @returns
   */
  #validateFile () {
    if (!this.exists()) {
      throw new TypeError(`File not found. (${this.#path})`)
    }
  }

  /**
   * Get target file.
   *
   * @param   {string} directory
   * @param   {string} [name=null]
   * @returns {File}
   * @throws  {TypeError}
   */
  #getTargetFile (directory, name = null) {
    if (!existsSync(directory)) {
      try {
        mkdirSync(directory, { recursive: true })
      } catch (_) {
        throw new RuntimeError(`Unable to create the "${directory}" directory.`)
      }
    } else {
      try {
        accessSync(directory, constants.W_OK)
      } catch (_) {
        throw new RuntimeError(`Unable to write in the "${directory}" directory.`)
      }
    }

    return new File(join(directory, name ?? this.getFilename()), false)
  }
}

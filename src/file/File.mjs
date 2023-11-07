import mime from 'mime'
import { filesize } from 'filesize'
import { createHash } from 'node:crypto'
import { InvalidArgumentException, RuntimeException } from '../index.mjs'
import { basename, dirname, extname, isAbsolute, join, resolve } from 'node:path'
import { statSync, existsSync, accessSync, constants, writeFileSync, readFileSync, mkdirSync, renameSync, chmodSync, rmSync } from 'node:fs'

export class File {
  #path
  #stats

  constructor (path, checkPath = true) {
    this.#path = path
    checkPath && this.#validateFile()
  }

  getContent () {
    if (!this.isReadable()) {
      throw new RuntimeException(`Could not get the content of the file (${this.#path}).`)
    }
    return readFileSync(this.#path, 'utf-8')
  }

  write (content) {
    if (!this.isWritable()) {
      throw new RuntimeException(`Could not write content to this file(${this.#path}).`)
    }

    writeFileSync(this.#path, content, 'utf-8')
    
    return this
  }

  edit (callback) {
    return this.write(callback(this.getContent()))
  }

  move (directory, name = null) {
    const target = this.#getTargetFile(directory, name)

    try {
      renameSync(this.getPath(), target.getPath())
    } catch (error) {
      throw new RuntimeException(`Could not move the file "${this.getPath()}" to "${target.getPath()}" (${error}).`)
    }
    
    chmodSync(target.getPath(), 0o666)
    
    return target
  }

  remove (force = false) {
    try {
      rmSync(this.#path, { force })
    } catch (error) {
      throw new RuntimeException(`Could not remove this file (${this.#path}) (${error}).`)
    }
    return this
  }

  getHashedContent (algo = 'sha256') {
    return createHash(algo)
      .update(this.getContent(), 'utf-8')
      .digest('hex')
  }

  getSize (string = false) {
    return string ? filesize(this.#getStats().size) :  this.#getStats().size
  }

  getMimeType (fallback) {
    return mime.getType(this.#path) ?? fallback
  }
  
  getDirname () {
    return dirname(this.#path)
  }

  getPath () {
    return this.#path
  }

  getEncodedPath () {
    return encodeURI(this.getPath())
  }

  getAbsolutePath (root = '') {
    return resolve(root, this.#path)
  }

  getEncodedAbsolutePath (root = '') {
    return encodeURI(this.getAbsolutePath(root))
  }

  getBasename (exclude = '') {
    return basename(this.#path, exclude)
  }
  
  getFilename () {
    return this.getBasename()
  }
  
  getName () {
    return this.getBasename(this.getExtension())
  }

  getExtension () {
    return extname(this.#path)
  }

  getATime () {
    return this.#getStats().atimeMs
  }

  getCTime () {
    return this.#getStats().ctimeMs
  }

  getMTime () {
    return this.#getStats().mtimeMs
  }

  exists () {
    return existsSync(this.#path)
  }

  isDir () {
    return this.#getStats().isDirectory()
  }
  
  isFile () {
    return this.#getStats().isFile()
  }

  isLink () {
    return this.#getStats().isSymbolicLink()
  }

  isAbsolute () {
    return isAbsolute(this.#path)
  }

  isWritable () {
    try {
      accessSync(this.#path, constants.W_OK) === undefined
    } catch (_) {
      return false
    }
  }

  isReadable () {
    try {
      accessSync(this.#path, constants.R_OK) === undefined
    } catch (_) {
      return false
    }
  }

  isExecutable () {
    try {
      accessSync(this.#path, constants.X_OK) === undefined
    } catch (_) {
      return false
    }
  }

  #getStats () {
    if (!this.#stats) {
      this.#stats = statSync(this.#path)
    }

    return this.#stats
  }

  #validateFile () {
    if (!this.exists()) {
      throw new InvalidArgumentException(`File not found. (${path})`)
    }
  }

  #getTargetFile (directory, name = null) {
    if (!existsSync(directory)) {
      try {
        mkdirSync(directory, { recursive: true })
      } catch (_) {
        throw new RuntimeException(`Unable to create the "${directory}" directory.`)
      }
    } else {
      try {
        accessSync(directory, constants.W_OK)
      } catch (_) {
        throw new RuntimeException(`Unable to write in the "${directory}" directory.`)
      }
    }

    return new File(join(directory, name ?? this.getFilename()), false)
  }
}

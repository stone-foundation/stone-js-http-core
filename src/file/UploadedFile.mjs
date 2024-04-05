import mime from 'mime'
import { File } from './File.mjs'
import { basename, extname } from 'node:path'
import { RuntimeException } from '@stone-js/common'

export class UploadedFile extends File {
  #mimeType
  #originalName

  constructor (path, originalName, mimeType = null) {
    super(path)
    this.#originalName = basename(originalName)
    this.#mimeType = mimeType ?? 'application/octet-stream'
  }

  getClientOriginalName () {
    return this.#originalName
  }

  getClientOriginalExtension () {
    return extname(this.#originalName)
  }

  getClientMimeType () {
    return this.#mimeType
  }

  guessClientExtension () {
    return mime.getExtension(this.getClientMimeType())
  }

  isValid () {
    return this.exists()
  }

  move (directory, name = null) {
    if (this.isValid()) {
      return super.move(directory, name)
    }

    throw new RuntimeException('No file was uploaded.')
  }
}

import { ErrorOptions, RuntimeError } from '@stone-js/core'

/**
 * Custom error for error operations.
 */
export class FileError extends RuntimeError {
  constructor (message: string, options: ErrorOptions = {}) {
    super(message, options)
    this.name = 'FileError'
  }
}

import { HttpError } from './HttpError'

/**
 * Custom error for error operations.
 */
export class FileError extends HttpError {
  constructor (message: string) {
    super(message)
    this.name = 'FileError'
  }
}

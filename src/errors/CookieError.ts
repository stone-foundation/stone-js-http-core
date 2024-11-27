import { HttpError } from './HttpError'

/**
 * Custom error for cookie operations.
 */
export class CookieError extends HttpError {
  constructor (message: string) {
    super(message)
    this.name = 'CookieError'
  }
}

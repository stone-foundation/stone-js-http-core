import { HttpError, HttpErrorOptions } from '../../src/errors/HttpError'

describe('HttpError', () => {
  it('should create an HttpError with default properties', () => {
    const message = 'An error occurred'
    const error = new HttpError(message)

    expect(error.name).toBe('HttpError')
    expect(error.message).toBe(message)
    expect(error.statusCode).toBe(500)
    expect(error.statusMessage).toBe('Internal Server Error')
    expect(error.headers).toBeInstanceOf(Headers)
    expect([...error.headers.entries()]).toHaveLength(0) // Default headers should be empty
  })

  it('should create an HttpError with custom status code and message', () => {
    const message = 'Not Found'
    const options: HttpErrorOptions = {
      statusCode: 404,
      statusMessage: 'Resource Not Found'
    }
    const error = new HttpError(message, options)

    expect(error.statusCode).toBe(404)
    expect(error.statusMessage).toBe('Resource Not Found')
  })

  it('should create an HttpError with inferred status message', () => {
    const message = 'Unauthorized'
    const options: HttpErrorOptions = {
      statusCode: 401
    }
    const error = new HttpError(message, options)

    expect(error.statusCode).toBe(401)
    expect(error.statusMessage).toBe('Unauthorized') // Uses statuses library
  })

  it('should create an HttpError with a body', () => {
    const message = 'Bad Request'
    const options: HttpErrorOptions = {
      statusCode: 400,
      body: { error: 'Invalid input' }
    }
    const error = new HttpError(message, options)

    expect(error.body).toEqual({ error: 'Invalid input' })
  })

  it('should create an HttpError with headers from a Map', () => {
    const message = 'Conflict'
    const headersMap = new Map([
      ['Content-Type', 'application/json'],
      ['X-Custom-Header', 'customValue']
    ])
    const options: HttpErrorOptions = {
      statusCode: 409,
      headers: headersMap
    }
    const error = new HttpError(message, options)

    expect(error.headers).toBeInstanceOf(Headers)
    expect(error.headers.get('Content-Type')).toBe('application/json')
    expect(error.headers.get('X-Custom-Header')).toBe('customValue')
  })

  it('should create an HttpError with headers from a Headers object', () => {
    const message = 'Internal Server Error'
    const headers = new Headers()
    headers.append('Retry-After', '3600')
    const options: HttpErrorOptions = {
      statusCode: 500,
      headers
    }
    const error = new HttpError(message, options)

    expect(error.headers).toBeInstanceOf(Headers)
    expect(error.headers.get('Retry-After')).toBe('3600')
  })

  it('should handle an invalid status code gracefully', () => {
    const message = 'Unknown error'
    const options: HttpErrorOptions = {
      statusCode: 999 // Non-standard status code
    }
    const error = new HttpError(message, options)

    expect(error.statusCode).toBe(999)
    expect(error.statusMessage).toBe('Unknown Status')
  })
})

import { HttpError } from '../src/errors/HttpError'
import { IncomingHttpEvent } from '../src/IncomingHttpEvent'
import { RedirectResponse, RedirectResponseOptions } from '../src/RedirectResponse'

// Mock dependencies
const mockIncomingEvent = IncomingHttpEvent.create({ url: new URL('http://localhost'), ip: '127.0.0.1', source: {} as any, headers: { referrer: 'http://example.com' } })

describe('RedirectResponse', () => {
  it('should create a RedirectResponse with a valid redirect status code', async () => {
    const options: RedirectResponseOptions = {
      url: 'http://example.com/api/v1',
      statusCode: 302,
      content: 'Redirecting...'
    }

    const response = await RedirectResponse.create<RedirectResponse>(options).prepare(mockIncomingEvent)
    expect(response).toBeInstanceOf(RedirectResponse)
    expect(response.getHeader('Location')).toBe('http://example.com/api/v1')
    // @ts-expect-error - accessing private property for testing
    expect(response._content).toBe('Found. Redirecting to http://example.com/api/v1')
  })

  it('should throw an error if the status code is not a redirect code', () => {
    const options: RedirectResponseOptions = {
      url: 'http://example.com',
      statusCode: 200,
      content: 'Redirecting...'
    }

    expect(() => new RedirectResponse(options)).toThrow(HttpError)
  })

  it('should set the target URL correctly', async () => {
    // @ts-expect-error - ignore type checking for testing purposes
    const options: RedirectResponseOptions = {
      statusCode: 301,
      content: 'http://example.com'
    }
    const mockIncomingEvent = IncomingHttpEvent.create({
      ip: '127.0.0.1',
      source: {} as any,
      url: new URL('http://localhost'),
      headers: { accept: 'text/html' }
    })

    const response = new RedirectResponse(options)
    await response.setTargetUrl('http://newexample.com').prepare(mockIncomingEvent)
    expect(response.getHeader('Location')).toBe('http://newexample.com')
    expect(response.getHeader('cache-control')).toBe('public, max-age=31536000')
    // @ts-expect-error - accessing private property for testing
    expect(response._content).toBe('<p>Moved Permanently. Redirecting to <a href="http://newexample.com">http://newexample.com</a></p>')
  })

  it('should throw an error when setting an empty URL', () => {
    const options: RedirectResponseOptions = {
      url: 'http://example.com',
      statusCode: 302,
      content: 'Redirecting...'
    }

    const response = new RedirectResponse(options)
    expect(() => response.setTargetUrl(undefined as unknown as string)).toThrow(HttpError)
  })

  it('should prepare the response correctly', async () => {
    const options: RedirectResponseOptions = {
      url: 'http://example.com',
      statusCode: 302,
      content: 'Redirecting...'
    }
    const mockIncomingEvent = IncomingHttpEvent.create({
      ip: '127.0.0.1',
      source: {} as any,
      url: new URL('http://localhost'),
      headers: { accept: 'application/json' }
    })

    const response = new RedirectResponse(options)
    await response.prepare(mockIncomingEvent)
    expect(response.getHeader('Location')).toBe('http://example.com')
    // @ts-expect-error - accessing private property for testing
    expect(response._content).toBe('')
  })

  it('should handle "back" as target URL and use the Referrer header', async () => {
    const options: RedirectResponseOptions = {
      url: 'back',
      statusCode: 302,
      content: 'Redirecting...'
    }

    const response = await RedirectResponse.create<RedirectResponse>(options).prepare(mockIncomingEvent)
    expect(response.getHeader('Location')).toBe('http://example.com')
  })

  it('should keep user defined cache-control header for moved permanently', async () => {
    const options: RedirectResponseOptions = {
      url: 'http:/example.com',
      statusCode: 301,
      headers: {
        'cache-control': 'no-store'
      },
      content: 'Redirecting...'
    }

    const response = await RedirectResponse.create<RedirectResponse>(options).prepare(mockIncomingEvent)
    expect(response.getHeader('cache-control')).toBe('no-store')
  })
})

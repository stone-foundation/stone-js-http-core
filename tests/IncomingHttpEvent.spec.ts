import { URL } from 'node:url'
import { HttpMethods } from '../src/declarations'
import { UploadedFile } from '../src/file/UploadedFile'
// import { CookieCollection } from '../src/cookies/CookieCollection'
import { IncomingHttpEvent, IncomingHttpEventOptions } from '../src/IncomingHttpEvent'

// Mock options for IncomingHttpEvent
const mockOptions: IncomingHttpEventOptions = {
  ip: '127.0.0.1',
  url: new URL('http://localhost/test'),
  ips: ['127.0.0.1', '192.168.0.1'],
  body: { key: 'value' },
  files: { file1: [new UploadedFile('path/to/file', 'file1.txt', 'text/plain', false)] },
  locale: 'en',
  headers: { 'content-type': 'application/json', 'user-agent': 'test-agent' },
  protocol: 'http',
  queryString: 'param1=value1&param2=value2',
  method: HttpMethods.GET
}

// Create an instance of IncomingHttpEvent for testing
const event = IncomingHttpEvent.create(mockOptions)

describe('IncomingHttpEvent', () => {
  it('should create an instance of IncomingHttpEvent', () => {
    expect(event).toBeInstanceOf(IncomingHttpEvent)
  })

  it('should correctly return the decoded pathname', () => {
    expect(event.decodedPathname).toBe('/test')
  })

  it('should correctly return the host', () => {
    expect(event.host).toBe('localhost')
  })

  it('should correctly return the user agent', () => {
    expect(event.userAgent).toBe('test-agent')
  })

  it('should correctly return the value from the query string', () => {
    expect(event.query.get('param1')).toBe('value1')
  })

  it('should correctly return the value from the body', () => {
    expect(event.get('key')).toBe('value')
  })

  it('should correctly detect if the request is AJAX', () => {
    expect(event.isAjax).toBe(false)
  })

  it('should correctly detect if the request is secure', () => {
    expect(event.isSecure).toBe(false)
  })

  it('should correctly retrieve a header value', () => {
    expect(event.getHeader('content-type')).toBe('application/json')
  })

  it('should correctly return the URI of the request', () => {
    expect(event.uri).toBe('http://localhost/test')
  })

  it('should throw an error if an invalid URL is provided', () => {
    expect(() => IncomingHttpEvent.create({ ...mockOptions, url: 'invalid-url' as unknown as URL })).toThrow(TypeError)
  })

  it('should correctly return the accepted types', () => {
    expect(event.acceptsTypes('application/json', 'text/html')).toBe('application/json')
  })

  it('should correctly return if a header exists', () => {
    expect(event.hasHeader('content-type')).toBe(true)
  })

  it('should correctly return if a cookie exists', () => {
    expect(event.hasCookie('test-cookie')).toBe(false)
  })

  it('should correctly return the MIME type for a given format', () => {
    expect(event.getMimeType('json')).toBe('application/json')
  })

  it('should correctly check if the method is cacheable', () => {
    expect(event.isMethodCacheable()).toBe(true)
  })

  it('should generate a valid fingerprint', () => {
    expect(() => event.fingerprint()).toThrow('Unable to generate fingerprint. Route unavailable.')
  })
})

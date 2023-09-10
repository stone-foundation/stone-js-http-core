import { IBlueprint } from '@stone-js/core'
import { HttpError } from '../src/errors/HttpError'
import { IncomingHttpEvent } from '../src/IncomingHttpEvent'
import { HEAD, HTTP_NOT_ACCEPTABLE } from '../src/constants'
import { OutgoingHttpResponse } from '../src/OutgoingHttpResponse'

// Unit tests for the OutgoingHttpResponse
describe('OutgoingHttpResponse', () => {
  let event: IncomingHttpEvent
  let response: OutgoingHttpResponse

  beforeEach(() => {
    response = OutgoingHttpResponse.create({ content: 'Hello World', statusCode: 200 })
    event = IncomingHttpEvent.create({ url: new URL('http://localhost'), ip: '127.0.0.1' })
  })

  it('should create an OutgoingHttpResponse and invoke getters', () => {
    expect(response).toBeInstanceOf(OutgoingHttpResponse)
    expect(response.charset).toBe('utf-8')
    expect(response.vary).toEqual([''])
  })

  it('should throw an error if no incomingEventResolver is provided when calling incomingEvent', () => {
    expect(() => response.incomingEvent).toThrow(HttpError)
  })

  it('should set headers as Map', () => {
    const response = OutgoingHttpResponse.create({ content: 'Hello World', statusCode: 224 })
    response.setHeaders(new Map([['Vary', ['Accept']]]))
    response.setHeaders(new Map([['Vary', ['Accept-Encoding']]]))
    expect(response.headers.get('Vary')).toBe('Accept, Accept-Encoding')
  })

  it('should throw an error when status code is invalid', () => {
    expect(() => response.setStatus(40)).toThrow(HttpError)
  })

  it('should invoke cookie\'s methods', () => {
    response.setCookie('gender', 'female')
    response.setCookie('surname', 'Stone')
    // @ts-expect-error - Testing private property
    const cookie = response._cookieCollection.get('gender')
    expect(cookie?.name).toBe('gender')
    expect(cookie?.value).toBe('female')
    // Secure
    response.secureCookies(false)
    // @ts-expect-error - Testing private property
    const cookie2 = response._cookieCollection.get('gender')
    expect(cookie2?.options.secure).toBe(false)
    // Clear
    response.clearCookie('surname', true)
    // @ts-expect-error - Testing private property
    expect(response._cookieCollection.has('surname')).toBe(false)
    // Clear all
    response.clearCookies(true)
    // @ts-expect-error - Testing private property
    expect(response._cookieCollection.isEmpty()).toBe(true)
  })

  it('should invoke isser\'s methods', () => {
    // @ts-expect-error - Invalid status code
    response.setStatus(undefined)
    expect(response.isInvalid()).toBe(false)
    expect(response.isInformational()).toBe(false)
    expect(response.isSuccessful()).toBe(false)
    expect(response.isOk()).toBe(false)
    expect(response.isEmpty()).toBe(false)
    expect(response.isRedirection()).toBe(false)
    expect(response.isRedirect()).toBe(false)
    expect(response.isClientError()).toBe(false)
    expect(response.isUnauthorized()).toBe(false)
    expect(response.isForbidden()).toBe(false)
    expect(response.isNotFound()).toBe(false)
    expect(response.isServerError()).toBe(true)
    expect(response.isValidateable()).toBe(false)

    response.setStatus(301)
    expect(response.isRedirect('back')).toBe(true)
  })

  it('should invoke setter\'s methods', () => {
    response.setType('text/plain')
    expect(response.getHeader('content-type')).toBe('text/plain; charset=utf-8')
    response.setLinks({ next: 'http://localhost/next' })
    expect(response.getHeader('Link')).toBe('<http://localhost/next>; rel="next"')
    response.setEtag('09344494439-934')
    expect(response.getHeader('ETag')).toBe('"09344494439-934"')
    response.setEtag(undefined)
    expect(response.getHeader('ETag')).toBeUndefined()
    response.setEtag('"09344494439-934"', true)
    expect(response.getHeader('ETag')).toBe('W/"09344494439-934"')
    response.setLastModified(undefined)
    expect(response.getHeader('Last-Modified')).toBeUndefined()
    response.setIncomingEventResolver(() => event).format({})
    expect(response.status).toBe(HTTP_NOT_ACCEPTABLE)
    expect(response.content).toBe('Invalid types ()')
  })

  it('should set content-type as `application/octet-stream` when invoking `setContentTypeIfNeeded`', () => {
    response.setContent(Buffer.from('Hello World'))
    response.removeHeader('Content-Type')
    // @ts-expect-error - Testing private property
    response.setContentTypeIfNeeded()
    expect(response.headers.get('Content-Type')).toBe('application/octet-stream; charset=utf-8')
  })

  it('should set content-type as `application/json` when invoking `setContentTypeIfNeeded`', () => {
    const blueprint = {
      get: vi.fn().mockReturnValue({ escape: true })
    } as unknown as IBlueprint
    // @ts-expect-error - Testing private property
    response._content = { message: '<Hello World != />' }
    response.removeHeader('Content-Type')
    response.setBlueprintResolver(() => blueprint)
    // @ts-expect-error - Testing private method
    response.setContentTypeIfNeeded()
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8')
    expect(response.content).toBe('{"message":"<Hello World != />"}')

    // @ts-expect-error - Testing private property
    response._content = 1
    response.removeHeader('Content-Type')
    // @ts-expect-error - Testing private method
    response.setContentTypeIfNeeded()
    expect(response.content).toBe('1')
  })

  it('should set status as HTTP_NOT_MODIFIED when invoking handleCacheHeaders when event is fresh', () => {
    event.isFresh = vi.fn().mockReturnValue(true)
    // @ts-expect-error - Testing private method
    response.setIncomingEventResolver(() => event).handleCacheHeaders()
    expect(response.status).toBe(304)
  })

  it('should remove headers on reset content when invoking prepareContentHeaders', () => {
    response.setStatus(205).setContent('Hello World').setHeaders({ 'Content-Length': '11', 'Transfer-Encoding': 'chunked' })
    expect(response.content).toBe('Hello World')
    expect(response.headers.get('Content-Length')).toBe('11')
    expect(response.headers.get('Transfer-Encoding')).toBe('chunked')
    // @ts-expect-error - Testing private method
    response.prepareContentHeaders()
    expect(response.content).toBe('')
    expect(response.headers.get('Content-Length')).toBe('0')
    expect(response.headers.get('Transfer-Encoding')).toBeFalsy()
  })

  it('should set content headers when invoking `setContentHeaders`', () => {
    const blueprint = {
      // @ts-expect-error - Testing private method
      get: vi.fn(() => response.defaultEtagFn.bind(response))
    } as unknown as IBlueprint
    // @ts-expect-error - Testing private property
    event.method = HEAD
    response.setBlueprintResolver(() => blueprint)
    response.setIncomingEventResolver(() => event)
    // @ts-expect-error - Testing private property
    response._headers.set('Content-Type', 'text/plain')
    // @ts-expect-error - Testing private property
    response._headers.set('Transfer-Encoding', 'chunked')
    // @ts-expect-error - Testing private property
    response._content = 'Hello World'
    // @ts-expect-error - Testing private method
    response.setContentHeaders()
    expect(response.headers.get('Content-Type')).toBe('text/plain; charset=utf-8')
  })

  it('should calculate length when content is buffer', () => {
    // @ts-expect-error - Testing private property
    response._content = Buffer.from('Hello World')
    // @ts-expect-error - Testing private method
    const length = response.calculateContentLength()
    expect(length).toBe(11)
  })

  it('should invoke ensureCharset with invalid value', () => {
    // @ts-expect-error - Testing private method
    response.ensureCharset(undefined)
    expect(response.headers.get('Content-Type')).toBe('text/html; charset=utf-8')
  })

  it('should throw an error on invalid cookie name', () => {
    // @ts-expect-error - Invalid cookie name
    expect(() => response.setCookie(40)).toThrow(HttpError)
    // @ts-expect-error - Invalid cookie name
    expect(() => response.clearCookie(40)).toThrow(HttpError)
  })

  it('should throw an error on invalid content-type when invoking setContentType', () => {
    // @ts-expect-error - Invalid cookie name
    expect(() => response.setContentType(40)).toThrow(HttpError)
  })

  it('should throw an error on invalid content when invoking morphToJson', () => {
    const obj = { self: {} }
    obj.self = obj
    // @ts-expect-error - Invalid cookie name
    expect(() => response.morphToJson(obj)).toThrow(HttpError)
  })
})

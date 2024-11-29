import { File } from '../src/file/File'
import { JsonResponse } from '../src/JsonResponse'
import { JsonpResponse } from '../src/JsonpResponse'
import { RedirectResponse } from '../src/RedirectResponse'
import { BinaryFileResponse } from '../src/BinaryFileResponse'
import { OutgoingHttpResponse } from '../src/OutgoingHttpResponse'
import { HTTP_OK, HTTP_NO_CONTENT, HTTP_BAD_REQUEST, HTTP_INTERNAL_SERVER_ERROR } from '../src/constants'
import { badRequestHttpResponse, createHttpResponse, fileHttpResponse, jsonHttpResponse, jsonpHttpResponse, noContentHttpResponse, okHttpResponse, redirectHttpResponse, serverErrorHttpResponse } from '../src/HttpResponse'

// Unit tests for the HttpResponse class
describe('HttpResponse', () => {
  it('should create a basic OutgoingHttpResponse', () => {
    const response = createHttpResponse('Hello World', HTTP_OK, { 'Content-Type': 'text/plain' })
    expect(response).toBeInstanceOf(OutgoingHttpResponse)
    expect(response.statusCode).toBe(HTTP_OK)
    expect(response.content).toBe('Hello World')
    expect(response.headers.get('Content-Type')).toBe('text/plain')
  })

  it('should create an OK response', () => {
    const response = okHttpResponse('All Good', { 'Content-Type': 'text/plain' })
    expect(response.statusCode).toBe(HTTP_OK)
    expect(response.content).toBe('All Good')
  })

  it('should create a No Content response', () => {
    const response = noContentHttpResponse()
    expect(response.statusCode).toBe(HTTP_NO_CONTENT)
    expect(response.content).toBeUndefined()
  })

  it('should create a Bad Request response', () => {
    const response = badRequestHttpResponse('Bad Request')
    expect(response.statusCode).toBe(HTTP_BAD_REQUEST)
    expect(response.content).toBe('Bad Request')
  })

  it('should create a JSON response', () => {
    const response = jsonHttpResponse({ key: 'value' })
    expect(response).toBeInstanceOf(JsonResponse)
    expect(response.statusCode).toBe(HTTP_OK)
    expect(response.content).toEqual({ key: 'value' })
  })

  it('should create a JSONP response', () => {
    const response = jsonpHttpResponse({ key: 'value' })
    expect(response).toBeInstanceOf(JsonpResponse)
    expect(response.statusCode).toBe(HTTP_OK)
    expect(response.content).toEqual({ key: 'value' })
  })

  it('should create a File response', () => {
    const file = File.create('test.txt')
    const response = fileHttpResponse(file)
    expect(response).toBeInstanceOf(BinaryFileResponse)
    expect(response.statusCode).toBe(HTTP_OK)
    expect(response.file).toBe(file)
  })

  it('should create a Redirect response', () => {
    const response = redirectHttpResponse('http://example.com')
    expect(response).toBeInstanceOf(RedirectResponse)
    expect(response.statusCode).toBe(302)
    expect(response.headers.get('Location')).toBe('http://example.com')
  })

  it('should create a Server Error response', () => {
    const response = serverErrorHttpResponse('Internal Server Error')
    expect(response.statusCode).toBe(HTTP_INTERNAL_SERVER_ERROR)
    expect(response.content).toBe('Internal Server Error')
  })
})

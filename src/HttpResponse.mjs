import { JsonResponse } from './JsonResponse.mjs'
import { JsonpResponse } from './JsonpResponse.mjs'
import { RedirectResponse } from './RedirectResponse.mjs'
import { BinaryFileResponse } from './BinaryFileResponse.mjs'
import { OutgoingHttpResponse } from './OutgoingHttpResponse.mjs'
import {
  HTTP_OK,
  HTTP_NOT_FOUND,
  HTTP_FORBIDDEN,
  HTTP_NO_CONTENT,
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_METHOD_NOT_ALLOWED,
  HTTP_SERVICE_UNAVAILABLE,
  HTTP_INTERNAL_SERVER_ERROR
} from './constants/http_statuses.mjs'

/**
 * Class representing an HttpResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class HttpResponse {
  /**
   * Create an OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=null]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static create (content, statusCode = 200, headers = {}) {
    return OutgoingHttpResponse.create(content, statusCode, headers)
  }

  /**
   * Create a 200(Ok) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static ok (content, headers = {}) {
    return this.create(content, HTTP_OK, headers)
  }

  /**
   * Create a 204(No content) OutgoingHttpResponse.
   *
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static noContent (headers = {}) {
    return this.create(undefined, HTTP_NO_CONTENT, headers)
  }

  /**
   * Create a 400(Bad request) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static badRequest (content, headers = {}) {
    return this.create(content, HTTP_BAD_REQUEST, headers)
  }

  /**
   * Create a 401(Unauthorized) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static unauthorized (content, headers = {}) {
    return this.create(content, HTTP_UNAUTHORIZED, headers)
  }

  /**
   * Create a 403(Forbidden) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static forbidden (content, headers = {}) {
    return this.create(content, HTTP_FORBIDDEN, headers)
  }

  /**
   * Create a 404(Not found) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static notFound (content, headers = {}) {
    return this.create(content, HTTP_NOT_FOUND, headers)
  }

  /**
   * Create a 405(Method not allowed) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static methodNotAllowed (content, headers = {}) {
    return this.create(content, HTTP_METHOD_NOT_ALLOWED, headers)
  }

  /**
   * Create a 500(Server error) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static serverError (content, headers = {}) {
    return this.create(content, HTTP_INTERNAL_SERVER_ERROR, headers)
  }

  /**
   * Create a 503(Unavailable) OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static unavailable (content, headers = {}) {
    return this.create(content, HTTP_SERVICE_UNAVAILABLE, headers)
  }

  /**
   * Create a 200(Ok) html OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=200]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static html (content, statusCode = 200, headers = {}) {
    return this.create(content, statusCode, { ...{ 'Content-Type': 'text/html' }, ...headers })
  }

  /**
   * Create a 200(Ok) json OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=200]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static json (content, statusCode = 200, headers = {}) {
    return JsonResponse.create(content, statusCode, headers)
  }

  /**
   * Create a 200(Ok) jsonp OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=200]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static jsonp (content, statusCode = 200, headers = {}) {
    return JsonpResponse.create(content, statusCode, headers)
  }

  /**
   * Create a 200(Ok) file OutgoingHttpResponse.
   *
   * @param  {(string|File)} content
   * @param  {number} [statusCode=200]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @param  {string} [contentDispositionType=null]
   * @param  {boolean} [autoEtag=false]
   * @param  {boolean} [autoLastModified=false]
   * @return {OutgoingHttpResponse}
   */
  static file (
    file,
    statusCode = 200,
    headers = {},
    contentDispositionType = null,
    autoEtag = false,
    autoLastModified = true
  ) {
    return BinaryFileResponse.create(file, statusCode, headers, contentDispositionType, autoEtag, autoLastModified)
  }

  /**
   * Create a 302(Ok) redirect OutgoingHttpResponse.
   *
   * @param  {(string|URL)} url
   * @param  {number} [statusCode=302]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static redirect (url, statusCode = 302, headers = {}) {
    return RedirectResponse.create(url, statusCode, headers)
  }

  /**
   * Create a 201(Empty) json OutgoingHttpResponse.
   *
   * @param  {*} content
   * @param  {number} [statusCode=201]
   * @param  {(Object|Map|Headers)} [headers={}]
   * @return {OutgoingHttpResponse}
   */
  static empty (statusCode = 201, headers = {}) {
    return this.create(statusCode, { ...{ 'Content-Type': 'application/json' }, ...headers })
  }
}

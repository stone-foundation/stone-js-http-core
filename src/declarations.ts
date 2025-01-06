/**
 * Represents the type of HTTP headers.
 *
 * It supports standard Fetch API `Headers`, `Map` of string keys and values, or a plain object.
 */
export type HeadersType = Headers | Map<string, string | string[]> | Record<string, string | string[]>

/**
 * Enum representing possible values for the `SameSite` attribute in cookies.
 */
export enum CookieSameSite {
  Lax = 'lax',
  None = 'none',
  Strict = 'strict',
}

/**
 * Options for configuring a cookie.
 */
export interface CookieOptions {
  path?: string
  expires?: Date
  domain?: string
  maxAge?: number
  secure?: boolean
  httpOnly?: boolean
  sameSite?: CookieSameSite
}

/**
 * Enum representing standard HTTP methods.
 */
export enum HttpMethods {
  GET = 'GET',
  PUT = 'PUT',
  HEAD = 'HEAD',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS'
}

/**
 * Represents valid HTTP methods as string literals.
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD'

/**
 * Describes a route definition, including its URI, method, and parameters.
 */
export interface IRoute {
  uri: string
  method: HttpMethod
  params: Record<string, unknown>
  getParam: <TReturn = unknown>(name: string, fallback?: TReturn) => TReturn | undefined
}

/**
 * Represents an outgoing HTTP response.
 */
export interface IOutgoingHttpResponse {
  etag: string | undefined
  status: number | undefined
  lastModified: string | undefined
}

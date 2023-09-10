
export type HeadersType = Headers | Map<string, string | string[]> | Record<string, string | string[]>

/**
 * SameSite options for the cookie.
 */
export enum CookieSameSite {
  Lax = 'lax',
  None = 'none',
  Strict = 'strict',
}

export enum HttpMethods {
  GET = 'GET',
  PUT = 'PUT',
  HEAD = 'HEAD',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS'
}

export interface IRoute {
  uri: string
  methods: HttpMethods[]
  getDomain: () => string
  parameter: (key: string) => string
  parameters: (key?: string, fallback?: string) => Record<string, unknown>
}

export interface IOutgoingHttpResponse {
  etag: string | undefined
  status: number | undefined
  lastModified: string | undefined
}

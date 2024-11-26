
export type HeadersType = Headers | Map<string, string | string[]> | Record<string, string | string[]>;

/**
 * SameSite options for the cookie.
 */
export enum CookieSameSite {
  Lax = 'lax',
  None = 'none',
  Strict = 'strict',
}
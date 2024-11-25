import { parse } from 'cookie';
import { Cookie, CookieOptions } from './Cookie';
import { deserializeCookieValue } from './utils';

/**
 * Class representing a collection of Cookies.
 */
export class CookieCollection {
  private secret?: string;
  private options: CookieOptions;
  private cookies: Map<string, Cookie>;

  /**
   * Create a CookieCollection.
   *
   * @param cookie - String cookie from header.
   * @param options - Cookies options.
   * @param secret - Secret value to sign and unsign cookies.
   */
  static create(cookie: string, options: CookieOptions = {}, secret?: string): CookieCollection {
    return new this(cookie, options, secret);
  }

  /**
   * Create a CookieCollection.
   *
   * @param cookie - String cookie from header.
   * @param options - Cookies options.
   * @param secret - Secret value to sign and unsign cookies.
   */
  protected constructor(cookie: string, options: CookieOptions = {}, secret?: string) {
    this.secret = secret;
    this.options = options;
    this.cookies = this.parse(cookie);
  }

  /**
   * Add a cookie to the collection.
   *
   * @param name - Cookie name.
   * @param value - Cookie value.
   * @param options - Cookie options.
   */
  add(name: string, value: unknown, options: CookieOptions = {}): this {
    this.cookies.set(name, Cookie.create(name, value, { ...this.options, ...options }));
    return this;
  }

  /**
   * Update a cookie in the collection.
   *
   * @param name - Cookie name.
   * @param value - New cookie value.
   * @param options - Cookie options.
   */
  update(name: string, value: unknown, options: CookieOptions = {}): this {
    const cookie = this.cookies.get(name)
    if (cookie !== undefined) {
      this.cookies.set(name, cookie.cloneWith(value, options));
    }
    return this;
  }

  /**
   * Get a cookie from the collection.
   *
   * @param name - Cookie name.
   * @param fallback - Fallback value if the cookie does not exist.
   */
  get(name: string, fallback?: Cookie): Cookie | undefined {
    return this.cookies.get(name) ?? fallback;
  }

  /**
   * Check if the collection has a cookie.
   *
   * @param name - Cookie name.
   */
  has(name: string): boolean {
    return this.cookies.has(name);
  }

  /**
   * Remove a cookie from the collection.
   *
   * @param name - Cookie name to remove.
   * @param force - If true, remove only from collection without setting expiry.
   */
  remove(name: string, force: boolean = false): this {
    if (force) {
      this.cookies.delete(name);
    } else {
      this.update(name, '', { expires: new Date(1) });
    }
    return this;
  }

  /**
   * Get all cookies in the collection.
   *
   * @param serialize - If true, serialize the cookies.
   */
  all<S extends boolean>(serialize: S = false as S): S extends true ? Array<string> : Record<string, unknown> {
    const values = Array.from(this.cookies.values());
    return (serialize
      ? values.map((v) => v.serialize(this.secret))
      : Object.fromEntries(values.map((v) => [v.name, v.value]))) as S extends true ? Array<string> : Record<string, unknown>;
  }

  /**
   * Check if the collection is empty.
   */
  isEmpty(): boolean {
    return this.cookies.size === 0;
  }

  /**
   * Clear all cookies from the collection.
   *
   * @param force - If true, remove only from collection without setting expiry.
   */
  clear(force: boolean = false): this {
    if (force) {
      this.cookies.clear();
    } else {
      this.cookies.forEach((v) => this.update(v.name, '', { expires: new Date(1) }));
    }
    return this;
  }

  /**
   * Set secure flag for all cookies in the collection.
   *
   * @param value - Whether the cookies are secure.
   */
  secure(value: boolean = false): this {
    this.cookies.forEach((v) => v.setSecure(value));
    return this;
  }

  /**
   * Set secret for signing and unsigning cookies.
   *
   * @param value - Secret value.
   */
  setSecret(value: string): this {
    this.secret = value;
    return this;
  }

  /**
   * Set options for all cookies in the collection.
   *
   * @param options - Cookie options.
   */
  setOptions(options: CookieOptions): this {
    this.options = options;
    this.cookies.forEach((cookie, name) => this.cookies.set(name, cookie.cloneWith(cookie.value, options)));
    return this;
  }

  /**
   * Parse the cookies from a string.
   *
   * @param cookie - String cookie from header.
   */
  private parse(cookie: string): Map<string, Cookie> {
    if (typeof cookie !== 'string') { return new Map(); }

    return new Map(
      Object
        .entries(parse(cookie))
        .map(([name, value]) => [name, deserializeCookieValue(name, value, this.options, this.secret)])
    );
  }
}

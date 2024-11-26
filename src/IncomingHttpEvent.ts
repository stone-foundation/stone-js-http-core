import mime from 'mime';
import fresh from 'fresh';
import typeIs from 'type-is';
import accepts from 'accepts';
import { URL } from 'node:url';
import { get, has } from 'lodash-es';
import rangeParser from 'range-parser';
import contentTypeLib from 'content-type';
import { CookieCollection } from './cookies/CookieCollection';
import { IncomingEvent, IncomingEventOptions } from '@stone-js/core';

/**
 * Interface for IncomingHttpEvent options.
 */
export interface IncomingHttpEventOptions extends IncomingEventOptions {
  url: URL;
  ip: string;
  ips?: string[];
  method?: string;
  protocol?: string;
  queryString?: string;
  defaultLocale?: string;
  cookies?: CookieCollection;
  body?: Record<string, unknown>;
  files?: Record<string, unknown>;
  headers?: Headers | Record<string, string>;
}

/**
 * Class representing an IncomingHttpEvent.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class IncomingHttpEvent extends IncomingEvent {
  static INCOMING_HTTP_EVENT = 'stonejs@incoming_http_event';

  private ip: string;
  private ips: string[];
  private url: URL;
  private body: Record<string, unknown>;
  private files: Record<string, unknown>;
  private query: URLSearchParams;
  private method: string;
  private accepts: accepts.Accepts;
  private headers: Headers;
  private cookies: CookieCollection;
  private protocol: string;
  private queryString: string;
  private userResolver?: () => unknown;
  private routeResolver?: () => unknown;

  /**
   * Create an IncomingHttpEvent.
   *
   * @param options - The options for creating the event.
   */
  constructor(options: IncomingHttpEventOptions) {
    super({
      type: IncomingHttpEvent.INCOMING_HTTP_EVENT,
      source: options.source,
      metadata: options.metadata,
      locale: options.locale ?? 'en'
    });

    if (!(options?.url instanceof URL)) {
      throw new TypeError('The `url` option must be an instance of `URL`.');
    }

    this.ip = options.ip;
    this.ips = options.ips ?? [];
    this.url = options.url;
    this.body = options.body ?? {};
    this.files = options.files ?? {};
    this.method = options.method ?? 'GET';
    this.protocol = options.protocol ?? 'http';
    this.accepts = accepts(this as any);
    this.queryString = options.queryString ?? '';
    this.query = new URLSearchParams(this.queryString);
    this.cookies = options.cookies ?? CookieCollection.create();
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
  }

  /** @returns The IP address of the request. */
  getIp(): string {
    return this.ip;
  }

  /** @returns The array of IPs of the request. */
  getIps(): string[] {
    return this.ips;
  }

  /** @returns The decoded pathname of the URL. */
  getDecodedPathname(): string | null {
    try {
      return decodeURIComponent(this.getPathname());
    } catch (_) {
      return null;
    }
  }

  /** @returns The hash of the URL. */
  getHash(): string {
    return this.url.hash;
  }

  /** @returns The host of the URL. */
  getHost(): string {
    return this.url.host;
  }

  /** @returns The hostname of the URL. */
  getHostname(): string {
    return this.url.hostname;
  }

  /** @returns The method of the request. */
  getMethod(): string {
    return this.method;
  }

  /** @returns The query parameters as URLSearchParams. */
  getQuery(): URLSearchParams {
    return this.query;
  }

  /** @returns The URI string of the request. */
  getUri(): string {
    return this.url.href;
  }

  /** @returns The cookies of the request. */
  getCookies(): CookieCollection {
    return this.cookies;
  }

  /** @returns The headers of the request. */
  getHeaders(): Headers {
    return this.headers;
  }

  /**
   * Get the accepted content types.
   * @returns The accepted content types.
   */
  getTypes(): string[] {
    return this.accepts.types() as string[];
  }

  /**
   * Get the accepted charsets.
   * @returns The accepted charsets.
   */
  getCharsets(): string[] {
    return this.accepts.charsets() as string[];
  }

  /**
   * Get the accepted languages.
   * @returns The accepted languages.
   */
  getLanguages(): string[] {
    return this.accepts.languages() as string[];
  }

  /**
   * Get the accepted encodings.
   * @returns The accepted encodings.
   */
  getEncodings(): string[] {
    return this.accepts.encodings() as string[];
  }

  /**
   * Get the content type of the request.
   * @returns The content type of the request.
   */
  getContentType(): string {
    return contentTypeLib.parse(this.headers.get('content-type') || '').type;
  }

  /**
   * Get the charset of the request.
   * @returns The charset of the request.
   */
  getCharset(): string {
    return contentTypeLib.parse(this.headers.get('content-type') || '').parameters.charset;
  }

  /**
   * Get a header by name.
   *
   * @param name - The header name.
   * @param fallback - A fallback value if the header is not found.
   * @returns The header value or fallback.
   */
  getHeader(name: string, fallback: unknown = null): string | unknown {
    if (!name) {
      throw new TypeError('The name argument is required.');
    }

    if (!isString(name)) {
      throw new TypeError('The name must be a string.');
    }

    const lcName = name.toLowerCase();

    if (['referer', 'referrer'].includes(lcName)) {
      return this.headers.get('referer') ?? this.headers.get('referrer') ?? fallback;
    }

    return this.headers.get(name) ?? this.headers.get(lcName) ?? fallback;
  }

  /**
   * Check if a header exists.
   *
   * @param name - The header name.
   * @returns True if the header exists.
   */
  hasHeader(name: string): boolean {
    if (!isString(name)) {
      throw new TypeError('The name must be a string.');
    }
    return this.headers.has(name);
  }

  /**
   * Return the first accepted type.
   * If none of the provided types are accepted, returns false.
   *
   * @param values - The content types to check.
   * @returns The first accepted type, or false if none are accepted.
   */
  acceptsTypes(...values: string[]): boolean | string | string[] {
    return this.accepts.type(flattenValues(values));
  }

  /**
   * Return the first accepted encoding.
   * If none of the provided encodings are accepted, returns false.
   *
   * @param values - The encodings to check.
   * @returns The first accepted encoding, or false if none are accepted.
   */
  acceptsEncodings(...values: string[]): boolean | string | string[] {
    return this.accepts.encoding(flattenValues(values));
  }

  /**
   * Return the first accepted charset.
   * If none of the provided charsets are accepted, returns false.
   *
   * @param values - The charsets to check.
   * @returns The first accepted charset, or false if none are accepted.
   */
  acceptsCharsets(...values: string[]): boolean | string | string[] {
    return this.accepts.charset(flattenValues(values));
  }

  /**
   * Return the first accepted language.
   * If none of the provided languages are accepted, returns false.
   *
   * @param values - The languages to check.
   * @returns The first accepted language, or false if none are accepted.
   */
  acceptsLanguages(...values: string[]): boolean | string | string[] {
    return this.accepts.language(flattenValues(values));
  }

  /**
   * Get request range.
   * Returns the parsed range for a given size if the "Range" header is present.
   *
   * @param size - The maximum size of the resource.
   * @param combine - Whether to combine overlapping & adjacent ranges.
   * @returns Parsed ranges or undefined if no Range header is present.
   */
  getRange(size: number, combine: boolean = false): rangeParser.Result | undefined {
    if (!this.hasHeader('Range')) return undefined;
    return rangeParser(size, this.getHeader('Range') as string, { combine });
  }

  /**
   * Get a value from the JSON body by key.
   *
   * @param key - The key to retrieve from the body.
   * @param fallback - A fallback value if the key does not exist.
   * @returns The value from the JSON body or the fallback value.
   */
  json<T>(key: string, fallback: T = null as unknown as T): T | unknown {
    if (this.is(['json'])) {
      return get(this.body, key, fallback);
    }
    return fallback;
  }

  /**
   * Check if a key exists in the JSON body.
   *
   * @param key - The key to check in the body.
   * @returns True if the key exists in the body, otherwise false.
   */
  hasJson(key: string): boolean {
    if (this.is(['json'])) {
      return has(this.body, key);
    }
    return false;
  }

  /** @returns {boolean} */
  get isSecure (): boolean {
    return this.protocol === 'https'
  }

  /**
   * Determine if the cache is fresh.
   *
   * @param response - The outgoing HTTP response.
   * @returns True if the cache is fresh, otherwise false.
   */
  isFresh(response: OutgoingHttpResponse): boolean {
    if (!['GET', 'HEAD'].includes(this.method)) {
      return false;
    }

    if ((response.status >= 200 && response.status < 300) || response.status === 304) {
      return fresh(this.headers, {
        etag: response.etag,
        'last-modified': response.lastModified,
      });
    }

    return false;
  }

  /**
   * Determine if the cache is stale.
   *
   * @param response - The outgoing HTTP response.
   * @returns True if the cache is stale, otherwise false.
   */
  isStale(response: OutgoingHttpResponse): boolean {
    return !this.isFresh(response);
  }

  /**
   * Generate a fully qualified URL for the given path.
   *
   * @param path - The path to generate the URL for.
   * @returns The generated URL.
   */
  uriForPath(path: string): string {
    return new URL(path, `${this.scheme}://${this.host}`).href;
  }

  /**
   * Return a filtered collection of files.
   *
   * @param files - The list of file names to filter.
   * @returns An object containing only the requested files.
   */
  filterFiles(files: string[]): Record<string, unknown> {
    return Object.fromEntries(Object.entries(this.files).filter(([key]) => files.includes(key)));
  }

  /**
   * Check if the current HTTP method matches the given method.
   *
   * @param method - The HTTP method to check.
   * @returns True if the current method matches, otherwise false.
   */
  isMethod(method: string): boolean {
    return this.method.toUpperCase() === method.toUpperCase();
  }

  /**
   * Determine if the current HTTP method is considered safe.
   * Safe methods are "GET", "HEAD", "OPTIONS", and "TRACE".
   *
   * @returns True if the current method is safe, otherwise false.
   */
  isMethodSafe(): boolean {
    return ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(this.method);
  }

  /**
   * Determine if the current HTTP method is cacheable.
   * Cacheable methods are "GET" and "HEAD".
   *
   * @returns True if the current method is cacheable, otherwise false.
   */
  isMethodCacheable(): boolean {
    return ['GET', 'HEAD'].includes(this.method);
  }

  /**
   * Retrieve the current route or a specific route parameter.
   *
   * @param param - The parameter to retrieve.
   * @param fallback - A fallback value if the parameter does not exist.
   * @returns The route parameter or fallback value.
   */
  route<T>(param?: string, fallback: T = null as unknown as T): T | Record<string, unknown> {
    const route = this.getRouteResolver();
    return !param ? route : route?.parameters(param, fallback);
  }

  /**
   * Get the URI with or without the domain.
   *
   * @param withDomain - Whether to include the domain in the URI.
   * @returns The URI with or without the domain.
   */
  getUri(withDomain: boolean = false): string {
    return withDomain ? new URL(this.decodedPathname, this.hostname).href : this.decodedPathname;
  }

  /**
   * Generate a unique identifier for the event based on the route and client information.
   *
   * @returns The unique identifier for the event.
   * @throws TypeError if the route is unavailable.
   */
  fingerprint(): string {
    const route = this.route();
    if (!route) {
      throw new TypeError('Unable to generate fingerprint. Route unavailable.');
    }
    return btoa([].concat(route.methods, route.getDomain(), route.uri, this.ip).join('|'));
  }
}

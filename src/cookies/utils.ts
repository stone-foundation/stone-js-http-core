import { Cookie } from './Cookie'
import { sign, unsign } from 'cookie-signature'
import { CookieError } from '../errors/CookieError'
import { CookieOptions } from '../options/HttpConfig'

/**
 * Check if the value is serialized.
 * @param value - The value to check.
 */
export const isCookieValueSerialized = (value: unknown): boolean => {
  return typeof value === 'string' && value.startsWith('$$j$$:')
}

/**
 * Check if the value is signed.
 * @param value - The value to check.
 */
export const isCookieValueSigned = (value: unknown): boolean => {
  return typeof value === 'string' && value.startsWith('$$s$$:')
}

/**
 * Sign the cookie value.
 * @param value - The value to sign.
 * @param secret - Secret for signing.
 */
export const signCookieValue = (value: unknown, secret: string): string => {
  if (typeof value !== 'string') {
    throw new CookieError('Can only sign string value.')
  }

  if (secret == undefined) {
    throw new CookieError('A secret is required to sign the value.')
  }

  if (isCookieValueSigned(value)) {
    throw new CookieError('Cannot sign a signed value.')
  }

  return `$$s$$:${sign(value, secret)}`
}

/**
 * Unsign the cookie value.
 * @param value - The signed value.
 * @param secret - Secret for unsigning.
 */
export const unsignCookieValue = (value: unknown, secret: string): string | false => {
  if (typeof value !== 'string') {
    throw new CookieError('Can only unsign string value.')
  }

  if (!isCookieValueSigned(value)) {
    throw new CookieError('Cannot unsign a non signed value.')
  }

  if (secret === undefined) {
    throw new CookieError('A secret is required to unsign the value.')
  }

  return unsign(value.replace('$$s$$:', ''), secret)
}

/**
 * Deserialize the cookie value.
 *
 * @param name - Cookie name.
 * @param rawValue - Cookie raw value.
 * @param secret - Optional secret for unsigning.
 * @returns A new cookie instance.
 */
export const deserializeCookieValue = (name: string, rawValue: unknown, options: CookieOptions, secret?: string): Cookie => {
  let value = rawValue

  if (secret !== undefined && isCookieValueSigned(value)) {
    value = unsignCookieValue(value, secret)
    if (value === false) {
      throw new CookieError('Failed to unsign the value.')
    }
  }

  if (isCookieValueSerialized(value) && typeof value === 'string') {
    value = JSON.parse(value.replace('$$j$$:', ''))
  }

  return Cookie.create(name, value, options)
}

import { sign, unsign } from 'cookie-signature'
import { CookieError } from '../errors/CookieError'

/**
 * Check if the value is serialized.
 * @param value - The value to check.
 */
export const isCookieValueSerialized = (value: unknown): value is string => {
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

  if (secret === undefined) {
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

import { sign } from 'cookie-signature';
import { CookieError } from '../../src/errors/CookieError';
import { deserializeCookieValue, signCookieValue, unsignCookieValue } from '../../src/cookies/utils';

/**
 * Unit tests for the Cookie class.
 */
describe('Utils', () => {
  it('should sign the cookie value', () => {
    const signedValue = signCookieValue('value', 'mySecret');
    expect(signedValue).toMatch(/\$\$s\$\$:.*$/);
  });

  it('should throw error if trying to sign non-string value', () => {
    expect(() => signCookieValue({}, 'mySecret')).toThrow(CookieError);
  });

  it('should throw error if trying to sign a value with no secret', () => {
    // @ts-ignore Testing for error
    expect(() => signCookieValue('value', undefined)).toThrow(CookieError);
  });

  it('should throw error if trying to sign an already signed value', () => {
    expect(() => signCookieValue('$$s$$:value', 'lorem')).toThrow(CookieError);
  });

  it('should unsign the cookie value', () => {
    const secret = 'mySecret';
    const signedValue = `$$s$$:${sign('value', secret)}`;
    const unsignedValue = unsignCookieValue(signedValue, secret);
    expect(unsignedValue).toBe('value');
  });

  it('should throw error if trying to unsign non-signed value', () => {
    // @ts-ignore Testing for error
    expect(() => unsignCookieValue(undefined, 'mySecret')).toThrow(CookieError);
  });

  it('should throw error if trying to unsign a non-signed value', () => {
    expect(() => unsignCookieValue('value', 'lorem')).toThrow(CookieError);
  });

  it('should throw error if trying to unsign a value with no secret', () => {
    // @ts-ignore Testing for error
    expect(() => unsignCookieValue('$$s$$:value', undefined)).toThrow(CookieError);
  });

  it('should deserialize a signed and serialized value', () => {
    const secret = 'mySecret';
    const value = { key: 'value' };
    const newCookie = deserializeCookieValue('test', `$$s$$:${sign(`$$j$$:${JSON.stringify(value)}`, secret)}`, {}, secret);
    expect(newCookie.value).toEqual(value);
  });

  it('should throw error if trying to deserialize modified-signed value', () => {
    expect(() => deserializeCookieValue('test', '$$s$$:value.djdjdkdkd', {}, 'mySecret')).toThrow(CookieError);
  });
});

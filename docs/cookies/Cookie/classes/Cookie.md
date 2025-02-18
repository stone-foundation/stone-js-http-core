[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [cookies/Cookie](../README.md) / Cookie

# Class: Cookie

Defined in: [http-core/src/cookies/Cookie.ts:8](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L8)

Class representing a Cookie.

## Constructors

### new Cookie()

> `protected` **new Cookie**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [http-core/src/cookies/Cookie.ts:28](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L28)

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [http-core/src/cookies/Cookie.ts:9](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L9)

***

### options

> `readonly` **options**: [`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Defined in: [http-core/src/cookies/Cookie.ts:11](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L11)

***

### value

> `readonly` **value**: `unknown`

Defined in: [http-core/src/cookies/Cookie.ts:10](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L10)

## Methods

### cloneWith()

> **cloneWith**(`value`, `options`): [`Cookie`](Cookie.md)

Defined in: [http-core/src/cookies/Cookie.ts:84](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L84)

Clone the cookie with new name, value, and options.

#### Parameters

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

New cookie options.

#### Returns

[`Cookie`](Cookie.md)

A new cookie instance.

***

### getValue()

> **getValue**\<`ValueType`\>(): `ValueType`

Defined in: [http-core/src/cookies/Cookie.ts:38](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L38)

Get the cookie value.

#### Type Parameters

• **ValueType** = `unknown`

#### Returns

`ValueType`

The cookie value.

***

### serialize()

> **serialize**(`secret`?): `string`

Defined in: [http-core/src/cookies/Cookie.ts:64](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L64)

Serialize the cookie value.

#### Parameters

##### secret?

`string`

Optional secret for signing.

#### Returns

`string`

***

### setExpires()

> **setExpires**(`value`): `this`

Defined in: [http-core/src/cookies/Cookie.ts:46](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L46)

Set expiration date for the cookie.

#### Parameters

##### value

`Date`

Expiration date.

#### Returns

`this`

***

### setSecure()

> **setSecure**(`value`): `this`

Defined in: [http-core/src/cookies/Cookie.ts:55](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L55)

Set secure flag for the cookie.

#### Parameters

##### value

`boolean`

Whether the cookie is secure.

#### Returns

`this`

***

### create()

> `static` **create**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [http-core/src/cookies/Cookie.ts:19](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/Cookie.ts#L19)

Create a Cookie.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [cookies/Cookie](../README.md) / Cookie

# Class: Cookie

Class representing a Cookie.

## Constructors

### new Cookie()

> `protected` **new Cookie**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

#### Defined in

[cookies/Cookie.ts:28](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L28)

## Properties

### name

> `readonly` **name**: `string`

#### Defined in

[cookies/Cookie.ts:9](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L9)

***

### options

> `readonly` **options**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md)

#### Defined in

[cookies/Cookie.ts:11](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L11)

***

### value

> `readonly` **value**: `unknown`

#### Defined in

[cookies/Cookie.ts:10](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L10)

## Methods

### cloneWith()

> **cloneWith**(`value`, `options`): [`Cookie`](Cookie.md)

Clone the cookie with new name, value, and options.

#### Parameters

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

New cookie options.

#### Returns

[`Cookie`](Cookie.md)

A new cookie instance.

#### Defined in

[cookies/Cookie.ts:76](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L76)

***

### serialize()

> **serialize**(`secret`?): `string`

Serialize the cookie value.

#### Parameters

##### secret?

`string`

Optional secret for signing.

#### Returns

`string`

#### Defined in

[cookies/Cookie.ts:56](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L56)

***

### setExpires()

> **setExpires**(`value`): `this`

Set expiration date for the cookie.

#### Parameters

##### value

`Date`

Expiration date.

#### Returns

`this`

#### Defined in

[cookies/Cookie.ts:38](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L38)

***

### setSecure()

> **setSecure**(`value`): `this`

Set secure flag for the cookie.

#### Parameters

##### value

`boolean`

Whether the cookie is secure.

#### Returns

`this`

#### Defined in

[cookies/Cookie.ts:47](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L47)

***

### create()

> `static` **create**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Create a Cookie.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

#### Defined in

[cookies/Cookie.ts:19](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/cookies/Cookie.ts#L19)

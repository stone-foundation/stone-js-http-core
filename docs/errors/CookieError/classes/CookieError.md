[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/CookieError](../README.md) / CookieError

# Class: CookieError

Custom error for cookie operations.

## Extends

- [`HttpError`](../../HttpError/classes/HttpError.md)

## Constructors

### new CookieError()

> **new CookieError**(`message`): [`CookieError`](CookieError.md)

#### Parameters

##### message

`string`

#### Returns

[`CookieError`](CookieError.md)

#### Overrides

[`HttpError`](../../HttpError/classes/HttpError.md).[`constructor`](../../HttpError/classes/HttpError.md#constructors)

#### Defined in

[errors/CookieError.ts:7](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/CookieError.ts#L7)

## Properties

### body

> `readonly` **body**: `unknown`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`body`](../../HttpError/classes/HttpError.md#body)

#### Defined in

[errors/HttpError.ts:20](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L20)

***

### headers

> `readonly` **headers**: `Headers`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`headers`](../../HttpError/classes/HttpError.md#headers)

#### Defined in

[errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L21)

***

### statusCode

> `readonly` **statusCode**: `number`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`statusCode`](../../HttpError/classes/HttpError.md#statuscode)

#### Defined in

[errors/HttpError.ts:22](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L22)

***

### statusMessage

> `readonly` **statusMessage**: `string`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`statusMessage`](../../HttpError/classes/HttpError.md#statusmessage)

#### Defined in

[errors/HttpError.ts:23](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L23)

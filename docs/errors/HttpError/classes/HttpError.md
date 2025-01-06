[**HTTP Core Documentation v0.0.32**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/HttpError](../README.md) / HttpError

# Class: HttpError

Defined in: [src/errors/HttpError.ts:10](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/errors/HttpError.ts#L10)

Class representing an HttpError.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `RuntimeError`

## Constructors

### new HttpError()

> **new HttpError**(`message`, `statusCode`, `headers`, `options`): [`HttpError`](HttpError.md)

Defined in: [src/errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/errors/HttpError.ts#L21)

Create an HttpError.

#### Parameters

##### message

`string`

The message to log.

##### statusCode

`number` = `500`

##### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `...`

##### options

`ErrorOptions` = `{}`

The error options.

#### Returns

[`HttpError`](HttpError.md)

#### Overrides

`RuntimeError.constructor`

## Properties

### headers

> `readonly` **headers**: [`HeadersType`](../../../declarations/type-aliases/HeadersType.md)

Defined in: [src/errors/HttpError.ts:12](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/errors/HttpError.ts#L12)

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: [src/errors/HttpError.ts:11](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/errors/HttpError.ts#L11)

***

### statusMessage

> `readonly` **statusMessage**: `string`

Defined in: [src/errors/HttpError.ts:13](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/errors/HttpError.ts#L13)

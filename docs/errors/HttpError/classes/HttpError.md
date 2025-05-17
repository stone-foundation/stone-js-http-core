[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/HttpError](../README.md) / HttpError

# Class: HttpError

Defined in: [http-core/src/errors/HttpError.ts:10](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/errors/HttpError.ts#L10)

Class representing an HttpError.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `RuntimeError`

## Constructors

### new HttpError()

> **new HttpError**(`message`, `statusCode`, `headers`, `options`): [`HttpError`](HttpError.md)

Defined in: [http-core/src/errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/errors/HttpError.ts#L21)

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

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3372

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3371

#### Inherited from

`RuntimeError.code`

***

### headers

> `readonly` **headers**: [`HeadersType`](../../../declarations/type-aliases/HeadersType.md)

Defined in: [http-core/src/errors/HttpError.ts:12](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/errors/HttpError.ts#L12)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3373

#### Inherited from

`RuntimeError.metadata`

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: [http-core/src/errors/HttpError.ts:11](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/errors/HttpError.ts#L11)

***

### statusMessage

> `readonly` **statusMessage**: `string`

Defined in: [http-core/src/errors/HttpError.ts:13](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/errors/HttpError.ts#L13)

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3394

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`RuntimeError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3380

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`RuntimeError.create`

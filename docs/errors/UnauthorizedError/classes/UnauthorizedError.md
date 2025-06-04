[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/UnauthorizedError](../README.md) / UnauthorizedError

# Class: UnauthorizedError

Defined in: [http-core/src/errors/UnauthorizedError.ts:6](https://github.com/stonemjs/http-core/blob/8d2f265873c2a6f093cdaa7580ed7328bd078613/src/errors/UnauthorizedError.ts#L6)

Unauthorized http error.

## Extends

- `RuntimeError`

## Constructors

### new UnauthorizedError()

> **new UnauthorizedError**(`message`, `options`): [`UnauthorizedError`](UnauthorizedError.md)

Defined in: [http-core/src/errors/UnauthorizedError.ts:7](https://github.com/stonemjs/http-core/blob/8d2f265873c2a6f093cdaa7580ed7328bd078613/src/errors/UnauthorizedError.ts#L7)

#### Parameters

##### message

`string`

##### options

`ErrorOptions` = `{}`

#### Returns

[`UnauthorizedError`](UnauthorizedError.md)

#### Overrides

`RuntimeError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3343

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3342

#### Inherited from

`RuntimeError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3344

#### Inherited from

`RuntimeError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3365

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

Defined in: core/dist/index.d.ts:3351

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

[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/BadRequestError](../README.md) / BadRequestError

# Class: BadRequestError

Defined in: [http-core/src/errors/BadRequestError.ts:6](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/errors/BadRequestError.ts#L6)

BadRequestError http error.

## Extends

- `RuntimeError`

## Constructors

### new BadRequestError()

> **new BadRequestError**(`message`, `options`): [`BadRequestError`](BadRequestError.md)

Defined in: [http-core/src/errors/BadRequestError.ts:7](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/errors/BadRequestError.ts#L7)

#### Parameters

##### message

`string`

##### options

`ErrorOptions` = `{}`

#### Returns

[`BadRequestError`](BadRequestError.md)

#### Overrides

`RuntimeError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:2800

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:2799

#### Inherited from

`RuntimeError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:2801

#### Inherited from

`RuntimeError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:2822

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

Defined in: core/dist/index.d.ts:2808

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

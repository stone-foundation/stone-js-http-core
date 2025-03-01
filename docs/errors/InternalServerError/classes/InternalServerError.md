[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/InternalServerError](../README.md) / InternalServerError

# Class: InternalServerError

Defined in: [http-core/src/errors/InternalServerError.ts:6](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/errors/InternalServerError.ts#L6)

InternalServer http error.

## Extends

- `RuntimeError`

## Constructors

### new InternalServerError()

> **new InternalServerError**(`message`, `options`): [`InternalServerError`](InternalServerError.md)

Defined in: [http-core/src/errors/InternalServerError.ts:7](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/errors/InternalServerError.ts#L7)

#### Parameters

##### message

`string`

##### options

`ErrorOptions` = `{}`

#### Returns

[`InternalServerError`](InternalServerError.md)

#### Overrides

`RuntimeError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:2854

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:2853

#### Inherited from

`RuntimeError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:2855

#### Inherited from

`RuntimeError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:2876

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

Defined in: core/dist/index.d.ts:2862

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

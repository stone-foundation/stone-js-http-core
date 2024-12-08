[**HTTP Core Documentation v0.0.3**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/FileError](../README.md) / FileError

# Class: FileError

Custom error for error operations.

## Extends

- [`HttpError`](../../HttpError/classes/HttpError.md)

## Constructors

### new FileError()

> **new FileError**(`message`): [`FileError`](FileError.md)

#### Parameters

##### message

`string`

#### Returns

[`FileError`](FileError.md)

#### Overrides

[`HttpError`](../../HttpError/classes/HttpError.md).[`constructor`](../../HttpError/classes/HttpError.md#constructors)

#### Defined in

[errors/FileError.ts:7](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/errors/FileError.ts#L7)

## Properties

### body

> `readonly` **body**: `unknown`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`body`](../../HttpError/classes/HttpError.md#body)

#### Defined in

[errors/HttpError.ts:20](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/errors/HttpError.ts#L20)

***

### headers

> `readonly` **headers**: `Headers`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`headers`](../../HttpError/classes/HttpError.md#headers)

#### Defined in

[errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/errors/HttpError.ts#L21)

***

### statusCode

> `readonly` **statusCode**: `number`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`statusCode`](../../HttpError/classes/HttpError.md#statuscode)

#### Defined in

[errors/HttpError.ts:22](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/errors/HttpError.ts#L22)

***

### statusMessage

> `readonly` **statusMessage**: `string`

#### Inherited from

[`HttpError`](../../HttpError/classes/HttpError.md).[`statusMessage`](../../HttpError/classes/HttpError.md#statusmessage)

#### Defined in

[errors/HttpError.ts:23](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/errors/HttpError.ts#L23)

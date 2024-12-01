[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [errors/HttpError](../README.md) / HttpError

# Class: HttpError

Class representing an HttpError.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `RuntimeError`

## Extended by

- [`CookieError`](../../CookieError/classes/CookieError.md)
- [`FileError`](../../FileError/classes/FileError.md)

## Constructors

### new HttpError()

> **new HttpError**(`message`, `options`): [`HttpError`](HttpError.md)

Create an HttpError.

#### Parameters

##### message

`string`

The message to log.

##### options

[`HttpErrorOptions`](../interfaces/HttpErrorOptions.md) = `{}`

The error options.

#### Returns

[`HttpError`](HttpError.md)

#### Overrides

`RuntimeError.constructor`

#### Defined in

[errors/HttpError.ts:31](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L31)

## Properties

### body

> `readonly` **body**: `unknown`

#### Defined in

[errors/HttpError.ts:20](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L20)

***

### headers

> `readonly` **headers**: `Headers`

#### Defined in

[errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L21)

***

### statusCode

> `readonly` **statusCode**: `number`

#### Defined in

[errors/HttpError.ts:22](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L22)

***

### statusMessage

> `readonly` **statusMessage**: `string`

#### Defined in

[errors/HttpError.ts:23](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/errors/HttpError.ts#L23)

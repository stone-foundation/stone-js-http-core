[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getHttpError

# Function: getHttpError()

> **getHttpError**(`statusCode`, `body`, `message`, `code`?, `cause`?): [`HttpError`](../../errors/HttpError/classes/HttpError.md)

Return HttpError instance.

## Parameters

### statusCode

`number`

The HTTP status code.

### body

`string`

The response body.

### message

`string`

The error message.

### code?

`string`

A custom error code.

### cause?

`Error`

Optional cause of the error.

## Returns

[`HttpError`](../../errors/HttpError/classes/HttpError.md)

An instance of HttpError.

## Defined in

[utils.ts:257](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/utils.ts#L257)

[**HTTP Core Documentation v0.0.0**](../../README.md)

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

[utils.ts:257](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/utils.ts#L257)

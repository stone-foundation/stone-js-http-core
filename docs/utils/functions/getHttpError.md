[**HTTP Core Documentation v0.0.3**](../../README.md)

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

[utils.ts:257](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/utils.ts#L257)

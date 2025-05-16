[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / htmlHttpResponse

# Function: htmlHttpResponse()

> **htmlHttpResponse**(`content`, `statusCode`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [http-core/src/HttpResponse.ts:138](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/HttpResponse.ts#L138)

Create a 200(OK) HTML OutgoingHttpResponse.

## Parameters

### content

`string`

The content of the response.

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

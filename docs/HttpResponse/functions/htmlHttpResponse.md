[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [HttpResponse](../README.md) / htmlHttpResponse

# Function: htmlHttpResponse()

> **htmlHttpResponse**(`content`, `statusCode`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [src/HttpResponse.ts:138](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/HttpResponse.ts#L138)

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

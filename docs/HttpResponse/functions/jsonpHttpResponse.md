[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / jsonpHttpResponse

# Function: jsonpHttpResponse()

> **jsonpHttpResponse**(`content`, `statusCode`, `headers`): [`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

Create a 200(OK) JSONP OutgoingHttpResponse.

## Parameters

### content

`unknown`

The content of the response.

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

`Record`\<`string`, `string`\> = `{}`

The headers for the response.

## Returns

[`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

A new instance of JsonpResponse.

## Defined in

[HttpResponse.ts:161](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/HttpResponse.ts#L161)

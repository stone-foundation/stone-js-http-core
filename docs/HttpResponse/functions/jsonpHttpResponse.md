[**HTTP Core Documentation v0.0.3**](../../README.md)

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

[HttpResponse.ts:161](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/HttpResponse.ts#L161)

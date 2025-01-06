[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / jsonpHttpResponse

# Function: jsonpHttpResponse()

> **jsonpHttpResponse**(`content`, `statusCode`, `headers`): [`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

Defined in: [src/HttpResponse.ts:162](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpResponse.ts#L162)

Create a 200(OK) JSONP OutgoingHttpResponse.

## Parameters

### content

`unknown`

The content of the response.

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

[`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

A new instance of JsonpResponse.

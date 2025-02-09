[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / jsonHttpResponse

# Function: jsonHttpResponse()

> **jsonHttpResponse**(`content`, `statusCode`, `headers`): [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

Defined in: [http-core/src/HttpResponse.ts:150](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/HttpResponse.ts#L150)

Create a 200(OK) JSON OutgoingHttpResponse.

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

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

A new instance of JsonResponse.

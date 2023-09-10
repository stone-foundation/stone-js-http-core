[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / jsonHttpResponse

# Function: jsonHttpResponse()

> **jsonHttpResponse**(`content`, `statusCode`, `headers`): [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

Create a 200(OK) JSON OutgoingHttpResponse.

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

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

A new instance of JsonResponse.

## Defined in

[HttpResponse.ts:149](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/HttpResponse.ts#L149)

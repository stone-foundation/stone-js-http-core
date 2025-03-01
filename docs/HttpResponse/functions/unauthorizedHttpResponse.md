[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / unauthorizedHttpResponse

# Function: unauthorizedHttpResponse()

> **unauthorizedHttpResponse**(`content`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [http-core/src/HttpResponse.ts:71](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/HttpResponse.ts#L71)

Create a 401(Unauthorized) OutgoingHttpResponse.

## Parameters

### content

`unknown`

The content of the response.

### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

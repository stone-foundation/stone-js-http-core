[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / badRequestHttpResponse

# Function: badRequestHttpResponse()

> **badRequestHttpResponse**(`content`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [src/HttpResponse.ts:60](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpResponse.ts#L60)

Create a 400(Bad Request) OutgoingHttpResponse.

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

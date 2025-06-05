[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [HttpResponse](../README.md) / notFoundHttpResponse

# Function: notFoundHttpResponse()

> **notFoundHttpResponse**(`content`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [src/HttpResponse.ts:93](https://github.com/stonemjs/http-core/blob/6577700bdede2420a5df45a338635c35547070ea/src/HttpResponse.ts#L93)

Create a 404(Not Found) OutgoingHttpResponse.

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

[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [HttpResponse](../README.md) / createHttpResponse

# Function: createHttpResponse()

> **createHttpResponse**(`content`, `statusCode`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Create an OutgoingHttpResponse.

## Parameters

• **content**: `unknown`

The content of the response.

• **statusCode**: `number` = `HTTP_OK`

The status code of the response.

• **headers**: `Record`\<`string`, `string`\> = `{}`

The headers for the response.

## Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

## Defined in

HttpResponse.ts:27

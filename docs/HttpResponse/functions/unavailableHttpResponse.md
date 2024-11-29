[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / unavailableHttpResponse

# Function: unavailableHttpResponse()

> **unavailableHttpResponse**(`content`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Create a 503(Service Unavailable) OutgoingHttpResponse.

## Parameters

### content

`unknown`

The content of the response.

### headers

`Record`\<`string`, `string`\> = `{}`

The headers for the response.

## Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

## Defined in

[HttpResponse.ts:125](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/HttpResponse.ts#L125)

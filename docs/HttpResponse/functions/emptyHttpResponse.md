[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / emptyHttpResponse

# Function: emptyHttpResponse()

> **emptyHttpResponse**(`statusCode`, `headers`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Create a 204(No content) empty JSON OutgoingHttpResponse.

## Parameters

### statusCode

`number` = `204`

The status code of the response.

### headers

`Record`\<`string`, `string`\> = `{}`

The headers for the response.

## Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

## Defined in

[HttpResponse.ts:206](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/HttpResponse.ts#L206)

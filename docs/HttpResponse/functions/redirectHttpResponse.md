[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / redirectHttpResponse

# Function: redirectHttpResponse()

> **redirectHttpResponse**(`url`, `statusCode`, `headers`): [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

Create a 302(Redirect) OutgoingHttpResponse.

## Parameters

### url

`string` | `URL`

### statusCode

`number` = `302`

The status code of the redirect response.

### headers

`Record`\<`string`, `string`\> = `{}`

The headers for the response.

## Returns

[`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

A new instance of RedirectResponse.

## Defined in

[HttpResponse.ts:195](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/HttpResponse.ts#L195)

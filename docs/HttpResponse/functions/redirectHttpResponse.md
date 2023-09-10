[**HTTP Core Documentation v0.0.0**](../../README.md)

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

[HttpResponse.ts:195](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/HttpResponse.ts#L195)

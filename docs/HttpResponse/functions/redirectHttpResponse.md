[**HTTP Core Documentation v0.0.3**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / redirectHttpResponse

# Function: redirectHttpResponse()

> **redirectHttpResponse**(`url`, `statusCode`, `headers`): [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

Create a 302(Redirect) OutgoingHttpResponse.

## Parameters

### url

The URL to redirect to.

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

[HttpResponse.ts:195](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/HttpResponse.ts#L195)

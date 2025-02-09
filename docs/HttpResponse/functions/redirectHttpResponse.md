[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / redirectHttpResponse

# Function: redirectHttpResponse()

> **redirectHttpResponse**(`url`, `statusCode`, `headers`): [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

Defined in: [http-core/src/HttpResponse.ts:196](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/HttpResponse.ts#L196)

Create a 302(Redirect) OutgoingHttpResponse.

## Parameters

### url

The URL to redirect to.

`string` | `URL`

### statusCode

`number` = `302`

The status code of the redirect response.

### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

[`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

A new instance of RedirectResponse.

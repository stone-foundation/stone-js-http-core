[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / redirectHttpResponse

# Function: redirectHttpResponse()

> **redirectHttpResponse**(`url`, `statusCode`, `headers`): [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

Defined in: [http-core/src/HttpResponse.ts:196](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/HttpResponse.ts#L196)

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

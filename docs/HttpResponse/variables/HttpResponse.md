[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / HttpResponse

# Variable: HttpResponse

> `const` **HttpResponse**: `object`

Defined in: [src/HttpResponse.ts:214](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpResponse.ts#L214)

A collection of factory methods for creating various types of HTTP responses.

## Type declaration

### badRequest()

> **badRequest**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `badRequestHttpResponse`

Creates a 400 Bad Request HTTP response.

Create a 400(Bad Request) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### create()

> **create**: (`content`, `statusCode`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `createHttpResponse`

Creates a generic HTTP response.

Create an OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### statusCode

`number` = `HTTP_OK`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### empty()

> **empty**: (`statusCode`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `emptyHttpResponse`

Creates an empty HTTP response.

Create a 204(No content) empty JSON OutgoingHttpResponse.

#### Parameters

##### statusCode

`number` = `204`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### file()

> **file**: (`file`, `statusCode`, `headers`, `contentDispositionType`, `autoEtag`, `autoLastModified`) => [`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md) = `fileHttpResponse`

Creates an HTTP response for serving a file.

Create a 200(OK) file OutgoingHttpResponse.

#### Parameters

##### file

The file to send as the response.

`string` | [`File`](../../file/File/classes/File.md)

##### statusCode

`number` = `HTTP_OK`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

##### contentDispositionType

The content disposition type (e.g., "inline" or "attachment").

`null` | `string`

##### autoEtag

`boolean` = `false`

Whether to automatically generate an ETag.

##### autoLastModified

`boolean` = `true`

Whether to automatically set the Last-Modified header.

#### Returns

[`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)

A new instance of BinaryFileResponse.

### forbidden()

> **forbidden**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `forbiddenHttpResponse`

Creates a 403 Forbidden HTTP response.

Create a 403(Forbidden) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### html()

> **html**: (`content`, `statusCode`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `htmlHttpResponse`

Creates an HTTP response with HTML content.

Create a 200(OK) HTML OutgoingHttpResponse.

#### Parameters

##### content

`string`

The content of the response.

##### statusCode

`number` = `HTTP_OK`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### json()

> **json**: (`content`, `statusCode`, `headers`) => [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md) = `jsonHttpResponse`

Creates an HTTP response with JSON content.

Create a 200(OK) JSON OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### statusCode

`number` = `HTTP_OK`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

A new instance of JsonResponse.

### jsonp()

> **jsonp**: (`content`, `statusCode`, `headers`) => [`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md) = `jsonpHttpResponse`

Creates an HTTP response with JSONP content.

Create a 200(OK) JSONP OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### statusCode

`number` = `HTTP_OK`

The status code of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

A new instance of JsonpResponse.

### methodNotAllowed()

> **methodNotAllowed**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `methodNotAllowedHttpResponse`

Creates a 405 Method Not Allowed HTTP response.

Create a 405(Method Not Allowed) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### noContent()

> **noContent**: (`headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `noContentHttpResponse`

Creates a 204 No Content HTTP response.

Create a 204(No Content) OutgoingHttpResponse.

#### Parameters

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### notFound()

> **notFound**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `notFoundHttpResponse`

Creates a 404 Not Found HTTP response.

Create a 404(Not Found) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### ok()

> **ok**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `okHttpResponse`

Creates a 200 OK HTTP response.

Create a 200(OK) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### redirect()

> **redirect**: (`url`, `statusCode`, `headers`) => [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md) = `redirectHttpResponse`

Creates an HTTP response that redirects to a different URL.

Create a 302(Redirect) OutgoingHttpResponse.

#### Parameters

##### url

The URL to redirect to.

`string` | `URL`

##### statusCode

`number` = `302`

The status code of the redirect response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

A new instance of RedirectResponse.

### serverError()

> **serverError**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `serverErrorHttpResponse`

Creates a 500 Internal Server Error HTTP response.

Create a 500(Internal Server Error) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### unauthorized()

> **unauthorized**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `unauthorizedHttpResponse`

Creates a 401 Unauthorized HTTP response.

Create a 401(Unauthorized) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

### unavailable()

> **unavailable**: (`content`, `headers`) => [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = `unavailableHttpResponse`

Creates a 503 Service Unavailable HTTP response.

Create a 503(Service Unavailable) OutgoingHttpResponse.

#### Parameters

##### content

`unknown`

The content of the response.

##### headers

[`HeadersType`](../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

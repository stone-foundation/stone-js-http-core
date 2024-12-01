[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEvent

# Class: IncomingHttpEvent

Class representing an IncomingHttpEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `IncomingEvent`

## Constructors

### new IncomingHttpEvent()

> `protected` **new IncomingHttpEvent**(`options`): [`IncomingHttpEvent`](IncomingHttpEvent.md)

Constructor for IncomingHttpEvent.

#### Parameters

##### options

[`IncomingHttpEventOptions`](../interfaces/IncomingHttpEventOptions.md)

The options to create an IncomingHttpEvent instance.

#### Returns

[`IncomingHttpEvent`](IncomingHttpEvent.md)

#### Throws

If the URL option is not a valid instance of URL.

#### Overrides

`IncomingEvent.constructor`

#### Defined in

[IncomingHttpEvent.ts:83](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L83)

## Properties

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

The headers of the request.

#### Defined in

[IncomingHttpEvent.ts:56](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L56)

***

### accepts

> `readonly` **accepts**: `Accepts`

The content negotiation handler for the request.

#### Defined in

[IncomingHttpEvent.ts:54](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L54)

***

### body

> `readonly` **body**: `Record`\<`string`, `unknown`\>

The body of the request.

#### Defined in

[IncomingHttpEvent.ts:46](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L46)

***

### cookies

> `readonly` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

The cookies included in the request.

#### Defined in

[IncomingHttpEvent.ts:58](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L58)

***

### files

> `readonly` **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

The files included in the request.

#### Defined in

[IncomingHttpEvent.ts:48](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L48)

***

### ip

> `readonly` **ip**: `string`

The IP address of the client making the request.

#### Defined in

[IncomingHttpEvent.ts:40](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L40)

***

### ips

> `readonly` **ips**: `string`[]

The list of IP addresses, typically for proxies.

#### Defined in

[IncomingHttpEvent.ts:42](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L42)

***

### method

> `readonly` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

The HTTP method of the request.

#### Defined in

[IncomingHttpEvent.ts:52](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L52)

***

### protocol

> `readonly` **protocol**: `string`

The protocol used for the request (e.g., http or https).

#### Defined in

[IncomingHttpEvent.ts:60](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L60)

***

### query

> `readonly` **query**: `URLSearchParams`

The query parameters of the request.

#### Defined in

[IncomingHttpEvent.ts:50](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L50)

***

### queryString?

> `readonly` `optional` **queryString**: `string`

The query string of the request.

#### Defined in

[IncomingHttpEvent.ts:62](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L62)

***

### routeResolver()?

> `protected` `optional` **routeResolver**: () => [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Returns

[`IRoute`](../../declarations/interfaces/IRoute.md)

#### Defined in

[IncomingHttpEvent.ts:65](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L65)

***

### url

> `readonly` **url**: `URL`

The URL of the request.

#### Defined in

[IncomingHttpEvent.ts:44](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L44)

***

### userResolver()?

> `protected` `optional` **userResolver**: () => `unknown`

#### Returns

`unknown`

#### Defined in

[IncomingHttpEvent.ts:64](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L64)

***

### INCOMING\_HTTP\_EVENT

> `static` **INCOMING\_HTTP\_EVENT**: `string` = `'stonejs@incoming_http_event'`

#### Defined in

[IncomingHttpEvent.ts:37](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L37)

## Accessors

### charset

#### Get Signature

> **get** **charset**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The charset specified in the content-type header.

#### Defined in

[IncomingHttpEvent.ts:230](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L230)

***

### charsets

#### Get Signature

> **get** **charsets**(): `string`[]

##### Returns

`string`[]

An array of acceptable character sets for the request.

#### Defined in

[IncomingHttpEvent.ts:215](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L215)

***

### contentType

#### Get Signature

> **get** **contentType**(): `string`

##### Returns

`string`

The content type specified in the headers.

#### Defined in

[IncomingHttpEvent.ts:235](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L235)

***

### decodedPathname

#### Get Signature

> **get** **decodedPathname**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The decoded pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:126](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L126)

***

### encodings

#### Get Signature

> **get** **encodings**(): `string`[]

##### Returns

`string`[]

An array of acceptable encodings for the request.

#### Defined in

[IncomingHttpEvent.ts:225](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L225)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The ETag of the request, if present.

#### Defined in

[IncomingHttpEvent.ts:205](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L205)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

##### Returns

`string`

The hash part of the URL.

#### Defined in

[IncomingHttpEvent.ts:135](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L135)

***

### headers

#### Get Signature

> **get** **headers**(): `Record`\<`string`, `string`\>

##### Returns

`Record`\<`string`, `string`\>

The headers of the request.

#### Defined in

[IncomingHttpEvent.ts:121](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L121)

***

### host

#### Get Signature

> **get** **host**(): `string`

##### Returns

`string`

The host of the URL (hostname:port).

#### Defined in

[IncomingHttpEvent.ts:140](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L140)

***

### hostname

#### Get Signature

> **get** **hostname**(): `string`

##### Returns

`string`

The hostname of the URL.

#### Defined in

[IncomingHttpEvent.ts:145](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L145)

***

### isAjax

#### Get Signature

> **get** **isAjax**(): `boolean`

##### Returns

`boolean`

Whether the request is an AJAX request.

#### Defined in

[IncomingHttpEvent.ts:190](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L190)

***

### isPrefetch

#### Get Signature

> **get** **isPrefetch**(): `boolean`

##### Returns

`boolean`

Whether the request was prefetch.

#### Defined in

[IncomingHttpEvent.ts:200](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L200)

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

##### Returns

`boolean`

Whether the request was made over a secure connection.

#### Defined in

[IncomingHttpEvent.ts:180](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L180)

***

### isXhr

#### Get Signature

> **get** **isXhr**(): `boolean`

##### Returns

`boolean`

Whether the request is an XMLHttpRequest.

#### Defined in

[IncomingHttpEvent.ts:185](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L185)

***

### languages

#### Get Signature

> **get** **languages**(): `string`[]

##### Returns

`string`[]

An array of acceptable languages for the request.

#### Defined in

[IncomingHttpEvent.ts:220](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L220)

***

### params

#### Get Signature

> **get** **params**(): `undefined` \| `Record`\<`string`, `unknown`\>

##### Returns

`undefined` \| `Record`\<`string`, `unknown`\>

The route parameters.

#### Defined in

[IncomingHttpEvent.ts:150](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L150)

***

### path

#### Get Signature

> **get** **path**(): `string`

##### Returns

`string`

The full path including pathname and search query.

#### Defined in

[IncomingHttpEvent.ts:155](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L155)

***

### pathname

#### Get Signature

> **get** **pathname**(): `string`

##### Returns

`string`

The pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:160](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L160)

***

### scheme

#### Get Signature

> **get** **scheme**(): `string`

##### Returns

`string`

The protocol of the URL (e.g., "http" or "https").

#### Defined in

[IncomingHttpEvent.ts:170](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L170)

***

### segments

#### Get Signature

> **get** **segments**(): `string`[]

##### Returns

`string`[]

The URL segments split by '/'.

#### Defined in

[IncomingHttpEvent.ts:175](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L175)

***

### types

#### Get Signature

> **get** **types**(): `string`[]

##### Returns

`string`[]

An array of acceptable content types for the request.

#### Defined in

[IncomingHttpEvent.ts:210](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L210)

***

### uri

#### Get Signature

> **get** **uri**(): `string`

##### Returns

`string`

The full URL as a string.

#### Defined in

[IncomingHttpEvent.ts:165](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L165)

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The user agent of the request.

#### Defined in

[IncomingHttpEvent.ts:195](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L195)

## Methods

### acceptsCharsets()

> **acceptsCharsets**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted charset.

#### Parameters

##### values

...`string`[]

The charsets to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted charset, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:341](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L341)

***

### acceptsEncodings()

> **acceptsEncodings**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted encoding.

#### Parameters

##### values

...`string`[]

The encodings to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted encoding, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:331](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L331)

***

### acceptsLanguages()

> **acceptsLanguages**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted language.

#### Parameters

##### values

...`string`[]

The languages to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted language, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:351](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L351)

***

### acceptsTypes()

> **acceptsTypes**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted content type.

#### Parameters

##### values

...`string`[]

The content types to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted type, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:321](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L321)

***

### filterFiles()

> **filterFiles**(`files`): `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

Filter and return files based on their names.

#### Parameters

##### files

`string`[]

The array of file names to filter.

#### Returns

`Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

An object containing the filtered files.

#### Defined in

[IncomingHttpEvent.ts:453](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L453)

***

### fingerprint()

> **fingerprint**(): `string`

Generate a unique fingerprint for the event.

#### Returns

`string`

The generated fingerprint as a base64 string.

#### Defined in

[IncomingHttpEvent.ts:588](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L588)

***

### get()

> **get**\<`R`\>(`key`, `fallback`?): `R`

Get data from the request.

Priority:
1. Route params
2. Body
3. Query params
4. Headers
5. Cookies
6. Metadata
7. Fallback value

#### Type Parameters

• **R** = `unknown`

#### Parameters

##### key

`string`

The key to look for.

##### fallback?

`R`

A fallback value if the key is not found.

#### Returns

`R`

The value of the key or the fallback.

#### Defined in

[IncomingHttpEvent.ts:255](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L255)

***

### getCookie()

> **getCookie**\<`R`\>(`name`, `fallback`?): `R`

Get a cookie value.

#### Type Parameters

• **R** = `string`

#### Parameters

##### name

`string`

The cookie name.

##### fallback?

`R`

A fallback value if the cookie is not found.

#### Returns

`R`

The cookie value or the fallback.

#### Defined in

[IncomingHttpEvent.ts:299](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L299)

***

### getFile()

> **getFile**(`name`): `undefined` \| [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]

Get a file by its name.

#### Parameters

##### name

`string`

The name of the file.

#### Returns

`undefined` \| [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]

The file if it exists, otherwise undefined.

#### Defined in

[IncomingHttpEvent.ts:463](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L463)

***

### getFormat()

> **getFormat**(`mimeType`): `undefined` \| `string`

Get file extension for a given MIME type.

#### Parameters

##### mimeType

`string`

The MIME type.

#### Returns

`undefined` \| `string`

The corresponding file extension, or undefined if not found.

#### Defined in

[IncomingHttpEvent.ts:371](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L371)

***

### getHeader()

> **getHeader**\<`R`\>(`name`, `fallback`?): `R`

Get a header value.

#### Type Parameters

• **R** = `string`

#### Parameters

##### name

`string`

The header name.

##### fallback?

`R`

A fallback value if the header is not found.

#### Returns

`R`

The header value or the fallback value.

#### Throws

If the header name is not a valid string.

#### Defined in

[IncomingHttpEvent.ts:274](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L274)

***

### getMimeType()

> **getMimeType**(`format`): `undefined` \| `string`

Get MIME type for a given file path or extension.

#### Parameters

##### format

`string`

The file path or extension.

#### Returns

`undefined` \| `string`

The corresponding MIME type, or undefined if not found.

#### Defined in

[IncomingHttpEvent.ts:361](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L361)

***

### getParam()

> **getParam**(`key`, `fallback`?): `undefined` \| `string`

Retrieve a parameter from the route if it exists.

#### Parameters

##### key

`string`

The name of the parameter to retrieve.

##### fallback?

`string`

The fallback value if the parameter does not exist.

#### Returns

`undefined` \| `string`

The value of the parameter if it exists, otherwise undefined.

#### Defined in

[IncomingHttpEvent.ts:605](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L605)

***

### getRoute()

> **getRoute**(): `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

Return the current route or a route parameter.

#### Returns

`undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

The route parameter or the route object.

#### Defined in

[IncomingHttpEvent.ts:579](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L579)

***

### getRouteResolver()

> **getRouteResolver**(): () => `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

Get the route resolver function.

#### Returns

`Function`

The route resolver function.

##### Returns

`undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Defined in

[IncomingHttpEvent.ts:559](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L559)

***

### getUri()

> **getUri**(`withDomain`): `undefined` \| `string`

Get the URI with or without the domain.

#### Parameters

##### withDomain

`boolean` = `false`

Whether to include the domain in the URI.

#### Returns

`undefined` \| `string`

The URI with or without the domain.

#### Defined in

[IncomingHttpEvent.ts:521](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L521)

***

### getUser()

> **getUser**\<`T`\>(): `undefined` \| `T`

Get the user instance.

#### Type Parameters

• **T**

#### Returns

`undefined` \| `T`

The user object, resolved through a user resolver function if available.

#### Defined in

[IncomingHttpEvent.ts:530](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L530)

***

### getUserResolver()

> **getUserResolver**(): () => `unknown`

Get the user resolver function.

#### Returns

`Function`

The user resolver function.

##### Returns

`unknown`

#### Defined in

[IncomingHttpEvent.ts:539](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L539)

***

### hasCookie()

> **hasCookie**(`name`): `boolean`

Check if a cookie exists.

#### Parameters

##### name

`string`

The cookie name to check.

#### Returns

`boolean`

True if the cookie exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:310](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L310)

***

### hasFile()

> **hasFile**(`name`): `boolean`

Check if a file exists by its name.

#### Parameters

##### name

`string`

The name of the file.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:473](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L473)

***

### hasHeader()

> **hasHeader**(`name`): `boolean`

Check if a header exists.

#### Parameters

##### name

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:287](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L287)

***

### hasJson()

> **hasJson**(`key`): `boolean`

Check if a key exists in the JSON body.

#### Parameters

##### key

`string`

The key to check for.

#### Returns

`boolean`

True if the key exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:417](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L417)

***

### is()

> **is**(`types`): `string` \| `false`

Check if the request matches one of the given content types.

#### Parameters

##### types

`string`[]

The content types to check.

#### Returns

`string` \| `false`

The best match, or false if no match is found.

#### Defined in

[IncomingHttpEvent.ts:381](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L381)

***

### isFresh()

> **isFresh**(`response`): `boolean`

Determine if the response cache is fresh.

#### Parameters

##### response

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check freshness against.

#### Returns

`boolean`

True if the cache is fresh, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:427](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L427)

***

### isMethod()

> **isMethod**(`method`): `boolean`

Check if the current event method matches the given method.

#### Parameters

##### method

`string`

The method to check.

#### Returns

`boolean`

True if the event method matches, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:483](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L483)

***

### isMethodCacheable()

> **isMethodCacheable**(): `boolean`

Check if the current event method is cacheable.

#### Returns

`boolean`

True if the method is cacheable, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:501](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L501)

***

### isMethodSafe()

> **isMethodSafe**(): `boolean`

Check if the current event method is considered safe.

#### Returns

`boolean`

True if the method is safe, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:492](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L492)

***

### isStale()

> **isStale**(`response`): `boolean`

Determine if the response cache is stale.

#### Parameters

##### response

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check staleness against.

#### Returns

`boolean`

True if the cache is stale, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:443](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L443)

***

### json()

> **json**(`key`, `fallback`?): `unknown`

Get a value from the JSON body.

#### Parameters

##### key

`string`

The key to look for in the JSON body.

##### fallback?

`unknown`

A fallback value if the key is not found.

#### Returns

`unknown`

The value of the key or the fallback.

#### Defined in

[IncomingHttpEvent.ts:404](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L404)

***

### range()

> **range**(`size`, `combine`): `undefined` \| `Result` \| `Ranges`

Get request range.

#### Parameters

##### size

`number`

The maximum size of the resource.

##### combine

`boolean` = `false`

Specifies if overlapping & adjacent ranges should be combined.

#### Returns

`undefined` \| `Result` \| `Ranges`

The parsed range, or undefined if not applicable.

#### Defined in

[IncomingHttpEvent.ts:392](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L392)

***

### setRouteResolver()

> **setRouteResolver**(`resolver`): `this`

Set the route resolver function.

#### Parameters

##### resolver

() => [`IRoute`](../../declarations/interfaces/IRoute.md)

The route resolver function.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[IncomingHttpEvent.ts:569](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L569)

***

### setUserResolver()

> **setUserResolver**(`resolver`): `this`

Set the user resolver function.

#### Parameters

##### resolver

() => `unknown`

The user resolver function.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[IncomingHttpEvent.ts:549](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L549)

***

### uriForPath()

> **uriForPath**(`path`): `string`

Generate a full URL for the given path.

#### Parameters

##### path

`string`

The path to append to the base URL.

#### Returns

`string`

The full URL for the given path.

#### Defined in

[IncomingHttpEvent.ts:511](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L511)

***

### create()

> `static` **create**(`options`): [`IncomingHttpEvent`](IncomingHttpEvent.md)

Create an IncomingHttpEvent.

#### Parameters

##### options

[`IncomingHttpEventOptions`](../interfaces/IncomingHttpEventOptions.md)

The IncomingHttpEvent options.

#### Returns

[`IncomingHttpEvent`](IncomingHttpEvent.md)

A new instance of IncomingHttpEvent.

#### Overrides

`IncomingEvent.create`

#### Defined in

[IncomingHttpEvent.ts:73](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/IncomingHttpEvent.ts#L73)

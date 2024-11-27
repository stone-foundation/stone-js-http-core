[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEvent

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

• **options**: `IncomingHttpEventOptions`

The options to create an IncomingHttpEvent instance.

#### Returns

[`IncomingHttpEvent`](IncomingHttpEvent.md)

#### Throws

If the URL option is not a valid instance of URL.

#### Overrides

`IncomingEvent.constructor`

#### Defined in

[IncomingHttpEvent.ts:82](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L82)

## Properties

### accepts

> `readonly` **accepts**: `Accepts`

The content negotiation handler for the request.

#### Defined in

[IncomingHttpEvent.ts:53](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L53)

***

### body

> `readonly` **body**: `Record`\<`string`, `unknown`\>

The body of the request.

#### Defined in

[IncomingHttpEvent.ts:45](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L45)

***

### cookies

> `readonly` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

The cookies included in the request.

#### Defined in

[IncomingHttpEvent.ts:57](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L57)

***

### files

> `readonly` **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

The files included in the request.

#### Defined in

[IncomingHttpEvent.ts:47](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L47)

***

### headers

> `readonly` **headers**: `Headers`

The headers of the request.

#### Defined in

[IncomingHttpEvent.ts:55](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L55)

***

### ip

> `readonly` **ip**: `string`

The IP address of the client making the request.

#### Defined in

[IncomingHttpEvent.ts:39](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L39)

***

### ips

> `readonly` **ips**: `string`[]

The list of IP addresses, typically for proxies.

#### Defined in

[IncomingHttpEvent.ts:41](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L41)

***

### method

> `readonly` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

The HTTP method of the request.

#### Defined in

[IncomingHttpEvent.ts:51](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L51)

***

### protocol

> `readonly` **protocol**: `string`

The protocol used for the request (e.g., http or https).

#### Defined in

[IncomingHttpEvent.ts:59](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L59)

***

### query

> `readonly` **query**: `URLSearchParams`

The query parameters of the request.

#### Defined in

[IncomingHttpEvent.ts:49](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L49)

***

### queryString?

> `readonly` `optional` **queryString**: `string`

The query string of the request.

#### Defined in

[IncomingHttpEvent.ts:61](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L61)

***

### routeResolver()?

> `protected` `optional` **routeResolver**: () => [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Returns

[`IRoute`](../../declarations/interfaces/IRoute.md)

#### Defined in

[IncomingHttpEvent.ts:64](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L64)

***

### url

> `readonly` **url**: `URL`

The URL of the request.

#### Defined in

[IncomingHttpEvent.ts:43](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L43)

***

### userResolver()?

> `protected` `optional` **userResolver**: () => `unknown`

#### Returns

`unknown`

#### Defined in

[IncomingHttpEvent.ts:63](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L63)

***

### INCOMING\_HTTP\_EVENT

> `static` **INCOMING\_HTTP\_EVENT**: `string` = `'stonejs@incoming_http_event'`

#### Defined in

[IncomingHttpEvent.ts:36](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L36)

## Accessors

### charset

#### Get Signature

> **get** **charset**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The charset specified in the content-type header.

#### Defined in

[IncomingHttpEvent.ts:222](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L222)

***

### charsets

#### Get Signature

> **get** **charsets**(): `string`[]

##### Returns

`string`[]

An array of acceptable character sets for the request.

#### Defined in

[IncomingHttpEvent.ts:207](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L207)

***

### contentType

#### Get Signature

> **get** **contentType**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The content type specified in the headers.

#### Defined in

[IncomingHttpEvent.ts:227](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L227)

***

### decodedPathname

#### Get Signature

> **get** **decodedPathname**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The decoded pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:118](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L118)

***

### encodings

#### Get Signature

> **get** **encodings**(): `string`[]

##### Returns

`string`[]

An array of acceptable encodings for the request.

#### Defined in

[IncomingHttpEvent.ts:217](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L217)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The ETag of the request, if present.

#### Defined in

[IncomingHttpEvent.ts:197](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L197)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

##### Returns

`string`

The hash part of the URL.

#### Defined in

[IncomingHttpEvent.ts:127](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L127)

***

### host

#### Get Signature

> **get** **host**(): `string`

##### Returns

`string`

The host of the URL (hostname:port).

#### Defined in

[IncomingHttpEvent.ts:132](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L132)

***

### hostname

#### Get Signature

> **get** **hostname**(): `string`

##### Returns

`string`

The hostname of the URL.

#### Defined in

[IncomingHttpEvent.ts:137](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L137)

***

### isAjax

#### Get Signature

> **get** **isAjax**(): `boolean`

##### Returns

`boolean`

Whether the request is an AJAX request.

#### Defined in

[IncomingHttpEvent.ts:182](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L182)

***

### isPrefetch

#### Get Signature

> **get** **isPrefetch**(): `boolean`

##### Returns

`boolean`

Whether the request was prefetch.

#### Defined in

[IncomingHttpEvent.ts:192](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L192)

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

##### Returns

`boolean`

Whether the request was made over a secure connection.

#### Defined in

[IncomingHttpEvent.ts:172](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L172)

***

### isXhr

#### Get Signature

> **get** **isXhr**(): `boolean`

##### Returns

`boolean`

Whether the request is an XMLHttpRequest.

#### Defined in

[IncomingHttpEvent.ts:177](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L177)

***

### languages

#### Get Signature

> **get** **languages**(): `string`[]

##### Returns

`string`[]

An array of acceptable languages for the request.

#### Defined in

[IncomingHttpEvent.ts:212](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L212)

***

### params

#### Get Signature

> **get** **params**(): `undefined` \| `Record`\<`string`, `unknown`\>

##### Returns

`undefined` \| `Record`\<`string`, `unknown`\>

The route parameters.

#### Defined in

[IncomingHttpEvent.ts:142](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L142)

***

### path

#### Get Signature

> **get** **path**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The full path including pathname and search query.

#### Defined in

[IncomingHttpEvent.ts:147](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L147)

***

### pathname

#### Get Signature

> **get** **pathname**(): `string`

##### Returns

`string`

The pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:152](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L152)

***

### scheme

#### Get Signature

> **get** **scheme**(): `string`

##### Returns

`string`

The protocol of the URL (e.g., "http" or "https").

#### Defined in

[IncomingHttpEvent.ts:162](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L162)

***

### segments

#### Get Signature

> **get** **segments**(): `string`[]

##### Returns

`string`[]

The URL segments split by '/'.

#### Defined in

[IncomingHttpEvent.ts:167](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L167)

***

### types

#### Get Signature

> **get** **types**(): `string`[]

##### Returns

`string`[]

An array of acceptable content types for the request.

#### Defined in

[IncomingHttpEvent.ts:202](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L202)

***

### uri

#### Get Signature

> **get** **uri**(): `string`

##### Returns

`string`

The full URL as a string.

#### Defined in

[IncomingHttpEvent.ts:157](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L157)

***

### user

#### Get Signature

> **get** **user**(): `unknown`

##### Returns

`unknown`

The user object, resolved through a user resolver function if available.

#### Defined in

[IncomingHttpEvent.ts:232](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L232)

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The user agent of the request.

#### Defined in

[IncomingHttpEvent.ts:187](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L187)

## Methods

### acceptsCharsets()

> **acceptsCharsets**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted charset.

#### Parameters

• ...**values**: `string`[]

The charsets to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted charset, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:338](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L338)

***

### acceptsEncodings()

> **acceptsEncodings**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted encoding.

#### Parameters

• ...**values**: `string`[]

The encodings to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted encoding, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:328](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L328)

***

### acceptsLanguages()

> **acceptsLanguages**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted language.

#### Parameters

• ...**values**: `string`[]

The languages to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted language, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:348](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L348)

***

### acceptsTypes()

> **acceptsTypes**(...`values`): `string` \| `false` \| `string`[]

Return the first accepted content type.

#### Parameters

• ...**values**: `string`[]

The content types to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted type, or false if none are accepted.

#### Defined in

[IncomingHttpEvent.ts:318](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L318)

***

### filterFiles()

> **filterFiles**(`files`): `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

Filter and return files based on their names.

#### Parameters

• **files**: `string`[]

The array of file names to filter.

#### Returns

`Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

An object containing the filtered files.

#### Defined in

[IncomingHttpEvent.ts:460](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L460)

***

### fingerprint()

> **fingerprint**(): `string`

Generate a unique fingerprint for the event.

#### Returns

`string`

The generated fingerprint as a base64 string.

#### Defined in

[IncomingHttpEvent.ts:539](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L539)

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

• **key**: `string`

The key to look for.

• **fallback?**: `R`

A fallback value if the key is not found.

#### Returns

`R`

The value of the key or the fallback.

#### Defined in

[IncomingHttpEvent.ts:252](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L252)

***

### getCookie()

> **getCookie**\<`R`\>(`name`, `fallback`?): `R`

Get a cookie value.

#### Type Parameters

• **R** = `string`

#### Parameters

• **name**: `string`

The cookie name.

• **fallback?**: `R`

A fallback value if the cookie is not found.

#### Returns

`R`

The cookie value or the fallback.

#### Defined in

[IncomingHttpEvent.ts:296](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L296)

***

### getFile()

> **getFile**(`name`): `undefined` \| [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]

Get a file by its name.

#### Parameters

• **name**: `string`

The name of the file.

#### Returns

`undefined` \| [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]

The file if it exists, otherwise undefined.

#### Defined in

[IncomingHttpEvent.ts:470](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L470)

***

### getFormat()

> **getFormat**(`mimeType`): `null` \| `string`

Get file extension for a given MIME type.

#### Parameters

• **mimeType**: `string`

The MIME type.

#### Returns

`null` \| `string`

The corresponding file extension, or null if not found.

#### Defined in

[IncomingHttpEvent.ts:368](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L368)

***

### getHeader()

> **getHeader**\<`R`\>(`name`, `fallback`?): `R`

Get a header value.

#### Type Parameters

• **R** = `string`

#### Parameters

• **name**: `string`

The header name.

• **fallback?**: `R`

A fallback value if the header is not found.

#### Returns

`R`

The header value or the fallback value.

#### Throws

If the header name is not a valid string.

#### Defined in

[IncomingHttpEvent.ts:271](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L271)

***

### getMimeType()

> **getMimeType**(`format`): `null` \| `string`

Get MIME type for a given file path or extension.

#### Parameters

• **format**: `string`

The file path or extension.

#### Returns

`null` \| `string`

The corresponding MIME type, or null if not found.

#### Defined in

[IncomingHttpEvent.ts:358](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L358)

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

[IncomingHttpEvent.ts:574](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L574)

***

### getUri()

> **getUri**(`withDomain`): `undefined` \| `string`

Get the URI with or without the domain.

#### Parameters

• **withDomain**: `boolean` = `false`

Whether to include the domain in the URI.

#### Returns

`undefined` \| `string`

The URI with or without the domain.

#### Defined in

[IncomingHttpEvent.ts:518](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L518)

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

[IncomingHttpEvent.ts:554](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L554)

***

### hasCookie()

> **hasCookie**(`name`): `boolean`

Check if a cookie exists.

#### Parameters

• **name**: `string`

The cookie name to check.

#### Returns

`boolean`

True if the cookie exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:307](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L307)

***

### hasFile()

> **hasFile**(`name`): `boolean`

Check if a file exists by its name.

#### Parameters

• **name**: `string`

The name of the file.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:480](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L480)

***

### hasHeader()

> **hasHeader**(`name`): `boolean`

Check if a header exists.

#### Parameters

• **name**: `string`

The header name to check.

#### Returns

`boolean`

True if the header exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:284](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L284)

***

### hasJson()

> **hasJson**(`key`): `boolean`

Check if a key exists in the JSON body.

#### Parameters

• **key**: `string`

The key to check for.

#### Returns

`boolean`

True if the key exists, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:414](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L414)

***

### is()

> **is**(`types`): `undefined` \| `string` \| `false`

Check if the request matches one of the given content types.

#### Parameters

• **types**: `string`[]

The content types to check.

#### Returns

`undefined` \| `string` \| `false`

The best match, or false if no match is found.

#### Defined in

[IncomingHttpEvent.ts:378](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L378)

***

### isFresh()

> **isFresh**(`response`): `boolean`

Determine if the response cache is fresh.

#### Parameters

• **response**: [`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check freshness against.

#### Returns

`boolean`

True if the cache is fresh, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:424](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L424)

***

### isMethod()

> **isMethod**(`method`): `boolean`

Check if the current event method matches the given method.

#### Parameters

• **method**: `string`

The method to check.

#### Returns

`boolean`

True if the event method matches, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:490](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L490)

***

### isMethodCacheable()

> **isMethodCacheable**(): `boolean`

Check if the current event method is cacheable.

#### Returns

`boolean`

True if the method is cacheable, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:508](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L508)

***

### isMethodSafe()

> **isMethodSafe**(): `boolean`

Check if the current event method is considered safe.

#### Returns

`boolean`

True if the method is safe, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:499](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L499)

***

### isStale()

> **isStale**(`response`): `boolean`

Determine if the response cache is stale.

#### Parameters

• **response**: [`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check staleness against.

#### Returns

`boolean`

True if the cache is stale, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:440](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L440)

***

### json()

> **json**(`key`, `fallback`?): `unknown`

Get a value from the JSON body.

#### Parameters

• **key**: `string`

The key to look for in the JSON body.

• **fallback?**: `unknown`

A fallback value if the key is not found.

#### Returns

`unknown`

The value of the key or the fallback.

#### Defined in

[IncomingHttpEvent.ts:401](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L401)

***

### range()

> **range**(`size`, `combine`): `undefined` \| `Result` \| `Ranges`

Get request range.

#### Parameters

• **size**: `number`

The maximum size of the resource.

• **combine**: `boolean` = `false`

Specifies if overlapping & adjacent ranges should be combined.

#### Returns

`undefined` \| `Result` \| `Ranges`

The parsed range, or undefined if not applicable.

#### Defined in

[IncomingHttpEvent.ts:389](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L389)

***

### route()

> **route**(`param`?, `fallback`?): `undefined` \| `string` \| [`IRoute`](../../declarations/interfaces/IRoute.md) \| `Record`\<`string`, `unknown`\>

Return the current route or a route parameter.

#### Parameters

• **param?**: `string`

The parameter to retrieve from the route.

• **fallback?**: `string`

The fallback value if the parameter does not exist.

#### Returns

`undefined` \| `string` \| [`IRoute`](../../declarations/interfaces/IRoute.md) \| `Record`\<`string`, `unknown`\>

The route parameter or the route object.

#### Defined in

[IncomingHttpEvent.ts:529](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L529)

***

### setRouteResolver()

> **setRouteResolver**(`resolver`): `this`

Set the route resolver function.

#### Parameters

• **resolver**

The route resolver function.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[IncomingHttpEvent.ts:584](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L584)

***

### setUserResolver()

> **setUserResolver**(`resolver`): `this`

Set the user resolver function.

#### Parameters

• **resolver**

The user resolver function.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[IncomingHttpEvent.ts:564](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L564)

***

### uriForPath()

> **uriForPath**(`path`): `string`

Generate a full URL for the given path.

#### Parameters

• **path**: `string`

The path to append to the base URL.

#### Returns

`string`

The full URL for the given path.

#### Defined in

[IncomingHttpEvent.ts:450](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L450)

***

### create()

> `static` **create**(`options`): [`IncomingHttpEvent`](IncomingHttpEvent.md)

Create an IncomingHttpEvent.

#### Parameters

• **options**: `IncomingHttpEventOptions`

The IncomingHttpEvent options.

#### Returns

[`IncomingHttpEvent`](IncomingHttpEvent.md)

A new instance of IncomingHttpEvent.

#### Overrides

`IncomingEvent.create`

#### Defined in

[IncomingHttpEvent.ts:72](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/IncomingHttpEvent.ts#L72)

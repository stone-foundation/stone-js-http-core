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

[IncomingHttpEvent.ts:82](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L82)

## Properties

### \_headers

> `readonly` **\_headers**: `Headers`

The headers of the request.

#### Defined in

[IncomingHttpEvent.ts:55](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L55)

***

### accepts

> `readonly` **accepts**: `Accepts`

The content negotiation handler for the request.

#### Defined in

[IncomingHttpEvent.ts:53](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L53)

***

### body

> `readonly` **body**: `Record`\<`string`, `unknown`\>

The body of the request.

#### Defined in

[IncomingHttpEvent.ts:45](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L45)

***

### cookies

> `readonly` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

The cookies included in the request.

#### Defined in

[IncomingHttpEvent.ts:57](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L57)

***

### files

> `readonly` **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

The files included in the request.

#### Defined in

[IncomingHttpEvent.ts:47](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L47)

***

### ip

> `readonly` **ip**: `string`

The IP address of the client making the request.

#### Defined in

[IncomingHttpEvent.ts:39](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L39)

***

### ips

> `readonly` **ips**: `string`[]

The list of IP addresses, typically for proxies.

#### Defined in

[IncomingHttpEvent.ts:41](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L41)

***

### method

> `readonly` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

The HTTP method of the request.

#### Defined in

[IncomingHttpEvent.ts:51](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L51)

***

### protocol

> `readonly` **protocol**: `string`

The protocol used for the request (e.g., http or https).

#### Defined in

[IncomingHttpEvent.ts:59](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L59)

***

### query

> `readonly` **query**: `URLSearchParams`

The query parameters of the request.

#### Defined in

[IncomingHttpEvent.ts:49](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L49)

***

### queryString?

> `readonly` `optional` **queryString**: `string`

The query string of the request.

#### Defined in

[IncomingHttpEvent.ts:61](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L61)

***

### routeResolver()?

> `protected` `optional` **routeResolver**: () => [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Returns

[`IRoute`](../../declarations/interfaces/IRoute.md)

#### Defined in

[IncomingHttpEvent.ts:64](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L64)

***

### url

> `readonly` **url**: `URL`

The URL of the request.

#### Defined in

[IncomingHttpEvent.ts:43](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L43)

***

### userResolver()?

> `protected` `optional` **userResolver**: \<`T`\>() => `T`

#### Type Parameters

• **T**

#### Returns

`T`

#### Defined in

[IncomingHttpEvent.ts:63](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L63)

***

### INCOMING\_HTTP\_EVENT

> `static` **INCOMING\_HTTP\_EVENT**: `string` = `'stonejs@incoming_http_event'`

#### Defined in

[IncomingHttpEvent.ts:36](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L36)

## Accessors

### charset

#### Get Signature

> **get** **charset**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The charset specified in the content-type header.

#### Defined in

[IncomingHttpEvent.ts:229](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L229)

***

### charsets

#### Get Signature

> **get** **charsets**(): `string`[]

##### Returns

`string`[]

An array of acceptable character sets for the request.

#### Defined in

[IncomingHttpEvent.ts:214](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L214)

***

### contentType

#### Get Signature

> **get** **contentType**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The content type specified in the headers.

#### Defined in

[IncomingHttpEvent.ts:234](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L234)

***

### decodedPathname

#### Get Signature

> **get** **decodedPathname**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The decoded pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:125](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L125)

***

### encodings

#### Get Signature

> **get** **encodings**(): `string`[]

##### Returns

`string`[]

An array of acceptable encodings for the request.

#### Defined in

[IncomingHttpEvent.ts:224](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L224)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The ETag of the request, if present.

#### Defined in

[IncomingHttpEvent.ts:204](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L204)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

##### Returns

`string`

The hash part of the URL.

#### Defined in

[IncomingHttpEvent.ts:134](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L134)

***

### headers

#### Get Signature

> **get** **headers**(): `Record`\<`string`, `string`\>

##### Returns

`Record`\<`string`, `string`\>

The headers of the request.

#### Defined in

[IncomingHttpEvent.ts:120](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L120)

***

### host

#### Get Signature

> **get** **host**(): `string`

##### Returns

`string`

The host of the URL (hostname:port).

#### Defined in

[IncomingHttpEvent.ts:139](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L139)

***

### hostname

#### Get Signature

> **get** **hostname**(): `string`

##### Returns

`string`

The hostname of the URL.

#### Defined in

[IncomingHttpEvent.ts:144](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L144)

***

### isAjax

#### Get Signature

> **get** **isAjax**(): `boolean`

##### Returns

`boolean`

Whether the request is an AJAX request.

#### Defined in

[IncomingHttpEvent.ts:189](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L189)

***

### isPrefetch

#### Get Signature

> **get** **isPrefetch**(): `boolean`

##### Returns

`boolean`

Whether the request was prefetch.

#### Defined in

[IncomingHttpEvent.ts:199](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L199)

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

##### Returns

`boolean`

Whether the request was made over a secure connection.

#### Defined in

[IncomingHttpEvent.ts:179](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L179)

***

### isXhr

#### Get Signature

> **get** **isXhr**(): `boolean`

##### Returns

`boolean`

Whether the request is an XMLHttpRequest.

#### Defined in

[IncomingHttpEvent.ts:184](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L184)

***

### languages

#### Get Signature

> **get** **languages**(): `string`[]

##### Returns

`string`[]

An array of acceptable languages for the request.

#### Defined in

[IncomingHttpEvent.ts:219](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L219)

***

### params

#### Get Signature

> **get** **params**(): `undefined` \| `Record`\<`string`, `unknown`\>

##### Returns

`undefined` \| `Record`\<`string`, `unknown`\>

The route parameters.

#### Defined in

[IncomingHttpEvent.ts:149](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L149)

***

### path

#### Get Signature

> **get** **path**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The full path including pathname and search query.

#### Defined in

[IncomingHttpEvent.ts:154](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L154)

***

### pathname

#### Get Signature

> **get** **pathname**(): `string`

##### Returns

`string`

The pathname of the URL.

#### Defined in

[IncomingHttpEvent.ts:159](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L159)

***

### scheme

#### Get Signature

> **get** **scheme**(): `string`

##### Returns

`string`

The protocol of the URL (e.g., "http" or "https").

#### Defined in

[IncomingHttpEvent.ts:169](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L169)

***

### segments

#### Get Signature

> **get** **segments**(): `string`[]

##### Returns

`string`[]

The URL segments split by '/'.

#### Defined in

[IncomingHttpEvent.ts:174](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L174)

***

### types

#### Get Signature

> **get** **types**(): `string`[]

##### Returns

`string`[]

An array of acceptable content types for the request.

#### Defined in

[IncomingHttpEvent.ts:209](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L209)

***

### uri

#### Get Signature

> **get** **uri**(): `string`

##### Returns

`string`

The full URL as a string.

#### Defined in

[IncomingHttpEvent.ts:164](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L164)

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

The user agent of the request.

#### Defined in

[IncomingHttpEvent.ts:194](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L194)

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

[IncomingHttpEvent.ts:340](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L340)

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

[IncomingHttpEvent.ts:330](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L330)

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

[IncomingHttpEvent.ts:350](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L350)

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

[IncomingHttpEvent.ts:320](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L320)

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

[IncomingHttpEvent.ts:452](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L452)

***

### fingerprint()

> **fingerprint**(): `string`

Generate a unique fingerprint for the event.

#### Returns

`string`

The generated fingerprint as a base64 string.

#### Defined in

[IncomingHttpEvent.ts:587](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L587)

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

[IncomingHttpEvent.ts:254](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L254)

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

[IncomingHttpEvent.ts:298](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L298)

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

[IncomingHttpEvent.ts:462](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L462)

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

[IncomingHttpEvent.ts:370](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L370)

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

[IncomingHttpEvent.ts:273](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L273)

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

[IncomingHttpEvent.ts:360](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L360)

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

[IncomingHttpEvent.ts:604](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L604)

***

### getRoute()

> **getRoute**(): `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

Return the current route or a route parameter.

#### Returns

`undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

The route parameter or the route object.

#### Defined in

[IncomingHttpEvent.ts:578](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L578)

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

[IncomingHttpEvent.ts:558](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L558)

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

[IncomingHttpEvent.ts:520](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L520)

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

[IncomingHttpEvent.ts:529](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L529)

***

### getUserResolver()

> **getUserResolver**\<`T`\>(): () => `undefined` \| `T`

Get the user resolver function.

#### Type Parameters

• **T**

#### Returns

`Function`

The user resolver function.

##### Returns

`undefined` \| `T`

#### Defined in

[IncomingHttpEvent.ts:538](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L538)

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

[IncomingHttpEvent.ts:309](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L309)

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

[IncomingHttpEvent.ts:472](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L472)

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

[IncomingHttpEvent.ts:286](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L286)

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

[IncomingHttpEvent.ts:416](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L416)

***

### is()

> **is**(`types`): `undefined` \| `string` \| `false`

Check if the request matches one of the given content types.

#### Parameters

##### types

`string`[]

The content types to check.

#### Returns

`undefined` \| `string` \| `false`

The best match, or false if no match is found.

#### Defined in

[IncomingHttpEvent.ts:380](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L380)

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

[IncomingHttpEvent.ts:426](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L426)

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

[IncomingHttpEvent.ts:482](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L482)

***

### isMethodCacheable()

> **isMethodCacheable**(): `boolean`

Check if the current event method is cacheable.

#### Returns

`boolean`

True if the method is cacheable, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:500](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L500)

***

### isMethodSafe()

> **isMethodSafe**(): `boolean`

Check if the current event method is considered safe.

#### Returns

`boolean`

True if the method is safe, otherwise false.

#### Defined in

[IncomingHttpEvent.ts:491](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L491)

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

[IncomingHttpEvent.ts:442](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L442)

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

[IncomingHttpEvent.ts:403](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L403)

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

[IncomingHttpEvent.ts:391](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L391)

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

[IncomingHttpEvent.ts:568](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L568)

***

### setUserResolver()

> **setUserResolver**(`resolver`): `this`

Set the user resolver function.

#### Parameters

##### resolver

\<`T`\>() => `T`

The user resolver function.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[IncomingHttpEvent.ts:548](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L548)

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

[IncomingHttpEvent.ts:510](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L510)

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

[IncomingHttpEvent.ts:72](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/IncomingHttpEvent.ts#L72)

[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [JsonResponse](../README.md) / JsonResponse

# Class: JsonResponse

Defined in: [src/JsonResponse.ts:10](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/JsonResponse.ts#L10)

Class representing a JsonResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

## Extended by

- [`JsonpResponse`](../../JsonpResponse/classes/JsonpResponse.md)

## Constructors

### new JsonResponse()

> **new JsonResponse**(`options`): [`JsonResponse`](JsonResponse.md)

Defined in: [src/OutgoingHttpResponse.ts:56](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L56)

Constructor for OutgoingHttpResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

[`JsonResponse`](JsonResponse.md)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`constructor`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#constructors)

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L34)

#### Returns

`undefined` \| `IBlueprint`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_blueprintResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_blueprintresolver)

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L32)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_charset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_charset)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/OutgoingHttpResponse.ts:38](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L38)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_cookieCollection`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_cookiecollection)

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: [src/OutgoingHttpResponse.ts:33](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L33)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_formats`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_formats)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [src/OutgoingHttpResponse.ts:37](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L37)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_headers`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_headers)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:35](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L35)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_incomingEventResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_incomingeventresolver)

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_response'`

Defined in: [src/OutgoingHttpResponse.ts:30](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L30)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`OUTGOING_HTTP_RESPONSE`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#outgoing_http_response)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:139](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L139)

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`blueprint`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#blueprint)

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:90](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L90)

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`charset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#charset)

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Defined in: [src/OutgoingHttpResponse.ts:149](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L149)

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`charsetRegExp`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#charsetregexp)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:99](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L99)

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`etag`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#etag)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Defined in: [src/OutgoingHttpResponse.ts:80](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L80)

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`headers`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#headers)

***

### incomingEvent

#### Get Signature

> **get** **incomingEvent**(): [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:127](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L127)

Get the associated IncomingHttpEvent.

##### Throws

InternalServerError if the IncomingHttpEvent resolver is not set.

##### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The associated IncomingHttpEvent.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`incomingEvent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#incomingevent)

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:117](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L117)

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`lastModified`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#lastmodified)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Defined in: [src/OutgoingHttpResponse.ts:71](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L71)

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`status`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#status)

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Defined in: [src/OutgoingHttpResponse.ts:108](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L108)

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`vary`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#vary)

## Methods

### addVary()

> **addVary**(`field`): `this`

Defined in: [src/OutgoingHttpResponse.ts:389](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L389)

Add a field to the Vary header.

#### Parameters

##### field

The field to add to the Vary header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`addVary`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#addvary)

***

### appendHeader()

> **appendHeader**(`key`, `value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:191](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L191)

Append a value to an existing header or create a new header.

#### Parameters

##### key

`string`

The header name.

##### value

`string`

The value to append.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`appendHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#appendheader)

***

### calculateContentLength()

> `protected` **calculateContentLength**(`generateETag`): `number`

Defined in: [src/OutgoingHttpResponse.ts:725](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L725)

Calculate the content length.

#### Parameters

##### generateETag

`boolean`

Whether to generate an ETag for the content.

#### Returns

`number`

The content length.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`calculateContentLength`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#calculatecontentlength)

***

### clearCookie()

> **clearCookie**(`name`, `force`): `this`

Defined in: [src/OutgoingHttpResponse.ts:294](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L294)

Clear a specific cookie from the response.

#### Parameters

##### name

`string`

The name of the cookie to be cleared.

##### force

`boolean` = `false`

Whether to force the removal of the cookie, even if it doesn't exist.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`clearCookie`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#clearcookie)

***

### clearCookies()

> **clearCookies**(`force`): `this`

Defined in: [src/OutgoingHttpResponse.ts:306](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L306)

Clear all cookies from the response.

#### Parameters

##### force

`boolean` = `false`

Whether to force the removal of all cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`clearCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#clearcookies)

***

### defaultEtagFn()

> `protected` **defaultEtagFn**(`content`, `encoding`): `string`

Defined in: [src/OutgoingHttpResponse.ts:810](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L810)

Generate a default ETag for the given content.

#### Parameters

##### content

`string`

The content to generate an ETag for.

##### encoding

`Encoding`

The encoding to use.

#### Returns

`string`

The generated ETag as a base64 string.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`defaultEtagFn`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#defaultetagfn)

***

### ensureCharset()

> `protected` **ensureCharset**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:743](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L743)

Ensure that the "Content-Type" header has a charset specified.

#### Parameters

##### value

`string`

The "Content-Type" header value.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`ensureCharset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#ensurecharset)

***

### format()

> **format**(`formats`): `this`

Defined in: [src/OutgoingHttpResponse.ts:378](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L378)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Parameters

##### formats

`Record`\<`string`, () => `unknown`\>

An object where keys are MIME types and values are functions that return the content for that MIME type.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`format`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#format)

***

### getHashedContent()

> `protected` **getHashedContent**(`content`, `encoding`): `string`

Defined in: [src/OutgoingHttpResponse.ts:821](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L821)

Get the hashed content using the specified encoding.

#### Parameters

##### content

`string`

The content to hash.

##### encoding

`Encoding`

The encoding to use for hashing.

#### Returns

`string`

The hashed content as a hexadecimal string.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHashedContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#gethashedcontent)

***

### getHeader()

> **getHeader**(`key`, `fallback`?): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:208](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L208)

Get a specific header by name.

#### Parameters

##### key

`string`

The header name.

##### fallback?

`string`

A fallback value if the header does not exist.

#### Returns

`undefined` \| `string`

The value of the header or the fallback value.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheader)

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: [src/OutgoingHttpResponse.ts:217](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L217)

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeaderNames`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheadernames)

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:662](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L662)

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`handleCacheHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#handlecacheheaders)

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:614](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L614)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`handleContentNegotiation`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#handlecontentnegotiation)

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:227](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L227)

Check if a specific header exists.

#### Parameters

##### key

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, false otherwise.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`hasHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#hasheader)

***

### isClientError()

> **isClientError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:540](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L540)

Check if the status code represents a client error.

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isClientError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isclienterror)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:501](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L501)

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isEmpty`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isempty)

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:559](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L559)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isForbidden`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isforbidden)

***

### isInformational()

> **isInformational**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:463](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L463)

Check if the status code represents an informational response.

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInformational`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinformational)

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:453](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L453)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInvalid`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinvalid)

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:531](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L531)

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isMovedPermanently`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#ismovedpermanently)

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:568](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L568)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isNotFound`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isnotfound)

***

### isOk()

> **isOk**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:483](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L483)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isOk`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isok)

***

### isRedirect()

> **isRedirect**(`location`?): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:521](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L521)

Check if the response is a redirect.

#### Parameters

##### location?

`string`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isRedirect`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isredirect)

***

### isRedirection()

> **isRedirection**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:510](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L510)

Check if the status code represents a redirection.

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isRedirection`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isredirection)

***

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:492](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L492)

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isResetContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isresetcontent)

***

### isServerError()

> **isServerError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:577](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L577)

Check if the status code represents a server error.

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isServerError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isservererror)

***

### isSuccessful()

> **isSuccessful**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:473](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L473)

Check if the status code represents a successful response.

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isSuccessful`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#issuccessful)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:550](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L550)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isUnauthorized`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isunauthorized)

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:587](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L587)

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isValidateable`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isvalidateable)

***

### makeJson()

> `protected` **makeJson**(): `this`

Defined in: [src/JsonResponse.ts:32](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/JsonResponse.ts#L32)

Make JSON response.

#### Returns

`this`

The current instance for method chaining.

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`): `string`

Defined in: [src/OutgoingHttpResponse.ts:774](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L774)

Convert the given content to a JSON string.

#### Parameters

##### content

`unknown`

The content to convert.

##### options

`Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

Options to customize the serialization process.

#### Returns

`string`

A JSON string representation of the content.

#### Throws

InternalServerError if the content cannot be converted to JSON.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`morphToJson`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#morphtojson)

***

### prepare()

> **prepare**(`event`, `blueprint`?): `this`

Defined in: [src/JsonResponse.ts:18](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/JsonResponse.ts#L18)

Prepare the response before sending.

#### Parameters

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### blueprint?

`IBlueprint`

Optional blueprint settings for the response.

#### Returns

`this`

The current instance of the response for chaining.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepare`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#prepare)

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:674](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L674)

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecontentheaders)

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:787](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L787)

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecookies)

***

### removeHeader()

> **removeHeader**(`key`): `this`

Defined in: [src/OutgoingHttpResponse.ts:237](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L237)

Remove headers from the response.

#### Parameters

##### key

The header or headers to be removed.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`removeHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#removeheader)

***

### secureCookies()

> **secureCookies**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:317](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L317)

Secure all cookies by setting the "Secure" attribute.

#### Parameters

##### value

`boolean` = `true`

Whether to set or unset the "Secure" attribute for cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`secureCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#securecookies)

***

### setBlueprintResolver()

> **setBlueprintResolver**(`resolver`): `this`

Defined in: [src/OutgoingHttpResponse.ts:443](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L443)

Set the resolver for the blueprint.

#### Parameters

##### resolver

() => `undefined` \| `IBlueprint`

A function that returns the blueprint.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setBlueprintResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setblueprintresolver)

***

### setCharset()

> **setCharset**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:328](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L328)

Set the character set for the response.

#### Parameters

##### value

`string`

The character encoding to use.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setCharset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcharset)

***

### setContent()

> **setContent**(`value`, `options`): `this`

Defined in: [src/OutgoingHttpResponse.ts:268](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L268)

Set the response content.
If the content should be JSON, it will be converted appropriately.

#### Parameters

##### value

`unknown`

The content to set.

##### options

`Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

The JSON options.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontent)

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:690](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L690)

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontentheaders)

***

### setContentType()

> **setContentType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:340](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L340)

Set the content type of the response.

#### Parameters

##### value

`string`

The MIME type for the response.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the provided MIME type is invalid.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentType`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontenttype)

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:636](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L636)

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentTypeIfNeeded`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontenttypeifneeded)

***

### setCookie()

> **setCookie**(`name`, `value`, `options`): `this`

Defined in: [src/OutgoingHttpResponse.ts:281](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L281)

Set a cookie for the response.

#### Parameters

##### name

`string`

The name of the cookie.

##### value

`unknown`

The value of the cookie.

##### options

[`CookieOptions`](../../declarations/interfaces/CookieOptions.md) = `{}`

Optional settings for the cookie.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setCookie`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcookie)

***

### setEtag()

> **setEtag**(`etag`?, `weak`?): `this`

Defined in: [src/OutgoingHttpResponse.ts:401](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L401)

Set the ETag for the response.

#### Parameters

##### etag?

`string`

The ETag value to set.

##### weak?

`boolean` = `false`

Whether the ETag should be marked as weak.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setEtag`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setetag)

***

### setHeader()

> **setHeader**(`key`, `value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:173](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L173)

Set a single header for the response.
If the header is "Content-Type," ensures charset is set appropriately.

#### Parameters

##### key

`string`

The header name.

##### value

The value of the header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setheader)

***

### setHeaders()

> **setHeaders**(`values`): `this`

Defined in: [src/OutgoingHttpResponse.ts:159](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L159)

Set multiple headers for the response.

#### Parameters

##### values

[`HeadersType`](../../declarations/type-aliases/HeadersType.md)

A key-value pair of headers to be set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setheaders)

***

### setIncomingEventResolver()

> **setIncomingEventResolver**(`resolver`): `this`

Defined in: [src/OutgoingHttpResponse.ts:432](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L432)

Set the resolver for the incoming HTTP event.

#### Parameters

##### resolver

() => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

A function that returns the incoming HTTP event.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setIncomingEventResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setincomingeventresolver)

***

### setLastModified()

> **setLastModified**(`date`?): `this`

Defined in: [src/OutgoingHttpResponse.ts:417](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L417)

Set the Last-Modified header for the response.

#### Parameters

##### date?

`Date`

The date to set as the Last-Modified header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setLastModified`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setlastmodified)

***

### setLinks()

> **setLinks**(`links`): `this`

Defined in: [src/OutgoingHttpResponse.ts:365](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L365)

Set link headers for the response.

#### Parameters

##### links

`Record`\<`string`, `string`\>

An object representing links to set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setLinks`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setlinks)

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Defined in: [src/OutgoingHttpResponse.ts:251](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L251)

Set the HTTP status code of the response.
Also sets a default status message if none is provided.

#### Parameters

##### code

`number`

The HTTP status code.

##### text?

`string`

Optional status message.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the status code is invalid.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setStatus`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setstatus)

***

### setType()

> **setType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:355](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L355)

Set the content type by file extension.

#### Parameters

##### value

`string`

The file extension.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setType`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#settype)

***

### shouldBeJson()

> `protected` **shouldBeJson**(`content`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:762](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L762)

Determine if the content should be serialized as JSON.

#### Parameters

##### content

`unknown`

The content to check.

#### Returns

`boolean`

True if the content should be serialized as JSON, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`shouldBeJson`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#shouldbejson)

***

### stringify()

> `protected` **stringify**(`value`, `replacer`?, `spaces`?, `escape`?): `string`

Defined in: [src/OutgoingHttpResponse.ts:834](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L834)

Convert the given value to a JSON string with optional escaping.

#### Parameters

##### value

`unknown`

The value to convert.

##### replacer?

(`this`, `key`, `value`) => `unknown`

A function or array that alters the behavior of the stringification process.

##### spaces?

`string`

The number of spaces to use for pretty-printing the JSON string.

##### escape?

`boolean`

Whether to escape special characters.

#### Returns

`string`

The JSON string representation of the value.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`stringify`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#stringify)

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: [src/OutgoingHttpResponse.ts:46](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L46)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`create`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#create)

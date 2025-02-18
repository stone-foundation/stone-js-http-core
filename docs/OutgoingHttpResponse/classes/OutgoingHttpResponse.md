[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [OutgoingHttpResponse](../README.md) / OutgoingHttpResponse

# Class: OutgoingHttpResponse

Defined in: [http-core/src/OutgoingHttpResponse.ts:30](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L30)

Class representing an Outgoing HTTP Response.
Extends the OutgoingResponse class and provides additional features
such as setting headers, cookies, and interacting with IncomingHttpEvent.

## Extends

- `OutgoingResponse`

## Extended by

- [`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)
- [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)
- [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

## Implements

- [`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

## Constructors

### new OutgoingHttpResponse()

> **new OutgoingHttpResponse**(`options`): [`OutgoingHttpResponse`](OutgoingHttpResponse.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:57](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L57)

Constructor for OutgoingHttpResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

[`OutgoingHttpResponse`](OutgoingHttpResponse.md)

#### Overrides

`OutgoingResponse.constructor`

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: [http-core/src/OutgoingHttpResponse.ts:36](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L36)

#### Returns

`undefined` \| `IBlueprint`

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: [http-core/src/OutgoingHttpResponse.ts:33](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L33)

***

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:279

The content of the response.

#### Inherited from

`OutgoingResponse._content`

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:39](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L39)

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: [http-core/src/OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L34)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [http-core/src/OutgoingHttpResponse.ts:38](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L38)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:35](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L35)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:283

The status code of the response.

#### Inherited from

`OutgoingResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:287

The status message of the response.

#### Inherited from

`OutgoingResponse._statusMessage`

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

`OutgoingResponse.metadata`

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:275

The original content of the response.

#### Inherited from

`OutgoingResponse.originalContent`

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

`OutgoingResponse.source`

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

`OutgoingResponse.timeStamp`

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

`OutgoingResponse.type`

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_response'`

Defined in: [http-core/src/OutgoingHttpResponse.ts:31](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L31)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: [http-core/src/OutgoingHttpResponse.ts:140](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L140)

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Defined in: [http-core/src/OutgoingHttpResponse.ts:91](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L91)

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Defined in: [http-core/src/OutgoingHttpResponse.ts:150](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L150)

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

***

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: core/dist/index.d.ts:318

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

#### Inherited from

`OutgoingResponse.content`

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:100](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L100)

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`etag`](../../declarations/interfaces/IOutgoingHttpResponse.md#etag)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Defined in: [http-core/src/OutgoingHttpResponse.ts:81](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L81)

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

***

### incomingEvent

#### Get Signature

> **get** **incomingEvent**(): [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:128](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L128)

Get the associated IncomingHttpEvent.

##### Throws

InternalServerError if the IncomingHttpEvent resolver is not set.

##### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The associated IncomingHttpEvent.

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:118](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L118)

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`lastModified`](../../declarations/interfaces/IOutgoingHttpResponse.md#lastmodified)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Defined in: [http-core/src/OutgoingHttpResponse.ts:72](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L72)

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`status`](../../declarations/interfaces/IOutgoingHttpResponse.md#status)

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: core/dist/index.d.ts:306

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

#### Inherited from

`OutgoingResponse.statusCode`

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: core/dist/index.d.ts:312

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

#### Inherited from

`OutgoingResponse.statusMessage`

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Defined in: [http-core/src/OutgoingHttpResponse.ts:109](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L109)

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

## Methods

### addVary()

> **addVary**(`field`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:407](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L407)

Add a field to the Vary header.

#### Parameters

##### field

The field to add to the Vary header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### appendHeader()

> **appendHeader**(`key`, `value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:192](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L192)

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

***

### calculateContentLength()

> `protected` **calculateContentLength**(`generateETag`): `number`

Defined in: [http-core/src/OutgoingHttpResponse.ts:769](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L769)

Calculate the content length.

#### Parameters

##### generateETag

`boolean`

Whether to generate an ETag for the content.

#### Returns

`number`

The content length.

***

### clearCookie()

> **clearCookie**(`name`, `force`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:312](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L312)

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

***

### clearCookies()

> **clearCookies**(`force`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:324](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L324)

Clear all cookies from the response.

#### Parameters

##### force

`boolean` = `false`

Whether to force the removal of all cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`OutgoingHttpResponse`](OutgoingHttpResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

`OutgoingResponse.clone`

***

### defaultEtagFn()

> `protected` **defaultEtagFn**(`content`, `encoding`): `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:854](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L854)

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

***

### ensureCharset()

> `protected` **ensureCharset**(`value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:787](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L787)

Ensure that the "Content-Type" header has a charset specified.

#### Parameters

##### value

`string`

The "Content-Type" header value.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### format()

> **format**(`formats`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:396](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L396)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Parameters

##### formats

`Record`\<`string`, () => `unknown`\>

An object where keys are MIME types and values are functions that return the content for that MIME type.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### get()

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:68

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.get`

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:76

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.get`

***

### getHashedContent()

> `protected` **getHashedContent**(`content`, `encoding`): `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:865](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L865)

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

***

### getHeader()

Get a header value.

#### Param

The header name.

#### Param

A fallback value if the header is not found.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [http-core/src/OutgoingHttpResponse.ts:208](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L208)

Get a header value.

##### Type Parameters

• **TReturn** = `string`

##### Parameters

###### name

`string`

The header name.

##### Returns

`undefined` \| `TReturn`

The header value or the fallback value.

The header value or the fallback value.

##### Param

The header name.

##### Param

A fallback value if the header is not found.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [http-core/src/OutgoingHttpResponse.ts:217](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L217)

Get a header value.

##### Type Parameters

• **TReturn** = `string`

##### Parameters

###### name

`string`

The header name.

###### fallback

`TReturn`

A fallback value if the header is not found.

##### Returns

`TReturn`

The header value or the fallback value.

The header value or the fallback value.

##### Param

The header name.

##### Param

A fallback value if the header is not found.

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: [http-core/src/OutgoingHttpResponse.ts:235](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L235)

Get all header names.

#### Returns

`string`[]

An array of all header names.

***

### getMetadataValue()

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:83

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.getMetadataValue`

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:91

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.getMetadataValue`

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:705](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L705)

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:657](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L657)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:245](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L245)

Check if a specific header exists.

#### Parameters

##### key

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, false otherwise.

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:493](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L493)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:502](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L502)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:511](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L511)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:520](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L520)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:529](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L529)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:574](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L574)

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

***

### isError()

> **isError**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:547](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L547)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:612](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L612)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:473](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L473)

Check if the status code falls within the specified range.

#### Parameters

##### start

`number`

The starting value of the range (inclusive).

##### end

`number`

The ending value of the range (exclusive).

#### Returns

`boolean`

True if the status code is within the specified range, otherwise false.

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:483](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L483)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:594](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L594)

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:538](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L538)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:621](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L621)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

***

### isOk()

> **isOk**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:556](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L556)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

***

### isRedirect()

> **isRedirect**(`location`?): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:584](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L584)

Check if the response is a redirect.

#### Parameters

##### location?

`string`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

***

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:565](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L565)

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:603](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L603)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:630](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L630)

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`): `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:818](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L818)

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

***

### prepare()

> **prepare**(`event`, `container`?): [`OutgoingHttpResponse`](OutgoingHttpResponse.md) \| `Promise`\<[`OutgoingHttpResponse`](OutgoingHttpResponse.md)\>

Defined in: [http-core/src/OutgoingHttpResponse.ts:641](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L641)

Prepare the response before sending.

#### Parameters

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### container?

`Container`

The service container.

#### Returns

[`OutgoingHttpResponse`](OutgoingHttpResponse.md) \| `Promise`\<[`OutgoingHttpResponse`](OutgoingHttpResponse.md)\>

The current instance of the response for chaining.

#### Overrides

`OutgoingResponse.prepare`

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:717](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L717)

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:831](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L831)

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

***

### removeHeader()

> **removeHeader**(`key`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:255](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L255)

Remove headers from the response.

#### Parameters

##### key

The header or headers to be removed.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### secureCookies()

> **secureCookies**(`value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:335](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L335)

Secure all cookies by setting the "Secure" attribute.

#### Parameters

##### value

`boolean` = `true`

Whether to set or unset the "Secure" attribute for cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setBlueprintResolver()

> **setBlueprintResolver**(`resolver`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:461](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L461)

Set the resolver for the blueprint.

#### Parameters

##### resolver

() => `undefined` \| `IBlueprint`

A function that returns the blueprint.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setCharset()

> **setCharset**(`value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:346](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L346)

Set the character set for the response.

#### Parameters

##### value

`string`

The character encoding to use.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setContent()

> **setContent**(`value`, `options`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:286](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L286)

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

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:733](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L733)

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

***

### setContentType()

> **setContentType**(`value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:358](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L358)

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

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:679](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L679)

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

***

### setCookie()

> **setCookie**(`name`, `value`, `options`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:299](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L299)

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

***

### setEtag()

> **setEtag**(`etag`?, `weak`?): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:419](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L419)

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

***

### setHeader()

> **setHeader**(`key`, `value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:174](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L174)

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

***

### setHeaders()

> **setHeaders**(`values`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:160](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L160)

Set multiple headers for the response.

#### Parameters

##### values

[`HeadersType`](../../declarations/type-aliases/HeadersType.md)

A key-value pair of headers to be set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setIncomingEventResolver()

> **setIncomingEventResolver**(`resolver`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:450](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L450)

Set the resolver for the incoming HTTP event.

#### Parameters

##### resolver

() => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

A function that returns the incoming HTTP event.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setLastModified()

> **setLastModified**(`date`?): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:435](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L435)

Set the Last-Modified header for the response.

#### Parameters

##### date?

`Date`

The date to set as the Last-Modified header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setLinks()

> **setLinks**(`links`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:383](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L383)

Set link headers for the response.

#### Parameters

##### links

`Record`\<`string`, `string`\>

An object representing links to set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`?): `this`

Defined in: core/dist/index.d.ts:99

Add data to metadata.

#### Parameters

##### key

The key or object to add to metadata.

`string` | `Record`\<`string`, `unknown`\>

##### value?

`unknown`

The value to associate with the key.

#### Returns

`this`

This Event instance.

#### Inherited from

`OutgoingResponse.setMetadataValue`

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:269](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L269)

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

***

### setType()

> **setType**(`value`): `this`

Defined in: [http-core/src/OutgoingHttpResponse.ts:373](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L373)

Set the content type by file extension.

#### Parameters

##### value

`string`

The file extension.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

***

### shouldBeJson()

> `protected` **shouldBeJson**(`content`): `boolean`

Defined in: [http-core/src/OutgoingHttpResponse.ts:806](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L806)

Determine if the content should be serialized as JSON.

#### Parameters

##### content

`unknown`

The content to check.

#### Returns

`boolean`

True if the content should be serialized as JSON, otherwise false.

***

### stringify()

> `protected` **stringify**(`value`, `replacer`?, `spaces`?, `escape`?): `string`

Defined in: [http-core/src/OutgoingHttpResponse.ts:878](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L878)

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

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: [http-core/src/OutgoingHttpResponse.ts:47](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/OutgoingHttpResponse.ts#L47)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* [`OutgoingHttpResponse`](OutgoingHttpResponse.md) = [`OutgoingHttpResponse`](OutgoingHttpResponse.md)

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`OutgoingResponse.create`

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:271

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`OutgoingResponse.OUTGOING_RESPONSE`

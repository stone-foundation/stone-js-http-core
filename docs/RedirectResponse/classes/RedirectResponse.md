[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [RedirectResponse](../README.md) / RedirectResponse

# Class: RedirectResponse

Defined in: [src/RedirectResponse.ts:20](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/RedirectResponse.ts#L20)

Class representing a RedirectResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

## Constructors

### Constructor

> **new RedirectResponse**(`options`): `RedirectResponse`

Defined in: [src/RedirectResponse.ts:30](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/RedirectResponse.ts#L30)

Create a RedirectResponse.

#### Parameters

##### options

[`RedirectResponseOptions`](../interfaces/RedirectResponseOptions.md)

Options for creating the RedirectResponse.

#### Returns

`RedirectResponse`

#### Throws

HttpError if the status code is not a redirect code.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`constructor`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#constructor)

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:35](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L35)

#### Returns

`undefined` \| `IBlueprint`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_blueprintResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_blueprintresolver)

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L32)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_charset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_charset)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/OutgoingHttpResponse.ts:38](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L38)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_cookieCollection`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_cookiecollection)

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: [src/OutgoingHttpResponse.ts:33](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L33)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_formats`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_formats)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [src/OutgoingHttpResponse.ts:37](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L37)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_headers`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_headers)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L34)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_incomingEventResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_incomingeventresolver)

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_redirect_response'`

Defined in: [src/RedirectResponse.ts:21](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/RedirectResponse.ts#L21)

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`OUTGOING_HTTP_RESPONSE`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#outgoing_http_response)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:139](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L139)

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

Defined in: [src/OutgoingHttpResponse.ts:90](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L90)

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

Defined in: [src/OutgoingHttpResponse.ts:149](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L149)

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

Defined in: [src/OutgoingHttpResponse.ts:99](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L99)

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

Defined in: [src/OutgoingHttpResponse.ts:80](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L80)

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

Defined in: [src/OutgoingHttpResponse.ts:127](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L127)

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

Defined in: [src/OutgoingHttpResponse.ts:117](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L117)

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

Defined in: [src/OutgoingHttpResponse.ts:71](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L71)

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

Defined in: [src/OutgoingHttpResponse.ts:108](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L108)

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`vary`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#vary)

## Methods

### addVary()

> **addVary**(`field`): `this`

Defined in: [src/OutgoingHttpResponse.ts:407](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L407)

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

Defined in: [src/OutgoingHttpResponse.ts:191](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L191)

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

Defined in: [src/OutgoingHttpResponse.ts:770](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L770)

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

> **clearCookie**(`name`, `options`, `force`): `this`

Defined in: [src/OutgoingHttpResponse.ts:312](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L312)

Clear a specific cookie from the response.

#### Parameters

##### name

`string`

The name of the cookie to be cleared.

##### options

[`CookieOptions`](../../declarations/interfaces/CookieOptions.md) = `{}`

Optional settings for the cookie.

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

Defined in: [src/OutgoingHttpResponse.ts:324](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L324)

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

Defined in: [src/OutgoingHttpResponse.ts:855](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L855)

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

Defined in: [src/OutgoingHttpResponse.ts:788](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L788)

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

Defined in: [src/OutgoingHttpResponse.ts:396](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L396)

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

Defined in: [src/OutgoingHttpResponse.ts:866](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L866)

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

Get a header value.

#### Param

The header name.

#### Param

A fallback value if the header is not found.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [src/OutgoingHttpResponse.ts:207](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L207)

Get a header value.

##### Type Parameters

###### TReturn

`TReturn` = `string`

##### Parameters

###### name

`string`

The header name.

##### Returns

`undefined` \| `TReturn`

The header value or the fallback value.

##### Param

The header name.

##### Param

A fallback value if the header is not found.

##### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheader)

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [src/OutgoingHttpResponse.ts:216](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L216)

Get a header value.

##### Type Parameters

###### TReturn

`TReturn` = `string`

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

##### Param

The header name.

##### Param

A fallback value if the header is not found.

##### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheader)

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: [src/OutgoingHttpResponse.ts:234](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L234)

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeaderNames`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheadernames)

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:706](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L706)

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`handleCacheHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#handlecacheheaders)

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:658](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L658)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`handleContentNegotiation`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#handlecontentnegotiation)

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:244](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L244)

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

### is1xx()

> **is1xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:493](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L493)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`is1xx`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#is1xx)

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:502](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L502)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`is2xx`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#is2xx)

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:511](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L511)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`is3xx`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#is3xx)

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:520](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L520)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`is4xx`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#is4xx)

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:529](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L529)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`is5xx`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#is5xx)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:574](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L574)

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isEmpty`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isempty)

***

### isError()

> **isError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:547](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L547)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#iserror)

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:612](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L612)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isForbidden`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isforbidden)

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:473](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L473)

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

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInStatusRange`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinstatusrange)

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:483](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L483)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInvalid`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinvalid)

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:594](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L594)

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isMovedPermanently`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#ismovedpermanently)

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:538](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L538)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isNotError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isnoterror)

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:621](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L621)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isNotFound`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isnotfound)

***

### isOk()

> **isOk**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:556](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L556)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isOk`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isok)

***

### isRedirect()

> **isRedirect**(`location?`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:584](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L584)

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

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:565](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L565)

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isResetContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isresetcontent)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:603](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L603)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isUnauthorized`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isunauthorized)

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:630](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L630)

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isValidateable`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isvalidateable)

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`): `string`

Defined in: [src/OutgoingHttpResponse.ts:819](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L819)

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

> **prepare**(`event`, `container?`): `Promise`\<`RedirectResponse`\>

Defined in: [src/RedirectResponse.ts:64](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/RedirectResponse.ts#L64)

Prepare the response before sending.

#### Parameters

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### container?

`Container`

The service container.

#### Returns

`Promise`\<`RedirectResponse`\>

The current instance of the response for chaining.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepare`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#prepare)

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:718](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L718)

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecontentheaders)

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:832](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L832)

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecookies)

***

### removeHeader()

> **removeHeader**(`key`): `this`

Defined in: [src/OutgoingHttpResponse.ts:254](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L254)

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

Defined in: [src/OutgoingHttpResponse.ts:335](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L335)

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

Defined in: [src/OutgoingHttpResponse.ts:461](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L461)

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

Defined in: [src/OutgoingHttpResponse.ts:346](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L346)

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

Defined in: [src/OutgoingHttpResponse.ts:285](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L285)

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

Defined in: [src/OutgoingHttpResponse.ts:734](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L734)

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontentheaders)

***

### setContentType()

> **setContentType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:358](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L358)

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

Defined in: [src/OutgoingHttpResponse.ts:680](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L680)

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentTypeIfNeeded`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontenttypeifneeded)

***

### setCookie()

> **setCookie**(`name`, `value`, `options`): `this`

Defined in: [src/OutgoingHttpResponse.ts:298](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L298)

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

> **setEtag**(`etag?`, `weak?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:419](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L419)

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

Defined in: [src/OutgoingHttpResponse.ts:173](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L173)

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

Defined in: [src/OutgoingHttpResponse.ts:159](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L159)

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

Defined in: [src/OutgoingHttpResponse.ts:450](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L450)

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

> **setLastModified**(`date?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:435](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L435)

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

Defined in: [src/OutgoingHttpResponse.ts:383](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L383)

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

> **setStatus**(`code`, `text?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:268](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L268)

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

### setTargetUrl()

> **setTargetUrl**(`url`): `this`

Defined in: [src/RedirectResponse.ts:51](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/RedirectResponse.ts#L51)

Set target URL.

#### Parameters

##### url

The target URL to set.

`string` | `URL`

#### Returns

`this`

The current instance for method chaining.

#### Throws

HttpError if the URL is empty.

***

### setType()

> **setType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:373](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L373)

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

Defined in: [src/OutgoingHttpResponse.ts:807](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L807)

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

> `protected` **stringify**(`value`, `replacer?`, `spaces?`, `escape?`): `string`

Defined in: [src/OutgoingHttpResponse.ts:879](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L879)

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

Defined in: [src/OutgoingHttpResponse.ts:46](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/OutgoingHttpResponse.ts#L46)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

##### T

`T` *extends* [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`create`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#create)

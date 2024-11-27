[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponse

# Class: BinaryFileResponse

Class representing a BinaryFileResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

## Constructors

### new BinaryFileResponse()

> **new BinaryFileResponse**(`options`): [`BinaryFileResponse`](BinaryFileResponse.md)

Create a BinaryFileResponse.

#### Parameters

• **options**: `BinaryFileResponseOptions`

Options for creating the BinaryFileResponse.

#### Returns

[`BinaryFileResponse`](BinaryFileResponse.md)

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`constructor`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#constructors)

#### Defined in

[BinaryFileResponse.ts:55](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L55)

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

#### Returns

`undefined` \| `IBlueprint`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_blueprintResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_blueprintresolver)

#### Defined in

[OutgoingHttpResponse.ts:31](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L31)

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_charset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_charset)

#### Defined in

[OutgoingHttpResponse.ts:30](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L30)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_cookieCollection`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_cookiecollection)

#### Defined in

[OutgoingHttpResponse.ts:35](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L35)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_headers`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_headers)

#### Defined in

[OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L34)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`_incomingEventResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#_incomingeventresolver)

#### Defined in

[OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L32)

***

### file

> `readonly` **file**: [`File`](../../file/File/classes/File.md)

#### Defined in

[BinaryFileResponse.ts:27](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L27)

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_response'`

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`OUTGOING_HTTP_RESPONSE`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#outgoing_http_response)

#### Defined in

[OutgoingHttpResponse.ts:28](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L28)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`blueprint`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#blueprint)

#### Defined in

[OutgoingHttpResponse.ts:134](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L134)

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`charset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#charset)

#### Defined in

[OutgoingHttpResponse.ts:85](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L85)

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`charsetRegExp`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#charsetregexp)

#### Defined in

[OutgoingHttpResponse.ts:144](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L144)

***

### deleteFileAfterSentStatus

#### Get Signature

> **get** **deleteFileAfterSentStatus**(): `boolean`

Get deleteFileAfterSent.

##### Returns

`boolean`

Whether the file should be deleted after being sent.

#### Defined in

[BinaryFileResponse.ts:70](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L70)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`etag`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#etag)

#### Defined in

[OutgoingHttpResponse.ts:94](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L94)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`headers`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#headers)

#### Defined in

[OutgoingHttpResponse.ts:75](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L75)

***

### incomingEvent

#### Get Signature

> **get** **incomingEvent**(): [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Get the associated IncomingHttpEvent.

##### Throws

Error if the IncomingHttpEvent resolver is not set.

##### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The associated IncomingHttpEvent.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`incomingEvent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#incomingevent)

#### Defined in

[OutgoingHttpResponse.ts:122](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L122)

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`lastModified`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#lastmodified)

#### Defined in

[OutgoingHttpResponse.ts:112](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L112)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`status`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#status)

#### Defined in

[OutgoingHttpResponse.ts:66](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L66)

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`vary`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#vary)

#### Defined in

[OutgoingHttpResponse.ts:103](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L103)

## Methods

### addVary()

> **addVary**(`field`): `this`

Add a field to the Vary header.

#### Parameters

• **field**: `string`

The field to add to the Vary header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`addVary`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#addvary)

#### Defined in

[OutgoingHttpResponse.ts:404](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L404)

***

### appendHeader()

> **appendHeader**(`key`, `value`): `this`

Append a value to an existing header or create a new header.

#### Parameters

• **key**: `string`

The header name.

• **value**: `string`

The value to append.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`appendHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#appendheader)

#### Defined in

[OutgoingHttpResponse.ts:186](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L186)

***

### autoEtag()

> **autoEtag**(): `this`

Automatically set the ETag header based on the file's content.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[BinaryFileResponse.ts:88](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L88)

***

### autoLastModified()

> **autoLastModified**(): `this`

Automatically set the Last-Modified header based on the file's modification time.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[BinaryFileResponse.ts:97](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L97)

***

### calculateContentLength()

> `protected` **calculateContentLength**(`generateETag`): `number`

Calculate the content length.

#### Parameters

• **generateETag**: `boolean`

Whether to generate an ETag for the content.

#### Returns

`number`

The content length.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`calculateContentLength`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#calculatecontentlength)

#### Defined in

[OutgoingHttpResponse.ts:717](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L717)

***

### clearCookie()

> **clearCookie**(`name`, `force`): `this`

Clear a specific cookie from the response.

#### Parameters

• **name**: `string`

The name of the cookie to be cleared.

• **force**: `boolean` = `false`

Whether to force the removal of the cookie, even if it doesn't exist.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`clearCookie`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#clearcookie)

#### Defined in

[OutgoingHttpResponse.ts:299](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L299)

***

### clearCookies()

> **clearCookies**(`force`): `this`

Clear all cookies from the response.

#### Parameters

• **force**: `boolean` = `false`

Whether to force the removal of all cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`clearCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#clearcookies)

#### Defined in

[OutgoingHttpResponse.ts:311](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L311)

***

### defaultEtagFn()

> `protected` **defaultEtagFn**(`content`, `encoding`): `string`

Generate a default ETag for the given content.

#### Parameters

• **content**: `string`

The content to generate an ETag for.

• **encoding**: `Encoding`

The encoding to use.

#### Returns

`string`

The generated ETag as a base64 string.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`defaultEtagFn`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#defaultetagfn)

#### Defined in

[OutgoingHttpResponse.ts:803](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L803)

***

### ensureCharset()

> `protected` **ensureCharset**(`value`): `this`

Ensure that the "Content-Type" header has a charset specified.

#### Parameters

• **value**: `string`

The "Content-Type" header value.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`ensureCharset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#ensurecharset)

#### Defined in

[OutgoingHttpResponse.ts:735](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L735)

***

### format()

> **format**(`formats`): `this`

Handles content negotiation based on the `Accept` header of the incoming request.

#### Parameters

• **formats**: `Record`\<`string`, () => `unknown`\>

An object where keys are MIME types and values are functions that return the content for that MIME type.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`format`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#format)

#### Defined in

[OutgoingHttpResponse.ts:383](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L383)

***

### getContent()

> **getContent**(): `false`

Get the content of the response.

#### Returns

`false`

False, as content cannot be set for BinaryFileResponse.

#### Defined in

[BinaryFileResponse.ts:133](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L133)

***

### getEncodedFilePath()

> **getEncodedFilePath**(): `string`

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Defined in

[BinaryFileResponse.ts:79](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L79)

***

### getHashedContent()

> `protected` **getHashedContent**(`content`, `encoding`): `string`

Get the hashed content using the specified encoding.

#### Parameters

• **content**: `string`

The content to hash.

• **encoding**: `Encoding`

The encoding to use for hashing.

#### Returns

`string`

The hashed content as a hexadecimal string.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHashedContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#gethashedcontent)

#### Defined in

[OutgoingHttpResponse.ts:814](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L814)

***

### getHeader()

> **getHeader**(`key`, `fallback`?): `undefined` \| `string`

Get a specific header by name.

#### Parameters

• **key**: `string`

The header name.

• **fallback?**: `string`

A fallback value if the header does not exist.

#### Returns

`undefined` \| `string`

The value of the header or the fallback value.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheader)

#### Defined in

[OutgoingHttpResponse.ts:213](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L213)

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeaderNames`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheadernames)

#### Defined in

[OutgoingHttpResponse.ts:222](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L222)

***

### getHeaders()

> **getHeaders**(`asMap`): `Map`\<`string`, `string`\> \| `Headers`

Get all headers of the response.

#### Parameters

• **asMap**: `boolean` = `false`

Whether to return the headers as a Map.

#### Returns

`Map`\<`string`, `string`\> \| `Headers`

The headers as a Headers instance or a Map.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`getHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#getheaders)

#### Defined in

[OutgoingHttpResponse.ts:202](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L202)

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`handleCacheHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#handlecacheheaders)

#### Defined in

[OutgoingHttpResponse.ts:654](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L654)

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Check if a specific header exists.

#### Parameters

• **key**: `string`

The header name to check.

#### Returns

`boolean`

True if the header exists, false otherwise.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`hasHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#hasheader)

#### Defined in

[OutgoingHttpResponse.ts:232](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L232)

***

### isClientError()

> **isClientError**(): `boolean`

Check if the status code represents a client error.

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isClientError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isclienterror)

#### Defined in

[OutgoingHttpResponse.ts:555](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L555)

***

### isEmpty()

> **isEmpty**(): `boolean`

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isEmpty`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isempty)

#### Defined in

[OutgoingHttpResponse.ts:516](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L516)

***

### isForbidden()

> **isForbidden**(): `boolean`

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isForbidden`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isforbidden)

#### Defined in

[OutgoingHttpResponse.ts:574](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L574)

***

### isInformational()

> **isInformational**(): `boolean`

Check if the status code represents an informational response.

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInformational`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinformational)

#### Defined in

[OutgoingHttpResponse.ts:478](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L478)

***

### isInvalid()

> **isInvalid**(): `boolean`

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isInvalid`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isinvalid)

#### Defined in

[OutgoingHttpResponse.ts:468](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L468)

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isMovedPermanently`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#ismovedpermanently)

#### Defined in

[OutgoingHttpResponse.ts:546](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L546)

***

### isNotFound()

> **isNotFound**(): `boolean`

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isNotFound`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isnotfound)

#### Defined in

[OutgoingHttpResponse.ts:583](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L583)

***

### isOk()

> **isOk**(): `boolean`

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isOk`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isok)

#### Defined in

[OutgoingHttpResponse.ts:498](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L498)

***

### isRedirect()

> **isRedirect**(`location`): `boolean`

Check if the response is a redirect.

#### Parameters

• **location**: `null` \| `string` = `null`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isRedirect`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isredirect)

#### Defined in

[OutgoingHttpResponse.ts:536](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L536)

***

### isRedirection()

> **isRedirection**(): `boolean`

Check if the status code represents a redirection.

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isRedirection`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isredirection)

#### Defined in

[OutgoingHttpResponse.ts:525](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L525)

***

### isResetContent()

> **isResetContent**(): `boolean`

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isResetContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isresetcontent)

#### Defined in

[OutgoingHttpResponse.ts:507](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L507)

***

### isServerError()

> **isServerError**(): `boolean`

Check if the status code represents a server error.

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isServerError`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isservererror)

#### Defined in

[OutgoingHttpResponse.ts:592](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L592)

***

### isSuccessful()

> **isSuccessful**(): `boolean`

Check if the status code represents a successful response.

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isSuccessful`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#issuccessful)

#### Defined in

[OutgoingHttpResponse.ts:488](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L488)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isUnauthorized`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isunauthorized)

#### Defined in

[OutgoingHttpResponse.ts:565](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L565)

***

### isValidateable()

> **isValidateable**(): `boolean`

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`isValidateable`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#isvalidateable)

#### Defined in

[OutgoingHttpResponse.ts:602](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L602)

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`): `string`

Convert the given content to a JSON string.

#### Parameters

• **content**: `unknown`

The content to convert.

• **options**: `Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

Options to customize the serialization process.

#### Returns

`string`

A JSON string representation of the content.

#### Throws

HttpError if the content cannot be converted to JSON.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`morphToJson`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#morphtojson)

#### Defined in

[OutgoingHttpResponse.ts:764](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L764)

***

### prepare()

> **prepare**(`event`, `blueprint`?): `this`

Prepare the response before sending.

#### Parameters

• **event**: [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

• **blueprint?**: `IBlueprint`

Optional blueprint settings for the response.

#### Returns

`this`

The current instance of the response for chaining.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepare`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#prepare)

#### Defined in

[BinaryFileResponse.ts:155](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L155)

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Prepare content-related headers.

#### Returns

`this`

The current instance for method chaining.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecontentheaders)

#### Defined in

[BinaryFileResponse.ts:179](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L179)

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`prepareCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#preparecookies)

#### Defined in

[OutgoingHttpResponse.ts:780](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L780)

***

### removeHeader()

> **removeHeader**(`key`): `this`

Remove headers from the response.

#### Parameters

• **key**: `string` \| `string`[]

The header or headers to be removed.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`removeHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#removeheader)

#### Defined in

[OutgoingHttpResponse.ts:242](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L242)

***

### secureCookies()

> **secureCookies**(`value`): `this`

Secure all cookies by setting the "Secure" attribute.

#### Parameters

• **value**: `boolean` = `true`

Whether to set or unset the "Secure" attribute for cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`secureCookies`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#securecookies)

#### Defined in

[OutgoingHttpResponse.ts:322](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L322)

***

### setBlueprintResolver()

> **setBlueprintResolver**(`resolver`): `this`

Set the resolver for the blueprint.

#### Parameters

• **resolver**

A function that returns the blueprint.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setBlueprintResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setblueprintresolver)

#### Defined in

[OutgoingHttpResponse.ts:458](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L458)

***

### setCharset()

> **setCharset**(`value`): `this`

Set the character set for the response.

#### Parameters

• **value**: `string`

The character encoding to use.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setCharset`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcharset)

#### Defined in

[OutgoingHttpResponse.ts:333](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L333)

***

### setContent()

> **setContent**(`content`): `this`

Set the content of the response.

#### Parameters

• **content**: `unknown`

The content to set (should be empty for BinaryFileResponse).

#### Returns

`this`

The current instance for method chaining.

#### Throws

TypeError if content is provided.

#### Overrides

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContent`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontent)

#### Defined in

[BinaryFileResponse.ts:120](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L120)

***

### setContentDisposition()

> **setContentDisposition**(`type`?): `this`

Set the content disposition header.

#### Parameters

• **type?**: `string`

The content disposition type (e.g., 'inline', 'attachment').

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[BinaryFileResponse.ts:107](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L107)

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontentheaders)

#### Defined in

[OutgoingHttpResponse.ts:682](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L682)

***

### setContentType()

> **setContentType**(`value`): `this`

Set the content type of the response.

#### Parameters

• **value**: `string`

The MIME type for the response.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

Error if the provided MIME type is invalid.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentType`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontenttype)

#### Defined in

[OutgoingHttpResponse.ts:345](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L345)

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setContentTypeIfNeeded`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcontenttypeifneeded)

#### Defined in

[OutgoingHttpResponse.ts:628](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L628)

***

### setCookie()

> **setCookie**(`name`, `value`, `options`): `this`

Set a cookie for the response.

#### Parameters

• **name**: `string`

The name of the cookie.

• **value**: `unknown`

The value of the cookie.

• **options**: [`CookieOptions`](../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Optional settings for the cookie.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setCookie`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setcookie)

#### Defined in

[OutgoingHttpResponse.ts:286](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L286)

***

### setDeleteFileAfterSent()

> **setDeleteFileAfterSent**(`shouldDelete`): `this`

Set whether the file should be deleted after being sent.

#### Parameters

• **shouldDelete**: `boolean` = `true`

Whether to delete the file after being sent.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[BinaryFileResponse.ts:143](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L143)

***

### setEtag()

> **setEtag**(`etag`?, `weak`?): `this`

Set the ETag for the response.

#### Parameters

• **etag?**: `string`

The ETag value to set.

• **weak?**: `boolean` = `false`

Whether the ETag should be marked as weak.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setEtag`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setetag)

#### Defined in

[OutgoingHttpResponse.ts:416](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L416)

***

### setHeader()

> **setHeader**(`key`, `value`): `this`

Set a single header for the response.
If the header is "Content-Type," ensures charset is set appropriately.

#### Parameters

• **key**: `string`

The header name.

• **value**: `string` \| `string`[]

The value of the header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setHeader`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setheader)

#### Defined in

[OutgoingHttpResponse.ts:168](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L168)

***

### setHeaders()

> **setHeaders**(`values`): `this`

Set multiple headers for the response.

#### Parameters

• **values**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

A key-value pair of headers to be set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setHeaders`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setheaders)

#### Defined in

[OutgoingHttpResponse.ts:154](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L154)

***

### setIncomingEventResolver()

> **setIncomingEventResolver**(`resolver`): `this`

Set the resolver for the incoming HTTP event.

#### Parameters

• **resolver**

A function that returns the incoming HTTP event.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setIncomingEventResolver`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setincomingeventresolver)

#### Defined in

[OutgoingHttpResponse.ts:447](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L447)

***

### setLastModified()

> **setLastModified**(`date`?): `this`

Set the Last-Modified header for the response.

#### Parameters

• **date?**: `Date`

The date to set as the Last-Modified header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setLastModified`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setlastmodified)

#### Defined in

[OutgoingHttpResponse.ts:432](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L432)

***

### setLinks()

> **setLinks**(`links`): `this`

Set link headers for the response.

#### Parameters

• **links**: `Record`\<`string`, `string`\>

An object representing links to set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setLinks`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setlinks)

#### Defined in

[OutgoingHttpResponse.ts:370](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L370)

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Set the HTTP status code of the response.
Also sets a default status message if none is provided.

#### Parameters

• **code**: `number`

The HTTP status code.

• **text?**: `string`

Optional status message.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

HttpError if the status code is invalid.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setStatus`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#setstatus)

#### Defined in

[OutgoingHttpResponse.ts:256](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L256)

***

### setType()

> **setType**(`value`): `this`

Set the content type by file extension.

#### Parameters

• **value**: `string`

The file extension.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`setType`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#settype)

#### Defined in

[OutgoingHttpResponse.ts:360](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L360)

***

### shouldBeJson()

> `protected` **shouldBeJson**(`content`): `boolean`

Determine if the content should be serialized as JSON.

#### Parameters

• **content**: `unknown`

The content to check.

#### Returns

`boolean`

True if the content should be serialized as JSON, otherwise false.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`shouldBeJson`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#shouldbejson)

#### Defined in

[OutgoingHttpResponse.ts:752](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L752)

***

### stringify()

> `protected` **stringify**(`value`, `replacer`?, `spaces`?, `escape`?): `string`

Convert the given value to a JSON string with optional escaping.

#### Parameters

• **value**: `unknown`

The value to convert.

• **replacer?**

A function or array that alters the behavior of the stringification process.

• **spaces?**: `string`

The number of spaces to use for pretty-printing the JSON string.

• **escape?**: `boolean`

Whether to escape special characters.

#### Returns

`string`

The JSON string representation of the value.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`stringify`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#stringify)

#### Defined in

[OutgoingHttpResponse.ts:827](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L827)

***

### create()

> `static` **create**(`options`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Create an instance of OutgoingHttpResponse.

#### Parameters

• **options**: [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

A new instance of OutgoingHttpResponse.

#### Inherited from

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md).[`create`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md#create)

#### Defined in

[OutgoingHttpResponse.ts:43](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/OutgoingHttpResponse.ts#L43)

***

### download()

> `static` **download**(`options`): [`BinaryFileResponse`](BinaryFileResponse.md)

Create a BinaryFileResponse with attachment content disposition.

#### Parameters

• **options**: `BinaryFileResponseOptions`

Options for creating the BinaryFileResponse.

#### Returns

[`BinaryFileResponse`](BinaryFileResponse.md)

A new instance of BinaryFileResponse.

#### Defined in

[BinaryFileResponse.ts:46](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L46)

***

### file()

> `static` **file**(`options`): [`BinaryFileResponse`](BinaryFileResponse.md)

Create a BinaryFileResponse with inline content disposition.

#### Parameters

• **options**: `BinaryFileResponseOptions`

Options for creating the BinaryFileResponse.

#### Returns

[`BinaryFileResponse`](BinaryFileResponse.md)

A new instance of BinaryFileResponse.

#### Defined in

[BinaryFileResponse.ts:36](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/BinaryFileResponse.ts#L36)

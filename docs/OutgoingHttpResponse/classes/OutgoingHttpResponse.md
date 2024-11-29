[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [OutgoingHttpResponse](../README.md) / OutgoingHttpResponse

# Class: OutgoingHttpResponse

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

Constructor for OutgoingHttpResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

• **options**: [`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

[`OutgoingHttpResponse`](OutgoingHttpResponse.md)

#### Overrides

`OutgoingResponse.constructor`

#### Defined in

[OutgoingHttpResponse.ts:53](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L53)

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

#### Returns

`undefined` \| `IBlueprint`

#### Defined in

[OutgoingHttpResponse.ts:31](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L31)

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

#### Defined in

[OutgoingHttpResponse.ts:30](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L30)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

#### Defined in

[OutgoingHttpResponse.ts:35](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L35)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

#### Defined in

[OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L34)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Defined in

[OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L32)

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_response'`

#### Defined in

[OutgoingHttpResponse.ts:28](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L28)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

#### Defined in

[OutgoingHttpResponse.ts:134](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L134)

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

#### Defined in

[OutgoingHttpResponse.ts:85](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L85)

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

#### Defined in

[OutgoingHttpResponse.ts:144](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L144)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`etag`](../../declarations/interfaces/IOutgoingHttpResponse.md#etag)

#### Defined in

[OutgoingHttpResponse.ts:94](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L94)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

#### Defined in

[OutgoingHttpResponse.ts:75](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L75)

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

#### Defined in

[OutgoingHttpResponse.ts:122](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L122)

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`lastModified`](../../declarations/interfaces/IOutgoingHttpResponse.md#lastmodified)

#### Defined in

[OutgoingHttpResponse.ts:112](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L112)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`status`](../../declarations/interfaces/IOutgoingHttpResponse.md#status)

#### Defined in

[OutgoingHttpResponse.ts:66](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L66)

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Defined in

[OutgoingHttpResponse.ts:103](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L103)

## Methods

### addVary()

> **addVary**(`field`): `this`

Add a field to the Vary header.

#### Parameters

• **field**: `string` \| `string`[]

The field to add to the Vary header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Defined in

[OutgoingHttpResponse.ts:404](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L404)

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

#### Defined in

[OutgoingHttpResponse.ts:186](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L186)

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

#### Defined in

[OutgoingHttpResponse.ts:717](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L717)

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

#### Defined in

[OutgoingHttpResponse.ts:299](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L299)

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

#### Defined in

[OutgoingHttpResponse.ts:311](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L311)

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

#### Defined in

[OutgoingHttpResponse.ts:803](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L803)

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

#### Defined in

[OutgoingHttpResponse.ts:735](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L735)

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

#### Defined in

[OutgoingHttpResponse.ts:383](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L383)

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

#### Defined in

[OutgoingHttpResponse.ts:814](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L814)

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

#### Defined in

[OutgoingHttpResponse.ts:213](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L213)

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Defined in

[OutgoingHttpResponse.ts:222](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L222)

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

#### Defined in

[OutgoingHttpResponse.ts:202](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L202)

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Defined in

[OutgoingHttpResponse.ts:654](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L654)

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

#### Defined in

[OutgoingHttpResponse.ts:232](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L232)

***

### isClientError()

> **isClientError**(): `boolean`

Check if the status code represents a client error.

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:555](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L555)

***

### isEmpty()

> **isEmpty**(): `boolean`

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:516](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L516)

***

### isForbidden()

> **isForbidden**(): `boolean`

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:574](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L574)

***

### isInformational()

> **isInformational**(): `boolean`

Check if the status code represents an informational response.

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:478](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L478)

***

### isInvalid()

> **isInvalid**(): `boolean`

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:468](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L468)

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:546](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L546)

***

### isNotFound()

> **isNotFound**(): `boolean`

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:583](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L583)

***

### isOk()

> **isOk**(): `boolean`

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:498](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L498)

***

### isRedirect()

> **isRedirect**(`location`?): `boolean`

Check if the response is a redirect.

#### Parameters

• **location?**: `string`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:536](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L536)

***

### isRedirection()

> **isRedirection**(): `boolean`

Check if the status code represents a redirection.

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:525](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L525)

***

### isResetContent()

> **isResetContent**(): `boolean`

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:507](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L507)

***

### isServerError()

> **isServerError**(): `boolean`

Check if the status code represents a server error.

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:592](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L592)

***

### isSuccessful()

> **isSuccessful**(): `boolean`

Check if the status code represents a successful response.

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:488](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L488)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:565](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L565)

***

### isValidateable()

> **isValidateable**(): `boolean`

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Defined in

[OutgoingHttpResponse.ts:602](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L602)

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

#### Defined in

[OutgoingHttpResponse.ts:764](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L764)

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

`OutgoingResponse.prepare`

#### Defined in

[OutgoingHttpResponse.ts:613](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L613)

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Defined in

[OutgoingHttpResponse.ts:666](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L666)

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Defined in

[OutgoingHttpResponse.ts:780](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L780)

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

#### Defined in

[OutgoingHttpResponse.ts:242](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L242)

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

#### Defined in

[OutgoingHttpResponse.ts:322](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L322)

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

#### Defined in

[OutgoingHttpResponse.ts:458](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L458)

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

#### Defined in

[OutgoingHttpResponse.ts:333](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L333)

***

### setContent()

> **setContent**(`value`, `options`): `this`

Set the response content.
If the content should be JSON, it will be converted appropriately.

#### Parameters

• **value**: `unknown`

The content to set.

• **options**: `Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

The JSON options.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Defined in

[OutgoingHttpResponse.ts:273](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L273)

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Defined in

[OutgoingHttpResponse.ts:682](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L682)

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

#### Defined in

[OutgoingHttpResponse.ts:345](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L345)

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Defined in

[OutgoingHttpResponse.ts:628](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L628)

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

#### Defined in

[OutgoingHttpResponse.ts:286](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L286)

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

#### Defined in

[OutgoingHttpResponse.ts:416](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L416)

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

#### Defined in

[OutgoingHttpResponse.ts:168](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L168)

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

#### Defined in

[OutgoingHttpResponse.ts:154](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L154)

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

#### Defined in

[OutgoingHttpResponse.ts:447](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L447)

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

#### Defined in

[OutgoingHttpResponse.ts:432](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L432)

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

#### Defined in

[OutgoingHttpResponse.ts:370](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L370)

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

#### Defined in

[OutgoingHttpResponse.ts:256](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L256)

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

#### Defined in

[OutgoingHttpResponse.ts:360](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L360)

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

#### Defined in

[OutgoingHttpResponse.ts:752](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L752)

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

#### Defined in

[OutgoingHttpResponse.ts:827](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L827)

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* [`OutgoingHttpResponse`](OutgoingHttpResponse.md) = [`OutgoingHttpResponse`](OutgoingHttpResponse.md)

#### Parameters

• **options**: [`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`OutgoingResponse.create`

#### Defined in

[OutgoingHttpResponse.ts:43](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L43)

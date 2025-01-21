[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpConfig

# Interface: HttpConfig

Defined in: [src/options/HttpConfig.ts:62](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L62)

Represents the core HTTP config options for the application.
HTTP configuration options that are commonly used across adapters.

## Properties

### body

> **body**: `object`

Defined in: [src/options/HttpConfig.ts:96](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L96)

Configuration for request body parsing.

#### defaultCharset

> **defaultCharset**: `string`

The default character set for the request body.

#### defaultType

> **defaultType**: `string`

The content type of the request body.

#### limit

> **limit**: `string`

The maximum size of the request body.

***

### cache

> **cache**: `Record`\<`string`, `any`\>

Defined in: [src/options/HttpConfig.ts:113](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L113)

Cache configuration options.

***

### cookie

> **cookie**: `object`

Defined in: [src/options/HttpConfig.ts:117](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L117)

Cookie-related configuration options.

#### options

> **options**: [`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Additional cookie options.

#### secret

> **secret**: `string`

The secret used for signing cookies.

***

### cors

> **cors**: [`HttpCorsConfig`](HttpCorsConfig.md)

Defined in: [src/options/HttpConfig.ts:179](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L179)

Cross-Origin Resource Sharing (CORS) configuration options.

***

### etag

> **etag**: `object`

Defined in: [src/options/HttpConfig.ts:170](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L170)

ETag-related configuration options.

#### function()?

> `optional` **function**: (`content`, `encoding`) => `string`

A custom function for generating ETags.

##### Parameters

###### content

`string`

###### encoding

`Encoding`

##### Returns

`string`

***

### files

> **files**: `object`

Defined in: [src/options/HttpConfig.ts:134](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L134)

File upload and response configuration options.

#### download

> **download**: `Record`\<`string`, `any`\>

Configuration for file responses.

#### upload

> **upload**: `Record`\<`string`, `any`\>

Configuration for file uploads.

***

### hosts

> **hosts**: `object`

Defined in: [src/options/HttpConfig.ts:66](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L66)

Host-related configuration options.

#### onlySubdomain

> **onlySubdomain**: `boolean`

Whether only subdomains are allowed.

#### trusted

> **trusted**: `string`[]

A list of trusted hostnames.

#### trustedPattern

> **trustedPattern**: `string`[]

A list of trusted host patterns.

***

### json

> **json**: [`HttpJsonConfig`](HttpJsonConfig.md)

Defined in: [src/options/HttpConfig.ts:130](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L130)

JSON-related configuration options.

***

### jsonp

> **jsonp**: `object`

Defined in: [src/options/HttpConfig.ts:147](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L147)

JSONP-related configuration options.

#### callback

> **callback**: `object`

Configuration for the JSONP callback function.

##### callback.name

> **name**: `string`

The name of the JSONP callback parameter.

***

### proxies

> **proxies**: `object`

Defined in: [src/options/HttpConfig.ts:83](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L83)

Proxy-related configuration options.

#### trustedIp

> **trustedIp**: `string`[]

A list of trusted proxies.

#### untrustedIp

> **untrustedIp**: `string`[]

A list of untrusted proxies.

***

### subdomain

> **subdomain**: `object`

Defined in: [src/options/HttpConfig.ts:161](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/options/HttpConfig.ts#L161)

Subdomain-related configuration options.

#### offset

> **offset**: `number`

The offset to use when determining subdomains.

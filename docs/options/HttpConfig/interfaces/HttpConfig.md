[**HTTP Core Documentation v0.0.32**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpConfig

# Interface: HttpConfig

Defined in: [src/options/HttpConfig.ts:61](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L61)

Represents the core HTTP config options for the application.
HTTP configuration options that are commonly used across adapters.

## Properties

### body

> **body**: `object`

Defined in: [src/options/HttpConfig.ts:95](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L95)

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

Defined in: [src/options/HttpConfig.ts:112](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L112)

Cache configuration options.

***

### cookie

> **cookie**: `object`

Defined in: [src/options/HttpConfig.ts:116](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L116)

Cookie-related configuration options.

#### options

> **options**: `Record`\<`string`, `any`\>

Additional cookie options.

#### secret

> **secret**: `string`

The secret used for signing cookies.

***

### cors

> **cors**: [`HttpCorsConfig`](HttpCorsConfig.md)

Defined in: [src/options/HttpConfig.ts:178](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L178)

Cross-Origin Resource Sharing (CORS) configuration options.

***

### etag

> **etag**: `object`

Defined in: [src/options/HttpConfig.ts:169](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L169)

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

Defined in: [src/options/HttpConfig.ts:133](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L133)

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

Defined in: [src/options/HttpConfig.ts:65](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L65)

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

Defined in: [src/options/HttpConfig.ts:129](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L129)

JSON-related configuration options.

***

### jsonp

> **jsonp**: `object`

Defined in: [src/options/HttpConfig.ts:146](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L146)

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

Defined in: [src/options/HttpConfig.ts:82](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L82)

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

Defined in: [src/options/HttpConfig.ts:160](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L160)

Subdomain-related configuration options.

#### offset

> **offset**: `number`

The offset to use when determining subdomains.

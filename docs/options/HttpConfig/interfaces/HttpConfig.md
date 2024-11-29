[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpConfig

# Interface: HttpConfig

Represents the core HTTP config options for the application.

## Properties

### stone

> **stone**: `object`

The application configuration namespace.

#### http

> **http**: `object`

HTTP configuration options that are commonly used across adapters.

##### http.body

> **body**: `object`

Configuration for request body parsing.

##### http.body.defaultCharset

> **defaultCharset**: `string`

The default character set for the request body.

##### http.body.limit

> **limit**: `string`

The maximum size of the request body.

##### http.body.type

> **type**: `string`

The content type of the request body.

##### http.cache

> **cache**: `Record`\<`string`, `any`\>

Cache configuration options.

##### http.cookie

> **cookie**: `object`

Cookie-related configuration options.

##### http.cookie.options

> **options**: `Record`\<`string`, `any`\>

Additional cookie options.

##### http.cookie.secret

> **secret**: `string`

The secret used for signing cookies.

##### http.cors

> **cors**: [`HttpCorsConfig`](HttpCorsConfig.md)

Cross-Origin Resource Sharing (CORS) configuration options.

##### http.etag

> **etag**: `object`

ETag-related configuration options.

##### http.etag.function()?

> `optional` **function**: (`content`, `encoding`) => `string`

A custom function for generating ETags.

###### Parameters

###### content

`string`

###### encoding

`Encoding`

###### Returns

`string`

##### http.files

> **files**: `object`

File upload and response configuration options.

##### http.files.response

> **response**: `Record`\<`string`, `any`\>

Configuration for file responses.

##### http.files.upload

> **upload**: `Record`\<`string`, `any`\>

Configuration for file uploads.

##### http.hosts

> **hosts**: `object`

Host-related configuration options.

##### http.hosts.onlySubdomain

> **onlySubdomain**: `boolean`

Whether only subdomains are allowed.

##### http.hosts.trusted

> **trusted**: `string`[]

A list of trusted hostnames.

##### http.hosts.trustedPattern

> **trustedPattern**: `string`[]

A list of trusted host patterns.

##### http.json

> **json**: [`HttpJsonConfig`](HttpJsonConfig.md)

JSON-related configuration options.

##### http.jsonp

> **jsonp**: `object`

JSONP-related configuration options.

##### http.jsonp.callback

> **callback**: `object`

Configuration for the JSONP callback function.

##### http.jsonp.callback.name

> **name**: `string`

The name of the JSONP callback parameter.

##### http.proxies

> **proxies**: `object`

Proxy-related configuration options.

##### http.proxies.trusted

> **trusted**: `string`[]

A list of trusted proxies.

##### http.proxies.untrusted

> **untrusted**: `string`[]

A list of untrusted proxies.

##### http.subdomain

> **subdomain**: `object`

Subdomain-related configuration options.

##### http.subdomain.offset

> **offset**: `number`

The offset to use when determining subdomains.

#### kernel

> **kernel**: `object`

This interface defines the configuration for kernel-level options.

##### kernel.middleware

> **middleware**: `MixedPipe`[]

Middleware configuration options for different stages of the kernel's lifecycle.

#### Defined in

[options/HttpConfig.ts:75](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/options/HttpConfig.ts#L75)

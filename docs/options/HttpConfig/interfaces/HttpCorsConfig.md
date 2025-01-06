[**HTTP Core Documentation v0.0.32**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpCorsConfig

# Interface: HttpCorsConfig

Defined in: [src/options/HttpConfig.ts:7](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L7)

## Properties

### allowedHeaders

> **allowedHeaders**: `string` \| `string`[]

Defined in: [src/options/HttpConfig.ts:31](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L31)

The headers that are allowed in CORS requests.

***

### credentials

> **credentials**: `boolean`

Defined in: [src/options/HttpConfig.ts:23](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L23)

Whether credentials are allowed in CORS requests.

***

### exposedHeaders

> **exposedHeaders**: `string` \| `string`[]

Defined in: [src/options/HttpConfig.ts:27](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L27)

The headers that are exposed to the client in CORS responses.

***

### maxAge

> **maxAge**: `null` \| `number`

Defined in: [src/options/HttpConfig.ts:19](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L19)

The maximum age for preflight requests.

***

### methods

> **methods**: `string` \| `string`[]

Defined in: [src/options/HttpConfig.ts:15](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L15)

The allowed methods for CORS requests.

***

### origin

> **origin**: `string` \| `string`[]

Defined in: [src/options/HttpConfig.ts:11](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L11)

The allowed origins for CORS requests.

***

### preflightStop

> **preflightStop**: `boolean`

Defined in: [src/options/HttpConfig.ts:39](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L39)

Whether to stop processing preflight requests.

***

### successStatus

> **successStatus**: `number`

Defined in: [src/options/HttpConfig.ts:35](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L35)

The HTTP status code to use for successful preflight requests.

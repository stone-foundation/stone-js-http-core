[**HTTP Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../../modules.md) / [options/HttpConfig](../README.md) / HttpCorsConfig

# Interface: HttpCorsConfig

## Properties

### allowedHeaders

> **allowedHeaders**: `string` \| `string`[]

The headers that are allowed in CORS requests.

#### Defined in

[options/HttpConfig.ts:29](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L29)

***

### credentials

> **credentials**: `boolean`

Whether credentials are allowed in CORS requests.

#### Defined in

[options/HttpConfig.ts:21](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L21)

***

### exposedHeaders

> **exposedHeaders**: `string` \| `string`[]

The headers that are exposed to the client in CORS responses.

#### Defined in

[options/HttpConfig.ts:25](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L25)

***

### maxAge

> **maxAge**: `null` \| `number`

The maximum age for preflight requests.

#### Defined in

[options/HttpConfig.ts:17](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L17)

***

### methods

> **methods**: `string` \| `string`[]

The allowed methods for CORS requests.

#### Defined in

[options/HttpConfig.ts:13](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L13)

***

### origin

> **origin**: `string` \| `string`[]

The allowed origins for CORS requests.

#### Defined in

[options/HttpConfig.ts:9](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L9)

***

### preflightStop

> **preflightStop**: `boolean`

Whether to stop processing preflight requests.

#### Defined in

[options/HttpConfig.ts:37](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L37)

***

### successStatus

> **successStatus**: `number`

The HTTP status code to use for successful preflight requests.

#### Defined in

[options/HttpConfig.ts:33](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/options/HttpConfig.ts#L33)

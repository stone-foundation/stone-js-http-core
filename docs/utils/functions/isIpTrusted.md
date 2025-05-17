[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / isIpTrusted

# Function: isIpTrusted()

> **isIpTrusted**(`trusted`, `untrusted`): (`ip`) => `boolean`

Defined in: [http-core/src/utils.ts:86](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/utils.ts#L86)

Check if IP is trusted or not.

## Parameters

### trusted

Array of trusted IPs or wildcard.

`string` | `string`[]

### untrusted

Array of untrusted IPs or wildcard.

`string` | `string`[]

## Returns

`Function`

A function to verify if a given IP is trusted.

### Parameters

#### ip

`string`

### Returns

`boolean`

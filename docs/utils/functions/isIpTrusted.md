[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / isIpTrusted

# Function: isIpTrusted()

> **isIpTrusted**(`trusted`, `untrusted`): (`ip`) => `boolean`

Defined in: [http-core/src/utils.ts:87](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/utils.ts#L87)

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

[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / isIpTrusted

# Function: isIpTrusted()

> **isIpTrusted**(`trusted`, `untrusted`): (`ip`) => `boolean`

Defined in: [src/utils.ts:86](https://github.com/stonemjs/http-core/blob/0d24f1311c8ffc69c0f21ab48badb00539c57ea4/src/utils.ts#L86)

Check if IP is trusted or not.

## Parameters

### trusted

Array of trusted IPs or wildcard.

`string` | `string`[]

### untrusted

Array of untrusted IPs or wildcard.

`string` | `string`[]

## Returns

A function to verify if a given IP is trusted.

> (`ip`): `boolean`

### Parameters

#### ip

`string`

### Returns

`boolean`

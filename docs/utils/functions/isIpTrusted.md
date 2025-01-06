[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / isIpTrusted

# Function: isIpTrusted()

> **isIpTrusted**(`trusted`, `untrusted`): (`ip`) => `boolean`

Defined in: [src/utils.ts:70](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L70)

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

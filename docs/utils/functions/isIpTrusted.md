[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / isIpTrusted

# Function: isIpTrusted()

> **isIpTrusted**(`trusted`, `untrusted`): (`ip`) => `boolean`

Check if IP is trusted or not.

## Parameters

• **trusted**: `string` \| `string`[]

Array of trusted IPs or wildcard.

• **untrusted**: `string` \| `string`[] = `[]`

Array of untrusted IPs or wildcard.

## Returns

`Function`

A function to verify if a given IP is trusted.

### Parameters

• **ip**: `string`

### Returns

`boolean`

## Defined in

[utils.ts:67](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/utils.ts#L67)

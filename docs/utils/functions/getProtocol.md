[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / getProtocol

# Function: getProtocol()

> **getProtocol**(`ip`, `headers`, `encrypted`, `options`): `string`

Get protocol.

## Parameters

• **ip**: `string`

The IP address of the request.

• **headers**: `Record`\<`string`, `string`\>

The headers from the incoming request.

• **encrypted**: `boolean`

Whether the connection is encrypted (HTTPS).

• **options**

Options for trusted and untrusted IPs.

• **options.trustedIp**: `string`[]

• **options.untrustedIp**: `string`[]

## Returns

`string`

The protocol (http or https).

## Defined in

[utils.ts:86](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/utils.ts#L86)

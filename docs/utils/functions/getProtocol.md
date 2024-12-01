[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getProtocol

# Function: getProtocol()

> **getProtocol**(`ip`, `headers`, `encrypted`, `options`): `string`

Get protocol.

## Parameters

### ip

`string`

The IP address of the request.

### headers

`IncomingHttpHeaders`

The headers from the incoming request.

### encrypted

`boolean`

Whether the connection is encrypted (HTTPS).

### options

Options for trusted and untrusted IPs.

#### options.trustedIp

`string`[]

#### options.untrustedIp

`string`[]

## Returns

`string`

The protocol (http or https).

## Defined in

[utils.ts:86](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/utils.ts#L86)

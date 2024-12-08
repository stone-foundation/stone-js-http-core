[**HTTP Core Documentation v0.0.3**](../../README.md)

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

#### trustedIp

`string`[]

#### untrustedIp

`string`[]

## Returns

`string`

The protocol (http or https).

## Defined in

[utils.ts:86](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/utils.ts#L86)

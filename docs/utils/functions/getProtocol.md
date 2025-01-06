[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getProtocol

# Function: getProtocol()

> **getProtocol**(`ip`, `headers`, `encrypted`, `options`): `string`

Defined in: [src/utils.ts:89](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L89)

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

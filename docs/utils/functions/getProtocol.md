[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getProtocol

# Function: getProtocol()

> **getProtocol**(`ip`, `headers`, `encrypted`, `options`): `string`

Defined in: [http-core/src/utils.ts:106](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/utils.ts#L106)

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

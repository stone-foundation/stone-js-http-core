[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `string` \| `undefined`

Defined in: [src/utils.ts:107](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L107)

Get hostname.

## Parameters

### ip

`string`

The IP address of the request.

### headers

`IncomingHttpHeaders`

The headers from the incoming request.

### options

Options for trusted IPs, fallback, etc.

#### trusted

(`string` \| `RegExp`)[]

#### trustedIp

`string`[]

#### untrustedIp

`string`[]

## Returns

`string` \| `undefined`

The hostname from the request.

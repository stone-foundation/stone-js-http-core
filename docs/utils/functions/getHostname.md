[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `string` \| `undefined`

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

#### options.trusted

(`string` \| `RegExp`)[]

#### options.trustedIp

`string`[]

#### options.untrustedIp

`string`[]

## Returns

`string` \| `undefined`

The hostname from the request.

## Defined in

[utils.ts:104](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/utils.ts#L104)

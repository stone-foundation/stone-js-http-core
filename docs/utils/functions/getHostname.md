[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `string` \| `undefined`

Defined in: [http-core/src/utils.ts:123](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/utils.ts#L123)

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

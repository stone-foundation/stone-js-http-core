[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `undefined` \| `string`

Defined in: [src/utils.ts:128](https://github.com/stonemjs/http-core/blob/0d24f1311c8ffc69c0f21ab48badb00539c57ea4/src/utils.ts#L128)

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

`undefined` \| `string`

The hostname from the request.

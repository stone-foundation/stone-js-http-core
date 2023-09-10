[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `string`

Get hostname.

## Parameters

### ip

`string`

The IP address of the request.

### headers

`Record`\<`string`, `string`\>

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

`string`

The hostname from the request.

## Defined in

[utils.ts:104](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/utils.ts#L104)

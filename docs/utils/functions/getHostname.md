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

[utils.ts:104](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/utils.ts#L104)

[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `undefined` \| `string`

Defined in: [src/utils.ts:151](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/utils.ts#L151)

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

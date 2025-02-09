[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getCharset

# Function: getCharset()

> **getCharset**(`value`, `fallback`): `string`

Defined in: [http-core/src/utils.ts:72](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/utils.ts#L72)

Get message content charset.

## Parameters

### value

The incoming message or content type string.

`string` | `IncomingMessage`

### fallback

`string` = `'utf-8'`

Fallback charset if parsing fails.

## Returns

`string`

The charset of the message.

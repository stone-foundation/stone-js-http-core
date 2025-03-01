[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getCharset

# Function: getCharset()

> **getCharset**(`value`, `fallback`): `string`

Defined in: [http-core/src/utils.ts:71](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/utils.ts#L71)

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

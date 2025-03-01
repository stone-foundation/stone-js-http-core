[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getType

# Function: getType()

> **getType**(`value`, `fallback`): `string`

Defined in: [http-core/src/utils.ts:56](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/utils.ts#L56)

Get message content type.

## Parameters

### value

The incoming message or content type string.

`string` | `IncomingMessage`

### fallback

`string` = `'text/plain'`

Fallback content type if parsing fails.

## Returns

`string`

The content type of the message.

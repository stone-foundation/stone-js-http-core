[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getType

# Function: getType()

> **getType**(`value`, `fallback`): `string`

Defined in: [src/utils.ts:40](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L40)

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

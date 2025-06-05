[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getType

# Function: getType()

> **getType**(`value`, `fallback`): `string`

Defined in: [src/utils.ts:56](https://github.com/stonemjs/http-core/blob/6577700bdede2420a5df45a338635c35547070ea/src/utils.ts#L56)

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

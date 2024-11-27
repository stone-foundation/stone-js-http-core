[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / getType

# Function: getType()

> **getType**(`value`, `fallback`): `string`

Get message content type.

## Parameters

• **value**: `string` \| `IncomingMessage`

The incoming message or content type string.

• **fallback**: `string` = `'text/plain'`

Fallback content type if parsing fails.

## Returns

`string`

The content type of the message.

## Defined in

[utils.ts:37](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/utils.ts#L37)

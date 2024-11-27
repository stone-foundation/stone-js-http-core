[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / getCharset

# Function: getCharset()

> **getCharset**(`value`, `fallback`): `string`

Get message content charset.

## Parameters

• **value**: `string` \| `IncomingMessage`

The incoming message or content type string.

• **fallback**: `string` = `'utf-8'`

Fallback charset if parsing fails.

## Returns

`string`

The charset of the message.

## Defined in

[utils.ts:52](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/utils.ts#L52)

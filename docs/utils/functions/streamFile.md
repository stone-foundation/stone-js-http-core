[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / streamFile

# Function: streamFile()

> **streamFile**(`message`, `response`, `fileResponse`, `options`): `Promise`\<`void`\>

Stream files from the file system as an HTTP response.

Only for node http server.

## Parameters

### message

`IncomingMessage`

The incoming message.

### response

`OutgoingMessage`\<`IncomingMessage`\>

The outgoing response.

### fileResponse

[`File`](../../file/File/classes/File.md)

The binary file response to be streamed.

### options

`SendOptions` & `object`

The options for streaming.

## Returns

`Promise`\<`void`\>

A promise that resolves when the file streaming is complete.

## Defined in

[utils.ts:204](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/utils.ts#L204)

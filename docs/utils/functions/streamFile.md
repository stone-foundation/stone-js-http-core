[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / streamFile

# Function: streamFile()

> **streamFile**(`message`, `response`, `fileResponse`, `options`): `Promise`\<`void`\>

Defined in: [src/utils.ts:205](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L205)

Stream files from the file system as an HTTP response.

Only for node http server.

## Parameters

### message

`IncomingMessage`

The incoming message.

### response

`OutgoingMessage`

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

[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / streamFile

# Function: streamFile()

> **streamFile**(`message`, `response`, `fileResponse`, `options`): `Promise`\<`void`\>

Defined in: [http-core/src/utils.ts:230](https://github.com/stonemjs/http-core/blob/8d2f265873c2a6f093cdaa7580ed7328bd078613/src/utils.ts#L230)

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

`File`

The binary file response to be streamed.

### options

[`StreamFileOptions`](../../declarations/type-aliases/StreamFileOptions.md)

The options for streaming.

## Returns

`Promise`\<`void`\>

A promise that resolves when the file streaming is complete.

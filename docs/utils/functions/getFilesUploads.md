[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getFilesUploads

# Function: getFilesUploads()

> **getFilesUploads**(`event`, `options`): `Promise`\<\{ `fields`: `Record`\<`string`, `string`\>; `files`: `Record`\<`string`, `UploadedFile`[]\>; \}\>

Defined in: [http-core/src/utils.ts:173](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/utils.ts#L173)

Get file uploads.

Get streamed or pre-read(not streamed) file upload.

## Parameters

### event

The incoming event containing the file data.

`IncomingMessage` | \{ `body`: `unknown`; `headers`: `IncomingHttpHeaders`; \}

### options

`Record`\<`string`, `any`\>

The options for file upload limits.

## Returns

`Promise`\<\{ `fields`: `Record`\<`string`, `string`\>; `files`: `Record`\<`string`, `UploadedFile`[]\>; \}\>

A promise that resolves with the uploaded files and fields.

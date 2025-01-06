[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getFilesUploads

# Function: getFilesUploads()

> **getFilesUploads**(`event`, `options`): `Promise`\<\{ `fields`: `Record`\<`string`, `string`\>; `files`: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>; \}\>

Defined in: [src/utils.ts:148](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/utils.ts#L148)

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

`Promise`\<\{ `fields`: `Record`\<`string`, `string`\>; `files`: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>; \}\>

A promise that resolves with the uploaded files and fields.

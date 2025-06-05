[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getFilesUploads

# Function: getFilesUploads()

> **getFilesUploads**(`event`, `options`): `Promise`\<\{ `fields`: `Record`\<`string`, `string`\>; `files`: `Record`\<`string`, `UploadedFile`[]\>; \}\>

Defined in: [src/utils.ts:196](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/utils.ts#L196)

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

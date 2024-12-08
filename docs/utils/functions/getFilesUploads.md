[**HTTP Core Documentation v0.0.3**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getFilesUploads

# Function: getFilesUploads()

> **getFilesUploads**(`event`, `options`): `Promise`\<`object`\>

Get file uploads.

Get streamed or pre-read(not streamed) file upload.

## Parameters

### event

The incoming event containing the file data.

`IncomingMessage` | \{`body`: `unknown`;`headers`: `IncomingHttpHeaders`; \}

### options

`Record`\<`string`, `any`\>

The options for file upload limits.

## Returns

`Promise`\<`object`\>

A promise that resolves with the uploaded files and fields.

### fields

> **fields**: `Record`\<`string`, `string`\>

### files

> **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

## Defined in

[utils.ts:145](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/utils.ts#L145)

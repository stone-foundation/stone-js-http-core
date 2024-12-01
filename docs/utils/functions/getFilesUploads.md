[**HTTP Core Documentation v0.0.0**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / getFilesUploads

# Function: getFilesUploads()

> **getFilesUploads**(`event`, `options`): `Promise`\<`object`\>

Get file uploads.

Get streamed or pre-read(not streamed) file upload.

## Parameters

### event

`IncomingMessage`

\{`body`: `unknown`;`headers`: `IncomingHttpHeaders`; \}

The incoming event containing the file data.

#### event.body

`unknown`

#### event.headers

`IncomingHttpHeaders`

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

[utils.ts:145](https://github.com/stonemjs/http-core/blob/24dd4b3f1e59fc19fb65fa5316121fe4b68e4f41/src/utils.ts#L145)

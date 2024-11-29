[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [HttpResponse](../README.md) / fileHttpResponse

# Function: fileHttpResponse()

> **fileHttpResponse**(`file`, `statusCode`, `headers`, `contentDispositionType`, `autoEtag`, `autoLastModified`): [`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)

Create a 200(OK) file OutgoingHttpResponse.

## Parameters

• **file**: `string` \| [`File`](../../file/File/classes/File.md)

The file to send as the response.

• **statusCode**: `number` = `HTTP_OK`

The status code of the response.

• **headers**: `Record`\<`string`, `string`\> = `{}`

The headers for the response.

• **contentDispositionType**: `null` \| `string` = `null`

The content disposition type (e.g., "inline" or "attachment").

• **autoEtag**: `boolean` = `false`

Whether to automatically generate an ETag.

• **autoLastModified**: `boolean` = `true`

Whether to automatically set the Last-Modified header.

## Returns

[`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)

A new instance of BinaryFileResponse.

## Defined in

HttpResponse.ts:176

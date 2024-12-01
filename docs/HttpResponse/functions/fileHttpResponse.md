[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpResponse](../README.md) / fileHttpResponse

# Function: fileHttpResponse()

> **fileHttpResponse**(`file`, `statusCode`, `headers`, `contentDispositionType`, `autoEtag`, `autoLastModified`): [`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)

Create a 200(OK) file OutgoingHttpResponse.

## Parameters

### file

`string` | [`File`](../../file/File/classes/File.md)

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

`Record`\<`string`, `string`\> = `{}`

The headers for the response.

### contentDispositionType

`null` | `string`

### autoEtag

`boolean` = `false`

Whether to automatically generate an ETag.

### autoLastModified

`boolean` = `true`

Whether to automatically set the Last-Modified header.

## Returns

[`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)

A new instance of BinaryFileResponse.

## Defined in

[HttpResponse.ts:176](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/HttpResponse.ts#L176)

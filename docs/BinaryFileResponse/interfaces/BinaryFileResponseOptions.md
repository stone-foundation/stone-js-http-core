[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Defined in: [src/BinaryFileResponse.ts:13](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/BinaryFileResponse.ts#L13)

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### autoEtag?

> `optional` **autoEtag**: `boolean`

Defined in: [src/BinaryFileResponse.ts:14](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/BinaryFileResponse.ts#L14)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

Defined in: [src/BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/BinaryFileResponse.ts#L16)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

Defined in: [src/BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/BinaryFileResponse.ts#L17)

***

### file

> **file**: `string` \| [`File`](../../file/File/classes/File.md)

Defined in: [src/BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/BinaryFileResponse.ts#L15)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

Defined in: [src/OutgoingHttpResponse.ts:21](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/OutgoingHttpResponse.ts#L21)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)

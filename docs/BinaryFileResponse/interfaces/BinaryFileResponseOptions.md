[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Defined in: [src/BinaryFileResponse.ts:14](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/BinaryFileResponse.ts#L14)

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### autoEtag?

> `optional` **autoEtag**: `boolean`

Defined in: [src/BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/BinaryFileResponse.ts#L15)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

Defined in: [src/BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/BinaryFileResponse.ts#L17)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

Defined in: [src/BinaryFileResponse.ts:18](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/BinaryFileResponse.ts#L18)

***

### file

> **file**: `string` \| [`File`](../../file/File/classes/File.md)

Defined in: [src/BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/BinaryFileResponse.ts#L16)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

Defined in: [src/OutgoingHttpResponse.ts:22](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/OutgoingHttpResponse.ts#L22)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)

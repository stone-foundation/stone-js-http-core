[**HTTP Core Documentation v0.0.2**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### autoEtag?

> `optional` **autoEtag**: `boolean`

#### Defined in

[BinaryFileResponse.ts:14](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/BinaryFileResponse.ts#L14)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

#### Defined in

[BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/BinaryFileResponse.ts#L16)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

#### Defined in

[BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/BinaryFileResponse.ts#L17)

***

### file

> **file**: `string` \| [`File`](../../file/File/classes/File.md)

#### Defined in

[BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/BinaryFileResponse.ts#L15)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)

#### Defined in

[OutgoingHttpResponse.ts:21](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/OutgoingHttpResponse.ts#L21)

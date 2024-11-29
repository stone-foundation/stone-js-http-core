[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Properties

### autoEtag?

> `optional` **autoEtag**: `boolean`

#### Defined in

[BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/BinaryFileResponse.ts#L15)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

#### Defined in

[BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/BinaryFileResponse.ts#L17)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

#### Defined in

[BinaryFileResponse.ts:18](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/BinaryFileResponse.ts#L18)

***

### file

> **file**: `string` \| [`File`](../../file/File/classes/File.md)

#### Defined in

[BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/BinaryFileResponse.ts#L16)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)

#### Defined in

[OutgoingHttpResponse.ts:19](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/OutgoingHttpResponse.ts#L19)

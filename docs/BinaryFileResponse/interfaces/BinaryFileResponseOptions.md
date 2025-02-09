[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Defined in: [http-core/src/BinaryFileResponse.ts:13](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L13)

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### autoEncoding?

> `optional` **autoEncoding**: `boolean`

Defined in: [http-core/src/BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L16)

***

### autoEtag?

> `optional` **autoEtag**: `boolean`

Defined in: [http-core/src/BinaryFileResponse.ts:14](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L14)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

Defined in: [http-core/src/BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L17)

***

### content?

> `optional` **content**: `unknown`

Defined in: core/dist/index.d.ts:256

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`content`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#content)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

Defined in: [http-core/src/BinaryFileResponse.ts:18](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L18)

***

### file

> **file**: `string` \| `File`

Defined in: [http-core/src/BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/BinaryFileResponse.ts#L15)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:22](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/OutgoingHttpResponse.ts#L22)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:32

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`metadata`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#metadata)

***

### source?

> `optional` **source**: `object`

Defined in: core/dist/index.d.ts:30

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`source`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#source)

***

### statusCode?

> `optional` **statusCode**: `number`

Defined in: core/dist/index.d.ts:257

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`statusCode`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#statuscode)

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: core/dist/index.d.ts:258

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`statusMessage`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#statusmessage)

***

### timeStamp?

> `optional` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:31

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`timeStamp`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: core/dist/index.d.ts:29

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`type`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#type)

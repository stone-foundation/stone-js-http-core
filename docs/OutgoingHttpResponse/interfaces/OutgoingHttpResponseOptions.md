[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [OutgoingHttpResponse](../README.md) / OutgoingHttpResponseOptions

# Interface: OutgoingHttpResponseOptions

Defined in: [http-core/src/OutgoingHttpResponse.ts:21](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/OutgoingHttpResponse.ts#L21)

Options for creating an Outgoing HTTP Response.

## Extends

- `OutgoingResponseOptions`

## Extended by

- [`BinaryFileResponseOptions`](../../BinaryFileResponse/interfaces/BinaryFileResponseOptions.md)
- [`RedirectResponseOptions`](../../RedirectResponse/interfaces/RedirectResponseOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### content?

> `optional` **content**: `unknown`

Defined in: core/dist/index.d.ts:275

#### Inherited from

`OutgoingResponseOptions.content`

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

Defined in: [http-core/src/OutgoingHttpResponse.ts:22](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/OutgoingHttpResponse.ts#L22)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:32

#### Inherited from

`OutgoingResponseOptions.metadata`

***

### source?

> `optional` **source**: `object`

Defined in: core/dist/index.d.ts:30

#### Inherited from

`OutgoingResponseOptions.source`

***

### statusCode?

> `optional` **statusCode**: `number`

Defined in: core/dist/index.d.ts:276

#### Inherited from

`OutgoingResponseOptions.statusCode`

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: core/dist/index.d.ts:277

#### Inherited from

`OutgoingResponseOptions.statusMessage`

***

### timeStamp?

> `optional` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:31

#### Inherited from

`OutgoingResponseOptions.timeStamp`

***

### type?

> `optional` **type**: `string`

Defined in: core/dist/index.d.ts:29

#### Inherited from

`OutgoingResponseOptions.type`

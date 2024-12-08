[**HTTP Core Documentation v0.0.3**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEventOptions

# Interface: IncomingHttpEventOptions

IncomingHttpEventOptions interface.

## Extends

- `IncomingEventOptions`

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### body?

> `optional` **body**: `Record`\<`string`, `unknown`\>

#### Defined in

[IncomingHttpEvent.ts:26](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L26)

***

### cookies?

> `optional` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

#### Defined in

[IncomingHttpEvent.ts:25](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L25)

***

### files?

> `optional` **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

#### Defined in

[IncomingHttpEvent.ts:27](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L27)

***

### headers?

> `optional` **headers**: `Headers` \| `Record`\<`string`, `string`\>

#### Defined in

[IncomingHttpEvent.ts:28](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L28)

***

### ip

> **ip**: `string`

#### Defined in

[IncomingHttpEvent.ts:20](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L20)

***

### ips?

> `optional` **ips**: `string`[]

#### Defined in

[IncomingHttpEvent.ts:21](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L21)

***

### method?

> `optional` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

#### Defined in

[IncomingHttpEvent.ts:23](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L23)

***

### protocol?

> `optional` **protocol**: `string`

#### Defined in

[IncomingHttpEvent.ts:22](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L22)

***

### queryString?

> `optional` **queryString**: `string`

#### Defined in

[IncomingHttpEvent.ts:24](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L24)

***

### url

> **url**: `URL`

#### Defined in

[IncomingHttpEvent.ts:19](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/IncomingHttpEvent.ts#L19)

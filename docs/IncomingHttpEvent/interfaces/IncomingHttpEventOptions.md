[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEventOptions

# Interface: IncomingHttpEventOptions

Defined in: [http-core/src/IncomingHttpEvent.ts:19](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L19)

IncomingHttpEventOptions interface.

## Extends

- `IncomingEventOptions`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### body?

> `optional` **body**: `Record`\<`string`, `unknown`\>

Defined in: [http-core/src/IncomingHttpEvent.ts:27](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L27)

***

### cookies?

> `optional` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [http-core/src/IncomingHttpEvent.ts:26](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L26)

***

### files?

> `optional` **files**: `Record`\<`string`, `UploadedFile`[]\>

Defined in: [http-core/src/IncomingHttpEvent.ts:28](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L28)

***

### headers?

> `optional` **headers**: `Headers` \| `Record`\<`string`, `string`\>

Defined in: [http-core/src/IncomingHttpEvent.ts:29](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L29)

***

### ip

> **ip**: `string`

Defined in: [http-core/src/IncomingHttpEvent.ts:21](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L21)

***

### ips?

> `optional` **ips**: `string`[]

Defined in: [http-core/src/IncomingHttpEvent.ts:22](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L22)

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:148

#### Inherited from

`IncomingEventOptions.locale`

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:32

#### Inherited from

`IncomingEventOptions.metadata`

***

### method?

> `optional` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

Defined in: [http-core/src/IncomingHttpEvent.ts:24](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L24)

***

### protocol?

> `optional` **protocol**: `string`

Defined in: [http-core/src/IncomingHttpEvent.ts:23](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L23)

***

### queryString?

> `optional` **queryString**: `string`

Defined in: [http-core/src/IncomingHttpEvent.ts:25](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L25)

***

### source

> **source**: `IncomingEventSource`

Defined in: core/dist/index.d.ts:149

#### Inherited from

`IncomingEventOptions.source`

***

### timeStamp?

> `optional` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:31

#### Inherited from

`IncomingEventOptions.timeStamp`

***

### type?

> `optional` **type**: `string`

Defined in: core/dist/index.d.ts:29

#### Inherited from

`IncomingEventOptions.type`

***

### url

> **url**: `URL`

Defined in: [http-core/src/IncomingHttpEvent.ts:20](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/IncomingHttpEvent.ts#L20)

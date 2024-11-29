[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEventOptions

# Interface: IncomingHttpEventOptions

IncomingHttpEventOptions interface.

## Extends

- `IncomingEventOptions`

## Properties

### body?

> `optional` **body**: `Record`\<`string`, `unknown`\>

#### Defined in

[IncomingHttpEvent.ts:25](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L25)

***

### cookies?

> `optional` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

#### Defined in

[IncomingHttpEvent.ts:24](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L24)

***

### files?

> `optional` **files**: `Record`\<`string`, [`UploadedFile`](../../file/UploadedFile/classes/UploadedFile.md)[]\>

#### Defined in

[IncomingHttpEvent.ts:26](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L26)

***

### headers?

> `optional` **headers**: `Headers` \| `Record`\<`string`, `string`\>

#### Defined in

[IncomingHttpEvent.ts:27](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L27)

***

### ip

> **ip**: `string`

#### Defined in

[IncomingHttpEvent.ts:19](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L19)

***

### ips?

> `optional` **ips**: `string`[]

#### Defined in

[IncomingHttpEvent.ts:20](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L20)

***

### method?

> `optional` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

#### Defined in

[IncomingHttpEvent.ts:22](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L22)

***

### protocol?

> `optional` **protocol**: `string`

#### Defined in

[IncomingHttpEvent.ts:21](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L21)

***

### queryString?

> `optional` **queryString**: `string`

#### Defined in

[IncomingHttpEvent.ts:23](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L23)

***

### url

> **url**: `URL`

#### Defined in

[IncomingHttpEvent.ts:18](https://github.com/stonemjs/http-core/blob/6c1adf9f449733e34ff7f08818342bd019b968a7/src/IncomingHttpEvent.ts#L18)

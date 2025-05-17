[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpErrorHandler](../README.md) / HttpErrorHandler

# Class: HttpErrorHandler

Defined in: [http-core/src/HttpErrorHandler.ts:25](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/HttpErrorHandler.ts#L25)

Class representing an HttpErrorHandler.

## Implements

- `IErrorHandler`\<[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Constructors

### new HttpErrorHandler()

> **new HttpErrorHandler**(`options`): [`HttpErrorHandler`](HttpErrorHandler.md)

Defined in: [http-core/src/HttpErrorHandler.ts:33](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/HttpErrorHandler.ts#L33)

Create an HttpErrorHandler.

#### Parameters

##### options

[`HttpErrorHandlerOptions`](../interfaces/HttpErrorHandlerOptions.md)

HttpErrorHandler options.

#### Returns

[`HttpErrorHandler`](HttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `event`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [http-core/src/HttpErrorHandler.ts:48](https://github.com/stonemjs/http-core/blob/31e23030575a56f9e3df3cf0d1fec6cbcbb56275/src/HttpErrorHandler.ts#L48)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming http event.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

The outgoing http response.

#### Implementation of

`IErrorHandler.handle`

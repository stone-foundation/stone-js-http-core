[**HTTP Core Documentation v0.0.32**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [HttpErrorHandler](../README.md) / HttpErrorHandler

# Class: HttpErrorHandler

Defined in: [src/HttpErrorHandler.ts:17](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpErrorHandler.ts#L17)

Class representing an BrowserErrorHandler.

## Implements

- `IErrorHandler`\<[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Constructors

### new HttpErrorHandler()

> **new HttpErrorHandler**(`options`): [`HttpErrorHandler`](HttpErrorHandler.md)

Defined in: [src/HttpErrorHandler.ts:25](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpErrorHandler.ts#L25)

Create an BrowserErrorHandler.

#### Parameters

##### options

[`HttpErrorHandlerOptions`](../interfaces/HttpErrorHandlerOptions.md)

BrowserErrorHandler options.

#### Returns

[`HttpErrorHandler`](HttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `_event`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [src/HttpErrorHandler.ts:40](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/HttpErrorHandler.ts#L40)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### \_event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming http event.

#### Returns

[`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

The outgoing http response.

#### Implementation of

`IErrorHandler.handle`

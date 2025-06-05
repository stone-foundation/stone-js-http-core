[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [HttpErrorHandler](../README.md) / HttpErrorHandler

# Class: HttpErrorHandler

Defined in: [src/HttpErrorHandler.ts:25](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/HttpErrorHandler.ts#L25)

Class representing an HttpErrorHandler.

## Implements

- `IErrorHandler`\<[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Constructors

### Constructor

> **new HttpErrorHandler**(`options`): `HttpErrorHandler`

Defined in: [src/HttpErrorHandler.ts:33](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/HttpErrorHandler.ts#L33)

Create an HttpErrorHandler.

#### Parameters

##### options

[`HttpErrorHandlerOptions`](../interfaces/HttpErrorHandlerOptions.md)

HttpErrorHandler options.

#### Returns

`HttpErrorHandler`

## Methods

### handle()

> **handle**(`error`, `event`): [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Defined in: [src/HttpErrorHandler.ts:48](https://github.com/stonemjs/http-core/blob/38177eda1505fdb30323b11ec31ef2a0f0840267/src/HttpErrorHandler.ts#L48)

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

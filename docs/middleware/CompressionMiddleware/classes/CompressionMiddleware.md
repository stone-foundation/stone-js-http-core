[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/CompressionMiddleware](../README.md) / CompressionMiddleware

# Class: CompressionMiddleware

Defined in: http-core/src/middleware/CompressionMiddleware.ts:9

Middleware to compress response content based on the Accept-Encoding header.

## Constructors

### new CompressionMiddleware()

> **new CompressionMiddleware**(): [`CompressionMiddleware`](CompressionMiddleware.md)

#### Returns

[`CompressionMiddleware`](CompressionMiddleware.md)

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: http-core/src/middleware/CompressionMiddleware.ts:17

Compress the response content based on the Accept-Encoding header.

#### Parameters

##### event

[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### next

`NextPipe`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The next middleware in the pipeline.

#### Returns

`Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The outgoing HTTP response.

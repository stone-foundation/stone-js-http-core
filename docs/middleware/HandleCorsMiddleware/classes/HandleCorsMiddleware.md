[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/HandleCorsMiddleware](../README.md) / HandleCorsMiddleware

# Class: HandleCorsMiddleware

Defined in: [http-core/src/middleware/HandleCorsMiddleware.ts:15](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/middleware/HandleCorsMiddleware.ts#L15)

HandleCorsMiddleware is responsible for adding Cross-Origin Resource Sharing (CORS) headers to HTTP responses.
It allows controlling how clients from different origins can access the server's resources.

## Template

Represents the type of the incoming HTTP event.

## Template

Represents the type of the outgoing HTTP response.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### new HandleCorsMiddleware()

> **new HandleCorsMiddleware**(`blueprint`): [`HandleCorsMiddleware`](HandleCorsMiddleware.md)

Defined in: [http-core/src/middleware/HandleCorsMiddleware.ts:25](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/middleware/HandleCorsMiddleware.ts#L25)

Construct an instance of HandleCorsMiddleware.

#### Parameters

##### blueprint

The configuration blueprint used for managing CORS settings.

###### blueprint

`IBlueprint`

#### Returns

[`HandleCorsMiddleware`](HandleCorsMiddleware.md)

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: [http-core/src/middleware/HandleCorsMiddleware.ts:38](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/middleware/HandleCorsMiddleware.ts#L38)

Handle CORS by modifying the response headers based on the configuration.

#### Parameters

##### event

[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### next

`NextPipe`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The next middleware function to continue processing the event.

#### Returns

`Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The outgoing HTTP response with CORS headers.

[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/StaticFileMiddleware](../README.md) / StaticFileMiddleware

# Class: StaticFileMiddleware

Defined in: http-core/src/middleware/StaticFileMiddleware.ts:13

Middleware for serving static files from a directory.
If a static file is found, it serves the file; otherwise, the request is passed to the next middleware.

## Constructors

### new StaticFileMiddleware()

> **new StaticFileMiddleware**(`container`): [`StaticFileMiddleware`](StaticFileMiddleware.md)

Defined in: http-core/src/middleware/StaticFileMiddleware.ts:23

Create a new StaticFileMiddleware instance.

#### Parameters

##### container

The service container to inject dependencies.

###### blueprint

`IBlueprint`

###### logger

`ILogger`

#### Returns

[`StaticFileMiddleware`](StaticFileMiddleware.md)

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: http-core/src/middleware/StaticFileMiddleware.ts:37

Handle incoming HTTP events and serve static files if applicable.

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

#### Throws

If access to the file is forbidden.

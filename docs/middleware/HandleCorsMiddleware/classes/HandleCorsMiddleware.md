[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/HandleCorsMiddleware](../README.md) / HandleCorsMiddleware

# Class: HandleCorsMiddleware\<U, V\>

HandleCorsMiddleware is responsible for adding Cross-Origin Resource Sharing (CORS) headers to HTTP responses.
It allows controlling how clients from different origins can access the server's resources.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **U** *extends* [`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Represents the type of the incoming HTTP event.

• **V** *extends* [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

Represents the type of the outgoing HTTP response.

## Constructors

### new HandleCorsMiddleware()

> **new HandleCorsMiddleware**\<`U`, `V`\>(`blueprint`): [`HandleCorsMiddleware`](HandleCorsMiddleware.md)\<`U`, `V`\>

Construct an instance of HandleCorsMiddleware.

#### Parameters

##### blueprint

The configuration blueprint used for managing CORS settings.

###### blueprint.blueprint

`IBlueprint`

#### Returns

[`HandleCorsMiddleware`](HandleCorsMiddleware.md)\<`U`, `V`\>

#### Defined in

[middleware/HandleCorsMiddleware.ts:25](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/middleware/HandleCorsMiddleware.ts#L25)

## Methods

### handle()

> **handle**(`param0`, `next`): `KernelContext`\<`U`, `V`\> \| `Promise`\<`KernelContext`\<`U`, `V`\>\>

Handle CORS by modifying the response headers based on the configuration.

#### Parameters

##### param0

`KernelContext`\<`U`, `V`\>

The context containing incoming HTTP event and outgoing HTTP response.

##### next

`NextPipe`\<`KernelContext`\<`U`, `V`\>\>

The next middleware function to continue processing the request.

#### Returns

`KernelContext`\<`U`, `V`\> \| `Promise`\<`KernelContext`\<`U`, `V`\>\>

The modified kernel context or the next middleware function result.

#### Defined in

[middleware/HandleCorsMiddleware.ts:38](https://github.com/stonemjs/http-core/blob/89981cacc9858cf786fba9df03b328b6b56a5b75/src/middleware/HandleCorsMiddleware.ts#L38)

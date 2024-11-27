[**HTTP Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../../modules.md) / [middleware/HandleCorsMiddleware](../README.md) / HandleCorsMiddleware

# Class: HandleCorsMiddleware\<U, V\>

Class representing an HandleCorsMiddleware.

## Author

Mr. Stone <evensstone@gmail.com>

## Comment

Inspired by expressjs Cors https://www.npmjs.com/package/cors

## Type Parameters

• **U** *extends* [`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

• **V** *extends* [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

## Constructors

### new HandleCorsMiddleware()

> **new HandleCorsMiddleware**\<`U`, `V`\>(`container`): [`HandleCorsMiddleware`](HandleCorsMiddleware.md)\<`U`, `V`\>

Create a HandleCorsMiddleware.

#### Parameters

• **container**

The container with configuration.

• **container.blueprint**: `IBlueprint`

#### Returns

[`HandleCorsMiddleware`](HandleCorsMiddleware.md)\<`U`, `V`\>

#### Defined in

[middleware/HandleCorsMiddleware.ts:23](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/middleware/HandleCorsMiddleware.ts#L23)

## Methods

### handle()

> **handle**(`__namedParameters`, `next`): `KernelContext`\<`U`, `V`\> \| `Promise`\<`KernelContext`\<`U`, `V`\>\>

Handle passable.

#### Parameters

• **\_\_namedParameters**: `KernelContext`\<`U`, `V`\>

• **next**: `NextPipe`\<`KernelContext`\<`U`, `V`\>\>

The next middleware function.

#### Returns

`KernelContext`\<`U`, `V`\> \| `Promise`\<`KernelContext`\<`U`, `V`\>\>

The response or the result of the next function.

#### Defined in

[middleware/HandleCorsMiddleware.ts:37](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/middleware/HandleCorsMiddleware.ts#L37)

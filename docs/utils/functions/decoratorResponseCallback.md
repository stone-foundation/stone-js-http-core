[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / decoratorResponseCallback

# Function: decoratorResponseCallback()

> **decoratorResponseCallback**\<`TTarget`, `TFunction`, `UReturn`\>(`target`, `responseCallback`): `TFunction`

Defined in: [http-core/src/utils.ts:28](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/utils.ts#L28)

Decorator response callback.

## Type Parameters

• **TTarget**

• **TFunction**

• **UReturn** *extends* [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

## Parameters

### target

`TTarget`

The target function.

### responseCallback

(`content`) => `Promise`\<`UReturn`\>

The response callback.

## Returns

`TFunction`

The function with the response callback.

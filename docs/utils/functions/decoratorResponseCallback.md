[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [utils](../README.md) / decoratorResponseCallback

# Function: decoratorResponseCallback()

> **decoratorResponseCallback**\<`TTarget`, `TFunction`, `UReturn`\>(`target`, `responseCallback`): `TFunction`

Defined in: [http-core/src/utils.ts:27](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/utils.ts#L27)

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

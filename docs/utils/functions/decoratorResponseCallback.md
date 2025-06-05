[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / decoratorResponseCallback

# Function: decoratorResponseCallback()

> **decoratorResponseCallback**\<`TTarget`, `TFunction`, `UReturn`\>(`target`, `responseCallback`): `TFunction`

Defined in: [src/utils.ts:27](https://github.com/stonemjs/http-core/blob/0d24f1311c8ffc69c0f21ab48badb00539c57ea4/src/utils.ts#L27)

Decorator response callback.

## Type Parameters

### TTarget

`TTarget`

### TFunction

`TFunction`

### UReturn

`UReturn` *extends* [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

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

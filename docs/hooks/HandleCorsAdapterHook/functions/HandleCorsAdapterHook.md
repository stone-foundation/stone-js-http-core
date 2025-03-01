[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [hooks/HandleCorsAdapterHook](../README.md) / HandleCorsAdapterHook

# Function: HandleCorsAdapterHook()

> **HandleCorsAdapterHook**(`options`): `Promise`\<`void`\>

Defined in: http-core/src/hooks/HandleCorsAdapterHook.ts:27

Handles CORS headers at the "onBuildingRawResponse" stage.

This hook ensures that CORS headers are applied even when the middleware is not executed.
It is useful for scenarios where an error occurs before reaching the middleware chain
or when a request bypasses the intended processing.

## Parameters

### options

`AdapterHookListenerContext`\<[`AdapterContextType`](../type-aliases/AdapterContextType.md)\>

The adapter hook listener context containing the blueprint and context.

## Returns

`Promise`\<`void`\>

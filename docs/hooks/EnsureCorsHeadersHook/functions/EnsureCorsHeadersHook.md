[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [hooks/EnsureCorsHeadersHook](../README.md) / EnsureCorsHeadersHook

# Function: EnsureCorsHeadersHook()

> **EnsureCorsHeadersHook**(`options`): `Promise`\<`void`\>

Defined in: [http-core/src/hooks/EnsureCorsHeadersHook.ts:27](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/hooks/EnsureCorsHeadersHook.ts#L27)

Ensure CORS headers at the "onBuildingRawResponse" stage.

This adapter hook ensures that CORS headers are applied even when the middleware is not executed.
It is useful for scenarios where an error occurs before reaching the middleware chain
or when a request bypasses the intended processing.

## Parameters

### options

`AdapterHookListenerContext`\<[`AdapterContextType`](../type-aliases/AdapterContextType.md)\>

The adapter hook listener context containing the blueprint and context.

## Returns

`Promise`\<`void`\>

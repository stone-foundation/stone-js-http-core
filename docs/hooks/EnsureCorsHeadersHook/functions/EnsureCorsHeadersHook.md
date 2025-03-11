[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [hooks/EnsureCorsHeadersHook](../README.md) / EnsureCorsHeadersHook

# Function: EnsureCorsHeadersHook()

> **EnsureCorsHeadersHook**(`options`): `Promise`\<`void`\>

Defined in: [http-core/src/hooks/EnsureCorsHeadersHook.ts:27](https://github.com/stonemjs/http-core/blob/eaa01dbfed8a1d56fab239821e27802dd54ab017/src/hooks/EnsureCorsHeadersHook.ts#L27)

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

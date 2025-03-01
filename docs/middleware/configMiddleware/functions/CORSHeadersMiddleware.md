[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / CORSHeadersMiddleware

# Function: CORSHeadersMiddleware()

> **CORSHeadersMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: http-core/src/middleware/configMiddleware.ts:21

Middleware for setting Cross-Origin Resource Sharing (CORS) headers in the HTTP response.

This middleware adds the necessary headers to the HTTP response
to allow clients from different origins to access the server's resources.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next function in the pipeline.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint.

## Example

```typescript
CORSHeadersMiddleware({ modules, blueprint }, next);
```

[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [middleware/CORSHeadersMiddleware](../README.md) / CORSHeadersMiddleware

# Function: CORSHeadersMiddleware()

> **CORSHeadersMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [http-core/src/middleware/CORSHeadersMiddleware.ts:23](https://github.com/stonemjs/http-core/blob/8d2f265873c2a6f093cdaa7580ed7328bd078613/src/middleware/CORSHeadersMiddleware.ts#L23)

Blueprint Middleware for setting Cross-Origin Resource Sharing (CORS) headers in the HTTP response.

This middleware adds the necessary headers to the HTTP response
to allow clients from different origins to access the server's resources.

And also ensures that CORS headers are applied even when the middleware is not executed.

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

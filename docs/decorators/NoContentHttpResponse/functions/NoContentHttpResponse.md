[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/NoContentHttpResponse](../README.md) / NoContentHttpResponse

# Function: NoContentHttpResponse()

> **NoContentHttpResponse**\<`T`\>(`headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/NoContentHttpResponse.ts:24](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/decorators/NoContentHttpResponse.ts#L24)

Decorator to mark a class method as a 204 outgoing http response.

## Type Parameters

• **T** *extends* `Function` = `Function`

## Parameters

### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { NoContentHttpResponse } from '@stone-js/http-core';

class UserController {
  @NoContentHttpResponse()
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

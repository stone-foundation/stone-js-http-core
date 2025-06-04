[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [decorators/NoContentHttpResponse](../README.md) / NoContentHttpResponse

# Function: NoContentHttpResponse()

> **NoContentHttpResponse**\<`T`\>(`headers`): `MethodDecorator`

Defined in: [src/decorators/NoContentHttpResponse.ts:24](https://github.com/stonemjs/http-core/blob/f8360abdd8e841f59cefcfadd322bcf66d52c95b/src/decorators/NoContentHttpResponse.ts#L24)

Decorator to mark a class method as a 204 outgoing http response.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

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

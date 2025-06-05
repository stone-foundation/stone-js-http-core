[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [decorators/OkHttpResponse](../README.md) / OkHttpResponse

# Function: OkHttpResponse()

> **OkHttpResponse**\<`T`\>(`headers`): `MethodDecorator`

Defined in: [src/decorators/OkHttpResponse.ts:24](https://github.com/stonemjs/http-core/blob/6577700bdede2420a5df45a338635c35547070ea/src/decorators/OkHttpResponse.ts#L24)

Decorator to mark a class method as a 200 outgoing http response.

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
import { OkHttpResponse } from '@stone-js/http-core';

class UserController {
  @OkHttpResponse()
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

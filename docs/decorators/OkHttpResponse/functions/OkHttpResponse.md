[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/OkHttpResponse](../README.md) / OkHttpResponse

# Function: OkHttpResponse()

> **OkHttpResponse**\<`T`\>(`headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/OkHttpResponse.ts:24](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/decorators/OkHttpResponse.ts#L24)

Decorator to mark a class method as a 200 outgoing http response.

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
import { OkHttpResponse } from '@stone-js/http-core';

class UserController {
  @OkHttpResponse()
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

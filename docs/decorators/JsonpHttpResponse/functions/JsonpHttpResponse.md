[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [decorators/JsonpHttpResponse](../README.md) / JsonpHttpResponse

# Function: JsonpHttpResponse()

> **JsonpHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [src/decorators/JsonpHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/0d24f1311c8ffc69c0f21ab48badb00539c57ea4/src/decorators/JsonpHttpResponse.ts#L26)

Decorator to mark a class method as a JsonP outgoing http response.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

## Parameters

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { JsonpHttpResponse } from '@stone-js/http-core';

class UserController {
  @JsonpHttpResponse()
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

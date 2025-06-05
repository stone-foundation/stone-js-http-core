[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [decorators/HttpResponse](../README.md) / HttpResponse

# Function: HttpResponse()

> **HttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [src/decorators/HttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/6577700bdede2420a5df45a338635c35547070ea/src/decorators/HttpResponse.ts#L26)

Decorator to mark a class method as an outgoing http response.

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
import { HttpResponse } from '@stone-js/http-core';

class UserController {
  @HttpResponse(200)
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

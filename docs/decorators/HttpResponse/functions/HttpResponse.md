[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/HttpResponse](../README.md) / HttpResponse

# Function: HttpResponse()

> **HttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/HttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/fb38b6d1cb0bd2bb4e252ff611571ec3c006aa1e/src/decorators/HttpResponse.ts#L26)

Decorator to mark a class method as an outgoing http response.

## Type Parameters

• **T** *extends* `Function` = `Function`

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

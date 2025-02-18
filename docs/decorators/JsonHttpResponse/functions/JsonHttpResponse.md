[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/JsonHttpResponse](../README.md) / JsonHttpResponse

# Function: JsonHttpResponse()

> **JsonHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/JsonHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/decorators/JsonHttpResponse.ts#L26)

Decorator to mark a class method as a JSON outgoing http response.

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
import { JsonHttpResponse } from '@stone-js/http-core';

class UserController {
  @JsonHttpResponse()
  getUsers() {
    return { name: 'John Doe' };
  }
}
```

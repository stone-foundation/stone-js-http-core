[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/RedirectHttpResponse](../README.md) / RedirectHttpResponse

# Function: RedirectHttpResponse()

> **RedirectHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/RedirectHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/decorators/RedirectHttpResponse.ts#L26)

Decorator to mark a class method as a redirect outgoing http response.

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
import { RedirectHttpResponse } from '@stone-js/http-core';

class UserController {
  @RedirectHttpResponse()
  getUsers() {
    return new URL('https://www.google.com');
  }
}
```

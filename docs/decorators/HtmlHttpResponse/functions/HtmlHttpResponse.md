[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/HtmlHttpResponse](../README.md) / HtmlHttpResponse

# Function: HtmlHttpResponse()

> **HtmlHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/HtmlHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/8d2f265873c2a6f093cdaa7580ed7328bd078613/src/decorators/HtmlHttpResponse.ts#L26)

Decorator to mark a class method as an html outgoing http response.

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
import { HtmlHttpResponse } from '@stone-js/http-core';

class UserController {
  @HtmlHttpResponse()
  getUsers() {
    return '<h1>Hello World</h1>';
  }
}
```

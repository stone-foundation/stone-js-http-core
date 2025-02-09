[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [decorators/FileHttpResponse](../README.md) / FileHttpResponse

# Function: FileHttpResponse()

> **FileHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [http-core/src/decorators/FileHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/decorators/FileHttpResponse.ts#L26)

Decorator to mark a class method as a file outgoing http response.

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
import { FileHttpResponse } from '@stone-js/http-core';

class UserController {
  @FileHttpResponse()
  getUsers() {
    return new File('path/to/file');
  }
}
```

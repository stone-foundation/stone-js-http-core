[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [src/declarations.ts:51](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/declarations.ts#L51)

Describes a route definition, including its URI, method, and parameters.

## Properties

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [src/declarations.ts:55](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/declarations.ts#L55)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### name

`string`

##### fallback?

`TReturn`

#### Returns

`undefined` \| `TReturn`

***

### method

> **method**: [`HttpMethod`](../type-aliases/HttpMethod.md)

Defined in: [src/declarations.ts:53](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/declarations.ts#L53)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/declarations.ts:54](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/declarations.ts#L54)

***

### uri

> **uri**: `string`

Defined in: [src/declarations.ts:52](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/declarations.ts#L52)

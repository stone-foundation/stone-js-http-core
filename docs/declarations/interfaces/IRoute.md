[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [http-core/src/declarations.ts:55](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L55)

Describes a route definition, including its URI, method, and parameters.

## Properties

### getOptions()

> **getOptions**: \<`TReturn`\>(`keys`) => `Record`\<`string`, `TReturn`\>

Defined in: [http-core/src/declarations.ts:59](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L59)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### keys

`string`[]

#### Returns

`Record`\<`string`, `TReturn`\>

***

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [http-core/src/declarations.ts:60](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L60)

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

Defined in: [http-core/src/declarations.ts:57](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L57)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [http-core/src/declarations.ts:58](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L58)

***

### uri

> **uri**: `string`

Defined in: [http-core/src/declarations.ts:56](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/declarations.ts#L56)

[**HTTP Core Documentation v0.0.34**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [http-core/src/declarations.ts:55](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L55)

Describes a route definition, including its URI, method, and parameters.

## Properties

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [http-core/src/declarations.ts:60](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L60)

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

Defined in: [http-core/src/declarations.ts:57](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L57)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [http-core/src/declarations.ts:58](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L58)

***

### uri

> **uri**: `string`

Defined in: [http-core/src/declarations.ts:56](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L56)

## Methods

### getOptions()

> **getOptions**\<`TReturn`\>(`keys`): `Record`\<`string`, `TReturn`\>

Defined in: [http-core/src/declarations.ts:59](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/declarations.ts#L59)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### keys

`string`[]

#### Returns

`Record`\<`string`, `TReturn`\>

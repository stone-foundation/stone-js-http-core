[**HTTP Core Documentation v0.0.3**](../../README.md)

***

[HTTP Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

## Properties

### getDomain()

> **getDomain**: () => `string`

#### Returns

`string`

#### Defined in

[declarations.ts:26](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/declarations.ts#L26)

***

### methods

> **methods**: [`HttpMethods`](../enumerations/HttpMethods.md)[]

#### Defined in

[declarations.ts:25](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/declarations.ts#L25)

***

### parameter()

> **parameter**: (`key`) => `string`

#### Parameters

##### key

`string`

#### Returns

`string`

#### Defined in

[declarations.ts:27](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/declarations.ts#L27)

***

### parameters()

> **parameters**: (`key`?, `fallback`?) => `Record`\<`string`, `unknown`\>

#### Parameters

##### key?

`string`

##### fallback?

`string`

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[declarations.ts:28](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/declarations.ts#L28)

***

### uri

> **uri**: `string`

#### Defined in

[declarations.ts:24](https://github.com/stonemjs/http-core/blob/33a82b77e98ade423889148c13f25ccd40b75c8a/src/declarations.ts#L24)

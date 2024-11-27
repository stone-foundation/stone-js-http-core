[**HTTP Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

## Properties

### getDomain()

> **getDomain**: () => `string`

#### Returns

`string`

#### Defined in

[declarations.ts:26](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/declarations.ts#L26)

***

### methods

> **methods**: [`HttpMethods`](../enumerations/HttpMethods.md)[]

#### Defined in

[declarations.ts:25](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/declarations.ts#L25)

***

### parameter()

> **parameter**: (`key`) => `string`

#### Parameters

• **key**: `string`

#### Returns

`string`

#### Defined in

[declarations.ts:27](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/declarations.ts#L27)

***

### parameters()

> **parameters**: (`key`?, `fallback`?) => `Record`\<`string`, `unknown`\>

#### Parameters

• **key?**: `string`

• **fallback?**: `string`

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[declarations.ts:28](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/declarations.ts#L28)

***

### uri

> **uri**: `string`

#### Defined in

[declarations.ts:24](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/declarations.ts#L24)

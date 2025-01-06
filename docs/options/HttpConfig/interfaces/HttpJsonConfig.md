[**HTTP Core Documentation v0.0.32**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpJsonConfig

# Interface: HttpJsonConfig

Defined in: [src/options/HttpConfig.ts:42](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L42)

## Properties

### escape

> **escape**: `boolean`

Defined in: [src/options/HttpConfig.ts:50](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L50)

Whether to escape HTML characters in JSON output.

***

### replacer()?

> `optional` **replacer**: (`this`, `key`, `value`) => `unknown`

Defined in: [src/options/HttpConfig.ts:54](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L54)

A custom replacer function for JSON serialization.

#### Parameters

##### this

`unknown`

##### key

`string`

##### value

`unknown`

#### Returns

`unknown`

***

### spaces

> **spaces**: `string`

Defined in: [src/options/HttpConfig.ts:46](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L46)

The number of spaces to use for formatting JSON output.

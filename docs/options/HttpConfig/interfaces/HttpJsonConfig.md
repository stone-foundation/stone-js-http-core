[**HTTP Core Documentation v0.0.2**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpJsonConfig

# Interface: HttpJsonConfig

## Properties

### escape

> **escape**: `boolean`

Whether to escape HTML characters in JSON output.

#### Defined in

[options/HttpConfig.ts:48](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/options/HttpConfig.ts#L48)

***

### replacer()?

> `optional` **replacer**: (`this`, `key`, `value`) => `unknown`

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

#### Defined in

[options/HttpConfig.ts:52](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/options/HttpConfig.ts#L52)

***

### spaces

> **spaces**: `string`

The number of spaces to use for formatting JSON output.

#### Defined in

[options/HttpConfig.ts:44](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/options/HttpConfig.ts#L44)

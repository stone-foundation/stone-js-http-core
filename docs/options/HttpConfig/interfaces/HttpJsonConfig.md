[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpJsonConfig

# Interface: HttpJsonConfig

Defined in: [http-core/src/options/HttpConfig.ts:43](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L43)

## Properties

### escape

> **escape**: `boolean`

Defined in: [http-core/src/options/HttpConfig.ts:51](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L51)

Whether to escape HTML characters in JSON output.

***

### replacer()?

> `optional` **replacer**: (`this`, `key`, `value`) => `unknown`

Defined in: [http-core/src/options/HttpConfig.ts:55](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L55)

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

Defined in: [http-core/src/options/HttpConfig.ts:47](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L47)

The number of spaces to use for formatting JSON output.

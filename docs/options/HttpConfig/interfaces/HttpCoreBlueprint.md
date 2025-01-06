[**HTTP Core Documentation v0.0.32**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpCoreBlueprint

# Interface: HttpCoreBlueprint

Defined in: [src/options/HttpConfig.ts:191](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L191)

Represents the core HTTP blueprint for the application.

## Extends

- `StoneBlueprint`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: [`HttpCoreConfig`](HttpCoreConfig.md)

Defined in: [src/options/HttpConfig.ts:192](https://github.com/stonemjs/http-core/blob/680e946aeb5100b42b4836417719aba730586478/src/options/HttpConfig.ts#L192)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

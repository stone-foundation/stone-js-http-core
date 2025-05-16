[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [options/HttpConfig](../README.md) / HttpCoreBlueprint

# Interface: HttpCoreBlueprint

Defined in: [http-core/src/options/HttpConfig.ts:204](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L204)

Represents the core HTTP blueprint for the application.

## Extends

- `StoneBlueprint`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: [`HttpCoreConfig`](HttpCoreConfig.md)

Defined in: [http-core/src/options/HttpConfig.ts:205](https://github.com/stonemjs/http-core/blob/16d44b2a21e4f4bf5742d6461b8beebcd7cc1d0b/src/options/HttpConfig.ts#L205)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

[**HTTP Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../../modules.md) / [cookies/utils](../README.md) / deserializeCookieValue

# Function: deserializeCookieValue()

> **deserializeCookieValue**(`name`, `rawValue`, `options`, `secret`?): [`Cookie`](../../Cookie/classes/Cookie.md)

Deserialize the cookie value.

## Parameters

• **name**: `string`

Cookie name.

• **rawValue**: `unknown`

Cookie raw value.

• **options**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md)

• **secret?**: `string`

Optional secret for unsigning.

## Returns

[`Cookie`](../../Cookie/classes/Cookie.md)

A new cookie instance.

## Defined in

[cookies/utils.ts:73](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/utils.ts#L73)

[**HTTP Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Create a CookieCollection.

#### Parameters

• **cookie?**: `string`

String cookie from header.

• **options?**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookies options.

• **secret?**: `string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

#### Defined in

[cookies/CookieCollection.ts:32](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L32)

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Add a cookie to the collection.

#### Parameters

• **name**: `string`

Cookie name.

• **value**: `unknown`

Cookie value.

• **options**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:45](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L45)

***

### all()

> **all**\<`S`\>(`serialize`): `S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

Get all cookies in the collection.

#### Type Parameters

• **S** *extends* `boolean`

#### Parameters

• **serialize**: `S` = `...`

If true, serialize the cookies.

#### Returns

`S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

#### Defined in

[cookies/CookieCollection.ts:104](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L104)

***

### clear()

> **clear**(`force`): `this`

Clear all cookies from the collection.

#### Parameters

• **force**: `boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:123](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L123)

***

### get()

> **get**(`name`, `fallback`?): `undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Get a cookie from the collection.

#### Parameters

• **name**: `string`

Cookie name.

• **fallback?**: [`Cookie`](../../Cookie/classes/Cookie.md)

Fallback value if the cookie does not exist.

#### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

#### Defined in

[cookies/CookieCollection.ts:71](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L71)

***

### has()

> **has**(`name`): `boolean`

Check if the collection has a cookie.

#### Parameters

• **name**: `string`

Cookie name.

#### Returns

`boolean`

#### Defined in

[cookies/CookieCollection.ts:80](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L80)

***

### isEmpty()

> **isEmpty**(): `boolean`

Check if the collection is empty.

#### Returns

`boolean`

#### Defined in

[cookies/CookieCollection.ts:114](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L114)

***

### remove()

> **remove**(`name`, `force`): `this`

Remove a cookie from the collection.

#### Parameters

• **name**: `string`

Cookie name to remove.

• **force**: `boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:90](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L90)

***

### secure()

> **secure**(`value`): `this`

Set secure flag for all cookies in the collection.

#### Parameters

• **value**: `boolean` = `false`

Whether the cookies are secure.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:137](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L137)

***

### setOptions()

> **setOptions**(`options`): `this`

Set options for all cookies in the collection.

#### Parameters

• **options**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:157](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L157)

***

### setSecret()

> **setSecret**(`value`): `this`

Set secret for signing and unsigning cookies.

#### Parameters

• **value**: `string`

Secret value.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:147](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L147)

***

### update()

> **update**(`name`, `value`, `options`): `this`

Update a cookie in the collection.

#### Parameters

• **name**: `string`

Cookie name.

• **value**: `unknown`

New cookie value.

• **options**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:57](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L57)

***

### create()

> `static` **create**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Create a CookieCollection.

#### Parameters

• **cookie?**: `string`

String cookie from header.

• **options?**: [`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookies options.

• **secret?**: `string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

#### Defined in

[cookies/CookieCollection.ts:21](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/cookies/CookieCollection.ts#L21)

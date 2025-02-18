[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Defined in: [http-core/src/cookies/CookieCollection.ts:10](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L10)

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:33](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L33)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:46](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L46)

Add a cookie to the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

***

### all()

> **all**\<`S`\>(`serialize`): `S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

Defined in: [http-core/src/cookies/CookieCollection.ts:151](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L151)

Get all cookies in the collection.

#### Type Parameters

• **S** *extends* `boolean`

#### Parameters

##### serialize

`S` = `...`

If true, serialize the cookies.

#### Returns

`S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

***

### clear()

> **clear**(`force`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:170](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L170)

Clear all cookies from the collection.

#### Parameters

##### force

`boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

***

### get()

Get a cookie from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`): `undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:72](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L72)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`, `fallback`): [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:81](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L81)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

###### fallback

[`Cookie`](../../Cookie/classes/Cookie.md)

Fallback value if the cookie does not exist.

##### Returns

[`Cookie`](../../Cookie/classes/Cookie.md)

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### getValue()

Get a cookie value from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`): `undefined` \| `ValueType`

Defined in: [http-core/src/cookies/CookieCollection.ts:100](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L100)

Get a cookie value from the collection.

##### Type Parameters

• **ValueType** = `unknown`

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| `ValueType`

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`, `fallback`): `ValueType`

Defined in: [http-core/src/cookies/CookieCollection.ts:109](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L109)

Get a cookie value from the collection.

##### Type Parameters

• **ValueType** = `unknown`

##### Parameters

###### name

`string`

Cookie name.

###### fallback

`ValueType`

Fallback value if the cookie does not exist.

##### Returns

`ValueType`

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### has()

> **has**(`name`): `boolean`

Defined in: [http-core/src/cookies/CookieCollection.ts:127](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L127)

Check if the collection has a cookie.

#### Parameters

##### name

`string`

Cookie name.

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [http-core/src/cookies/CookieCollection.ts:161](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L161)

Check if the collection is empty.

#### Returns

`boolean`

***

### remove()

> **remove**(`name`, `force`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:137](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L137)

Remove a cookie from the collection.

#### Parameters

##### name

`string`

Cookie name to remove.

##### force

`boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

***

### secure()

> **secure**(`value`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:184](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L184)

Set secure flag for all cookies in the collection.

#### Parameters

##### value

`boolean` = `false`

Whether the cookies are secure.

#### Returns

`this`

***

### setOptions()

> **setOptions**(`options`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:204](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L204)

Set options for all cookies in the collection.

#### Parameters

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

***

### setSecret()

> **setSecret**(`value`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:194](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L194)

Set secret for signing and unsigning cookies.

#### Parameters

##### value

`string`

Secret value.

#### Returns

`this`

***

### update()

> **update**(`name`, `value`, `options`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:58](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L58)

Update a cookie in the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

***

### create()

> `static` **create**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:22](https://github.com/stonemjs/http-core/blob/6ce19e93bd5f8b28975217f6c01558c07c7c03c7/src/cookies/CookieCollection.ts#L22)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

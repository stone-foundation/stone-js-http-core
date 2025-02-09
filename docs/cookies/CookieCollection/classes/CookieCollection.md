[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Defined in: [http-core/src/cookies/CookieCollection.ts:10](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L10)

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:33](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L33)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:46](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L46)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:120](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L120)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:139](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L139)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:71](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L71)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`, `fallback`): [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [http-core/src/cookies/CookieCollection.ts:79](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L79)

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

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### has()

> **has**(`name`): `boolean`

Defined in: [http-core/src/cookies/CookieCollection.ts:96](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L96)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:130](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L130)

Check if the collection is empty.

#### Returns

`boolean`

***

### remove()

> **remove**(`name`, `force`): `this`

Defined in: [http-core/src/cookies/CookieCollection.ts:106](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L106)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:153](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L153)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:173](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L173)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:163](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L163)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:58](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L58)

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

Defined in: [http-core/src/cookies/CookieCollection.ts:22](https://github.com/stonemjs/http-core/blob/1848d2cc8e9419d9e370ae707c528a45d3c2ac5a/src/cookies/CookieCollection.ts#L22)

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

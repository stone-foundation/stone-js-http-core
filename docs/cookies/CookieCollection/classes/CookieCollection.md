[**HTTP Core Documentation v0.0.0**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

#### Defined in

[cookies/CookieCollection.ts:33](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L33)

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Add a cookie to the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:46](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L46)

***

### all()

> **all**\<`S`\>(`serialize`): `S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

Get all cookies in the collection.

#### Type Parameters

• **S** *extends* `boolean`

#### Parameters

##### serialize

`S` = `...`

If true, serialize the cookies.

#### Returns

`S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

#### Defined in

[cookies/CookieCollection.ts:105](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L105)

***

### clear()

> **clear**(`force`): `this`

Clear all cookies from the collection.

#### Parameters

##### force

`boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:124](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L124)

***

### get()

> **get**(`name`, `fallback`?): `undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Get a cookie from the collection.

#### Parameters

##### name

`string`

Cookie name.

##### fallback?

[`Cookie`](../../Cookie/classes/Cookie.md)

Fallback value if the cookie does not exist.

#### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

#### Defined in

[cookies/CookieCollection.ts:72](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L72)

***

### has()

> **has**(`name`): `boolean`

Check if the collection has a cookie.

#### Parameters

##### name

`string`

Cookie name.

#### Returns

`boolean`

#### Defined in

[cookies/CookieCollection.ts:81](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L81)

***

### isEmpty()

> **isEmpty**(): `boolean`

Check if the collection is empty.

#### Returns

`boolean`

#### Defined in

[cookies/CookieCollection.ts:115](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L115)

***

### remove()

> **remove**(`name`, `force`): `this`

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

#### Defined in

[cookies/CookieCollection.ts:91](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L91)

***

### secure()

> **secure**(`value`): `this`

Set secure flag for all cookies in the collection.

#### Parameters

##### value

`boolean` = `false`

Whether the cookies are secure.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:138](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L138)

***

### setOptions()

> **setOptions**(`options`): `this`

Set options for all cookies in the collection.

#### Parameters

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:158](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L158)

***

### setSecret()

> **setSecret**(`value`): `this`

Set secret for signing and unsigning cookies.

#### Parameters

##### value

`string`

Secret value.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:148](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L148)

***

### update()

> **update**(`name`, `value`, `options`): `this`

Update a cookie in the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

#### Defined in

[cookies/CookieCollection.ts:58](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L58)

***

### create()

> `static` **create**(`cookie`?, `options`?, `secret`?): [`CookieCollection`](CookieCollection.md)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../options/HttpConfig/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

[`CookieCollection`](CookieCollection.md)

#### Defined in

[cookies/CookieCollection.ts:22](https://github.com/stonemjs/http-core/blob/a162480c16327760396238c341daab61793d5440/src/cookies/CookieCollection.ts#L22)

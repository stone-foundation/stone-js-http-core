[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [file/File](../README.md) / File

# Class: File

Defined in: [src/file/File.ts:24](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L24)

Class representing a File.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`UploadedFile`](../../UploadedFile/classes/UploadedFile.md)

## Constructors

### new File()

> `protected` **new File**(`path`, `checkPath`): [`File`](File.md)

Defined in: [src/file/File.ts:45](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L45)

Create a File.

#### Parameters

##### path

`string`

The file path.

##### checkPath

`boolean` = `true`

Whether to check if the file path is valid.

#### Returns

[`File`](File.md)

## Methods

### edit()

> **edit**(`callback`): `this`

Defined in: [src/file/File.ts:85](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L85)

Edit file content.

#### Parameters

##### callback

(`content`) => `string`

The callback function to modify the file content.

#### Returns

`this`

The current File instance.

***

### exists()

> **exists**(): `boolean`

Defined in: [src/file/File.ts:272](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L272)

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### getAbsolutePath()

> **getAbsolutePath**(`root`): `string`

Defined in: [src/file/File.ts:189](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L189)

Get the absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The absolute file path.

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:245](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L245)

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

***

### getBasename()

> **getBasename**(`exclude`): `string`

Defined in: [src/file/File.ts:209](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L209)

Get the basename of the file.

#### Parameters

##### exclude

`string` = `''`

The file extension to exclude from the basename.

#### Returns

`string`

The basename of the file.

***

### getContent()

> **getContent**(): `string`

Defined in: [src/file/File.ts:57](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L57)

Get file content.

#### Returns

`string`

The content of the file as a string.

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:263](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L263)

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

***

### getDirname()

> **getDirname**(): `string`

Defined in: [src/file/File.ts:161](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L161)

Get the directory name of the file.

#### Returns

`string`

The directory name.

***

### getEncodedAbsolutePath()

> **getEncodedAbsolutePath**(`root`): `string`

Defined in: [src/file/File.ts:199](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L199)

Get the encoded absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The encoded absolute file path.

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Defined in: [src/file/File.ts:179](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L179)

Get the encoded file path.

#### Returns

`string`

The encoded file path.

***

### getExtension()

> **getExtension**(): `string`

Defined in: [src/file/File.ts:236](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L236)

Get the file extension.

#### Returns

`string`

The file extension.

***

### getFilename()

> **getFilename**(): `string`

Defined in: [src/file/File.ts:218](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L218)

Get the filename of the file.

#### Returns

`string`

The filename of the file.

***

### getHashedContent()

> **getHashedContent**(`algo`): `string`

Defined in: [src/file/File.ts:131](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L131)

Get the hashed content of the file.

#### Parameters

##### algo

`string` = `'sha256'`

The hashing algorithm to use.

#### Returns

`string`

The hashed content of the file as a hex string.

***

### getMimeType()

> **getMimeType**(`fallback`?): `undefined` \| `string`

Defined in: [src/file/File.ts:152](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L152)

Get the MIME type of the file.

#### Parameters

##### fallback?

`string`

A fallback MIME type if detection fails.

#### Returns

`undefined` \| `string`

The MIME type of the file.

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:254](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L254)

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

***

### getName()

> **getName**(): `string`

Defined in: [src/file/File.ts:227](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L227)

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

***

### getPath()

> **getPath**(): `string`

Defined in: [src/file/File.ts:170](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L170)

Get the file path.

#### Returns

`string`

The file path.

***

### getSize()

> **getSize**(`formatted`): `undefined` \| `string` \| `number` \| `bigint`

Defined in: [src/file/File.ts:141](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L141)

Get file size.

#### Parameters

##### formatted

`boolean` = `false`

Whether to return the file size as a formatted string.

#### Returns

`undefined` \| `string` \| `number` \| `bigint`

The file size as a string or number.

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Defined in: [src/file/File.ts:308](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L308)

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

***

### isDir()

> **isDir**(): `boolean`

Defined in: [src/file/File.ts:281](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L281)

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

***

### isExecutable()

> **isExecutable**(): `boolean`

Defined in: [src/file/File.ts:345](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L345)

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

***

### isFile()

> **isFile**(): `boolean`

Defined in: [src/file/File.ts:290](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L290)

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

***

### isLink()

> **isLink**(): `boolean`

Defined in: [src/file/File.ts:299](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L299)

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

***

### isReadable()

> **isReadable**(): `boolean`

Defined in: [src/file/File.ts:331](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L331)

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

***

### isWritable()

> **isWritable**(): `boolean`

Defined in: [src/file/File.ts:317](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L317)

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

***

### move()

> **move**(`directory`, `name`?): [`File`](File.md)

Defined in: [src/file/File.ts:97](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L97)

Move file to a new directory.

#### Parameters

##### directory

`string`

The target directory.

##### name?

`string`

The new name for the file.

#### Returns

[`File`](File.md)

The new File instance representing the moved file.

#### Throws

FileError if the file could not be moved.

***

### remove()

> **remove**(`force`): `this`

Defined in: [src/file/File.ts:116](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L116)

Remove file.

#### Parameters

##### force

`boolean` = `false`

Whether to forcefully remove the file.

#### Returns

`this`

The current File instance.

***

### write()

> **write**(`content`): `this`

Defined in: [src/file/File.ts:70](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L70)

Write content to file.

#### Parameters

##### content

`string`

The content to write to the file.

#### Returns

`this`

The current File instance.

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](File.md)

Defined in: [src/file/File.ts:35](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L35)

Create a File.

#### Parameters

##### path

`string`

The file path.

##### checkPath

`boolean` = `true`

Whether to check if the file path is valid.

#### Returns

[`File`](File.md)

A new File instance.

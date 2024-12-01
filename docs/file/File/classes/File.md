[**HTTP Core Documentation v0.0.2**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [file/File](../README.md) / File

# Class: File

Class representing a File.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`UploadedFile`](../../UploadedFile/classes/UploadedFile.md)

## Constructors

### new File()

> `protected` **new File**(`path`, `checkPath`): [`File`](File.md)

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

#### Defined in

[file/File.ts:45](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L45)

## Methods

### edit()

> **edit**(`callback`): `this`

Edit file content.

#### Parameters

##### callback

(`content`) => `string`

The callback function to modify the file content.

#### Returns

`this`

The current File instance.

#### Defined in

[file/File.ts:85](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L85)

***

### exists()

> **exists**(): `boolean`

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Defined in

[file/File.ts:272](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L272)

***

### getAbsolutePath()

> **getAbsolutePath**(`root`): `string`

Get the absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The absolute file path.

#### Defined in

[file/File.ts:189](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L189)

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

#### Defined in

[file/File.ts:245](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L245)

***

### getBasename()

> **getBasename**(`exclude`): `string`

Get the basename of the file.

#### Parameters

##### exclude

`string` = `''`

The file extension to exclude from the basename.

#### Returns

`string`

The basename of the file.

#### Defined in

[file/File.ts:209](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L209)

***

### getContent()

> **getContent**(): `string`

Get file content.

#### Returns

`string`

The content of the file as a string.

#### Defined in

[file/File.ts:57](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L57)

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

#### Defined in

[file/File.ts:263](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L263)

***

### getDirname()

> **getDirname**(): `string`

Get the directory name of the file.

#### Returns

`string`

The directory name.

#### Defined in

[file/File.ts:161](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L161)

***

### getEncodedAbsolutePath()

> **getEncodedAbsolutePath**(`root`): `string`

Get the encoded absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The encoded absolute file path.

#### Defined in

[file/File.ts:199](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L199)

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Defined in

[file/File.ts:179](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L179)

***

### getExtension()

> **getExtension**(): `string`

Get the file extension.

#### Returns

`string`

The file extension.

#### Defined in

[file/File.ts:236](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L236)

***

### getFilename()

> **getFilename**(): `string`

Get the filename of the file.

#### Returns

`string`

The filename of the file.

#### Defined in

[file/File.ts:218](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L218)

***

### getHashedContent()

> **getHashedContent**(`algo`): `string`

Get the hashed content of the file.

#### Parameters

##### algo

`string` = `'sha256'`

The hashing algorithm to use.

#### Returns

`string`

The hashed content of the file as a hex string.

#### Defined in

[file/File.ts:131](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L131)

***

### getMimeType()

> **getMimeType**(`fallback`?): `undefined` \| `string`

Get the MIME type of the file.

#### Parameters

##### fallback?

`string`

A fallback MIME type if detection fails.

#### Returns

`undefined` \| `string`

The MIME type of the file.

#### Defined in

[file/File.ts:152](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L152)

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

#### Defined in

[file/File.ts:254](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L254)

***

### getName()

> **getName**(): `string`

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

#### Defined in

[file/File.ts:227](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L227)

***

### getPath()

> **getPath**(): `string`

Get the file path.

#### Returns

`string`

The file path.

#### Defined in

[file/File.ts:170](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L170)

***

### getSize()

> **getSize**(`formatted`): `undefined` \| `string` \| `number` \| `bigint`

Get file size.

#### Parameters

##### formatted

`boolean` = `false`

Whether to return the file size as a formatted string.

#### Returns

`undefined` \| `string` \| `number` \| `bigint`

The file size as a string or number.

#### Defined in

[file/File.ts:141](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L141)

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

#### Defined in

[file/File.ts:308](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L308)

***

### isDir()

> **isDir**(): `boolean`

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

#### Defined in

[file/File.ts:281](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L281)

***

### isExecutable()

> **isExecutable**(): `boolean`

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

#### Defined in

[file/File.ts:345](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L345)

***

### isFile()

> **isFile**(): `boolean`

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

#### Defined in

[file/File.ts:290](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L290)

***

### isLink()

> **isLink**(): `boolean`

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

#### Defined in

[file/File.ts:299](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L299)

***

### isReadable()

> **isReadable**(): `boolean`

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

#### Defined in

[file/File.ts:331](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L331)

***

### isWritable()

> **isWritable**(): `boolean`

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

#### Defined in

[file/File.ts:317](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L317)

***

### move()

> **move**(`directory`, `name`?): [`File`](File.md)

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

#### Defined in

[file/File.ts:97](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L97)

***

### remove()

> **remove**(`force`): `this`

Remove file.

#### Parameters

##### force

`boolean` = `false`

Whether to forcefully remove the file.

#### Returns

`this`

The current File instance.

#### Defined in

[file/File.ts:116](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L116)

***

### write()

> **write**(`content`): `this`

Write content to file.

#### Parameters

##### content

`string`

The content to write to the file.

#### Returns

`this`

The current File instance.

#### Defined in

[file/File.ts:70](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L70)

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](File.md)

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

#### Defined in

[file/File.ts:35](https://github.com/stonemjs/http-core/blob/ed7c2187bd85b6877da7cd9f8c94448716446e07/src/file/File.ts#L35)

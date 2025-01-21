[**HTTP Core Documentation v0.0.34**](../../../README.md)

***

[HTTP Core Documentation](../../../modules.md) / [file/UploadedFile](../README.md) / UploadedFile

# Class: UploadedFile

Defined in: [src/file/UploadedFile.ts:11](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L11)

Class representing an UploadedFile.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`File`](../../File/classes/File.md)

## Constructors

### new UploadedFile()

> **new UploadedFile**(`path`, `originalName`, `mimeType`?, `checkPath`?): [`UploadedFile`](UploadedFile.md)

Defined in: [src/file/UploadedFile.ts:34](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L34)

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

[`UploadedFile`](UploadedFile.md)

#### Overrides

[`File`](../../File/classes/File.md).[`constructor`](../../File/classes/File.md#constructors)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`edit`](../../File/classes/File.md#edit)

***

### exists()

> **exists**(): `boolean`

Defined in: [src/file/File.ts:272](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L272)

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`exists`](../../File/classes/File.md#exists)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getAbsolutePath`](../../File/classes/File.md#getabsolutepath)

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:245](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L245)

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getATime`](../../File/classes/File.md#getatime)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getBasename`](../../File/classes/File.md#getbasename)

***

### getClientMimeType()

> **getClientMimeType**(): `string`

Defined in: [src/file/UploadedFile.ts:63](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L63)

Get the MIME type of the uploaded file.

#### Returns

`string`

The MIME type of the file.

***

### getClientOriginalExtension()

> **getClientOriginalExtension**(): `string`

Defined in: [src/file/UploadedFile.ts:54](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L54)

Get the original file extension of the uploaded file.

#### Returns

`string`

The original file extension.

***

### getClientOriginalName()

> **getClientOriginalName**(): `string`

Defined in: [src/file/UploadedFile.ts:45](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L45)

Get the original name of the uploaded file.

#### Returns

`string`

The original name of the file.

***

### getContent()

> **getContent**(): `string`

Defined in: [src/file/File.ts:57](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L57)

Get file content.

#### Returns

`string`

The content of the file as a string.

#### Inherited from

[`File`](../../File/classes/File.md).[`getContent`](../../File/classes/File.md#getcontent)

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:263](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L263)

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getCTime`](../../File/classes/File.md#getctime)

***

### getDirname()

> **getDirname**(): `string`

Defined in: [src/file/File.ts:161](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L161)

Get the directory name of the file.

#### Returns

`string`

The directory name.

#### Inherited from

[`File`](../../File/classes/File.md).[`getDirname`](../../File/classes/File.md#getdirname)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedAbsolutePath`](../../File/classes/File.md#getencodedabsolutepath)

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Defined in: [src/file/File.ts:179](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L179)

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedPath`](../../File/classes/File.md#getencodedpath)

***

### getExtension()

> **getExtension**(): `string`

Defined in: [src/file/File.ts:236](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L236)

Get the file extension.

#### Returns

`string`

The file extension.

#### Inherited from

[`File`](../../File/classes/File.md).[`getExtension`](../../File/classes/File.md#getextension)

***

### getFilename()

> **getFilename**(): `string`

Defined in: [src/file/File.ts:218](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L218)

Get the filename of the file.

#### Returns

`string`

The filename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getFilename`](../../File/classes/File.md#getfilename)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getHashedContent`](../../File/classes/File.md#gethashedcontent)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Defined in: [src/file/File.ts:254](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L254)

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getMTime`](../../File/classes/File.md#getmtime)

***

### getName()

> **getName**(): `string`

Defined in: [src/file/File.ts:227](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L227)

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getName`](../../File/classes/File.md#getname)

***

### getPath()

> **getPath**(): `string`

Defined in: [src/file/File.ts:170](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L170)

Get the file path.

#### Returns

`string`

The file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getPath`](../../File/classes/File.md#getpath)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getSize`](../../File/classes/File.md#getsize)

***

### guessClientExtension()

> **guessClientExtension**(): `undefined` \| `string`

Defined in: [src/file/UploadedFile.ts:72](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L72)

Guess the client file extension based on the MIME type.

#### Returns

`undefined` \| `string`

The guessed file extension.

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Defined in: [src/file/File.ts:308](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L308)

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isAbsolute`](../../File/classes/File.md#isabsolute)

***

### isDir()

> **isDir**(): `boolean`

Defined in: [src/file/File.ts:281](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L281)

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isDir`](../../File/classes/File.md#isdir)

***

### isExecutable()

> **isExecutable**(): `boolean`

Defined in: [src/file/File.ts:345](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L345)

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isExecutable`](../../File/classes/File.md#isexecutable)

***

### isFile()

> **isFile**(): `boolean`

Defined in: [src/file/File.ts:290](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L290)

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isFile`](../../File/classes/File.md#isfile)

***

### isLink()

> **isLink**(): `boolean`

Defined in: [src/file/File.ts:299](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L299)

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isLink`](../../File/classes/File.md#islink)

***

### isReadable()

> **isReadable**(): `boolean`

Defined in: [src/file/File.ts:331](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L331)

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isReadable`](../../File/classes/File.md#isreadable)

***

### isValid()

> **isValid**(): `boolean`

Defined in: [src/file/UploadedFile.ts:81](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L81)

Check if the uploaded file is valid.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### isWritable()

> **isWritable**(): `boolean`

Defined in: [src/file/File.ts:317](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/File.ts#L317)

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isWritable`](../../File/classes/File.md#iswritable)

***

### move()

> **move**(`directory`, `name`?): `this`

Defined in: [src/file/UploadedFile.ts:93](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L93)

Move the uploaded file to a new directory.

#### Parameters

##### directory

`string`

The target directory.

##### name?

`string`

The new name for the file.

#### Returns

`this`

The current UploadedFile instance.

#### Throws

FileError if the file is not valid.

#### Overrides

[`File`](../../File/classes/File.md).[`move`](../../File/classes/File.md#move)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`remove`](../../File/classes/File.md#remove)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`write`](../../File/classes/File.md#write)

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](../../File/classes/File.md)

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

[`File`](../../File/classes/File.md)

A new File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`create`](../../File/classes/File.md#create)

***

### createFile()

> `static` **createFile**(`path`, `originalName`, `mimeType`?, `checkPath`?): [`UploadedFile`](UploadedFile.md)

Defined in: [src/file/UploadedFile.ts:23](https://github.com/stonemjs/http-core/blob/424f80742be298e137f118c0e2e80266a8a78f3c/src/file/UploadedFile.ts#L23)

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

[`UploadedFile`](UploadedFile.md)

A new UploadedFile instance.

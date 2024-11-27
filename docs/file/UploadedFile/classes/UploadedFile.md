[**HTTP Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[HTTP Core Documentation v0.0.0](../../../modules.md) / [file/UploadedFile](../README.md) / UploadedFile

# Class: UploadedFile

Class representing an UploadedFile.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`File`](../../File/classes/File.md)

## Constructors

### new UploadedFile()

> **new UploadedFile**(`path`, `originalName`, `mimeType`?): [`UploadedFile`](UploadedFile.md)

Create an UploadedFile.

#### Parameters

• **path**: `string`

The file path.

• **originalName**: `string`

The original name of the uploaded file.

• **mimeType?**: `string`

The MIME type of the file.

#### Returns

[`UploadedFile`](UploadedFile.md)

#### Overrides

[`File`](../../File/classes/File.md).[`constructor`](../../File/classes/File.md#constructors)

#### Defined in

[file/UploadedFile.ts:34](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L34)

## Methods

### edit()

> **edit**(`callback`): `this`

Edit file content.

#### Parameters

• **callback**

The callback function to modify the file content.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`edit`](../../File/classes/File.md#edit)

#### Defined in

[file/File.ts:85](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L85)

***

### exists()

> **exists**(): `boolean`

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`exists`](../../File/classes/File.md#exists)

#### Defined in

[file/File.ts:272](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L272)

***

### getAbsolutePath()

> **getAbsolutePath**(`root`): `string`

Get the absolute file path.

#### Parameters

• **root**: `string` = `''`

The root directory to resolve from.

#### Returns

`string`

The absolute file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getAbsolutePath`](../../File/classes/File.md#getabsolutepath)

#### Defined in

[file/File.ts:189](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L189)

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getATime`](../../File/classes/File.md#getatime)

#### Defined in

[file/File.ts:245](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L245)

***

### getBasename()

> **getBasename**(`exclude`): `string`

Get the basename of the file.

#### Parameters

• **exclude**: `string` = `''`

The file extension to exclude from the basename.

#### Returns

`string`

The basename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getBasename`](../../File/classes/File.md#getbasename)

#### Defined in

[file/File.ts:209](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L209)

***

### getClientMimeType()

> **getClientMimeType**(): `string`

Get the MIME type of the uploaded file.

#### Returns

`string`

The MIME type of the file.

#### Defined in

[file/UploadedFile.ts:63](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L63)

***

### getClientOriginalExtension()

> **getClientOriginalExtension**(): `string`

Get the original file extension of the uploaded file.

#### Returns

`string`

The original file extension.

#### Defined in

[file/UploadedFile.ts:54](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L54)

***

### getClientOriginalName()

> **getClientOriginalName**(): `string`

Get the original name of the uploaded file.

#### Returns

`string`

The original name of the file.

#### Defined in

[file/UploadedFile.ts:45](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L45)

***

### getContent()

> **getContent**(): `string`

Get file content.

#### Returns

`string`

The content of the file as a string.

#### Inherited from

[`File`](../../File/classes/File.md).[`getContent`](../../File/classes/File.md#getcontent)

#### Defined in

[file/File.ts:57](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L57)

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getCTime`](../../File/classes/File.md#getctime)

#### Defined in

[file/File.ts:263](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L263)

***

### getDirname()

> **getDirname**(): `string`

Get the directory name of the file.

#### Returns

`string`

The directory name.

#### Inherited from

[`File`](../../File/classes/File.md).[`getDirname`](../../File/classes/File.md#getdirname)

#### Defined in

[file/File.ts:161](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L161)

***

### getEncodedAbsolutePath()

> **getEncodedAbsolutePath**(`root`): `string`

Get the encoded absolute file path.

#### Parameters

• **root**: `string` = `''`

The root directory to resolve from.

#### Returns

`string`

The encoded absolute file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedAbsolutePath`](../../File/classes/File.md#getencodedabsolutepath)

#### Defined in

[file/File.ts:199](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L199)

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedPath`](../../File/classes/File.md#getencodedpath)

#### Defined in

[file/File.ts:179](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L179)

***

### getExtension()

> **getExtension**(): `string`

Get the file extension.

#### Returns

`string`

The file extension.

#### Inherited from

[`File`](../../File/classes/File.md).[`getExtension`](../../File/classes/File.md#getextension)

#### Defined in

[file/File.ts:236](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L236)

***

### getFilename()

> **getFilename**(): `string`

Get the filename of the file.

#### Returns

`string`

The filename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getFilename`](../../File/classes/File.md#getfilename)

#### Defined in

[file/File.ts:218](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L218)

***

### getHashedContent()

> **getHashedContent**(`algo`): `string`

Get the hashed content of the file.

#### Parameters

• **algo**: `string` = `'sha256'`

The hashing algorithm to use.

#### Returns

`string`

The hashed content of the file as a hex string.

#### Inherited from

[`File`](../../File/classes/File.md).[`getHashedContent`](../../File/classes/File.md#gethashedcontent)

#### Defined in

[file/File.ts:131](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L131)

***

### getMimeType()

> **getMimeType**(`fallback`?): `undefined` \| `string`

Get the MIME type of the file.

#### Parameters

• **fallback?**: `string`

A fallback MIME type if detection fails.

#### Returns

`undefined` \| `string`

The MIME type of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

#### Defined in

[file/File.ts:152](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L152)

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getMTime`](../../File/classes/File.md#getmtime)

#### Defined in

[file/File.ts:254](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L254)

***

### getName()

> **getName**(): `string`

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getName`](../../File/classes/File.md#getname)

#### Defined in

[file/File.ts:227](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L227)

***

### getPath()

> **getPath**(): `string`

Get the file path.

#### Returns

`string`

The file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getPath`](../../File/classes/File.md#getpath)

#### Defined in

[file/File.ts:170](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L170)

***

### getSize()

> **getSize**(`formatted`): `undefined` \| `string` \| `number` \| `bigint`

Get file size.

#### Parameters

• **formatted**: `boolean` = `false`

Whether to return the file size as a formatted string.

#### Returns

`undefined` \| `string` \| `number` \| `bigint`

The file size as a string or number.

#### Inherited from

[`File`](../../File/classes/File.md).[`getSize`](../../File/classes/File.md#getsize)

#### Defined in

[file/File.ts:141](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L141)

***

### guessClientExtension()

> **guessClientExtension**(): `undefined` \| `string`

Guess the client file extension based on the MIME type.

#### Returns

`undefined` \| `string`

The guessed file extension.

#### Defined in

[file/UploadedFile.ts:72](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L72)

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isAbsolute`](../../File/classes/File.md#isabsolute)

#### Defined in

[file/File.ts:308](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L308)

***

### isDir()

> **isDir**(): `boolean`

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isDir`](../../File/classes/File.md#isdir)

#### Defined in

[file/File.ts:281](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L281)

***

### isExecutable()

> **isExecutable**(): `boolean`

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isExecutable`](../../File/classes/File.md#isexecutable)

#### Defined in

[file/File.ts:345](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L345)

***

### isFile()

> **isFile**(): `boolean`

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isFile`](../../File/classes/File.md#isfile)

#### Defined in

[file/File.ts:290](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L290)

***

### isLink()

> **isLink**(): `boolean`

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isLink`](../../File/classes/File.md#islink)

#### Defined in

[file/File.ts:299](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L299)

***

### isReadable()

> **isReadable**(): `boolean`

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isReadable`](../../File/classes/File.md#isreadable)

#### Defined in

[file/File.ts:331](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L331)

***

### isValid()

> **isValid**(): `boolean`

Check if the uploaded file is valid.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Defined in

[file/UploadedFile.ts:81](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L81)

***

### isWritable()

> **isWritable**(): `boolean`

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isWritable`](../../File/classes/File.md#iswritable)

#### Defined in

[file/File.ts:317](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L317)

***

### move()

> **move**(`directory`, `name`?): `this`

Move the uploaded file to a new directory.

#### Parameters

• **directory**: `string`

The target directory.

• **name?**: `string`

The new name for the file.

#### Returns

`this`

The current UploadedFile instance.

#### Throws

FileError if the file is not valid.

#### Overrides

[`File`](../../File/classes/File.md).[`move`](../../File/classes/File.md#move)

#### Defined in

[file/UploadedFile.ts:93](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L93)

***

### remove()

> **remove**(`force`): `this`

Remove file.

#### Parameters

• **force**: `boolean` = `false`

Whether to forcefully remove the file.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`remove`](../../File/classes/File.md#remove)

#### Defined in

[file/File.ts:116](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L116)

***

### write()

> **write**(`content`): `this`

Write content to file.

#### Parameters

• **content**: `string`

The content to write to the file.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`write`](../../File/classes/File.md#write)

#### Defined in

[file/File.ts:70](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L70)

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](../../File/classes/File.md)

Create a File.

#### Parameters

• **path**: `string`

The file path.

• **checkPath**: `boolean` = `true`

Whether to check if the file path is valid.

#### Returns

[`File`](../../File/classes/File.md)

A new File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`create`](../../File/classes/File.md#create)

#### Defined in

[file/File.ts:35](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/File.ts#L35)

***

### createFile()

> `static` **createFile**(`path`, `originalName`, `mimeType`?): [`UploadedFile`](UploadedFile.md)

Create an UploadedFile.

#### Parameters

• **path**: `string`

The file path.

• **originalName**: `string`

The original name of the uploaded file.

• **mimeType?**: `string`

The MIME type of the file.

#### Returns

[`UploadedFile`](UploadedFile.md)

A new UploadedFile instance.

#### Defined in

[file/UploadedFile.ts:23](https://github.com/stonemjs/http-core/blob/3497087dac965583296f5092cd519a9aa0728373/src/file/UploadedFile.ts#L23)

# disposable-directory

[![npm version](https://badgen.net/npm/v/disposable-directory)](https://npm.im/disposable-directory) [![CI status](https://github.com/jaydenseric/disposable-directory/workflows/CI/badge.svg)](https://github.com/jaydenseric/disposable-directory/actions)

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install disposable-directory
```

## Requirements

- Operating system:
  - Linux
  - macOS
- [Node.js](https://nodejs.org): `^12.22.0 || ^14.17.0 || >= 16.0.0`

## API

- [function disposableDirectory](#function-disposabledirectory)
- [type DisposableDirectoryCallback](#type-disposabledirectorycallback)

### function disposableDirectory

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `callback` | [DisposableDirectoryCallback](#type-disposabledirectorycallback) | A sync or async callback that&#xA;receives the temporary directory path. |

**Returns:** Promise\<void> — Resolves once the callback is done and the disposable directory is deleted.

#### Examples

_Ways to import._

> ```js
> import disposableDirectory from "disposable-directory";
> ```
>
> ```js
> import disposableDirectory from "disposable-directory/disposableDirectory.mjs";
> ```

_How to use a disposable directory._

> ```js
> disposableDirectory(async (directoryPath) => {
>   // Use the directory here.
> })
>   .then(() => {
>     // The directory is gone.
>   })
>   .catch(() => {
>     // The directory is gone.
>   });
> ```

---

### type DisposableDirectoryCallback

A sync or async callback that receives the temporary directory path.

**Type:** Function

| Parameter     | Type   | Description               |
| :------------ | :----- | :------------------------ |
| `tempDirPath` | string | Temporary directory path. |

**Returns:** void | Promise\<void>

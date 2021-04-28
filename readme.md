# disposable-directory

[![npm version](https://badgen.net/npm/v/disposable-directory)](https://npm.im/disposable-directory) [![CI status](https://github.com/jaydenseric/disposable-directory/workflows/CI/badge.svg)](https://github.com/jaydenseric/disposable-directory/actions)

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install disposable-directory
```

## Support

- Linux, macOS.
- Node.js `^12.20 || >= 14.13`.

## API

### Table of contents

- [function disposableDirectory](#function-disposabledirectory)

### function disposableDirectory

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `callback` | Function | A sync or async callback that receives the temporary directory path. |

**Returns:** Promise\<void> — Resolves once the callback is done and the disposable directory is deleted.

#### Examples

_Ways to `import`._

> ```js
> import { disposableDirectory } from 'disposable-directory';
> ```
>
> ```js
> import disposableDirectory from 'disposable-directory/public/disposableDirectory.mjs';
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

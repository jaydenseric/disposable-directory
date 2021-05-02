# disposable-directory

[![npm version](https://badgen.net/npm/v/disposable-directory)](https://npm.im/disposable-directory) [![CI status](https://github.com/jaydenseric/disposable-directory/workflows/CI/badge.svg)](https://github.com/jaydenseric/disposable-directory/actions)

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

## Setup

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install disposable-directory
```

## Support

- Operating system:
  - Linux
  - macOS
- [Node.js](https://nodejs.org): `^12.20 || >= 14.13`

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

_How to `import`._

> ```js
> import disposableDirectory from 'disposable-directory';
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

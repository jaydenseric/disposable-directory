# disposable-directory

[![npm version](https://badgen.net/npm/v/disposable-directory)](https://npm.im/disposable-directory) [![CI status](https://github.com/jaydenseric/disposable-directory/workflows/CI/badge.svg)](https://github.com/jaydenseric/disposable-directory/actions)

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install disposable-directory
```

## Examples

How to use a disposable directory:

```js
import disposableDirectory from "disposable-directory";

disposableDirectory(async (directoryPath) => {
  // Use the directory here.
})
  .then(() => {
    // The directory is gone.
  })
  .catch(() => {
    // The directory is gone.
  });
```

## Requirements

- Operating system:
  - Linux
  - macOS
- [Node.js](https://nodejs.org): `^12.22.0 || ^14.17.0 || >= 16.0.0`

## Exports

These ECMAScript modules are published to [npm](https://npmjs.com) and exported via the [`package.json`](./package.json) `exports` field:

- [`disposableDirectory.mjs`](./disposableDirectory.mjs)

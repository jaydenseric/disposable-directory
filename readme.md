# disposable-directory

Asynchronously creates a disposable directory in the OS temporary directory that gets deleted after the callback is done or errors.

## Installation

To install [`disposable-directory`](https://npm.im/disposable-directory) with [npm](https://npmjs.com/get-npm), run:

```sh
npm install disposable-directory
```

Then, import and use the function [`disposableDirectory`](./disposableDirectory.mjs).

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

Supported operating systems:

- Linux
- macOS

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^14.17.0 || ^16.0.0 || >= 18.0.0`.

Projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`disposable-directory`](https://npm.im/disposable-directory) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). These ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`disposableDirectory.mjs`](./disposableDirectory.mjs)

# disposable-directory changelog

## Next

### Major

- Updated Node.js support to `^12.20 || >= 14.13`.
- Updated dev dependencies, some of which require newer Node.js versions than were previously supported.
- The API is now ESM in `.mjs` files instead of CJS in `.js` files, [accessible via `import` but not `require`](https://nodejs.org/dist/latest/docs/api/esm.html#esm_require).
- The function `disposableDirectory` is now only accessible via a default `import` from the main index.

### Patch

- Stop using [`hard-rejection`](https://npm.im/hard-rejection) to detect unhandled `Promise` rejections in tests, as Node.js v15+ does this natively.
- Simplified the package scripts now that [`jsdoc-md`](https://npm.im/jsdoc-md) v10 automatically generates a Prettier formatted readme.
- Updated GitHub Actions CI config:
  - Also run tests with Node.js v16.
  - Updated `actions/checkout` to v2.
  - Updated `actions/setup-node` to v2.
  - Don’t specify the `CI` environment variable as it’s set by default.

## 3.0.0

### Major

- Updated the package `engines.node` field to `^10.17.0 || ^12.0.0 || >= 13.7.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Removed the package `module` and `sideEffects` fields.
- Changed the file structure, so deep import/require paths may need to be updated.

### Patch

- Updated the package `keywords` field.
- Also run GitHub Actions with Node.js v15, and not v13.
- Simplified the GitHub Actions CI config with the [`npm install-test`](https://docs.npmjs.com/cli/install-test.html) command.
- Updated EditorConfig.
- Correct the supported Node.js versions documented in the readme.
- Prettier JSDoc example code.
- Documented how to `import` or `require` the `disposableDirectory` function.

## 2.0.0

### Major

- Added a [package `exports` field](https://nodejs.org/api/esm.html#esm_package_exports) and a `lib/index.mjs` file to support native ESM in Node.js.
- Added package `sideEffects` and `module` fields for bundlers such as Webpack.
- Undocumented internal helpers are now private, and can no longer be imported from packages outside this package.
- Updated the package `engines.node` field to `10 - 12 || >= 13.7` to reflect the package `exports` related breaking changes.

### Patch

- Updated dev dependencies.
- Added a new [`hard-rejection`](https://npm.im/hard-rejection) dev dependency to ensure unhandled rejections in tests exit the process with an error.
- Improved the package `prepare:prettier` and `test:prettier` scripts.
- Configured Prettier option `semi` to the default, `true`.
- Reorganized the test files.
- Simplified `test/index.js`.
- Ensure GitHub Actions run on pull request.

## 1.0.0

Initial release.

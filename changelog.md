# disposable-directory changelog

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

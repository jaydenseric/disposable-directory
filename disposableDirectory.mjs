// @ts-check

import { rm } from "node:fs/promises";

import createTempDir from "./createTempDir.mjs";

/**
 * Asynchronously creates a disposable directory in the OS temporary directory
 * that gets deleted after the callback is done or errors.
 * @param {DisposableDirectoryCallback} callback A sync or async callback that
 *   receives the temporary directory path.
 * @returns {Promise<void>} Resolves once the callback is done and the
 *   disposable directory is deleted.
 * @example
 * How to use a disposable directory:
 *
 * ```js
 * disposableDirectory(async (directoryPath) => {
 *   // Use the directory here.
 * })
 *   .then(() => {
 *     // The directory is gone.
 *   })
 *   .catch(() => {
 *     // The directory is gone.
 *   });
 * ```
 */
export default async function disposableDirectory(callback) {
  if (typeof callback !== "function")
    throw new TypeError("Argument 1 `callback` must be a function.");

  let tempDirPath;

  try {
    tempDirPath = await createTempDir();
    await callback(tempDirPath);
  } finally {
    if (tempDirPath)
      await rm(tempDirPath, {
        force: true,
        recursive: true,
      });
  }
}

/**
 * A sync or async callback that receives the temporary directory path.
 * @callback DisposableDirectoryCallback
 * @param {string} tempDirPath Temporary directory path.
 * @returns {void | Promise<void>}
 */

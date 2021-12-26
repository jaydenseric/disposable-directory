// @ts-check

import createTempDir from "./createTempDir.mjs";
import fsPathRemove from "./fsPathRemove.mjs";

/**
 * A sync or async callback that receives the temporary directory path.
 * @callback DisposableDirectoryCallback
 * @param {string} tempDirPath Temporary directory path.
 * @returns {void | Promise<void>}
 */

/**
 * Asynchronously creates a disposable directory in the OS temporary directory
 * that gets deleted after the callback is done or errors.
 * @kind function
 * @name disposableDirectory
 * @param {DisposableDirectoryCallback} callback A sync or async callback that
 *   receives the temporary directory path.
 * @returns {Promise<void>} Resolves once the callback is done and the
 *   disposable directory is deleted.
 * @example <caption>Ways to import.</caption>
 * ```js
 * import disposableDirectory from "disposable-directory";
 * ```
 *
 * ```js
 * import disposableDirectory from "disposable-directory/disposableDirectory.mjs";
 * ```
 * @example <caption>How to use a disposable directory.</caption>
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
    if (tempDirPath) await fsPathRemove(tempDirPath);
  }
}

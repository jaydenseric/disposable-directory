'use strict';

const createTempDir = require('../helpers/createTempDir');
const fsPathRemove = require('../helpers/fsPathRemove');

/**
 * Asynchronously creates a disposable directory in the OS temporary directory
 * that gets deleted after the callback is done or errors.
 * @kind function
 * @name disposableDirectory
 * @param {Function} callback A sync or async callback that receives the temporary directory path.
 * @returns {Promise<void>} Resolves once the callback is done and the disposable directory is deleted.
 * @example <caption>How to use a disposable directory.</caption>
 * ```js
 * const { disposableDirectory } = require('disposable-directory')
 *
 * disposableDirectory(async directoryPath => {
 *   // Use the directory here.
 * })
 *   .then(() => {
 *     // The directory is gone.
 *   }).catch(() => {
 *     // The directory is gone.
 *   })
 * ```
 */
module.exports = async function disposableDirectory(callback) {
  try {
    var tempDirPath = await createTempDir();
    await callback(tempDirPath);
  } finally {
    if (tempDirPath) await fsPathRemove(tempDirPath);
  }
};

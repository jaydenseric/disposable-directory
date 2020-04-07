'use strict';

const { execFile } = require('child_process');
const { promisify } = require('util');

const execFilePromise = promisify(execFile);

/**
 * Removes a file or directory.
 * @kind function
 * @name fsPathRemove
 * @param {string} path Filesystem path.
 * @returns {Promise} Resolves when the file or directory is removed.
 * @ignore
 */
module.exports = async function fsPathRemove(path) {
  if (typeof path !== 'string') throw new Error('Path must be a string.');
  return execFilePromise('rm', ['-rf', path]);
};

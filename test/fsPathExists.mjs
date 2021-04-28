import fs from 'fs';

/**
 * Determines if a file or directory path exists.
 * @kind function
 * @name fsPathExists
 * @param {string} path Filesystem path.
 * @returns {Promise<boolean>} Resolves if the filesystem path exits.
 * @ignore
 */
export default async function fsPathExists(path) {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

import fs from 'fs';
import { tmpdir } from 'os';
import { sep } from 'path';

/**
 * Creates a directory in the OS temporary directory.
 * @kind function
 * @name createTempDir
 * @returns {Promise<string>} Resolves the created directory path.
 * @ignore
 */
export default async function createTempDir() {
  // On macOS `os.tmpdir()` returns the path to a symlink, see:
  // https://github.com/nodejs/node/issues/11422
  const osTempDirPath = await fs.promises.realpath(tmpdir());
  return fs.promises.mkdtemp(`${osTempDirPath}${sep}`);
}

// @ts-check

import { mkdtemp, realpath } from "node:fs/promises";
import { tmpdir } from "node:os";
import { sep } from "node:path";

/**
 * Creates a directory in the OS temporary directory.
 * @returns {Promise<string>} Resolves the created directory path.
 */
export default async function createTempDir() {
  // On macOS `os.tmpdir()` returns the path to a symlink, see:
  // https://github.com/nodejs/node/issues/11422
  const osTempDirPath = await realpath(tmpdir());
  return mkdtemp(`${osTempDirPath}${sep}`);
}

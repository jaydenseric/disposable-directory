// @ts-check

import { execFile } from "child_process";
import { promisify } from "util";

const execFilePromise = promisify(execFile);

/**
 * Removes a file or directory.
 * @param {string} path Filesystem path.
 * @returns {Promise<void>} Resolves once the file or directory is removed.
 * @ignore
 */
export default async function fsPathRemove(path) {
  if (typeof path !== "string")
    throw new TypeError("Argument 1 `path` must be a string.");

  await execFilePromise("rm", ["-rf", path]);
}

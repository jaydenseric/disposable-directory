// @ts-check

import { strictEqual } from "assert";
import { existsSync } from "fs";
import createTempDir from "./createTempDir.mjs";
import fsPathRemove from "./fsPathRemove.mjs";

/**
 * Adds `createTempDir` tests.
 * @param {import("test-director").default} tests Test director.
 * @ignore
 */
export default (tests) => {
  tests.add("`createTempDir`.", async () => {
    const tempDirPath = await createTempDir();
    strictEqual(existsSync(tempDirPath), true);
    await fsPathRemove(tempDirPath);
  });
};

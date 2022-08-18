// @ts-check

import { strictEqual } from "node:assert";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

import createTempDir from "./createTempDir.mjs";

/**
 * Adds `createTempDir` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`createTempDir`.", async () => {
    const tempDirPath = await createTempDir();
    strictEqual(existsSync(tempDirPath), true);
    await rm(tempDirPath, { force: true, recursive: true });
  });
};

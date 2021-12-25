import { strictEqual } from "assert";
import { existsSync } from "fs";
import createTempDir from "../../private/createTempDir.mjs";
import fsPathRemove from "../../private/fsPathRemove.mjs";

export default (tests) => {
  tests.add("`createTempDir`.", async () => {
    const tempDirPath = await createTempDir();
    strictEqual(existsSync(tempDirPath), true);
    await fsPathRemove(tempDirPath);
  });
};

import { rejects, strictEqual } from "assert";
import { existsSync } from "fs";
import disposableDirectory from "../disposableDirectory.mjs";

export default (tests) => {
  tests.add(
    "`disposableDirectory` with argument 1 `callback` not a function.",
    async () => {
      await rejects(
        disposableDirectory(true),
        new TypeError("Argument 1 `callback` must be a function.")
      );
    }
  );

  tests.add("`disposableDirectory` with a sync callback.", async () => {
    let createdTempDirPath;

    await disposableDirectory((tempDirPath) => {
      createdTempDirPath = tempDirPath;
    });

    strictEqual(typeof createdTempDirPath, "string");
    strictEqual(existsSync(createdTempDirPath), false);
  });

  tests.add("`disposableDirectory` with an async callback.", async () => {
    let createdTempDirPath;
    let callbackAwaited;

    await disposableDirectory(async (tempDirPath) => {
      createdTempDirPath = tempDirPath;

      // Wait for 50 milliseconds.
      await new Promise((resolve) => setTimeout(resolve, 50));

      callbackAwaited = true;
    });

    strictEqual(callbackAwaited, true);
    strictEqual(typeof createdTempDirPath, "string");
    strictEqual(existsSync(createdTempDirPath), false);
  });

  tests.add("`disposableDirectory` with a sync callback error.", async () => {
    let createdTempDirPath;
    let errorMessage;

    try {
      await disposableDirectory((tempDirPath) => {
        createdTempDirPath = tempDirPath;
        throw new Error("TEST_MESSAGE");
      });
    } catch ({ message }) {
      errorMessage = message;
    }

    strictEqual(errorMessage, "TEST_MESSAGE");
    strictEqual(existsSync(createdTempDirPath), false);
  });

  tests.add(
    "`disposableDirectory` with an async callback rejection.",
    async () => {
      let createdTempDirPath;
      let errorMessage;

      try {
        await disposableDirectory(async (tempDirPath) => {
          createdTempDirPath = tempDirPath;
          throw new Error("TEST_MESSAGE");
        });
      } catch ({ message }) {
        errorMessage = message;
      }

      strictEqual(errorMessage, "TEST_MESSAGE");
      strictEqual(existsSync(createdTempDirPath), false);
    }
  );
};

import { strictEqual } from 'assert';
import disposableDirectory from '../../public/disposableDirectory.mjs';
import fsPathExists from '../fsPathExists.mjs';
import sleep from '../sleep.mjs';

export default (tests) => {
  tests.add('`disposableDirectory` with a sync callback.', async () => {
    let createdTempDirPath;

    await disposableDirectory((tempDirPath) => {
      createdTempDirPath = tempDirPath;
    });

    strictEqual(typeof createdTempDirPath, 'string');
    strictEqual(await fsPathExists(createdTempDirPath), false);
  });

  tests.add('`disposableDirectory` with an async callback.', async () => {
    let createdTempDirPath;
    let callbackAwaited;

    await disposableDirectory(async (tempDirPath) => {
      createdTempDirPath = tempDirPath;
      await sleep(50);
      callbackAwaited = true;
    });

    strictEqual(callbackAwaited, true);
    strictEqual(typeof createdTempDirPath, 'string');
    strictEqual(await fsPathExists(createdTempDirPath), false);
  });

  tests.add('`disposableDirectory` with a sync callback error.', async () => {
    let createdTempDirPath;
    let errorMessage;

    try {
      await disposableDirectory((tempDirPath) => {
        createdTempDirPath = tempDirPath;
        throw new Error('TEST_MESSAGE');
      });
    } catch ({ message }) {
      errorMessage = message;
    }

    strictEqual(errorMessage, 'TEST_MESSAGE');
    strictEqual(await fsPathExists(createdTempDirPath), false);
  });

  tests.add(
    '`disposableDirectory` with an async callback rejection.',
    async () => {
      let createdTempDirPath;
      let errorMessage;

      try {
        await disposableDirectory(async (tempDirPath) => {
          createdTempDirPath = tempDirPath;
          throw new Error('TEST_MESSAGE');
        });
      } catch ({ message }) {
        errorMessage = message;
      }

      strictEqual(errorMessage, 'TEST_MESSAGE');
      strictEqual(await fsPathExists(createdTempDirPath), false);
    }
  );
};

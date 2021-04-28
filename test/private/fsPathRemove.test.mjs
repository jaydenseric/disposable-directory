import { rejects, strictEqual } from 'assert';
import createTempDir from '../../private/createTempDir.mjs';
import fsPathRemove from '../../private/fsPathRemove.mjs';
import fsPathExists from '../fsPathExists.mjs';

export default (tests) => {
  tests.add('`fsPathRemove` with a directory that exists.', async () => {
    const tempDirPath = await createTempDir();
    await fsPathRemove(tempDirPath);
    strictEqual(await fsPathExists(tempDirPath), false);
  });

  tests.add('`fsPathRemove` with a directory that doesn’t exist.', async () => {
    const path = './this-directory-no-exists';
    await fsPathRemove(path);
    strictEqual(await fsPathExists(path), false);
  });

  tests.add('`fsPathRemove` with an invalid path argument.', async () => {
    await rejects(() => fsPathRemove(undefined), {
      message: 'Path must be a string.',
    });
  });
};

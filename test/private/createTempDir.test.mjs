import { strictEqual } from 'assert';
import createTempDir from '../../private/createTempDir.mjs';
import fsPathRemove from '../../private/fsPathRemove.mjs';
import fsPathExists from '../fsPathExists.mjs';

export default (tests) => {
  tests.add('`createTempDir`.', async () => {
    const tempDirPath = await createTempDir();
    strictEqual(await fsPathExists(tempDirPath), true);
    await fsPathRemove(tempDirPath);
  });
};

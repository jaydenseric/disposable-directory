import { strictEqual } from 'assert';
import fsPathExists from './fsPathExists.mjs';

export default (tests) => {
  tests.add('`fsPathExists` with an existent path.', async () => {
    strictEqual(await fsPathExists('./package.json'), true);
  });

  tests.add('`fsPathExists` with a non-existent path.', async () => {
    strictEqual(await fsPathExists('./non-existent.json'), false);
  });
};

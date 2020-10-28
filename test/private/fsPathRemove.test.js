'use strict';

const assert = require('assert');
const createTempDir = require('../../private/createTempDir');
const fsPathRemove = require('../../private/fsPathRemove');
const fsPathExists = require('../fsPathExists');

module.exports = (tests) => {
  tests.add('`fsPathRemove` with a directory that exists.', async () => {
    const tempDirPath = await createTempDir();
    await fsPathRemove(tempDirPath);
    assert.strictEqual(await fsPathExists(tempDirPath), false);
  });

  tests.add('`fsPathRemove` with a directory that doesn’t exist.', async () => {
    const path = './this-directory-no-exists';
    await fsPathRemove(path);
    assert.strictEqual(await fsPathExists(path), false);
  });

  tests.add('`fsPathRemove` with an invalid path argument.', async () => {
    await assert.rejects(() => fsPathRemove(undefined), {
      message: 'Path must be a string.',
    });
  });
};

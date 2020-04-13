'use strict';

const assert = require('assert');
const createTempDir = require('../../helpers/createTempDir');
const fsPathRemove = require('../../helpers/fsPathRemove');
const fsPathExists = require('../fsPathExists');

module.exports = (tests) => {
  tests.add('`createTempDir`.', async () => {
    const tempDirPath = await createTempDir();
    assert.strictEqual(await fsPathExists(tempDirPath), true);
    await fsPathRemove(tempDirPath);
  });
};

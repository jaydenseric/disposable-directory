'use strict';

const { TestDirector } = require('test-director');

const tests = new TestDirector();

require('./fsPathExists.test')(tests);
require('./private/createTempDir.test')(tests);
require('./private/fsPathRemove.test')(tests);
require('./public/disposableDirectory.test')(tests);

tests.run();

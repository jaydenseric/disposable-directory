'use strict'

const { TestDirector } = require('test-director')

const tests = new TestDirector()

require('./fsPathExists.test')(tests)
require('./lib/createTempDir.test')(tests)
require('./lib/disposableDirectory.test')(tests)
require('./lib/fsPathRemove.test')(tests)

tests.run()

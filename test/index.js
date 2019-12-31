'use strict'

const { TestDirector } = require('test-director')

const tests = new TestDirector()

require('./createTempDir.test')(tests)
require('./disposableDirectory.test')(tests)
require('./fsPathExists.test')(tests)
require('./fsPathRemove.test')(tests)

tests.run()

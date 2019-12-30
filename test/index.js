'use strict'

process
  .on('uncaughtException', error => {
    console.error('Uncaught exception:', error)
    process.exitCode = 1
  })
  .on('unhandledRejection', error => {
    console.error('Unhandled rejection:', error)
    process.exitCode = 1
  })

const { TestDirector } = require('test-director')
const createTempDirTests = require('./createTempDir.test')
const disposableDirectoryTests = require('./disposableDirectory.test')
const fsPathExistsTests = require('./fsPathExists.test')
const fsPathRemoveTests = require('./fsPathRemove.test')

const tests = new TestDirector()

fsPathExistsTests(tests)
fsPathRemoveTests(tests)
createTempDirTests(tests)
disposableDirectoryTests(tests)

tests.run()

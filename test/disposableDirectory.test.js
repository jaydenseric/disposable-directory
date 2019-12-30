'use strict'

const assert = require('assert')
const disposableDirectory = require('../lib/disposableDirectory')
const fsPathExists = require('./fsPathExists')
const sleep = require('./sleep')

module.exports = tests => {
  tests.add('`disposableDirectory` with a sync callback.', async () => {
    let createdTempDirPath

    await disposableDirectory(tempDirPath => {
      createdTempDirPath = tempDirPath
    })

    assert.strictEqual(typeof createdTempDirPath, 'string')
    assert.strictEqual(await fsPathExists(createdTempDirPath), false)
  })

  tests.add('`disposableDirectory` with an async callback.', async () => {
    let createdTempDirPath
    let callbackAwaited

    await disposableDirectory(async tempDirPath => {
      createdTempDirPath = tempDirPath
      await sleep(50)
      callbackAwaited = true
    })

    assert.strictEqual(callbackAwaited, true)
    assert.strictEqual(typeof createdTempDirPath, 'string')
    assert.strictEqual(await fsPathExists(createdTempDirPath), false)
  })

  tests.add('`disposableDirectory` with a sync callback error.', async () => {
    let createdTempDirPath
    let errorMessage

    try {
      await disposableDirectory(tempDirPath => {
        createdTempDirPath = tempDirPath
        throw new Error('TEST_MESSAGE')
      })
    } catch ({ message }) {
      errorMessage = message
    }

    assert.strictEqual(errorMessage, 'TEST_MESSAGE')
    assert.strictEqual(await fsPathExists(createdTempDirPath), false)
  })

  tests.add(
    '`disposableDirectory` with an async callback rejection.',
    async () => {
      let createdTempDirPath
      let errorMessage

      try {
        await disposableDirectory(async tempDirPath => {
          createdTempDirPath = tempDirPath
          throw new Error('TEST_MESSAGE')
        })
      } catch ({ message }) {
        errorMessage = message
      }

      assert.strictEqual(errorMessage, 'TEST_MESSAGE')
      assert.strictEqual(await fsPathExists(createdTempDirPath), false)
    }
  )
}

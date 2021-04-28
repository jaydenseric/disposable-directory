import TestDirector from 'test-director';
import testFsPathExists from './fsPathExists.test.mjs';
import testCreateTempDir from './private/createTempDir.test.mjs';
import testFsPathRemove from './private/fsPathRemove.test.mjs';
import testDisposableDirectory from './public/disposableDirectory.test.mjs';

const tests = new TestDirector();

testFsPathExists(tests);
testCreateTempDir(tests);
testFsPathRemove(tests);
testDisposableDirectory(tests);

tests.run();

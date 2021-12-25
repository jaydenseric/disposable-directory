import TestDirector from "test-director";
import testDisposableDirectory from "./disposableDirectory.test.mjs";
import testCreateTempDir from "./private/createTempDir.test.mjs";
import testFsPathRemove from "./private/fsPathRemove.test.mjs";

const tests = new TestDirector();

testCreateTempDir(tests);
testFsPathRemove(tests);
testDisposableDirectory(tests);

tests.run();

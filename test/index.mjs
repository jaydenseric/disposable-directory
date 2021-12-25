import TestDirector from "test-director";
import test_disposableDirectory from "./disposableDirectory.test.mjs";
import test_createTempDir from "./private/createTempDir.test.mjs";
import test_fsPathRemove from "./private/fsPathRemove.test.mjs";

const tests = new TestDirector();

test_createTempDir(tests);
test_fsPathRemove(tests);
test_disposableDirectory(tests);

tests.run();

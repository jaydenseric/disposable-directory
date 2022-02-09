// @ts-check

import TestDirector from "test-director";

import test_createTempDir from "./createTempDir.test.mjs";
import test_disposableDirectory from "./disposableDirectory.test.mjs";
import test_fsPathRemove from "./fsPathRemove.test.mjs";

const tests = new TestDirector();

test_createTempDir(tests);
test_disposableDirectory(tests);
test_fsPathRemove(tests);

tests.run();

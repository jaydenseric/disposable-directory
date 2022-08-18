// @ts-check

import TestDirector from "test-director";

import test_createTempDir from "./createTempDir.test.mjs";
import test_disposableDirectory from "./disposableDirectory.test.mjs";

const tests = new TestDirector();

test_createTempDir(tests);
test_disposableDirectory(tests);

tests.run();

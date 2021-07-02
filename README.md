# TypeScript 4.2
```shell
$ git switch master
$ npm install
$ npx jest 
 PASS  src/failing-test.test.ts
  ✓ test (18 ms)

  console.log
    []

      at Object.<anonymous> (src/failing-test.test.ts:4:11)


=============================== Coverage summary ===============================
Statements   : 100% ( 3/3 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 3/3 )
================================================================================
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.943 s
Ran all test suites.

$ npx jest --coverage
 PASS  src/failing-test.test.ts
 ...
```

# TypeScript 4.3
```shell
$ git switch ts-4.3
$ npm install
$ npx jest 
 PASS  src/failing-test.test.ts
 ...
 
$ npx jest --coverage
 FAIL  src/failing-test.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /Users/stan/dev/typescript-jest-bug/src/Test.ts: Support for the experimental syntax 'classProperties' isn't currently enabled (5:10):

      3 | exports.testMod = void 0;
      4 | class TestModule {
    > 5 |     test = [];
        |          ^
      6 | }
      7 | exports.default = TestModule;
      8 | exports.testMod = new TestModule();

    Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
    If you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.

      at Parser._raise (node_modules/@babel/parser/src/parser/error.js:97:45)

```
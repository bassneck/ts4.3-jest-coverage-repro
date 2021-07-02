```
# stan ~/dev/typescript-jest-bug on git:master x
$ npm run test

> typescript-jest-bug@1.0.0 test
> npm run test:unit


> typescript-jest-bug@1.0.0 test:unit
> jest --coverage

 FAIL  src/failing-test.test.ts
  ● Test suite failed to run

    SyntaxError: /Users/stan/dev/typescript-jest-bug/src/Test.ts: Support for the experimental syntax 'classProperties' isn't currently enabled (15:10):

      13 | });
      14 | let TestModule = class TestModule extends vuex_module_decorators_1.VuexModule {
    > 15 |     test = [];
         |          ^
      16 | };
      17 | TestModule = tslib_1.__decorate([
      18 |     vuex_module_decorators_1.Module({

    Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
    If you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.

      at Parser._raise (node_modules/@babel/parser/src/parser/error.js:97:45)
```
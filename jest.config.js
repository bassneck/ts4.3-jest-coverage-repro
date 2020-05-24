// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  /**
   * replace with preset: 'ts-jest/presets/js-with-ts' if you need to compile js/ts with ts-jest, see the list of presets
   * here https://kulshekhar.github.io/ts-jest/user/config/
   */
  preset: 'ts-jest',
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

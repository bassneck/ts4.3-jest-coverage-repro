module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageReporters: [],
  reporters: ['default'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(tests/unit/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
};

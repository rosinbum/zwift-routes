module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.*.d.ts$',
    '<rootDir>/src/index.tsx',
    '/.*.stories.tsx$'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: [ 'js', 'json', 'jsx', 'ts', 'tsx' ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  moduleDirectories: [
    'node_modules', 'src'
  ],
  roots: [
    '<rootDir>/src'
  ],
  snapshotSerializers: [ "enzyme-to-json/serializer" ],
  setupFiles: [ './src/setupTests.ts' ],
  testRegex: '/__tests__/.*\\.test\\.tsx?$',
  testPathIgnorePatterns: [
    '/node_modules/',
    'stories.tsx'
  ],
  transform: {
    '\\.tsx?$': 'ts-jest'
  }
}

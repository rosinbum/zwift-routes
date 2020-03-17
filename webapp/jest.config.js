module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}'
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
  testRegex: '/__tests__/.*\\.test\\.tsx?$',
  testPathIgnorePatterns: [
    '/node_modules/',
    'stories.tsx'
  ],
  transform: {
    '\\.tsx?$': 'ts-jest'
  }
}

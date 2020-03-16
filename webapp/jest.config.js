module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [ 'js', 'json', 'jsx', 'ts', 'tsx' ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  roots: [
    '<rootDir>/src'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'stories.tsx'
  ],
  transform: {
    '\\.tsx?$': 'ts-jest'
  }
}

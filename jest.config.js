module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageThreshold: {
      global: {
        lines: 90,
        statements: 90
      }
    },
    testMatch: [
      "<rootDir>/test/**/*.spec.ts"
    ],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,jxs}',
      '!<rootDir>/src/**/*.route.{ts,jxs}',
      '!<rootDir>/src/**/*.config.{ts,jxs}',
      '!<rootDir>/src/config/*.{ts,jxs}',
      '!<rootDir>/src/utils/**',
      '!<rootDir>/src/routes/**',
      '!<rootDir>/src/models/**',
      '!<rootDir>/src/middleware/**',
      '!<rootDir>/src/index.ts',
    ],
  };
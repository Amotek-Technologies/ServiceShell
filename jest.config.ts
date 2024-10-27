// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // Add both `src` and `tests` folders to the roots array
  roots: ["<rootDir>/src", "<rootDir>/tests"],

  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  },

  testMatch: ['**/?(*.)+(spec|test).ts'],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  resetMocks: true,
  restoreMocks: true,
  maxWorkers: "50%",
};

export default config;

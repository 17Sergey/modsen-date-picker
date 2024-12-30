module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/decorators/**/*.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/index.ts",
    "!src/**/types.ts",
    "!src/**/config.ts",
  ],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgMock.js",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};


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
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/utils/testing/imgSrcMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@decorators/(.*)$": "<rootDir>/src/decorators/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },
};

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "\\.tsx?$": ["babel-jest", { configFile: "./babel-jest.config.js" }],
  },
}

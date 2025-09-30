// @ts-check
import { defineConfig, devices } from "@playwright/test";

const config = {
  //point dir where tests will run
  // 30 sec default timeout
  testDir: "./tests",
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  }, // expect used for assertions validations

  reporter: "html",

  use: {
    browserName: "chromium",
  },
};

module.exports = config;

// npx playwright test
//npx playwright test --headed (if you want to see browser)

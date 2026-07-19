import "dotenv/config";

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Directory where your tests will reside
  retries: 1, // Retry failed tests once
  testMatch: "**/*.spec.ts", // Pattern for test files
  fullyParallel: true, // Run tests in parallel
  workers: 5, // Number of parallel workers, adjust as needed
  reporter: [["html", { outputFolder: "playwright-report" }], ["list"]],
  use: {
    viewport: { width: 1440, height: 844 },
    screenshot: "only-on-failure", // Capture screenshot on failure
    video: "on-first-retry", // Record video on first retry
    trace: "on-first-retry", // Capture trace on retry
  },
  projects: [
    {
      name: "final-chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.QA_URL,
        launchOptions: {
          args: ["--hide-scrollbars"],
        },
      },
    },
    // {
    //   name: "final-firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     baseURL: process.env.QA_URL,
    //   },
    // },
  ],
  timeout: 30000, // Timeout for each test (30 seconds)
});

import { test } from "@playwright/test";
import { FinalBasePage } from "./pages/testpage";
import {
  FinalAssignmentVisualTargets,
  FinalAssignmentVisualTargetKey,
} from "./fixtures/testdata";
import { baseUrl } from "./config/config";

const VIEWPORT = { width: 1440, height: 844 };

test.describe("Figma Baseline — Module Visual Comparison", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(VIEWPORT);
  });

  for (const key of Object.keys(
    FinalAssignmentVisualTargets,
  ) as FinalAssignmentVisualTargetKey[]) {
    const { selector, snapshot, index } = FinalAssignmentVisualTargets[key];

    test(`[${key}] matches Figma baseline`, async ({ page }) => {
      const basePage = new FinalBasePage(page);
      await basePage.goTo(baseUrl);
      await basePage.prepareForVisual();
      await basePage.compareModule(selector, snapshot, index);
    });
  }
});
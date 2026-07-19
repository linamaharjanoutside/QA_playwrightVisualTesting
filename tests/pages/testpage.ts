import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class FinalBasePage {
  constructor(private page: Page) {}

  async goTo(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
    const continueButton = this.page.locator("button.pds-button", {
      hasText: "Continue",
    });
    try {
      await continueButton.click({ timeout: 3000 });
      await this.page.waitForTimeout(500);
    } catch {
      // No continue button — continue
    }
  }

  async prepareForVisual() {
    await this.closePopupModal();
    await this.disableAnimation();
    await this.hideBackgroundVideo();
    await this.scrollFullPage();
  }

  async closePopupModal() {
    const closeButton = this.page.locator(
      "button.modal-close, .pds-button-close, [aria-label='Close'], #popup-banner-close",
    );
    try {
      await closeButton.click({ timeout: 3000 });
      await this.page.waitForLoadState("networkidle");
    } catch {
      // No modal present — continue
    }
  }

  async disableAnimation() {
    await this.page.addStyleTag({
      content: `*, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }`,
    });
  }

  async hideBackgroundVideo() {
    await this.page.addStyleTag({
      content: `video, .video-background, .background-video, iframe {
        display: none !important;
        visibility: hidden !important;
      }`,
    });
  }

  async scrollFullPage() {
    // Progressively scroll the whole page to trigger lazy-loaded /
    // ScrollTrigger-mounted sections further down the page, so they
    // actually get inserted into the DOM before we try to locate them.
    await this.page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 200);
      });
    });

    // Scroll back to the top so each module's own scrollIntoViewIfNeeded()
    // starts from a consistent position.
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await this.page.waitForTimeout(300);
  }

  async compareModule(selector: string, snapshot: string, index: number = 0) {
    const container: Locator = this.page.locator(selector).nth(index);

    // Wait for the element to exist in the DOM first (it may still be
    // off-screen/hidden at this point — that's fine, "attached" only
    // checks presence, not visibility).
    await container.waitFor({ state: "attached", timeout: 20000 });

    // Now scroll it into view and confirm it's actually visible.
    await container.scrollIntoViewIfNeeded();
    await container.waitFor({ state: "visible", timeout: 20000 });

    // Give pinned/parallax elements time to finish repositioning after scroll.
    await this.page.waitForTimeout(800);

    await expect(container).toHaveScreenshot(snapshot, {
      maxDiffPixels: 150,
      threshold: 0.4,
      animations: "disabled",
      timeout: 20000,
    });
  }
}
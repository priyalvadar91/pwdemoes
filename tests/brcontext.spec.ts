import { test, expect, Page, chromium } from "@playwright/test"

// Browser ---> Context ----> pages

// Browser ---> chromium, firefox , webkit
// context---> we can have sultiple contexts for multiple users/app for the broswer
// provide a way tooperate multiple independent sessions
// page ----> Tab, window, pages

test("Browser context demo", async ({  }) => {
    const browser=await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
   // 
    const page2 = await context.newPage();

    console.log("No of pages created :", context.pages().length);
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect(page1).toHaveTitle("Automation Testing Practice");
    await page2.goto("https://playwright.dev/docs/dialogs");
    await expect(page2).toHaveTitle("Playwright");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
})
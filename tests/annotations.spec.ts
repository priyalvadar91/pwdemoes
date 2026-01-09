/*
only
skip
fail
fixme
slow

*/

import {test, expect} from "@playwright/test"

test("This test  1", async({page})=>{
    await page.goto("https://www.google.com/");
     expect(await page.title()).toBe("Google");

})

test("This test  2", async({page})=>{
    await page.goto("https://www.google.com/");
     expect(await page.title()).toBe("Google");

})

//Skip the test based on some condition
test('This test 3', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'This test is skipped if the browser is Firefox');
  
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
  });

// fail
  test.fail("This test  4", async({page})=>{
    await page.goto("https://www.google.com/");
     expect(await page.title()).toBe("Google");

})

//fixme

test.fixme("This test  5", async({page})=>{
    await page.goto("https://www.google.com/");
     expect(await page.title()).toBe("Google");
    // assertion
})

// slow
test("This test  5", async({page})=>{
    test.slow();   // triple the default timeout (default : 30 sec, after tripling:90 secs)                       // 
    await page.goto("https://www.google.com/");
     expect(await page.title()).toBe("Google");
  
})









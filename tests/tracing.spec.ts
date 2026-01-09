
import {test,expect} from "@playwright/test"
// 3 ways to create  trace file
//----------------------------------
// 1. Using playwrigh .config.ts
// 2. Using command  npx playwright test mytest.spec.ts --trace on
// 3. code (programatically)
//     context.tracing.start({screenshots:true, snapshots:true});
//    // 
//    context.tracing.stop({path:'trace.zip'})     
// ------------------------------------------------------------------------------   
//   To view trace file (3 ways)

// 1. from html file -> click on trace.zip
// 2. through command - npx playwrigh show-trace trace.zip
// 3. using utility - https://trace.playwright.dev/    (drag and drop/ upload)




test("Tracing test .....", async({page,context})=>{

    context.tracing.start({screenshots:true,snapshots:true});

    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();

    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("pavanol");

    //#loginpassword

    await page.locator("#loginpassword").click();
    await page.locator("#loginpassword").fill("test@123");

    await page.locator("button[onclick='logIn()']").click();

    await page.waitForTimeout(10000);
    const text= page.locator("#nameofuser");
    await expect(text).toHaveText("Welcome pavanol");

    context.tracing.stop({path:'traceEx1.Zip'});
    
});
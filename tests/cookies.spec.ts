import { test, expect, chromium } from "@playwright/test"

test("Browser setting", async ({ }) => {

    // browser --> context --->page
    const browser = await chromium.launch({ headless: false }); // runs in headed mode
    const context = await browser.newContext();
    const page = await context.newPage();

    context.addCookies([
        { name: 'mycookie', value: '12345', url: 'http://www.automationpractice.pl/index.php' },
    ]);
    console.log("cookie added ....:");

    // get the details of cookie by name

    await page.goto("http://www.automationpractice.pl/index.php");
    const allthecookiesAdded = await context.cookies();
    const retriveCookie = allthecookiesAdded.find((i) => i.name === 'mycookie');
    console.log("Printing cookie details:", retriveCookie);
    console.log("Printing cookie retived cookie value:", retriveCookie?.value);

    expect(retriveCookie?.value).toBe("12345");
    expect(retriveCookie).toBeDefined();

    // get all the cookies

    console.log("allthecookiesAdded.length  : ",allthecookiesAdded.length);
    expect(allthecookiesAdded.length).toBeGreaterThan(1);
    console.log("Printing all the cookies : ", );

    for (const cookie of allthecookiesAdded) {
        console.log(`${cookie.name} : ${cookie.value}`);    
    }

    // clear all the cookies from browser
    await context.clearCookies();

    // verify all the cookies from browser
    context.clearCookies();

    const allC =await context.cookies();
    console.log("Number of cookies after clearing:",allC.length);
    expect(allC.length).toBe(0);

    await page.waitForTimeout(10000);


})
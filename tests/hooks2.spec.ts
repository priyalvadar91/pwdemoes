/*

open app ---- beforeAll()

login  --- bofore each
   find products
logout ---  after each

login
   add product to cart
logout

close app  --- afterAll()

*/

import { test, expect, Page } from "@playwright/test"

let page: Page;
//test.setTimeout(40000);

test.beforeAll('open app', async ({ browser }) => {

    console.log("..............beforeAll");

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://www.demoblaze.com/index.html");
})

test.afterAll('close app', async ({ }) => {
    console.log("..............afterAll");
    await page.close();
})

test.beforeEach('Login....', async ({ }) => {
    console.log("..............beforeEach");
    await page.reload();
    await page.locator("#login2").waitFor({ state: 'visible', timeout: 5000 })
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick='logIn()']").click();

})


test.afterEach('logout....', async ({ }) => {
    console.log("..............afterEach");
    // await page.waitForTimeout(5000);
    await page.locator("#logout2").waitFor({ state: 'visible', timeout: 5000 })
    await page.locator("#logout2").click();


});

test.describe('myGruop', async () => {


    test("Find no of products...", async () => {
        console.log("............Find no of products...");

        const products = page.locator("div[id='tbodyid'] img");
        await page.waitForTimeout(10000);
        const prdCount = await products.count();
        console.log("Number of products: ", prdCount);
        expect(prdCount).toBe(9);

    });
    test("Add Products to cart", async () => {
        console.log("............Add Products to cart...");
        await page.locator("text='Samsung galaxy s6'").click();

        page.once('dialog', async (dialog) => {
            console.log("Dialog appeared with message:", dialog.message());
            expect(dialog.message()).toContain("Product added");
            await dialog.accept();
        });

        await page.locator("a[class='btn btn-success btn-lg']").click();
        console.log("Clicked Add to cart button");

    });
})

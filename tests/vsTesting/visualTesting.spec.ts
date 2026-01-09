import { test,expect } from "@playwright/test";

test('test 1', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // compare snapshot of the pag
    // approach 1
     expect(await page.screenshot()).toMatchSnapshot("hamepage.png");

    // approach 2

   // await expect(page).toHaveScreenshot({timeout:5000});

   // compare snapshot of the perticular element

   const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
   expect(await logo.screenshot()).toMatchSnapshot("logo.png")

})


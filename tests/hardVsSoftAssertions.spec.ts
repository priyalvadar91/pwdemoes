import {test, expect} from "@playwright/test"

// Assertion - Hard and soft
test('Hard assset ', async({page})=>{
 
    //hard assert

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page).toHaveTitle("Demo Web Shop1");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo= await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
    


})

test.only('Soft assset ', async({page})=>{
 
    //hard assert

    await page.goto("https://demowebshop.tricentis.com/");
    await expect.soft(page).toHaveTitle("Demo Web Shop1");
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
    const logo= await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();


})

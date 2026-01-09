
import {test,expect} from "@playwright/test"

test("Flakytest test .....", async({page})=>{

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


    
});
/*

All locators in playwright by default work with elements in showdow DOM
The exceptions are :
Locating by XPath does not plerce shodow roots
*/

import {test,expect, Locator} from "@playwright/test"
import { isGeneratorObject } from "util/types"

test("Shadow DOM 1....",async({page})=>{

    await page.goto("https://books-pwakit.appspot.com/");
    await page.locator("#input").fill("Playwright-Automation");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
    await page.keyboard.press('Enter');
    const books:Locator[]=await page.locator("h2.title").all();
    console.log("Total no. of books : ",books.length);
    await expect(books.length).toBe(7);   

})

test.only("Shadow DOM 2....",async({page})=>{

    await page.goto("https://shop.polymer-project.org/");
    await page.locator('a[aria-label="Men\'s Outerwear Shop Now"]').click();
    await page.waitForTimeout(5000);
    
    const products = await page.locator("div.title").all();

    console.log("Number of product found :", products.length);

     expect(products.length).toBe(16);   

})


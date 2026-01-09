import {test,expect} from "@playwright/test"

test.beforeEach("lauch app",async({page})=>{
     console.log("...........................Launching app...............................");
     await page.goto("https://demowebshop.tricentis.com/");
         
})
test.afterEach("close app",async({page})=>{
     console.log("...........................closing app...............................");
     await page.close();
     
     
})
test("logotest", async({page})=>{
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
})

test("title test", async({page})=>{
    console.log(await page.title());
    
     expect(await page.title()).toContain("Demo Web Shop1");
});

test("Search test", async({page})=>{
    
    await page.locator("#small-searchterms").fill("laptop"); // fill the text in search box
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop",{ignoreCase:true});

})


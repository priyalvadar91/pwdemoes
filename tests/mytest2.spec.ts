import {test,expect} from "@playwright/test"


// fixture- global variable- page, browser
test("verify page URL",async({page})=>{

    await  page.goto("https://www.amazon.in/")
    let Url:string =await page.url();
     console.log("Page URL : ",Url)
    await expect(page).toHaveURL("https://www.amazon.in/");


})
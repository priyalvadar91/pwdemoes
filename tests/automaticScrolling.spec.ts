/*
Most of the time , Playwright will automatically scroll for you before doing any actions
Therefore, you do not need to scroll explicitly

*/

import {test,expect} from "@playwright/test"

test("Automatic scrolling to footer .....",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    // footer element - automatically scrolled before doing any action

    const footerTxt:string=await page.locator(".footer-disclaimer").innerText();
    console.log("Footer text captured ", footerTxt);
})


test(" scrolling inside dropdown .....",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("input[id='comboBox']").click();
    const option=await page.locator("#dropdown div:nth-child(54)").innerText();
    console.log("Option captured from dropdown :", option);

})

test.only(" scrolling inside the table.....",async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");
    
    const name = await page.locator("tbody tr:nth-child(10) td:nth-child(2)").innerText();
    console.log("Last name from 10th row and 2nd column:",name);
    
    
    const email = await page.locator("tbody tr:nth-child(10) td:nth-child(9)").innerText();
    console.log("Last name from 10th row and 9th column:",email);
    

})
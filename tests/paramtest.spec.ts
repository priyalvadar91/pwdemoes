import {test,expect} from "@playwright/test"

const searchItems:string[]=['laptop','Gift Card', 'smartphone','monitor'];

// Using for -of loop
// for (const item of searchItems) {
// test(`Login Test : ${item}`,async({page})=>{
//      console.log(`Login Test : ${item}`);
     
//     await page.goto('https://demowebshop.tricentis.com/');// fill the text in search box
//     await page.locator("#small-searchterms").fill("laptop"); // click on the button
//     await page.locator("input[value='Search']").click();
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop",{ignoreCase:true});
    
//    });
// }

// using foreach function

// searchItems.forEach((item)=>{

//     test(`Login Test : ${item}`,async({page})=>{
//         console.log(`Login Test : ${item}`);
        
//        await page.goto('https://demowebshop.tricentis.com/');// fill the text in search box
//        await page.locator("#small-searchterms").fill("laptop"); // click on the button
//        await page.locator("input[value='Search']").click();
//        await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop",{ignoreCase:true});
       
//       })

// })

// describe

test.describe("searching items",async()=>{
    
searchItems.forEach((item)=>{

    test(`Login Test : ${item}`,async({page})=>{
        console.log(`Login Test : ${item}`);
        
       await page.goto('https://demowebshop.tricentis.com/');// fill the text in search box
       await page.locator("#small-searchterms").fill("laptop"); // click on the button
       await page.locator("input[value='Search']").click();
       await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop",{ignoreCase:true});    
      })
})

})
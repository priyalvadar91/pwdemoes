import {test,expect, Locator} from "@playwright/test";
test("Verify multiselect ",async({page})=>{

    test.setTimeout(10000);
    await page.goto("https://testautomationpractice.blogspot.com/");

        // Select option from the drop down (4 ways)
        await page.locator("#colors").selectOption(['Red','Blue','Green']); // by using visible text
        await page.locator("#colors").selectOption(['Red','Blue','Green']); // by using visible text
        await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]); // by using label
        await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]); // by using index

     //check number of options in the dropdown (count)

     const drpdnOptions:Locator = page.locator("#colors>option");
     await expect(drpdnOptions).toHaveCount(7);

     // check an option present in the dropdown

     const optionsText:string[]=(await drpdnOptions.allTextContents()).map(text=>text.trim())
     console.log(optionsText);

     expect(optionsText).toContain('Green');
     
     //printing optionsfrom the drop down

     for(const option of optionsText){
         console.log(option);
     }

})



import {test,expect, Locator} from "@playwright/test";
test("Verify dropdown is sorted  ",async({page})=>{

    test.setTimeout(10000);
    await page.goto("https://testautomationpractice.blogspot.com/");

   const drpdnSorted=page.locator("#animals>option");
    //const drpdnSorted=page.locator("#colors>option");
    console.log(await drpdnSorted.allTextContents());

    const opionsTxt :string[]= await (await drpdnSorted.allTextContents()).map(text=>text.trim())

    const originalList:string[] = [...opionsTxt];
    const sortedList:string[] = [...opionsTxt].sort();

    console.log("Original List :",originalList);
    console.log("Sorted List  :",sortedList);

    expect(originalList).toEqual(sortedList);
    
})



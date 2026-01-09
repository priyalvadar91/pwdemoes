import {test, expect} from "@playwright/test"

// Assertion - Auto wait works
test('Autowaiting and forcing ', async({page})=>{
    test.setTimeout(30000);
    test.slow();
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    // await expect(page.locator("text-welcome to our store")).toBeVisible({10000});

    // Actions - Auto-wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await page.locator("input[id='small-searchterms']").fill("laptop",{force:true}); // search box- force action
    await page.locator("input[class='button-1 search-box-button']").click({force:true}) // clicking on search button - force action

})

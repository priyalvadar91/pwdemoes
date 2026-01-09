import { test, expect, Locator } from "@playwright/test"

test("read data from all the table pages", async ({ page }) => {

    test.setTimeout(90000);
    await page.goto("https://datatables.net/")
    // const drpDron:Locator=  page.locator("#dt-length-0");
    // console.log(await drpDron.inputValue());
    // await drpDron.click();
    // await drpDron.selectOption({value:'25'}); //select by value
    // console.log(await drpDron.inputValue());
    // await drpDron.selectOption({index:2}); // select by index
    // console.log(await drpDron.inputValue());
    // await drpDron.selectOption("100"); // select by visvible text
    // console.log(await drpDron.inputValue());

    let hasMoreRows = true;
    while (hasMoreRows) {
        const rows: Locator[] = await page.locator("table[id=example] tbody tr").all();
        for (const row of rows) {
            console.log(await row.innerText());
            
        }
        await page.waitForTimeout(6000)
        console.log("______________________________________________________________________")
       
        let nextButton= await page.locator("button[aria-label='Next']");
        let attirbue=await nextButton.getAttribute('class');
        if( !(attirbue?.includes('disable'))){
            
            await nextButton.click();
        }
        else{
            hasMoreRows=false;
        }
        
    }
})

    
test("Verify rows......................", async ({ page }) => {

    test.setTimeout(90000);
    await page.goto("https://datatables.net/")
    const drpDron:Locator=  page.locator("#dt-length-0");
    await drpDron.selectOption({value:'25'}); //select by value
    console.log(await drpDron.inputValue());
    const rows: Locator[] = await page.locator("table[id=example] tbody tr").all();
    const rowsCount =  rows.length
    expect(rowsCount).toBe(25)

    const rows2: Locator = await page.locator("table[id=example] tbody tr");
    await expect(rows2).toHaveCount(25)



})

   
test.only("filter or search value......................", async ({ page }) => {

    test.setTimeout(90000);
    await page.goto("https://datatables.net/")
    const searchBx:Locator=  page.locator("#dt-search-0");
    searchBx.fill("Yuri Berry")
    const rows: Locator[] = await page.locator("table[id=example] tbody tr").all();
  
    if(rows.length>=1){

        let matchFound=false;
        for (const row of rows) {
            if((await row.innerText()).includes(await searchBx.inputValue())){
                console.log("Matched");
                matchFound=true;
                break;
            }
        }
         expect(matchFound).toBe(true);
         expect(matchFound).toBeTruthy()

    }
    else{
        console.log("no any value for the search");
        
    }


})
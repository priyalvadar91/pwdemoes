import { test, expect } from "@playwright/test"

test("Infinite Scrolling...", async ({ page }) => {
    test.slow(); // set timeout for a single test easy way to triple the default timeout is 30 sec(30000 ms)

    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");
    // window.scrollTo(0,document.body.scrollHeight);
    let bookFind = false;
    let previousHeight = 0;
    let bCount=0;
    while (true) {

       // let bookTitles = await page.locator("#productsDiv h3").allTextContents();
        let bookTitles = await page.locator("#productsDiv h3").all();
        let i=1;
        for (const bTitle of bookTitles) {
           
            const title = await bTitle.innerText();
          
              console.log(i++,": ",title);
                        
        }
        console.log("------------------------------------------------------------");
        
        // if(bookTitles.includes("Firesong2")){
           
        //     console.log("Book found............");

        //     console.log(bookTitles);
            
        //     bookFind=true;
        //     expect(bookFind).toBeTruthy();
        //     await page.waitForTimeout(10000)
        //     break;
        // }

        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await page.waitForTimeout(3000);
        const currentHeight = await page.evaluate(() => {
            return document.body.scrollHeight;
        });
        console.log("previousHeight :", previousHeight);
        console.log("currentHeight  :", currentHeight);
        console.log("---------------------------------------");

        if (previousHeight === currentHeight) {
            break;
        }
        else {
            previousHeight = currentHeight;
        }
     
    }
    let i=1;
    console.log("Reached at the end of page.............");

    if (!bookFind) {
        console.log("Book not found...............");
    }
    
})

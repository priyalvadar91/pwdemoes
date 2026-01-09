import { test, expect, Locator } from "@playwright/test"
import { symlinkSync } from "fs";
import { SourceTextModule } from "vm";


test("Verify Amazon Apple Mobile price",  async({ page }) => {

    test.setTimeout(100000);
    await page.goto("https://www.amazon.in/",{timeout:90000});
    console.log("URL :", page.url())
    const searchProduct: Locator = page.locator("input[id='twotabsearchtextbox']");
    await searchProduct.fill("apple mobile 16 pro max");
    await page.locator("input[type='submit']").click();
    console.log("URL After search :", page.url())
    const allMobPrice: Locator = page.locator(".a-price-whole");
    await page.waitForSelector('.a-price-whole',{timeout:90000});
    let TotalCount: number = 0;
    let nextBtn: Locator = page.locator("*[class*='s-pagination-item s-pagination-next s-pagination']")
    let s: string = await nextBtn.getAttribute('class');
    console.log(s)
    let pageNo: number = 1;
    while (!(s.includes("disable"))) {
        s = await nextBtn.getAttribute('class');
        console.log("Page ", pageNo, " URL: ", page.url())
        console.log("###### PAGE NO :", pageNo, "____________________________________")
        TotalCount = await allMobPrice.count();
        console.log("Total products :", TotalCount)

        for (let i = 0; i < TotalCount; i++) {
            console.log(i + 1, " : ", await allMobPrice.nth(i).textContent());
       
        }

        if(!(s.includes("disable"))){
            await nextBtn.click();
        }

        pageNo++;

      

    }

})
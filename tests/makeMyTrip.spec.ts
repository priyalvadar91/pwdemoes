import {test,expect, Locator} from "@playwright/test";

test("IndiGo Price",async({page})=>{

    test.setTimeout(1000000)
    // await page.goto("https://www.makemytrip.com/");
    await page.goto('https://www.makemytrip.com/');
    await page.locator('.commonModal__close').click();
    await page.getByRole('img', { name: 'minimize' }).click();

    await page.getByText("Search").click();

    const allIndiGoPrices=  page
    .locator('div.makeFlex.spaceBetween')
    .filter({ has: page.locator('p', { hasText: 'IndiGo' }) })
    .locator('span')
    .filter({ hasText: '₹' });

    await allIndiGoPrices.first().waitFor({ state: 'visible', timeout: 40000 });
    const p = await allIndiGoPrices.allInnerTexts();
    console.log(p);

 //   console.log( allIndiGoPrices.filter( p=>p.allInnerTexts()));
    
    for (const price of await allIndiGoPrices.allInnerTexts()) {
        console.log( price);      
    }
})

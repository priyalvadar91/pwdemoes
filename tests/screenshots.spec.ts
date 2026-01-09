import {test,expect} from "@playwright/test"
test("Screenshots .....", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp=Date.now();
    // pagescreenshot >>>>>
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});

    // full page screenshots 
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png',fullPage:true});

    // Element screenshot
    const logo= await page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});

    //-----------------------------------------------------------------------------


   // specific page
   const allProducts= await page.locator("[class='product-grid home-page-product-grid']");
   await allProducts.screenshot({path:'screenshots/'+'featureProducts'+timestamp+'.png'})
})


test.only("Screenshots global .....", async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();

    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("pavanol");

    //#loginpassword

    await page.locator("#loginpassword").click();
    await page.locator("#loginpassword").fill("test@123");

    await page.locator("button[onclick='logIn()']").click();

    const text=await page.locator("#nameofuser");
    await expect(text).toHaveText("Welcome pavanol");
    
})
import {test,expect,chromium} from "@playwright/test" 

test("Browser setting", async({})=>{

    // browser --> context --->page
    const browser=await chromium.launch({headless:false}); // runs in headed mode

    const context=await browser.newContext(
        {
            viewport:{width:1200,height:800},
            locale:'en-US',
            //proxy:{server:'http://myproxy.com:3245'}
            ignoreHTTPSErrors:true
        }
    );

    const page =await context.newPage();
    //await page.goto("https://www.google.com/");
    await page.goto("https://expired.badssl.com/");
    await page.waitForTimeout(10000);

    const dimensions = await page.evaluate(() => {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      });
      console.log('Page window size:', dimensions);
    
    

})
import {test, expect,chromium} from "@playwright/test"

test("handle popups ...",async({browser})=>{
    test.setTimeout(40000);
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    // await context.waitForEvent('page');
    // await page.locator("#PopUp").click();

    const [popup]=await Promise.all([ page.waitForEvent('popup'), page.getByText('Popup Windows').click()]);
    
    // console.log("Window 1 Title : ",await windows[1].title());

    await popup.waitForLoadState();
    const allPopUpWindows =  context.pages();
    console.log("all PopUp Windows :", allPopUpWindows.length);

    console.log(" windows parent :",   allPopUpWindows[0].url());
    console.log(" windows child 1:", allPopUpWindows[1].url());
    console.log(" windows child 2:", allPopUpWindows[2].url());

    console.log("_________________________________________________________________");
    
    for (const window of allPopUpWindows) {
        const title =await window.title();
        if(title.includes('Playwright')){
            await window.locator('.getStarted_Sjon').click();
            await  window.close()
        }
    }


    
}) 
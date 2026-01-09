import {test, expect,chromium} from "@playwright/test"

test("Authenticated popups approach 1 ...",async({browser})=>{
    test.setTimeout(40000);
    const context= await browser.newContext();
    const page= await context.newPage();
    // https://the-internet.herokuapp.com/basic_auth
    //http://username:password@the-internet.herokuapp.com/basic_auth

    // Approach 1 : 
    //await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();

    const msg =await page.getByText("Congratulations! You must have the proper credentials. ").innerText();
    console.log("Success Message :", msg);
    expect(msg).toContain("Congratulations");
    
}) 


test.only("Authenticated popups approach 2 ...",async({browser})=>{
    test.setTimeout(40000);
    const context= await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page= await context.newPage();
    // https://the-internet.herokuapp.com/basic_auth
    //http://username:password@the-internet.herokuapp.com/basic_auth

    // Approach 2 : 
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();

    const msg =await page.getByText("Congratulations! You must have the proper credentials. ").innerText();
    console.log("Success Message :", msg);
    expect(msg).toContain("Congratulations");
    
}) 
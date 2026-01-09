import { test,expect,Locator } from "@playwright/test";

test("Verify bootstrap drop down...",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    const url:string=  page.url();
    console.log("URL :", url);
    
    expect(url).toEqual("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.getByText("PIM").click();
    await page.locator("form i").nth(2).click();
    await page.waitForTimeout(3000)
   
    const jobs:Locator= page.locator("div[role='listbox'] span")

   console.log(await jobs.count())
    for (let i = 0; i < await jobs.count(); i++) {
           const job:string = await jobs.nth(i).textContent();
           console.log(i," : ",job);
          
     
    }
console.log("------------------------------------------------------------------------");


    for (let i = 0; i < await jobs.count(); i++) {
        const job:string = await jobs.nth(i).textContent();
        console.log(i," : ",job);
        if(job==="Software Engineer"){
         await jobs.nth(i).click();
        }     
 }

  const selected:string=  await page.locator(".oxd-select-text-input").nth(2).textContent();
  console.log("Slected option :",selected);
  


})
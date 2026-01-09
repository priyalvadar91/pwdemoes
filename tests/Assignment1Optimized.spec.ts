import {test,expect,Locator} from "@playwright/test"
test("End to end testing ....",async({page})=>{
    test.setTimeout(60000);
    await page.goto("https://blazedemo.com/ ");
    const pageTitle =await page.title();
    console.log("pageTitle : ",pageTitle);
     expect(pageTitle).toBe("BlazeDemo");
     const departureCity=page.locator("select[name='fromPort']");
     await departureCity.selectOption("Portland")
     const destinationCity=page.locator("select[name='toPort']");
     await destinationCity.selectOption("London")
     await page.locator("input[value='Find Flights']").click();
     
     const table = page.locator("table tbody")
     const rows = await table.locator("tr").all();
    

   const allPrices:number[]=await Promise.all( rows.map (async(row)=>{ 
        const price= await row.locator('td',{hasText:`$`}).innerText();
        return parseFloat(price.replace('$','').trim());
     })
   );
      console.log( page.url());

     console.log(allPrices);
     const lowestPrice =Math.min(...allPrices);
     const index = allPrices.indexOf(lowestPrice);
     await page.waitForTimeout(3000);
     await rows[index].locator('td').nth(0).click();
     
     console.log(page.url());

     await page.locator("#inputName").fill("John");//
     await page.locator("#address").fill("Lane no 4, abc Chouk,Pune");
     await page.locator("#city").fill("Pune");
     await page.locator("#zipCode").fill("34212");
     await page.locator("#cardType").selectOption("American Express");
     await page.locator("#creditCardNumber").fill("123456789");//
     await page.locator("input[name='creditCardMonth']").fill("5");
     await page.locator("#creditCardYear").fill("2024");
     await page.locator("#nameOnCard").fill("John Guptil");//

     await page.locator("input[value='Purchase Flight']").click();
     console.log(page.url());

     const successMsg= await page.getByText("Thank you for your purchase today!").innerText();
     console.log("successMsg :",successMsg);
     expect(successMsg).toBe("Thank you for your purchase today!");

     
     
})
import {test,expect,Locator} from "@playwright/test"
test("End to end testing ....",async({page})=>{
    test.setTimeout(30000);
    await page.goto("https://blazedemo.com/ ");
    const pageTitle =await page.title();
    console.log("pageTitle : ",pageTitle);
     expect(pageTitle).toBe("BlazeDemo");
     const departureCity=page.locator("select[name='fromPort']");
     await departureCity.selectOption("Portland")
     const destinationCity=page.locator("select[name='toPort']");
     await destinationCity.selectOption("London")
    //  const findFlights= page.locator("input[value='Find Flights']");
    //  expect(findFlights).toBeVisible();
    //  await findFlights.click()

     await page.locator("input[value='Find Flights']").click();
     
     const table = page.locator("table tbody")
     const rows:Locator[] = await table.locator("tr").all();
     const allPrices:string[]=[]
     for (const row of rows) {

       const price= await row.locator('td',{hasText:`$`}).innerText();
  
         allPrices.push(price);
     }
console.log(await page.url());

     console.log(allPrices);
     console.log(allPrices.sort());
     console.log(allPrices)
     console.log(allPrices[0])
     const lowestPrice=allPrices[0];
     let r=0;
     for (const row of rows) {
        const min:string=await row.locator("td").nth(5).innerText();
        if(min===lowestPrice){
            console.log(min);      
         const chooseThisROw = page.locator('table tbody tr').nth(r);
         await chooseThisROw.locator('td').nth(0).click();
         break;
        }
        r++;
        
     }
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
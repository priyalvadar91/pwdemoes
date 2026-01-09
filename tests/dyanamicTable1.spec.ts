import {test,expect,Locator} from "@playwright/test"
import { cp } from "fs";
import { TransformStreamDefaultController } from "node:stream/web";
import { text } from "stream/consumers";
test("Verify dynamic table.................",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
let table:Locator=page.locator("[id='taskTable'] tbody");
await expect(table).toBeVisible();

//Step1: for chrome process get value of CPU load
// read each row to check chrome presence

let allrows:Locator[]=await table.locator("tr").all();
let rowCount= allrows.length
console.log("Rows count: ",rowCount)
expect(rowCount).toBe(4)

let cpuLoad='';
for (const row of allrows) {
    const name :string=await row.locator("td").nth(0).innerText();
  //  if(name==='Chrome'){

       // cpuLoad= await row.locator('td:has-text("%")').innerText();
        cpuLoad= await row.locator("td",{hasText:'%'}).innerText();
        console.log("Name :",name,"CPU load :", cpuLoad );
    //    break;
   // }
   console.log("--------------------------------------");
   
}
   
await page.waitForTimeout(5000)
    




 
 
   


})
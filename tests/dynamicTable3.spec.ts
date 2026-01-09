import {test,expect,Locator} from "@playwright/test"

test("Verify dynamic table2 .................",async({page})=>{
     test.setTimeout(10000)
await page.goto("https://testautomationpractice.blogspot.com/");
let table:Locator=page.locator("[id='taskTable'] tbody");
await expect(table).toBeVisible();

//Step1: for chrome process get value of CPU load
// read each row to check chrome presence

let allrows:Locator[]=await table.locator("tr").all();
let rowCount= allrows.length
console.log("Rows count: ",rowCount)
expect(rowCount).toBe(4)

console.log("--------------------------------------------------------------");

let networkSpeed='';
for (const row of allrows) {
    const name :string=await row.locator("td").nth(0).innerText();
    if(name==='Chrome'){

       // cpuLoad= await row.locator('td:has-text("%")').innerText();
       networkSpeed= await row.locator("td",{ hasText: /^\d+(\.\d+)? Mbps$/ }).innerText();
        console.log("Name :",name," || Network Speed  :", networkSpeed );
        break;
   }
   
   
}

let networkSpeedOnLabel:string= await page.locator("strong[class='chrome-network']").innerText();

console.log("networkSpeed        :",networkSpeed);
console.log("networkSpeedOnLabel :",networkSpeedOnLabel);


if(networkSpeed.includes(networkSpeedOnLabel)){
    console.log("Network Speed is equal");
    
}
else{
    console.log("Network Speed is not equal");
}

expect(networkSpeed).toContain(networkSpeedOnLabel);
expect(networkSpeed).toEqual(networkSpeedOnLabel);

//await page.waitForTimeout(5000)

    




 
 
   


})
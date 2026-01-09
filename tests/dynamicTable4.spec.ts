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

let diskSpace='';
for (const row of allrows) {
    const name :string=await row.locator("td").nth(0).innerText();
    if(name==='Firefox'){

       // cpuLoad= await row.locator('td:has-text("%")').innerText();
       diskSpace= await row.locator("td",{ hasText: /^\d+(\.\d+)? MB\/s$/ }).innerText();
        console.log("Name :",name," || Network Speed  :", diskSpace );
        break;
   }
   
   
}

let diskSpaceOnLabel:string= await page.locator("strong[class='firefox-disk']").innerText();

console.log("diskSpace        :",diskSpace);
console.log("diskSpaceOnLabel :",diskSpaceOnLabel);


if(diskSpace.includes(diskSpaceOnLabel)){
    console.log("diskSpace is equal");
    
}
else{
    console.log("diskSpaceOnLabel is not equal");
}

expect(diskSpace).toContain(diskSpaceOnLabel);
expect(diskSpace).toEqual(diskSpaceOnLabel);

//await page.waitForTimeout(5000)

    




 
 
   


})
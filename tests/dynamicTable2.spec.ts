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

let memorySize='';
for (const row of allrows) {
    const name :string=await row.locator("td").nth(0).innerText();
    if(name==='Firefox'){

       // cpuLoad= await row.locator('td:has-text("%")').innerText();
        memorySize= await row.locator("td",{ hasText: /^\d+(\.\d+)? MB$/ }).innerText();
        console.log("Name :",name," || Memory Size :", memorySize );
        break;
   }
   
   
}

let memorySizeOnLabel:string= await page.locator("strong[class='firefox-memory']").innerText();

console.log("memorySize        :",memorySize);
console.log("memorySizeOnLabel :",memorySizeOnLabel);


if(memorySize.includes(memorySizeOnLabel)){
    console.log("Memory size is equal");
    
}
else{
    console.log("Memory size is not equal");
}

expect(memorySize).toContain(memorySizeOnLabel);
expect(memorySize).toEqual(memorySizeOnLabel);

//await page.waitForTimeout(5000)

    




 
 
   


})
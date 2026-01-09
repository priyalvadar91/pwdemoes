import {test,expect, Locator} from "@playwright/test"
import { text } from "stream/consumers";

test("Compaire Methods-----------",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");
const products:Locator=page.locator(".product-title");

// inertext vs contenttext

console.log(await products.nth(1).innerText());
console.log(await products.nth(1).textContent());
const count = await products.count();
console.log(count);

for (let i = 0; i < count; i++) {
    const text:string=await products.nth(i).innerText() // return only string
    console.log(text);
}

console.log("------------------------------------------------------------------------------");


for (let i = 0; i < count; i++) {
    const text:string| null=await products.nth(i).textContent(); // return  string or Null
    console.log(text?.trim());
}

// allinertext vs alltextcontent

console.log("**********allinertext vs alltextcontent ^^^^^^^^^^^^");

const inerTxt:string[]= await products.allInnerTexts();

console.log(inerTxt);

console.log("**********allinertext vs alltextcontent ^^^^^^^^^^^^");

const txtCon:string[]= await products.allTextContents();

console.log(txtCon);

console.log("**********Trim ^^^^^^^^^^^^");

const txtTrimCon:string[]=  (await products.allTextContents()).map(text=>text.trim());

console.log(txtTrimCon);

// all() - converts locator ----> Locator[]
// returns array of locators
// returns array of locators (stores locators of product / convert laocator to array of locators)
console.log("******************* all() ********************************************");


const allP:Locator[]=await products.all();

console.log(allP);
console.log("******************* all() for of Loop ********************************************");

for (const all of allP) {
    
    console.log( await all.innerText());
   
}

console.log("******************* all() for In Loop ********************************************");

for (const i in allP) {
    
    console.log( await allP[i].innerText());
   
}
console.log("-----------------------------------------");





})
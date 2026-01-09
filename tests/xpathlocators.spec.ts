import {test,expect,Locator} from "@playwright/test"

test("Xpath demo in playwright", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //1.Absolute xpath

    // const logo:Locator= page.locator("/html/body/div[4]/div[1]/div[1]/div[1]/a/img");

    // await expect(logo).toBeVisible();

     // contains
     const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");

     console.log("Total Products :",await products.count());

   //  console.log(await products.textContent());
     
     //
console.log("First product :", await products.first().textContent());
console.log("Last product  :",await products.last().textContent() );
console.log("Nth product   : ",await products.nth(3).textContent());
console.log("--------------------------------------------------------");

for (let i = 0; i < await products.count(); i++) {
    
    console.log(i," : ",await products.nth(i).textContent(),)
   
}

console.log("--------------------------------------------------------");
console.log(await products.allTextContents());

console.log("--------------------------------------------------------");

let productTitles : string[] = await products.allTextContents();
for (let pt of productTitles) {
    
    console.log(pt)

}


// Xpath with starts-with() Function

const buildingProducts:Locator=page.locator("//a[starts-with(@href,'/build')]");

const count:number = await buildingProducts.count();
expect(count).toBeGreaterThan(0);

// Xpath with text() function
//a[text()='Register']
//a[.='Register']
//a[normalize-space()='Register']

const regLink:Locator=page.locator("//a[text()='Register']");
 await expect(regLink).toBeVisible();

// Xpath with last() function
////div[@class='column follow-us']//li[last()]

// Xpath with position() function

const lastEle:Locator= page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastEle).toBeVisible();
console.log("Text content of last element :",await lastEle.textContent());


//div[@class='column follow-us']//li[position()=1]
//div[@class='column follow-us']//li[position()=2]
//div[@class='column follow-us']//li[position()=3]
//div[@class='column follow-us']//li[position()=4]
//div[@class='column follow-us']//li[position()=5]

const positionEle:Locator= page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionEle).toBeVisible();
console.log("Tesx content of given position:",await positionEle.textContent());







})
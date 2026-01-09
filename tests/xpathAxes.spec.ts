import { test,expect,Locator } from "@playwright/test";

test("Verify xpath Axes :",async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // self
    //td[text()='Germany']/self::td

    const germayCell=page.locator("//td[text()='Germany']/self::td");

   await expect(germayCell).toBeVisible();
   console.log("germayCell.textContent() : ",await germayCell.textContent());

   // 2. parent axis - get parent <tr> of the "Germany" cell

   const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr")
   await expect(parentRow).toContainText("Maria Anders");
   await expect(parentRow).toContainText("Alfreds Futterkiste	Maria Anders	Germany");
   console.log(await parentRow.textContent())
   console.log(await parentRow.allTextContents())
   

   // 3.child axis - get all <td> children of the second <tr> in the table

   const RowCells:Locator =page.locator("//table[@id='customers']//tr[7]//child::td");
   console.log(await RowCells.allTextContents())
   await expect(RowCells).toHaveCount(3);
  

   // Ancestor axis - get ancestor <table> of the "Germany" cell

   const table=page.locator("//td[text()='Germany']//ancestor::table");
   await expect(table).toHaveAttribute('id','customers');

   // descendant - //table[@id='customers']//descendant::td

   console.log("------------- descendant -----------------------------------");
   
   const all:Locator = page.locator("//table[@id='customers']//descendant::td");
   
   for (const a of await all.allTextContents()) {
       console.log(a);
       
   }

   // following axis - Get the <td> that comes after "Germany" in document order
   const followingCell=page.locator("//td[text()='Germany']//following::td[1]");
   await expect(followingCell).toHaveText("Centro comercial Moctezuma")


   // following-sibling
   const followingSiblingCell=page.locator("//td[text()='Germany']//following-sibling::td");
   await expect(followingSiblingCell).toHaveCount(0);

   ////td[text()='Helen Bennett']//following-sibling::td
   const followingSiblingCell1=page.locator("//td[text()='Helen Bennett']//following-sibling::td");
   await expect(followingSiblingCell1).toHaveCount(0);

   // preceding axis - get the <td> to the left of 'Germany'
// //td[text()='Germany']//preceding::td

 ////td[text()='Helen Bennett']//following-sibling::td
 const leftSibling=page.locator("//td[text()='Germany']//preceding::td");
 await expect(leftSibling).toHaveCount(2);
 await expect(leftSibling.nth(0)).toHaveText("Alfreds Futterkiste");
 await expect(leftSibling.nth(1)).toHaveText("Maria Anders");




})
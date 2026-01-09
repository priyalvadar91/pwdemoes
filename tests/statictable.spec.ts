import { test, expect, Locator } from "@playwright/test"

test("Verify static web table ....", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // 1) count number of rows in a table
    const rows = table.locator("tr");// returns all the rows including header
    await expect(rows).toHaveCount(7);
    const rCount: number = await rows.count();

    console.log("Number of rows in a table :", rCount);
    expect(rCount).toBe(7);

    // 2) count number of column
    // table[name='BookTable'] tbody tr th

    const column: Locator = rows.locator("th");
    await expect(column).toHaveCount(4);

    const columCount: number = await column.count();
    console.log("Number of columns/headers :", columCount);

    expect(columCount).toBe(4);


    //3. Read all data from 2nd row 
    const secondRowCell:Locator= rows.nth(2).locator('td');
    const secondROwText:string[]= await secondRowCell.allInnerTexts();

    console.log(secondROwText)

    await expect(secondRowCell).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

    //4. Read all data from table ()

    const allRowsLocator=await rows.all();


    for(let row of allRowsLocator.slice(1)) // skip header row
    {
        const cols=await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }


// 5. print book names author is Mukesh

console.log("Books return by Mukesh");

const bookArray:string[]=[];
 for(let row of allRowsLocator.slice(1)) // skip header row
{
    const cols=await row.locator('td').allInnerTexts();
    const author=cols[1];
    const book=cols[0];
    if(author==='Mukesh'){
        console.log("___________________________________");
        console.log(author,": " ,book);
        bookArray.push(book);
        
    }
    
}
console.log("Total bokks ",bookArray.length);
console.log(" bokks ",bookArray);

await expect(bookArray).toHaveLength(2);

// 5. print total price- 

console.log("Print total price.....................");

let totalPrice=0;
 for(let row of allRowsLocator.slice(1)) // skip header row
{
    const cols=await row.locator('td').allInnerTexts();
    const price=cols[3];
    totalPrice=totalPrice+parseInt(price);   
}

console.log("Total Price : ",totalPrice);
await expect(totalPrice).toBe(7100);









})
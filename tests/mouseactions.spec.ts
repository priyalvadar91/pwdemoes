import {test,expect} from "@playwright/test"

test("Mouse hover actions....",async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/");

    const pointMe=page.getByText("Point Me");
    await pointMe.hover();
    console.log(await pointMe.innerText());
    

    const laptops=page.locator(".dropdown-content a:nth-child(2)");
    await laptops.hover();
    console.log(await laptops.innerText());

})

test("Right click actions....",async({page})=>{
    test.setTimeout(60000);
 
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = page.locator("span[class='context-menu-one btn btn-neutral']");
   
    await button.click({button:'right'}); // this will right click option
    await page.waitForTimeout(4000);

})

test("Double click actions....",async({page})=>{
    test.setTimeout(60000);
 
    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopy = page.locator("button[ondblclick='myFunction1()']");
   
    await btnCopy.dblclick();
    await page.waitForTimeout(4000);

    const field1=await page.locator("[id='field1']").inputValue();
    await page.waitForTimeout(4000);
    const field2=await page.locator("[id='field2']").inputValue();
    await page.waitForTimeout(4000);
    console.log( "Field1 :",field1);
    console.log( "Field2 :",field2);
    expect(field1).toContain("Hello World!");
})


test.only("drap and drop  actions....",async({page})=>{
    test.setTimeout(60000);
 
    await page.goto("https://testautomationpractice.blogspot.com/");

    const source = page.locator("div[id='draggable']");
    const target = page.locator("div[id='droppable']");

    // Aproach 1; 
    // await source.hover();
    // await page.waitForTimeout(3000);
    // await page.mouse.down();
    // await page.waitForTimeout(3000);
    // await target.hover();
    // await page.waitForTimeout(3000);
    // await page.mouse.up();
    // await page.waitForTimeout(3000);
    // const targettext=await target.innerText();
    // console.log(targettext);

    //  expect(targettext).toContain("Dropped!");

    // Approach 2: 
    await source.dragTo(target);
    const targettext=await target.innerText();
    expect(targettext).toContain("Dropped!");

    
    
})
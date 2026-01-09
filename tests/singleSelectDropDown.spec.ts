import {test,expect,Locator} from "@playwright/test"
test("Verify drop down.......",async({page})=>{
    
    test.setTimeout(100000);
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:90000});

    // 1) Select option from the drop down
    await page.locator('#country').selectOption("Japan"); // visible text
    await page.waitForTimeout(7000);
    await page.locator('#country').selectOption({value:'uk'}); // by using value attribute
    await page.waitForTimeout(7000);
    await page.locator('#country').selectOption({label:'Australia'});// by using label
    await page.waitForTimeout(7000);
    await page.locator('#country').selectOption({index:3});// by using index
    await page.waitForTimeout(3000);


    // check number of options in the dropdown

    const dropdownOption:Locator=page.locator("#country>option");
    console.log(await dropdownOption.count());
    expect(dropdownOption).toHaveCount(10);

    // check an option present in the dropdown

    const optionText:string[]=await (await dropdownOption.allTextContents()).map(text=>text.trim());
    console.log(optionText)

    expect(optionText).toContain('Japan');

    // printing optons from the drop down
    
    for(const option of optionText)
    {
        console.log(option)
    }

    







})
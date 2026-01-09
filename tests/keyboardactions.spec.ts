/*

keyboard methods...
down
press
type
up

await page.keybord.(key)
*/

import {test,expect} from "@playwright/test"

test("Keyborad actions...", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. focus on input
    const input1= page.locator("#input1")
    await input1.focus();               //await input1.click();

    //2. provide the text input1
    await page.keyboard.insertText("Welcome");

    //3.ctrl+A- select the text
    await page.keyboard.down('Control')
    await page.keyboard.press('A')
    await page.keyboard.up('Control')
    
    //4. ctrl +C - copy the text
    await page.keyboard.down('Control')
    await page.keyboard.press('C')
    await page.keyboard.up('Control')
    

      //5. Press TAB - 2 lines
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    

     //6) Ctrl+V - paste text 
    await page.keyboard.down('Control')
    await page.keyboard.press('V')
    await page.keyboard.up('Control')

       //7) Press TAB - 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    //  // 8) Ctrl+ V 
    await page.keyboard.down('Control')
    await page.keyboard.press('V')
    await page.keyboard.up('Control')  

    await page.waitForTimeout(10000);

})


test.only("Keyborad actions...", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. focus on input
    const input1= page.locator("#input1")
    await input1.focus();               //await input1.click();

    //2. provide the text input1
    await page.keyboard.insertText("Welcome");

    //3.ctrl+A- select the text
    // await page.keyboard.down('Control')
    // await page.keyboard.press('A')
    // await page.keyboard.up('Control')

    await page.keyboard.press('Control+A')
    
    //4. ctrl +C - copy the text
    // await page.keyboard.down('Control')
    // await page.keyboard.press('C')
    // await page.keyboard.up('Control')

    await page.keyboard.press('Control+C')
    

      //5. Press TAB - 2 lines
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    

     //6) Ctrl+V - paste text 
    // await page.keyboard.down('Control')
    // await page.keyboard.press('V')
    // await page.keyboard.up('Control')

    await page.keyboard.press('Control+V')

       //7) Press TAB - 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    //  // 8) Ctrl+ V 
    // await page.keyboard.down('Control')
    // await page.keyboard.press('V')
    // await page.keyboard.up('Control')  

    await page.keyboard.press('Control+V')
    await page.waitForTimeout(10000);
    
})

import {test,expect,Locator} from '@playwright/test'

test('Handle Dynamic Elements using xpath', async({page})=>{
 

    await page.goto('https://testautomationpractice.blogspot.com/')

    for (let i = 0; i <=5; i++) {
        let button:Locator =page.locator("//button[@name='start' or @name='stop']")
        await button.click();
        await page.waitForTimeout(2000);
    }
         // Dynamic element
//button[@name='start'] or //button[@name='start']
//button[@name='start' or @name='stop'];
//button[contains(name,'st')];
//button[starts-with(@name,'st')];
//button[text()='STOP' or text()='START'];

// CSS
//button[name='start'],button[name='start']
        
 
    // Using playwright specific locators
    for (let i = 0; i <=5; i++) {
        let button:Locator =page.getByRole('button',{name:/START|STOP/})
        await button.click();
     
    }
    
})
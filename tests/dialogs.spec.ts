//alert(), confrim(),prompt() dialogs /JSalert
//Reference : https://playwright.dev/docs/dialogs

//1) By default .dialogs are auto-dismissed by playwright , so you don't have to handle them
//2) Howver, you can register a dialog handler before the action that triggers the dialog to eighter
// dialog.accept() or dialog.dismiss() it

import { test, expect, Locator } from "@playwright/test"
import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
test("simple Dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Register a dialog handler
    page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain('alert')
        console.log("Dialog Text   :",dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept()
    });
    await page.getByText("Simple Alert").click();
    await page.waitForTimeout(5000);


})

test("confirmation Dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
     //Register a dialog handler
     page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain('confirm')
        console.log("Dialog Text   :",dialog.message());
        expect(dialog.message()).toContain("Press a button!");
      //  dialog.accept();
        dialog.dismiss();
    });

    await page.getByText("Confirmation Alert").click();
   // await page.waitForTimeout(5000);
    expect(await page.locator("#demo")).toHaveText("You pressed Cancel!")

})


test.only("prompt Dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
     //Register a dialog handler
     page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain('prompt')
        console.log("Dialog Text   :",dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        console.log("Default value : ",dialog.defaultValue());
        expect( dialog.defaultValue()).toContain("Harry Potter");
         dialog.accept('JOHN');
       
    });

    await page.getByText("Prompt Alert").click();
   // await page.waitForTimeout(5000);
    const text:string=await page.locator("#demo").innerText();
    await expect(text).toContain('JOHN');
    expect(await page.locator("#demo")).toHaveText("Hello JOHN! How are you today?")
})
import {test, expect} from "@playwright/test"

test("Single file upload.....",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles('uploads/info (1).txt');
     
    await page.getByText('Upload Single File').click();
    const successMsg = await page.locator('#singleFileStatus').innerText();
    console.log("successMsg :", successMsg);
    
    expect(successMsg).toContain("Single file selected: info (1).txt, Size: 0 bytes, Type: text/plain");

})


test.only("Multiple files upload.....",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#multipleFilesInput").setInputFiles(['uploads/Day30-Labs.pdf','uploads/info (1).txt']);
     
    await page.getByText('Upload Multiple Files').click();
    const successMsg = await page.locator('#multipleFilesStatus').innerText();
    console.log("successMsg :", successMsg);
    
     expect(successMsg).toContain("Multiple files selected:");
     //Day30-Labs.pdf
     expect(successMsg).toContain("info (1).txt");
     expect(successMsg).toContain("Day30-Labs.pdf");

})
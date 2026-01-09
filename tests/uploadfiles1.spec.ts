import { test,expect } from "@playwright/test";

test("download file ....", async({page})=>{

    test.setTimeout(90000);
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles('uploads/Day30-Labs.pdf');
    const fileName=await page.locator('#fileList').innerText();
    console.log(fileName);
    
    expect(fileName).toContain('Day30');
    expect(fileName).toContain('.pdf');

    await page.waitForTimeout(5000);


})
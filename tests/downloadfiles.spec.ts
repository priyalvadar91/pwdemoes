import { test, expect } from "@playwright/test"
import fs from 'fs'

test('download text file', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.locator("textarea[id='inputText']").fill("Welcome");

    await page.getByText("Generate and Download Text File").click();
    await page.waitForTimeout(2000);

// start waiting for the download before clicking

    const [download] = await Promise.all([ page.waitForEvent('download'),
    page.locator("a[download='info.txt']").click()
    ]);

    await page.waitForTimeout(5000);

    //save the file to custom path
    const downloadPath='downloads/testfile.txt';
    await download.saveAs(downloadPath);

    // check if file exists in the path
   const isFileExists= fs.existsSync(downloadPath);
 
   console.log("isFileExists : ", isFileExists);
   expect(isFileExists).toBeTruthy();

   // cleanup the downloaded files

   if(isFileExists){
       fs.unlinkSync(downloadPath)
   }
   
})



test.only('download PDF file...................', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.locator("textarea[id='inputText']").fill("Welcome");

    await page.getByText("Generate and Download PDF File").click();
    await page.waitForTimeout(2000);

// start waiting for the download before clicking

    const [download] = await Promise.all([ page.waitForEvent('download'),
    page.locator("a[id='pdfDownloadLink']").click()
    ]);

    await page.waitForTimeout(5000);

    //save the file to custom path
    const downloadPath='downloads/testfile.pdf';
    await download.saveAs(downloadPath);

    // check if file exists in the path
   const isFileExists= fs.existsSync(downloadPath);
 
   console.log("isFileExists : ", isFileExists);
   expect(isFileExists).toBeTruthy();

   // cleanup the downloaded files

   if(isFileExists){
       fs.unlinkSync(downloadPath)
   }
   
})
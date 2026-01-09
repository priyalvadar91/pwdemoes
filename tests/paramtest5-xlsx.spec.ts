import { test, expect } from "@playwright/test";
import * as XLSX from 'xlsx';

/*
Pre-requisite:
npm insatll xlsx
*/
// reading data from xlsx

const xlPath= "testdatafiles/data1.xlsx";
const workbook=XLSX.readFile(xlPath);
const sheetname =workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetname];

const logindata:any=XLSX.utils.sheet_to_json(worksheet);


test.describe("Login data driven test- xlsx",  () => {

    for (const {email,pass,validity} of logindata) {

        test(`Login test for "${email}" and "${pass}" from xlsx`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(pass);
            await page.locator("input[value='Log in']").click();

            if (validity.toLowerCase() === 'valid') {
                // Assert logout link is visible indicate successful login
                const logoutLink = page.locator("a[href='/logout']");
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            }
            else {
                // assert error message is visible
                const errormessage = page.locator('.validation-summary-errors');
                await expect(errormessage).toBeVisible({ timeout: 5000 });
               // assert user is still on the login page
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

            }
        })
    }
});
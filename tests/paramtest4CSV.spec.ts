import { test, expect } from "@playwright/test";
import fs from 'fs';
import {parse} from 'csv-parse/sync';



/*
Pre-requisite:
Install the cs-parse module to read CSV files
npm install csv-parse
*/

// reading data from CSV

const csvFile= 'testdatafiles/dataCSV.csv';
const fileContent=fs.readFileSync(csvFile,'utf-8');

const records = parse(
         fileContent,
            {
             columns:true,
             skip_empty_lines:true,
             trim:true
            }
        )

test.describe("Login data driven test- CSV",  () => {

    for (const data of (records as any)) {

        test(`Login test for "${data.email}" and "${data.pass}" from CSV`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.pass);
            await page.locator("input[value='Log in']").click();

            if (data.validity.toLowerCase() === 'valid') {
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
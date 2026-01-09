import { test, expect, Locator, Page } from "@playwright/test"
import { loadEnvFile } from "process";

async function selectDate(targetYear: string, targetMonth: string, targetDate: string, page: Page, isFuture: boolean) {
    while (true) {

        const currentMonth = await page.locator(".ui-datepicker-month").innerText()
        const currentYear = await page.locator(".ui-datepicker-year").innerText()
        if (currentMonth === targetMonth && currentYear === targetYear) {

            break;
        }
        if (isFuture) {
            //Future
            await page.getByTitle("Next").click();
            
        }
        else {
            // Past
            await page.getByTitle("Prev").click();
            
        }




    }

    const allDates: Locator[] = await page.locator(".ui-datepicker-calendar td").all();

    for (const date of allDates) {
        const dateText = await date.innerText();
        if (dateText === targetDate) {
            await date.click();
           // console.log("Input value: ", await datePicker.inputValue());
            break;
        }
    }



}

test("JQuesry Date picker------------ ", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const datePicker: Locator = page.locator("input[id='datepicker']");
    await datePicker.click();
    //future
    const yearF='2028';
    const monthF='May';
    const dateF='23';

    //past
    const yearP='2021';
    const monthP='May';
    const dateP='23';


    selectDate(yearP,monthP,dateP,page,false);
    await page.waitForTimeout(6000)
    console.log("Input value :",await datePicker.inputValue());

    await datePicker.clear();

    selectDate(yearF,monthF,dateF,page,true);
    await page.waitForTimeout(6000)
    console.log("Input value :",await datePicker.inputValue());

   // await page.waitForTimeout(10000);
})
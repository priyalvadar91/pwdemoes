import { test, expect, Locator } from "@playwright/test"

test("Booking.com Date picker test- check in and check out ", async ({ page }) => {
    test.setTimeout(30000);
    await page.goto("https://www.booking.com/");
    // click on the date picker field to open calender

    await page.waitForTimeout(3000);
    await page.getByTestId('searchbox-dates-container').click();

    // check-in date selection 
    let checkinYear: string = "2026";
    let checkinMonth: string = "June";
    let checkinDay: string = "26";

    // Navigate through the calendar to find the desired check-in month and year

    while (true) {
        await page.waitForTimeout(1000);
        const checkInMonthYear = await page.locator("h3[aria-live='polite']").nth(0).innerText();
        const currentMonth = checkInMonthYear.split(" ")[0];
        const currentYear = checkInMonthYear.split(" ")[1];

        if (currentMonth === checkinMonth && checkinYear === currentYear) {
            break;
        }
        else {
            await page.locator("button[aria-label='Next month']").click();
        }
    }

    // Slect the specific check-in date
    let allDates = await page.locator("table[class='b8fcb0c66a'] tbody").nth(0).locator("td").all();
    let checkinDateSlected = false;

    for (let date of allDates) {
        const dateText = await date.innerText();
        if (dateText === checkinDay) {
            await date.click();
            checkinDateSlected = true;
         
            break;

        }
    }
    expect(checkinDateSlected).toBeTruthy();



    //=============================================================================================

    // check-in date selection 
    let checkoutYear: string = "2026";
    let checkoutMonth: string = "October";
    let checkoutDay: string = "22";

    // Navigate through the calendar to find the desired check-in month and year

    while (true) {
        const checkoutMonthYear = await page.locator("h3[aria-live='polite']").nth(1).innerText();
        const currentMonth = checkoutMonthYear.split(" ")[0];
        const currentYear = checkoutMonthYear.split(" ")[1];

        if (currentMonth === checkoutMonth && currentYear === checkoutYear) {
            
            break;
        }
        else {

            await page.locator("button[aria-label='Next month']").click();
        }
    }

    // Slect the specific check-in date
    let allOutDates = await page.locator("table[class='b8fcb0c66a'] tbody").nth(1).locator("td").all();
    let checkOutDateSlected = false;

    for (let date of allOutDates) {
        const dateText = await date.innerText();
        if (dateText === checkoutDay) {
            await date.click();
            checkOutDateSlected = true;
           
            break;

        }
    }
    console.log(await page.getByTestId('searchbox-dates-container').innerText());
    expect(checkOutDateSlected).toBeTruthy();

})
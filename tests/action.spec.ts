import { test, expect, Locator } from "@playwright/test"
import { setPriority } from "os";


test("test 1: Verify input box Action....", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const inputBox: Locator = page.locator('#name');

    await expect(inputBox).toBeVisible();
    await expect(inputBox).toBeEnabled();
    const maxLen: string | null = await inputBox.getAttribute("maxlength");
    console.log(maxLen);
    expect(maxLen).toBe("15");

    await inputBox.fill("John kenaddy");
    console.log("First Name :", await inputBox.textContent()); // 
    console.log("First Name :", await inputBox.inputValue());


})

test("test 2: Verify radio buttons actios....", async ({ page }) => {

    console.log("Verify radio buttons actios...................");

    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadioBtn: Locator = page.locator("#male");

    expect(maleRadioBtn).toBeVisible();
    expect(maleRadioBtn).toBeEnabled();
    console.log("________ Before__________");

    console.log(await maleRadioBtn.isChecked());
    expect(await maleRadioBtn.isChecked()).toBe(false);
    await maleRadioBtn.check();

    console.log("________ Before__________");

    console.log(await maleRadioBtn.isChecked());
    expect(await maleRadioBtn.isChecked()).toBe(true);

})


test("test 3: Verify check box actios....", async ({ page }) => {

    console.log("Verify check box actios...................");
    await page.goto("https://testautomationpractice.blogspot.com/");

    const chkB1: Locator = page.getByLabel("Sunday");
    await expect(chkB1).toBeVisible();
    await expect(chkB1).toBeVisible();
    console.log("check box before -----------------");
    console.log(await chkB1.isChecked());
    await chkB1.check()
    console.log("check box before -----------------");
    console.log(await chkB1.isChecked());

    // Select all the checkboxes and assert each checked

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    const checkBOxes: Locator[] = days.map(index => page.getByLabel(index));

    console.log(checkBOxes.length);
    for (const checkbox of checkBOxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    // unchecked last 3 checkboxes and assert
    for (const checkbox of checkBOxes.slice(-3)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked()
    }

    //  Toggle checkboxes : if checked , uncheck; if unchecked ,check. Assert state flipped

    for (const checkbox of checkBOxes) {

        if (await checkbox.isChecked()) {
            // only if checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
        else {
            // only if not checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

        // Randomly select check boxes - select checkboxes by index (1,3,6)

        // const indexes:number[]= [1,3,6];
        // for (const i of indexes) {

        //         checkBOxes[i].check();
        //         await expect(checkbox[i]).toBeChecked();

        // }

        // Select the check box based on the label

        const weekname: string = "Friday";
        for (const label of days) {
            if (label.toLocaleLowerCase()==weekname.toLocaleLowerCase()) {
           
               const checkbox= page.getByLabel(label)
               await checkbox.check();
               await expect(checkbox).toBeChecked();
            }
        }




    }
})
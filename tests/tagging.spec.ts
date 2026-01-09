/*
test1- sanity
test2- sanity, regression
test3 - regression


npx playwright test tagging.spec.ts --project=chromium --headed --grep "@sanity"
npx playwright test tagging.spec.ts --project=chromium --headed --grep "@regression"
npx playwright test tagging.spec.ts --project=chromium --headed --grep (?=.*@sanity)(?=.*@regression)
npx playwright test tagging.spec.ts --project=chromium --headed --grep "(?=.*@sanity)(?=.*@regression)"
npx playwright test tagging.spec.ts --project=chromium --headed --grep "@sanity^|@regression"

npx playwright test tagging.spec.ts --project=chromium --headed --grep "@sanity" --grep-invert "@regression"


*/

import {test, expect} from "@playwright/test"

// test('@sanity @regression check title of the home page ', async({page})=>{

//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle("Google")
// } );


test('check title of the home page ',{tag:'@sanity'}, async({page})=>{

    console.log("check title of the home page-------------- Sanity");
    
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google")
} );

test('Check navigation to store page ',{tag:'@regression'}, async({page})=>{

    console.log("Check navigation to store page-------------- Regression");
    
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")
} )

test('Check top recmmendation.....',{tag:['@regression','@sanity'],}, async({page})=>{

    console.log("Check top recmmendation--------------['@regression','@sanity'] ");
    
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    expect(await page.getByText('Incredible deals on Google devices, shop End of Year Sale today.').innerText()).toContain("Incredible deals on Google devices, shop End of Year Sale today.");
} );
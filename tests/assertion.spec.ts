import {test ,expect} from "@playwright/test"

test("Assertions .....",async({page})=>{

    // Auto-Retry
    // not retry
    // Negating matcher

    await page.goto("https://demowebshop.tricentis.com/")
    // Auto-Retry
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.getByText("Featured products")).toBeVisible();
    await expect(page.getByText("Featured products")).toHaveText("Featured products");
    await expect(page.getByText("Featured products")).toContainText("Featured");

    // Negating matcher
    await expect(page.getByText("Featured products")).not.toHaveText(" products");

   
   // 2. non-retrying assertion (executes immediately , no retry)
   const title =await page.title();
   expect(title.includes("Demo Web Shop")).toBeTruthy();

   
})
// Locators - 
// Introduction
// Locators are the central piece of Playwright's auto-waiting and retry-ability. 
//In a nutshell, locators represent a way to find element(s) on the page at any moment.

// Quick Guide
// These are the recommended built-in locators.
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// await page.getByLabel('User Name').fill('John');
// await page.getByLabel('Password').fill('secret-password');
// await page.getByRole('button', { name: 'Sign in' }).click();
// await expect(page.getByText('Welcome, John!')).toBeVisible();


import {test,expect,Locator} from "@playwright/test"

test("Verify Playwright locators_....",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/")

    // page.getByAltText()- identifies images ( and similar elements)
    // based on the alt attribute , use this locator when lement supports alt text such as img and area elements

    const logo:Locator= page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    // page.getByText() - find an element by the text it contains. You can match by a substring , exact string,
    // Loacte by visible text
    //locate by visible text
    // Use this locator to find non interactive elemnts like div,span,p etc
    // for interactive elements like button,a,input etc. use role loactors



    // const textVisble:Locator=page.getByText("Welcome to our store");
    // await expect(textVisble).toBeVisible();

     await expect(page.getByText("Welcome to our store")).toBeVisible(); // full string
     await expect(page.getByText("Welcome to")).toBeVisible(); // substring

     await expect(page.getByText(/WELCOME\s+To\s+Our\s+Store/i)).toBeVisible();// regular expression -ignoring cases

     // page.getByRole - locating by role
     // role inclues buttons,checkboxes,headings,links,lists,tables
     // and many more and follow W3C specifications for ARIP role
     //prefer for interactive elements like buttons,checkboxes, links,lists,headings,tables  etc

     await page.getByRole("link",{name:'Register'}).click();

     page.getByRole("heading",{name:'Register'})

     await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();


     // page.getByLabel()- locate from control by lable's text


     await page.getByLabel("First name:").fill("Priyal")
     await page.getByLabel("Last name:").fill("Vadar")
     await page.getByLabel("Email:").fill("pv@gmail.com")


    // page.getByPlaceholder() to locate an input by placeholder.


    await page.getByPlaceholder("Search store").fill("Apple");


    // page.getByTitle() to locate an element by its title attribute.


    //  await expect(page.getByTitle("Home page link")).toHaveText("Home");
    //  await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");



// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

// await expect(page.getByTestId("profile-email")).toHaveText("John.doe@example.com")
// await expect(page.getByTestId("profile-name")).toHaveText("John.doe");


























})
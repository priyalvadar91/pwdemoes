import { test,expect } from "@playwright/test";

import { LoginPage } from "../LoginPage";
import { HomePage } from "../../pageObjects/HomePage";
import { CartPage } from "../../pageObjects/CartPage";

test("User can login, add a product to the cart ",async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    const loginPage = new LoginPage(page);
    // await loginPage.clickLoginLink();
    // await loginPage.enterUsername("pavanol");
    // await loginPage.enterPassword("test@123") ;
    // await loginPage.clikOnLoginBtn();
    await loginPage.performLogin("pavanol","test@123");
    
//=====================================================
    const homePage=new HomePage(page);
    await homePage.addProductToCart("Iphone 6 32gb")
    await page.waitForTimeout(2000)
    await homePage.goToCart();
    await page.waitForTimeout(10000)
    const cartPage= new CartPage(page);
    const isProductInCart=await cartPage.checkProductInCart("Iphone 6 32gb");
    await page.waitForTimeout(2000)

   
    expect(isProductInCart).toBe(true);

})
/*

CSS (Cascading style sheets)
html + js + css

two types of css locators-

1) Absolute CSS Locator
2) Relative CSS Locator

Relative CSS locator -
tag with id          ===> tag#id   or #id
tag with class        ==> tag.class or .class
tag with any other attribute =>tag[attribueName=value] or [attribueName=value]
tag with class and attribute  => tag.class[attribue=value] or .class[attribue=value]


page.locator(css/xpath)
// https://demowebshop.tricentis.com/
*/

import {test,expect,Locator} from "@playwright/test"
 test("Verify CSS loactors",async({page})=>{

    await page.waitForTimeout(5000);
    await page.goto("https://demowebshop.tricentis.com/")
    console.log("Page Title :", await page.title());
    console.log("Page Url :", page.url());
   
    await page.locator(".ico-register").click();
    

    console.log("Registration Page Title :", await page.title());
    console.log("Registration Page Url :", page.url());
    console.log("*************  await page.goBack();**************************")
    
    await page.goBack();
    
    console.log("Page Title :", await page.title());
    console.log("Page Url :", page.url());
   
   expect( page.locator("input#small-searchterms")).toBeVisible();
   await page.locator("input#small-searchterms").fill("T-Shirts")
   

   //tag.class

   await page.locator("input.search-box-text").fill("Apple Mobile")

   // tag[attribute=value]

   //await page.locator("input[name=q]").fill("T-shirts");
   await page.locator("[name='q']").fill("T-shirts");

   // tag with class and attribute
  // input.search-box-text[value='Search store']

 // Absolute css - div>div>div>div[class=search-box]
 // Relative CSS - 
// div[class=search-box]
//input[id='small-searchterms'][name='q']
// body>div:nth-child(4)

// div[class^=sea] - class name starts with sea
//input[id$=terms] - id ends with terms
// input[id*=erm] - id contains *
// input[id=small-searchterms]:not([class=search-box-text]) - or 
// input[id=small-searchterms]:not([class=box-text]) - 2nd element is not matching
// input:not([id=small-searchterms]):not([class=search-box-text])  - matching with other elements
// input[id=small-searchterms]+input - matching next element
// input[id=small-searchterms]+* - matching next input tag



})














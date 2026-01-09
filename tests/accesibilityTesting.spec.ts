/*
1. Playwright can be used to test your application for many types of accesibility issues
 example :
   Missing or Improper ALT Text for Images
   Poor Colaor contrast
   Missing form Labels
   keyboard navigation Issues


   - Every website should follow WCAG guidelines.
   web content accessibility guidelines (WCAG)

   Install @axe-core/playwright:
    npm install @axe-core/playwright

    https://www.npmjs.com/package/@axe-core/playwright

*/

import {test,expect} from "@playwright/test";
import AxeBuilder from '@axe-core/playwright';

test("accessibility test....", async({page},testInfo)=>{

    await page.goto("https://www.w3.org/");
    // 1. Scanning defect all type of WCAG violation

    const accessibiltyScanResults=await new AxeBuilder ({page}).analyze();
    expect.soft(accessibiltyScanResults.violations.length).toBe(0);

    // scanning for few WCAG violations
    
    const accessibiltyScanResultsForTags=await new AxeBuilder ({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    expect.soft(accessibiltyScanResultsForTags.violations.length).toBe(0);

    const accessibiltyScanResultsForRule=await new AxeBuilder ({page}).disableRules(['duplicate-id']).analyze();
    expect.soft(accessibiltyScanResultsForRule.violations.length).toBe(0);


    await testInfo.attach('accessibility results',{
      
            body:JSON.stringify(accessibiltyScanResults,null,2),
            contentType:'application/json'
        });
    })
    


import {test,expect, Locator} from "@playwright/test";
test("Verify dropdown is sorted  ",async({page})=>{

    test.setTimeout(10000);
    await page.goto("https://testautomationpractice.blogspot.com/");
    const drpdnOP:Locator=page.locator('#colors>option'); //having duplictaes
    const opTxt:string[]=(await drpdnOP.allTextContents()).map(txt=>txt.trim());

   const mySet =new Set<string>(); // Set- duplicates not allowed
   const duplicates:string[]=[];   // Array- duplicates allowed

   console.log(opTxt);
   
   for (const txt of opTxt) {
       if(mySet.has(txt)){
           duplicates.push(txt);
       }
       else{
           mySet.add(txt);
       }
   }

   console.log(duplicates);
   expect(duplicates.length).toBe(2);
   
   



    
})



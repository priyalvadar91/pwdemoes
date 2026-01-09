import {test,expect, Locator} from "@playwright/test";

test("Verify Autosuggest drop down............  ",async({page})=>{

    test.setTimeout(90000);
    await page.goto("https://www.flipkart.com/");
    const searchBx:Locator=page.locator("input[class='lNPl8b']");//
    await searchBx.fill("Mobile");

    page.fill("input[class='lNPl8b']","Mobile")
   
    const text=await searchBx.inputValue();
    console.log(text)
    await page.waitForTimeout(3000);
    const autoS:Locator=page.locator("ul>li")
    console.log(await autoS.count());
    
    const allText:string[]=await autoS.allInnerTexts();
    console.log(allText);
    let i:number=0;
    for (const txt of allText) {
        console.log(i++," : ",txt);
    }
    
    console.log("---------------------------------------------------------------")
    await page.waitForTimeout(3000);
    const auto:Locator=page.locator("ul>li");
    console.log(await auto.count())
    console.log(await auto.nth(3).innerText());

    console.log("---------------------------------------------------------------")

    for (let i = 0; i < await autoS.count(); i++) {
        console.log(i,": ",await autoS.nth(i).innerText())
        
    }
    console.log("---------------------------------------------------------------")
    let cnt=await autoS.count()
    for (let i = 0; i <cnt ; i++) {
        const text=await autoS.nth(i).innerText();
        if(text==='mobile under 7000'){
          
            await autoS.nth(i).waitFor({ state: 'visible', timeout: 5000 });
            await autoS.nth(i).click();
            break;
        }
    }
    console.log(page.url())

    
})



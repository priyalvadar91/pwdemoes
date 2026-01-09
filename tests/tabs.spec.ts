import {test,expect,chromium} from "@playwright/test"
test("Handle tabs ",async({})=>{

    const broswer=await chromium.launch();
    const context=await broswer.newContext();
    // creating 2 pages
    const parentPage = await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // 2 statesment go paralelly
    //context.waitForEvent('page')
    //parentPage.getByText("New Tab").click()

    const [childPage]=await Promise.all([context.waitForEvent('page'),parentPage.getByText("New Tab").click()])
   // Approach 1: Switch between pages and get titles

   console.log("// Approach 1: Switch between pages and get titles");
   
   const pages= context.pages();
   console.log("Title of Parent Page :",await pages[0].title());
   console.log("Title of child Page  :",await pages[1].title());
    
    // Approach 2: alternative
    console.log(" Approach 2: alternative");
    console.log("Title of Parent Page :",await parentPage.title());
    console.log("Title of child Page  :",await childPage.title());

    //
    
   


})
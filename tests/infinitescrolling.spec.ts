import {test,expect} from "@playwright/test"

test("Infinite Scrolling...",async({page})=>{
    test.slow(); // set timeout for a single test easy way to triple the default timeout is 30 sec(30000 ms)

   await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");
  // window.scrollTo(0,document.body.scrollHeight);
  let previousHeight=0;
   while(true){

     await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
       });

       await page.waitForTimeout(3000);
       const currentHeight= await page.evaluate(()=>{
           return document.body.scrollHeight; 
          });

       

    console.log("previousHeight :",previousHeight);
    console.log("currentHeight  :",currentHeight);
    console.log("---------------------------------------");
    
     
    if(previousHeight===currentHeight){
        break;
    }
    else{
        previousHeight=currentHeight;
    }
   }
   console.log("Reached at the end of page.............");
   
})

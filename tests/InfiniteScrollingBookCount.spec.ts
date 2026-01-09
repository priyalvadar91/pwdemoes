import {test,expect} from "@playwright/test"

test("Infinite Scrolling...",async({page})=>{
    test.slow(); // set timeout for a single test easy way to triple the default timeout is 30 sec(30000 ms)

   await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");
  // window.scrollTo(0,document.body.scrollHeight);
  let bookFind = false;
  let previousHeight=0;
  let totalBooks=0;
  let booksOnPage=0;
  let bookTitlesText=[];
   while(true){

    const bookTitles = await page.locator("#productsDiv h3").all();
    bookTitlesText=await page.locator("#productsDiv h3").allInnerTexts();
    console.log(bookTitles.length);
    booksOnPage=bookTitles.length;

    const pre = bookTitles.length ;
   
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
   console.log("Total Books :", bookTitlesText.length);
})

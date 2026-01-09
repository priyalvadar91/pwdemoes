/* 
An iframe (short for "inline frame") is an HTML element that allows you to
embed another HYML documnet witjin the current documet
- Iframes are commonly used to extend to embed external comtent such as videoes,maps,
other web pages (as seen here) into a web page 

*/

import {test, expect} from "@playwright/test"
test("frames demo..",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total number of frames present on the page
    const frames = page.frames();
    console.log("Number of frames: ",frames.length);

    // Approach 1: using page.frame().............
   const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    if(frame1){
       await frame1.locator("input[name='mytext1']").fill("Hello");
      console.log(await frame1.locator("input[name='mytext1']").inputValue());     
    }
    else{
        console.log("Frame is not available");       
    }

   
    // Approach 2 : Using frameLocator() ---
    console.log("// Approach 2 : Using frameLocator() ---");
    const inputBox=await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
     await inputBox.fill('JOHN');
    console.log(await inputBox.inputValue());  


})

test.only("inner frames demo..",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    if(frame3){
        await frame3.locator("input[name='mytext3']").fill("Welcome");
        const childFrames= frame3.childFrames();
        console.log("Child frames :", childFrames.length);
        const radio =childFrames[0].getByLabel('I am a human');
        await radio.check();
        await expect(radio).toBeChecked();
    }
    else{
        console.log("frame 3 is not found");
        
    }
  


})
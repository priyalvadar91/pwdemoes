import {test,expect} from "@playwright/test"

test("Frame assignments .....",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total number of frames present on the page
    const frames = page.frames();
    console.log("Number of frames: ",frames.length);

   
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    if(frame1){
        const inputbox1= frame1.locator("input[name='mytext1']");
        await inputbox1.fill("Welcome 1")
        await page.waitForTimeout(3000);
        console.log(await inputbox1.inputValue());
    }
    else{
        console.log("Page is not available");
        
    }

    const frame2 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
    if(frame2){
        const inputbox2=frame2.locator("input[name='mytext2']");
        await inputbox2.fill("Welcome 2")
        await page.waitForTimeout(3000);
        console.log(await inputbox2.inputValue());
    } else{
        console.log("Page is not available");
        
    }
   

    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    if(frame3){
        const inputbox3=frame3.locator("input[name='mytext3']");
        await inputbox3.fill("Welcome 3")
        await page.waitForTimeout(3000);
        console.log(await inputbox3.inputValue());
    } else{
        console.log("Page is not available");
        
    }

    const frame4 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'});
    if(frame4){
        const inputbox4=frame4.locator("input[name='mytext4']");
        await inputbox4.fill("Welcome 4")
        await page.waitForTimeout(3000);
        console.log(await inputbox4.inputValue());
    } else{
        console.log("Page is not available");
        
    }
    
    const frame5 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});
    if(frame5){
        const inputbox5=frame5.locator("input[name='mytext5']");
        await inputbox5.fill("Welcome 5")
        await page.waitForTimeout(3000);
        console.log(await inputbox5.inputValue());
        console.log(frame5.url());
        

        await frame5.locator("a[href='https://a9t9.com']").click();
        await frame5.waitForTimeout(3000);
        console.log("new frame URL:",frame5.url());
        const newFrame=page.frame({url:'https://ui.vision/'})
        const logo =newFrame.locator('#logo');
        console.log(await logo.isVisible());

        await expect(logo).toBeVisible();

    } else{
        console.log("Page is not available");
        
    }
    

   
    
})
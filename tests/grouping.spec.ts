import { test, expect } from "@playwright/test"

test.describe('Gruop1',async()=>{

    
test('Test1', async ({ }) => {
    console.log("This is test 1");
    
    });
    
    test('Test2', async ({ }) => {
        console.log("This is test 2");
    });
    
})

test.describe('Gruop2',async()=>{
    
    test('Test3', async ({ }) => {
        console.log("This is test 3");
    });
    
    
    test('Test4', async ({ }) => {
        console.log("This is test 4");
    });
    
})




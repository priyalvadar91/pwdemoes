import { test } from "@playwright/test";
//test.describe.configure({mode:"serial"})
//test.describe.configure({mode:"parallel"})

test.describe('group1',()=>{

    test('Test1',async({page})=>{
        console.log("this is Test 1");
        
    })

    test('Test2',async({page})=>{
        console.log("this is Test 2");
        
    })

    test('Test3',async({page})=>{
        console.log("this is Test 3");
        
    })
    test('Test4',async({page})=>{
        console.log("this is Test 4");
        
    })

    test('Test5',async({page})=>{
        console.log("this is Test 5");
        
    })

})
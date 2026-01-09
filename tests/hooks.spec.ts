import {test,expect} from "@playwright/test"
// Step 1
// Step 2
test.beforeEach('',async()=>{
    console.log("This is before each...");
    
})

test.afterEach('',async()=>{
    console.log("This is after each...");
    
})

test.beforeAll('',async()=>{
    console.log("This is beforeAll ...");
    
})
test.afterAll('',async()=>{
    console.log("This is afterAll...");
    
})


test('Test 1', async()=>{
    //login
    console.log("This is Test 1");
    //logout
});

test('Test 2', async()=>{
    //login
    console.log("This is Test 2");
    //logout
    
});


test('Test 3', async()=>{
    //login
    console.log("This is Test 3");
    //logout
});


test('Test 4', async()=>{
    //login
    console.log("This is Test 4");
      //logout
    
});


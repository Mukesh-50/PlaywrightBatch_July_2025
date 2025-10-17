import {test,expect} from "@playwright/test"

test("Sample Test For Github Branching",async function ({page}) 
{

       console.log("Starting Test");
         
       const loginPage=new LoginPage(page)
   
       await loginPage.gotoURL()

       console.log("Loading URL");
   
       await loginPage.fillEmail("admin@email.com")

       console.log("Entered Username");
   
       await loginPage.fillPassword("admin@123")

       console.log("Entered Password");
   
       await loginPage.submit()
    
})

test("Sample Test For Github Branching1",async function ({page}) 
{
    
})

test("Sample Test For Github Branching2",async function ({page}) 
{
    
})

test("Sample Test For Github Branching3",async function ({page}) 
{

    
})

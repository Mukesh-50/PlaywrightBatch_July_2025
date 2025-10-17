import {test,expect} from "@playwright/test"

test("Sample Test For Github Branching",async function ({page}) 
{

    const loginPage=new LoginPage(page)

    await loginPage.gotoURL()

    await loginPage.fillEmail("admin@email.com")

    await loginPage.fillPassword("admin@123")

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

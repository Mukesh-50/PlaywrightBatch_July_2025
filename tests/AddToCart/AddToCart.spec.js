import {test,expect} from "@playwright/test"

test("Sample Test For Github Branching",async function ({page}) 
{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByText("Sign in").nth(1).click()
    
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

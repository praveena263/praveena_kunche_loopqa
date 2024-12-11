const {test,expect} = require('@playwright/test');
const {signIn} = require("./data.json");

exports.expect=expect;

exports.test=test.extend({
    logIn:async({browser},use)=>{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("/");
        await page.locator('#username').fill(signIn.userName)
        await page.locator('#password').fill(signIn.password)
        await page.getByRole('button', { name: 'Sign in' }).click();
        await  expect(page.locator('h1.text-xl').getByText('Web Application')).toBeVisible()
        await  expect(page.locator('h1.text-lg').getByText('Projects')).toBeVisible();
        await use(page)
        await context.close()
    }
})

import {test, expect} from '@playwright/test';  

test('Selectors', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.click('id=user-name');
    // await page.pause();
    // await page.locator('id=user-name').fill('abc');
    // await page.locator('#login-button').click();
    // await page.locator('//input[@name="password"]').fill('123');
    // await page.locator('text=Login').click();
    await page.pause();

})
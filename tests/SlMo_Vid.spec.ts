import { test, expect, chromium } from '@playwright/test';

test('Slow Motion Video', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {
                width: 1280,
                height: 720
            }
        }
    });

    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await context.close();


})    
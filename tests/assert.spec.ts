import { test, expect } from '@playwright/test';

test('Assert Demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    // Assertions

    // Check element present/not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }


    // Check element visible/hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    // element enabled/disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    // check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    // await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen1');

    // check attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    

    // url & title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');

    await page.pause();

    // visual validation with screenshot
    await expect(page).toHaveScreenshot();

})
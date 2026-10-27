import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('.myntraweb-sprite.desktop-iconWishlist').click();
});

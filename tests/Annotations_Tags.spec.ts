import { test } from '@playwright/test';


// Annotations

test.skip('Test1', async ({ page }) => {

})

test('Test2', async ({ page }) => {
    test.fail();
})

test.fixme('Test3', async ({ page }) => {

})

test('Test4', async ({ page }) => {
    test.slow();
});

test.only('Test5', async ({ page }) => {

});


// Tags

test('Test6 @fast', async ({ page }) => {

})

test('Test7 @smoke', async ({ page }) => {

})
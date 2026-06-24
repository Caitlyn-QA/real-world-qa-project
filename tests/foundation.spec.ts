import { test, expect } from '@playwright/test';

test('Harbour Tools staging application loads', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/practicesoftwaretesting\.com\/?$/);
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});
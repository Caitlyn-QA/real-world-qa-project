import { test, expect } from '@playwright/test';

test('guest customer can add one product to the cart', async ({ page }) => {
  const targetProductName = 'Pliers';

  await test.step('Open the selected product details', async () => {
    await page.goto('/');

    const targetProductCard = page.getByRole('link').filter({ has: page.getByRole('heading', { name: targetProductName, exact: true})});

    await expect(targetProductCard).toHaveCount(1);
    await expect(targetProductCard).toBeVisible();

    const expectedProductHrefValue = await targetProductCard.getAttribute('href');

    if (!expectedProductHrefValue) {
      throw new Error( 'The selected product card does not contain an href.' );
    }

    await targetProductCard.click();

    await expect(page).toHaveURL(expectedProductHrefValue);
  });

  const productDetailsHeading = page.getByRole('heading', {name: targetProductName, exact: true});

  const productDetailsUnitPrice = page.getByTestId('unit-price');

  const productDetailsQuantityInput = page.getByLabel( 'Quantity',{ exact: true });

  const productDetailsAddToCartButton = page.getByRole('button', { name: 'Add to cart', exact: true });

  let productNameFromDetailsPage = '';
  let unitPriceFromDetailsPage = '';

  await test.step('Verify and record product details for cart validation', async () => {
      await expect(productDetailsHeading).toBeVisible();
      await expect(productDetailsUnitPrice).toBeVisible();
      await expect(productDetailsQuantityInput).toHaveValue('1');
      await expect(productDetailsAddToCartButton).toBeVisible();
      await expect(productDetailsAddToCartButton).toBeEnabled();

      productNameFromDetailsPage = (await productDetailsHeading.innerText()).trim();

      unitPriceFromDetailsPage =(await productDetailsUnitPrice.innerText()).trim();
    },
  );

  const headerShoppingCart = page.getByRole('link', {name: 'cart',exact: true});

  await test.step('Add one unit of the selected product to the cart',async () => {
      await expect(headerShoppingCart).toHaveCount(0);

      await productDetailsAddToCartButton.click();

      const successAlert = page.getByRole('alert');

      await expect(successAlert).toContainText('Product added to shopping cart');

      await expect(headerShoppingCart).toBeVisible();

      const headerShoppingCartQuantityBadge =headerShoppingCart.getByTestId('cart-quantity');

      await expect(headerShoppingCartQuantityBadge).toHaveText('1');
    },
  );

  await test.step('Open the shopping cart', async () => {
const expectedShoppingCartPath = await headerShoppingCart.getAttribute('href');

    if (!expectedShoppingCartPath) {
      throw new Error('The shopping cart link does not contain an href.' );
    }

    await headerShoppingCart.click();

    await expect(page).toHaveURL(expectedShoppingCartPath);
  });

  const shoppingCartProductRow = page.getByRole('row').filter({has: page.getByText(productNameFromDetailsPage, { exact: true})});

  const shoppingCartProductName = shoppingCartProductRow.getByTestId('product-title');

  const shoppingCartProductQuantityInput = shoppingCartProductRow.getByTestId('product-quantity');

  const shoppingCartProductUnitPrice = shoppingCartProductRow.getByTestId('product-price');

  await test.step('Verify the selected product in the cart',async () => {
      await expect(shoppingCartProductRow).toHaveCount(1);
      await expect(shoppingCartProductRow).toBeVisible();

      await expect(shoppingCartProductName).toHaveText(productNameFromDetailsPage);

      await expect(shoppingCartProductQuantityInput).toHaveValue('1');

      await expect(shoppingCartProductUnitPrice).toContainText(unitPriceFromDetailsPage);
    },
  );

  await test.step('Verify the cart contents persist after refresh',async () => {
      await page.reload();

      await expect(shoppingCartProductRow).toHaveCount(1);
      await expect(shoppingCartProductRow).toBeVisible();

      await expect(shoppingCartProductName).toHaveText( productNameFromDetailsPage);

      await expect(shoppingCartProductQuantityInput).toHaveValue('1');

      await expect(shoppingCartProductUnitPrice).toContainText(unitPriceFromDetailsPage);
     },
  );
});

# AUTO-101 — Guest Add-to-Cart Automation Test Guide

## Overview

This guide explains the purpose, logic, and design decisions behind the automated guest add-to-cart test created for AUTO-101.

**Automated test:** [`tests/cart/add-one-product.spec.ts`](../../tests/cart/add-one-product.spec.ts)

The test builds on the earlier manual analysis and exploratory testing completed for HT-101.

## Business Risk

A customer may believe that a product was added successfully while the cart contains incorrect information, such as the wrong product, price, or quantity.

The cart could also appear correct immediately after the action but lose its contents when the page is refreshed.

These failures could interrupt the purchase journey, reduce customer trust, and lead to lost sales.

## What the Test Proves

The automated test verifies that a guest customer can:

- open the details page for a selected product;
- view a default quantity of one;
- add one unit of the product to the cart;
- receive confirmation that the product was added;
- see the header cart quantity update to one;
- open the shopping cart;
- see the correct product name, unit price, and quantity;
- refresh the page without losing the cart contents.

## Automated Journey

```text
Open the product catalogue
→ locate the selected product
→ open its product details
→ record the displayed product name and unit price
→ confirm the default quantity is one
→ add one unit to the cart
→ verify the success message
→ verify the header cart quantity
→ open the shopping cart
→ compare the cart values with the product details
→ refresh the page
→ verify that the cart contents persist
```

## Important Design Decisions

### Deterministic product selection

The test deliberately selects `Pliers` rather than choosing the first product in the catalogue.

Using a known product makes the scenario reproducible and prevents the test from depending on catalogue order.

### User-facing product locator

The catalogue product is located as a link containing a heading whose exact name is `Pliers`.

This avoids depending on the generated product ID and prevents an accidental partial match with products such as `Combination Pliers`.

### Dynamic navigation validation

The product card’s `href` value is captured before the card is clicked.

After the click, the test verifies that the browser reached that exact destination. This validates the connection between the selected product card and the resulting details page without hardcoding the generated product ID.

The shopping cart destination is validated in the same way.

### Product values captured from the UI

The product name and unit price are recorded from the product details page.

These captured values are later compared with the cart contents. This verifies consistency between the product details page and the shopping cart without duplicating the expected price in the test.

### Semantic locators and test IDs

The test prefers user-facing locators where the application provides meaningful roles or labels, including:

- links;
- headings;
- buttons;
- labelled quantity inputs;
- alerts.

Stable `data-test` hooks are used for information that does not have a useful semantic role, such as unit prices and cart-row values.

Playwright is configured to recognise the application’s `data-test` attribute through `getByTestId()`.

### Cart-row scoping

The test first locates the cart row containing the selected product name.

The product title, quantity, and unit price are then validated inside that row. This prevents the test from accidentally matching values shown elsewhere on the page, such as totals.

### Meaningful rendering checkpoint

The cart’s `CART` step label appears before the product data has finished rendering.

For this reason, the test waits for the expected product row rather than using the step label as evidence that the cart is ready.

### Named test steps

The scenario uses `test.step()` to make the business journey visible in the Playwright report:

1. Open the selected product details
2. Verify and record product details for cart validation
3. Add one unit of the selected product to the cart
4. Open the shopping cart
5. Verify the selected product in the cart
6. Verify the cart contents persist after refresh

### Visible cart assertions

The cart assertions are repeated before and after the page refresh.

A shared helper was considered, but the assertions were kept inside each test step so that the behaviour being verified remains immediately visible and easy to follow. A helper may become valuable later if the same validation is reused across several tests.

## Running the Test

### Normal execution

```powershell
npm test -- tests/cart/add-one-product.spec.ts
```

### Debug mode

```powershell
npx playwright test tests/cart/add-one-product.spec.ts --debug
```

Debug mode opens the browser and Playwright Inspector, allowing each action and assertion to be followed step by step.

### TypeScript validation

```powershell
npm run typecheck
```

## Validation Completed

The test has been run successfully:

- in Playwright debug mode;
- at normal automation speed;
- through the TypeScript type check.

## Scope

AUTO-101 covers the guest add-to-cart journey for one available product.

The following areas remain outside its scope:

- authenticated customer automation;
- repeated additions of the same product;
- multiple products;
- quantity changes;
- product removal;
- unavailable or out-of-stock products;
- checkout completion;
- cross-browser execution.

## Related Artefacts

- [HT-101 Test Analysis](../test-analysis/HT-101-add-one-product.md)
- [HT-101 Guest Cart Exploratory Testing](../exploratory-testing/HT-101-cart-exploration.md)
- [HT-101 Authenticated Cart Exploratory Testing](../exploratory-testing/HT-101-authenticated-cart-exploration.md)

# HT-101 — Add One Product to the Shopping Cart
**Related User Story:** HT-101
**Related QA Task:** QA-101
**Analysis Status:** Complete — ready for exploratory testing


## Requirement Summary

HT-101 requires a customer to be able to add one available product to the shopping cart. The cart must show the selected product with the correct name, price and initial quantity, and the cart indicator must increase accordingly. The cart should remain populated after a page refresh within the same browser session.

## Business Risk

Adding a product to the cart is part of the revenue-critical purchase journey. If the feature fails, customers may be unable to continue toward checkout, may add the wrong product, or may lose confidence when prices and quantities are incorrect. This could result in abandoned purchases, lost revenue and additional customer-support requests.

## Confirmed Decisions

- The cart indicator represents the total quantity of products in the cart.
- Adding the same product again increases the quantity of the existing cart line.
- Cart contents should remain after refreshing the page within the same browser session.
- Guest and authenticated customers should have the same add-to-cart behaviour.
- The cart price must match the price displayed on the product page.
- Chromium is the required browser for Sprint 1.
- Unavailable products and maximum-quantity behaviour are outside the scope of HT-101.

## Open Questions

There are no blocking requirement questions at this stage.

Additional questions may be raised during exploratory testing if the observed application behaviour does not match the confirmed requirements.

## Test Conditions

### Positive Scenarios

- Verify that an available product can be added to an empty cart.
- Verify that the cart indicator displays one after a single product is added.
- Verify that the selected product appears in the shopping cart.
- Verify that the product name in the cart matches the name shown on the product page.
- Verify that the product price in the cart matches the price shown on the product page.
- Verify that the initial product quantity in the cart is one.
- Verify that the product remains in the cart after refreshing the page within the same browser session.
- Verify that a guest customer can add an available product to the cart successfully.
- Verify that an authenticated customer can add an available product to the cart successfully.

### Negative Scenarios

No dedicated negative input scenarios are included within the confirmed scope of HT-101.

Unavailable-product behaviour and maximum-quantity or stock-limit validation are outside this story and should be covered by separate work items.

During the standard add-to-cart flow, QA will still guard against the following incorrect outcomes:

* An unrelated product is added to the cart.
* The cart indicator displays an incorrect quantity.
* The cart displays a product name or price that differs from the selected product.

### Edge Cases

- Verify that a product with a long name is displayed correctly in the cart without losing or changing its identity.
- Verify that a product price containing decimal values is preserved accurately in the cart.
- Verify that the cart remains correct after navigating away from the cart and returning within the same browser session.
- Verify that refreshing the product page after adding the item does not remove the product from the cart.
- Verify that refreshing the cart page does not duplicate the product or change its quantity.
- Verify that using browser back and forward navigation does not unexpectedly remove or duplicate the cart item.

The following related edge cases are outside HT-101 and will be handled separately:

- Adding the same product repeatedly
- Adding a product when the cart already contains other products
- Maximum quantity and stock-limit behaviour
- Unavailable products

## Test Data Requirements

The following test data is required for HT-101:

- One available product that can be added to the cart.
- The product name displayed on the product page.
- The product price displayed on the product page.
- A known empty-cart state before each test begins.
- A valid customer account for authenticated-user coverage.
- A guest browser session for guest-user coverage.
- A product with a decimal price for price-accuracy checks.
- A product with a longer name for display and identity checks.

Where possible, product information should be captured dynamically from the application rather than hardcoded into the test.

Test data should be selected from products currently available in the staging environment.

## Dependencies and Environment

HT-101 depends on the following:

- The Practice Software Testing staging environment is available and stable enough for testing.
- At least one available product can be opened and added to the cart.
- Product name and price information are displayed correctly on the product page.
- The shopping cart can be accessed after adding a product.
- A valid customer account is available for authenticated-user coverage.
- Chromium is available as the required Sprint 1 browser.
- The browser session begins with a known cart state.

Testing may be blocked if:

- The staging environment is unavailable.
- Products cannot be loaded.
- Product or cart data is inconsistent because of an environment issue.
- A valid test account cannot be used.
- The cart contains existing items that cannot be cleared reliably.

## Regression Impact

HT-101 may affect the following existing behaviour:

- Product-detail page actions
- Cart indicator updates
- Shopping-cart contents
- Product name and price display
- Cart persistence within the same browser session
- Guest and authenticated customer behaviour
- Navigation between the product page and cart
- Entry into the checkout journey

Targeted regression should include:

- Opening an available product
- Adding one product to an empty cart
- Opening the shopping cart
- Confirming the correct product information
- Refreshing the page and checking cart persistence
- Restoring the cart to a known clean state using a reliable setup or cleanup method

Broader cart scenarios, including multiple products and quantity changes, will be covered by separate stories but may require regression if HT-101 changes shared cart behaviour.

## Automation Recommendation

The standard HT-101 add-to-cart journey is a strong candidate for Playwright automation.

Automation is recommended because the behaviour is:

- Part of a revenue-critical customer journey
- Expected to be tested repeatedly during regression
- Suitable for clear and deterministic assertions
- Dependent on product information that can be captured dynamically
- Valuable as a foundation for later cart and checkout tests

The initial automated scenario should cover:

- Starting with an empty cart
- Opening an available product
- Capturing the product name and price
- Adding the product to the cart
- Verifying that the cart indicator displays one
- Opening the cart
- Verifying the product name
- Verifying the product price
- Verifying that the initial quantity is one

Refresh persistence and authenticated-user behaviour should first be explored manually. They may be added to automation after the standard journey is stable and the required test setup is understood.

Automation should be tracked through a separate Automation Task linked to HT-101 and QA-101.

## Out of Scope

The following behaviour is outside the scope of HT-101:

- Adding the same product multiple times
- Adding different products to the cart
- Updating product quantity
- Maximum quantity and stock-limit validation
- Unavailable-product behaviour
- Removing products from the cart
- Empty-cart behaviour
- Checkout validation
- Cross-browser testing beyond Chromium
- Cart persistence across separate browser sessions
- Cart persistence after logout or account changes

These areas should be covered by separate User Stories or future regression work.

## Analysis Status

Complete — ready for exploratory testing.

The confirmed requirements, business risks, test conditions, test-data needs, dependencies, regression impact and initial automation recommendation have been documented.

Any new questions or risks discovered during exploratory testing will be recorded and linked to HT-101 and QA-101.

# HT-101 — Cart Exploratory Testing

**Related User Story:** [HT-101 — Add one product to the shopping cart](https://github.com/Caitlyn-QA/real-world-qa-project/issues/2)
**Related QA Task:** [QA-101 — Analyse and test HT-101](https://github.com/Caitlyn-QA/real-world-qa-project/issues/3)
**Tester:** Caitlyn
**Session Status:** Completed

## Session Objective

Investigate whether a guest customer can add one available product to an empty shopping cart and whether the cart displays and preserves the correct product information.

## Exploratory Charter

Explore the add-to-cart journey for one available product in Chromium, focusing on the cart indicator, product identity, price, initial quantity and same-session refresh persistence.

## Environment

- **Application:** Practice Software Testing
- **Environment:** Staging simulation
- **URL:** https://practicesoftwaretesting.com/
- **Browser:** Chromium
- **Tester:** Caitlyn
- **Session date:** 23 June 2026

## Starting Conditions

- Customer is not signed in
- Cart is empty
- Browser session is active
- An available product is selected from the product catalogue
- No filters or search criteria are required for the initial session

## Session Scope

This session will explore:

- Adding one available product to an empty cart as a guest customer
- The cart indicator after adding the product
- The product shown in the cart
- Product-name accuracy
- Price accuracy
- Initial quantity
- Cart persistence after refreshing the page within the same browser session

## Out of Scope

This session will not cover:

- Adding the same product repeatedly
- Adding multiple different products
- Changing product quantity
- Removing products from the cart
- Unavailable products
- Stock or maximum-quantity limits
- Checkout
- Authenticated-customer behaviour
- Browsers other than Chromium

## Test Data

Complete during the session:

- **Selected product name:** Pliers
- **Product-page price:** $12.01
- **Product availability:** Available — Add to cart button is enabled
- **Starting cart state:** No cart icon or quantity indicator displayed

## Observation Log

| Step | Action or observation             | Expected behaviour                                 | Actual behaviour                                                                                         | Result                       |
| ---- | --------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 1    | Confirm the starting cart state   | No products are present before testing begins      | No cart icon or quantity indicator is displayed on the initial page                                      | Starting condition confirmed |
| 2    | Open one available product        | Correct product-detail page opens                  | The Pliers product-detail page opened and matched the selected catalogue card                            | Passed                       |
| 3    | Record the product name and price | Product information is visible                     | Product name `Pliers` and price `$12.01` were clearly displayed                                          | Passed                       |
| 4    | Add the product to the cart       | Product is added successfully                      | A confirmation message displayed: Product added to shopping cart.                                        | Passed                       |
| 5    | Check the cart indicator          | Indicator increases from 0 to 1                    | The cart icon appeared and displayed a quantity badge of 1                                               | Passed                       |
| 6    | Open the shopping cart            | Selected product appears in the cart               | The cart page opened and displayed `Pliers`                                                              | Passed                       |
| 7    | Compare the product name          | Cart name matches the product page                 | The cart displayed `Pliers`, matching the selected product                                               | Passed                       |
| 8    | Compare the product price         | Cart price matches the product page                | The cart price displayed `$12.01`, matching the product-page price                                       | Passed                       |
| 9    | Check the initial quantity        | Quantity is 1                                      | The quantity field displayed `1` and the line total was `$12.01`                                         | Passed                       |
| 10   | Refresh the cart page             | Cart remains populated in the same browser session | After refreshing, the cart still displayed `Pliers` with quantity `1`, price `$12.01` and cart badge `1` | Passed                       |

## Acceptance Criteria Results

| Acceptance criterion                                                      | Result     | Evidence                                                       |
| ------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------- |
| An available product can be added to the cart                             | Passed     | `Pliers` was added and a success confirmation appeared         |
| The cart indicator increases by one                                       | Passed     | Cart badge appeared with quantity `1`                          |
| The correct product appears in the cart                                   | Passed     | Cart displayed `Pliers`                                        |
| The product name matches the selected product                             | Passed     | Product page and cart both displayed `Pliers`                  |
| The cart price matches the product-page price                             | Passed     | Both displayed `$12.01`                                        |
| The initial product quantity is one                                       | Passed     | Cart quantity displayed `1`                                    |
| The cart remains populated after refresh in the same browser session      | Passed     | Product, price, quantity and cart badge remained after refresh |
| Add-to-cart behaviour is consistent for guest and authenticated customers | Not tested | Authenticated-customer behaviour is outside this session       |

## Additional Observations

- No cart icon or quantity indicator was displayed while the cart was empty.
- After the product was added, the cart icon appeared with a quantity badge of `1`.
- A visible success message confirmed that the product had been added.
- The cart page displayed consistent unit-price, line-total and overall-total values.

## Defects and Questions

- No defects were identified during this session.
- Authenticated-customer behaviour still requires separate validation.

## Remaining Risk

The core guest-customer journey passed using one available product in Chromium. Behaviour for authenticated customers has not yet been verified, so the acceptance criterion requiring consistency between guest and authenticated customers remains open.

## Session Outcome

The guest add-to-cart journey behaved as expected for the selected product. The core workflow is suitable for Playwright automation after the authenticated-customer behaviour has been explored and the final automation scope has been confirmed.

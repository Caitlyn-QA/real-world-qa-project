# HT-101 — Authenticated Cart Exploratory Testing

**Related User Story:** [HT-101 — Add one product to the shopping cart](https://github.com/Caitlyn-QA/real-world-qa-project/issues/2)
**Related QA Task:** [QA-101 — Analyse and test HT-101](https://github.com/Caitlyn-QA/real-world-qa-project/issues/3)
**Related Guest Session:** [HT-101 — Cart Exploratory Testing](HT-101-cart-exploration.md)
**Tester:** Caitlyn
**Session Status:** Completed

## Session Objective

Investigate whether an authenticated customer can add one available product to an empty shopping cart and determine whether the behaviour is consistent with the completed guest-customer session.

## Exploratory Charter

Explore the add-to-cart journey while signed in using Chromium. Focus on product identity, price, initial quantity, cart indicator and same-session refresh persistence, while noting any meaningful differences from the guest-customer experience.

## Environment

- **Application:** Practice Software Testing
- **Environment:** Staging simulation
- **URL:** https://practicesoftwaretesting.com/
- **Browser:** Chromium
- **Customer state:** Authenticated
- **Tester:** Caitlyn
- **Session date:** 24 June 2026

## Test Account

- **Account identifier:** [customer@practicesoftwaretesting.com](mailto:customer@practicesoftwaretesting.com)
- **Account name:** Jane Doe
- **Account type:** Test customer
- **Credential source:** [Practice Software Testing — Default Accounts](https://testsmith-io.github.io/practice-software-testing/)
- **Sign-in successful:** Yes — Jane Doe’s account was visible and no sign-in error appeared

> The password is intentionally not stored in this repository. It can be obtained from the official Default Accounts documentation linked above.

## Starting Conditions

- Customer is signed in successfully
- The authenticated customer’s cart is empty
- Browser session is active
- No filters or search criteria are applied
- The `Pliers` product will be used again if it remains available
- Product name and price will be checked before adding it to the cart
- Only one product will be added during this session

## Session Scope

This session will explore:

- Signing in with a valid test customer account
- Confirming the authenticated customer starts with an empty cart
- Opening the `Pliers` product if it is still available
- Adding one product to the cart
- The cart indicator after adding the product
- Product-name accuracy
- Price accuracy
- Initial quantity
- Cart persistence after refreshing the page
- Any meaningful differences from the guest-customer journey

## Out of Scope

This session will not cover:

- Account registration
- Password-reset behaviour
- Invalid sign-in attempts
- Adding the same product repeatedly
- Adding multiple products
- Changing or removing quantity
- Checkout
- Stock limits
- Browsers other than Chromium

## Test Data

- **Account identifier:** [customer@practicesoftwaretesting.com](mailto:customer@practicesoftwaretesting.com)
- **Selected product name:** Pliers
- **Product-page price:** $12.01
- **Product availability:** Available — Add to cart button is enabled
- **Starting cart state:** No cart icon or quantity indicator displayed

## Observation Log

| Step | Action or observation                  | Expected behaviour                                       | Actual behaviour                                                                                                                                          | Result                       |
| ---- | -------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --- | --- | --- |
| 1    | Sign in with the test customer account | Customer is signed in successfully                       | Sign-in completed successfully and Jane Doe’s account was visible                                                                                         | Passed                       |
| 2    | Confirm the starting cart state        | Authenticated customer begins with an empty cart         | No cart icon or quantity indicator was displayed while signed in as Jane Doe                                                                              | Starting condition confirmed |
| 3    | Open the selected product              | Correct product-detail page opens                        | The Pliers product-detail page opened and matched the selected catalogue product                                                                          | Passed                       |
| 4    | Record the product name and price      | Product information is clearly visible                   | Product name Pliers and price $12.01 were displayed clearly                                                                                               | Passed                       |     |     |     |
| 5    | Add the product to the cart            | Product is added successfully                            | A confirmation message displayed: Product added to shopping cart.                                                                                         | Passed                       |
| 6    | Check the cart indicator               | Cart indicator shows quantity 1                          | The cart icon appeared with a quantity badge of 1                                                                                                         | Passed                       |
| 7    | Open the shopping cart                 | Selected product appears in the cart                     | The cart page opened and displayed Pliers                                                                                                                 | Passed                       |
| 8    | Compare the product name               | Cart name matches the product page                       | The cart displayed Pliers, matching the selected product                                                                                                  | Passed                       |
| 9    | Compare the product price              | Cart price matches the product page                      | The cart displayed $12.01, matching the product-page price                                                                                                | Passed                       |
| 10   | Check the initial quantity             | Cart quantity is 1                                       | The quantity field displayed 1, with a line total and overall total of $12.01                                                                             | Passed                       |
| 11   | Refresh the cart page                  | Cart remains populated in the same browser session       | After refreshing, Jane Doe remained signed in and the cart still displayed Pliers, quantity 1, price $12.01, total $12.01 and cart badge 1                | Passed                       |
| 12   | Compare with the guest session         | No meaningful difference affects the add-to-cart journey | The authenticated journey matched the guest journey for product addition, confirmation, cart indicator, product details, quantity and refresh persistence | Passed                       |

## Acceptance Criteria Results

| Acceptance criterion                                                      | Result | Evidence                                                                                     |
| ------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| An available product can be added to the cart                             | Passed | `Pliers` was added successfully and a confirmation message appeared                          |
| The cart indicator increases by one                                       | Passed | The cart badge appeared with quantity `1`                                                    |
| The correct product appears in the cart                                   | Passed | The cart displayed `Pliers`                                                                  |
| The product name matches the selected product                             | Passed | The product page and cart both displayed `Pliers`                                            |
| The cart price matches the product-page price                             | Passed | Both displayed `$12.01`                                                                      |
| The initial product quantity is one                                       | Passed | The cart quantity displayed `1`                                                              |
| The cart remains populated after refresh in the same browser session      | Passed | Product, quantity, price, total and cart badge remained after refresh                        |
| Add-to-cart behaviour is consistent for guest and authenticated customers | Passed | The authenticated journey matched the completed guest journey for all tested cart behaviours |

## Comparison with Guest Session

No meaningful difference was identified between the guest and authenticated add-to-cart journeys.

In both sessions:

- The empty cart had no visible cart icon or quantity indicator
- Adding `Pliers` displayed the same success confirmation
- The cart icon appeared with a quantity badge of `1`
- Product name, price and initial quantity were correct
- Cart contents remained after refreshing the page
- The customer stayed in the expected account state

## Defects and Questions

- No defects were identified during this session.
- No further product clarification is required for the acceptance criteria covered by HT-101.

## Remaining Risk

The agreed HT-101 acceptance criteria have now been covered for both guest and authenticated customers in Chromium using one available product.

Broader product combinations, repeated additions, quantity changes, unavailable products and cross-browser behaviour remain outside the scope of HT-101.

## Session Outcome

The authenticated add-to-cart journey behaved consistently with the completed guest-customer session.

All confirmed HT-101 acceptance criteria passed during exploratory testing, and the core add-one-product journey is suitable for Playwright automation.

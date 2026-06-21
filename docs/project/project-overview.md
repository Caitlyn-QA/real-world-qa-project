# Project Overview

## Project

**Real-World QA Project**

This project simulates how a QA Engineer contributes within a real software development team.

Rather than practising testing tools through isolated exercises, the project follows a realistic software delivery process. Work is organised through user stories, acceptance criteria, sprint planning, exploratory testing, test automation, defect management, pull-request reviews, continuous integration, regression testing and release-quality reporting.

The project will develop through a series of two-week sprints.

---

## Fictional Company

**Harbour Tools Ltd** is a fictional medium-sized New Zealand e-commerce company selling tools, hardware and workshop equipment to individual customers and small businesses.

The company operates an online store and is working to improve the reliability of important customer journeys while increasing automated regression coverage.

---

## Product Under Test

The project uses the **Practice Software Testing** application as the fictional Harbour Tools staging environment.

The application includes:

* Product browsing
* Product search, filtering and sorting
* Product details
* Shopping cart
* Customer registration and authentication
* Checkout
* Customer accounts
* Orders
* Supporting APIs

The application provides realistic features that can be tested across the user interface, API and, where appropriate, data layers.

---

## Business Context

Harbour Tools has received customer feedback about inconsistent cart and checkout behaviour.

Because the cart and checkout are directly connected to sales, defects in these areas may:

* Prevent customers from completing purchases
* Display incorrect product or pricing information
* Cause customers to lose selected items
* Reduce customer confidence
* Increase support requests
* Create incorrect order data

The company wants to improve release confidence by introducing a more structured QA process and expanding reliable regression automation.

---

## Business Priorities

The main quality priorities are:

1. Protect revenue-critical customer journeys.
2. Reduce defects affecting the cart and checkout.
3. Build reliable automated regression coverage.
4. Improve collaboration between QA, development and product.
5. Identify important risks before release.
6. Base release recommendations on testing evidence.

---

## Project Objectives

The project aims to demonstrate how QA activities work together throughout software delivery.

The objectives are to:

* Review and clarify requirements
* Identify business and technical risks
* Design appropriate test coverage
* Perform purposeful exploratory testing
* Create maintainable Playwright automation
* Introduce API testing when required by the assigned work
* Investigate and document defects
* Use Git branches and pull requests
* Run automated tests through continuous integration
* Perform regression testing
* Communicate remaining risk
* Provide evidence-based release recommendations

---

## Environments

The simulated team works with three environments.

### Development

Used by developers while implementing changes.

This environment may change frequently and may not always be stable enough for full QA testing.

### Staging

Used for feature testing, exploratory testing and automated regression.

For this project, the public Practice Software Testing application represents the Harbour Tools staging environment.

### Production

Represents the live customer environment.

Destructive testing will not be performed against production. Production coverage will be represented by a small set of safe smoke checks and release-monitoring considerations.

---

## Initial Quality Risks

The project begins with the following known risks:

* Customers may add the wrong product to the cart.
* Cart quantities may be incorrect.
* Product prices may differ between the product page and cart.
* Cart totals may be calculated incorrectly.
* Cart contents may be lost during navigation.
* Customers may be prevented from entering checkout.
* Validation errors may be unclear or incorrect.
* Authentication or session behaviour may affect the purchase journey.
* UI information may not match API or stored order data.
* Automated tests may become unreliable because of timing or shared test state.

These risks will be refined as the team explores the product and receives new requirements.

---

## Delivery Approach

The team follows a lightweight two-week Scrum process.

Work progresses through:

1. Backlog refinement
2. Sprint planning
3. Requirement and risk analysis
4. Feature development
5. Exploratory and functional testing
6. Defect reporting and retesting
7. Automation implementation
8. Pull-request review
9. Continuous integration
10. Regression testing
11. Sprint review
12. Retrospective
13. Release-quality assessment

The process is designed to be realistic while avoiding unnecessary administration.

---

## Current Phase

**Project setup and Sprint 1 planning**

The first sprint focuses on **Cart Reliability**.

The initial goal is to verify that customers can add products to the shopping cart and manage cart contents without losing items or seeing incorrect product, quantity or price information.

Detailed Sprint 1 scope and commitments will be recorded in the Sprint 1 plan.

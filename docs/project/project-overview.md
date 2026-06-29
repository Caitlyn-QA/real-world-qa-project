## Project Overview

This project demonstrates how software quality is built throughout a realistic Agile software development lifecycle.

Rather than practising individual testing tools through isolated exercises, the project follows how a QA Engineer collaborates with product owners and developers from the initial business requirement through planning, development, testing, review and continuous improvement across multiple sprints.

The project is designed to show not only **what** QA activities are performed, but also **why** they are important and how they contribute to delivering reliable software.

The project develops through a series of two-week Scrum sprints.

---

## Fictional Company

Harbour Tools Ltd is a fictional medium-sized New Zealand e-commerce company selling tools, hardware and workshop equipment to individual customers and small businesses.

The company operates an online store and is working to improve the reliability of critical customer journeys while increasing confidence in every software release.

---

## Product Under Test

The project uses the Practice Software Testing application as the fictional Harbour Tools staging environment.

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

The application provides realistic functionality that can be tested across the user interface, APIs and, where appropriate, supporting data layers.

---

## Business Context

Harbour Tools has received customer feedback about inconsistent cart and checkout behaviour.

Because these workflows directly affect customer purchases, defects can:

* Prevent customers from completing purchases
* Display incorrect product or pricing information
* Cause customers to lose selected items
* Reduce customer confidence
* Increase support requests
* Create incorrect order data

To improve product quality, the company has introduced a more structured Agile QA process. The goal is not only to increase automated regression coverage, but also to improve requirement clarity, risk identification, collaboration and release confidence throughout each sprint.

---

## Business Priorities

The team's primary quality priorities are:

* Protect revenue-critical customer journeys
* Reduce defects affecting the cart and checkout
* Build reliable automated regression coverage
* Improve collaboration between product, development and QA
* Identify important business and technical risks early
* Base release recommendations on testing evidence

---

## Project Objectives

The project aims to demonstrate how quality is built throughout the software development lifecycle rather than treated as a final testing activity.

The objectives are to:

* Understand business requirements and customer needs
* Review and clarify user stories and acceptance criteria
* Identify business and technical risks
* Design testing based on business value and risk
* Perform purposeful exploratory testing
* Create maintainable Playwright automation for regression coverage
* Introduce API testing where it provides additional confidence
* Investigate, document and prioritise defects
* Collaborate through Git branches and pull requests
* Execute automated tests through continuous integration
* Perform regression testing before release
* Communicate quality status during Sprint Reviews
* Use Sprint Retrospectives to improve future work
* Provide evidence-based release recommendations

---

## What Makes This Project Different

Many QA learning resources teach tools such as Playwright, Selenium or Postman independently.

This project focuses instead on how those tools fit together within a realistic software development process.

Every activity is connected to a business objective, showing not only what a QA Engineer does, but why each activity contributes to delivering reliable software.

Rather than presenting isolated examples, the repository follows an evolving product through multiple sprints, allowing readers to experience the complete QA workflow from initial requirement to release recommendation.

---

## Environments

The simulated team works with three environments.

### Development

Used by developers while implementing changes.

This environment changes frequently and may not always be stable enough for complete QA testing.

### Staging

Used for feature testing, exploratory testing and automated regression.

For this project, the public Practice Software Testing application represents the fictional Harbour Tools staging environment.

### Production

Represents the live customer environment.

Destructive testing is not performed against production. Production coverage is represented through safe smoke checks together with release monitoring considerations.

---

## Initial Quality Risks

The project begins with the following known risks:

* Customers may add the wrong product to the cart
* Cart quantities may be incorrect
* Product prices may differ between the product page and cart
* Cart totals may be calculated incorrectly
* Cart contents may be lost during navigation
* Customers may be prevented from entering checkout
* Validation errors may be unclear or incorrect
* Authentication or session behaviour may affect the purchase journey
* UI information may not match API or stored order data
* Automated tests may become unreliable because of timing or shared test state

These risks are reviewed continuously as new requirements emerge and additional product knowledge is gained throughout the project.

---

## Delivery Approach

The team follows a lightweight two-week Scrum process designed to reflect how modern Agile teams deliver software.

Each sprint follows a continuous quality workflow:

* Backlog refinement
* Sprint planning
* Requirement review and clarification
* Risk analysis
* Feature development
* Exploratory testing
* Functional verification
* Defect reporting and discussion
* Test automation where appropriate
* Pull-request review
* Continuous integration
* Regression testing
* Sprint Review
* Sprint Retrospective
* Backlog refinement for the next sprint

Insights from each Sprint Review and Sprint Retrospective directly influence future user stories, priorities and quality improvements, demonstrating how Agile teams continuously refine both their product and their development process.

The process is intentionally realistic while avoiding unnecessary administration.

---

## Current Phase

**Sprint 2 Preparation**

Sprint 1 has been completed, including:

* Requirement analysis
* Risk assessment
* Exploratory testing
* Test design
* Playwright automation
* Sprint Review
* Sprint Retrospective

The outcomes of Sprint 1 have been incorporated into the Sprint 2 backlog, demonstrating how feedback, lessons learned and quality improvements influence future planning in a realistic Agile environment.

Detailed Sprint plans, user stories, testing activities and project artefacts are documented within the corresponding sprint folders.


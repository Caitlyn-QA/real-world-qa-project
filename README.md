# Real-World QA Project

**Status: In progress — Sprint 1 feature testing**

## Overview

This is an evolving end-to-end QA project designed to simulate how a QA Engineer works within a real software development team.

Instead of practising testing tools through isolated exercises, this project follows a realistic delivery process using user stories, acceptance criteria, exploratory testing, test automation, defect reporting, Git workflows, continuous integration, regression testing and release-quality assessment.

The project will grow through a series of two-week sprints.

## Start Here

New to company-style QA delivery?

Read the [Project Reviewer Guide](reviewer-guide.md) for a beginner-friendly walkthrough of what was created, in which order, and why each part exists in a realistic software delivery process.

## Fictional Company

**Harbour Tools Ltd** is a medium-sized New Zealand e-commerce company selling tools, hardware and workshop equipment.

The company is working to improve the reliability of its online store and strengthen automated regression coverage around important customer journeys.

## Product Under Test

The project uses the **Practice Software Testing** application as the fictional Harbour Tools staging environment.

The product includes:

* Product browsing, searching and filtering
* Product details
* Shopping cart
* Customer registration and authentication
* Checkout
* Orders
* Supporting APIs

## My Role

I am working in the simulated role of a **QA Engineer**, with responsibilities including:

* Reviewing user stories and acceptance criteria
* Identifying risks and missing requirements
* Designing appropriate test coverage
* Performing exploratory testing
* Creating UI automation with Playwright and TypeScript
* Testing APIs with Postman
* Investigating failures and reporting defects
* Using feature branches, pull requests and CI
* Running regression tests
* Communicating product-quality and release risks

## Planned QA Process

The project will use a lightweight two-week Scrum workflow:

1. Backlog refinement
2. Sprint planning
3. Requirement and risk analysis
4. Exploratory testing
5. Test design
6. Automation implementation
7. Defect reporting and retesting
8. Pull-request review
9. Continuous integration
10. Regression testing
11. Sprint review and retrospective
12. Release recommendation

## Tools

The project will gradually use:

* Playwright
* TypeScript
* Postman
* SQL
* Git and GitHub
* GitHub Issues
* GitHub Projects
* GitHub pull requests
* GitHub Actions
* Markdown documentation

Tools will be introduced when they are required by the work rather than added only for demonstration.

## Current Sprint

### Sprint 1 — Cart Reliability

**Sprint goal:**

Ensure that customers can add products to their cart and manage cart contents without losing items or seeing incorrect product, quantity or price information.

**Sprint scope:**

* Add one product to the cart
* Add different products to the cart
* Remove a product
* Explore quantity updates
* Establish the project workflow
* Introduce automated CI checks

## Current Status

Sprint 1 is complete.

The repository currently includes:

* Business requirements and project documentation
* User story analysis
* Test analysis
* Exploratory testing
* Playwright automation
* Sprint 1 reflection

Sprint 2 will build on the lessons learned during Sprint 1 by introducing a more complete QA workflow, including:

* Bug reporting
* Smoke testing
* Regression testing
* Additional automation
* Process improvements based on Sprint 1 reflections

## Sprint Reflections

This project includes sprint reflections to document not only what was created, but also what was learned throughout the project.

The Sprint 1 reflection explains what Sprint 1 focused on, what it did not yet include, and how those lessons will shape Sprint 2.

* [Sprint 1 Reflection](docs/reflections/sprint-1-reflection.md)

## Project Development

This repository is designed to evolve through a series of realistic development sprints.

Each sprint expands both the technical implementation and the QA process, documenting not only the deliverables, but also the decisions, lessons learned and continuous improvements that shape future work.

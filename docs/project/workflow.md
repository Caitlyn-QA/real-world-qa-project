# Team Workflow

## Purpose

This document defines how work moves through the Harbour Tools product team.

The workflow provides a consistent process for:

* Refining requirements
* Planning sprint work
* Developing features
* Performing QA activities
* Reporting and retesting defects
* Adding automated regression coverage
* Reviewing repository changes
* Running continuous integration
* Assessing release quality

The process is designed to reflect a realistic software-delivery environment while avoiding unnecessary administration.

---

## Delivery Model

The Harbour Tools team works in two-week sprints.

Each sprint includes:

1. Backlog refinement
2. Sprint planning
3. Feature development
4. QA preparation
5. Feature testing
6. Defect management
7. Automation work
8. Code and document review
9. Continuous integration
10. Regression testing
11. Sprint review
12. Retrospective
13. Release-quality assessment

Not every activity must happen in a strict sequence. QA, development and product work may overlap when appropriate.

---

## Tools

The team uses:

* **GitHub Issues** for user stories, QA tasks, automation tasks, investigations and defects
* **GitHub Projects** for backlog, sprint and status tracking
* **Git and GitHub branches** for repository changes
* **GitHub pull requests** for review
* **GitHub Actions** for continuous integration
* **Playwright with TypeScript** for UI and selected API automation
* **Postman** for API investigation and API test collections
* **SQL tools** for later data validation and investigation
* **Markdown documents** for permanent QA documentation

---

## Sources of Truth

Each type of information has one primary location.

| Information                     | Primary Location                     |
| ------------------------------- | ------------------------------------ |
| Product context                 | Repository documentation             |
| Team responsibilities           | Repository documentation             |
| User requirement                | GitHub User Story Issue              |
| Requirement clarification       | User Story Issue comments            |
| Business decision               | User Story Issue comments            |
| Current work status             | GitHub Project                       |
| Test risks and planned coverage | Test-analysis document               |
| Exploratory findings            | Exploratory-session document         |
| Product defect                  | GitHub Bug Issue                     |
| Automation implementation       | Automation Issue and repository code |
| Review discussion               | Pull request                         |
| Automated execution result      | GitHub Actions                       |
| Final story QA status           | User Story Issue                     |
| Sprint outcome                  | Sprint review                        |
| Process improvements            | Retrospective                        |
| Release recommendation          | Release report                       |

Information should not be copied into several locations unless a short link or summary is needed for traceability.

---

# Work Item Types

## User Story

A User Story represents product behaviour requested by the business.

Example:

```text
[HT-101] Add one product to the shopping cart
```

A User Story contains:

* User need
* Business value
* Acceptance criteria
* Requirement questions
* Confirmed business decisions
* Dependencies
* Linked defects
* Linked QA or automation work
* Final QA status

The Product Owner, Paul, owns the expected business behaviour and priority.

---

## QA Task

A QA Task represents a substantial piece of testing work that should be tracked separately from the User Story.

Example:

```text
[QA-101] Analyse and test HT-101
```

A QA Task may include:

* Requirement review
* Test analysis
* Test-data preparation
* Exploratory testing
* Functional testing
* Regression assessment
* QA completion reporting

Small QA activities may remain within the User Story. Separate QA Tasks are created only when they improve visibility.

---

## Automation Task

An Automation Task represents regression coverage or test-framework work.

Example:

```text
[AUT-101] Automate the successful add-product workflow
```

An Automation Task contains:

* Automation objective
* Included scenarios
* Excluded scenarios
* Technical acceptance criteria
* Related User Story
* Branch and pull request
* Local execution result
* CI result

Functional testing and automation are related but separate activities.

---

## Bug

A Bug represents unexpected product behaviour.

Example:

```text
[BUG-001] Cart indicator does not update after adding a product
```

A Bug contains:

* Environment
* Preconditions
* Reproduction steps
* Expected result
* Actual result
* Reproducibility
* Severity recommendation
* Business impact
* Evidence
* Related User Story
* Retest result

The QA Engineer recommends severity. The Product Owner decides business priority with input from the team.

---

## Investigation

An Investigation is used when the cause or expected behaviour is not yet clear.

Example:

```text
[INV-001] Investigate intermittent cart-state loss
```

An Investigation records:

* What triggered the investigation
* Known evidence
* Questions
* Investigation steps
* Findings
* Recommended follow-up work

An Investigation may result in a Bug, Automation Task, requirement clarification or no further action.

---

# Project Status Workflow

The GitHub Project uses these statuses:

```text
Backlog
Ready
In Progress
In Review
Ready for QA
Testing
Blocked
Done
```

## Backlog

The work has been identified but is not ready to begin.

Typical reasons:

* The work is not prioritised for the current sprint.
* Requirements need clarification.
* Dependencies are unresolved.
* The team has not reviewed the item.
* The item does not yet meet the Definition of Ready.

---

## Ready

The work meets the Definition of Ready and can be selected for active work.

A Ready item should have:

* Clear purpose
* Testable acceptance criteria
* Known dependencies
* Appropriate priority
* Sufficient information to begin

---

## In Progress

Someone is actively working on the item.

For a User Story, this may mean implementation is underway.

For a QA Task, it may mean:

* Test analysis has started.
* Test data is being prepared.
* Exploratory testing is underway.
* Automation is being implemented.

Only work that is genuinely active should remain In Progress.

---

## In Review

Repository changes are waiting for review.

Examples:

* Test-analysis document in a pull request
* Playwright automation awaiting review
* Sprint documentation awaiting approval
* Workflow changes awaiting team agreement

---

## Ready for QA

Development is complete and the feature is available in the agreed QA environment.

Before entering Ready for QA:

* The implementation should be deployed.
* Developer checks should have passed.
* Known technical limitations should be communicated.
* Required test data should be available.
* The ticket should identify the build or environment where testing can begin.

---

## Testing

QA is actively testing the implementation.

Testing may include:

* Acceptance-criteria validation
* Exploratory testing
* Positive and negative scenarios
* Browser checks
* API validation
* Regression impact checks
* Defect reproduction and retesting

---

## Blocked

The work cannot proceed.

A blocked item must include:

* The reason for the block
* Who or what is needed
* The impact on the sprint
* The next expected action

Examples:

* Missing requirement decision
* Environment unavailable
* Test account unavailable
* Blocking defect
* Required API not deployed

The blocked status should be removed as soon as the issue is resolved.

---

## Done

The item meets the relevant completion criteria.

For a User Story, this means it meets the Definition of Done.

For a QA or Automation Task, this means:

* The agreed work is complete.
* Required review has finished.
* Evidence is recorded.
* Relevant CI checks pass.
* Remaining limitations are documented.

Closing a GitHub Issue and setting its Project status to Done are both required.

---

# Backlog Refinement

Backlog refinement happens before sprint planning.

The team reviews upcoming work to determine whether it is understood and ready.

## Product Owner responsibilities

Paul:

* Explains the business need
* Confirms expected customer behaviour
* Clarifies business rules
* Confirms priority
* Resolves acceptance-criteria questions

## Developer responsibilities

Michael and Josh:

* Identify technical dependencies
* Raise implementation risks
* Explain relevant system behaviour
* Identify testability concerns
* Highlight data or environment needs

## QA responsibilities

Caitlyn:

* Reviews whether requirements are testable
* Identifies missing acceptance criteria
* Raises positive, negative and edge-case questions
* Identifies business and regression risks
* Considers test data and environment needs
* Considers which scenarios may later require automation
* Checks whether the story meets the Definition of Ready

## QA Lead responsibilities

Ange:

* Challenges incomplete risk analysis
* Supports testability discussions
* Advises on wider regression impact
* Helps identify cross-feature risks

Important answers and decisions are recorded in the User Story Issue.

A story remains in Backlog until essential questions are resolved.

---

# Sprint Planning

During Sprint Planning, the team selects work that supports the sprint goal and fits within the available capacity.

The sprint plan records:

* Sprint goal
* Sprint dates
* Committed User Stories
* Planned QA work
* Expected automation work
* Dependencies
* Known risks
* Work deliberately left outside the sprint

The team should not fill all available time with planned work. Capacity must allow for:

* Defects
* Clarification
* Investigation
* Learning
* Review feedback
* Environment problems
* Rework

Items selected for the sprint receive the appropriate Sprint value in GitHub Projects.

---

# Daily Work

## Start of day

The QA Engineer opens the Sprint Board and reviews:

* Items in Ready
* Items In Progress
* Items Ready for QA
* Items in Testing
* Blocked work
* Current priority

The active Issue is then reviewed for:

* Acceptance criteria
* Confirmed decisions
* Open questions
* Linked work
* Current blockers

---

## During the day

The QA Engineer performs the activity required by the current ticket.

Examples include:

* Requirement review
* Test analysis
* Exploratory testing
* Functional testing
* Bug investigation
* Automation
* API testing
* Regression testing
* Pull-request review
* CI investigation

Progress is documented only when it provides useful information.

Useful Issue updates include:

* Requirement question
* Confirmed decision
* Blocker
* Important finding
* Defect link
* Test result
* Retest result
* Final QA status

An update such as “Worked on this today” is not sufficient because it does not help the team understand progress or risk.

---

## End of day

Before finishing, the QA Engineer should:

1. Save and review repository changes.
2. Run relevant tests where appropriate.
3. Commit a meaningful completed unit of work.
4. Push the branch when collaboration or backup is needed.
5. Update the Project status if the real state changed.
6. Add an Issue update when there is meaningful information to communicate.
7. Record blockers clearly.

---

# Feature Development and QA Preparation

While Michael or Josh is implementing a feature, QA may begin preparation.

QA preparation can include:

* Reviewing related existing behaviour
* Clarifying acceptance criteria
* Identifying test conditions
* Preparing test data
* Reviewing API contracts
* Assessing regression impact
* Preparing an exploratory charter
* Planning likely automation coverage

QA should not write final automation against behaviour that has not been confirmed or is still changing significantly.

---

# Ready for QA Handover

When a feature is moved to Ready for QA, the developer should provide:

* Confirmation that implementation is complete
* Environment or build information
* Relevant technical notes
* Known limitations
* Required test data
* Related API or database changes
* Developer-check results
* Links to related pull requests where appropriate

QA verifies that the feature is accessible and testable before moving it to Testing.

If the feature cannot be tested, the item moves to Blocked with the reason recorded.

---

# Test Analysis

When active QA work begins, the QA Engineer creates or updates the related test-analysis document.

The analysis records:

* Requirement summary
* Business risk
* Confirmed decisions
* Open questions
* Test conditions
* Positive scenarios
* Negative scenarios
* Edge cases
* Test-data requirements
* Dependencies
* Regression impact
* Automation recommendation
* Out-of-scope areas

The test analysis should show QA reasoning without becoming a detailed record of every click.

---

# Exploratory Testing

Exploratory testing uses a clear test charter.

Example:

```text
Explore how adding a product affects the cart indicator,
cart contents, product data and navigation state.
```

The exploratory record includes:

* Date
* Duration
* Environment
* Charter
* Areas explored
* Important observations
* Defects raised
* Questions
* Follow-up actions

Exploratory testing may identify scenarios that were not included in the acceptance criteria.

---

# Defect Workflow

## 1. Investigate

Before creating a Bug, QA should:

* Reproduce the behaviour
* Confirm the environment
* Check the requirement
* Determine whether the issue may be caused by test data, automation or environment
* Gather useful evidence

## 2. Report

Create a separate Bug Issue containing reproducible information and business impact.

## 3. Triage

The team discusses:

* Severity
* Priority
* Scope
* Likely ownership
* Sprint impact
* Release impact

Paul decides business priority. Caitlyn recommends severity. Michael or Josh investigates the implementation depending on the affected area.

## 4. Fix

The responsible developer implements the fix and provides relevant technical information.

## 5. Retest

Caitlyn:

* Repeats the original reproduction steps
* Confirms the expected result
* Tests relevant nearby behaviour
* Records the retest result
* Reopens the Bug if the issue remains

## 6. Close

The Bug is closed only after successful retesting or an agreed decision not to fix it.

Accepted risks must remain documented.

---

# Automation Workflow

Automation is added when it provides lasting regression value.

A scenario is a good automation candidate when it is:

* Business critical
* Repeated regularly
* Stable enough to automate
* Deterministic
* Suitable for reliable assertions
* Expensive or error-prone to repeat manually

Automation should not be added simply because a scenario can be automated.

## Automation process

1. Create or select the Automation Task.
2. Confirm the intended coverage.
3. Create a ticket-specific branch.
4. Implement the test.
5. Run it locally.
6. Run relevant regression tests.
7. Review the code.
8. Commit meaningful changes.
9. Push the branch.
10. Open a pull request.
11. Review CI results.
12. Address review comments.
13. Merge when approved and passing.
14. Update and close the Automation Task.

---

# Git Branch Workflow

The default branch is:

```text
main
```

Changes are made on ticket-specific branches.

Examples:

```text
qa/HT-101-test-analysis
feature/AUT-101-add-product-test
docs/sprint-01-plan
fix/AUT-101-cart-badge-wait
```

A branch should contain changes related to one clear purpose.

Direct changes to `main` should be avoided once the working process is established.

---

# Commit Expectations

Commits should represent meaningful units of completed work.

Good examples:

```text
Add HT-101 test analysis
Document HT-101 exploratory findings
Add automated add-product cart test
Improve cart badge assertion
Record Sprint 1 test results
```

Avoid vague messages such as:

```text
Update files
Changes
Fix
Work in progress
```

A commit message should help another team member understand what changed.

---

# Pull-Request Workflow

A pull request is opened when repository changes are ready for review.

The pull request includes:

* Related Issue
* Summary
* Changes made
* Testing performed
* Known limitations
* Relevant evidence

## Review responsibilities

Ange reviews QA approach and automation quality.

Michael or Josh may review technical implementation where relevant.

Caitlyn responds to comments by:

* Clarifying decisions
* Making appropriate changes
* Explaining when a suggestion is not adopted
* Re-running relevant checks

The pull request is merged only when:

* Required review is complete
* Relevant tests pass
* CI passes
* Known limitations are documented

---

# Continuous Integration

GitHub Actions will run automated tests when the technical project reaches that stage.

Planned triggers include:

* Pull-request creation or update
* Merge to `main`
* Manual regression run

A failed CI run must be investigated.

The team should not repeatedly rerun a failed workflow without first examining:

* Error message
* Trace
* Screenshot
* Test timing
* Environment behaviour
* Product behaviour
* Test-data state

Important CI findings are recorded in the related pull request or Issue.

---

# Regression Testing

Regression scope is based on change risk.

Possible levels include:

## Targeted regression

Checks behaviour directly related to the change.

## Feature regression

Checks the wider feature area.

Example:

```text
Cart addition
Cart quantity
Cart removal
Cart totals
Checkout entry
```

## Smoke regression

Checks the most critical customer journeys.

## Full regression

Runs the broader automated and manual regression scope when release risk justifies it.

Regression selection should be explained rather than chosen automatically.

---

# Story Completion

Before a User Story moves to Done, QA records a completion summary in the Story Issue.

The summary includes:

* Acceptance-criteria results
* Testing performed
* Defects found
* Defect status
* Automation status
* Regression result
* Remaining risk
* QA recommendation

Possible QA recommendations are:

```text
Ready for release
Ready with known low-risk limitations
Not ready for release
Testing blocked
```

A User Story moves to Done only when it meets the Definition of Done.

---

# Sprint Review

At the end of the sprint, the team reviews:

* Sprint goal
* Stories completed
* Stories carried over
* Testing performed
* Defects found
* Automation added
* CI status
* Remaining risk
* Release recommendation

The Sprint Review compares planned work with actual delivery.

---

# Retrospective

The team reflects on the working process.

The retrospective records:

* What went well
* What was difficult
* What was learned
* What should change
* One or two practical actions for the next sprint

The retrospective should focus on improving the process rather than assigning blame.

---

# Release-Quality Assessment

Before a release, QA considers:

* Critical customer journeys
* Acceptance-criteria results
* Open defects
* Defect severity
* Regression results
* CI results
* Environment limitations
* Untested areas
* Known business risks

Caitlyn provides a QA recommendation.

Ange may review the recommendation.

Paul and the Engineering Manager make the final release decision with input from QA and development.

---

# Workflow Principles

The team follows these principles:

* Requirements should be questioned before assumptions are made.
* Acceptance criteria are the minimum expected behaviour, not the complete test scope.
* Risk determines testing depth.
* Automation should provide maintainable regression value.
* Product defects, test defects and environment failures must be distinguished.
* Status should reflect reality.
* Important decisions should be visible.
* Remaining risk should be communicated honestly.
* Quality is a shared team responsibility.
* Evidence should support completion and release decisions.

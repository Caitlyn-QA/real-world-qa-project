# Documentation Map

## Purpose

This document defines where project information, QA evidence and delivery records are stored.

Its purpose is to ensure that:

- Information has one clear source of truth.
- Important decisions remain visible.
- The same information is not unnecessarily copied into several places.
- Team members can quickly find requirements, test evidence, defects and delivery status.
- Future contributors can understand how to continue the project.

---

# Project Areas

The project uses five connected GitHub areas:

1. GitHub Project
2. GitHub Issues
3. Repository files
4. Pull requests
5. GitHub Actions

Each area has a different purpose.

---

## GitHub Project

The GitHub Project provides the live overview of work.

It answers:

- What work exists?
- What is planned for the sprint?
- What is currently active?
- What is waiting for QA?
- What is blocked?
- What has been completed?
- What is the current priority?

The Project stores:

- Status
- Priority
- Work-item type
- Sprint
- Product area
- Assignee

The Project should not contain detailed test evidence or lengthy discussions.

Those belong in the related Issue or repository document.

---

## GitHub Issues

GitHub Issues are the central record for individual pieces of work.

Issues are used for:

- User Stories
- QA Tasks
- Automation Tasks
- Bugs
- Investigations
- Documentation Tasks

An Issue may contain:

- Requirement details
- Acceptance criteria
- Questions
- Decisions
- Dependencies
- Blockers
- Linked work
- Test summaries
- Retest results
- Final status

Important conversations should remain connected to the relevant Issue.

---

## Repository Files

Repository files contain permanent project documentation, automation code, test data and configuration.

Examples include:

- Project overview
- Team responsibilities
- Workflow
- Definitions of Ready and Done
- Sprint plans
- Sprint reviews
- Sprint reflections
- Test analyses
- Exploratory-testing records
...

Repository changes are tracked through Git history.

Important changes should normally be reviewed through pull requests once the project workflow is established.

---

## Pull Requests

Pull requests are used to review repository changes before they are merged into `main`.

They record:

- What changed
- Why it changed
- Related Issues
- Testing performed
- Review comments
- Requested improvements
- CI results
- Known limitations
- Approval and merge history

Pull requests may be used for:

- Test automation
- QA documentation
- Workflow changes
- Sprint documentation
- API test collections
- SQL investigation files
- CI changes

---

## GitHub Actions

GitHub Actions records automated test and workflow execution.

It provides evidence that tests run outside the local development environment.

It is used for:

- Pull-request test runs
- Regression checks after merge
- Manual regression runs
- Test reports and artifacts
- CI failure investigation

Detailed CI output remains in GitHub Actions.

Important findings or decisions are summarised in the related Issue or pull request.

---

# Source-of-Truth Guide

| Information              | Primary Location                            | Reason                                        |
| ------------------------ | ------------------------------------------- | --------------------------------------------- |
| Product context          | `docs/project/project-overview.md`          | Applies to the whole project                  |
| Team responsibilities    | `docs/project/team-and-responsibilities.md` | Defines ownership and decision-making         |
| Team process             | `docs/project/workflow.md`                  | Defines how work moves through delivery       |
| Documentation rules      | `docs/project/documentation-map.md`         | Explains where information belongs            |
| Definition of Ready      | `docs/project/definition-of-ready.md`       | Used during refinement                        |
| Definition of Done       | `docs/project/definition-of-done.md`        | Used before completion                        |
| Current status           | GitHub Project                              | Provides the live work overview               |
| User requirement         | User Story Issue                            | Central history of requested behaviour        |
| Acceptance criteria      | User Story Issue                            | Keeps expected behaviour with the requirement |
| Requirement question     | User Story Issue comment                    | Keeps discussion traceable                    |
| Product Owner decision   | User Story Issue comment                    | Records confirmed business behaviour          |
| Technical clarification  | User Story Issue or related task            | Keeps technical context linked                |
| Sprint commitment        | Sprint plan and GitHub Project              | Records intended work and live status         |
| Testing risks            | Test-analysis document                      | Shows QA reasoning                            |
| Planned test coverage    | Test-analysis document                      | Shows intended testing scope                  |
| Exploratory session      | Exploratory-testing document                | Records purposeful investigation              |
| Product defect           | Bug Issue                                   | Gives the defect its own lifecycle            |
| Bug discussion           | Bug Issue comments                          | Keeps triage and investigation together       |
| Defect evidence          | Bug Issue attachment or link                | Keeps evidence with the defect                |
| Automation scope         | Automation Task Issue                       | Defines intended regression coverage          |
| Test automation code     | `tests/`                                    | Permanent regression suite                    |
| Reusable test code       | `pages/`, `helpers/`, `fixtures/`           | Supports maintainable automation              |
| Test data                | `test-data/`                                | Central location for reusable inputs          |
| API collection           | `postman/`                                  | Stores API test assets                        |
| SQL investigation        | `sql/`                                      | Stores repeatable data checks                 |
| Review discussion        | Pull request                                | Records feedback before merge                 |
| Automated test execution | GitHub Actions                              | Provides CI evidence                          |
| Story QA result          | User Story Issue                            | Completes the requirement history             |
| Sprint outcome           | Review document                             | Records delivery outcome and next steps       |
| Sprint reflection        | Reflection document                         | Records lessons learned & future improvements |
| Product backlog          | GitHub Project                              | Records future work |
| Release recommendation   | Release report                              | Records the final risk assessment             |

---

# Daily Work Guide

## Reviewing a New User Story

Record the requirement in a GitHub User Story Issue.

The Issue should contain:

- User Story
- Business value
- Acceptance criteria
- Dependencies
- Initial priority
- Product area

QA questions should be added as comments on the same Issue.

Do not create a test-analysis document until the story is sufficiently understood and active QA work begins.

---

## Asking a Requirement Question

Add the question to the related User Story Issue.

Example:

```text
QA question:

Should the cart indicator display the number of different products,
or the total quantity of all products?
```

Why:

The question remains connected to the requirement and can be answered by Paul, the Product Owner.

---

## Recording a Business Decision

Record the answer in the User Story Issue comments.

Example:

```text
Product decision:

The cart indicator displays the total quantity of all products.

Confirmed by Paul during Sprint 1 refinement.
```

If the decision changes the acceptance criteria, update the acceptance criteria and record why they changed.

---

## Recording Current Status

Update the GitHub Project.

Examples:

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

Do not use repository documents as a substitute for updating the live board.

The Project status should reflect the real state of the work.

---

## Recording a Blocker

Update the Project status to `Blocked`.

Add a comment to the related Issue containing:

- Reason for the block
- Impact
- Required action
- Owner or dependency
- Expected next step

Example:

```text
Blocked:

The expected behaviour for repeated product additions has not been confirmed.

Impact:
Automation cannot be finalised because the expected cart result is unclear.

Required:
Product Owner decision.
```

---

## Preparing Test Coverage

Create or update a test-analysis document under:

```text
docs/test-analysis/
```

Example:

```text
docs/test-analysis/HT-101-add-one-product.md
```

The document should contain:

- Requirement summary
- Business risk
- Confirmed decisions
- Open questions
- Test conditions
- Positive scenarios
- Negative scenarios
- Edge cases
- Test data
- Dependencies
- Regression impact
- Automation recommendation
- Out-of-scope areas

Why:

The document records QA reasoning and planned coverage without overloading the User Story Issue.

---

## Performing Exploratory Testing

Create an exploratory-testing document under:

```text
docs/exploratory-testing/
```

Example:

```text
docs/exploratory-testing/HT-101-cart-exploration.md
```

The document should contain:

- Date
- Tester
- Duration
- Environment
- Test charter
- Areas explored
- Important observations
- Defects raised
- Questions
- Follow-up work

Why:

Exploratory testing should record its purpose and findings, not every click.

---

## Reporting a Product Defect

Create a separate GitHub Bug Issue.

The Bug should contain:

- Environment
- Preconditions
- Reproduction steps
- Expected result
- Actual result
- Reproducibility
- Severity recommendation
- Business impact
- Evidence
- Related User Story
- Retest result

Do not also create a separate Markdown copy of the bug report.

The GitHub Bug Issue is the source of truth.

---

## Recording Test Results

During testing, important results may be recorded in:

- The related User Story Issue
- A QA Task Issue
- The test-analysis document
- An exploratory-testing document

Use the User Story Issue for summary-level results and final QA status.

Use repository documents for detailed reasoning and session evidence.

Avoid repeating the same result in several places.

---

## Creating Automation

Create or use an Automation Task Issue.

The Issue should define:

- Related User Story
- Automation objective
- Included scenarios
- Excluded scenarios
- Technical acceptance criteria
- Local execution result
- Pull request
- CI result

The test code belongs under:

```text
tests/
```

Example:

```text
tests/cart/add-product.spec.ts
```

---

## Recording Automation Decisions

Record the automation recommendation in the test-analysis document.

Possible outcomes:

- Automate now
- Automate after the feature stabilises
- Keep manual
- Not suitable for automation
- Requires API-level coverage instead
- Requires further investigation

The reason should be recorded.

---

## Recording Code or Documentation Review

Use a pull request.

The pull request records:

- Related Issue
- Summary of changes
- Testing performed
- Review comments
- Updates made
- CI result
- Approval
- Merge result

Do not record detailed review conversations in a separate Markdown file.

---

## Recording a CI Failure

The detailed failure remains in GitHub Actions.

Summarise important findings in the related pull request or Issue.

Example:

```text
CI investigation:

The cart test failed because the assertion used an immediate value
before the UI completed its update.

The assertion was replaced with a retrying locator assertion.
Local and CI runs now pass.
```

---

## Recording a Defect Retest

Add the retest result to the Bug Issue.

Include:

- Environment
- Build or date
- Result
- Related regression performed
- Evidence if useful

Example:

```text
Retest result: Passed

The cart indicator now updates immediately after adding a product.

Targeted regression:
- Add one product
- Add multiple products
- Open cart
- Remove product
```

Close the Bug only after successful retesting or an agreed decision not to fix it.

---

## Recording Story Completion

Add a QA completion summary to the User Story Issue.

Include:

- Acceptance-criteria results
- Testing performed
- Bugs found
- Bug status
- Automation status
- Regression result
- Remaining risk
- QA recommendation

Possible recommendations:

```text
Ready for release
Ready with known low-risk limitations
Not ready for release
Testing blocked
```

## Recording Sprint Review

After a sprint finishes, create a Sprint Review under:

docs/reviews/

The Sprint Review records:

- Sprint goal
- Sprint goal status
- Completed work
- Remaining work
- Risks
- Next steps

Its purpose is to provide an objective record of what the sprint delivered.

## Recording Sprint Reflection

After the Sprint Review, create a Sprint Reflection under:

docs/reflections/

The Sprint Reflection records:

- What went well
- What was missing
- Lessons learned
- Process improvements
- How those lessons will influence the next sprint

Its purpose is to document learning and continuous improvement rather than delivery status.

## Recording Sprint Results

Use:

docs/reviews/sprint-1-review.md

The Sprint Review contains:

- Sprint goal
- Sprint goal status
- Completed work
- Remaining work
- Testing performed
- Defects found
- Automation delivered
- Remaining risk
- Next steps

## Recording Process Improvements

Use:

docs/reflections/sprint-1-reflection.md

The Sprint Reflection contains:

- What went well
- What was missing
- Lessons learned
- Process improvements
- How those lessons will influence the next sprint

The Sprint Reflection complements the Sprint Review by focusing on learning rather than delivery status.

## Recording a Release Recommendation

Use:

```text
docs/release-reports/
```

A release report contains:

- Release scope
- Environment
- Testing performed
- Passed and failed areas
- Open defects
- Regression result
- CI result
- Untested areas
- Remaining risks
- QA recommendation
- Final release decision

---

# Daily Communication Expectations

A daily update is useful when it communicates progress, risk or a blocker.

A useful update may contain:

```text
Completed:
Initial HT-101 exploration and product-data comparison.

Finding:
Adding the same product increases the existing quantity.

Blocked:
Expected repeated-addition behaviour is not yet confirmed.

Next:
Continue after Product Owner clarification.
```

Avoid updates such as:

```text
Worked on cart testing today.
```

That does not provide enough information for the team.

---

# End-of-Day Checklist

Before finishing work:

1. Confirm the active Issue reflects meaningful progress.
2. Update the GitHub Project if the real status changed.
3. Record new questions, decisions or blockers.
4. Save repository changes.
5. Run relevant tests when appropriate.
6. Commit a meaningful completed unit of work.
7. Push the branch when appropriate.
8. Confirm no important evidence exists only in temporary notes.
9. Record the next clear action.

---

# Information That Should Not Be Duplicated

Avoid duplicating:

- Full acceptance criteria in several documents
- Bug reports in both Issues and Markdown files
- Complete CI logs inside pull requests
- The same test results in several documents
- Daily notes that do not affect decisions
- Requirement conversations outside the User Story Issue

A short summary or link is acceptable when needed for traceability.

---

# Documentation Principles

The team follows these principles:

- Record information where future team members will expect to find it.
- Keep requirements, decisions and outcomes traceable.
- Document evidence, not unnecessary activity.
- Keep live status in the GitHub Project.
- Keep requirement discussion in the related Issue.
- Keep permanent QA reasoning in repository documents.
- Keep defects in Bug Issues.
- Keep review discussion in pull requests.
- Keep automated execution details in GitHub Actions.
- Do not create documentation only to make the repository appear larger.
- Update documents when the process genuinely changes.

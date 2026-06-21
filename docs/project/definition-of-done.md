# Definition of Done

## Purpose

The Definition of Done defines the minimum conditions that must be met before a work item is considered complete.

Its purpose is to ensure that:

- Implemented behaviour meets the agreed requirement.
- Testing has been completed to an appropriate level.
- Important defects and risks are visible.
- Repository changes have been reviewed.
- Relevant automated checks pass.
- The team has enough evidence to make a release decision.
- Work is not marked complete only because development has finished.

The Definition of Done applies differently depending on the type of work item.

---

# User Story Definition of Done

A User Story may move to `Done` when the following conditions are met.

## Development Completion

- [ ] The agreed implementation is complete.
- [ ] The change is available in the agreed QA environment.
- [ ] Developer-level checks have passed.
- [ ] Relevant code review has been completed.
- [ ] Known technical limitations have been communicated.
- [ ] Required configuration or data changes are available.
- [ ] The implementation matches the confirmed business decisions.

---

## Acceptance Criteria

- [ ] Every acceptance criterion has been tested.
- [ ] Each criterion has a clear result.
- [ ] Failed criteria are linked to a Bug or an agreed limitation.
- [ ] No acceptance criterion has been silently skipped.
- [ ] Any changed requirement has been confirmed by Paul and recorded in the User Story Issue.

Acceptance criteria represent the minimum expected behaviour.

Meeting the acceptance criteria alone does not automatically mean testing is complete.

---

## Functional Testing

- [ ] The primary customer journey has been tested.
- [ ] Important positive scenarios have been tested.
- [ ] Important negative scenarios have been tested.
- [ ] Relevant edge cases have been considered.
- [ ] Validation and error behaviour have been checked where applicable.
- [ ] Required test data has been used.
- [ ] Relevant browser behaviour has been checked where appropriate.
- [ ] The feature has been tested in the intended QA environment.
- [ ] Important observations and results have been recorded.

---

## Exploratory Testing

Where appropriate:

- [ ] Exploratory testing has been completed using a defined charter.
- [ ] Important observations are documented.
- [ ] Unexpected behaviour has been investigated.
- [ ] New questions have been raised and resolved or recorded.
- [ ] Defects discovered during exploration have been reported.
- [ ] Follow-up testing has been identified where necessary.

Exploratory testing is not mandatory for every minor change, but the decision should be appropriate to the risk.

---

## Regression Testing

- [ ] The likely regression impact has been assessed.
- [ ] Relevant existing behaviour has been tested.
- [ ] Targeted regression has been completed.
- [ ] Feature-level regression has been completed where risk justifies it.
- [ ] Critical related customer journeys remain functional.
- [ ] Existing relevant automated tests pass.
- [ ] Regression failures have been investigated.

Regression scope should be based on risk rather than applied mechanically.

---

## Defects

- [ ] All defects found during testing are linked to the User Story.
- [ ] Critical and high-severity defects are resolved or explicitly accepted.
- [ ] Fixed defects have been retested.
- [ ] Relevant regression has been performed after fixes.
- [ ] Reopened defects are visible.
- [ ] Known lower-risk defects are documented.
- [ ] Paul understands any accepted business risk.
- [ ] No unresolved defect prevents the story from meeting its purpose.

A story must not be marked Done while a release-blocking defect remains unresolved.

---

## Automation

Where automation is appropriate:

- [ ] Valuable regression scenarios have been identified.
- [ ] An Automation Task has been created or linked.
- [ ] The agreed automation coverage has been implemented.
- [ ] The tests are independent and repeatable.
- [ ] Assertions prove the intended behaviour.
- [ ] Test data is managed appropriately.
- [ ] The tests pass locally.
- [ ] Relevant existing tests still pass.
- [ ] CI checks pass.
- [ ] Test code has been reviewed.
- [ ] Known automation limitations are documented.

Automation is not mandatory for every User Story.

A documented decision to keep a scenario manual is acceptable when justified.

---

## Documentation and Traceability

- [ ] Important requirement decisions are recorded in the User Story Issue.
- [ ] Test analysis is updated where relevant.
- [ ] Exploratory findings are documented where relevant.
- [ ] Bugs are linked.
- [ ] Automation Tasks are linked.
- [ ] Pull requests are linked.
- [ ] Important test evidence is available.
- [ ] Remaining risks are recorded.
- [ ] The final QA status is added to the User Story Issue.

---

## QA Completion Summary

Before the story moves to Done, Caitlyn records a QA completion summary in the User Story Issue.

The summary includes:

- Acceptance-criteria results
- Testing performed
- Environments used
- Defects found
- Defect status
- Automation status
- Regression result
- Untested areas
- Remaining risks
- QA recommendation

Example:

```text
QA Completion Summary

Acceptance criteria:
All passed.

Testing completed:
- Functional testing
- Cart exploratory session
- Targeted cart regression
- Chromium automated regression

Defects:
BUG-001 fixed and successfully retested.

Automation:
AUT-101 completed and passing in CI.

Remaining risk:
Cart persistence across separate browser sessions was not included in this story.

QA recommendation:
Ready for release.
```

---

## QA Recommendation

Caitlyn provides one of the following recommendations:

```text
Ready for release
Ready with known low-risk limitations
Not ready for release
Testing blocked
```

Ange may review the QA recommendation when the feature has significant risk.

Paul and the Engineering Manager remain responsible for the final business release decision.

---

## Final User Story Status

When the Definition of Done has been met:

- [ ] The GitHub Issue is closed.
- [ ] The GitHub Project status is set to `Done`.
- [ ] Any incomplete follow-up work has its own Issue.
- [ ] Remaining risks are visible.
- [ ] The story is included in the Sprint Review.

---

# QA Task Definition of Done

A QA Task is Done when:

- [ ] The agreed testing activity is complete.
- [ ] Required analysis or evidence has been created.
- [ ] Important findings are recorded.
- [ ] Defects are reported separately.
- [ ] Blockers and limitations are documented.
- [ ] Related User Stories are updated.
- [ ] Repository changes have been reviewed where appropriate.
- [ ] The QA Task Issue contains a completion summary.
- [ ] The Issue is closed.
- [ ] The Project status is set to `Done`.

---

# Automation Task Definition of Done

An Automation Task is Done when:

- [ ] The intended coverage is implemented.
- [ ] Included and excluded scenarios are clear.
- [ ] The test begins from a known state.
- [ ] The test does not depend on another test.
- [ ] Locators are appropriate and maintainable.
- [ ] Assertions validate meaningful outcomes.
- [ ] Timing behaviour is handled reliably.
- [ ] Hardcoded values are avoided where dynamic data is more appropriate.
- [ ] Test data is managed safely.
- [ ] The test passes repeatedly locally.
- [ ] Relevant regression tests pass.
- [ ] A pull request has been opened.
- [ ] Review comments have been addressed.
- [ ] GitHub Actions passes.
- [ ] The pull request is merged.
- [ ] The related Automation Task Issue is updated and closed.
- [ ] The Project status is set to `Done`.

A passing test is not enough if it is unreliable, unclear or does not prove the intended requirement.

---

# Bug Definition of Done

A Bug is Done when one of the following outcomes applies.

## Fixed

- [ ] The fix is available in the QA environment.
- [ ] The original reproduction steps have been repeated.
- [ ] The expected result is now observed.
- [ ] Relevant nearby behaviour has been tested.
- [ ] Regression has been completed where appropriate.
- [ ] The retest result is recorded.
- [ ] Evidence is attached where useful.
- [ ] The Bug Issue is closed.
- [ ] The Project status is set to `Done`.

## Accepted Risk

- [ ] The issue remains reproducible.
- [ ] Business impact is understood.
- [ ] Paul has accepted the risk.
- [ ] The reason for not fixing the issue is recorded.
- [ ] Release impact is documented.
- [ ] Follow-up work is created if required.
- [ ] The Bug Issue is closed with the correct resolution.

## Cannot Reproduce

- [ ] Reasonable reproduction attempts have been completed.
- [ ] Environment and test data were checked.
- [ ] Available evidence was reviewed.
- [ ] The investigation result is recorded.
- [ ] Monitoring or follow-up action is documented where necessary.
- [ ] The Bug Issue is closed with the correct explanation.

A Bug must not be closed simply because a developer cannot immediately reproduce it.

---

# Investigation Definition of Done

An Investigation is Done when:

- [ ] The investigation question has been addressed.
- [ ] Relevant evidence has been reviewed.
- [ ] Steps taken are recorded.
- [ ] Findings are documented.
- [ ] The likely cause or conclusion is stated.
- [ ] Remaining uncertainty is visible.
- [ ] Recommended follow-up work is created.
- [ ] Related Issues are linked.
- [ ] The Investigation Issue is closed.
- [ ] The Project status is set to `Done`.

Possible outcomes include:

- Create a Bug
- Clarify a requirement
- Add automation
- Improve logging
- Create a technical task
- No further action

---

# Documentation Task Definition of Done

A documentation change is Done when:

- [ ] The intended document has been created or updated.
- [ ] Information is stored in the correct location.
- [ ] Links are valid.
- [ ] The content is clear and accurate.
- [ ] Unnecessary duplication has been avoided.
- [ ] Naming and formatting are consistent.
- [ ] The change has been reviewed where appropriate.
- [ ] The related Issue is updated.
- [ ] The repository change is merged.
- [ ] The Issue is closed.
- [ ] The Project status is set to `Done`.

---

# Sprint Definition of Done

A sprint is complete when:

- [ ] The Sprint Review has been completed.
- [ ] Completed stories meet the Definition of Done.
- [ ] Incomplete work has been returned to the backlog or moved to the next sprint deliberately.
- [ ] Open defects are visible.
- [ ] Regression results are recorded.
- [ ] CI status is known.
- [ ] Remaining risks are documented.
- [ ] The sprint goal result is assessed.
- [ ] The retrospective has been completed.
- [ ] Improvement actions are recorded.
- [ ] The GitHub Project reflects the final sprint status.

A sprint may end with incomplete work.

Incomplete work must not be marked Done simply because the sprint has ended.

---

# Release Definition of Done

A release may be considered ready when:

- [ ] The agreed release scope is known.
- [ ] Included stories meet the Definition of Done.
- [ ] Critical customer journeys have been tested.
- [ ] Required regression has been completed.
- [ ] Automated checks pass.
- [ ] CI results are reviewed.
- [ ] Open defects are understood.
- [ ] No unresolved release-blocking defect remains.
- [ ] Untested areas are documented.
- [ ] Environment limitations are documented.
- [ ] Remaining risks are communicated.
- [ ] Caitlyn has provided a QA recommendation.
- [ ] Paul and the Engineering Manager have made the final release decision.

---

# Not Done

A work item must not move to Done when:

- Acceptance criteria have not been tested.
- Important expected behaviour remains unclear.
- A blocking defect remains unresolved.
- Required testing is incomplete.
- The feature is unavailable in the QA environment.
- CI failures remain unexplained.
- Repository changes are awaiting required review.
- Remaining risk has not been communicated.
- Evidence is missing.
- Follow-up work exists only in private notes.
- The team is marking work complete only to improve the sprint board.

The reason for incomplete status should be recorded clearly.

---

# Definition of Done Principles

The team follows these principles:

- Done means complete and evidenced, not merely implemented.
- Quality is assessed through risk and evidence.
- Testing depth should match business and technical risk.
- Acceptance criteria are necessary but not always sufficient.
- Automation should be reliable and valuable.
- Important defects must remain visible.
- Remaining risk must be communicated honestly.
- Status should reflect reality.
- Incomplete work should not be hidden.
- A release decision should be based on evidence rather than optimism.

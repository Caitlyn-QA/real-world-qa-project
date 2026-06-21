# Definition of Ready

## Purpose

The Definition of Ready defines the minimum conditions a work item should meet before the team begins active development or testing.

Its purpose is to ensure that:

* The team understands the requested behaviour.
* Important business rules are known.
* Acceptance criteria are testable.
* Dependencies and risks are visible.
* Required environments and test data are available or can be prepared.
* The team does not begin work based on avoidable assumptions.

A work item does not need to describe every possible test scenario before it is considered Ready.

QA is still expected to explore beyond the acceptance criteria.

---

# User Story Readiness Criteria

A User Story may move from `Backlog` to `Ready` when the following conditions are met.

## Business Context

* [ ] The user or business need is clearly explained.
* [ ] The expected customer or business outcome is understood.
* [ ] The story has an agreed priority.
* [ ] The scope is small enough to be completed within one sprint.
* [ ] The story supports a known product or sprint objective.

---

## Acceptance Criteria

* [ ] Acceptance criteria are present.
* [ ] Acceptance criteria are observable.
* [ ] Acceptance criteria are testable.
* [ ] Expected successful behaviour is described.
* [ ] Important validation or error behaviour is described where relevant.
* [ ] Important limits, restrictions or business rules are known.
* [ ] Acceptance criteria do not contradict each other.

Acceptance criteria define the minimum expected behaviour.

They do not replace broader QA analysis, exploratory testing or regression assessment.

---

## Requirement Clarity

* [ ] Essential business questions have been answered.
* [ ] Expected behaviour is clear for the main customer journey.
* [ ] Important alternative behaviour is understood.
* [ ] Business terminology is defined where necessary.
* [ ] Assumptions are recorded and confirmed.
* [ ] Unresolved questions do not prevent meaningful work from starting.

Minor questions may remain open if they do not block implementation or testing.

Blocking questions must be resolved before the story moves to `Ready`.

---

## Dependencies

* [ ] Known technical dependencies are identified.
* [ ] Related User Stories or tasks are linked.
* [ ] Required APIs are known.
* [ ] Required designs or specifications are available where relevant.
* [ ] External dependencies are identified.
* [ ] Required accounts, permissions or services can be accessed.
* [ ] Dependency risks are communicated.

If a dependency is unresolved and prevents meaningful work, the story remains in `Backlog` or moves to `Blocked`.

---

## Environment and Testability

* [ ] The intended QA environment is known.
* [ ] The feature can be deployed to a testable environment.
* [ ] Required test accounts can be created or obtained.
* [ ] Required test data can be prepared.
* [ ] Important logging, API or technical information is available where necessary.
* [ ] The team understands how the expected result can be observed.
* [ ] There is no known environment limitation that makes the story impossible to test.

---

## QA Review

Before the story becomes Ready, QA has considered:

* [ ] Main business risks
* [ ] Important positive scenarios
* [ ] Important negative scenarios
* [ ] Important edge cases
* [ ] Test-data requirements
* [ ] Regression impact
* [ ] Environment requirements
* [ ] Possible automation value
* [ ] Requirement ambiguities
* [ ] Cross-feature impact

Detailed test analysis does not need to be completed during refinement.

The goal is to identify whether enough information exists to begin meaningful work.

---

## Technical Review

Where relevant, Michael and Josh have considered:

* [ ] Implementation dependencies
* [ ] API or data changes
* [ ] Technical limitations
* [ ] Browser or frontend risks
* [ ] Backend or integration risks
* [ ] Deployment requirements
* [ ] Testability concerns
* [ ] Existing functionality that may be affected

---

## Team Agreement

* [ ] Paul has confirmed the expected business behaviour.
* [ ] Michael or Josh have raised known technical concerns.
* [ ] Caitlyn has reviewed the story from a QA perspective.
* [ ] Ange has supported review where wider quality risk exists.
* [ ] The team agrees that meaningful work can begin.

---

# Ready Decision

When all essential conditions are met:

```text
Status: Ready
```

The GitHub Project should be updated accordingly.

A short Issue comment may be added:

```text
Definition of Ready review completed.

Essential business rules, acceptance criteria, dependencies and testability
requirements have been confirmed.

The story is ready to enter active work.
```

---

# Not Ready

A User Story remains in `Backlog` when:

* The business need is unclear.
* Acceptance criteria are missing or not testable.
* Important expected behaviour is unknown.
* A blocking dependency is unresolved.
* Required access or environment information is missing.
* The team cannot determine how success will be observed.
* The story is too large for one sprint.
* Important risks have not been considered.
* QA cannot begin meaningful preparation without making assumptions.

The reason should be recorded in the User Story Issue.

Example:

```text
Not Ready:

Expected cart persistence behaviour has not been confirmed.

Required:
Product Owner decision on whether cart contents should remain after refresh.

The story will remain in Backlog until this rule is clarified.
```

---

# Ready with Minor Open Questions

A story may still move to `Ready` when:

* Remaining questions are low risk.
* The main expected behaviour is clear.
* The questions do not block development.
* The questions do not prevent meaningful QA preparation.
* The unresolved items are clearly documented.
* An owner and next action are known.

Example:

```text
Ready with one minor open question:

The required wording of the success message is awaiting confirmation.

This does not block implementation or testing of the main cart behaviour.
```

---

# Work-Item-Specific Readiness

## QA Task

A QA Task is Ready when:

* [ ] The related feature or objective is known.
* [ ] The expected QA outcome is clear.
* [ ] Required access and information are available.
* [ ] Dependencies are identified.
* [ ] The task is linked to the relevant User Story or Bug.
* [ ] The work can begin without avoidable assumptions.

---

## Automation Task

An Automation Task is Ready when:

* [ ] The related feature behaviour is confirmed.
* [ ] The scenario is stable enough to automate.
* [ ] The intended coverage is defined.
* [ ] Included and excluded scenarios are known.
* [ ] Required test data is available.
* [ ] The automation environment is available.
* [ ] The test can be made independent and repeatable.
* [ ] The expected assertions are clear.
* [ ] The related User Story or QA Task is linked.

Automation should not begin while the expected product behaviour is still unclear.

---

## Bug

A Bug is Ready for development when:

* [ ] The issue is reproducible or supported by sufficient evidence.
* [ ] The environment is recorded.
* [ ] Preconditions are known.
* [ ] Reproduction steps are clear.
* [ ] Expected and actual results are described.
* [ ] Severity and business impact have been considered.
* [ ] Relevant evidence is attached.
* [ ] The affected product area is known.
* [ ] The Bug is linked to the related User Story where appropriate.

---

## Investigation

An Investigation is Ready when:

* [ ] The reason for the investigation is clear.
* [ ] Known evidence is recorded.
* [ ] The main question is defined.
* [ ] The expected output is known.
* [ ] Required access or data is available.
* [ ] The time or scope is reasonably limited.

---

# Definition of Ready Review Questions

During refinement, the team may use these questions:

## Business

* What customer or business problem are we solving?
* What does success look like?
* What should happen in the standard flow?
* What should happen when something goes wrong?
* Are any limits or special rules involved?

## QA

* Can the expected result be observed?
* What are the biggest risks?
* What data will testing require?
* What related areas may be affected?
* Is the feature suitable for automation later?
* What information is still missing?

## Technical

* Are APIs, designs or dependencies available?
* Is the work deployable to the QA environment?
* Are there integration or data risks?
* Can the behaviour be logged or investigated?
* Are there known technical limitations?

---

# Definition of Ready Principles

The team follows these principles:

* Ready does not mean perfect.
* Ready means there is enough information to begin meaningful work.
* Important assumptions must be visible.
* Blocking questions must be resolved.
* Acceptance criteria must be testable.
* QA should be involved before development is completed.
* Testability should be considered early.
* Stories should be small enough to complete within the sprint.
* A story should not be moved to Ready merely to fill the sprint.
* Status must reflect the real state of the work.

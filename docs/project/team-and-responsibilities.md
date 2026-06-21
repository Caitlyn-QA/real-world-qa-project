# Team and Responsibilities

## Team Structure

Harbour Tools Ltd uses a small cross-functional product team.

The simulated team includes:

* Product Owner
* Frontend Developer
* Backend Developer
* QA Lead
* QA Engineer
* Engineering Manager

Each role contributes to product quality, but responsibilities are shared differently across the team.

---

## Product Owner — Paul

The Product Owner is responsible for defining business priorities and expected customer behaviour.

Responsibilities include:

* Managing and prioritising the product backlog
* Writing or approving user stories
* Clarifying business requirements
* Confirming acceptance criteria
* Explaining expected customer behaviour
* Resolving business-rule questions
* Deciding whether lower-risk known issues are acceptable
* Supporting release decisions from a business perspective

The Product Owner does not decide how testing should be implemented.

---

## Frontend Developer — Michael

The Frontend Developer is responsible for customer-facing application behaviour.

Responsibilities include:

* Implementing user-interface changes
* Fixing frontend defects
* Supporting investigation of browser and rendering issues
* Explaining relevant UI implementation details
* Adding developer-level checks
* Participating in code review
* Supporting defect reproduction and retesting

The Frontend Developer does not approve their own work as fully tested.

---

## Backend Developer — Josh

The Backend Developer is responsible for APIs, business logic and data processing.

Responsibilities include:

* Implementing API and backend changes
* Fixing backend defects
* Explaining API behaviour and technical constraints
* Supporting test-data preparation
* Investigating server-side failures
* Participating in code review
* Supporting API and data-related testing

The Backend Developer does not define business expectations without Product Owner confirmation.

---

## QA Lead — Ange

The QA Lead supports testing strategy, quality practices and technical review.

Responsibilities include:

* Reviewing QA approaches
* Supporting risk assessment
* Reviewing test automation
* Challenging weak or incomplete coverage
* Advising on regression scope
* Supporting defect severity assessment
* Helping investigate complex failures
* Supporting release-quality discussions
* Encouraging maintainable and reliable testing practices

The QA Lead provides guidance but does not complete the QA Engineer’s work for them.

---

## QA Engineer — Caitlyn

The QA Engineer is responsible for assessing product quality and communicating risk.

Responsibilities include:

* Reviewing user stories and acceptance criteria
* Identifying missing, unclear or untestable requirements
* Asking relevant questions during refinement
* Identifying business, technical and user risks
* Planning appropriate test coverage
* Performing exploratory testing
* Designing positive, negative and edge-case scenarios
* Testing implemented features
* Creating Playwright automation where valuable
* Testing APIs when required
* Investigating failures using available evidence
* Creating clear and reproducible bug reports
* Retesting resolved defects
* Running targeted and broader regression testing
* Maintaining test automation
* Using Git branches and pull requests
* Reviewing CI results
* Communicating blockers, findings and remaining risks
* Providing a QA recommendation for stories and releases

The QA Engineer does not guarantee that the product contains no defects.

The QA Engineer provides evidence about quality and risk so that the team can make informed decisions.

---

## Engineering Manager

The Engineering Manager is responsible for delivery support and team effectiveness.

Responsibilities include:

* Supporting delivery planning
* Resolving wider team blockers
* Monitoring delivery risk
* Supporting technical and process decisions
* Ensuring the team has appropriate tools and access
* Participating in release decisions when required

The Engineering Manager does not replace the Product Owner’s business decisions or QA’s testing assessment.

---

## Shared Team Responsibilities

Quality is a shared responsibility.

The team collectively contributes to:

* Clear and testable requirements
* Appropriate technical design
* Useful automated checks
* Early risk identification
* Defect prevention
* Reliable delivery
* Transparent communication
* Safe release decisions
* Continuous process improvement

QA is responsible for leading testing activities, but QA is not the only role responsible for quality.

---

## Decision Ownership

| Decision                       | Primary Owner                       | Contributors              |
| ------------------------------ | ----------------------------------- | ------------------------- |
| Business priority              | Product Owner                       | Engineering Manager, team |
| Expected customer behaviour    | Product Owner                       | QA, developers            |
| Technical implementation       | Developers                          | QA, QA Lead               |
| Test approach                  | QA Engineer                         | QA Lead, developers       |
| Automation design              | QA Engineer                         | QA Lead, developers       |
| Defect severity recommendation | QA Engineer                         | QA Lead, developers       |
| Defect priority                | Product Owner                       | QA, Engineering Manager   |
| Release-quality recommendation | QA Engineer                         | QA Lead                   |
| Final release decision         | Product Owner / Engineering Manager | QA and development team   |

---

## Communication Expectations

Team members are expected to:

* Record important decisions
* Raise blockers early
* Avoid making silent assumptions
* Provide relevant evidence
* Keep ticket status accurate
* Ask for clarification when requirements are unclear
* Distinguish confirmed facts from assumptions
* Communicate remaining risks before work is marked complete

Important decisions should be recorded in the related GitHub Issue so that the project history remains visible.

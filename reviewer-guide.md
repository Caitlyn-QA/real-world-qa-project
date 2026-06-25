# How the Harbour Tools QA Project Works

> **A beginner-friendly reviewer guide to the order, purpose and evidence behind a realistic company QA workflow**

## About this guide

This document explains how the **Harbour Tools QA Delivery** project is organised, what was created, in which order, and why each step exists in a real software company.

The project is a **realistic QA delivery simulation**. Harbour Tools Ltd and the named team members are fictional. The repository, Issues, Project board, branches, commits, pull requests and test documentation are genuine project evidence created by me to practise and demonstrate professional QA work.

The goal is not to present a perfect finished project from the beginning. Evidence is added as the work genuinely reaches each stage, just as it would during a real sprint.

**Repository:** [Caitlyn-QA/real-world-qa-project](https://github.com/Caitlyn-QA/real-world-qa-project)

> **Status: Sprint 1 complete — Cart Reliability validated through exploratory testing and Playwright automation**

---

## 1. The simplest way to understand the project

The project follows this delivery chain:

```text
Business need
-> User Story
-> QA questions and Product Owner decisions
-> Definition of Ready review
-> QA task and test analysis
-> Branch, commit and pull request
-> Review, revision and approval
-> Exploratory and functional testing
-> Defects, automation and regression evidence
-> QA completion summary
```

Each stage answers a different question:

| Stage               | Main question                                                      |
| ------------------- | ------------------------------------------------------------------ |
| Business need       | Why does this feature matter?                                      |
| User Story          | What should the customer be able to do?                            |
| Refinement          | Is the expected behaviour clear enough?                            |
| Definition of Ready | Can meaningful work begin without dangerous assumptions?           |
| Test analysis       | What risks and behaviours need to be investigated?                 |
| Testing             | What does the product actually do?                                 |
| Defect reporting    | What failed, and what evidence proves it?                          |
| Automation          | Which stable, valuable checks should run repeatedly?               |
| QA completion       | What passed, what remains risky, and is the story ready to finish? |

---

## 2. The three layers of the project

### Product work

Product work describes customer and business value. The main example is:

- **[HT-101 - Add one product to the shopping cart](https://github.com/Caitlyn-QA/real-world-qa-project/issues/2)**

HT-101 explains what the customer needs, why the behaviour matters, the confirmed acceptance criteria, known risks and the current QA status.

### QA work

QA work describes the activities needed to assess the product behaviour. The main example is:

- **[QA-101 - Analyse and test HT-101](https://github.com/Caitlyn-QA/real-world-qa-project/issues/3)**

QA-101 makes testing work visible. It covers analysis, exploratory testing, validation, defects, regression impact, automation recommendations and the final QA summary.

### Delivery evidence

Delivery evidence proves how the work was performed. It includes:

- Repository documentation
- GitHub Project status
- Issue discussions and decisions
- Branch names and commits
- Pull-request review history
- Test analysis and exploratory notes
- Defects and retest evidence
- Automated tests and execution results

This separation is important. A requirement, a QA task and the evidence of completing that task are related, but they are not the same thing.

---

## 3. What was created, in order, and why

### Step 1 - Establish the project context

The project first created permanent documentation under `docs/project/`:

- `project-overview.md`
- `team-and-responsibilities.md`
- `workflow.md`
- `documentation-map.md`
- `definition-of-ready.md`
- `definition-of-done.md`

**Why this came first:** Before feature work begins, the team needs a shared understanding of the product, roles, workflow, documentation locations and quality expectations. Without this foundation, status and evidence become inconsistent.

### Step 2 - Create the GitHub Project

The **Harbour Tools QA Delivery** Project was configured with fields for:

- Status
- Priority
- Type
- Sprint
- Product Area

Views were created for:

- Product Backlog
- Sprint Board
- Bugs

**Why:** The repository stores lasting documentation and code. The Project board shows live delivery status: what exists, who owns it, what sprint it belongs to and where it is in the workflow.

### Step 3 - Record the setup work as HT-000

The project created and completed:

- **[HT-000 - Establish project foundations](https://github.com/Caitlyn-QA/real-world-qa-project/issues/1)**

**Why:** Project setup is real work. Recording it as an Issue gives the work an owner, purpose, completion criteria, evidence and history instead of making the environment appear magically.

### Step 4 - Create the first Product User Story

The project created:

- **[HT-101 - Add one product to the shopping cart](https://github.com/Caitlyn-QA/real-world-qa-project/issues/2)**

It contains the user story, business value, acceptance criteria, risks, exclusions and QA status.

**Why:** A User Story should describe the product outcome, not detailed test execution. It is the source of truth for the expected customer behaviour.

### Step 5 - Perform QA refinement

QA asked questions about unclear behaviour, including:

- What does the cart indicator count?
- What happens when the same product is added again?
- Should the cart survive a refresh?
- Should guest and authenticated behaviour match?
- Are unavailable products and stock limits included?
- Which browser is required?

A simulated Product Owner response recorded the business decisions in the Issue discussion.

**Why:** QA contributes before execution by finding ambiguity early. Clarifying behaviour during refinement is cheaper and safer than discovering contradictory expectations after development.

### Step 6 - Review the Definition of Ready

HT-101 was checked against the agreed Definition of Ready and moved from **Backlog** to **Ready** only after its purpose, scope, acceptance criteria, dependencies and major questions were sufficiently clear.

**Why:** `Ready` does not mean perfect or tested. It means meaningful work can begin without relying on risky assumptions.

### Step 7 - Create a visible QA sub-task

The project created QA-101 as a sub-issue of HT-101.

**Why:** HT-101 tracks the product requirement. QA-101 tracks the work needed to assess it. Separating them keeps the requirement readable while making QA effort, ownership and progress visible.

### Step 8 - Start work and create a task branch

The work moved to **In Progress**, and the branch was created:

```text
qa/QA-101-test-analysis
```

**Why:** A task-specific branch keeps unfinished work separate from the approved `main` branch, links the change to its Issue and creates a reviewable history.

### Step 9 - Create the test analysis

The document was added at:

**[docs/test-analysis/HT-101-add-one-product.md](docs/test-analysis/HT-101-add-one-product.md)**

It records:

- Requirement summary
- Business risks
- Confirmed decisions
- Positive, negative and edge conditions
- Test data and environment needs
- Dependencies
- Regression impact
- Automation recommendation
- Out-of-scope behaviour

**Why:** Test analysis answers _what needs to be proven and why_ before detailed execution begins. It prevents the test from becoming a collection of clicks without a clear risk-based purpose.

### Step 10 - Commit and push the work

The analysis was committed with a meaningful message and pushed to GitHub.

**Why:** A commit is a named point in project history. A push makes the branch visible to the team and available for review.

### Step 11 - Open a pull request

The project opened:

- **[Pull Request #4 - Add HT-101 test analysis](https://github.com/Caitlyn-QA/real-world-qa-project/pull/4)**

The pull request explained what changed, why it changed and what the reviewer should examine.

**Why:** Pull requests are useful for documentation as well as code. The analysis influences testing direction, so it should be reviewed before becoming approved project content.

### Step 12 - Receive and address review feedback

A simulated QA Lead review requested improvements to traceability, test-data wording and scope clarity. The document was updated on the same branch, committed and pushed again.

**Why:** This demonstrates a normal professional review cycle:

```text
Submit work -> receive feedback -> revise -> confirm changes -> approve
```

The original work is not hidden. The pull request preserves the discussion and improvement history.

### Step 13 - Approve and merge

After the review feedback was addressed, the pull request was approved and merged into `main`. The completed branch was deleted locally and remotely.

**Why:** Merging means the reviewed analysis became part of the approved project. Deleting the finished branch keeps the repository tidy without deleting the commit or pull-request history.

### Step 14 - Update live status and traceability

HT-101 and QA-101 remained open and **In Progress** because only the analysis deliverable was complete. The QA status and progress comment were updated to show that exploratory testing is next.

**Why:** A merged document does not mean the whole User Story is finished. Live status must reflect the complete delivery state, not just one completed artifact.

### Step 15 - Perform the guest-customer exploratory session

A separate branch was created:

```text
qa/QA-101-exploratory-testing
```

The session evidence was recorded in:

- **[Guest cart exploratory-testing record](docs/exploratory-testing/HT-101-cart-exploration.md)**

The session investigated whether a guest customer could add one available product to an empty cart. It covered the cart indicator, product identity, price, initial quantity and same-session refresh persistence.

The completed evidence was reviewed and merged through:

- **[Pull Request #7 — Document HT-101 guest cart exploration](https://github.com/Caitlyn-QA/real-world-qa-project/pull/7)**

All acceptance criteria covered by the guest session passed. No defects were identified, but authenticated-customer behaviour remained an open risk.

**Why:** Exploratory testing checks what the application actually does before automation is written. Recording the charter, conditions, observations and remaining risk makes the session reproducible and reviewable rather than informal clicking.

### Step 16 - Perform the authenticated-customer exploratory session

A second branch was created:

```text
qa/QA-101-authenticated-cart-exploration
```

The authenticated session was recorded in:

- **[Authenticated cart exploratory-testing record](docs/exploratory-testing/HT-101-authenticated-cart-exploration.md)**

The same `Pliers` product and `$12.01` price were used so that the customer state was the main variable being compared.

The session used the documented Jane Doe test account and checked the complete add-to-cart journey while signed in. The evidence was reviewed and merged through:

- **[Pull Request #8 - Document HT-101 authenticated cart exploration](https://github.com/Caitlyn-QA/real-world-qa-project/pull/8)**

The authenticated journey matched the completed guest journey for product addition, confirmation, cart indicator, product details, initial quantity and refresh persistence.

**Why:** The acceptance criteria required consistent behaviour for guest and authenticated customers. A separate comparison session provided direct evidence instead of assuming that both customer states behaved identically.

### Step 17 - Complete the exploratory-testing milestone

After both sessions were merged:

- QA-101 was updated with the results and evidence links.
- Pull Requests #7 and #8 moved to **Done**.
- All confirmed HT-101 acceptance criteria had passed exploratory testing in Chromium.
- No defects were identified.
- HT-101 and QA-101 remained **In Progress** because automation planning and the final QA completion steps were still outstanding.

**Why:** Completing exploratory testing is an important milestone, but it does not automatically complete the entire User Story. The live status must continue to reflect the remaining delivery work.

### Step 18 - Establish the Playwright foundation

The project created AUTO-100 to establish a reliable Playwright and TypeScript test foundation.

The work introduced:

- Playwright configuration
- Chromium execution
- TypeScript validation
- HTML reporting
- trace collection on the first retry
- a foundation smoke test
- ignored test results and generated reports

The completed foundation was reviewed and merged through:

- **Pull Request #10 - Establish Playwright test foundation**

**Why:** Automation should be built on an intentional and repeatable foundation rather than adding isolated test files without shared configuration or validation.

### Step 19 - Automate the guest add-to-cart journey

The project created AUTO-101 to automate the stable guest add-to-cart behaviour discovered during exploratory testing.

The automated test was added at:

- **[Guest add-to-cart automated test](tests/cart/add-one-product.spec.ts)**

The test verifies:

- deterministic product selection
- navigation to the selected product details
- default quantity of one
- successful product addition
- header cart quantity update
- correct product name, price and quantity in the cart
- cart persistence after page refresh

The automation was reviewed and merged through:

- **[Pull Request #13 - Automate guest add-to-cart journey](https://github.com/Caitlyn-QA/real-world-qa-project/pull/13)**

**Why:** The guest journey was selected because it provides valuable regression protection without introducing authentication complexity. The automation was based on confirmed requirements and completed exploratory testing rather than being written before the behaviour was understood.

### Step 20 - Document the automation test

The supporting guide was added at:

- **[AUTO-101 guest cart automation test guide](docs/automation/AUTO-101-guest-cart-test-guide.md)**

It explains:

- the business risk covered by the test
- the automated customer journey
- locator and waiting decisions
- how product data is captured and compared
- how the test can be run and debugged
- the agreed automation scope and exclusions

The guide was reviewed and merged through:

- **[Pull Request #14 - Add guest cart automation test guide](https://github.com/Caitlyn-QA/real-world-qa-project/pull/14)**

**Why:** The test code shows what Playwright executes. The guide explains why the test was designed that way and how it connects to the earlier QA work.

### Step 21 - Complete QA-101 and HT-101

After the manual and automated evidence was complete:

- QA-101 received a final completion review.
- The final QA summary was added to HT-101.
- All confirmed acceptance criteria were marked as passed.
- No defects or blockers were recorded.
- Remaining out-of-scope risks were communicated.
- QA-101 and HT-101 moved to **Done** and were closed.

**Why:** Completing a test or merging a pull request does not automatically complete a User Story. The final QA outcome must bring together the coverage, evidence, defects, remaining risk and completion recommendation.

## 4. Why the information lives in different places

The project follows a one-source-of-truth principle:

| Information                                 | Primary location     | Why                                                       |
| ------------------------------------------- | -------------------- | --------------------------------------------------------- |
| Product requirement and acceptance criteria | User Story Issue     | Keeps expected behaviour visible and current              |
| Questions and business decisions            | Issue comments       | Preserves who clarified what and why                      |
| Live workflow status                        | GitHub Project       | Supports backlog and sprint tracking                      |
| Detailed QA reasoning                       | Repository Markdown  | Creates durable, version-controlled evidence              |
| Review feedback and approval                | Pull request         | Preserves the formal review cycle                         |
| Defect evidence                             | Bug Issue            | Gives each failure ownership, priority and retest history |
| Automated checks                            | Test code            | Provides repeatable regression coverage                   |
| Execution results                           | GitHub Actions       | Shows whether automated checks passed in CI               |
| Final QA outcome                            | User Story / QA task | Communicates coverage, remaining risk and recommendation  |

Duplicating the same information everywhere creates conflicting versions. Linking related artifacts gives traceability without unnecessary repetition.

---

## 5. Roles and decision ownership

| Role                         | Main responsibility in this project                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Product Owner - Paul         | Defines business value, priority and expected product behaviour                                                |
| Frontend Developer - Michael | Implements and explains browser-facing behaviour                                                               |
| Backend Developer - Josh     | Implements and explains API, data and server-side behaviour                                                    |
| QA Lead - Ange               | Reviews QA direction, risk coverage and quality of evidence                                                    |
| QA Engineer - Caitlyn        | Questions requirements, analyses risk, designs and performs testing, raises defects and communicates QA status |

A strong QA Engineer does not silently invent missing business rules. QA identifies the gap, asks the correct owner and records the answer so the whole team can work from the same expectation.

> **Transparency note:** Harbour Tools Ltd and the named team members are fictional. Simulated Product Owner and QA Lead comments are clearly labelled and appear under Caitlyn's GitHub account. They demonstrate workflow without pretending that another real person participated.

---

## 6. How to review the project in about ten minutes

A reviewer can follow this order:

1. Read the repository `README.md` for the project purpose and current stage.
2. Read `docs/project/project-overview.md` for the fictional company, product and business context.
3. Read `docs/project/workflow.md`, `definition-of-ready.md` and `definition-of-done.md` for the team’s working agreements.
4. Open HT-101 to see the requirement, acceptance criteria, QA refinement questions, Product Owner decisions and current status.
5. Open QA-101 to see the visible QA scope, progress updates and links to testing evidence.
6. Read `docs/test-analysis/HT-101-add-one-product.md` to see the risk-based testing approach created before execution.
7. Open Pull Request #4 to see the test-analysis review, requested changes, revision, approval and merge history.
8. Read `docs/exploratory-testing/HT-101-cart-exploration.md` for the guest-customer session.
9. Read `docs/exploratory-testing/HT-101-authenticated-cart-exploration.md` for the authenticated-customer session and direct comparison with the guest journey.
10. Open Pull Requests #7 and #8 to see how the exploratory evidence was reviewed and merged.
11. Open Pull Request #10 to see how the Playwright test foundation was introduced and reviewed.
12. Read `tests/cart/add-one-product.spec.ts` to see the automated guest add-to-cart journey.
13. Open Pull Request #13 to see the automation review and merge history.
14. Read `docs/automation/AUTO-101-guest-cart-test-guide.md` to understand what the automated test proves and why its design decisions were made.
15. Open Pull Request #14 to see the automation guide review and merge history.
16. Open QA-101 and HT-101 to see the final QA summary, completed acceptance criteria and story outcome.
17. View the Harbour Tools QA Delivery Project to confirm that Sprint 1 work is recorded as Done.

The important question is not only, “Are there tests?” It is also:

**Can I follow how the project was established, how the requirement became ready, what risks were identified, what the application actually did, how the evidence was reviewed and how the final QA outcome was reached?**

## 7. The traceability chain for HT-101

```text
Customer need
-> HT-101 User Story
-> QA refinement questions
-> Product Owner decisions
-> Definition of Ready review
-> QA-101 sub-task
-> HT-101 test analysis
-> qa/QA-101-test-analysis branch
-> Pull Request #4
-> review feedback, revision and approval
-> guest exploratory-testing session
-> qa/QA-101-exploratory-testing branch
-> Pull Request #7
-> authenticated exploratory-testing session
-> qa/QA-101-authenticated-cart-exploration branch
-> Pull Request #8
-> guest and authenticated behaviour compared
-> all confirmed acceptance criteria passed in exploratory testing
-> AUTO-100 Playwright foundation
-> Pull Request #10
-> AUTO-101 guest add-to-cart automation
-> Pull Request #13
-> automation test guide
-> Pull Request #14
-> QA completion summary added to HT-101
-> QA-101 completed
-> HT-101 acceptance criteria confirmed
-> HT-101 completed
```
## 8. What the project demonstrates about QA work

The project is intended to demonstrate more than the ability to write Playwright syntax. It provides evidence of:

- Understanding customer and business risk
- Asking precise requirement questions
- Distinguishing business decisions from QA decisions
- Applying Definition of Ready and Definition of Done
- Designing risk-based coverage
- Controlling scope
- Using Git branches, commits and pull requests
- Receiving and addressing review feedback
- Maintaining traceability
- Communicating current status honestly
- Choosing automation based on value rather than automating everything

The Playwright implementation is based on an agreed requirement, known risks and exploratory evidence.

---

## 9. Current stage and what happens next

At the point documented in this guide:

- Project foundations are complete.
- HT-101 passed refinement and Definition of Ready.
- Risk-based test analysis was reviewed and merged.
- Guest and authenticated exploratory testing was completed.
- All confirmed acceptance criteria passed.
- No defects or blockers were identified.
- The Playwright test foundation was established.
- The guest add-to-cart journey was automated.
- Cart contents and refresh persistence were validated automatically.
- The automation test guide was reviewed and merged.
- QA-101 was completed and closed.
- HT-101 received a final QA status and was completed.
- Sprint 1 — Cart Reliability is complete.

The repository now contains a complete traceability chain from the original business need through refinement, test analysis, exploratory testing, automation, review and final QA completion.

Future work can extend the project into additional cart risks or a new feature while preserving this completed Sprint 1 evidence.

## 10. Beginner glossary

| Term                | Meaning in this project                                                               |
| ------------------- | ------------------------------------------------------------------------------------- |
| User Story          | A small description of customer value and expected behaviour                          |
| Acceptance Criteria | Observable conditions used to decide whether the story behaves as required            |
| Refinement          | Team discussion that clarifies scope, behaviour, risks and dependencies               |
| Definition of Ready | Conditions that must be sufficiently satisfied before meaningful work begins          |
| Definition of Done  | Conditions needed before the team treats work as genuinely complete                   |
| Test Condition      | A behaviour or risk that needs to be investigated or proven                           |
| Exploratory Testing | Simultaneous learning, test design and execution guided by a clear charter            |
| Branch              | A separate line of work that protects approved content on `main`                      |
| Commit              | A named saved point in the repository history                                         |
| Pull Request        | A proposal to review and merge branch changes into the approved codebase              |
| Regression          | Checking that a change has not damaged important existing behaviour                   |
| Traceability        | The ability to connect requirements, decisions, tests, defects and results            |
| CI                  | Automated execution triggered by repository changes, later provided by GitHub Actions |

---

## Final takeaway

The project uses a simple professional principle:

> **Every test should have a reason, every decision should have an owner, every result should have evidence, and the live status should match reality.**

That is how the repository becomes more than a collection of test files. It becomes a visible record of how a QA Engineer contributes throughout software delivery.

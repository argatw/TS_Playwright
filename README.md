# TS_Playwright

A TypeScript automation project using **Playwright Test** for end‑to‑end UI testing with example test cases. This repository is used as a practice and reference project for modern UI automation, Page Object Model (POM) usage, debugging, and CI/CD integration.

---

## 📦 Project Structure

```
TS_Playwright/
├── .github/workflows/       # GitHub Actions CI/CD pipeline
├── pages/                   # Page Object Model classes
├── tests/                   # Playwright test specs
├── playwright.config.ts     # Playwright Test configuration
├── package.json             # npm project & scripts
└── package-lock.json        # npm lockfile
```

---

## 🚀 Setup & Installation

### Prerequisites
- **Node.js LTS** (Node 18+ recommended)
- npm (comes bundled with Node.js)

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/argatw/TS_Playwright.git
cd TS_Playwright
```

2. Install project dependencies:

```bash
npm ci
```

3. Install Playwright browsers and system dependencies:

```bash
npx playwright install --with-deps
```

---

## 🧪 Running Tests

### Run all tests (headless)

```bash
npx playwright test
```

---

### Run tests in headed mode (browser visible)

```bash
npx playwright test --headed
```

---

### Run tests using Playwright UI mode

```bash
npx playwright test --ui
```

UI mode allows running individual tests, debugging, and inspecting execution steps interactively.

---

## 📄 Page Object Model (POM)

This project demonstrates clean and minimal Page Object Model usage:

- **`pages/SauceDemoPage.ts`**  
  Encapsulates locators and actions for SauceDemo login flows.

- **`pages/PlaywrightHomePage.ts`**  
  Encapsulates re-direct and page-assert related flows for Playwright website.

POM usage here is intentionally kept lean to:
- improve test readability
- centralize UI interactions
- support easy refactoring during pair programming or interviews

---

## 📦 Example Test Coverage

### 🥤 SauceDemo
- Unhappy login flow (invalid credentials)
- Inline test implementation
- POM-based test implementation

### 🏦 ParaBank
- Login and account-related flows (practice-oriented)
- Dropdown handling with async backend population

### 🔌 Restful Booker (API Testing)
- API-inclusive UI test flow using Playwright `request` context
- Retrieve available rooms for selected dates (GET)
- Validate HTTP status codes and response payload
- Demonstrates backend validation without UI dependency
- Demonstrates **UI–API synchronization** using `page.waitForResponse`

---

## 🧠 Assertions, Debugging & Logging

This project demonstrates:
- Playwright semantic assertions (`toBeVisible`, `toContainText`, `toHaveText`)
- Structured test execution using `test.step()`
- Console logging for execution tracing
- Interactive debugging with:
  - `page.pause()`
  - Playwright Inspector
  - Playwright UI mode

---

## 🤝 CI/CD with GitHub Actions

A working GitHub Actions pipeline is included:

```
.github/workflows/playwright.yml
```

### CI Behavior
- Triggered on **push** and **pull requests** to `main` / `master`
- Runs on **Ubuntu (Linux) runners**
- Uses **Node.js LTS**
- Installs dependencies using `npm ci`
- Installs Playwright browsers
- Executes full Playwright test suite
- Uploads HTML test report as a build artifact

This setup mirrors a real-world CI automation pipeline and ensures test reliability and repeatability.

---

## 📊 Test Reporting

Playwright generates an HTML report after each run.

To view the report locally:

```bash
npx playwright show-report
```

In CI, the report is uploaded as an artifact and can be downloaded from the GitHub Actions run summary.

---

## 📌 Best Practices Demonstrated

- Use semantic locators (`getByRole`, `getByLabel`, `getByTestId`)
- Prefer Playwright built-in waiting and assertions over manual sleeps
- Keep assertions minimal and intent-driven
- Use hard assertions for core behavior
- Use soft-check patterns only when appropriate (non-blocking validations)
- Keep POM design simple and refactor incrementally

---

## 🧩 Technologies Used

- **Playwright Test** – end-to-end browser automation framework
- **TypeScript** – strongly typed JavaScript for maintainability
- **GitHub Actions** – CI/CD automation
- **npm** – dependency management

---

## 📬 Notes

This repository is a personal learning and reference project focused on strengthening automation fundamentals and interview readiness. It prioritizes clarity, correctness, and practical real-world patterns over heavy framework abstraction.


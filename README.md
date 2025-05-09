# Demo Saas Playwright Tests
[![Tests status](https://github.com/BeataMekal/demo-saas/actions/workflows/test-runner.yaml/badge.svg)](https://github.com/BeataMekal/demo-saas/actions/workflows/test-runner.yaml)

[View Playwright HTML report](https://beatamekal.github.io/Playwright-ts-Tests-Demo-Saas/)

[View Test Cases](TEST_CASES.md)

## Demo Saas Application

Demo SaaS is a sample web application created specifically for practicing test automation. Its main purpose is to provide users with a realistic environment for building and running automated tests for common SaaS scenarios, such as user registration, login, account management, form handling, and ticket management. The application is available at https://demo-saas.bugbug.io/. 

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- install dependencies: `npm install`
- setup Playwright with: `npx playwright install`

### How to run tests

Run all tests:

```
npx playwright test
```
Run selected test:
```
npm run tests create-ticket.spec.spec.ts
```


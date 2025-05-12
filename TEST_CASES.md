# Test Cases for Demo Saas Application
## Table of Test Cases: 

### Test Cases verifying login functionality
* [1. Test Case: Log in with correct credentials](#1-test-case-log-in-with-correct-credentials)
* [2. Test Case: Reject login with email without @](#2-test-case-reject-login-with-email-without-)
* [3. Test Case: Reject login with incorrect email](#3-test-case-reject-login-with-incorrect-email)
* [4. Test Case: Reject login with incorrect password](#4-test-case-reject-login-with-incorrect-password)

### Test Cases verifying ticket functionality
* [5. Test Case: Create ticket with all filled fields](#5-test-case-create-ticket-with-all-filled-fields)
* [6. Test Case: Should create ticket with one character in all fields](#6-test-case-should-create-ticket-with-one-character-in-all-fields)
* [7. Test Case: Should return to previous page when click on Go back button on Create new ticket page](#7-test-case-should-return-to-previous-page-when-click-on-go-back-button-on-create-new-ticket-page)
* [8. Test Case: Reject creating ticket without author name](#8-test-case-reject-creating-ticket-without-author-name)
* [9. Test Case: Reject creating ticket without title](#9-test-case-reject-creating-ticket-without-title)
* [10. Test Case: Reject creating ticket without description](#10-test-case-reject-creating-ticket-without-description)

Test Cases verifying ticket status


---
## 1. Test Case: Log in with correct credentials

### Test Case ID: 
- TC-01
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Verify Demo SaaS title is visible.
4. Click on "Log in" button.
5. Verify Log in Heading.
6. Fill email input.
7. Fill password input.
8. Click on "Log in" button.
9. Verify successful log in.
### Expected Result:
- User successfully logs in and is redirected to the page with table with tickets

---


## 2. Test Case: Reject login with email without @

### Test Case ID:
- TC-02
### Pre-Conditions:
- User has an invalid email format without '@' symbol.
- Valid password is known.
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Verify Demo SaaS title is visible.
4. Click on "Log in" button.
5. Verify Log in Heading.
6. Fill email input with invalid data without @.
7. Fill password input.
8. Click on "Log in" button.
9. Verify rejection.
### Expected Result:
- Message "Invalid email" is displayed.

---

## 3. Test Case: Reject login with incorrect email

### Test Case ID:
- TC-03
### Pre-Conditions:
- User enters incorrect email.
- Password is valid.
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Verify Demo SaaS title is visible.
4. Click on "Log in" button.
5. Verify Log in Heading.
6. Fill email input with incorrect email.
7. Fill password input.
8. Click on "Log in" button.
9. Verify rejection.
### Expected Result:
- Message "Invalid email or password" is displayed.

---

## 4. Test Case: Reject login with incorrect password

### Test Case ID:
- TC-04
### Pre-Conditions:
- Email is valid.
- Password is incorrect.
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Verify Demo SaaS title is visible.
4. Click on "Log in" button.
5. Verify Log in Heading.
6. Fill email input with valid data.
7. Fill password input with invalid data.
8. Click on "Log in" button.
9. Verify rejection.
### Expected Result:
- Message "Invalid email or password" is displayed.

---

## 5. Test Case: Create ticket with all filled fields

### Test Case ID:
- TC-05
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Verify "Submit new ticket" heading.
6. Fill Your name, title and description.
7. Click on "Submit" button.
8. Verify added ticket in table.
9. Click on ticket in table.
10. Verify ticket in this viewport.
### Expected Result:
- New ticket is visible in table with title, author, status, created at.
- After clicking the ticket, details are visible in viewport.


---

## 6. Test Case: Should create ticket with one character in all fields

### Test Case ID:
- TC-06
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Fill Your name, title and description with one character.
6. Click on "Submit" button.
7. Verify added ticket in table.
### Expected Result:
- New ticket is visible in table with title, author, status, created at.
- After clicking the ticket, details are visible in viewport.

---

## 7. Test Case: Should return to previous page when click on Go back button on Create new ticket page

### Test Case ID:
- TC-07
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Click on "Go back" button.
6. Verify page with tickets.
### Expected Result:
- User is redirected to the previous page showing the table with tickets.

---

## 8. Test Case: Reject creating ticket without author name

### Test Case ID:
- TC-08
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Leave author name empty, fill title and description.
6. Click on "Submit" button.
7. Verify rejection.
### Expected Result:
- Message "String must contain at least 1 character(s)" is shown below the Author name input.

---

## 9. Test Case: Reject creating ticket without title

### Test Case ID:
- TC-09
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Leave title empty, fill author name and description.
6. Click on "Submit" button.
7. Verify rejection.
### Expected Result:
- Message "String must contain at least 1 character(s)" is shown below the Title input.

---

## 10. Test Case: Reject creating ticket without description

### Test Case ID:
- TC-10
### Pre-Conditions:
- User has a valid account in the Saas app.
- User knows their login credentials (username and password)
### Test Steps:
1. Launch browser.
2. Navigate to url https://demo-saas.bugbug.io/
3. Log in.
4. Click on "+ New" button.
5. Leave description empty, fill author name and title.
6. Click on "Submit" button.
7. Verify rejection.
### Expected Result:
- Message "String must contain at least 1 character(s)" is shown below the Description input.

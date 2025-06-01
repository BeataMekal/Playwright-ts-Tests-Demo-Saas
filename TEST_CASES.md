# Test Cases for Demo Saas Application
## Table of Test Cases: 

### Test Cases verifying login functionality
* [1. Test Case: Log in with correct credentials](#1-test-case-log-in-with-correct-credentials)
* [2. Test Case: Reject login with incorrect email](#2-test-case-reject-login-with-incorrect-email)
* [3. Test Case: Reject login with email without @](#3-test-case-reject-login-with-email-without-)
* [4. Test Case: Reject login with incorrect password](#4-test-case-reject-login-with-incorrect-password)

### Test Cases verifying create ticket functionality
* [5. Test Case: Create ticket with all filled fields](#5-test-case-create-ticket-with-all-filled-fields)
* [6. Test Case: Should create ticket with one character in all fields](#6-test-case-should-create-ticket-with-one-character-in-all-fields)
* [7. Test Case: Should return to previous page when click on Go back button on Create new ticket page](#7-test-case-should-return-to-previous-page-when-click-on-go-back-button-on-create-new-ticket-page)
* [8. Test Case: Reject creating ticket without author name](#8-test-case-reject-creating-ticket-without-author-name)
* [9. Test Case: Reject creating ticket without title](#9-test-case-reject-creating-ticket-without-title)
* [10. Test Case: Reject creating ticket without description](#10-test-case-reject-creating-ticket-without-description)

### Test Cases verifying ticket status
* [11. Test Case: Change ticket status from new to in progress](#11-test-case-change-ticket-status-from-new-to-in-progress)
* [12. Test Case: Change ticket status from in progress to resolved](#12-test-case-change-ticket-status-from-in-progress-to-resolved)
* [13. Test Case: Change ticket status from resolved to closed](#13-test-case-change-ticket-status-from-resolved-to-closed)



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

## 2. Test Case: Reject login with incorrect email

### Test Case ID:
- TC-02
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

## 3. Test Case: Reject login with email without @

### Test Case ID:
- TC-03
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
6. Verify that username - email is in "Reported by" field.
7. Fill Your name, title and description.
8. Click on "Submit" button.
9. Verify created ticket alert "Successfully created new ticket!".
10. Verify added ticket.
11. Go to tickets table..
12. Verify added ticket.
### Expected Result:
- New ticket is visible with title, reported by (filled name and user email), created (now), description, status (New), created at.
- New ticket is visible in table with title, reported by (user email), status (New), created at (now).

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
5. Verify "Submit new ticket" heading.
6. Verify that username - email is in "Reported by" field.
5. Fill Your name, title and description with one character.
8. Click on "Submit" button.
9. Verify created ticket alert "Successfully created new ticket!".
10. Verify added ticket.
11. Go to tickets table..
12. Verify added ticket.
### Expected Result:
- New ticket is visible with title, reported by (filled name and user email), created (now), description, status (New), created at.
- New ticket is visible in table with title, reported by (user email), status (New), created at (now).

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
5. Verify "Submit new ticket" heading.
6. Click on "Go back" button.
7. Verify page with tickets.
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
5. Verify "Submit new ticket" heading.
6. Leave your name empty, fill title and description.
7. Click on "Submit" button.
8. Verify rejection.
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
5. Verify "Submit new ticket" heading.
6. Leave title empty, fill author name and description.
7. Click on "Submit" button.
8. Verify rejection.
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
5. Verify "Submit new ticket" heading.
6. Leave description empty, fill author name and title.
7. Click on "Submit" button.
8. Verify rejection.
### Expected Result:
- Message "String must contain at least 1 character(s)" is shown below the Description input.

---

## 11. Test Case: Change ticket status from new to in progress

### Test Case ID:  
- TC-11

### Pre-Conditions:  
- User has a valid account in the Saas app.  
- User knows their login credentials (username and password)  
- There is at least one ticket on the table  

### Test Steps:  
1. Launch browser.  
2. Navigate to url https://demo-saas.bugbug.io/  
3. Log in  
4. Click on first ticket in the table  
5. Verify "Submit new ticket" heading  
6. Click on status and change it to "IN PROGRESS"  
7. Verify "IN PROGRESS" status  

### Expected Result:  
- "IN PROGRESS" status is visible on ticket view port  
- "IN PROGRESS" status is visible in table of tickets  

---

## 12. Test Case: Change ticket status from in progress to resolved

### Test Case ID:  
- TC-12

### Pre-Conditions:  
- User has a valid account in the Saas app.  
- User knows their login credentials (username and password)  
- There is at least one ticket on the table  

### Test Steps:  
1. Launch browser.  
2. Navigate to url https://demo-saas.bugbug.io/  
3. Log in  
4. Click on first ticket with "in progress" status in the table  
5. Verify "Submit new ticket" heading  
6. Click on status and change it to "RESOLVED"  
7. Verify "RESOLVED" status  

### Expected Result:  
- "RESOLVED" status is visible on ticket view port  
- "RESOLVED" status is visible in table of tickets  

---

## 13. Test Case: Change ticket status from resolved to closed

### Test Case ID:  
- TC-13

### Pre-Conditions:  
- User has a valid account in the Saas app.  
- User knows their login credentials (username and password)  
- There is at least one ticket on the table  

### Test Steps:  
1. Launch browser.  
2. Navigate to url https://demo-saas.bugbug.io/  
3. Log in  
4. Click on first ticket in the table  
5. Verify "Submit new ticket" heading  
6. Click on status and change it to "CLOSED"  
7. Verify "CLOSED" status  

### Expected Result:  
- "CLOSED" status is visible on ticket view port  
- "CLOSED" status is visible in table of tickets  
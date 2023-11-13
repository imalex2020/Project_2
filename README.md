# Cypress Test Cases for Project 2

This repository contains Cypress test cases for the login functionality of Project 2.

## Prerequisites

Before running the test cases, make sure you have the following:

- [Node.js](https://nodejs.org/) installed
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) installed


## Installation

1. Clone this repository:

```bash
git clone <repository-url>
```
2. Navigate to the project folder:

```bash
cd <project-folder>
```
3.Install dependencies:
```bash
npm install
```

## Configuration
Before running the tests, make sure to set up the configuration file `example.json`. This file contains essential data required for test execution. Follow the steps below:

1. Create a file named `example.json` in the `cypress/fixtures` directory.

2. Copy and paste the following sample content into `example.json`:

   ```json
   {
     "email": "test@gmail.com",
     "username": "TechGlobal",
     "password": "Test1234"
   }
Save the file.
## Running the Tests with Configuration
When running the Cypress tests, the configuration data from example.json will be used to perform the test scenarios. Ensure that the data in example.json is accurate and represents the test environment.
## Pages

The `Pages` folder contains the `Project2.js` file, which serves as a page object for the login functionality in Project 2. This page object helps organize and centralize the interactions with the different elements on the login page.

### LoginPage Class

The `LoginPage` class provides methods for interacting with various elements on the login page. Here is an overview of the available methods:

- `getLoginPassword()`: Returns the combined selector for the username and password fields.
- `getUsernameField()`: Returns the selector for the username field.
- `getPasswordField()`: Returns the selector for the password field.
- `getLoginButton()`: Returns the selector for the login button.
- `getLogoutButton()`: Returns the selector for the logout button.
- `getForgotPassword()`: Returns the selector for the "Forgot Password?" link.
- `getSuccessMessage()`: Returns the selector for the success message.
- `getfailureMessage()`: Returns the selector for the error message.
- `getLoginForm()`: Returns the selector for the login form.
- `getModalHeader()`: Returns the selector for the modal header.
- `getCloseButton()`: Returns the selector for the close button in the modal.
- `getResetPasswordInput()`: Returns the selector for the reset password input field.
- `getResetPasswordLabel()`: Returns the selector for the reset password input label.
- `getSubmit()`: Returns the selector for the submit button in the reset password modal.
- `clickLoginButton()`: Clicks the login button.
- `getConfirmMessage()`: Returns the selector for the confirmation message.

### Usage

To use the `LoginPage` class in your Cypress test scripts, import it and create an instance. You can then call the methods on the instance to interact with the elements on the login page.

Example:

```javascript
import LoginPage from "../../pages/Project2";

const loginPage = new LoginPage();

// Example usage
loginPage.userLogin("yourUsername", "yourPassword");
loginPage.getLogoutButton().click();
// ... (continue with other interactions)
```
## Running the Tests
To run the Cypress tests, use the following command:
```bash
npm test
```


## Test Cases
### 1. Validate the login form

Ensures that the login form is functional and displays appropriate error messages for empty fields.

### 2. Validate the valid login

Tests successful login with valid credentials.

### 3. Validate the logout

Tests the logout functionality after a successful login.

### 4. Validate the Forgot Password? Link and Reset Password modal

Checks the functionality of the "Forgot Password?" link and the associated reset password modal.

### 5. Validate the Reset Password modal close button

Ensures that the close button in the reset password modal works as expected.

### 6. Validate the Reset Password form submission

Tests the submission of the reset password form.

### 7-10. Additional Test Cases

Various scenarios to validate invalid login attempts with different combinations of empty, incorrect username, and 
incorrect password.

Test Data
## For test cases 7 to 10, the following test data is used:

Description	Username	Password	Expected Message
Validate the invalid login with empty credentials	(empty)	(empty)	Invalid Username entered!
Validate the invalid login with the wrong username	John	Test1234	Invalid Username entered!
Validate the invalid login with the wrong password	TechGlobal	1234	Invalid Password entered!
Validate the invalid login with wrong credentials	John	1234	Invalid Username entered!


### |Description | Username | Password |Expected Message |

|-----------------|-----------------|---------------|---------------------------|

|the empty credentials | (empty) | (empty) |Invalid Username entered!|

| the wrong username | John | Test1234 |Invalid Username entered! |

| the wrong password | TechGlobal | 1234 |Invalid Password entered! |

| the wrong credentials | John | 1234 |Invalid Username entered! |


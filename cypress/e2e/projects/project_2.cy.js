/// <reference types="cypress" />
import LoginPage from "../../pages/Project2";

describe('Project - Login Function', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        cy.fixture('example').then(function (data) {
            this.username = data.username
            this.password = data.password
            this.email = data.email
        })


    })
    const loginPage = new LoginPage()
   



    it('Test Case 01 - Validate the login form', () => {
        const arr = ['Please enter your username', 'Please enter your password']


        loginPage.getLoginPassword().each(($el, index) => {
            cy.wrap($el).should('be.visible').and('be.enabled').and('not.have.attr', 'required')
            cy.wrap($el).siblings().should('have.text', arr[index])
        })

        loginPage.getLoginButton().should('have.text', 'LOGIN').click()
        loginPage.getForgotPassword().should('have.text', 'Forgot Password?').click()

    })

    it('Test Case 02 - Validate the valid login', function () {
        loginPage.userLogin(this.username, this.password)
        loginPage.getSuccessMessage().should('have.text', 'You are logged in')
        loginPage.getLogoutButton().should('have.text', 'LOGOUT')

    })

    it('Test Case 03 - Validate the logout', function () {
        loginPage.userLogin(this.username, this.password)
        loginPage.getLogoutButton().click()
        loginPage.getLoginForm().should('be.visible')

    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        loginPage.getForgotPassword().click()
        loginPage.getModalHeader().should('be.visible').and('have.text', 'Reset Password')
        loginPage.getCloseButton().should('be.enabled')
        loginPage.getResetPasswordInput().should('be.enabled')
        loginPage.getResetPasswordLabel().should('have.text', "Enter your email address and we'll send you a link to reset your password. ")
        loginPage.getSubmit().should('have.text', 'SUBMIT').and('be.enabled').click()

    })

    it('Test Case 05 - Validate the Reset Password modal close button', () => {
        loginPage.getForgotPassword().click()
        loginPage.getModalHeader().should('be.visible')
        loginPage.getCloseButton().click()
        loginPage.getModalHeader().should('not.exist')

    })

    it('Test Case 06 - Validate the Reset Password form submission', function () {
        loginPage.resetPassword(this.email)
        loginPage.getConfirmMessage().should('have.text', 'A link to reset your password has been sent to your email address.')
    })
//testData object for test cases 7, 8, 9, 10
    const testData = [
        {   description: "Validate the invalid login with the empty credentials",
            username: " ",
            password: " ",
            message: "Invalid Username entered!"
        },
        {   description: "Validate the invalid login with the wrong username",
            username: "John",
            password: "Test1234",
            message: "Invalid Username entered!"
        },
        {   description: "Validate the invalid login with the wrong password",
            username: "TechGlobal",
            password: "1234",
            message: "Invalid Password entered!"
        },
        {   description: "Validate the invalid login with the wrong username and password",
            username: "John",
            password: "1234",
            message: "Invalid Username entered!"
        }

    ]
//Test cases 7, 8, 9, 10
    testData.forEach((testItem, index) => {
        it(`Test Case ${index + 7} - ${testItem.description}`, () => {
            loginPage.userLogin(testItem.username, testItem.password)
            loginPage.clickLoginButton()
            loginPage.getfailureMessage().should('have.text', testItem.message)
        })
    })

})

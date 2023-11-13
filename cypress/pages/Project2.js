class LoginPage {
    getLoginPassword(){
        return cy.get('#username, #password')
    }

    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getLogoutButton(){
        return cy.get('#logout')
    }

    getForgotPassword(){
        return cy.get('#login_btn ~')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getfailureMessage(){
        return cy.get('#error_message')
    }

    getLoginForm(){
        return cy.get('.is-size-3')
    }

    getModalHeader(){
        return cy.get('#modal_title')
    }

    getCloseButton(){
        return cy.get('.delete')
    }

    getResetPasswordInput(){
        return cy.get('#email')
    }
    getResetPasswordLabel(){
        return cy.get('[for="email"]')
    }

    getSubmit(){
        return cy.get('#submit')
    }

    

    clickLoginButton(){
        this.getLoginButton().click()
    }

    getConfirmMessage(){
        return cy.get('#confirmation_message')
    }


    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }

    resetPassword(email){
        this.getForgotPassword().click()
        this.getResetPasswordInput().type(email)
        this.getSubmit().click()
      
        
    }

   
}


export default LoginPage
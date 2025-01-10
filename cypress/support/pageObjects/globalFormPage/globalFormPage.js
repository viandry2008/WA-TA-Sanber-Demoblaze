const signUpLocators = require("./signUpLocators");

class signUpPage {

    inputUsername(username) {
        cy.wait(3000);
        cy.get(signUpLocators.input_username).should('be.visible').type(username);
    }

    inputPassword(password) {
        cy.wait(3000);
        cy.get(signUpLocators.input_password).should('be.visible').type(password);
    }

    clickSignUpBtn() {
        cy.get(signUpLocators.button).contains('Sign up').click()
        // cy.wait(3000);
    }
}

module.exports = new signUpPage();
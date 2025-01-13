const globalFormLocator = require("./globalFormLocator");

class globalFormPage {

    inputUsername(username) {
        cy.wait(3000);
        cy.get(globalFormLocator.input_username).should('be.visible').type(username);
    }

    inputPassword(password) {
        cy.wait(3000);
        cy.get(globalFormLocator.input_password).should('be.visible').type(password);
    }

    clickSubmitBtn(text) {
        cy.get(globalFormLocator.button).contains(text).click()
        // cy.wait(3000);
    }

    verifyRegistrationSuccess(message){
        cy.on('window:alert', (a) => {
            expect(a).to.eq(message)
        })
        cy.wait(5000)
    }
}

module.exports = new globalFormPage();
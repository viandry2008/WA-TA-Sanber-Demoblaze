const globalFormLocator = require("./globalFormLocator");

class globalFormPage {

    inputUsername(username,locator) {
        cy.wait(3000);
        cy.get(locator).should('be.visible').type(username);
    }

    inputPassword(password,locator) {
        cy.wait(3000);
        cy.get(locator).should('be.visible').type(password);
    }

    inputUsernameEmpty(locator) {
        cy.wait(3000);
        cy.get(locator).clear();
    }

    inputPasswordEmpty(locator) {
        cy.wait(3000);
        cy.get(locator).clear();
    }

    clickSubmitBtn(text) {
        cy.get(globalFormLocator.button).contains(text).click()
        // cy.wait(3000);
    }

    verifyWithAlert(message){
        cy.on('window:alert', (a) => {
            expect(a).to.eq(message)
        })
        cy.wait(3000)
    }
}

module.exports = new globalFormPage();
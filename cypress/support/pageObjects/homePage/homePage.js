class homePage {

    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    clickSignUpMenu() {
        cy.get('a').contains('Sign up').click()
    }

    clickLoginMenu() {
        cy.get('a').contains('Log in').click()
    }

}

module.exports = new homePage();
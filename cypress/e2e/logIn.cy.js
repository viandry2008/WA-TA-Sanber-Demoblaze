const homePage = require("../support/pageObjects/homePage/homePage");
const signUpPage = require("../support/pageObjects/signUpPage/signUpPage");

describe('Sign up', () => {
    it('Success', () => {
        homePage.goToHomePage();
        homePage.clickSignUpMenu();

        signUpPage.inputUsername('vian1');
        signUpPage.inputPassword('vian1');
        signUpPage.clickSignUpBtn();

        // cy.wait('@signupRequest').then((interception) => {
        //   // Verifikasi status respons
        //   expect(interception.response.statusCode).to.eq(200);
        //   cy.log('Signup request completed.');
        // });

        // Tangkap alert yang muncul
        cy.on('window:alert', (alertText) => {
            // Verifikasi teks pada alert
            expect(alertText).to.eq('This user already exist.');
        });
    })
})
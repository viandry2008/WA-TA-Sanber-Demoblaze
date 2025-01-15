const { input_login_username, input_login_password, input_name,input_country, input_city, input_card, input_month, input_year} = require("../support/pageObjects/globalFormPage/globalFormLocator");
const globalFormPage = require("../support/pageObjects/globalFormPage/globalFormPage");
const homePage = require("../support/pageObjects/homePage/homePage");
const { faker }  = require('@faker-js/faker');

describe('Checkout Product', () => {

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickLoginMenu();

    globalFormPage.inputFormText('vian123',input_login_username);
    globalFormPage.inputFormText('vian123',input_login_password);
    globalFormPage.clickSubmitBtn('Log in');

    cy.get('a').contains('Samsung galaxy s6').click();
    cy.wait(3000);
    cy.get('a').contains('Add to cart').click();
    cy.wait(3000);
    cy.get('a').contains('Cart').click();
    cy.wait(3000);
    cy.get('button').contains('Place Order').click();
    cy.wait(3000);
  })

   it('With valid data', () => {
      globalFormPage.inputFormText(faker.person.fullName(),input_name);
      cy.wait(3000);
      globalFormPage.inputFormText(faker.location.country(),input_country);
      cy.wait(3000);
      globalFormPage.inputFormText(faker.location.city(),input_city);
      cy.wait(3000);
      globalFormPage.inputFormText(faker.finance.creditCardNumber(),input_card);
      cy.wait(3000);
      globalFormPage.inputFormText(faker.date.month(),input_month);
      cy.wait(3000);
      globalFormPage.inputFormText('2025',input_year);
      cy.wait(3000);
      cy.get('button').contains('Purchase').click();
      cy.wait(3000);
      cy.get('button').contains('OK').click();
    }),
    it('With invalid data - empty input', () => {
       globalFormPage.inputFormTextEmpty(input_name);
      cy.wait(3000);
       globalFormPage.inputFormTextEmpty(input_country);
      cy.wait(3000);
       globalFormPage.inputFormTextEmpty(input_city);
      cy.wait(3000);
       globalFormPage.inputFormTextEmpty(input_card);
      cy.wait(3000);
       globalFormPage.inputFormTextEmpty(input_month);
      cy.wait(3000);
       globalFormPage.inputFormTextEmpty(input_year);
      cy.wait(3000);
      cy.get('button').contains('Purchase').click();
      globalFormPage.verifyWithAlert('Please fill out Name and Creditcard.');
    })
    
})
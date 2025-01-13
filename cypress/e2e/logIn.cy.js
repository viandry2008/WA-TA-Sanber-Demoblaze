const globalFormPage = require("../support/pageObjects/globalFormPage/globalFormPage");
const homePage = require("../support/pageObjects/homePage/homePage");
const { faker }  = require('@faker-js/faker');

describe('Login', () => {

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
  })

  it('With valid data', () => {
    globalFormPage.inputUsername("vian123");
    globalFormPage.inputPassword('vian123');
  }),
  it('With invalid data - empty input', () => {
    globalFormPage.inputUsername("");
    globalFormPage.inputPassword("");
  })

  afterEach(() => {
    globalFormPage.clickSubmitBtn('Login');
    globalFormPage.verifyRegistrationSuccess('Login successful.');
  })
})
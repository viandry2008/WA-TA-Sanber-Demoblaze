const globalFormPage = require("../support/pageObjects/globalFormPage/globalFormPage");
const homePage = require("../support/pageObjects/homePage/homePage");
const { faker }  = require('@faker-js/faker');

describe('Sign up', () => {

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
  })

  it('With valid data', () => {
    globalFormPage.inputUsername(faker.person.firstName() + "123");
    globalFormPage.inputPassword('vian123');
  }),
  it('With invalid data - empty input', () => {
    globalFormPage.inputUsername("");
    globalFormPage.inputPassword("");
  })

  afterEach(() => {
    globalFormPage.clickSubmitBtn('Sign up');
    globalFormPage.verifyRegistrationSuccess('Sign up successful.');
  })
})
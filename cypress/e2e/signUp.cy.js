const { input_signup_username, input_signup_password } = require("../support/pageObjects/globalFormPage/globalFormLocator");
const globalFormPage = require("../support/pageObjects/globalFormPage/globalFormPage");
const homePage = require("../support/pageObjects/homePage/homePage");
const { faker }  = require('@faker-js/faker');

describe('Sign up', () => {

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
  })

  it('With valid data', () => {
    globalFormPage.inputUsername(faker.person.firstName() + " vian 123",input_signup_username);
    globalFormPage.inputPassword('vian123',input_signup_password);
    globalFormPage.clickSubmitBtn('Sign up');
    globalFormPage.verifyWithAlert('Sign up successful.');
  }),
  it('With invalid data - empty input', () => {
    globalFormPage.inputUsernameEmpty(input_signup_username);
    globalFormPage.inputPasswordEmpty(input_signup_password);
    globalFormPage.clickSubmitBtn('Sign up');
    globalFormPage.verifyWithAlert('Please fill out Username and Password.');
  })
  it('With invalid data - user already exist', () => {
    globalFormPage.inputUsername("vian123",input_signup_username);
    globalFormPage.inputPassword("vian123",input_signup_password);
    globalFormPage.clickSubmitBtn('Sign up');
    globalFormPage.verifyWithAlert('This user already exist.');
  })

})
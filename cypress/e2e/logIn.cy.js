const { input_login_username, input_login_password } = require("../support/pageObjects/globalFormPage/globalFormLocator");
const globalFormPage = require("../support/pageObjects/globalFormPage/globalFormPage");
const homePage = require("../support/pageObjects/homePage/homePage");
const { faker }  = require('@faker-js/faker');

describe('Login', () => {

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickLoginMenu();
  })

   it('With valid data', () => {
      globalFormPage.inputFormText('vian123',input_login_username);
      globalFormPage.inputFormText('vian123',input_login_password);
      globalFormPage.clickSubmitBtn('Log in');
      globalFormPage.verifyWithAlert('Log in successful.');
    })
    it('With invalid data - empty input', () => {
      globalFormPage.inputFormTextEmpty(input_login_username);
      globalFormPage.inputFormTextEmpty(input_login_password);
      globalFormPage.clickSubmitBtn('Log in');
      globalFormPage.verifyWithAlert('Please fill out Username and Password.');
    })
    it('With invalid data - user does not exist', () => {
      globalFormPage.inputFormText(faker.person.firstName() + "123",input_login_username);
      globalFormPage.inputFormText("vian123",input_login_password);
      globalFormPage.clickSubmitBtn('Log in');
      globalFormPage.verifyWithAlert('User does not exist.');
    })
    
})
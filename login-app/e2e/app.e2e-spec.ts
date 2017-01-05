import { LoginAppPage } from './app.po';
import { element, by } from 'protractor';

describe('login-app App', function() {
  let page: LoginAppPage;

  beforeEach(() => {
    page = new LoginAppPage();
  });

  it('should display message saying home component', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Home component');
  });



  it('should open a modal after clicking sign in', () => {
    page.navigateTo('/');
    
    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let modal = element(by.className('modal-dialog'));

    expect(modal.getAttribute('class')).toBe('modal-dialog');
  });

  

  it('should have submit button disabled initially', () => {
    page.navigateTo('/');

    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let submitBtn = element(by.id('signinbtn'));

    expect(submitBtn.isEnabled()).toBe(false);
  });

  

  it('should show 3 input fields', () => {
    page.navigateTo('/');

    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let inputs = element.all(by.css('input')).count();

    expect(inputs).toEqual(3);
  });

  

  it('should have submit button enabled after filling form', () => {
    page.navigateTo('/');

    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let username = element(by.id('username'));
    let password = element(by.id('password'));
    let companyName = element(by.id('company'));

    username.sendKeys('john');
    password.sendKeys('doe');
    companyName.sendKeys('john&sons');

    let submitBtn = element(by.id('signinbtn'));

    expect(submitBtn.isEnabled()).toBe(true);
  });

  

  it('should display error after submitting the form (backend not implemented!)', () => {
    page.navigateTo('/');

    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let username = element(by.id('username'));
    let password = element(by.id('password'));
    let companyName = element(by.id('company'));

    username.sendKeys('john');
    password.sendKeys('doe');
    companyName.sendKeys('john&sons');

    let submitBtn = element(by.id('signinbtn'));
    submitBtn.click();

    let alertBoxText = element(by.css('.alert.alert-danger')).getText();

    expect(alertBoxText).toEqual('Failed to sign in! Please check your credentials and try again.');
  });

  

  it('should find sign in button when not logged in under /loggedin URL and open a modal', () => {
    page.navigateTo('/loggedin');

    let signInBtn = element(by.css('[data-target="#loginModal"]'));
    signInBtn.click();

    let modal = element(by.className('modal-dialog'));

    expect(modal.getAttribute('class')).toBe('modal-dialog');
  });

  

  it('should redirect to home page after typing non-existing address', () => {
    page.navigateTo('/wrongaddress');

    expect(page.getParagraphText()).toEqual('Home component');
  });

});

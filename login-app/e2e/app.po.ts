import { browser, element, by } from 'protractor';

export class LoginAppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }
}

import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async countUs(): Promise<number> {
    return element.all(by.css('app-root .content .card-container li')).count();
  }

  async getListeText(): Promise<ElementFinder[]> {
    return element.all(by.css('app-root .content .card-container li')).then(items => items);
  }
}

import { browser, by, element, WebElement, WebElementPromise, ElementFinder } from 'protractor';

export class AppPage {
  getOrderForm(): OrderForm {
    return new OrderForm();
  }
  getToolbar(): Toolbar {
    return new Toolbar();
  }
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root app-toolbar #toolbar .row .column h2')).getText() as Promise<string>;
  }
}
export class OrderForm {
  getMealInput(): ElementFinder {
    return element(by.id('meal'));
  }

  getOrdersList(): ElementFinder {
    return element(by.id('ordersList'));
  }

}

export class Toolbar {
  getUserInfo(): Promise<string> {
    return element(by.id('userInfo')).getText() as Promise<string>;
  }

  getNavbar(): Promise<string> {
    return element(by.css('#toolbar nav')).getText() as Promise<string>;
  }
}
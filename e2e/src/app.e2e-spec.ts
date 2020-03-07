import { AppPage } from './app.po';
import { browser, logging, Ptor, ExpectedConditions, Key } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('What\'s for lunch');
  });

  it('should display nav bar', () => {
    expect(page.getToolbar().getNavbar()).toContain('Home')
  });

  it('should display login button', () => {
    expect(page.getToolbar().getUserInfo()).toContain('LOGIN');
  });

  it('should be able to add a meal', () => {
    const meal = page.getOrderForm().getMealInput();
    browser.wait(ExpectedConditions.presenceOf(meal), 10000);
    meal.sendKeys('first meal', Key.ENTER);
    const ordersList = page.getOrderForm().getOrdersList();
    expect(ordersList.getText()).toContain('first meal');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

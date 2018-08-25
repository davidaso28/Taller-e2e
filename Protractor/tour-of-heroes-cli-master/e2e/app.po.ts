import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateTourOfHeroes() {
      return browser.get('/detail/11');
  }
  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }
  deleteHero() {
    element(by.css('.delete')).click();
  }
  enterSearch(Hero: string) {
    element(by.id('search-box')).sendKeys(Hero);
    browser.sleep(3000);
    element(by.css('.search-result')).click();
  }
  enterEdit(Hero: string) {
    element(by.tagName('input')).sendKeys(Hero);
    element(by.buttonText('Save')).click();
  }
}

import { TourOfHeroesPage, } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('Search hero', () => {
    page.navigateTo();
    page.enterSearch('Narco');
    var detail=element(by.tagName('h2'))
    expect(detail.getText()).toEqual('Narco details!');
  });
  it('Search Navigation', () => {
    page.navigateTo();
    page.enterSearch('Narco');
    var detail=element(by.tagName('h2'))
    expect(detail.getText()).toEqual('Narco details!');
  });
  it('Dashboard navigation', () => {
    page.navigateTo();
    element(by.tagName('h4')).click();
    var detail=element(by.tagName('h2'))
    expect(detail.getText()).toEqual('Mr. Nice details!');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
  it('Delete hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });
  it('Hero list navigation', () => {
     page.navigateToHeroes();
     element(by.tagName('li')).click();

    element(by.buttonText('View Details')).click();
    var detail=element(by.tagName('h2'))
    expect(detail.getText()).toEqual('Mr. Nice details!');
  });


});

describe('Tour of heroes, details', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTourOfHeroes();
  });

  it('edit', () => {
    page.enterEdit('Prueba');
    browser.sleep(3000);
    page.enterSearch('Mr. NicePrueba');

    var detail=element(by.tagName('h2'))
    expect(detail.getText()).toEqual('Mr. NicePrueba details!');
  });



});

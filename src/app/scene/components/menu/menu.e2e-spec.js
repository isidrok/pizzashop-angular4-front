import {browser, element, by} from 'protractor';

describe('Testing Menu component', () => {
  beforeEach(() => {
    browser.get('');
  });
  it('should exist', () => {
    expect(element(by.className('ps-scene__menu'))).toBeDefined();
  });
  it('should be shown in large screens', ()=>{
    browser.manage().window().setSize(1200, 800);
    const expectedWidth = '270px';
    const nativeElement = element(by.className('ps-scene__menu'));
    nativeElement.getCssValue('width').then( (actualWidth) => {
      expect(actualWidth).toEqual(expectedWidth);
    });
  });
  it('should be hidden in small screens', ()=>{
    browser.manage().window().setSize(800, 600);
    const expectedWidth = '0px';
    const nativeElement = element(by.className('ps-scene__menu'));
    nativeElement.getCssValue('width').then( (actualWidth) => {
      expect(actualWidth).toEqual(expectedWidth);
    });
  });
});

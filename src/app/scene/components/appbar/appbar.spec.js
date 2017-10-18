import {destroyPlatform} from '@angular/core';
import {
  async,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {PizzashopCoreModule} from '../../../core';
import {AppBarComponent} from './appbar.component';
import {SceneService} from '../../scene.service';
class MockSceneService {
  _menuDocked = false;
  get menuDocked() {
    return this._menuDocked;
  }
  set menuDocked(value) {
    this._menuDocked = value;
  }
}

describe('Testin AppBar component', () => {
  let fixture;
  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });
  beforeEach(() => destroyPlatform());
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PizzashopCoreModule],
      declarations: [AppBarComponent],
      providers: [
        {provide: SceneService, useClass: MockSceneService},
      ],
    });
    fixture = TestBed.createComponent(AppBarComponent);
    fixture.detectChanges();
  });
  it('should exist', () => {
    expect(fixture.componentInstance).toBeDefined();
  });
  it('should show', async(inject([], () => {
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      }).then(() => {
        const show = fixture.componentInstance.mustShow();
        expect(show).toBeTruthy();
      });
  })));
  it('should show PizzaShop', async(inject([], () => {
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      }).then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('span').innerText).toEqual('Pizzashop');
      });
  })));
});

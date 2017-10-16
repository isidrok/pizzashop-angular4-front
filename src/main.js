import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {PizzashopModule} from './app';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(PizzashopModule);

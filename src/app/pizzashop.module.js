import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PizzashopRoutingModule} from './pizzashop.routing';
import {
  PizzashopCoreModule,
  ModuleLoaderProvider,
  APIInterceptorProvider,
} from './core';
import {PizzashopComponent} from './pizzashop.component';
import {
  SceneComponent,
  MenuComponent,
  AppBarComponent,
  ContentComponent,
  MenuItemComponent,
} from './scene';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PizzashopCoreModule,
    PizzashopRoutingModule,
  ],
  declarations: [
    PizzashopComponent,
    SceneComponent,
    MenuComponent,
    AppBarComponent,
    ContentComponent,
    MenuItemComponent,
  ],
  providers: [
    ModuleLoaderProvider,
    APIInterceptorProvider,
  ],
  bootstrap: [
    PizzashopComponent,
  ],
})
export class PizzashopModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './routing';
import {AuthService} from './services';
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
    PizzashopCoreModule,
    RoutingModule,
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
    AuthService,
    ModuleLoaderProvider,
    APIInterceptorProvider,
  ],
  bootstrap: [
    PizzashopComponent,
  ],
})
export class PizzashopModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './modules/material';
import {PizzashopComponent} from './pizzashop.component';
import {Menu, AppBar, Content} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {useHash: true}),
    MaterialModule,
  ],
  declarations: [
    PizzashopComponent,
    Menu,
    AppBar,
    Content,
  ],
  bootstrap: [
    PizzashopComponent,
  ],
})
export class PizzashopModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClienteLstComponent } from './cliente-lst/cliente-lst.component';
import { ClienteFrmComponent } from './cliente-frm/cliente-frm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClienteLstComponent,
    ClienteFrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

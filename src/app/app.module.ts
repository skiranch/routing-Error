import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftComponent } from './left/left.component';
import { FooterComponent } from "./footer/footer.component";
import { RoutingComponent } from './routing/routing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftComponent,
    FooterComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,FormsModule,BootstrapModalModule
  ],

  providers: [],
  bootstrap: [AppComponent,HeaderComponent,RoutingComponent]
})
export class AppModule { }

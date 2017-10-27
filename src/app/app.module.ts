import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftComponent } from './left/left.component';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

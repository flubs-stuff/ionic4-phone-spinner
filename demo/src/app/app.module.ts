import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBadPhoneSpinnerModule } from 'ionic4-phone-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBadPhoneSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

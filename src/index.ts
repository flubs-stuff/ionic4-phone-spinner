import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

export * from './ionic4-modal/ionic4-modal.component';

import {Ionic4ButtonsComponent} from './ionic4-buttons/ionic4-buttons.component';

@NgModule({
  declarations: [
    Ionic4ButtonsComponent
  ],
  entryComponents: [
    Ionic4ButtonsComponent
  ],
  exports: [
    Ionic4ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class Ionic4ButtonsModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: Ionic4ButtonsModule,
      providers: []
    };
  }
}

export * from './ionic4-modal/ionic4-modal.component';

import {Ionic4ModalComponentController} from './ionic4-modal/ionic4-modal.component.controller';

import {Ionic4ModalComponent} from './ionic4-modal/ionic4-modal.component';

@NgModule({
  declarations: [
    Ionic4ModalComponent
  ],
  entryComponents: [
    Ionic4ModalComponent
  ],
  exports: [
    Ionic4ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    Ionic4ModalComponentController
  ]
})
export class Ionic4ModalModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: Ionic4ModalModule,
      providers: []
    };
  }
}

export * from './ionic4-phone-spinner/ionic4-phone-spinner.component';
export * from './pipes/range.pipe';
export * from './models/lock-options.model';
export * from './models/ionic4-phone-spinner.model';

import {Ionic4PhoneSpinnerComponent} from './ionic4-phone-spinner/ionic4-phone-spinner.component';
import {RangePipe} from './pipes/range.pipe';

@NgModule({
  declarations: [
    Ionic4PhoneSpinnerComponent,
    RangePipe
  ],
  entryComponents: [
    Ionic4PhoneSpinnerComponent
  ],
  exports: [
    Ionic4PhoneSpinnerComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4ModalModule
  ]
})
export class Ionic4PhoneSpinnerModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: Ionic4PhoneSpinnerModule,
      providers: []
    };
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {Ionic4ModalComponentController} from './ionic4-modal.component.controller';

import {Ionic4ButtonsModule} from '../ionic4-buttons/ionic4-buttons.module';
import {Ionic4ModalComponent} from './ionic4-modal.component';

@NgModule({
  providers: [
    Ionic4ModalComponentController
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4ButtonsModule
  ],
  declarations: [
    Ionic4ModalComponent
  ],
  entryComponents: [
    Ionic4ModalComponent
  ]
})
export class Ionic4ModalModule {}

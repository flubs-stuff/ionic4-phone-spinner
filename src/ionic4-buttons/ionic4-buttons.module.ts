import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {Ionic4ButtonsComponent} from './ionic4-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    Ionic4ButtonsComponent
  ],
  declarations: [
    Ionic4ButtonsComponent
  ]
})
export class Ionic4ButtonsModule {}

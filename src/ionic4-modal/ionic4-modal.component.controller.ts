import {Injectable} from '@angular/core';

import {ActionSheetController, ModalController} from '@ionic/angular';

import {Ionic4ModalComponent} from './ionic4-modal.component';

@Injectable()
export class Ionic4ModalComponentController {
  public cancelText:string;
  public confirmText:string;
  public confirmTitleText:string;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) {
    this.reset();
  }

  async confirm(message:string):Promise<boolean> {
    const options:any = {
      component: Ionic4ModalComponent,
      componentProps: {
        cancelText:       this.cancelText,
        confirmText:      this.confirmText,
        confirmTitleText: this.confirmTitleText,
        message:          message,
      },
      cssClass: 'select-modal'
    };

    const modal = await this.modalCtrl.create(options);

    const returnVar = modal.onDidDismiss().then(
      (detail) => {
        if (detail.data) {
          return detail.data;
        }

        return false;
      }
    );

    await modal.present();

    return returnVar;
  }

  reset():void {

  }
}

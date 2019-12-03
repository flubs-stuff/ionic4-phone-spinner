import {Component} from '@angular/core';

import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector:    'ionic4-modal',
  templateUrl: 'ionic4-modal.component.html',
  styleUrls: [
    'ionic4-modal.component.scss'
  ]
})
export class Ionic4ModalComponent {
  public columns;

  public cancelText:string = 'Cancel';
  public confirmText:string = 'Confirm';
  public confirmTitleText:string = 'Confirmation';
  public message:string = 'Are you sure?';

  constructor(
    private modalCtrl:ModalController,
    private navParams:NavParams
  ) {
    this.reset();
  }

  reset() {
    this.cancelText = this.navParams.get('cancelText');
    this.confirmText = this.navParams.get('confirmText');
    this.confirmTitleText = this.navParams.get('confirmTitleText');
    this.message = this.navParams.get('message');
  }

  cancel():void {
    this.dismiss(false).then();
  }

  confirm():void {
    this.dismiss(true).then();
  }

  async dismiss(response:boolean) {
    await this.modalCtrl.dismiss(response);
  }
}

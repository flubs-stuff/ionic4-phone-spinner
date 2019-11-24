import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector:    'ionic4-buttons',
  templateUrl: 'ionic4-buttons.component.html',
  styleUrls: [
    'ionic4-buttons.component.scss'
  ]
})
export class Ionic4ButtonsComponent {
  @Input() dynamicPositioning:boolean = true;

  @Input() showAcceptButton:boolean = true;
  @Input() showDeclineButton:boolean = true;
  @Input() showNeutralButton:boolean = true;

  @Input() acceptActive:boolean = false;
  @Input() acceptButtonId:string = '';
  @Input() acceptDisabled:boolean = false;
  @Input() acceptDisabledTooltip:string|null = null;
  @Input() acceptIcon:string|null = null;
  @Input() acceptIconSlot:string = 'icon-only';
  @Input() acceptText:string = '';
  @Input() acceptActiveText:string = '';

  @Output() acceptOnClick:EventEmitter<boolean>;

  @Input() declineActive:boolean = false;
  @Input() declineButtonId:string = '';
  @Input() declineDisabled:boolean = false;
  @Input() declineDisabledTooltip:string|null = null;
  @Input() declineIcon:string|null = null;
  @Input() declineIconSlot:string = 'icon-only';
  @Input() declineText:string = '';
  @Input() declineActiveText:string = '';

  @Output() declineOnClick:EventEmitter<boolean>;

  @Input() neutralActive:boolean = false;
  @Input() neutralButtonId:string = '';
  @Input() neutralDisabled:boolean = false;
  @Input() neutralDisabledTooltip:string|null = null;
  @Input() neutralIcon:string|null = null;
  @Input() neutralIconSlot:string = 'icon-only';
  @Input() neutralText:string = '';
  @Input() neutralActiveText:string = '';

  @Output() neutralOnClick:EventEmitter<boolean>;

  constructor() {
    this.acceptOnClick = new EventEmitter<boolean>();
    this.declineOnClick = new EventEmitter<boolean>();
    this.neutralOnClick = new EventEmitter<boolean>();

    this.reset();
  }

  acceptClick():void {
    this.acceptOnClick.emit(true);
  }

  declineClick():void {
    this.declineOnClick.emit(true);
  }

  neutralClick():void {
    this.neutralOnClick.emit(true);
  }

  getButtonCount():number {
    let count = 0;

    count += this.hasAcceptButton() ?  1 : 0;
    count += this.hasDeclineButton() ? 1 : 0;
    count += this.hasNeutralButton() ? 1 : 0;

    return count;
  }

  getSize():number {
    return 12;
  }

  getSizeLg():number {
    const count = this.getButtonCount();

    if (count === 1 && this.dynamicPositioning) {
      return 12;
    } else if (count === 2 && this.dynamicPositioning) {
      return 6;
    } else {
      return 4;
    }
  }

  hasAcceptButton():boolean {
    return this.acceptText.length !== 0 && this.showAcceptButton;
  }

  hasDeclineButton():boolean {
    return this.declineText.length !== 0 && this.showDeclineButton;
  }

  hasNeutralButton():boolean {
    return this.neutralText.length !== 0 && this.showNeutralButton;
  }

  reset():void {

  }
}

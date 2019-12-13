import {Component} from '@angular/core';

import {ButtonOptions, Ionic4PhoneSpinnerOptions, LockOptions} from '@flubs/ionic4-phone-spinner';

@Component({
  selector:    'home-page',
  templateUrl: './home.page.html',
  styleUrls: [
    './home.page.scss'
  ]
})
export class HomePage {
  public difficulties:string[] = [
    'not good',
    'bad',
    'badder',
    'baddest',
    'satan',
  ];
  public difficulty:string = this.difficulties[0];

  public title:string = 'NgxBadPhoneSpinner';
  public value:string;

  public aightOptions:Ionic4PhoneSpinnerOptions;
  public badOptions:Ionic4PhoneSpinnerOptions;
  public badderOptions:Ionic4PhoneSpinnerOptions;
  public baddestOptions:Ionic4PhoneSpinnerOptions;
  public fuOptions:Ionic4PhoneSpinnerOptions;

  constructor() {
    this.aightOptions = new Ionic4PhoneSpinnerOptions();

    this.badOptions = new Ionic4PhoneSpinnerOptions();

    this.badOptions.locks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE
    ];

    this.badOptions.unlocks = [
      LockOptions.DIFFERENT
    ];

    this.badOptions.buttons = [
      ButtonOptions.CHANGE_AFTER_RESTART,
      ButtonOptions.CHANGE_AFTER_SHUFFLE,
      ButtonOptions.CHANGE_AFTER_UNLOCK_ALL,
      ButtonOptions.UPDATE_COLOR,
      ButtonOptions.UPDATE_ICON,
      ButtonOptions.UPDATE_POSITION,
      ButtonOptions.UPDATE_SIZE
    ];

    this.badderOptions = new Ionic4PhoneSpinnerOptions();

    this.badderOptions.locks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE,
      LockOptions.LIAR
    ];

    this.badderOptions.unlocks = [
      LockOptions.DIFFERENT,
      LockOptions.SHUFFLE
    ];

    this.badderOptions.buttons = [
      ButtonOptions.CHANGE_AFTER_RESTART,
      ButtonOptions.CHANGE_AFTER_SHUFFLE,
      ButtonOptions.CHANGE_AFTER_UNLOCK_ALL,
      ButtonOptions.CHANGE_CONTINUOUSLY,
      ButtonOptions.UPDATE_COLOR,
      ButtonOptions.UPDATE_ICON,
      ButtonOptions.UPDATE_POSITION,
      ButtonOptions.UPDATE_SIZE
    ];

    this.baddestOptions = new Ionic4PhoneSpinnerOptions();

    this.baddestOptions.locks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.REVERT,
      LockOptions.SHUFFLE
    ];

    this.baddestOptions.unlocks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.REVERT,
      LockOptions.SHUFFLE
    ];

    this.baddestOptions.buttons = [
      ButtonOptions.ALLOW_RANDOM_COLORS,
      ButtonOptions.ALLOW_RANDOM_ICONS,
      ButtonOptions.CHANGE_AFTER_UNLOCK_ALL,
      ButtonOptions.CHANGE_AFTER_LOCK,
      ButtonOptions.CHANGE_AFTER_RESTART,
      ButtonOptions.CHANGE_AFTER_SHUFFLE,
      ButtonOptions.CHANGE_AFTER_UNLOCK,
      ButtonOptions.UPDATE_COLOR,
      ButtonOptions.UPDATE_FILL,
      ButtonOptions.UPDATE_ICON,
      ButtonOptions.UPDATE_POSITION,
      ButtonOptions.UPDATE_SIZE
    ];

    this.baddestOptions.shufflesPerClick = 10;
    this.baddestOptions.shuffleMilliseconds = 200;

    this.fuOptions = new Ionic4PhoneSpinnerOptions();

    this.fuOptions.locks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.ORDER,
      LockOptions.REVERT,
      LockOptions.SHUFFLE
    ];

    this.fuOptions.unlocks = [
      LockOptions.DIFFERENT,
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.REVERT,
      LockOptions.SHUFFLE
    ];

    this.fuOptions.buttons = [
      ButtonOptions.ALLOW_RANDOM_COLORS,
      ButtonOptions.ALLOW_RANDOM_ICONS,
      ButtonOptions.CHANGE_AFTER_UNLOCK_ALL,
      ButtonOptions.CHANGE_AFTER_LOCK,
      ButtonOptions.CHANGE_AFTER_RESTART,
      ButtonOptions.CHANGE_AFTER_SHUFFLE,
      ButtonOptions.CHANGE_AFTER_UNLOCK,
      ButtonOptions.CHANGE_CONTINUOUSLY,
      ButtonOptions.UPDATE_COLOR,
      ButtonOptions.UPDATE_FILL,
      ButtonOptions.UPDATE_ICON,
      ButtonOptions.UPDATE_POSITION,
      ButtonOptions.UPDATE_SIZE,
      ButtonOptions.UPDATE_TEXT
    ];

    this.fuOptions.shufflesPerClick = 20;
    this.fuOptions.shuffleMilliseconds = 150;

    this.resetValue();
  }

  resetValue():void {
    this.value = '';
    for (let i = 0; i < 10; i++) {
      this.value += Math.round(Math.random() * 9);
    }
  }

  submit():void {
    alert(this.value);
  }

  change(value:string):void {
    this.value = value;
  }
}

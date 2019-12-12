import {Component} from '@angular/core';

import {Ionic4PhoneSpinnerOptions, LockOptions} from '@flubs/ionic4-phone-spinner';

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

import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {Digit} from '../models/digit.model';
import {LockOptions} from '../models/lock-options.model';
import {Ionic4PhoneSpinnerOptions} from '../models/ionic4-phone-spinner.model';

import {Ionic4ModalComponentController} from '../ionic4-modal/ionic4-modal.component.controller';

@Component({
  selector:    'ionic4-phone-spinner',
  templateUrl: './ionic4-phone-spinner.component.html',
  styleUrls: [
    './ionic4-phone-spinner.component.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Ionic4PhoneSpinnerComponent),
      multi: true
    }
  ]
})
export class Ionic4PhoneSpinnerComponent implements ControlValueAccessor {
  public fullNumber:string = '0000000000';
  public numbers:Digit[] = [];

  public disabled:boolean = false;
  public isRandomizing:boolean = false;

  private _onTouched:() => void;
  private _propagateChange:any = () => {};

  @Input() options:Ionic4PhoneSpinnerOptions = new Ionic4PhoneSpinnerOptions();

  @Input()
  set number(digits:string) {
    const candidates = digits.split('');

    for (let i = 0; i < 10; i++) {
      const digit = new Digit();
      if (typeof candidates[i] !== 'undefined') {
        digit.value = parseInt(candidates[i], 10);
      }

      this.numbers.push(digit);
    }
  }

  @Output() change:EventEmitter<string>;

  constructor(
    private modal:Ionic4ModalComponentController
  ) {
    this.change = new EventEmitter<string>();
  }

  writeValue(value:string):void {
    this.fullNumber = value || '0000000000';
  }

  registerOnChange(fn:any):void {
    this._propagateChange = fn;
  }

  registerOnTouched(fn:any):void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled:boolean):void {
    this.disabled = isDisabled;
  }

  toggleLock(i:number):void {
    // this.modal.confirm('Yes?').then(
    //   (response) => {
    //     if (response) {
          this.updateLock(i);
        // }
      // }
    // );
  }

  updateLock(i:number):void {
    let canChange = true;
    if (i !== 0) {
      if (this.options.locks.indexOf(LockOptions.ORDER) !== -1) {
        if (i !== 0) {
          if (this.numbers[i - 1].isLocked === false) {
            canChange = false;
          }
        }
      }

      if (this.options.unlocks.indexOf(LockOptions.ORDER) !== -1) {
        if (i !== 0) {
          if (this.numbers[i - 1].isLocked === true) {
            canChange = false;
          }
        }
      }
      if (this.options.locks.indexOf(LockOptions.REVERSE) !== -1) {
        if (i + 1 < this.numbers.length) {
          if (this.numbers[i + 1].isLocked === false) {
            canChange = false;
          }
        }
      }

      if (this.options.unlocks.indexOf(LockOptions.REVERSE) !== -1) {
        if (i + 1 < this.numbers.length) {
          if (this.numbers[i + 1].isLocked === true) {
            canChange = false;
          }
        }
      }
    }

    if (this.options.unlocks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
      canChange = false;
    }

    if (this.options.locks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
      canChange = false;
    }

    if (canChange) {
      if (this.numbers[i].isLocked === true && this.options.locks.indexOf(LockOptions.DIFFERENT) !== -1) {
        i = Math.round(Math.random() * 10);
      } else if (this.numbers[i].isLocked === false && this.options.unlocks.indexOf(LockOptions.DIFFERENT) !== -1) {
        i = Math.round(Math.random() * 10);
      }

      this.numbers[i].toggleIsLocked();

      if (this.numbers[i].isLocked) {
        if (this.options.unlocks.indexOf(LockOptions.RANDOM) !== -1) {
          setTimeout(
              () => {
                this.numbers[i].isLocked = false;
              },
              Math.random() * 1000 * 60
          );
        }
      } else {
        if (this.options.locks.indexOf(LockOptions.RANDOM) !== -1) {
          setTimeout(
              () => {
                this.numbers[i].isLocked = true;
              },
              Math.random() * 1000 * 60
          );
        }
      }

      this.numbers[i].isCorrectColor = this.getIsLiar(i);
      this.numbers[i].isCorrectIcon = this.getIsLiar(i);

      this._onChange();
    }
  }

  randomizeDigit(i:number, increment?:number):void {
    this.isRandomizing = true;

    this.numbers[i].randomize();

    if (typeof increment === 'undefined') {
      increment = this.options.shufflesPerClick;
      increment--;
    }

    if (increment !== 0) {
      increment--;

      setTimeout(
        () => {
          this.randomizeDigit(i, increment);
        },
        this.options.shuffleMilliseconds
      );
    } else {
      this.isRandomizing = false;

      const shuffleLock = this.options.locks.indexOf(LockOptions.SHUFFLE) !== -1;
      const shuffleUnlock = this.options.unlocks.indexOf(LockOptions.SHUFFLE) !== -1;
      if (shuffleLock || shuffleUnlock) {
        for (let j = 0; j < 10; j++) {
          if (this.numbers[j].isLocked === false && shuffleLock) {
            this.numbers[j].isLocked = true;
          }

          if (this.numbers[j].isLocked === true && shuffleUnlock) {
            this.numbers[j].isLocked = false;
          }

          this.numbers[j].isCorrectColor = this.getIsLiar(i);
          this.numbers[j].isCorrectIcon = this.getIsLiar(i);
        }
      }
    }
  }

  clearLocks():void {
    for (let i = 0; i < 10; i++) {
      this.numbers[i].isLocked = false;
      this.numbers[i].isCorrectColor = this.getIsLiar(i);
      this.numbers[i].isCorrectIcon = this.getIsLiar(i);
    }
  }

  getIsLiar(i:number):boolean {
    let showCorrectIcon = true;

    if (this.numbers[i].isLocked === true && this.options.locks.indexOf(LockOptions.LIAR) !== -1) {
      if (Math.random() < 0.25) {
        showCorrectIcon = !this.numbers[i].isLocked;
      }
    } else if (this.numbers[i].isLocked === false && this.options.unlocks.indexOf(LockOptions.LIAR) !== -1) {
      if (Math.random() < 0.25) {
        showCorrectIcon = !this.numbers[i].isLocked;
      }
    }

    return showCorrectIcon;
  }

  reset():void {
    this.clearLocks();
    this.randomize();
  }

  randomize():void {
    for (let i = 0; i < 10; i++) {
      if (this.numbers[i].isLocked === false) {
        this.randomizeDigit(i);
      }
    }
  }

  private _onChange():void {
    this.fullNumber = '';
    for (let i = 0; i < 10; i++) {
      this.fullNumber += '' + this.numbers[i].value;
    }

    this._propagateChange(this.fullNumber);
    this.change.emit(this.fullNumber);
  }
}

import {LockOptions} from './lock-options.model';

export class Ionic4PhoneSpinnerOptions {
  public locks:LockOptions[] = [];

  public unlocks:LockOptions[] = [];

  public shuffleMilliseconds = 200;
  public shufflesPerClick = 5;
}

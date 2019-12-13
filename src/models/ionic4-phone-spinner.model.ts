import {LockOptions} from './lock-options.model';
import {ButtonOptions} from './button-options.model';

export class Ionic4PhoneSpinnerOptions {
  public buttons:ButtonOptions[] = [];

  public locks:LockOptions[] = [];

  public unlocks:LockOptions[] = [];

  public shuffleMilliseconds = 200;
  public shufflesPerClick = 5;
}

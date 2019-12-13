import {ButtonOption} from './button-option.model';

export class ButtonOptions {
  public restart:ButtonOption = {
    color: 'danger',
    fill:  'solid',
    icon:  'nuclear',
    size:  4,
    text:  'Restart'
  };

  public shuffle:ButtonOption = {
    color: 'success',
    fill:  'solid',
    icon:  'shuffle',
    size:  4,
    text:  'Shuffle'
  };

  public unlock:ButtonOption = {
    color: 'warning',
    fill:  'solid',
    icon:  'key',
    size:  4,
    text:  'Unlock All'
  };
}

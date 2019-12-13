import {ButtonAttributes} from './button-attributes.model';

export class ButtonAttributesCollection {
  public restart:ButtonAttributes = {
    color: 'danger',
    fill:  'solid',
    icon:  'nuclear',
    push:  0,
    size:  4,
    text:  'Restart'
  };

  public shuffle:ButtonAttributes = {
    color: 'success',
    fill:  'solid',
    icon:  'shuffle',
    push:  0,
    size:  4,
    text:  'Shuffle'
  };

  public unlock:ButtonAttributes = {
    color: 'warning',
    fill:  'solid',
    icon:  'key',
    push:  0,
    size:  4,
    text:  'Unlock All'
  };
}

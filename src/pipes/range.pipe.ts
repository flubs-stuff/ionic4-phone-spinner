import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'range',
  pure: false
})
export class RangePipe implements PipeTransform {
  transform(items:any[], iterations:number, start?:number, end?:number):any {
    start = typeof start === 'number' ? start : 0;
    end = typeof end === 'number' ? end : iterations + start;

    items.length = 0;

    for (let i = start; i < end; i++) {
      items.push(i);
    }

    return items;
  }
}

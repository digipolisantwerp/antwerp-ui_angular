import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bytes',
  pure: true
})
export class BytesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value || isNaN(value)) {
      return '0B';
    }
    if (value > 1000 && value < 1000000) {
      return `${value / 1000}Kb`;
    } else if (value > 1000000) {
      return `${value / 1000000} Mb`;
    }
  }
}

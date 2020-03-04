import {Pipe, PipeTransform} from '@angular/core';

import {Label} from '../types/labels.types';

@Pipe({
  name: 'pluralizeLabel',
})
export class PluralizeLabelPipe implements PipeTransform {
  transform(label: Label | string, count: number): string {
    if (!label || typeof label === 'string') {
      return label as string;
    }

    return count === 1 ? label.singular : label.plural;
  }
}

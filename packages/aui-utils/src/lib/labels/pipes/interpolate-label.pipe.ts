import {Pipe, PipeTransform} from '@angular/core';

import {interpolate} from '../utils/interpolation';
import {ReplaceData} from '../types/labels.types';

@Pipe({
  name: 'interpolateLabel',
})
export class InterpolateLabelPipe implements PipeTransform {
  transform(label: string, replaceData: ReplaceData): string {
    if (!replaceData || !label) {
      return label;
    }

    return interpolate(label, replaceData);
  }
}

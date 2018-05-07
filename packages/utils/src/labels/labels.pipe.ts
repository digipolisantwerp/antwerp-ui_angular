import { Pipe, PipeTransform } from '@angular/core';

import { interpolate } from './labels.interpolation';
import { ReplaceData, Label } from './labels.types';

@Pipe({
    name: 'interpolateLabel'
})
export class InterpolateLabelPipe implements PipeTransform {
    transform(label: string, replaceData: ReplaceData): string {
        if (!replaceData || !label) {
            return label;
        }

        return interpolate(label, replaceData);
    }
}

@Pipe({
    name: 'pluralizeLabel'
})
export class PluralizeLabelPipe implements PipeTransform {
    transform(label: Label|string, count: number): string {
        if (!label || typeof label === 'string') {
            return label as string;
        }

        return count === 1 ? label.singular : label.plural;
    }
}

import { PipeTransform } from '@angular/core';
import { ReplaceData } from '../types/labels.types';
export declare class InterpolateLabelPipe implements PipeTransform {
    transform(label: string, replaceData: ReplaceData): string;
}

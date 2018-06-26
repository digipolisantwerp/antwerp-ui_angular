import { PipeTransform } from '@angular/core';
import { Label } from '../types/labels.types';
export declare class PluralizeLabelPipe implements PipeTransform {
    transform(label: Label | string, count: number): string;
}

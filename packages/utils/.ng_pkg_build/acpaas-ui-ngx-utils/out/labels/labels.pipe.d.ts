import { PipeTransform } from '@angular/core';
import { ReplaceData, Label } from './labels.types';
export declare class InterpolateLabelPipe implements PipeTransform {
    transform(label: string, replaceData: ReplaceData): string;
}
export declare class PluralizeLabelPipe implements PipeTransform {
    transform(label: Label | string, count: number): string;
}

import { PipeTransform } from '@angular/core';
export declare class MonthPipe implements PipeTransform {
    private monthLabels;
    constructor(monthLabels?: string[]);
    transform(value: any): string;
}

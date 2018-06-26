import { PipeTransform } from '@angular/core';
export declare class WeekdayPipe implements PipeTransform {
    private weekdayLabels;
    constructor(weekdayLabels?: string[]);
    transform(value: number): string;
}

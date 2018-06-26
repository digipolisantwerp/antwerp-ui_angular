import { ValidatorFn } from '@angular/forms';
export declare class TimePickerValidators {
    static minTime(time: string): ValidatorFn;
    static maxTime(time: string): ValidatorFn;
}

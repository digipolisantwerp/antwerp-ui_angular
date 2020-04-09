import {AbstractControl, ValidatorFn} from '@angular/forms';

export class TimePickerValidators {
  // time `hh:mm` 24h format
  public static minTime(time: string): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      const splittedControlValue = control.value.split(':');
      const controlHours = parseInt(splittedControlValue[0], 10);
      const controlMinutes = parseInt(splittedControlValue[1], 10);
      const splittedMinTime = time.split(':');
      const minHours = parseInt(splittedMinTime[0], 10);
      const minMinutes = parseInt(splittedMinTime[1], 10);

      // Don't throw error --> use Validator.required
      if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(minHours) || isNaN(minMinutes)) {
        return null;
      }

      if (minHours < controlHours) {
        return null;
      }

      if (minHours === controlHours && minMinutes <= controlMinutes) {
        return null;
      }

      return {minTime: {value: control.value}};
    };

    return validator;
  }

  // time `hh:mm` 24h format
  public static maxTime(time: string): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      const splittedControlValue = control.value.split(':');
      const controlHours = parseInt(splittedControlValue[0], 10);
      const controlMinutes = parseInt(splittedControlValue[1], 10);
      const splittedMinTime = time.split(':');
      const maxHours = parseInt(splittedMinTime[0], 10);
      const maxMinutes = parseInt(splittedMinTime[1], 10);

      // Don't throw error --> use Validator.required
      if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(maxHours) || isNaN(maxMinutes)) {
        return null;
      }

      if (maxHours > controlHours) {
        return null;
      }

      if (maxHours === controlHours && maxMinutes >= controlMinutes) {
        return null;
      }

      return {maxTime: {value: control.value}};
    };

    return validator;
  }
}

import { UntypedFormControl } from '@angular/forms';
import { TimePickerValidators } from './timepicker.validators';

describe('TimePickerValidators', () => {
  describe('minTime', () => {
    it('Should throw an error if selected value is less than the min value', () => {
      const control = new UntypedFormControl('10:20', [TimePickerValidators.minTime('10:30')]);
      expect(control.valid).toBeFalsy();
    });

    it('Should not throw an error if selected value is bigger than the min value', () => {
      const control1 = new UntypedFormControl('10:40', [TimePickerValidators.minTime('10:30')]);
      expect(control1.valid).toBeTruthy();

      const control2 = new UntypedFormControl('11:40', [TimePickerValidators.minTime('10:30')]);
      expect(control2.valid).toBeTruthy();
    });

    it('Should not throw an error if selected value is equal to min value', () => {
      const control = new UntypedFormControl('10:30', [TimePickerValidators.minTime('10:30')]);
      expect(control.valid).toBeTruthy();
    });

    it('Should not throw an error if selected value is empty', () => {
      const control = new UntypedFormControl('', [TimePickerValidators.minTime('10:30')]);
      expect(control.valid).toBeTruthy();
    });
  });

  describe('maxTime', () => {
    it('Should throw an error if selected value is bigger than the max value', () => {
      const control = new UntypedFormControl('10:40', [TimePickerValidators.maxTime('10:30')]);
      expect(control.valid).toBeFalsy();
    });

    it('Should not throw an error if selected value is less than the max value', () => {
      const control1 = new UntypedFormControl('10:20', [TimePickerValidators.maxTime('10:30')]);
      expect(control1.valid).toBeTruthy();

      const control2 = new UntypedFormControl('09:20', [TimePickerValidators.maxTime('10:30')]);
      expect(control2.valid).toBeTruthy();
    });

    it('Should not throw an error if selected value is equal to min value', () => {
      const control = new UntypedFormControl('10:30', [TimePickerValidators.maxTime('10:30')]);
      expect(control.valid).toBeTruthy();
    });

    it('Should not throw an error if selected value is empty', () => {
      const control = new UntypedFormControl('', [TimePickerValidators.maxTime('10:30')]);
      expect(control.valid).toBeTruthy();
    });
  });
});

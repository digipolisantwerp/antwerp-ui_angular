import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

import {TimepickerComponent} from './timepicker.component';

describe('The Timepicker Component', () => {
  let comp: TimepickerComponent;
  let fixture: ComponentFixture<TimepickerComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        TimepickerComponent,
      ],
      providers: [],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    comp.registerOnChange((model) => {
    });
  });

  describe('init', () => {
    it('should calc hours and minutes for fallback timepicker', () => {
      expect(comp.hours).toEqual(['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']); // tslint:disable-line:max-line-length
      expect(comp.minutes).toEqual(['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']); // tslint:disable-line:max-line-length
    });
  });

  describe('native timepicker', () => {
    it('should disable native form control', () => {
      comp.setDisabledState(true);
      expect(comp.timeControl.disabled).toBeTruthy();
    });

    it('should enable native form control', () => {
      comp.setDisabledState(false);
      expect(comp.timeControl.enabled).toBeTruthy();
    });

    it('should write value to native form control', () => {
      comp.writeValue('20:30');
      expect(comp.timeControl.value).toEqual('20:30');
    });
  });

  describe('fallback timepicker', () => {
    it('should disable fallback control', () => {
      comp.setDisabledState(true);
      expect(comp.fallbackForm.disabled).toBeTruthy();
    });

    it('should enable fallback control', () => {
      comp.setDisabledState(false);
      expect(comp.fallbackForm.enabled).toBeTruthy();
    });

    it('should write value to fallback control', () => {
      comp.writeValue('20:30');
      expect(comp.fallbackForm.value).toEqual({hours: '20', minutes: '30'});
    });

    it('should update model if value changes', () => {
      spyOn(comp, 'updateModel');
      comp.fallbackForm.get('hours').setValue('20');
      comp.fallbackForm.get('minutes').setValue('30');
      expect(comp.updateModel).toHaveBeenCalledWith('20:30');
    });
  });
});

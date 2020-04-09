import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DateRange} from '@acpaas-ui/js-date-utils';
import {CalendarModule} from '@acpaas-ui/ngx-calendar';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';
import {MaskModule} from '@acpaas-ui/ngx-forms';

import {DATEPICKER_DEFAULT_ERROR_LABELS, DATEPICKER_ERROR_LABELS} from '../../datepicker.conf';
import {DatepickerComponent} from './datepicker.component';

@Component({
  selector: 'aui-test-one',
  template: `
		<form #testForm='ngForm' (ngSubmit)='submit(testForm.value)'>
			<aui-datepicker
				id='test'
				name='test'
				placeholder='dd/mm/jjjj'
				autocomplete='off'
				[range]='range'
				[(ngModel)]='dateModel'
			></aui-datepicker>
		</form>
	`,
})
export class TestComponent {
  public range: DateRange;
  public dateModel: Date;

  submit(form) {
  }
}

@Component({
  selector: 'aui-test-two',
  template: `
		<form [formGroup]='testForm' (ngSubmit)='submit(testForm.value)'>
			<aui-datepicker
				id='test'
				name='test'
				placeholder='dd/mm/jjjj'
				autocomplete='off'
				[range]='range'
				formControlName='date'
			></aui-datepicker>
		</form>
	`,
})
export class ReactiveTestComponent implements OnInit {
  public range: DateRange;
  public dateModel: Date;
  public testForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.testForm = this.fb.group({
      date: '',
    });
  }

  submit(form) {
  }
}

describe('The Datepicker Component', () => {
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FlyoutModule,
        MaskModule,
        CalendarModule,
      ],
      declarations: [
        TestComponent,
        ReactiveTestComponent,
        DatepickerComponent,
      ],
      providers: [
        {provide: DATEPICKER_ERROR_LABELS, useValue: DATEPICKER_DEFAULT_ERROR_LABELS},
      ],
    })
      .compileComponents();
  }));

  describe('Template driven', () => {
    let comp: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let picker: DatepickerComponent;

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);

      comp = fixture.componentInstance;

      picker = fixture.debugElement.children[0].children[0].componentInstance;
    });

    it('should exist', () => {
      fixture.detectChanges();
      expect(picker).toBeDefined();
    });
  });

  describe('Reactive', () => {
    let comp: ReactiveTestComponent;
    let fixture: ComponentFixture<ReactiveTestComponent>;
    let picker: DatepickerComponent;

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(ReactiveTestComponent);

      comp = fixture.componentInstance;

      picker = fixture.debugElement.children[0].children[0].componentInstance;
      picker.ngOnInit();
    });

    describe('writeValue', () => {
      let accessor;

      beforeEach(() => {
        accessor = {
          update: () => {
          },
        };

        spyOn(accessor, 'update');

        picker.registerOnChange(accessor.update);
      });

      it('should update the model if the value is a valid date', () => {
        const date = new Date();

        picker.writeValue(date.toISOString());

        expect(accessor.update).toHaveBeenCalled();
      });
    });

    describe('selectDateFromCalendar', () => {
      beforeEach(() => {
        spyOn(picker.formControl, 'setValue').and.stub();
      });

      it('should update the values', () => {
        const date = new Date('2018-01-10');
        picker.selectDateFromCalendar({
          date,
          complete: true,
        });

        expect(picker.formControl.setValue).toHaveBeenCalledWith('10/01/2018');
      });
    });

    describe('validate', () => {
      it('should return null if the control has no value', () => {
        const ctrl = new FormControl();

        expect(picker.validate(ctrl)).toEqual(null);
      });

      it('should return the invalid date error if the date is invalid', () => {
        const ctrl = new FormControl(false);

        expect(picker.validate(ctrl)).toEqual({
          format: DATEPICKER_DEFAULT_ERROR_LABELS.ERRORS_INVALID_DATE,
        });
      });

      it('should return null if the date is valid and no range was set', () => {
        const ctrl = new FormControl(new Date());

        expect(picker.validate(ctrl)).toEqual(null);
      });

      it('should return null if the date is valid and outside of the set range', () => {
        spyOn(picker.calendarService, 'getRangeForDate').and.callFake(() => []);
        picker.range = [1];

        const ctrl = new FormControl((new Date()).toISOString());

        expect(picker.validate(ctrl)).toEqual(null);
      });

      it('should return the invalid range error if the date was valid and in the set range', () => {
        const range = [(new Date()).getDate()];
        spyOn(picker.calendarService, 'getRangeForDate').and.callFake(() => range);
        picker.range = range;

        const ctrl = new FormControl((new Date()).toISOString());

        expect(picker.validate(ctrl)).toEqual({
          range: DATEPICKER_DEFAULT_ERROR_LABELS.ERRORS_INVALID_RANGE,
        });
      });
    });
  });
});

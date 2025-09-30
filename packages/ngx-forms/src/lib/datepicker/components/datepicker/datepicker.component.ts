import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DateHelper, DateRange } from '@acpaas-ui/ngx-utils';
import { FlyoutDirective } from '@acpaas-ui/ngx-flyout';
import {
  CALENDAR_DEFAULT_MONTH_LABELS,
  CALENDAR_DEFAULT_WEEKDAY_LABELS,
  CALENDAR_MONTH_LABELS,
  CALENDAR_WEEKDAY_LABELS,
  CalendarService,
  DatepickerResult,
  WeekdayLabelsConfig,
  MonthLabelsConfig,
} from '@acpaas-ui/ngx-calendar';

import {
  DATEPICKER_SEPARATOR_CHAR,
  DATEPICKER_DEFAULT_ERROR_LABELS,
  DATEPICKER_ERROR_LABELS,
} from '../../datepicker.conf';
import { DatepickerValidationErrors } from '../../types/datepicker.types';
import { Interval, IntervalBuilder } from '@acpaas-ui/ngx-utils';

@Component({
  selector: 'aui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent), // eslint-disable-line @angular-eslint/no-forward-ref
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerComponent), // eslint-disable-line @angular-eslint/no-forward-ref
      multi: true,
    },
  ],
})
export class DatepickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild(FlyoutDirective, { static: true }) flyout: FlyoutDirective;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder = 'dd/mm/yyyy';
  @Input() label: string;
  @Input() description: string;
  @Input() range: DateRange;
  @Input()
  min: Date | null;
  @Input()
  max: Date | null;
  @Input() autocomplete: 'off';
  @Input() weekdayLabels: WeekdayLabelsConfig;
  @Input() monthLabels: MonthLabelsConfig;
  @Input() ariaOpenDatepickerLabel = 'Open kalender';

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<Event>();

  public formControl: UntypedFormControl;
  public selectedDate: Date;
  public isDisabled = false;
  public interval: Interval.IInterval<Date>;

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(CALENDAR_MONTH_LABELS) private moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS,
    @Inject(CALENDAR_WEEKDAY_LABELS) private moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS,
    @Inject(DATEPICKER_ERROR_LABELS) private errorLabels = DATEPICKER_DEFAULT_ERROR_LABELS,
    public calendarService: CalendarService,
    private formBuilder: UntypedFormBuilder,
    private ref: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    this.monthLabels = this.monthLabels || this.moduleMonthLabels;
    this.createInterval();
    this.formControl = this.formBuilder.control({ value: '', disabled: this.isDisabled });
    this.formControl.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe((value) => {
      if (value) {
        const format = value.split(DATEPICKER_SEPARATOR_CHAR).reverse().join('-');
        const date = DateHelper.parseDate(format, 'yyyy-MM-dd');
        if (date) {
          this.selectedDate = date;
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          this.onChange(DateHelper.toUtcMidnightInBrussels(year, month, day));
        } else {
          // Change value with original value (and not null or '') so we can add an error in the validate function
          this.onChange(value);
        }
      } else {
        this.selectedDate = null;
        this.onChange('');
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.min || changes.max) {
      this.createInterval();
    }
  }

  public ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  private createInterval() {
    if (!this.min && !this.max) {
      return;
    }
    // Create an interval if min/max is filled in
    this.interval = IntervalBuilder.dateInterval(
      this.min ? new Date(this.min) : null,
      this.max ? new Date(this.max) : null,
    )
      .not()
      .build();
  }

  public writeValue(value: string | Date): void {
    this.selectedDate =
      typeof value === 'string'
        ? this.isISODateFormat(value)
          ? new Date(value)
          : DateHelper.parseDate(value, 'dd/MM/yyyy')
        : value;
    const dateString = this.selectedDate ? this.formatDate(this.selectedDate) : '';
    this.formControl.setValue(dateString);
  }

  public registerOnChange(onChange: (res: any) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: (_: any) => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;

    if (this.formControl) {
      if (isDisabled && this.formControl.enabled) {
        this.formControl.disable();
      } else if (!isDisabled && this.formControl.disabled) {
        this.formControl.enable();
      }
    }

    this.ref.markForCheck();
  }

  public selectDateFromCalendar(result: DatepickerResult): void {
    if (result.complete) {
      this.formControl.setValue(this.formatDate(result.date));
      this.flyout.close();
    }
  }

  public formatDate(date: Date): string {
    return DateHelper.formatDate(date, 'DD/MM/YYYY', {
      leadingZero: true,
      monthLabels: this.monthLabels,
      weekdayLabels: this.weekdayLabels,
    });
  }

  public validate(ctrl: UntypedFormControl): DatepickerValidationErrors {
    // no error on empty value (add required validator in app)
    if (ctrl.value === '' || ctrl.value === null) {
      return null;
    }

    // throw format error if no valid date was provided
    const date = DateHelper.parseDate(ctrl.value);
    if (!date) {
      return {
        format: this.errorLabels.ERRORS_INVALID_DATE,
      };
    }

    // no error if valid date an no range provided
    if (!this.range || !this.range.length) {
      return null;
    }

    // throw error when out of range
    const range = this.calendarService.getRangeForDate(date, this.range);

    return range.indexOf(date.getDate()) >= 0
      ? {
          range: this.errorLabels.ERRORS_INVALID_RANGE,
        }
      : null;
  }

  public handleBlur(e: Event): void {
    this.blur.emit(e);
    this.onTouched(e);
  }

  private onChange: (res: any) => void = () => undefined;

  private onTouched: (_: any) => void = () => undefined;

  private isISODateFormat(value: string) {
    if (typeof value !== 'string') {
      return false;
    }
    return value.match(/\d{4}-\d{2}-\d{2}T.*/);
  }
}

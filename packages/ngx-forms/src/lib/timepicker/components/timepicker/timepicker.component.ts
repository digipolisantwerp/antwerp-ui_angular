import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {DateHelper} from '@acpaas-ui/js-date-utils';

import {TimepickerInputSize} from '../../types/timepicker.types';

@Component({
  selector: 'aui-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: [
    './timepicker.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimepickerComponent), // tslint:disable-line:no-forward-ref
    multi: true,
  }],
})
export class TimepickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() public id = 'aui-timepicker-' + Math.random().toString(36).substring(2);
  @Input() public hoursPlaceholder = 'uu';
  @Input() public minutesPlaceholder = 'mm';
  @Input() public hasError = false;
  @Input() public size: TimepickerInputSize = TimepickerInputSize.Auto;
  @Input() public ariaLabelHours = 'Uur';
  @Input() public ariaLabelMinutes = 'Minuten';

  public shouldUseFallback = false;
  public minutes: string[] = [];
  public hours: string[] = [];
  public updateModel: (value: string) => any;

  public timeControl = new FormControl();
  public fallbackForm: FormGroup;

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
  }

  public ngOnInit() {
    this.shouldUseFallback = this.supportsNativeTimepicker();
    this.minutes = this.getMinutes();
    this.hours = this.getHours();

    this.fallbackForm = this.formBuilder.group({
      hours: null,
      minutes: null,
    });

    this.fallbackForm.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((formData) => {
        if (formData.hours && formData.minutes) {
          this.updateModel(`${formData.hours}:${formData.minutes}`);
        } else {
          this.updateModel('');
        }
      });

    this.timeControl.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((time) => {
        this.updateModel(time);
      });
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public writeValue(value: any): void {
    this.timeControl.setValue(value, {emitEvent: false});

    if (value) {
      const splitted = value.split(':');
      this.fallbackForm.get('hours').setValue(splitted[0], {emitEvent: false});
      this.fallbackForm.get('minutes').setValue(splitted[1], {emitEvent: false});
    }
  }

  public registerOnChange(onChange): void {
    this.updateModel = onChange;
  }

  public registerOnTouched(): void {
  }

  public setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.timeControl.disable({emitEvent: false});
      this.fallbackForm.disable({emitEvent: false});
    } else {
      this.timeControl.enable({emitEvent: false});
      this.fallbackForm.enable({emitEvent: false});
    }
  }

  private supportsNativeTimepicker(): boolean {
    const element = this.renderer.createElement('input');
    element.type = 'time';

    return element.type === 'text';
  }

  private getMinutes(): string[] {
    return Array(60).fill('').map((value, index) => {
      return DateHelper.addLeadingZero(index);
    });
  }

  private getHours(): string[] {
    return Array(24).fill('').map((value, index) => {
      return DateHelper.addLeadingZero(index);
    });
  }
}

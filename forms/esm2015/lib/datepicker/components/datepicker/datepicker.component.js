/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Inject, forwardRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, } from '@angular/forms';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { FlyoutDirective } from '@acpaas-ui/ngx-components/flyout';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CalendarService, } from '@acpaas-ui/ngx-components/calendar';
import { DATEPICKER_ERROR_LABELS, DATEPICKER_DEFAULT_ERROR_LABELS, DATEPICKER_SEPARATOR_CHAR, DATEPICKER_DATE_MASK } from '../../datepicker.conf';
export class DatepickerComponent {
    /**
     * @param {?=} monthLabels
     * @param {?=} weekdayLabels
     * @param {?=} errorLabels
     * @param {?=} calendarService
     * @param {?=} formBuilder
     */
    constructor(monthLabels = CALENDAR_DEFAULT_MONTH_LABELS, weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS, errorLabels = DATEPICKER_DEFAULT_ERROR_LABELS, calendarService, formBuilder) {
        this.monthLabels = monthLabels;
        this.weekdayLabels = weekdayLabels;
        this.errorLabels = errorLabels;
        this.calendarService = calendarService;
        this.formBuilder = formBuilder;
        this.placeholder = 'dd/mm/yyyy';
        this.dateMask = { mask: DATEPICKER_DATE_MASK, 'showMaskOnHover': false };
        this.componentDestroyed$ = new Subject();
        this.onChange = () => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formControl = this.formBuilder.control('');
        this.formControl.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((value) => {
            if (value) {
                const /** @type {?} */ format = value.split(DATEPICKER_SEPARATOR_CHAR).reverse().join('-');
                const /** @type {?} */ date = DateHelper.parseDate(format);
                if (date) {
                    this.selectedDate = date;
                    this.onChange(date.toISOString());
                }
                else {
                    // Change value with original value (and not null or '') so we can add an error in the validate function
                    this.onChange(value);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        const /** @type {?} */ date = DateHelper.parseDate(value);
        const /** @type {?} */ dateString = date ? this.formatDate(date) : '';
        this.selectedDate = date;
        this.formControl.setValue(dateString);
    }
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} result
     * @return {?}
     */
    selectDateFromCalendar(result) {
        if (result.complete) {
            this.formControl.setValue(this.formatDate(result.date));
            this.flyout.close();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    formatDate(date) {
        return DateHelper.formatDate(date, 'DD/MM/YYYY', {
            leadingZero: true,
            monthLabels: this.monthLabels,
            weekdayLabels: this.weekdayLabels,
        });
    }
    /**
     * @param {?} ctrl
     * @return {?}
     */
    validate(ctrl) {
        // no error on empty value (add required validator in app)
        if (ctrl.value === '' || ctrl.value === null) {
            return null;
        }
        // throw format error if no valid date was provided
        if (!DateHelper.parseDate(ctrl.value)) {
            return {
                format: this.errorLabels.ERRORS_INVALID_DATE,
            };
        }
        // no error if valid date an no range provided
        if (!this.range || !this.range.length) {
            return null;
        }
        // throw error when out of range
        const /** @type {?} */ date = new Date(ctrl.value);
        const /** @type {?} */ range = this.calendarService.getRangeForDate(date, this.range);
        return range.indexOf(date.getDate()) >= 0 ? {
            range: this.errorLabels.ERRORS_INVALID_RANGE,
        } : null;
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-datepicker',
                template: `<div class="aui-datepicker a-input__wrapper" auiFlyout>
	<input
		type="text"
		name="{{ name }}"
		id="{{ id }}"
		placeholder="{{ placeholder }}"
		[autocomplete]="autocomplete"
		[formControl]="formControl"
		[auiMask]="dateMask"
	>
   <span class="fa fa-calendar is-clickable" auiFlyoutAction></span>

	<div role="datepicker" class="m-datepicker m-datepicker--fixed" auiFlyoutZone>
		<aui-calendar [selectedDate]="selectedDate" [range]="range" (selectDate)="selectDateFromCalendar($event)"></aui-calendar>
	</div>
</div>
`,
                styles: [`.aui-datepicker,aui-datepicker{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatepickerComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DatepickerComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }],
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DATEPICKER_ERROR_LABELS,] }] },
    { type: CalendarService },
    { type: FormBuilder }
];
DatepickerComponent.propDecorators = {
    flyout: [{ type: ViewChild, args: [FlyoutDirective,] }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    range: [{ type: Input }],
    autocomplete: [{ type: Input }]
};
function DatepickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DatepickerComponent.prototype.flyout;
    /** @type {?} */
    DatepickerComponent.prototype.id;
    /** @type {?} */
    DatepickerComponent.prototype.name;
    /** @type {?} */
    DatepickerComponent.prototype.placeholder;
    /** @type {?} */
    DatepickerComponent.prototype.range;
    /** @type {?} */
    DatepickerComponent.prototype.autocomplete;
    /** @type {?} */
    DatepickerComponent.prototype.dateMask;
    /** @type {?} */
    DatepickerComponent.prototype.formControl;
    /** @type {?} */
    DatepickerComponent.prototype.selectedDate;
    /** @type {?} */
    DatepickerComponent.prototype.componentDestroyed$;
    /** @type {?} */
    DatepickerComponent.prototype.onChange;
    /** @type {?} */
    DatepickerComponent.prototype.monthLabels;
    /** @type {?} */
    DatepickerComponent.prototype.weekdayLabels;
    /** @type {?} */
    DatepickerComponent.prototype.errorLabels;
    /** @type {?} */
    DatepickerComponent.prototype.calendarService;
    /** @type {?} */
    DatepickerComponent.prototype.formBuilder;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9kYXRlcGlja2VyL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFHTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFdBQVcsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHbkUsT0FBTyxFQUNOLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsdUJBQXVCLEVBQ3ZCLCtCQUErQixFQUUvQixlQUFlLEdBQ2YsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLCtCQUErQixFQUMvQix5QkFBeUIsRUFDekIsb0JBQW9CLEVBQ3BCLE1BQU0sdUJBQXVCLENBQUM7QUFrQy9CLE1BQU07Ozs7Ozs7O0lBZUwsWUFDd0MsY0FBYyw2QkFBNkIsRUFDekMsZ0JBQWdCLCtCQUErQixFQUMvQyxjQUFjLCtCQUErQixFQUM5RSxpQkFDQTtRQUorQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0M7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQWtDO1FBQy9DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQztRQUM5RSxvQkFBZSxHQUFmLGVBQWU7UUFDZixnQkFBVyxHQUFYLFdB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Q2xELEtBQUssRUFBRSxJQUFJO3FCQUNYLENBQUM7YUFDRjs7Ozs0Q0FpQkUsTUFBTSxTQUFDLHFCQUFxQjs0Q0FDNUIsTUFBTSxTQUFDLHVCQUF1Qjs0Q0FDOUIsTUFBTSxTQUFDLHVCQUF1QjtZQTVEaEMsZUFBZTtZQWRmLFdBQVc7OztxQkF5RFYsU0FBUyxTQUFDLGVBQWU7aUJBQ3pCLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG5cdEZvcm1Db250cm9sLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TkdfVkFMSURBVE9SUyxcblx0Rm9ybUJ1aWxkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciwgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5cbmltcG9ydCB7XG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHREYXRlcGlja2VyUmVzdWx0LFxuXHRDYWxlbmRhclNlcnZpY2UsXG59IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY2FsZW5kYXInO1xuXG5pbXBvcnQge1xuXHREQVRFUElDS0VSX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9ERUZBVUxUX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9TRVBBUkFUT1JfQ0hBUixcblx0REFURVBJQ0tFUl9EQVRFX01BU0tcbn0gZnJvbSAnLi4vLi4vZGF0ZXBpY2tlci5jb25mJztcbmltcG9ydCB7IERhdGVwaWNrZXJWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0ZXBpY2tlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1kYXRlcGlja2VyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWRhdGVwaWNrZXIgYS1pbnB1dF9fd3JhcHBlclwiIGF1aUZseW91dD5cblx0PGlucHV0XG5cdFx0dHlwZT1cInRleHRcIlxuXHRcdG5hbWU9XCJ7eyBuYW1lIH19XCJcblx0XHRpZD1cInt7IGlkIH19XCJcblx0XHRwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcblx0XHRbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG5cdFx0W2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcblx0XHRbYXVpTWFza109XCJkYXRlTWFza1wiXG5cdD5cbiAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXIgaXMtY2xpY2thYmxlXCIgYXVpRmx5b3V0QWN0aW9uPjwvc3Bhbj5cblxuXHQ8ZGl2IHJvbGU9XCJkYXRlcGlja2VyXCIgY2xhc3M9XCJtLWRhdGVwaWNrZXIgbS1kYXRlcGlja2VyLS1maXhlZFwiIGF1aUZseW91dFpvbmU+XG5cdFx0PGF1aS1jYWxlbmRhciBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiIFtyYW5nZV09XCJyYW5nZVwiIChzZWxlY3REYXRlKT1cInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoJGV2ZW50KVwiPjwvYXVpLWNhbGVuZGFyPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5hdWktZGF0ZXBpY2tlcixhdWktZGF0ZXBpY2tlcntkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH0sIHtcblx0XHRwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QFZpZXdDaGlsZChGbHlvdXREaXJlY3RpdmUpIGZseW91dDogRmx5b3V0RGlyZWN0aXZlO1xuXHRASW5wdXQoKSBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ2RkL21tL3l5eXknO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvZmYnO1xuXG5cdHB1YmxpYyBkYXRlTWFzayA9IHsgbWFzazogREFURVBJQ0tFUl9EQVRFX01BU0ssICdzaG93TWFza09uSG92ZXInOiBmYWxzZSB9O1xuXHRwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cdHByaXZhdGUgb25DaGFuZ2U6IChyZXM6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHJpdmF0ZSBtb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgd2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0QEluamVjdChEQVRFUElDS0VSX0VSUk9SX0xBQkVMUykgcHJpdmF0ZSBlcnJvckxhYmVscyA9IERBVEVQSUNLRVJfREVGQVVMVF9FUlJPUl9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woJycpO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHZhbHVlLnNwbGl0KERBVEVQSUNLRVJfU0VQQVJBVE9SX0NIQVIpLnJldmVyc2UoKS5qb2luKCctJyk7XG5cdFx0XHRcdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKGZvcm1hdCk7XG5cdFx0XHRcdFx0aWYgKGRhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoZGF0ZS50b0lTT1N0cmluZygpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQ2hhbmdlIHZhbHVlIHdpdGggb3JpZ2luYWwgdmFsdWUgKGFuZCBub3QgbnVsbCBvciAnJykgc28gd2UgY2FuIGFkZCBhbiBlcnJvciBpbiB0aGUgdmFsaWRhdGUgZnVuY3Rpb25cblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKHZhbHVlKTtcblx0XHRjb25zdCBkYXRlU3RyaW5nID0gZGF0ZSA/IHRoaXMuZm9ybWF0RGF0ZShkYXRlKSA6ICcnO1xuXG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVN0cmluZyk7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogKHJlczogYW55KSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQgeyB9XG5cblx0cHVibGljIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIocmVzdWx0OiBEYXRlcGlja2VyUmVzdWx0KTogdm9pZCB7XG5cdFx0aWYgKHJlc3VsdC5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1hdERhdGUocmVzdWx0LmRhdGUpKTtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXRlLCAnREQvTU0vWVlZWScsIHtcblx0XHRcdGxlYWRpbmdaZXJvOiB0cnVlLFxuXHRcdFx0bW9udGhMYWJlbHM6IHRoaXMubW9udGhMYWJlbHMsXG5cdFx0XHR3ZWVrZGF5TGFiZWxzOiB0aGlzLndlZWtkYXlMYWJlbHMsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGUoY3RybDogRm9ybUNvbnRyb2wpOiBEYXRlcGlja2VyVmFsaWRhdGlvbkVycm9ycyB7XG5cdFx0Ly8gbm8gZXJyb3Igb24gZW1wdHkgdmFsdWUgKGFkZCByZXF1aXJlZCB2YWxpZGF0b3IgaW4gYXBwKVxuXHRcdGlmIChjdHJsLnZhbHVlID09PSAnJyB8fCBjdHJsLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyB0aHJvdyBmb3JtYXQgZXJyb3IgaWYgbm8gdmFsaWQgZGF0ZSB3YXMgcHJvdmlkZWRcblx0XHRpZiAoIURhdGVIZWxwZXIucGFyc2VEYXRlKGN0cmwudmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmb3JtYXQ6IHRoaXMuZXJyb3JMYWJlbHMuRVJST1JTX0lOVkFMSURfREFURSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gbm8gZXJyb3IgaWYgdmFsaWQgZGF0ZSBhbiBubyByYW5nZSBwcm92aWRlZFxuXHRcdGlmICghdGhpcy5yYW5nZSB8fCAhdGhpcy5yYW5nZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIHRocm93IGVycm9yIHdoZW4gb3V0IG9mIHJhbmdlXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN0cmwudmFsdWUpO1xuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0cmV0dXJuIHJhbmdlLmluZGV4T2YoZGF0ZS5nZXREYXRlKCkpID49IDAgPyB7XG5cdFx0XHRyYW5nZTogdGhpcy5lcnJvckxhYmVscy5FUlJPUlNfSU5WQUxJRF9SQU5HRSxcblx0XHR9IDogbnVsbDtcblx0fVxufVxuIl19
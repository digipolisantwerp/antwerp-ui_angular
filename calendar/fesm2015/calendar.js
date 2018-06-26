import { Injectable, InjectionToken, Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy, Pipe, NgModule } from '@angular/core';
import { DateGenerator, DateHelper } from '@acpaas-ui/js-date-utils';
import { get, chunk } from 'lodash-es';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
const /** @type {?} */ CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
const /** @type {?} */ CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarService {
    constructor() {
        this.months = {};
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    getMonth(month, year) {
        if (year) {
            if (this.currentYear !== year) {
                this.months = {};
            }
            this.currentYear = year;
        }
        if (this.months.hasOwnProperty(month)) {
            return [...this.months[month]];
        }
        const /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        const /** @type {?} */ generatedMonth = DateGenerator.generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return [...generatedMonth];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonthForDate(date) {
        return this.getMonth(date.getMonth(), date.getFullYear());
    }
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    getRangeForDate(date, range) {
        return DateGenerator.generateRange(date, range, { startOfWeek: 1 });
    }
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    getRangesForDate(date, range) {
        const /** @type {?} */ rangeOptions = { startOfWeek: 1 };
        const /** @type {?} */ before = DateHelper.updateMonth(date, date.getMonth() - 1);
        const /** @type {?} */ after = DateHelper.updateMonth(date, date.getMonth() + 1);
        return {
            before: DateGenerator.generateRange(before, range, rangeOptions),
            current: DateGenerator.generateRange(date, range, rangeOptions),
            after: DateGenerator.generateRange(after, range, rangeOptions),
        };
    }
    /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    getClosestDateForRange(date = new Date(), range) {
        const /** @type {?} */ dateRange = this.getRangeForDate(date, range);
        if (DateHelper.dateOutOfRange(date, dateRange)) {
            return date;
        }
        return DateHelper.closestDateForRange(date, dateRange);
    }
}
CalendarService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ CALENDAR_DEFAULT_WEEKDAY_LABELS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];
const /** @type {?} */ CALENDAR_DEFAULT_MONTH_LABELS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const /** @type {?} */ CALENDAR_WEEKDAY_LABELS = new InjectionToken('weekdayLabels');
const /** @type {?} */ CALENDAR_MONTH_LABELS = new InjectionToken('monthLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarComponent {
    /**
     * @param {?=} moduleMonthLabels
     * @param {?=} moduleWeekdayLabels
     * @param {?=} calendarService
     */
    constructor(moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS, moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS, calendarService) {
        this.moduleMonthLabels = moduleMonthLabels;
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.selectDate = new EventEmitter();
        this.CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
        this.CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
        this.CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
        this.activeView = CALENDAR_VIEW_MONTH;
        this.headerLabel = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
        this.monthLabels = this.monthLabels || this.moduleMonthLabels;
        this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
        this.updateHeaderLabel();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ selectedDate = changes["selectedDate"] && changes["selectedDate"].currentValue ? changes["selectedDate"] : null;
        if (typeof this.monthLabels !== 'undefined' &&
            selectedDate &&
            !DateHelper.datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)) {
            this.activeDate = this.selectedDate;
            this.updateHeaderLabel();
        }
    }
    /**
     * @param {?=} factor
     * @return {?}
     */
    updateActiveDate(factor = 0) {
        if (factor === 0) {
            return;
        }
        const /** @type {?} */ activeDate = this.activeDate ? new Date(this.activeDate) : new Date();
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                activeDate.setMonth(activeDate.getMonth() + factor);
                break;
            case CALENDAR_VIEW_YEAR:
                activeDate.setFullYear(activeDate.getFullYear() + factor);
                break;
            case CALENDAR_VIEW_DECENNIA:
                activeDate.setFullYear(activeDate.getFullYear() + (12 * factor));
                break;
        }
        this.activeDate = activeDate;
        this.updateHeaderLabel();
    }
    /**
     * @param {?=} factor
     * @return {?}
     */
    switchView(factor = 1) {
        const /** @type {?} */ views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];
        const /** @type {?} */ currView = views.indexOf(this.activeView);
        let /** @type {?} */ nextView = (currView + factor) >= views.length ? 0 : currView + factor;
        nextView = nextView < 0 ? views.length - 1 : nextView;
        this.activeView = views[nextView];
        // reset activeDate when returning to month view without model update
        if (this.selectedDate && nextView === 0 && factor === 1) {
            this.activeDate = this.selectedDate;
        }
        this.updateHeaderLabel();
    }
    /**
     * @return {?}
     */
    updateHeaderLabel() {
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
                break;
            case CALENDAR_VIEW_YEAR:
                this.headerLabel = String(this.activeDate.getFullYear());
                break;
            case CALENDAR_VIEW_DECENNIA:
                const /** @type {?} */ startYear = this.activeDate.getFullYear();
                this.headerLabel = `${startYear} - ${startYear + 11}`;
                break;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    pickDate(date) {
        const /** @type {?} */ complete = this.activeView === CALENDAR_VIEW_MONTH;
        this.selectDate.emit({
            date: date,
            complete: complete,
        });
        if (!complete) {
            this.switchView(-1);
        }
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar',
                template: `<div class="m-datepicker__nav">
    <button tabindex="-1" type="button" aria-label="vorige maand" class="a-button has-icon" (click)="updateActiveDate(-1)">
        <i class="fa fa-angle-left"></i>
    </button>

    <button tabindex="0" type="button" class="m-datepicker__title a-button" (click)="switchView()">
        {{ headerLabel | titlecase }}
    </button>

    <button tabindex="0" type="button" aria-label="volgende maand" class="a-button has-icon" (click)="updateActiveDate(1)">
        <i class="fa fa-angle-right"></i>
    </button>
</div>

<aui-calendar-month
    *ngIf="activeView === CALENDAR_VIEW_MONTH"
    [selectedDate]="selectedDate"
    [activeDate]="activeDate"
    [range]="range"
    [weekdayLabels]="weekdayLabels"
    (selectDate)="pickDate($event)"
></aui-calendar-month>
<aui-calendar-year
    *ngIf="activeView === CALENDAR_VIEW_YEAR"
    [selectedDate]="selectedDate"
    [activeDate]="activeDate"
    [monthLabels]="monthLabels"
    (selectDate)="pickDate($event)"
></aui-calendar-year>
<aui-calendar-decennia
    *ngIf="activeView === CALENDAR_VIEW_DECENNIA"
    [selectedDate]="selectedDate"
    [activeDate]="activeDate"
    (selectDate)="pickDate($event)"
></aui-calendar-decennia>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
    { type: CalendarService }
];
CalendarComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    range: [{ type: Input }],
    weekdayLabels: [{ type: Input }],
    monthLabels: [{ type: Input }],
    selectDate: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarDecenniaComponent {
    constructor() {
        this.selectDate = new EventEmitter();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        const /** @type {?} */ previousValue = get(changes, 'activeDate.previousValue');
        const /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        const /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        const /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    }
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    pickDate(event, date) {
        event.stopPropagation();
        const /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    }
    /**
     * @return {?}
     */
    updateYears() {
        const /** @type {?} */ years = [];
        const /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (let /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = chunk(years, 4);
    }
}
CalendarDecenniaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-decennia',
                template: `<table>
    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let group of years">
            <td *ngFor="let year of group">
                <button tabindex="0" type="button" [ngClass]="{
                    'is-current': year === current,
                    'is-selected': year === selectedYear
                }" (click)="pickDate($event, year)">
                    {{ year }}
                </button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
CalendarDecenniaComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    selectDate: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarMonthComponent {
    /**
     * @param {?=} moduleWeekdayLabels
     * @param {?=} calendarService
     */
    constructor(moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS, calendarService) {
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
        this.selectDate = new EventEmitter();
        this.dates = [];
        this.selectedDay = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ selectedDateChanged = this.hasChanged(changes, 'selectedDate');
        const /** @type {?} */ activeDateChanged = this.hasChanged(changes, 'activeDate');
        const /** @type {?} */ monthChanged = activeDateChanged && !DateHelper.datesAreEqual([
            changes["activeDate"].currentValue,
            changes["activeDate"].previousValue,
        ], 'M');
        const /** @type {?} */ selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();
        this.current = this.getCurrentDate();
        this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;
        let /** @type {?} */ newDates = [];
        if (selectedDateChanged) {
            newDates = this.calendarService.getMonthForDate(this.selectedDate);
        }
        else if (activeDateChanged && monthChanged) {
            newDates = this.calendarService.getMonthForDate(this.activeDate);
        }
        else {
            return;
        }
        const /** @type {?} */ range = this.calendarService.getRangesForDate(this.activeDate, this.range);
        this.dates = newDates.map(week => week.map(day => (Object.assign({}, day, { available: this.dayIsAvailable(day, range) }))));
    }
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    pickDate(event, day) {
        event.stopPropagation(); // Stop propagation so the modal doesn't close
        let /** @type {?} */ selectedDate = new Date(this.activeDate);
        if (day.padding) {
            const /** @type {?} */ month = day.date > 20 ? -1 : 1;
            selectedDate = DateHelper.updateMonth(selectedDate, selectedDate.getMonth() + month);
        }
        this.selectDate.emit(DateHelper.updateDate(selectedDate, day.date));
    }
    /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    hasChanged(changes, prop) {
        const /** @type {?} */ current = get(changes, `${prop}.currentValue`);
        const /** @type {?} */ previous = get(changes, `${prop}.previousValue`);
        const /** @type {?} */ currentValue = current instanceof Date ? current.valueOf() : 0;
        const /** @type {?} */ previousValue = previous instanceof Date ? previous.valueOf() : 0;
        return !!currentValue && currentValue !== previousValue;
    }
    /**
     * @return {?}
     */
    getCurrentDate() {
        const /** @type {?} */ current = new Date();
        const /** @type {?} */ monthHasChanged = !DateHelper.datesAreEqual([this.activeDate, current], ['M', 'Y']);
        return monthHasChanged ? -1 : current.getDate();
    }
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    dayIsAvailable(day, range) {
        let /** @type {?} */ dateRange = range.current;
        if (day.padding) {
            dateRange = day.date > 20 ? range.before : range.after;
        }
        return dateRange.indexOf(day.date) < 0;
    }
}
CalendarMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-month',
                template: `<table>
    <thead>
        <tr class="m-datepicker__days">
            <th *ngFor="let day of weekdayLabels" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>
        </tr>
    </thead>

    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let week of dates">
            <td *ngFor="let day of week">
                <button
                    tabindex="0"
                    type="button"
                    [ngClass]="{
                        'is-faded': !day.date || day.padding,
                        'is-selected': !day.padding && day.date === selectedDay,
                        'is-current': !day.padding && day.date === current
                    }"
                    (click)="pickDate($event, day)"
                    [disabled]="!day.available"
                >{{ day.date }}</button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CalendarMonthComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
    { type: CalendarService }
];
CalendarMonthComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    range: [{ type: Input }],
    weekdayLabels: [{ type: Input }],
    selectDate: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarYearComponent {
    /**
     * @param {?=} moduleMonthLabels
     */
    constructor(moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS) {
        this.moduleMonthLabels = moduleMonthLabels;
        this.monthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
        this.selectDate = new EventEmitter();
        this.selectedMonth = -1;
        this.current = '';
        this.months = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        const /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        const /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        const /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = chunk(this.monthLabels, 4);
        }
    }
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    pickDate(event, date) {
        event.stopPropagation();
        let /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    }
}
CalendarYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-year',
                template: `<table>
    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let group of months">
            <td *ngFor="let month of group">
                <button tabindex="0" type="button" [ngClass]="{
                    'is-current': month === current,
                    'is-selected': month === monthLabels[selectedMonth]
                }" (click)="pickDate($event, month)">
                    {{ month | titlecase }}
                </button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CalendarYearComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] }
];
CalendarYearComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    monthLabels: [{ type: Input }],
    selectDate: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Services = [
    CalendarService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Helper method to transform a single word to titlecase.
 *
 * \@stable
 * @param {?} word
 * @return {?}
 */
function titleCaseWord(word) {
    if (!word) {
        return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
/**
 * Transforms text to titlecase.
 *
 * \@stable
 */
class TitleCasePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (!value || typeof value !== 'string') {
            return value;
        }
        return value.split(/\s/g).map(word => titleCaseWord(word)).join(' ');
    }
}
TitleCasePipe.decorators = [
    { type: Pipe, args: [{ name: 'titlecase' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pipes = [
    TitleCasePipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
class CalendarModule {
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    static forChild(weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    }
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    Components,
                    Pipes,
                ],
                exports: [
                    Components,
                    Pipes,
                ],
                providers: [
                    Services,
                    { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                    { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CALENDAR_VIEW_DECENNIA, CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CalendarService, CalendarComponent, CalendarMonthComponent, CalendarYearComponent, CalendarDecenniaComponent, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CalendarModule, TitleCasePipe, Components as ɵa, Pipes as ɵb, Services as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci90eXBlcy9jYWxlbmRhci50eXBlcy50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5jb25mLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jb21wb25lbnRzL2RlY2VubmlhL2RlY2VubmlhLmNvbXBvbmVudC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy95ZWFyL3llYXIuY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvaW5kZXgudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfTU9OVEggPSAnQ0FMRU5EQVJfVklFV19NT05USCc7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ZRUFSID0gJ0NBTEVOREFSX1ZJRVdfWUVBUic7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ERUNFTk5JQSA9ICdDQUxFTkRBUl9WSUVXX0RFQ0VOTklBJztcblxuZXhwb3J0IHR5cGUgV2Vla2RheUxhYmVsc0NvbmZpZyA9IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgTW9udGhMYWJlbHNDb25maWcgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyUmVzdWx0IHtcblx0ZGF0ZTogRGF0ZTtcblx0Y29tcGxldGU6IEJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlTWFwIHtcblx0YmVmb3JlOiBudW1iZXJbXTtcblx0Y3VycmVudDogbnVtYmVyW107XG5cdGFmdGVyOiBudW1iZXJbXTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IERhdGVHZW5lcmF0b3IsIERhdGVIZWxwZXIsIERheSwgTW9udGgsIERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IERhdGVSYW5nZU1hcCB9IGZyb20gJy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb250aE1hcCB7XG5cdFtrZXk6IG51bWJlcl06IE1vbnRoO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcblx0cHVibGljIG1vbnRoczogTW9udGhNYXAgPSB7fTtcblx0cHJpdmF0ZSBjdXJyZW50WWVhcjogbnVtYmVyO1xuXG5cdGdldE1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBNb250aCB7XG5cdFx0aWYgKHllYXIpIHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRZZWFyICE9PSB5ZWFyKSB7XG5cdFx0XHRcdHRoaXMubW9udGhzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY3VycmVudFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1vbnRocy5oYXNPd25Qcm9wZXJ0eShtb250aCkpIHtcblx0XHRcdHJldHVybiBbLi4udGhpcy5tb250aHNbbW9udGhdXTtcblx0XHR9XG5cblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRkYXRlLnNldE1vbnRoKG1vbnRoLCAxKTtcblxuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdlbmVyYXRlZE1vbnRoID0gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZU1vbnRoKGRhdGUsIHsgc3RhcnRPZldlZWs6IDEsIHBhZGRpbmc6IHRydWUsIGdlbmVyYXRlUGFkZGluZzogdHJ1ZSB9KTtcblxuXHRcdHRoaXMubW9udGhzW21vbnRoXSA9IGdlbmVyYXRlZE1vbnRoO1xuXG5cdFx0cmV0dXJuIFsuLi5nZW5lcmF0ZWRNb250aF07XG5cdH1cblxuXHRnZXRNb250aEZvckRhdGUoZGF0ZTogRGF0ZSk6IE1vbnRoIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNb250aChkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG5cdH1cblxuXHRnZXRSYW5nZUZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGRhdGUsIHJhbmdlLCB7IHN0YXJ0T2ZXZWVrOiAxIH0pO1xuXHR9XG5cblx0Z2V0UmFuZ2VzRm9yRGF0ZShkYXRlOiBEYXRlLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZVJhbmdlTWFwIHtcblx0XHRjb25zdCByYW5nZU9wdGlvbnMgPSB7IHN0YXJ0T2ZXZWVrOiAxIH07XG5cdFx0Y29uc3QgYmVmb3JlID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChkYXRlLCBkYXRlLmdldE1vbnRoKCkgLSAxKTtcblx0XHRjb25zdCBhZnRlciA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVmb3JlOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYmVmb3JlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGN1cnJlbnQ6IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGFmdGVyOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYWZ0ZXIsIHJhbmdlLCByYW5nZU9wdGlvbnMpLFxuXHRcdH07XG5cdH1cblxuXHRnZXRDbG9zZXN0RGF0ZUZvclJhbmdlKGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZVJhbmdlID0gdGhpcy5nZXRSYW5nZUZvckRhdGUoZGF0ZSwgcmFuZ2UpO1xuXG5cdFx0aWYgKERhdGVIZWxwZXIuZGF0ZU91dE9mUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKSkge1xuXHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuY2xvc2VzdERhdGVGb3JSYW5nZShkYXRlLCBkYXRlUmFuZ2UpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla2RheUxhYmVsc0NvbmZpZywgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgPSBbXG5cdCdNb24nLFxuXHQnVHVlJyxcblx0J1dlZCcsXG5cdCdUaHUnLFxuXHQnRnJpJyxcblx0J1NhdCcsXG5cdCdTdW4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTID0gW1xuXHQnSmFudWFyeScsXG5cdCdGZWJydWFyeScsXG5cdCdNYXJjaCcsXG5cdCdBcHJpbCcsXG5cdCdNYXknLFxuXHQnSnVuZScsXG5cdCdKdWx5Jyxcblx0J0F1Z3VzdCcsXG5cdCdTZXB0ZW1iZXInLFxuXHQnT2N0b2JlcicsXG5cdCdOb3ZlbWJlcicsXG5cdCdEZWNlbWJlcicsXG5dO1xuXG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2Vla2RheUxhYmVsc0NvbmZpZz4oJ3dlZWtkYXlMYWJlbHMnKTtcbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9NT05USF9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9udGhMYWJlbHNDb25maWc+KCdtb250aExhYmVscycpO1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2UsIERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMU1xufSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7XG5cdFdlZWtkYXlMYWJlbHNDb25maWcsXG5cdE1vbnRoTGFiZWxzQ29uZmlnLFxuXHRDQUxFTkRBUl9WSUVXX01PTlRILFxuXHRDQUxFTkRBUl9WSUVXX1lFQVIsXG5cdENBTEVOREFSX1ZJRVdfREVDRU5OSUFcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fbmF2XCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b3JpZ2UgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoLTEpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibS1kYXRlcGlja2VyX190aXRsZSBhLWJ1dHRvblwiIChjbGljayk9XCJzd2l0Y2hWaWV3KClcIj5cbiAgICAgICAge3sgaGVhZGVyTGFiZWwgfCB0aXRsZWNhc2UgfX1cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b2xnZW5kZSBtYWFuZFwiIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwidXBkYXRlQWN0aXZlRGF0ZSgxKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxhdWktY2FsZW5kYXItbW9udGhcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEhcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbcmFuZ2VdPVwicmFuZ2VcIlxuICAgIFt3ZWVrZGF5TGFiZWxzXT1cIndlZWtkYXlMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLW1vbnRoPlxuPGF1aS1jYWxlbmRhci15ZWFyXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX1lFQVJcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbbW9udGhMYWJlbHNdPVwibW9udGhMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLXllYXI+XG48YXVpLWNhbGVuZGFyLWRlY2VubmlhXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXItZGVjZW5uaWE+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcmFuZ2U6IERhdGVSYW5nZTtcblx0QElucHV0KCkgd2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZztcblx0QElucHV0KCkgbW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19NT05USCA9IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX1lFQVIgPSBDQUxFTkRBUl9WSUVXX1lFQVI7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBID0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQTtcblx0cHVibGljIGFjdGl2ZURhdGU6IERhdGU7XG5cdHB1YmxpYyBhY3RpdmVWaWV3OiBzdHJpbmcgPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgaGVhZGVyTGFiZWwgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHVibGljIG1vZHVsZU1vbnRoTGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdFx0QEluamVjdChDQUxFTkRBUl9XRUVLREFZX0xBQkVMUykgcHVibGljIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdFx0dGhpcy5tb250aExhYmVscyA9IHRoaXMubW9udGhMYWJlbHMgfHwgdGhpcy5tb2R1bGVNb250aExhYmVscztcblx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDbG9zZXN0RGF0ZUZvclJhbmdlKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5yYW5nZSk7XG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGNoYW5nZXMuc2VsZWN0ZWREYXRlICYmIGNoYW5nZXMuc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZSA/IGNoYW5nZXMuc2VsZWN0ZWREYXRlIDogbnVsbDtcblxuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLm1vbnRoTGFiZWxzICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0c2VsZWN0ZWREYXRlICYmXG5cdFx0XHQhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKHNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUsIHNlbGVjdGVkRGF0ZS5wcmV2aW91c1ZhbHVlKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQWN0aXZlRGF0ZShmYWN0b3I6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZSA/IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRNb250aChhY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGZhY3Rvcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArICgxMiAqIGZhY3RvcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZURhdGUgPSBhY3RpdmVEYXRlO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcoZmFjdG9yOiBudW1iZXIgPSAxKTogdm9pZCB7XG5cdFx0Y29uc3Qgdmlld3MgPSBbQ0FMRU5EQVJfVklFV19NT05USCwgQ0FMRU5EQVJfVklFV19ZRUFSLCBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXTtcblxuXHRcdGNvbnN0IGN1cnJWaWV3ID0gdmlld3MuaW5kZXhPZih0aGlzLmFjdGl2ZVZpZXcpO1xuXHRcdGxldCBuZXh0VmlldyA9IChjdXJyVmlldyArIGZhY3RvcikgPj0gdmlld3MubGVuZ3RoID8gMCA6IGN1cnJWaWV3ICsgZmFjdG9yO1xuXHRcdG5leHRWaWV3ID0gbmV4dFZpZXcgPCAwID8gdmlld3MubGVuZ3RoIC0gMSA6IG5leHRWaWV3O1xuXG5cdFx0dGhpcy5hY3RpdmVWaWV3ID0gdmlld3NbbmV4dFZpZXddO1xuXG5cdFx0Ly8gcmVzZXQgYWN0aXZlRGF0ZSB3aGVuIHJldHVybmluZyB0byBtb250aCB2aWV3IHdpdGhvdXQgbW9kZWwgdXBkYXRlXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlICYmIG5leHRWaWV3ID09PSAwICYmIGZhY3RvciA9PT0gMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0dXBkYXRlSGVhZGVyTGFiZWwoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IHRoaXMubW9udGhMYWJlbHNbdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCldICsgJyAnICsgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX1lFQVI6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBTdHJpbmcodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0Y29uc3Qgc3RhcnRZZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBgJHtzdGFydFllYXJ9IC0gJHtzdGFydFllYXIgKyAxMX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwaWNrRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcGxldGUgPSB0aGlzLmFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdCh7XG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0Y29tcGxldGU6IGNvbXBsZXRlLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFjb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zd2l0Y2hWaWV3KC0xKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLWRlY2VubmlhJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHllYXJzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHllYXIgb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogeWVhciA9PT0gY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogeWVhciA9PT0gc2VsZWN0ZWRZZWFyXG4gICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIHllYXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZWNlbm5pYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgeWVhcnMgPSBbXTtcblx0cHVibGljIHNlbGVjdGVkWWVhciA9IC0xO1xuXHRwdWJsaWMgY3VycmVudCA9IC0xO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnQuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBnZXQoY2hhbmdlcywgJ2FjdGl2ZURhdGUuY3VycmVudFZhbHVlJyk7XG5cdFx0Y29uc3QgcHJldmlvdXNWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlJyk7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudFZhbHVlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0XHRjb25zdCBwcmV2aW91c1llYXIgPSBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHByZXZpb3VzVmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IG91dE9mUmFuZ2UgPSBwcmV2aW91c1llYXIgPiBjdXJyZW50WWVhciB8fCBwcmV2aW91c1llYXIgKyAxMSA8IGN1cnJlbnRZZWFyO1xuXG5cdFx0aWYgKGN1cnJlbnRZZWFyID49IDAgJiYgb3V0T2ZSYW5nZSkge1xuXHRcdFx0dGhpcy51cGRhdGVZZWFycygpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZERhdGUgaW5zdGFuY2VvZiBEYXRlID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHR9XG5cblx0cGlja0RhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGU6IG51bWJlcikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHRzZWxlY3RlZERhdGUuc2V0RnVsbFllYXIoZGF0ZSk7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChzZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVZZWFycygpOiB2b2lkIHtcblx0XHRjb25zdCB5ZWFycyA9IFtdO1xuXHRcdGNvbnN0IGFjdGl2ZVllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRcdGZvciAobGV0IGkgPSBhY3RpdmVZZWFyOyBpIDwgYWN0aXZlWWVhciArIDEyOyBpICs9IDEpIHtcblx0XHRcdHllYXJzLnB1c2goaSk7XG5cdFx0fVxuXG5cdFx0dGhpcy55ZWFycyA9IGNodW5rKHllYXJzLCA0KTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IERheSwgTW9udGgsIERhdGVSYW5nZSwgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVSYW5nZU1hcCwgV2Vla2RheUxhYmVsc0NvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLW1vbnRoJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2RheXNcIj5cbiAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlMYWJlbHNcIiB0aXRsZT17e2RheX19Pnt7IGRheSB8IHNsaWNlOjA6MiB8IHRpdGxlY2FzZSB9fTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cblxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGRhdGVzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWZhZGVkJzogIWRheS5kYXRlIHx8IGRheS5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBzZWxlY3RlZERheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBkYXkpXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkYXkuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICA+e3sgZGF5LmRhdGUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSB3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnID0gQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGRhdGVzOiBNb250aCA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXkgPSAtMTtcblx0cHVibGljIGN1cnJlbnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX1dFRUtEQVlfTEFCRUxTKSBwcml2YXRlIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnc2VsZWN0ZWREYXRlJyk7XG5cdFx0Y29uc3QgYWN0aXZlRGF0ZUNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoY2hhbmdlcywgJ2FjdGl2ZURhdGUnKTtcblx0XHRjb25zdCBtb250aENoYW5nZWQgPSBhY3RpdmVEYXRlQ2hhbmdlZCAmJiAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFtcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUsXG5cdFx0XHRjaGFuZ2VzLmFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZSxcblx0XHRdLCAnTScpO1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF5Q2hhbmdlZCA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50RGF0ZSgpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBzZWxlY3RlZERheUNoYW5nZWQgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXREYXRlKCkgOiAtMTtcblxuXHRcdGxldCBuZXdEYXRlcyA9IFtdO1xuXG5cdFx0aWYgKHNlbGVjdGVkRGF0ZUNoYW5nZWQpIHtcblx0XHRcdG5ld0RhdGVzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhGb3JEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0XHR9IGVsc2UgaWYgKGFjdGl2ZURhdGVDaGFuZ2VkICYmIG1vbnRoQ2hhbmdlZCkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VzRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ld0RhdGVzLm1hcCh3ZWVrID0+IHdlZWsubWFwKGRheSA9PiAoey4uLmRheSwgYXZhaWxhYmxlOiB0aGlzLmRheUlzQXZhaWxhYmxlKGRheSwgcmFuZ2UpIH0pKSk7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgbW9kYWwgZG9lc24ndCBjbG9zZVxuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGNvbnN0IG1vbnRoID0gZGF5LmRhdGUgPiAyMCA/IC0xIDogMTtcblx0XHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChEYXRlSGVscGVyLnVwZGF0ZURhdGUoc2VsZWN0ZWREYXRlLCBkYXkuZGF0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIHByb3A6IHN0cmluZyk6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0uY3VycmVudFZhbHVlYCk7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0ucHJldmlvdXNWYWx1ZWApO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudC52YWx1ZU9mKCkgOiAwO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91cy52YWx1ZU9mKCkgOiAwO1xuXG5cdFx0cmV0dXJuICEhY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZSAhPT0gcHJldmlvdXNWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudERhdGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBtb250aEhhc0NoYW5nZWQgPSAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFxuXHRcdFx0W3RoaXMuYWN0aXZlRGF0ZSwgY3VycmVudF0sXG5cdFx0XHRbJ00nLCAnWSddXG5cdFx0KTtcblxuXHRcdHJldHVybiBtb250aEhhc0NoYW5nZWQgPyAtMSA6IGN1cnJlbnQuZ2V0RGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBkYXlJc0F2YWlsYWJsZShkYXk6IERheSwgcmFuZ2U6IERhdGVSYW5nZU1hcCk6IEJvb2xlYW4ge1xuXHRcdGxldCBkYXRlUmFuZ2UgPSByYW5nZS5jdXJyZW50O1xuXG5cdFx0aWYgKGRheS5wYWRkaW5nKSB7XG5cdFx0XHRkYXRlUmFuZ2UgPSBkYXkuZGF0ZSA+IDIwID8gcmFuZ2UuYmVmb3JlIDogcmFuZ2UuYWZ0ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGVSYW5nZS5pbmRleE9mKGRheS5kYXRlKSA8IDA7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX01PTlRIX0xBQkVMUywgQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXIteWVhcicsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiBtb250aHNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogbW9udGggPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IG1vbnRoID09PSBtb250aExhYmVsc1tzZWxlY3RlZE1vbnRoXVxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBtb250aClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGggfCB0aXRsZWNhc2UgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdGVkTW9udGggPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAnJztcblx0cHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nW10+ID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aENoYW5nZWQgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblxuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRZZWFyID09PSBjdXJyZW50LmdldEZ1bGxZZWFyKCkgPyB0aGlzLm1vbnRoTGFiZWxzW2N1cnJlbnQuZ2V0TW9udGgoKV0gOiAnJztcblxuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkTW9udGhDaGFuZ2VkID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA6IC0xO1xuXG5cdFx0aWYgKGNoYW5nZXMubW9udGhMYWJlbHMpIHtcblx0XHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0XHR0aGlzLm1vbnRocyA9IGNodW5rKHRoaXMubW9udGhMYWJlbHMsIDQpO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBzdHJpbmcpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCB0aGlzLm1vbnRoTGFiZWxzLmluZGV4T2YoZGF0ZSkpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4veWVhci95ZWFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG5cdENhbGVuZGFyQ29tcG9uZW50LFxuXHRDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50LFxuXHRDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuXHRDYWxlbmRhclllYXJDb21wb25lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q2FsZW5kYXJDb21wb25lbnQsXG5cdENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQsXG5cdENhbGVuZGFyTW9udGhDb21wb25lbnQsXG5cdENhbGVuZGFyWWVhckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdENhbGVuZGFyU2VydmljZSxcbl07XG4iLCIvLyByZXBsYWNlIHdpdGggY29tbW9uIHRpdGxlY2FzZSBwaXBlIGluIGFuZ3VsYXIgNCwgbWluZCB0aGUgcmVnZXggd2l0aCBzcGVjaWFsIGNoYXJhY3RlcnMgKGUuZy4gw4PCqSlcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gdHJhbnNmb3JtIGEgc2luZ2xlIHdvcmQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuZnVuY3Rpb24gdGl0bGVDYXNlV29yZCh3b3JkOiBzdHJpbmcpIHtcbiAgaWYgKCF3b3JkKSB7XG5cdCAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuQFBpcGUoe25hbWU6ICd0aXRsZWNhc2UnfSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMvZykubWFwKHdvcmQgPT4gdGl0bGVDYXNlV29yZCh3b3JkKSkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnLi90aXRsZS1jYXNlLnBpcGUnO1xuXG5leHBvcnQgY29uc3QgUGlwZXMgPSBbXG5cdFRpdGxlQ2FzZVBpcGUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbmltcG9ydCB7XG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG59IGZyb20gJy4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBXZWVrZGF5TGFiZWxzQ29uZmlnLCBNb250aExhYmVsc0NvbmZpZyB9IGZyb20gJy4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHRQaXBlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0UGlwZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRcdG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdENhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsdUJBQWEsbUJBQW1CLEdBQUcscUJBQXFCLENBQUM7QUFDekQsdUJBQWEsa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFDdkQsdUJBQWEsc0JBQXNCLEdBQUcsd0JBQXdCOzs7Ozs7QUNKOUQ7O3NCQVkyQixFQUFFOzs7Ozs7O0lBRzVCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsSUFBYTtRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUVELHVCQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhCLElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELHVCQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVuSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUVwQyxPQUFPLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztLQUMzQjs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBVSxFQUFFLEtBQWdCO1FBQzNDLE9BQU8sYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEU7Ozs7OztJQUVELGdCQUFnQixDQUFDLElBQVUsRUFBRSxLQUFnQjtRQUM1Qyx1QkFBTSxZQUFZLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEMsdUJBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSx1QkFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDTixNQUFNLEVBQUUsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQztZQUNoRSxPQUFPLEVBQUUsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQztZQUMvRCxLQUFLLEVBQUUsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQztTQUM5RCxDQUFDO0tBQ0Y7Ozs7OztJQUVELHNCQUFzQixDQUFDLE9BQWEsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFnQjtRQUMvRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZEOzs7WUE1REQsVUFBVTs7Ozs7OztBQ1ZYLHVCQUdhLCtCQUErQixHQUFHO0lBQzlDLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7Q0FDTCxDQUFDO0FBRUYsdUJBQWEsNkJBQTZCLEdBQUc7SUFDNUMsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0NBQ1YsQ0FBQztBQUVGLHVCQUFhLHVCQUF1QixHQUFHLElBQUksY0FBYyxDQUFzQixlQUFlLENBQUMsQ0FBQztBQUNoRyx1QkFBYSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBb0IsYUFBYSxDQUFDOzs7Ozs7QUM3QnpGOzs7Ozs7SUFtRkMsWUFDdUMsb0JBQW9CLDZCQUE2QixFQUMvQyxzQkFBc0IsK0JBQStCLEVBQ3JGO1FBRjhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7UUFDL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQztRQUNyRixvQkFBZSxHQUFmLGVBQWU7MEJBWkQsSUFBSSxZQUFZLEVBQUU7bUNBRVosbUJBQW1CO2tDQUNwQixrQkFBa0I7c0NBQ2Qsc0JBQXNCOzBCQUUxQixtQkFBbUI7MkJBQzFCLEVBQUU7S0FNbkI7Ozs7SUFFSixRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsdUJBQU0sWUFBWSxHQUFHLE9BQU8sb0JBQWlCLE9BQU8saUJBQWMsWUFBWSxHQUFHLE9BQU8sbUJBQWdCLElBQUksQ0FBQztRQUU3RyxJQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXO1lBQ3ZDLFlBQVk7WUFDWixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsYUFBYSxDQUNoRixFQUFFO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Q7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsU0FBaUIsQ0FBQztRQUNsQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFNUUsUUFBUSxJQUFJLENBQUMsVUFBVTtZQUN0QixLQUFLLG1CQUFtQjtnQkFDdkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELE1BQU07WUFDUCxLQUFLLGtCQUFrQjtnQkFDdEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDUCxLQUFLLHNCQUFzQjtnQkFDMUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU07U0FDUDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELFVBQVUsQ0FBQyxTQUFpQixDQUFDO1FBQzVCLHVCQUFNLEtBQUssR0FBRyxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFaEYsdUJBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELHFCQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzRSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR2xDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsUUFBUSxJQUFJLENBQUMsVUFBVTtZQUN0QixLQUFLLG1CQUFtQjtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEcsTUFBTTtZQUNQLEtBQUssa0JBQWtCO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07WUFDUCxLQUFLLHNCQUFzQjtnQkFDMUIsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxTQUFTLE1BQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUN0RCxNQUFNO1NBQ1A7S0FDRDs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBVTtRQUNsQix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxtQkFBbUIsQ0FBQztRQUV6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7S0FDRDs7O1lBbEpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1DVjtnQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7Ozs0Q0FnQkUsTUFBTSxTQUFDLHFCQUFxQjs0Q0FDNUIsTUFBTSxTQUFDLHVCQUF1QjtZQTFEeEIsZUFBZTs7OzJCQTJDdEIsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxNQUFNOzs7Ozs7O0FDMUVSOzswQkFrQ3dCLElBQUksWUFBWSxFQUFFO3FCQUUxQixFQUFFOzRCQUNLLENBQUMsQ0FBQzt1QkFDUCxDQUFDLENBQUM7Ozs7O0lBRW5CLFFBQVE7UUFDUCx1QkFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNyQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsdUJBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUM3RCx1QkFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQy9ELHVCQUFNLFdBQVcsR0FBRyxZQUFZLFlBQVksSUFBSSxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRix1QkFBTSxZQUFZLEdBQUcsYUFBYSxZQUFZLElBQUksR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEYsdUJBQU0sVUFBVSxHQUFHLFlBQVksR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFFakYsSUFBSSxXQUFXLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLFlBQVksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDN0Y7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFpQixFQUFFLElBQVk7UUFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLHVCQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuQzs7OztJQUVPLFdBQVc7UUFDbEIsdUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQix1QkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqRCxLQUFLLHFCQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7WUFoRTlCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0NBY1Y7Z0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7OzsyQkFFQyxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7Ozs7OztBQ2xDUjs7Ozs7SUEyREMsWUFDMEMsc0JBQXNCLCtCQUErQixFQUN0RjtRQURpQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWtDO1FBQ3RGLG9CQUFlLEdBQWYsZUFBZTs2QkFUc0IsK0JBQStCOzBCQUN0RCxJQUFJLFlBQVksRUFBRTtxQkFFbkIsRUFBRTsyQkFDSCxDQUFDLENBQUM7S0FNbkI7Ozs7SUFFSixRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztLQUNwRTs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsdUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckUsdUJBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDakUsdUJBQU0sWUFBWSxHQUFHLGlCQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNuRSxPQUFPLGVBQVksWUFBWTtZQUMvQixPQUFPLGVBQVksYUFBYTtTQUNoQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsdUJBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFNUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXpFLHFCQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxtQkFBbUIsRUFBRTtZQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25FO2FBQU0sSUFBSSxpQkFBaUIsSUFBSSxZQUFZLEVBQUU7WUFDN0MsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ04sT0FBTztTQUNQO1FBRUQsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsdUJBQVMsR0FBRyxJQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztLQUM1Rzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCLEVBQUUsR0FBUTtRQUNuQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIscUJBQUksWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsdUJBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcEU7Ozs7OztJQUVPLFVBQVUsQ0FBQyxPQUFzQixFQUFFLElBQVk7UUFDdEQsdUJBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELHVCQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZELHVCQUFNLFlBQVksR0FBRyxPQUFPLFlBQVksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckUsdUJBQU0sYUFBYSxHQUFHLFFBQVEsWUFBWSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RSxPQUFPLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxLQUFLLGFBQWEsQ0FBQzs7Ozs7SUFHakQsY0FBYztRQUNyQix1QkFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQix1QkFBTSxlQUFlLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUNoRCxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQzFCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNWLENBQUM7UUFFRixPQUFPLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7SUFHekMsY0FBYyxDQUFDLEdBQVEsRUFBRSxLQUFtQjtRQUNuRCxxQkFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUU5QixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUN2RDtRQUVELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O1lBcEh4QyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUJWO2dCQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7OzRDQWFFLE1BQU0sU0FBQyx1QkFBdUI7WUE3Q3hCLGVBQWU7OzsyQkFrQ3RCLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7Ozs7OztBQ3JEUjs7OztJQThDQyxZQUN1QyxvQkFBb0IsNkJBQTZCO1FBQWpELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7MkJBUjlDLDZCQUE2QjswQkFDaEQsSUFBSSxZQUFZLEVBQUU7NkJBRWxCLENBQUMsQ0FBQzt1QkFDUixFQUFFO3NCQUNjLEVBQUU7S0FJL0I7Ozs7O0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLHVCQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDN0QsdUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25GLHVCQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BILHVCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxLQUFLLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqRyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUUsSUFBSSxPQUFPLGlCQUFjO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNEOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBaUIsRUFBRSxJQUFZO1FBQ3ZDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixxQkFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DOzs7WUF4REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Q0FjVjtnQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7Ozs0Q0FZRSxNQUFNLFNBQUMscUJBQXFCOzs7MkJBVjdCLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLE1BQU07Ozs7Ozs7QUN4Q1IsdUJBWWEsVUFBVSxHQUFHO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtDQUNyQjs7Ozs7O0FDakJELHVCQUVhLFFBQVEsR0FBRztJQUN2QixlQUFlO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7QUNLRCx1QkFBdUIsSUFBWTtJQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUVELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDN0Q7Ozs7OztBQVFEOzs7OztJQUNFLFNBQVMsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkU7OztZQVJGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7Ozs7Ozs7QUN0QnpCLHVCQUVhLEtBQUssR0FBRztJQUNwQixhQUFhO0NBQ2I7Ozs7OztBQ0pELFdBOEJnRCwrQkFBK0IsT0FDakMsNkJBQTZCO0FBRzNFOzs7Ozs7SUFDQyxPQUFPLFFBQVEsQ0FDZCxhQUFrQyxFQUNsQyxXQUE4QjtRQUU5QixPQUFPO1lBQ04sUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNWLGVBQWU7Z0JBQ2YsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtnQkFDN0QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUN6RDtTQUNELENBQUM7S0FDRjs7O1lBL0JELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsVUFBVTtvQkFDVixLQUFLO2lCQUNMO2dCQUNELE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLEtBQUs7aUJBQ0w7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLFFBQVE7b0JBQ1IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUFpQyxFQUFFO29CQUMvRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLElBQStCLEVBQUU7aUJBQzNFO2FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
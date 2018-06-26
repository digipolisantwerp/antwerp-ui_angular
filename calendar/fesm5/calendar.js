import { __assign, __spread } from 'tslib';
import { Injectable, InjectionToken, Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy, Pipe, NgModule } from '@angular/core';
import { DateGenerator, DateHelper } from '@acpaas-ui/js-date-utils';
import { get, chunk } from 'lodash-es';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
var /** @type {?} */ CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
var /** @type {?} */ CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.months = {};
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    CalendarService.prototype.getMonth = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) {
        if (year) {
            if (this.currentYear !== year) {
                this.months = {};
            }
            this.currentYear = year;
        }
        if (this.months.hasOwnProperty(month)) {
            return __spread(this.months[month]);
        }
        var /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        var /** @type {?} */ generatedMonth = DateGenerator.generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return __spread(generatedMonth);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarService.prototype.getMonthForDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getMonth(date.getMonth(), date.getFullYear());
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangeForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        return DateGenerator.generateRange(date, range, { startOfWeek: 1 });
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangesForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        var /** @type {?} */ rangeOptions = { startOfWeek: 1 };
        var /** @type {?} */ before = DateHelper.updateMonth(date, date.getMonth() - 1);
        var /** @type {?} */ after = DateHelper.updateMonth(date, date.getMonth() + 1);
        return {
            before: DateGenerator.generateRange(before, range, rangeOptions),
            current: DateGenerator.generateRange(date, range, rangeOptions),
            after: DateGenerator.generateRange(after, range, rangeOptions),
        };
    };
    /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    CalendarService.prototype.getClosestDateForRange = /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    function (date, range) {
        if (date === void 0) { date = new Date(); }
        var /** @type {?} */ dateRange = this.getRangeForDate(date, range);
        if (DateHelper.dateOutOfRange(date, dateRange)) {
            return date;
        }
        return DateHelper.closestDateForRange(date, dateRange);
    };
    CalendarService.decorators = [
        { type: Injectable },
    ];
    return CalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_DEFAULT_WEEKDAY_LABELS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];
var /** @type {?} */ CALENDAR_DEFAULT_MONTH_LABELS = [
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
var /** @type {?} */ CALENDAR_WEEKDAY_LABELS = new InjectionToken('weekdayLabels');
var /** @type {?} */ CALENDAR_MONTH_LABELS = new InjectionToken('monthLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(moduleMonthLabels, moduleWeekdayLabels, calendarService) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
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
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
        this.monthLabels = this.monthLabels || this.moduleMonthLabels;
        this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
        this.updateHeaderLabel();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ selectedDate = changes["selectedDate"] && changes["selectedDate"].currentValue ? changes["selectedDate"] : null;
        if (typeof this.monthLabels !== 'undefined' &&
            selectedDate &&
            !DateHelper.datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)) {
            this.activeDate = this.selectedDate;
            this.updateHeaderLabel();
        }
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.updateActiveDate = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 0; }
        if (factor === 0) {
            return;
        }
        var /** @type {?} */ activeDate = this.activeDate ? new Date(this.activeDate) : new Date();
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
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.switchView = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 1; }
        var /** @type {?} */ views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];
        var /** @type {?} */ currView = views.indexOf(this.activeView);
        var /** @type {?} */ nextView = (currView + factor) >= views.length ? 0 : currView + factor;
        nextView = nextView < 0 ? views.length - 1 : nextView;
        this.activeView = views[nextView];
        // reset activeDate when returning to month view without model update
        if (this.selectedDate && nextView === 0 && factor === 1) {
            this.activeDate = this.selectedDate;
        }
        this.updateHeaderLabel();
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateHeaderLabel = /**
     * @return {?}
     */
    function () {
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
                break;
            case CALENDAR_VIEW_YEAR:
                this.headerLabel = String(this.activeDate.getFullYear());
                break;
            case CALENDAR_VIEW_DECENNIA:
                var /** @type {?} */ startYear = this.activeDate.getFullYear();
                this.headerLabel = startYear + " - " + (startYear + 11);
                break;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.pickDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ complete = this.activeView === CALENDAR_VIEW_MONTH;
        this.selectDate.emit({
            date: date,
            complete: complete,
        });
        if (!complete) {
            this.switchView(-1);
        }
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar',
                    template: "<div class=\"m-datepicker__nav\">\n    <button tabindex=\"-1\" type=\"button\" aria-label=\"vorige maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(-1)\">\n        <i class=\"fa fa-angle-left\"></i>\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" class=\"m-datepicker__title a-button\" (click)=\"switchView()\">\n        {{ headerLabel | titlecase }}\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" aria-label=\"volgende maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(1)\">\n        <i class=\"fa fa-angle-right\"></i>\n    </button>\n</div>\n\n<aui-calendar-month\n    *ngIf=\"activeView === CALENDAR_VIEW_MONTH\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [range]=\"range\"\n    [weekdayLabels]=\"weekdayLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-month>\n<aui-calendar-year\n    *ngIf=\"activeView === CALENDAR_VIEW_YEAR\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [monthLabels]=\"monthLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-year>\n<aui-calendar-decennia\n    *ngIf=\"activeView === CALENDAR_VIEW_DECENNIA\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-decennia>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
        { type: CalendarService }
    ]; };
    CalendarComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        range: [{ type: Input }],
        weekdayLabels: [{ type: Input }],
        monthLabels: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDecenniaComponent = /** @class */ (function () {
    function CalendarDecenniaComponent() {
        this.selectDate = new EventEmitter();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        var /** @type {?} */ previousValue = get(changes, 'activeDate.previousValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        var /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    };
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.updateYears = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ years = [];
        var /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (var /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = chunk(years, 4);
    };
    CalendarDecenniaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar-decennia',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of years\">\n            <td *ngFor=\"let year of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': year === current,\n                    'is-selected': year === selectedYear\n                }\" (click)=\"pickDate($event, year)\">\n                    {{ year }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    CalendarDecenniaComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeDate: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarDecenniaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent(moduleWeekdayLabels, calendarService) {
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
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
    CalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ selectedDateChanged = this.hasChanged(changes, 'selectedDate');
        var /** @type {?} */ activeDateChanged = this.hasChanged(changes, 'activeDate');
        var /** @type {?} */ monthChanged = activeDateChanged && !DateHelper.datesAreEqual([
            changes["activeDate"].currentValue,
            changes["activeDate"].previousValue,
        ], 'M');
        var /** @type {?} */ selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();
        this.current = this.getCurrentDate();
        this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;
        var /** @type {?} */ newDates = [];
        if (selectedDateChanged) {
            newDates = this.calendarService.getMonthForDate(this.selectedDate);
        }
        else if (activeDateChanged && monthChanged) {
            newDates = this.calendarService.getMonthForDate(this.activeDate);
        }
        else {
            return;
        }
        var /** @type {?} */ range = this.calendarService.getRangesForDate(this.activeDate, this.range);
        this.dates = newDates.map(function (week) { return week.map(function (day) { return (__assign({}, day, { available: _this.dayIsAvailable(day, range) })); }); });
    };
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    CalendarMonthComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    function (event, day) {
        event.stopPropagation(); // Stop propagation so the modal doesn't close
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        if (day.padding) {
            var /** @type {?} */ month = day.date > 20 ? -1 : 1;
            selectedDate = DateHelper.updateMonth(selectedDate, selectedDate.getMonth() + month);
        }
        this.selectDate.emit(DateHelper.updateDate(selectedDate, day.date));
    };
    /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    CalendarMonthComponent.prototype.hasChanged = /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    function (changes, prop) {
        var /** @type {?} */ current = get(changes, prop + ".currentValue");
        var /** @type {?} */ previous = get(changes, prop + ".previousValue");
        var /** @type {?} */ currentValue = current instanceof Date ? current.valueOf() : 0;
        var /** @type {?} */ previousValue = previous instanceof Date ? previous.valueOf() : 0;
        return !!currentValue && currentValue !== previousValue;
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getCurrentDate = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        var /** @type {?} */ monthHasChanged = !DateHelper.datesAreEqual([this.activeDate, current], ['M', 'Y']);
        return monthHasChanged ? -1 : current.getDate();
    };
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    CalendarMonthComponent.prototype.dayIsAvailable = /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    function (day, range) {
        var /** @type {?} */ dateRange = range.current;
        if (day.padding) {
            dateRange = day.date > 20 ? range.before : range.after;
        }
        return dateRange.indexOf(day.date) < 0;
    };
    CalendarMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar-month',
                    template: "<table>\n    <thead>\n        <tr class=\"m-datepicker__days\">\n            <th *ngFor=\"let day of weekdayLabels\" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>\n        </tr>\n    </thead>\n\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let week of dates\">\n            <td *ngFor=\"let day of week\">\n                <button\n                    tabindex=\"0\"\n                    type=\"button\"\n                    [ngClass]=\"{\n                        'is-faded': !day.date || day.padding,\n                        'is-selected': !day.padding && day.date === selectedDay,\n                        'is-current': !day.padding && day.date === current\n                    }\"\n                    (click)=\"pickDate($event, day)\"\n                    [disabled]=\"!day.available\"\n                >{{ day.date }}</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarMonthComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
        { type: CalendarService }
    ]; };
    CalendarMonthComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeDate: [{ type: Input }],
        range: [{ type: Input }],
        weekdayLabels: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarYearComponent = /** @class */ (function () {
    function CalendarYearComponent(moduleMonthLabels) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
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
    CalendarYearComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        var /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = chunk(this.monthLabels, 4);
        }
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarYearComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    };
    CalendarYearComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar-year',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of months\">\n            <td *ngFor=\"let month of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': month === current,\n                    'is-selected': month === monthLabels[selectedMonth]\n                }\" (click)=\"pickDate($event, month)\">\n                    {{ month | titlecase }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarYearComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] }
    ]; };
    CalendarYearComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeDate: [{ type: Input }],
        monthLabels: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarYearComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
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
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TitleCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value || typeof value !== 'string') {
            return value;
        }
        return value.split(/\s/g).map(function (word) { return titleCaseWord(word); }).join(' ');
    };
    TitleCasePipe.decorators = [
        { type: Pipe, args: [{ name: 'titlecase' },] },
    ];
    return TitleCasePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pipes = [
    TitleCasePipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    CalendarModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    };
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
    return CalendarModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci90eXBlcy9jYWxlbmRhci50eXBlcy50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5jb25mLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jb21wb25lbnRzL2RlY2VubmlhL2RlY2VubmlhLmNvbXBvbmVudC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy95ZWFyL3llYXIuY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvaW5kZXgudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfTU9OVEggPSAnQ0FMRU5EQVJfVklFV19NT05USCc7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ZRUFSID0gJ0NBTEVOREFSX1ZJRVdfWUVBUic7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ERUNFTk5JQSA9ICdDQUxFTkRBUl9WSUVXX0RFQ0VOTklBJztcblxuZXhwb3J0IHR5cGUgV2Vla2RheUxhYmVsc0NvbmZpZyA9IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgTW9udGhMYWJlbHNDb25maWcgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyUmVzdWx0IHtcblx0ZGF0ZTogRGF0ZTtcblx0Y29tcGxldGU6IEJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlTWFwIHtcblx0YmVmb3JlOiBudW1iZXJbXTtcblx0Y3VycmVudDogbnVtYmVyW107XG5cdGFmdGVyOiBudW1iZXJbXTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IERhdGVHZW5lcmF0b3IsIERhdGVIZWxwZXIsIERheSwgTW9udGgsIERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IERhdGVSYW5nZU1hcCB9IGZyb20gJy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb250aE1hcCB7XG5cdFtrZXk6IG51bWJlcl06IE1vbnRoO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcblx0cHVibGljIG1vbnRoczogTW9udGhNYXAgPSB7fTtcblx0cHJpdmF0ZSBjdXJyZW50WWVhcjogbnVtYmVyO1xuXG5cdGdldE1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBNb250aCB7XG5cdFx0aWYgKHllYXIpIHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRZZWFyICE9PSB5ZWFyKSB7XG5cdFx0XHRcdHRoaXMubW9udGhzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY3VycmVudFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1vbnRocy5oYXNPd25Qcm9wZXJ0eShtb250aCkpIHtcblx0XHRcdHJldHVybiBbLi4udGhpcy5tb250aHNbbW9udGhdXTtcblx0XHR9XG5cblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRkYXRlLnNldE1vbnRoKG1vbnRoLCAxKTtcblxuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdlbmVyYXRlZE1vbnRoID0gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZU1vbnRoKGRhdGUsIHsgc3RhcnRPZldlZWs6IDEsIHBhZGRpbmc6IHRydWUsIGdlbmVyYXRlUGFkZGluZzogdHJ1ZSB9KTtcblxuXHRcdHRoaXMubW9udGhzW21vbnRoXSA9IGdlbmVyYXRlZE1vbnRoO1xuXG5cdFx0cmV0dXJuIFsuLi5nZW5lcmF0ZWRNb250aF07XG5cdH1cblxuXHRnZXRNb250aEZvckRhdGUoZGF0ZTogRGF0ZSk6IE1vbnRoIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNb250aChkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG5cdH1cblxuXHRnZXRSYW5nZUZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGRhdGUsIHJhbmdlLCB7IHN0YXJ0T2ZXZWVrOiAxIH0pO1xuXHR9XG5cblx0Z2V0UmFuZ2VzRm9yRGF0ZShkYXRlOiBEYXRlLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZVJhbmdlTWFwIHtcblx0XHRjb25zdCByYW5nZU9wdGlvbnMgPSB7IHN0YXJ0T2ZXZWVrOiAxIH07XG5cdFx0Y29uc3QgYmVmb3JlID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChkYXRlLCBkYXRlLmdldE1vbnRoKCkgLSAxKTtcblx0XHRjb25zdCBhZnRlciA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVmb3JlOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYmVmb3JlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGN1cnJlbnQ6IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGFmdGVyOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYWZ0ZXIsIHJhbmdlLCByYW5nZU9wdGlvbnMpLFxuXHRcdH07XG5cdH1cblxuXHRnZXRDbG9zZXN0RGF0ZUZvclJhbmdlKGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZVJhbmdlID0gdGhpcy5nZXRSYW5nZUZvckRhdGUoZGF0ZSwgcmFuZ2UpO1xuXG5cdFx0aWYgKERhdGVIZWxwZXIuZGF0ZU91dE9mUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKSkge1xuXHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuY2xvc2VzdERhdGVGb3JSYW5nZShkYXRlLCBkYXRlUmFuZ2UpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla2RheUxhYmVsc0NvbmZpZywgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgPSBbXG5cdCdNb24nLFxuXHQnVHVlJyxcblx0J1dlZCcsXG5cdCdUaHUnLFxuXHQnRnJpJyxcblx0J1NhdCcsXG5cdCdTdW4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTID0gW1xuXHQnSmFudWFyeScsXG5cdCdGZWJydWFyeScsXG5cdCdNYXJjaCcsXG5cdCdBcHJpbCcsXG5cdCdNYXknLFxuXHQnSnVuZScsXG5cdCdKdWx5Jyxcblx0J0F1Z3VzdCcsXG5cdCdTZXB0ZW1iZXInLFxuXHQnT2N0b2JlcicsXG5cdCdOb3ZlbWJlcicsXG5cdCdEZWNlbWJlcicsXG5dO1xuXG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2Vla2RheUxhYmVsc0NvbmZpZz4oJ3dlZWtkYXlMYWJlbHMnKTtcbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9NT05USF9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9udGhMYWJlbHNDb25maWc+KCdtb250aExhYmVscycpO1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2UsIERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMU1xufSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7XG5cdFdlZWtkYXlMYWJlbHNDb25maWcsXG5cdE1vbnRoTGFiZWxzQ29uZmlnLFxuXHRDQUxFTkRBUl9WSUVXX01PTlRILFxuXHRDQUxFTkRBUl9WSUVXX1lFQVIsXG5cdENBTEVOREFSX1ZJRVdfREVDRU5OSUFcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fbmF2XCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b3JpZ2UgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoLTEpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibS1kYXRlcGlja2VyX190aXRsZSBhLWJ1dHRvblwiIChjbGljayk9XCJzd2l0Y2hWaWV3KClcIj5cbiAgICAgICAge3sgaGVhZGVyTGFiZWwgfCB0aXRsZWNhc2UgfX1cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b2xnZW5kZSBtYWFuZFwiIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwidXBkYXRlQWN0aXZlRGF0ZSgxKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxhdWktY2FsZW5kYXItbW9udGhcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEhcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbcmFuZ2VdPVwicmFuZ2VcIlxuICAgIFt3ZWVrZGF5TGFiZWxzXT1cIndlZWtkYXlMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLW1vbnRoPlxuPGF1aS1jYWxlbmRhci15ZWFyXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX1lFQVJcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbbW9udGhMYWJlbHNdPVwibW9udGhMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLXllYXI+XG48YXVpLWNhbGVuZGFyLWRlY2VubmlhXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXItZGVjZW5uaWE+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcmFuZ2U6IERhdGVSYW5nZTtcblx0QElucHV0KCkgd2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZztcblx0QElucHV0KCkgbW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19NT05USCA9IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX1lFQVIgPSBDQUxFTkRBUl9WSUVXX1lFQVI7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBID0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQTtcblx0cHVibGljIGFjdGl2ZURhdGU6IERhdGU7XG5cdHB1YmxpYyBhY3RpdmVWaWV3OiBzdHJpbmcgPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgaGVhZGVyTGFiZWwgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHVibGljIG1vZHVsZU1vbnRoTGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdFx0QEluamVjdChDQUxFTkRBUl9XRUVLREFZX0xBQkVMUykgcHVibGljIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdFx0dGhpcy5tb250aExhYmVscyA9IHRoaXMubW9udGhMYWJlbHMgfHwgdGhpcy5tb2R1bGVNb250aExhYmVscztcblx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDbG9zZXN0RGF0ZUZvclJhbmdlKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5yYW5nZSk7XG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGNoYW5nZXMuc2VsZWN0ZWREYXRlICYmIGNoYW5nZXMuc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZSA/IGNoYW5nZXMuc2VsZWN0ZWREYXRlIDogbnVsbDtcblxuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLm1vbnRoTGFiZWxzICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0c2VsZWN0ZWREYXRlICYmXG5cdFx0XHQhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKHNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUsIHNlbGVjdGVkRGF0ZS5wcmV2aW91c1ZhbHVlKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQWN0aXZlRGF0ZShmYWN0b3I6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZSA/IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRNb250aChhY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGZhY3Rvcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArICgxMiAqIGZhY3RvcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZURhdGUgPSBhY3RpdmVEYXRlO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcoZmFjdG9yOiBudW1iZXIgPSAxKTogdm9pZCB7XG5cdFx0Y29uc3Qgdmlld3MgPSBbQ0FMRU5EQVJfVklFV19NT05USCwgQ0FMRU5EQVJfVklFV19ZRUFSLCBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXTtcblxuXHRcdGNvbnN0IGN1cnJWaWV3ID0gdmlld3MuaW5kZXhPZih0aGlzLmFjdGl2ZVZpZXcpO1xuXHRcdGxldCBuZXh0VmlldyA9IChjdXJyVmlldyArIGZhY3RvcikgPj0gdmlld3MubGVuZ3RoID8gMCA6IGN1cnJWaWV3ICsgZmFjdG9yO1xuXHRcdG5leHRWaWV3ID0gbmV4dFZpZXcgPCAwID8gdmlld3MubGVuZ3RoIC0gMSA6IG5leHRWaWV3O1xuXG5cdFx0dGhpcy5hY3RpdmVWaWV3ID0gdmlld3NbbmV4dFZpZXddO1xuXG5cdFx0Ly8gcmVzZXQgYWN0aXZlRGF0ZSB3aGVuIHJldHVybmluZyB0byBtb250aCB2aWV3IHdpdGhvdXQgbW9kZWwgdXBkYXRlXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlICYmIG5leHRWaWV3ID09PSAwICYmIGZhY3RvciA9PT0gMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0dXBkYXRlSGVhZGVyTGFiZWwoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IHRoaXMubW9udGhMYWJlbHNbdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCldICsgJyAnICsgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX1lFQVI6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBTdHJpbmcodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0Y29uc3Qgc3RhcnRZZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBgJHtzdGFydFllYXJ9IC0gJHtzdGFydFllYXIgKyAxMX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwaWNrRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcGxldGUgPSB0aGlzLmFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdCh7XG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0Y29tcGxldGU6IGNvbXBsZXRlLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFjb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zd2l0Y2hWaWV3KC0xKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLWRlY2VubmlhJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHllYXJzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHllYXIgb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogeWVhciA9PT0gY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogeWVhciA9PT0gc2VsZWN0ZWRZZWFyXG4gICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIHllYXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZWNlbm5pYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgeWVhcnMgPSBbXTtcblx0cHVibGljIHNlbGVjdGVkWWVhciA9IC0xO1xuXHRwdWJsaWMgY3VycmVudCA9IC0xO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnQuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBnZXQoY2hhbmdlcywgJ2FjdGl2ZURhdGUuY3VycmVudFZhbHVlJyk7XG5cdFx0Y29uc3QgcHJldmlvdXNWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlJyk7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudFZhbHVlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0XHRjb25zdCBwcmV2aW91c1llYXIgPSBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHByZXZpb3VzVmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IG91dE9mUmFuZ2UgPSBwcmV2aW91c1llYXIgPiBjdXJyZW50WWVhciB8fCBwcmV2aW91c1llYXIgKyAxMSA8IGN1cnJlbnRZZWFyO1xuXG5cdFx0aWYgKGN1cnJlbnRZZWFyID49IDAgJiYgb3V0T2ZSYW5nZSkge1xuXHRcdFx0dGhpcy51cGRhdGVZZWFycygpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZERhdGUgaW5zdGFuY2VvZiBEYXRlID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHR9XG5cblx0cGlja0RhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGU6IG51bWJlcikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHRzZWxlY3RlZERhdGUuc2V0RnVsbFllYXIoZGF0ZSk7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChzZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVZZWFycygpOiB2b2lkIHtcblx0XHRjb25zdCB5ZWFycyA9IFtdO1xuXHRcdGNvbnN0IGFjdGl2ZVllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRcdGZvciAobGV0IGkgPSBhY3RpdmVZZWFyOyBpIDwgYWN0aXZlWWVhciArIDEyOyBpICs9IDEpIHtcblx0XHRcdHllYXJzLnB1c2goaSk7XG5cdFx0fVxuXG5cdFx0dGhpcy55ZWFycyA9IGNodW5rKHllYXJzLCA0KTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IERheSwgTW9udGgsIERhdGVSYW5nZSwgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVSYW5nZU1hcCwgV2Vla2RheUxhYmVsc0NvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLW1vbnRoJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2RheXNcIj5cbiAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlMYWJlbHNcIiB0aXRsZT17e2RheX19Pnt7IGRheSB8IHNsaWNlOjA6MiB8IHRpdGxlY2FzZSB9fTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cblxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGRhdGVzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWZhZGVkJzogIWRheS5kYXRlIHx8IGRheS5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBzZWxlY3RlZERheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBkYXkpXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkYXkuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICA+e3sgZGF5LmRhdGUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSB3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnID0gQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGRhdGVzOiBNb250aCA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXkgPSAtMTtcblx0cHVibGljIGN1cnJlbnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX1dFRUtEQVlfTEFCRUxTKSBwcml2YXRlIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnc2VsZWN0ZWREYXRlJyk7XG5cdFx0Y29uc3QgYWN0aXZlRGF0ZUNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoY2hhbmdlcywgJ2FjdGl2ZURhdGUnKTtcblx0XHRjb25zdCBtb250aENoYW5nZWQgPSBhY3RpdmVEYXRlQ2hhbmdlZCAmJiAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFtcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUsXG5cdFx0XHRjaGFuZ2VzLmFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZSxcblx0XHRdLCAnTScpO1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF5Q2hhbmdlZCA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50RGF0ZSgpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBzZWxlY3RlZERheUNoYW5nZWQgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXREYXRlKCkgOiAtMTtcblxuXHRcdGxldCBuZXdEYXRlcyA9IFtdO1xuXG5cdFx0aWYgKHNlbGVjdGVkRGF0ZUNoYW5nZWQpIHtcblx0XHRcdG5ld0RhdGVzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhGb3JEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0XHR9IGVsc2UgaWYgKGFjdGl2ZURhdGVDaGFuZ2VkICYmIG1vbnRoQ2hhbmdlZCkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VzRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ld0RhdGVzLm1hcCh3ZWVrID0+IHdlZWsubWFwKGRheSA9PiAoey4uLmRheSwgYXZhaWxhYmxlOiB0aGlzLmRheUlzQXZhaWxhYmxlKGRheSwgcmFuZ2UpIH0pKSk7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgbW9kYWwgZG9lc24ndCBjbG9zZVxuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGNvbnN0IG1vbnRoID0gZGF5LmRhdGUgPiAyMCA/IC0xIDogMTtcblx0XHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChEYXRlSGVscGVyLnVwZGF0ZURhdGUoc2VsZWN0ZWREYXRlLCBkYXkuZGF0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIHByb3A6IHN0cmluZyk6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0uY3VycmVudFZhbHVlYCk7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0ucHJldmlvdXNWYWx1ZWApO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudC52YWx1ZU9mKCkgOiAwO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91cy52YWx1ZU9mKCkgOiAwO1xuXG5cdFx0cmV0dXJuICEhY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZSAhPT0gcHJldmlvdXNWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudERhdGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBtb250aEhhc0NoYW5nZWQgPSAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFxuXHRcdFx0W3RoaXMuYWN0aXZlRGF0ZSwgY3VycmVudF0sXG5cdFx0XHRbJ00nLCAnWSddXG5cdFx0KTtcblxuXHRcdHJldHVybiBtb250aEhhc0NoYW5nZWQgPyAtMSA6IGN1cnJlbnQuZ2V0RGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBkYXlJc0F2YWlsYWJsZShkYXk6IERheSwgcmFuZ2U6IERhdGVSYW5nZU1hcCk6IEJvb2xlYW4ge1xuXHRcdGxldCBkYXRlUmFuZ2UgPSByYW5nZS5jdXJyZW50O1xuXG5cdFx0aWYgKGRheS5wYWRkaW5nKSB7XG5cdFx0XHRkYXRlUmFuZ2UgPSBkYXkuZGF0ZSA+IDIwID8gcmFuZ2UuYmVmb3JlIDogcmFuZ2UuYWZ0ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGVSYW5nZS5pbmRleE9mKGRheS5kYXRlKSA8IDA7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX01PTlRIX0xBQkVMUywgQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXIteWVhcicsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiBtb250aHNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogbW9udGggPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IG1vbnRoID09PSBtb250aExhYmVsc1tzZWxlY3RlZE1vbnRoXVxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBtb250aClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGggfCB0aXRsZWNhc2UgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdGVkTW9udGggPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAnJztcblx0cHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nW10+ID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aENoYW5nZWQgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblxuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRZZWFyID09PSBjdXJyZW50LmdldEZ1bGxZZWFyKCkgPyB0aGlzLm1vbnRoTGFiZWxzW2N1cnJlbnQuZ2V0TW9udGgoKV0gOiAnJztcblxuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkTW9udGhDaGFuZ2VkID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA6IC0xO1xuXG5cdFx0aWYgKGNoYW5nZXMubW9udGhMYWJlbHMpIHtcblx0XHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0XHR0aGlzLm1vbnRocyA9IGNodW5rKHRoaXMubW9udGhMYWJlbHMsIDQpO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBzdHJpbmcpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCB0aGlzLm1vbnRoTGFiZWxzLmluZGV4T2YoZGF0ZSkpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4veWVhci95ZWFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG5cdENhbGVuZGFyQ29tcG9uZW50LFxuXHRDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50LFxuXHRDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuXHRDYWxlbmRhclllYXJDb21wb25lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q2FsZW5kYXJDb21wb25lbnQsXG5cdENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQsXG5cdENhbGVuZGFyTW9udGhDb21wb25lbnQsXG5cdENhbGVuZGFyWWVhckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdENhbGVuZGFyU2VydmljZSxcbl07XG4iLCIvLyByZXBsYWNlIHdpdGggY29tbW9uIHRpdGxlY2FzZSBwaXBlIGluIGFuZ3VsYXIgNCwgbWluZCB0aGUgcmVnZXggd2l0aCBzcGVjaWFsIGNoYXJhY3RlcnMgKGUuZy4gw4PCqSlcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gdHJhbnNmb3JtIGEgc2luZ2xlIHdvcmQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuZnVuY3Rpb24gdGl0bGVDYXNlV29yZCh3b3JkOiBzdHJpbmcpIHtcbiAgaWYgKCF3b3JkKSB7XG5cdCAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuQFBpcGUoe25hbWU6ICd0aXRsZWNhc2UnfSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMvZykubWFwKHdvcmQgPT4gdGl0bGVDYXNlV29yZCh3b3JkKSkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnLi90aXRsZS1jYXNlLnBpcGUnO1xuXG5leHBvcnQgY29uc3QgUGlwZXMgPSBbXG5cdFRpdGxlQ2FzZVBpcGUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbmltcG9ydCB7XG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG59IGZyb20gJy4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBXZWVrZGF5TGFiZWxzQ29uZmlnLCBNb250aExhYmVsc0NvbmZpZyB9IGZyb20gJy4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHRQaXBlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0UGlwZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRcdG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdENhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHFCQUFhLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDO0FBQ3pELHFCQUFhLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO0FBQ3ZELHFCQUFhLHNCQUFzQixHQUFHLHdCQUF3Qjs7Ozs7Ozs7c0JDUW5DLEVBQUU7Ozs7Ozs7SUFHNUIsa0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsSUFBYTtRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLGdCQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDL0I7UUFFRCxxQkFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFFRCxxQkFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbkgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUM7UUFFcEMsZ0JBQVcsY0FBYyxFQUFFO0tBQzNCOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFFRCx5Q0FBZTs7Ozs7SUFBZixVQUFnQixJQUFVLEVBQUUsS0FBZ0I7UUFDM0MsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNwRTs7Ozs7O0lBRUQsMENBQWdCOzs7OztJQUFoQixVQUFpQixJQUFVLEVBQUUsS0FBZ0I7UUFDNUMscUJBQU0sWUFBWSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hDLHFCQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUscUJBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoRSxPQUFPO1lBQ04sTUFBTSxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDaEUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDL0QsS0FBSyxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7U0FDOUQsQ0FBQztLQUNGOzs7Ozs7SUFFRCxnREFBc0I7Ozs7O0lBQXRCLFVBQXVCLElBQXVCLEVBQUUsS0FBZ0I7UUFBekMscUJBQUEsRUFBQSxXQUFpQixJQUFJLEVBQUU7UUFDN0MscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBELElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN2RDs7Z0JBNURELFVBQVU7OzBCQVZYOzs7Ozs7O0FDQUEscUJBR2EsK0JBQStCLEdBQUc7SUFDOUMsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztDQUNMLENBQUM7QUFFRixxQkFBYSw2QkFBNkIsR0FBRztJQUM1QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDVixDQUFDO0FBRUYscUJBQWEsdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQXNCLGVBQWUsQ0FBQyxDQUFDO0FBQ2hHLHFCQUFhLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFvQixhQUFhLENBQUM7Ozs7OztBQzdCekY7SUFtRkMsMkJBQ3VDLGlCQUFpRCxFQUMvQyxtQkFBcUQsRUFDckY7NkZBRitFO21HQUNNO1FBRHZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7UUFDL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQztRQUNyRixvQkFBZSxHQUFmLGVBQWU7MEJBWkQsSUFBSSxZQUFZLEVBQUU7bUNBRVosbUJBQW1CO2tDQUNwQixrQkFBa0I7c0NBQ2Qsc0JBQXNCOzBCQUUxQixtQkFBbUI7MkJBQzFCLEVBQUU7S0FNbkI7Ozs7SUFFSixvQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxxQkFBTSxZQUFZLEdBQUcsT0FBTyxvQkFBaUIsT0FBTyxpQkFBYyxZQUFZLEdBQUcsT0FBTyxtQkFBZ0IsSUFBSSxDQUFDO1FBRTdHLElBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVc7WUFDdkMsWUFBWTtZQUNaLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQ2hGLEVBQUU7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDekI7S0FDRDs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtRQUNsQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFNUUsUUFBUSxJQUFJLENBQUMsVUFBVTtZQUN0QixLQUFLLG1CQUFtQjtnQkFDdkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELE1BQU07WUFDUCxLQUFLLGtCQUFrQjtnQkFDdEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDUCxLQUFLLHNCQUFzQjtnQkFDMUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU07U0FDUDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCO1FBQzVCLHFCQUFNLEtBQUssR0FBRyxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFaEYscUJBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELHFCQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzRSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR2xDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCw2Q0FBaUI7OztJQUFqQjtRQUNDLFFBQVEsSUFBSSxDQUFDLFVBQVU7WUFDdEIsS0FBSyxtQkFBbUI7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RHLE1BQU07WUFDUCxLQUFLLGtCQUFrQjtnQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1AsS0FBSyxzQkFBc0I7Z0JBQzFCLHFCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFNLFNBQVMsWUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFFLENBQUM7Z0JBQ3RELE1BQU07U0FDUDtLQUNEOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxJQUFVO1FBQ2xCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLG1CQUFtQixDQUFDO1FBRXpELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNEOztnQkFsSkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsc3lDQW1DVjtvQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0RBZ0JFLE1BQU0sU0FBQyxxQkFBcUI7Z0RBQzVCLE1BQU0sU0FBQyx1QkFBdUI7Z0JBMUR4QixlQUFlOzs7K0JBMkN0QixLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLE1BQU07OzRCQTFFUjs7Ozs7OztBQ0FBOzswQkFrQ3dCLElBQUksWUFBWSxFQUFFO3FCQUUxQixFQUFFOzRCQUNLLENBQUMsQ0FBQzt1QkFDUCxDQUFDLENBQUM7Ozs7O0lBRW5CLDRDQUFROzs7SUFBUjtRQUNDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3JDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxxQkFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdELHFCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDL0QscUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25GLHFCQUFNLFlBQVksR0FBRyxhQUFhLFlBQVksSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RixxQkFBTSxVQUFVLEdBQUcsWUFBWSxHQUFHLFdBQVcsSUFBSSxZQUFZLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUVqRixJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3Rjs7Ozs7O0lBRUQsNENBQVE7Ozs7O0lBQVIsVUFBUyxLQUFpQixFQUFFLElBQVk7UUFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLHFCQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuQzs7OztJQUVPLCtDQUFXOzs7O1FBQ2xCLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakQsS0FBSyxxQkFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Z0JBaEU5QixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHVmQWNWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OytCQUVDLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxNQUFNOztvQ0FsQ1I7Ozs7Ozs7O0lDMkRDLGdDQUMwQyxtQkFBcUQsRUFDdEY7bUdBRHNGO1FBQXJELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBa0M7UUFDdEYsb0JBQWUsR0FBZixlQUFlOzZCQVRzQiwrQkFBK0I7MEJBQ3RELElBQUksWUFBWSxFQUFFO3FCQUVuQixFQUFFOzJCQUNILENBQUMsQ0FBQztLQU1uQjs7OztJQUVKLHlDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7S0FDcEU7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQXlCQztRQXhCQSxxQkFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNyRSxxQkFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNqRSxxQkFBTSxZQUFZLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ25FLE9BQU8sZUFBWSxZQUFZO1lBQy9CLE9BQU8sZUFBWSxhQUFhO1NBQ2hDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixxQkFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU1RyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFekUscUJBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLG1CQUFtQixFQUFFO1lBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkU7YUFBTSxJQUFJLGlCQUFpQixJQUFJLFlBQVksRUFBRTtZQUM3QyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTixPQUFPO1NBQ1A7UUFFRCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLHFCQUFLLEdBQUcsSUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUM1Rzs7Ozs7O0lBRUQseUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFpQixFQUFFLEdBQVE7UUFDbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLHFCQUFJLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0MsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2hCLHFCQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNyRjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BFOzs7Ozs7SUFFTywyQ0FBVTs7Ozs7Y0FBQyxPQUFzQixFQUFFLElBQVk7UUFDdEQscUJBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUssSUFBSSxrQkFBZSxDQUFDLENBQUM7UUFDckQscUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUssSUFBSSxtQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZELHFCQUFNLFlBQVksR0FBRyxPQUFPLFlBQVksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckUscUJBQU0sYUFBYSxHQUFHLFFBQVEsWUFBWSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RSxPQUFPLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxLQUFLLGFBQWEsQ0FBQzs7Ozs7SUFHakQsK0NBQWM7Ozs7UUFDckIscUJBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IscUJBQU0sZUFBZSxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FDaEQsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUMxQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDVixDQUFDO1FBRUYsT0FBTyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7O0lBR3pDLCtDQUFjOzs7OztjQUFDLEdBQVEsRUFBRSxLQUFtQjtRQUNuRCxxQkFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUU5QixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUN2RDtRQUVELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Z0JBcEh4QyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDI1QkF5QlY7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dEQWFFLE1BQU0sU0FBQyx1QkFBdUI7Z0JBN0N4QixlQUFlOzs7K0JBa0N0QixLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLE1BQU07O2lDQXJEUjs7Ozs7OztBQ0FBO0lBOENDLCtCQUN1QyxpQkFBaUQ7NkZBQUE7UUFBakQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFnQzsyQkFSOUMsNkJBQTZCOzBCQUNoRCxJQUFJLFlBQVksRUFBRTs2QkFFbEIsQ0FBQyxDQUFDO3VCQUNSLEVBQUU7c0JBQ2MsRUFBRTtLQUkvQjs7Ozs7SUFFSiwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMscUJBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUM3RCxxQkFBTSxXQUFXLEdBQUcsWUFBWSxZQUFZLElBQUksR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkYscUJBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEgscUJBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWpHLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5RSxJQUFJLE9BQU8saUJBQWM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Q7Ozs7OztJQUVELHdDQUFROzs7OztJQUFSLFVBQVMsS0FBaUIsRUFBRSxJQUFZO1FBQ3ZDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixxQkFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DOztnQkF4REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSx1aEJBY1Y7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dEQVlFLE1BQU0sU0FBQyxxQkFBcUI7OzsrQkFWN0IsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7Z0NBeENSOzs7Ozs7O0FDQUEscUJBWWEsVUFBVSxHQUFHO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtDQUNyQjs7Ozs7O0FDakJELHFCQUVhLFFBQVEsR0FBRztJQUN2QixlQUFlO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7QUNLRCx1QkFBdUIsSUFBWTtJQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUVELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDN0Q7Ozs7Ozs7Ozs7Ozs7SUFTQyxpQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUN4QixJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUN4QyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25FOztnQkFSRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzt3QkF0QnpCOzs7Ozs7O0FDQUEscUJBRWEsS0FBSyxHQUFHO0lBQ3BCLGFBQWE7Q0FDYjs7Ozs7O0FDSkQsU0E4QmdELCtCQUErQixPQUNqQyw2QkFBNkI7Ozs7Ozs7OztJQUluRSx1QkFBUTs7Ozs7SUFBZixVQUNDLGFBQWtDLEVBQ2xDLFdBQThCO1FBRTlCLE9BQU87WUFDTixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1YsZUFBZTtnQkFDZixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUM3RCxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3pEO1NBQ0QsQ0FBQztLQUNGOztnQkEvQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixVQUFVO3dCQUNWLEtBQUs7cUJBQ0w7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBQ1YsS0FBSztxQkFDTDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLElBQWlDLEVBQUU7d0JBQy9FLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsSUFBK0IsRUFBRTtxQkFDM0U7aUJBQ0Q7O3lCQWpDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
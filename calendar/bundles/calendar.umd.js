(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@acpaas-ui/js-date-utils'), require('lodash-es'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('calendar', ['exports', '@angular/core', '@acpaas-ui/js-date-utils', 'lodash-es', '@angular/common'], factory) :
    (factory((global.calendar = {}),global.ng.core,null,null,global.ng.common));
}(this, (function (exports,core,jsDateUtils,lodashEs,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
    var /** @type {?} */ CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
    var /** @type {?} */ CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarService = (function () {
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
                var /** @type {?} */ generatedMonth = jsDateUtils.DateGenerator.generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
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
                return jsDateUtils.DateGenerator.generateRange(date, range, { startOfWeek: 1 });
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
                var /** @type {?} */ before = jsDateUtils.DateHelper.updateMonth(date, date.getMonth() - 1);
                var /** @type {?} */ after = jsDateUtils.DateHelper.updateMonth(date, date.getMonth() + 1);
                return {
                    before: jsDateUtils.DateGenerator.generateRange(before, range, rangeOptions),
                    current: jsDateUtils.DateGenerator.generateRange(date, range, rangeOptions),
                    after: jsDateUtils.DateGenerator.generateRange(after, range, rangeOptions),
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
                if (date === void 0) {
                    date = new Date();
                }
                var /** @type {?} */ dateRange = this.getRangeForDate(date, range);
                if (jsDateUtils.DateHelper.dateOutOfRange(date, dateRange)) {
                    return date;
                }
                return jsDateUtils.DateHelper.closestDateForRange(date, dateRange);
            };
        CalendarService.decorators = [
            { type: core.Injectable },
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
    var /** @type {?} */ CALENDAR_WEEKDAY_LABELS = new core.InjectionToken('weekdayLabels');
    var /** @type {?} */ CALENDAR_MONTH_LABELS = new core.InjectionToken('monthLabels');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarComponent = (function () {
        function CalendarComponent(moduleMonthLabels, moduleWeekdayLabels, calendarService) {
            if (moduleMonthLabels === void 0) {
                moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
            }
            if (moduleWeekdayLabels === void 0) {
                moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
            }
            this.moduleMonthLabels = moduleMonthLabels;
            this.moduleWeekdayLabels = moduleWeekdayLabels;
            this.calendarService = calendarService;
            this.selectDate = new core.EventEmitter();
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
                    !jsDateUtils.DateHelper.datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)) {
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
                if (factor === void 0) {
                    factor = 0;
                }
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
                if (factor === void 0) {
                    factor = 1;
                }
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
            { type: core.Component, args: [{
                        selector: 'aui-calendar',
                        template: "<div class=\"m-datepicker__nav\">\n    <button tabindex=\"-1\" type=\"button\" aria-label=\"vorige maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(-1)\">\n        <i class=\"fa fa-angle-left\"></i>\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" class=\"m-datepicker__title a-button\" (click)=\"switchView()\">\n        {{ headerLabel | titlecase }}\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" aria-label=\"volgende maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(1)\">\n        <i class=\"fa fa-angle-right\"></i>\n    </button>\n</div>\n\n<aui-calendar-month\n    *ngIf=\"activeView === CALENDAR_VIEW_MONTH\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [range]=\"range\"\n    [weekdayLabels]=\"weekdayLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-month>\n<aui-calendar-year\n    *ngIf=\"activeView === CALENDAR_VIEW_YEAR\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [monthLabels]=\"monthLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-year>\n<aui-calendar-decennia\n    *ngIf=\"activeView === CALENDAR_VIEW_DECENNIA\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-decennia>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        CalendarComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CALENDAR_MONTH_LABELS,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
                { type: CalendarService }
            ];
        };
        CalendarComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            range: [{ type: core.Input }],
            weekdayLabels: [{ type: core.Input }],
            monthLabels: [{ type: core.Input }],
            selectDate: [{ type: core.Output }]
        };
        return CalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarDecenniaComponent = (function () {
        function CalendarDecenniaComponent() {
            this.selectDate = new core.EventEmitter();
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
                var /** @type {?} */ currentValue = lodashEs.get(changes, 'activeDate.currentValue');
                var /** @type {?} */ previousValue = lodashEs.get(changes, 'activeDate.previousValue');
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
                this.years = lodashEs.chunk(years, 4);
            };
        CalendarDecenniaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-calendar-decennia',
                        template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of years\">\n            <td *ngFor=\"let year of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': year === current,\n                    'is-selected': year === selectedYear\n                }\" (click)=\"pickDate($event, year)\">\n                    {{ year }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CalendarDecenniaComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            selectDate: [{ type: core.Output }]
        };
        return CalendarDecenniaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarMonthComponent = (function () {
        function CalendarMonthComponent(moduleWeekdayLabels, calendarService) {
            if (moduleWeekdayLabels === void 0) {
                moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
            }
            this.moduleWeekdayLabels = moduleWeekdayLabels;
            this.calendarService = calendarService;
            this.weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
            this.selectDate = new core.EventEmitter();
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
                var /** @type {?} */ monthChanged = activeDateChanged && !jsDateUtils.DateHelper.datesAreEqual([
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
                    selectedDate = jsDateUtils.DateHelper.updateMonth(selectedDate, selectedDate.getMonth() + month);
                }
                this.selectDate.emit(jsDateUtils.DateHelper.updateDate(selectedDate, day.date));
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
                var /** @type {?} */ current = lodashEs.get(changes, prop + ".currentValue");
                var /** @type {?} */ previous = lodashEs.get(changes, prop + ".previousValue");
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
                var /** @type {?} */ monthHasChanged = !jsDateUtils.DateHelper.datesAreEqual([this.activeDate, current], ['M', 'Y']);
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
            { type: core.Component, args: [{
                        selector: 'aui-calendar-month',
                        template: "<table>\n    <thead>\n        <tr class=\"m-datepicker__days\">\n            <th *ngFor=\"let day of weekdayLabels\" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>\n        </tr>\n    </thead>\n\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let week of dates\">\n            <td *ngFor=\"let day of week\">\n                <button\n                    tabindex=\"0\"\n                    type=\"button\"\n                    [ngClass]=\"{\n                        'is-faded': !day.date || day.padding,\n                        'is-selected': !day.padding && day.date === selectedDay,\n                        'is-current': !day.padding && day.date === current\n                    }\"\n                    (click)=\"pickDate($event, day)\"\n                    [disabled]=\"!day.available\"\n                >{{ day.date }}</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        CalendarMonthComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
                { type: CalendarService }
            ];
        };
        CalendarMonthComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            range: [{ type: core.Input }],
            weekdayLabels: [{ type: core.Input }],
            selectDate: [{ type: core.Output }]
        };
        return CalendarMonthComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarYearComponent = (function () {
        function CalendarYearComponent(moduleMonthLabels) {
            if (moduleMonthLabels === void 0) {
                moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
            }
            this.moduleMonthLabels = moduleMonthLabels;
            this.monthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
            this.selectDate = new core.EventEmitter();
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
                var /** @type {?} */ currentValue = lodashEs.get(changes, 'activeDate.currentValue');
                var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
                var /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
                var /** @type {?} */ current = new Date();
                this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
                this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
                if (changes["monthLabels"]) {
                    this.monthLabels = this.monthLabels || this.moduleMonthLabels;
                    this.months = lodashEs.chunk(this.monthLabels, 4);
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
                selectedDate = jsDateUtils.DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));
                this.selectDate.emit(selectedDate);
            };
        CalendarYearComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-calendar-year',
                        template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of months\">\n            <td *ngFor=\"let month of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': month === current,\n                    'is-selected': month === monthLabels[selectedMonth]\n                }\" (click)=\"pickDate($event, month)\">\n                    {{ month | titlecase }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        CalendarYearComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CALENDAR_MONTH_LABELS,] }] }
            ];
        };
        CalendarYearComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            monthLabels: [{ type: core.Input }],
            selectDate: [{ type: core.Output }]
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
    var TitleCasePipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'titlecase' },] },
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
    var CalendarModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
    exports.CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
    exports.CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
    exports.CalendarService = CalendarService;
    exports.CalendarComponent = CalendarComponent;
    exports.CalendarMonthComponent = CalendarMonthComponent;
    exports.CalendarYearComponent = CalendarYearComponent;
    exports.CalendarDecenniaComponent = CalendarDecenniaComponent;
    exports.CALENDAR_DEFAULT_MONTH_LABELS = CALENDAR_DEFAULT_MONTH_LABELS;
    exports.CALENDAR_DEFAULT_WEEKDAY_LABELS = CALENDAR_DEFAULT_WEEKDAY_LABELS;
    exports.CALENDAR_MONTH_LABELS = CALENDAR_MONTH_LABELS;
    exports.CALENDAR_WEEKDAY_LABELS = CALENDAR_WEEKDAY_LABELS;
    exports.CalendarModule = CalendarModule;
    exports.TitleCasePipe = TitleCasePipe;
    exports.ɵa = Components;
    exports.ɵb = Pipes;
    exports.ɵc = Services;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvdHlwZXMvY2FsZW5kYXIudHlwZXMudHMiLG51bGwsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5jb25mLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jb21wb25lbnRzL2RlY2VubmlhL2RlY2VubmlhLmNvbXBvbmVudC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy95ZWFyL3llYXIuY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvcGlwZXMvaW5kZXgudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfTU9OVEggPSAnQ0FMRU5EQVJfVklFV19NT05USCc7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ZRUFSID0gJ0NBTEVOREFSX1ZJRVdfWUVBUic7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfVklFV19ERUNFTk5JQSA9ICdDQUxFTkRBUl9WSUVXX0RFQ0VOTklBJztcblxuZXhwb3J0IHR5cGUgV2Vla2RheUxhYmVsc0NvbmZpZyA9IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgTW9udGhMYWJlbHNDb25maWcgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyUmVzdWx0IHtcblx0ZGF0ZTogRGF0ZTtcblx0Y29tcGxldGU6IEJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlTWFwIHtcblx0YmVmb3JlOiBudW1iZXJbXTtcblx0Y3VycmVudDogbnVtYmVyW107XG5cdGFmdGVyOiBudW1iZXJbXTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IERhdGVHZW5lcmF0b3IsIERhdGVIZWxwZXIsIERheSwgTW9udGgsIERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IERhdGVSYW5nZU1hcCB9IGZyb20gJy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb250aE1hcCB7XG5cdFtrZXk6IG51bWJlcl06IE1vbnRoO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcblx0cHVibGljIG1vbnRoczogTW9udGhNYXAgPSB7fTtcblx0cHJpdmF0ZSBjdXJyZW50WWVhcjogbnVtYmVyO1xuXG5cdGdldE1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBNb250aCB7XG5cdFx0aWYgKHllYXIpIHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRZZWFyICE9PSB5ZWFyKSB7XG5cdFx0XHRcdHRoaXMubW9udGhzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY3VycmVudFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1vbnRocy5oYXNPd25Qcm9wZXJ0eShtb250aCkpIHtcblx0XHRcdHJldHVybiBbLi4udGhpcy5tb250aHNbbW9udGhdXTtcblx0XHR9XG5cblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRkYXRlLnNldE1vbnRoKG1vbnRoLCAxKTtcblxuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdlbmVyYXRlZE1vbnRoID0gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZU1vbnRoKGRhdGUsIHsgc3RhcnRPZldlZWs6IDEsIHBhZGRpbmc6IHRydWUsIGdlbmVyYXRlUGFkZGluZzogdHJ1ZSB9KTtcblxuXHRcdHRoaXMubW9udGhzW21vbnRoXSA9IGdlbmVyYXRlZE1vbnRoO1xuXG5cdFx0cmV0dXJuIFsuLi5nZW5lcmF0ZWRNb250aF07XG5cdH1cblxuXHRnZXRNb250aEZvckRhdGUoZGF0ZTogRGF0ZSk6IE1vbnRoIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNb250aChkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG5cdH1cblxuXHRnZXRSYW5nZUZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGRhdGUsIHJhbmdlLCB7IHN0YXJ0T2ZXZWVrOiAxIH0pO1xuXHR9XG5cblx0Z2V0UmFuZ2VzRm9yRGF0ZShkYXRlOiBEYXRlLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZVJhbmdlTWFwIHtcblx0XHRjb25zdCByYW5nZU9wdGlvbnMgPSB7IHN0YXJ0T2ZXZWVrOiAxIH07XG5cdFx0Y29uc3QgYmVmb3JlID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChkYXRlLCBkYXRlLmdldE1vbnRoKCkgLSAxKTtcblx0XHRjb25zdCBhZnRlciA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVmb3JlOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYmVmb3JlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGN1cnJlbnQ6IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHRcdGFmdGVyOiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoYWZ0ZXIsIHJhbmdlLCByYW5nZU9wdGlvbnMpLFxuXHRcdH07XG5cdH1cblxuXHRnZXRDbG9zZXN0RGF0ZUZvclJhbmdlKGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpLCByYW5nZTogRGF0ZVJhbmdlKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZVJhbmdlID0gdGhpcy5nZXRSYW5nZUZvckRhdGUoZGF0ZSwgcmFuZ2UpO1xuXG5cdFx0aWYgKERhdGVIZWxwZXIuZGF0ZU91dE9mUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKSkge1xuXHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuY2xvc2VzdERhdGVGb3JSYW5nZShkYXRlLCBkYXRlUmFuZ2UpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla2RheUxhYmVsc0NvbmZpZywgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgPSBbXG5cdCdNb24nLFxuXHQnVHVlJyxcblx0J1dlZCcsXG5cdCdUaHUnLFxuXHQnRnJpJyxcblx0J1NhdCcsXG5cdCdTdW4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTID0gW1xuXHQnSmFudWFyeScsXG5cdCdGZWJydWFyeScsXG5cdCdNYXJjaCcsXG5cdCdBcHJpbCcsXG5cdCdNYXknLFxuXHQnSnVuZScsXG5cdCdKdWx5Jyxcblx0J0F1Z3VzdCcsXG5cdCdTZXB0ZW1iZXInLFxuXHQnT2N0b2JlcicsXG5cdCdOb3ZlbWJlcicsXG5cdCdEZWNlbWJlcicsXG5dO1xuXG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2Vla2RheUxhYmVsc0NvbmZpZz4oJ3dlZWtkYXlMYWJlbHMnKTtcbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9NT05USF9MQUJFTFMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9udGhMYWJlbHNDb25maWc+KCdtb250aExhYmVscycpO1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2UsIERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMU1xufSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7XG5cdFdlZWtkYXlMYWJlbHNDb25maWcsXG5cdE1vbnRoTGFiZWxzQ29uZmlnLFxuXHRDQUxFTkRBUl9WSUVXX01PTlRILFxuXHRDQUxFTkRBUl9WSUVXX1lFQVIsXG5cdENBTEVOREFSX1ZJRVdfREVDRU5OSUFcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fbmF2XCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b3JpZ2UgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoLTEpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibS1kYXRlcGlja2VyX190aXRsZSBhLWJ1dHRvblwiIChjbGljayk9XCJzd2l0Y2hWaWV3KClcIj5cbiAgICAgICAge3sgaGVhZGVyTGFiZWwgfCB0aXRsZWNhc2UgfX1cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b2xnZW5kZSBtYWFuZFwiIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwidXBkYXRlQWN0aXZlRGF0ZSgxKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxhdWktY2FsZW5kYXItbW9udGhcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEhcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbcmFuZ2VdPVwicmFuZ2VcIlxuICAgIFt3ZWVrZGF5TGFiZWxzXT1cIndlZWtkYXlMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLW1vbnRoPlxuPGF1aS1jYWxlbmRhci15ZWFyXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX1lFQVJcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbbW9udGhMYWJlbHNdPVwibW9udGhMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLXllYXI+XG48YXVpLWNhbGVuZGFyLWRlY2VubmlhXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXItZGVjZW5uaWE+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcmFuZ2U6IERhdGVSYW5nZTtcblx0QElucHV0KCkgd2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZztcblx0QElucHV0KCkgbW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19NT05USCA9IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX1lFQVIgPSBDQUxFTkRBUl9WSUVXX1lFQVI7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBID0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQTtcblx0cHVibGljIGFjdGl2ZURhdGU6IERhdGU7XG5cdHB1YmxpYyBhY3RpdmVWaWV3OiBzdHJpbmcgPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgaGVhZGVyTGFiZWwgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHVibGljIG1vZHVsZU1vbnRoTGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdFx0QEluamVjdChDQUxFTkRBUl9XRUVLREFZX0xBQkVMUykgcHVibGljIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdFx0dGhpcy5tb250aExhYmVscyA9IHRoaXMubW9udGhMYWJlbHMgfHwgdGhpcy5tb2R1bGVNb250aExhYmVscztcblx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDbG9zZXN0RGF0ZUZvclJhbmdlKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5yYW5nZSk7XG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGNoYW5nZXMuc2VsZWN0ZWREYXRlICYmIGNoYW5nZXMuc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZSA/IGNoYW5nZXMuc2VsZWN0ZWREYXRlIDogbnVsbDtcblxuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLm1vbnRoTGFiZWxzICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0c2VsZWN0ZWREYXRlICYmXG5cdFx0XHQhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKHNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUsIHNlbGVjdGVkRGF0ZS5wcmV2aW91c1ZhbHVlKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQWN0aXZlRGF0ZShmYWN0b3I6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZSA/IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRNb250aChhY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGZhY3Rvcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArICgxMiAqIGZhY3RvcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZURhdGUgPSBhY3RpdmVEYXRlO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcoZmFjdG9yOiBudW1iZXIgPSAxKTogdm9pZCB7XG5cdFx0Y29uc3Qgdmlld3MgPSBbQ0FMRU5EQVJfVklFV19NT05USCwgQ0FMRU5EQVJfVklFV19ZRUFSLCBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXTtcblxuXHRcdGNvbnN0IGN1cnJWaWV3ID0gdmlld3MuaW5kZXhPZih0aGlzLmFjdGl2ZVZpZXcpO1xuXHRcdGxldCBuZXh0VmlldyA9IChjdXJyVmlldyArIGZhY3RvcikgPj0gdmlld3MubGVuZ3RoID8gMCA6IGN1cnJWaWV3ICsgZmFjdG9yO1xuXHRcdG5leHRWaWV3ID0gbmV4dFZpZXcgPCAwID8gdmlld3MubGVuZ3RoIC0gMSA6IG5leHRWaWV3O1xuXG5cdFx0dGhpcy5hY3RpdmVWaWV3ID0gdmlld3NbbmV4dFZpZXddO1xuXG5cdFx0Ly8gcmVzZXQgYWN0aXZlRGF0ZSB3aGVuIHJldHVybmluZyB0byBtb250aCB2aWV3IHdpdGhvdXQgbW9kZWwgdXBkYXRlXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlICYmIG5leHRWaWV3ID09PSAwICYmIGZhY3RvciA9PT0gMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0dXBkYXRlSGVhZGVyTGFiZWwoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IHRoaXMubW9udGhMYWJlbHNbdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCldICsgJyAnICsgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX1lFQVI6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBTdHJpbmcodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0Y29uc3Qgc3RhcnRZZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBgJHtzdGFydFllYXJ9IC0gJHtzdGFydFllYXIgKyAxMX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwaWNrRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcGxldGUgPSB0aGlzLmFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdCh7XG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0Y29tcGxldGU6IGNvbXBsZXRlLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFjb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zd2l0Y2hWaWV3KC0xKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLWRlY2VubmlhJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHllYXJzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHllYXIgb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogeWVhciA9PT0gY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogeWVhciA9PT0gc2VsZWN0ZWRZZWFyXG4gICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIHllYXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZWNlbm5pYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgeWVhcnMgPSBbXTtcblx0cHVibGljIHNlbGVjdGVkWWVhciA9IC0xO1xuXHRwdWJsaWMgY3VycmVudCA9IC0xO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnQuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBnZXQoY2hhbmdlcywgJ2FjdGl2ZURhdGUuY3VycmVudFZhbHVlJyk7XG5cdFx0Y29uc3QgcHJldmlvdXNWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlJyk7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudFZhbHVlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0XHRjb25zdCBwcmV2aW91c1llYXIgPSBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHByZXZpb3VzVmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IG91dE9mUmFuZ2UgPSBwcmV2aW91c1llYXIgPiBjdXJyZW50WWVhciB8fCBwcmV2aW91c1llYXIgKyAxMSA8IGN1cnJlbnRZZWFyO1xuXG5cdFx0aWYgKGN1cnJlbnRZZWFyID49IDAgJiYgb3V0T2ZSYW5nZSkge1xuXHRcdFx0dGhpcy51cGRhdGVZZWFycygpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZERhdGUgaW5zdGFuY2VvZiBEYXRlID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHR9XG5cblx0cGlja0RhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGU6IG51bWJlcikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHRzZWxlY3RlZERhdGUuc2V0RnVsbFllYXIoZGF0ZSk7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChzZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVZZWFycygpOiB2b2lkIHtcblx0XHRjb25zdCB5ZWFycyA9IFtdO1xuXHRcdGNvbnN0IGFjdGl2ZVllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRcdGZvciAobGV0IGkgPSBhY3RpdmVZZWFyOyBpIDwgYWN0aXZlWWVhciArIDEyOyBpICs9IDEpIHtcblx0XHRcdHllYXJzLnB1c2goaSk7XG5cdFx0fVxuXG5cdFx0dGhpcy55ZWFycyA9IGNodW5rKHllYXJzLCA0KTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IERheSwgTW9udGgsIERhdGVSYW5nZSwgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVSYW5nZU1hcCwgV2Vla2RheUxhYmVsc0NvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLW1vbnRoJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2RheXNcIj5cbiAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlMYWJlbHNcIiB0aXRsZT17e2RheX19Pnt7IGRheSB8IHNsaWNlOjA6MiB8IHRpdGxlY2FzZSB9fTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cblxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGRhdGVzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWZhZGVkJzogIWRheS5kYXRlIHx8IGRheS5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBzZWxlY3RlZERheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogIWRheS5wYWRkaW5nICYmIGRheS5kYXRlID09PSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBkYXkpXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkYXkuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICA+e3sgZGF5LmRhdGUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSB3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnID0gQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGRhdGVzOiBNb250aCA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXkgPSAtMTtcblx0cHVibGljIGN1cnJlbnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX1dFRUtEQVlfTEFCRUxTKSBwcml2YXRlIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnc2VsZWN0ZWREYXRlJyk7XG5cdFx0Y29uc3QgYWN0aXZlRGF0ZUNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoY2hhbmdlcywgJ2FjdGl2ZURhdGUnKTtcblx0XHRjb25zdCBtb250aENoYW5nZWQgPSBhY3RpdmVEYXRlQ2hhbmdlZCAmJiAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFtcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUsXG5cdFx0XHRjaGFuZ2VzLmFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZSxcblx0XHRdLCAnTScpO1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF5Q2hhbmdlZCA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50RGF0ZSgpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBzZWxlY3RlZERheUNoYW5nZWQgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXREYXRlKCkgOiAtMTtcblxuXHRcdGxldCBuZXdEYXRlcyA9IFtdO1xuXG5cdFx0aWYgKHNlbGVjdGVkRGF0ZUNoYW5nZWQpIHtcblx0XHRcdG5ld0RhdGVzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhGb3JEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0XHR9IGVsc2UgaWYgKGFjdGl2ZURhdGVDaGFuZ2VkICYmIG1vbnRoQ2hhbmdlZCkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VzRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ld0RhdGVzLm1hcCh3ZWVrID0+IHdlZWsubWFwKGRheSA9PiAoey4uLmRheSwgYXZhaWxhYmxlOiB0aGlzLmRheUlzQXZhaWxhYmxlKGRheSwgcmFuZ2UpIH0pKSk7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgbW9kYWwgZG9lc24ndCBjbG9zZVxuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGNvbnN0IG1vbnRoID0gZGF5LmRhdGUgPiAyMCA/IC0xIDogMTtcblx0XHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChEYXRlSGVscGVyLnVwZGF0ZURhdGUoc2VsZWN0ZWREYXRlLCBkYXkuZGF0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIHByb3A6IHN0cmluZyk6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0uY3VycmVudFZhbHVlYCk7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0ucHJldmlvdXNWYWx1ZWApO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudC52YWx1ZU9mKCkgOiAwO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91cy52YWx1ZU9mKCkgOiAwO1xuXG5cdFx0cmV0dXJuICEhY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZSAhPT0gcHJldmlvdXNWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudERhdGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBtb250aEhhc0NoYW5nZWQgPSAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFxuXHRcdFx0W3RoaXMuYWN0aXZlRGF0ZSwgY3VycmVudF0sXG5cdFx0XHRbJ00nLCAnWSddXG5cdFx0KTtcblxuXHRcdHJldHVybiBtb250aEhhc0NoYW5nZWQgPyAtMSA6IGN1cnJlbnQuZ2V0RGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBkYXlJc0F2YWlsYWJsZShkYXk6IERheSwgcmFuZ2U6IERhdGVSYW5nZU1hcCk6IEJvb2xlYW4ge1xuXHRcdGxldCBkYXRlUmFuZ2UgPSByYW5nZS5jdXJyZW50O1xuXG5cdFx0aWYgKGRheS5wYWRkaW5nKSB7XG5cdFx0XHRkYXRlUmFuZ2UgPSBkYXkuZGF0ZSA+IDIwID8gcmFuZ2UuYmVmb3JlIDogcmFuZ2UuYWZ0ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGVSYW5nZS5pbmRleE9mKGRheS5kYXRlKSA8IDA7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX01PTlRIX0xBQkVMUywgQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXIteWVhcicsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiBtb250aHNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogbW9udGggPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IG1vbnRoID09PSBtb250aExhYmVsc1tzZWxlY3RlZE1vbnRoXVxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBtb250aClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGggfCB0aXRsZWNhc2UgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdGVkTW9udGggPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAnJztcblx0cHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nW10+ID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aENoYW5nZWQgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblxuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRZZWFyID09PSBjdXJyZW50LmdldEZ1bGxZZWFyKCkgPyB0aGlzLm1vbnRoTGFiZWxzW2N1cnJlbnQuZ2V0TW9udGgoKV0gOiAnJztcblxuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkTW9udGhDaGFuZ2VkID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA6IC0xO1xuXG5cdFx0aWYgKGNoYW5nZXMubW9udGhMYWJlbHMpIHtcblx0XHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0XHR0aGlzLm1vbnRocyA9IGNodW5rKHRoaXMubW9udGhMYWJlbHMsIDQpO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBzdHJpbmcpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCB0aGlzLm1vbnRoTGFiZWxzLmluZGV4T2YoZGF0ZSkpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4veWVhci95ZWFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG5cdENhbGVuZGFyQ29tcG9uZW50LFxuXHRDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50LFxuXHRDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuXHRDYWxlbmRhclllYXJDb21wb25lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q2FsZW5kYXJDb21wb25lbnQsXG5cdENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQsXG5cdENhbGVuZGFyTW9udGhDb21wb25lbnQsXG5cdENhbGVuZGFyWWVhckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdENhbGVuZGFyU2VydmljZSxcbl07XG4iLCIvLyByZXBsYWNlIHdpdGggY29tbW9uIHRpdGxlY2FzZSBwaXBlIGluIGFuZ3VsYXIgNCwgbWluZCB0aGUgcmVnZXggd2l0aCBzcGVjaWFsIGNoYXJhY3RlcnMgKGUuZy4gw4PCqSlcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gdHJhbnNmb3JtIGEgc2luZ2xlIHdvcmQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuZnVuY3Rpb24gdGl0bGVDYXNlV29yZCh3b3JkOiBzdHJpbmcpIHtcbiAgaWYgKCF3b3JkKSB7XG5cdCAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuQFBpcGUoe25hbWU6ICd0aXRsZWNhc2UnfSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMvZykubWFwKHdvcmQgPT4gdGl0bGVDYXNlV29yZCh3b3JkKSkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnLi90aXRsZS1jYXNlLnBpcGUnO1xuXG5leHBvcnQgY29uc3QgUGlwZXMgPSBbXG5cdFRpdGxlQ2FzZVBpcGUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbmltcG9ydCB7XG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG59IGZyb20gJy4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBXZWVrZGF5TGFiZWxzQ29uZmlnLCBNb250aExhYmVsc0NvbmZpZyB9IGZyb20gJy4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHRQaXBlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0UGlwZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRcdG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdENhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXSwibmFtZXMiOlsiRGF0ZUdlbmVyYXRvciIsIkRhdGVIZWxwZXIiLCJJbmplY3RhYmxlIiwiSW5qZWN0aW9uVG9rZW4iLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkluamVjdCIsIklucHV0IiwiT3V0cHV0IiwiZ2V0IiwiY2h1bmsiLCJQaXBlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSx5QkFBYSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztBQUN6RCx5QkFBYSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztBQUN2RCx5QkFBYSxzQkFBc0IsR0FBRyx3QkFBd0I7O0lDSjlEOzs7Ozs7Ozs7Ozs7OztBQWNBLElBWU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxH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
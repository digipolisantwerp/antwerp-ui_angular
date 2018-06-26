(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/observable/timer'), require('rxjs/Subject'), require('rxjs/operators'), require('@acpaas-ui/js-date-utils'), require('hammerjs'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('agenda', ['exports', '@angular/core', 'rxjs/observable/timer', 'rxjs/Subject', 'rxjs/operators', '@acpaas-ui/js-date-utils', 'hammerjs', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.agenda = {}),global.ng.core,global.rxjs['observable/timer'],global.rxjs.Subject,global.rxjs.operators,null,null,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,core,timer,Subject,operators,jsDateUtils,Hammer,platformBrowser,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DEFAULT_WEEKDAY_LABELS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Firday',
        'Saturday',
    ];
    var /** @type {?} */ DEFAULT_MONTH_LABELS = [
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
    var /** @type {?} */ DEFAULT_MORE_LABEL = 'more';
    var /** @type {?} */ WEEKDAY_LABELS = new core.InjectionToken('weekdayLabels');
    var /** @type {?} */ MONTH_LABELS = new core.InjectionToken('monthLabels');
    var /** @type {?} */ MORE_LABEL = new core.InjectionToken('moreLabel');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthPipe = (function () {
        function MonthPipe(monthLabels) {
            if (monthLabels === void 0) {
                monthLabels = DEFAULT_MONTH_LABELS;
            }
            this.monthLabels = monthLabels;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        MonthPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ month = parseInt(value, 10);
                if (isNaN(month)) {
                    return null;
                }
                var /** @type {?} */ index = (month - 1).toString();
                return this.monthLabels[index.toString()] || DEFAULT_MONTH_LABELS[index.toString()];
            };
        MonthPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'monthPipe',
                    },] },
        ];
        /** @nocollapse */
        MonthPipe.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MONTH_LABELS,] }] }
            ];
        };
        return MonthPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WeekdayPipe = (function () {
        function WeekdayPipe(weekdayLabels) {
            if (weekdayLabels === void 0) {
                weekdayLabels = DEFAULT_WEEKDAY_LABELS;
            }
            this.weekdayLabels = weekdayLabels;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        WeekdayPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
            };
        WeekdayPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'weekdayPipe',
                    },] },
        ];
        /** @nocollapse */
        WeekdayPipe.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [WEEKDAY_LABELS,] }] }
            ];
        };
        return WeekdayPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Pipes = [
        MonthPipe,
        WeekdayPipe,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var DAYS = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
    };
    DAYS[DAYS.SUNDAY] = "SUNDAY";
    DAYS[DAYS.MONDAY] = "MONDAY";
    DAYS[DAYS.TUESDAY] = "TUESDAY";
    DAYS[DAYS.WEDNESDAY] = "WEDNESDAY";
    DAYS[DAYS.THURSDAY] = "THURSDAY";
    DAYS[DAYS.FRIDAY] = "FRIDAY";
    DAYS[DAYS.SATURDAY] = "SATURDAY";
    /** @enum {string} */
    var VIEWS = {
        DAY: 'DAY',
        WEEK: 'WEEK',
        MONTH: 'MONTH',
        YEAR: 'YEAR',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateHelperService = (function () {
        function DateHelperService() {
        }
        /**
         * @param {?} date
         * @param {?} startDayOfWeek
         * @param {?=} range
         * @return {?}
         */
        DateHelperService.prototype.getDaysForMonth = /**
         * @param {?} date
         * @param {?} startDayOfWeek
         * @param {?=} range
         * @return {?}
         */
            function (date, startDayOfWeek, range) {
                if (range === void 0) {
                    range = null;
                }
                var /** @type {?} */ firstDayOfMonth = this.getFirstWeekDayOfMonth(date, startDayOfWeek);
                var /** @type {?} */ lastDayOfMonth = this.getLastWeekDayOfMonth(date, startDayOfWeek);
                var /** @type {?} */ max = this.dateDiff(firstDayOfMonth, lastDayOfMonth);
                var /** @type {?} */ days = [
                    { date: firstDayOfMonth, highlights: this.getHighlights(range, firstDayOfMonth) },
                ];
                for (var /** @type {?} */ i = 0; i < max; i += 1) {
                    var /** @type {?} */ nextDay = this.getNextDay(days[i].date);
                    days.push({
                        highlights: this.getHighlights(range, nextDay),
                        date: nextDay,
                    });
                }
                return days;
            };
        /**
         * @param {?} range
         * @param {?} date
         * @return {?}
         */
        DateHelperService.prototype.getHighlights = /**
         * @param {?} range
         * @param {?} date
         * @return {?}
         */
            function (range, date) {
                var _this = this;
                if (!range) {
                    return '';
                }
                return Object.keys(range).filter(function (key) {
                    return _this.inRange(range[key], date);
                }).join(' ');
            };
        /**
         * @param {?} range
         * @param {?} date
         * @return {?}
         */
        DateHelperService.prototype.inRange = /**
         * @param {?} range
         * @param {?} date
         * @return {?}
         */
            function (range, date) {
                var _this = this;
                return range.some(function (item) {
                    if (Array.isArray(item)) {
                        return item.indexOf(date.getDay()) !== -1;
                    }
                    var /** @type {?} */ d = new Date(item);
                    if (!isNaN(d.getTime())) {
                        return _this.compareDates(d, date);
                    }
                });
            };
        /**
         * @param {?} days
         * @return {?}
         */
        DateHelperService.prototype.getWeeksForMonth = /**
         * @param {?} days
         * @return {?}
         */
            function (days) {
                var /** @type {?} */ numberOfWeeks = Math.round(days.length / 7);
                return Array(numberOfWeeks).fill(null).map(function (label, index) {
                    return days.slice(index * 7, (index + 1) * 7);
                });
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DateHelperService.prototype.getLastDateOfMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return new Date(date.getFullYear(), date.getMonth() + 1, 0);
            };
        /**
         * @param {?} date
         * @param {?} dayOfWeek
         * @param {?} orient
         * @return {?}
         */
        DateHelperService.prototype.moveToDayOfWeek = /**
         * @param {?} date
         * @param {?} dayOfWeek
         * @param {?} orient
         * @return {?}
         */
            function (date, dayOfWeek, orient) {
                var /** @type {?} */ diff = (dayOfWeek - date.getDay() + 7 * (orient || +1)) % 7;
                var /** @type {?} */ value = (diff === 0) ? diff += 7 * (orient || +1) : diff;
                var /** @type {?} */ d = new Date(date);
                return new Date(d.setDate(date.getDate() + value * 1));
            };
        /**
         * @param {?} date
         * @param {?} startOfWeek
         * @return {?}
         */
        DateHelperService.prototype.getFirstWeekDayOfMonth = /**
         * @param {?} date
         * @param {?} startOfWeek
         * @return {?}
         */
            function (date, startOfWeek) {
                var /** @type {?} */ firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                if (firstDayOfMonth.getDay() === Number(startOfWeek)) {
                    return firstDayOfMonth;
                }
                return this.moveToDayOfWeek(firstDayOfMonth, Number(startOfWeek), -1);
            };
        /**
         * @param {?} date
         * @param {?} startOfWeek
         * @return {?}
         */
        DateHelperService.prototype.getLastWeekDayOfMonth = /**
         * @param {?} date
         * @param {?} startOfWeek
         * @return {?}
         */
            function (date, startOfWeek) {
                var /** @type {?} */ endOfWeek = (startOfWeek === 0 ? 6 : startOfWeek - 1);
                var /** @type {?} */ lastDayOfMonth = this.getLastDateOfMonth(date);
                if (lastDayOfMonth.getDay() === endOfWeek) {
                    return lastDayOfMonth;
                }
                return this.moveToDayOfWeek(lastDayOfMonth, endOfWeek, 1);
            };
        /**
         * @param {?} today
         * @return {?}
         */
        DateHelperService.prototype.getNextDay = /**
         * @param {?} today
         * @return {?}
         */
            function (today) {
                var /** @type {?} */ tomorrow = new Date(today);
                tomorrow.setDate(today.getDate() + 1);
                return tomorrow;
            };
        /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
        DateHelperService.prototype.dateDiff = /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
            function (startDate, endDate) {
                // Compare based on date, not on time
                var /** @type {?} */ start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
                var /** @type {?} */ end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
                return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            };
        /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        DateHelperService.prototype.compareDates = /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
            function (date1, date2) {
                var /** @type {?} */ date1Year = date1.getFullYear();
                var /** @type {?} */ date1Month = date1.getMonth();
                var /** @type {?} */ date1Date = date1.getDate();
                var /** @type {?} */ date2Year = date2.getFullYear();
                var /** @type {?} */ date2Month = date2.getMonth();
                var /** @type {?} */ date2Date = date2.getDate();
                return date1Year === date2Year && date1Month === date2Month && date1Date === date2Date;
            };
        /**
         * @param {?} startDayOfWeek
         * @return {?}
         */
        DateHelperService.prototype.orderWeekDays = /**
         * @param {?} startDayOfWeek
         * @return {?}
         */
            function (startDayOfWeek) {
                var /** @type {?} */ rotate = function (array, index) {
                    var /** @type {?} */ arrayLength = array.length;
                    return array.slice(arrayLength - index).concat(array.slice(0, arrayLength - index));
                };
                var /** @type {?} */ weekdays = [0, 1, 2, 3, 4, 5, 6];
                if (startDayOfWeek === DAYS.SUNDAY) {
                    return weekdays;
                }
                else {
                    return rotate(weekdays, 7 - startDayOfWeek);
                }
            };
        DateHelperService.decorators = [
            { type: core.Injectable },
        ];
        return DateHelperService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AgendaComponent = (function () {
        function AgendaComponent(elementRef, dateHelperService) {
            this.elementRef = elementRef;
            this.dateHelperService = dateHelperService;
            this.views = VIEWS;
            // Month view
            this.startDayOfWeek = DAYS.MONDAY;
            this.navigate = new core.EventEmitter();
            this.selectRange = new core.EventEmitter();
            this.selectDay = new core.EventEmitter();
            this.selectEvent = new core.EventEmitter();
            this.clickMore = new core.EventEmitter();
            this.weekdays = [1, 2, 3, 4, 5, 6, 0];
            this.today = this.getToday();
            this.componentDestroyed$ = new Subject.Subject();
        }
        /**
         * @return {?}
         */
        AgendaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.watchAgendaSize();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        AgendaComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes && changes.startDayOfWeek) {
                    if (this.view === VIEWS.MONTH) {
                        this.weekdays = this.dateHelperService.orderWeekDays(changes.startDayOfWeek.currentValue);
                    }
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        AgendaComponent.prototype.swipe = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.pointerType !== 'touch') {
                    return;
                }
                if (e.type === 'swipeleft') {
                    this.nextMonth();
                    return;
                }
                if (e.type === 'swiperight') {
                    this.prevMonth();
                    return;
                }
            };
        /**
         * @return {?}
         */
        AgendaComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.componentDestroyed$.next(true);
                this.componentDestroyed$.complete();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        AgendaComponent.prototype.onNavigate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.activeDate = new Date(date);
            };
        /**
         * @param {?} range
         * @return {?}
         */
        AgendaComponent.prototype.onDisplayRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                this.navigate.emit(range);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        AgendaComponent.prototype.onSelectDay = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.selectDay.emit(date);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AgendaComponent.prototype.onSelectEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectEvent.emit(event);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        AgendaComponent.prototype.onClickMore = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.clickMore.emit(date);
            };
        /**
         * @return {?}
         */
        AgendaComponent.prototype.getToday = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ date = new Date();
                date.setHours(0, 0, 0, 0);
                return date;
            };
        /**
         * @return {?}
         */
        AgendaComponent.prototype.prevMonth = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ date = new Date(this.activeDate);
                this.onNavigate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
            };
        /**
         * @return {?}
         */
        AgendaComponent.prototype.nextMonth = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ date = new Date(this.activeDate);
                this.onNavigate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
            };
        /**
         * @param {?} range
         * @return {?}
         */
        AgendaComponent.prototype.onSelectRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                this.selectRange.emit(range);
            };
        /**
         * @return {?}
         */
        AgendaComponent.prototype.watchAgendaSize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.agendaSize$ = timer.timer(0, 250)
                    .pipe(operators.takeUntil(this.componentDestroyed$), operators.map(function () {
                    return _this.elementRef.nativeElement.offsetWidth;
                }), operators.distinctUntilChanged())
                    .pipe(operators.map(function (width) {
                    if (width > 800) {
                        return 'o-agenda--big';
                    }
                    else {
                        return 'o-agenda--small';
                    }
                }));
            };
        AgendaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda',
                        template: "<div [ngClass]=\"agendaSize$ | async\" class=\"o-agenda\">\n\t<div class=\"o-agenda__inner\">\n\t\t<aui-agenda-navigation\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[view]=\"view\"\n\t\t\t[today]=\"today\"\n\t\t\t(navigate)=\"onNavigate($event)\"\n\t\t></aui-agenda-navigation>\n\n\t\t<aui-agenda-month-view\n\t\t\t*ngIf=\"view === views.MONTH\"\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[weekdays]=\"weekdays\"\n\t\t\t[startDayOfWeek]=\"startDayOfWeek\"\n\t\t\t[events]=\"events\"\n\t\t\t[highlights]=\"highlights\"\n\t\t\t[eventItemTemplate]=\"monthEventItemTemplate\"\n\t\t\t(selectDay)=\"onSelectDay($event)\"\n\t\t\t(selectEvent)=\"onSelectEvent($event)\"\n\t\t\t(clickMore)=\"onClickMore($event)\"\n\t\t\t(selectRange)=\"onSelectRange($event)\"\n\t\t\t(displayRange)=\"onDisplayRange($event)\"\n\t\t\t(swipeleft)=\"swipe($event)\"\n\t\t\t(swiperight)=\"swipe($event)\"\n\t\t></aui-agenda-month-view>\n\t</div>\n</div>\n",
                        styles: [":host{display:block;width:100%;height:100%}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        AgendaComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DateHelperService }
            ];
        };
        AgendaComponent.propDecorators = {
            events: [{ type: core.Input }],
            view: [{ type: core.Input }],
            startDayOfWeek: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            highlights: [{ type: core.Input }],
            monthEventItemTemplate: [{ type: core.Input }],
            navigate: [{ type: core.Output }],
            selectRange: [{ type: core.Output }],
            selectDay: [{ type: core.Output }],
            selectEvent: [{ type: core.Output }],
            clickMore: [{ type: core.Output }]
        };
        return AgendaComponent;
    }());

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
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EventMap = (function () {
        function EventMap(weeks, slots) {
            this.initSlots(weeks, slots);
        }
        /**
         * @param {?} weeks
         * @param {?} availableSlots
         * @return {?}
         */
        EventMap.prototype.initSlots = /**
         * @param {?} weeks
         * @param {?} availableSlots
         * @return {?}
         */
            function (weeks, availableSlots) {
                this.slotMap = weeks.map(function (weekdays) {
                    return weekdays.map(function (day) {
                        return Object.assign({}, day, {
                            slots: Array(availableSlots).fill(null),
                            events: [],
                        });
                    });
                });
            };
        /**
         * @param {?} week
         * @param {?} day
         * @param {?} slot
         * @param {?=} span
         * @param {?=} event
         * @return {?}
         */
        EventMap.prototype.fillSlot = /**
         * @param {?} week
         * @param {?} day
         * @param {?} slot
         * @param {?=} span
         * @param {?=} event
         * @return {?}
         */
            function (week, day, slot, span, event) {
                if (span === void 0) {
                    span = 1;
                }
                if (event === void 0) {
                    event = null;
                }
                if (event) {
                    this.slotMap[week][day].slots[slot] = {
                        meta: {
                            week: week,
                            day: day,
                            slot: slot,
                            span: span,
                        },
                        event: event,
                    };
                    for (var /** @type {?} */ i = 1; i < span; i += 1) {
                        this.fillSlot(week, day + i, slot);
                    }
                }
                else {
                    this.slotMap[week][day].slots[slot] = true;
                }
            };
        /**
         * @param {?} week
         * @param {?} day
         * @param {?} slot
         * @return {?}
         */
        EventMap.prototype.isSlotFree = /**
         * @param {?} week
         * @param {?} day
         * @param {?} slot
         * @return {?}
         */
            function (week, day, slot) {
                return this.slotMap[week][day].slots[slot] === null;
            };
        /**
         * @param {?} week
         * @param {?} day
         * @return {?}
         */
        EventMap.prototype.getFreeSlot = /**
         * @param {?} week
         * @param {?} day
         * @return {?}
         */
            function (week, day) {
                return this.slotMap[week][day].slots.findIndex(function (o) {
                    return o === null;
                });
            };
        /**
         * @param {?} week
         * @param {?} day
         * @param {?} span
         * @param {?} event
         * @return {?}
         */
        EventMap.prototype.addEvent = /**
         * @param {?} week
         * @param {?} day
         * @param {?} span
         * @param {?} event
         * @return {?}
         */
            function (week, day, span, event) {
                if (event) {
                    this.slotMap[week][day].events.push(event);
                    for (var /** @type {?} */ i = 1; i < span; i += 1) {
                        this.slotMap[week][day + i].events.push(event);
                    }
                }
            };
        /**
         * @param {?} eventHeight
         * @param {?} weekHeight
         * @param {?} heightOffset
         * @return {?}
         */
        EventMap.prototype.getSlots = /**
         * @param {?} eventHeight
         * @param {?} weekHeight
         * @param {?} heightOffset
         * @return {?}
         */
            function (eventHeight, weekHeight, heightOffset) {
                var /** @type {?} */ numberOfDays = this.slotMap[0].length;
                var /** @type {?} */ dayWidth = ((1 / numberOfDays) * 100);
                var /** @type {?} */ flatten = function (list) { return list.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []); };
                var /** @type {?} */ slots = this.slotMap.map(function (o) {
                    return o.map(function (p) {
                        return p.slots;
                    });
                });
                return flatten(slots).filter(function (slot) {
                    return slot !== null && slot !== true;
                }).map(function (slot) {
                    return __assign({}, slot, { display: {
                            left: 'calc(' + dayWidth * slot.meta.day + '% + 4px)',
                            top: heightOffset + (weekHeight * slot.meta.week) + (slot.meta.slot * eventHeight) + 'px',
                            width: 'calc(' + dayWidth * slot.meta.span + '% - 8px)',
                        } });
                });
            };
        /**
         * @param {?} availableSlots
         * @return {?}
         */
        EventMap.prototype.getEventsMap = /**
         * @param {?} availableSlots
         * @return {?}
         */
            function (availableSlots) {
                return this.slotMap.map(function (days) {
                    return days.map(function (day) {
                        return Object.assign({}, day, {
                            total: day.events.length,
                            more: day.events.length - availableSlots,
                            dots: day.events.map(function (event) {
                                return event["color"];
                            }).filter(function (color, pos, array) {
                                return array.indexOf(color) === pos;
                            }).slice(0, 3),
                        });
                    });
                });
            };
        return EventMap;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortingService = (function () {
        function SortingService(dateHelperService) {
            this.dateHelperService = dateHelperService;
        }
        /**
         * @param {?} events
         * @return {?}
         */
        SortingService.prototype.sortEvents = /**
         * @param {?} events
         * @return {?}
         */
            function (events) {
                var _this = this;
                return events.sort(function (a, b) {
                    // Sort by date
                    var /** @type {?} */ sortedByDate = _this.sortByDateHelper(a.startDate, b.startDate);
                    if (sortedByDate !== 0) {
                        return sortedByDate;
                    }
                    // Sort by diff
                    var /** @type {?} */ sortedBySpan = _this.sortBySpanHelper(a.startDate, a.endDate, b.startDate, b.endDate);
                    if (sortedBySpan !== 0) {
                        return sortedBySpan;
                    }
                    return _this.sortByDateTimeHelper(a.startDate, b.startDate);
                });
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        SortingService.prototype.sortByDateHelper = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                var /** @type {?} */ aStartDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                var /** @type {?} */ bStartDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());
                if (aStartDate < bStartDate) {
                    return -1;
                }
                if (aStartDate > bStartDate) {
                    return 1;
                }
                return 0;
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        SortingService.prototype.sortByDateTimeHelper = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            };
        /**
         * @param {?} aStart
         * @param {?} aEnd
         * @param {?} bStart
         * @param {?} bEnd
         * @return {?}
         */
        SortingService.prototype.sortBySpanHelper = /**
         * @param {?} aStart
         * @param {?} aEnd
         * @param {?} bStart
         * @param {?} bEnd
         * @return {?}
         */
            function (aStart, aEnd, bStart, bEnd) {
                var /** @type {?} */ spanA = this.dateHelperService.dateDiff(aStart, aEnd);
                var /** @type {?} */ spanB = this.dateHelperService.dateDiff(bStart, bEnd);
                if (spanA > spanB) {
                    return -1;
                }
                if (spanA < spanB) {
                    return 1;
                }
                return 0;
            };
        SortingService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        SortingService.ctorParameters = function () {
            return [
                { type: DateHelperService }
            ];
        };
        return SortingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewSlotsService = (function () {
        function MonthViewSlotsService(dateHelperService, sortingService) {
            this.dateHelperService = dateHelperService;
            this.sortingService = sortingService;
        }
        /**
         * @param {?} events
         * @param {?} weeks
         * @param {?} availableSlots
         * @return {?}
         */
        MonthViewSlotsService.prototype.generateEventMap = /**
         * @param {?} events
         * @param {?} weeks
         * @param {?} availableSlots
         * @return {?}
         */
            function (events, weeks, availableSlots) {
                var _this = this;
                var /** @type {?} */ firstDay = new Date(weeks[0][0].date);
                var /** @type {?} */ lastDay = new Date(weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date);
                // 1. Format
                var /** @type {?} */ mappedEvents = this.formatEvents(events);
                // 2. Remove events waar de endDate < startMonth of endDate > endMonth
                var /** @type {?} */ filteredEvents = this.filterEvents(mappedEvents, firstDay, lastDay);
                // 3. Sorteer van oud naar nieuw en van lang event naar kort event
                var /** @type {?} */ sortedEvents = this.sortingService.sortEvents(filteredEvents);
                // 4. Fill EventMap
                this.eventMap = new EventMap(weeks, availableSlots);
                sortedEvents.forEach(function (event) {
                    if (event.startDate < firstDay) {
                        _this.calculate(firstDay, event.endDate, 0, 0, event, weeks);
                    }
                    else {
                        for (var /** @type {?} */ week = 0; week < weeks.length; week += 1) {
                            for (var /** @type {?} */ day = 0; day < weeks[week].length; day += 1) {
                                var /** @type {?} */ date = weeks[week][day].date;
                                if (_this.dateHelperService.compareDates(event.startDate, date)) {
                                    _this.calculate(event.startDate, event.endDate, week, day, event, weeks);
                                    // Stop for loop --> improve performance
                                    day = weeks[week].length;
                                    week = weeks.length - 1;
                                }
                            }
                        }
                    }
                });
                return this.eventMap;
            };
        /**
         * @param {?} events
         * @return {?}
         */
        MonthViewSlotsService.prototype.formatEvents = /**
         * @param {?} events
         * @return {?}
         */
            function (events) {
                return events.map(function (event) {
                    return Object.assign({}, event, {
                        startDate: new Date(event.startDate),
                        endDate: new Date(event.endDate),
                    });
                });
            };
        /**
         * @param {?} events
         * @param {?} firstDay
         * @param {?} lastDay
         * @return {?}
         */
        MonthViewSlotsService.prototype.filterEvents = /**
         * @param {?} events
         * @param {?} firstDay
         * @param {?} lastDay
         * @return {?}
         */
            function (events, firstDay, lastDay) {
                return events.filter(function (event) {
                    return new Date(event.endDate) > firstDay && new Date(event.startDate) < lastDay;
                });
            };
        /**
         * @param {?} start
         * @param {?} end
         * @param {?} week
         * @param {?} day
         * @param {?} event
         * @param {?} weeks
         * @return {?}
         */
        MonthViewSlotsService.prototype.calculate = /**
         * @param {?} start
         * @param {?} end
         * @param {?} week
         * @param {?} day
         * @param {?} event
         * @param {?} weeks
         * @return {?}
         */
            function (start, end, week, day, event, weeks) {
                var /** @type {?} */ weekdaysLength = weeks[0].length;
                var /** @type {?} */ lengthOfEvent = this.dateHelperService.dateDiff(start, end);
                var /** @type {?} */ span = lengthOfEvent + 1 <= weekdaysLength - day ? lengthOfEvent + 1 : weekdaysLength - day;
                var /** @type {?} */ difftest = (lengthOfEvent - span) + 1;
                this.eventMap.addEvent(week, day, span, event);
                var /** @type {?} */ slot = this.eventMap.getFreeSlot(week, day);
                if (slot !== -1) {
                    this.eventMap.fillSlot(week, day, slot, span, event);
                }
                if (difftest > 1 && week + 1 < weeks.length) {
                    this.calculate(weeks[week + 1][0].date, end, week + 1, 0, event, weeks);
                }
            };
        MonthViewSlotsService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MonthViewSlotsService.ctorParameters = function () {
            return [
                { type: DateHelperService },
                { type: SortingService }
            ];
        };
        return MonthViewSlotsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewComponent = (function () {
        function MonthViewComponent(monthViewSlotsService, dateHelperService) {
            this.monthViewSlotsService = monthViewSlotsService;
            this.dateHelperService = dateHelperService;
            this.cssClass = true;
            this.startDayOfWeek = DAYS.MONDAY;
            this.weekdays = [1, 2, 3, 4, 5, 6, 0];
            this.displayRange = new core.EventEmitter();
            this.selectRange = new core.EventEmitter();
            this.selectDay = new core.EventEmitter();
            this.selectEvent = new core.EventEmitter();
            this.clickMore = new core.EventEmitter();
            this.weeks = [];
            this.selectedRange = {
                from: null,
                to: null,
            };
            this.eventHeight = 28;
            this.heightOffset = 28;
            this.availableSlots = 0;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MonthViewComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.activeDate || changes.startDayOfWeek) {
                    this.weeks = this.calculateMonthWeeks(this.activeDate, this.startDayOfWeek, this.highlights);
                    this.emitDisplayRange(this.weeks);
                    this.setSlotsAndWeeks();
                }
            };
        /**
         * @param {?} day
         * @return {?}
         */
        MonthViewComponent.prototype.onSelectDay = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                this.selectedDay = day;
                if (day) {
                    this.selectDay.emit(day);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MonthViewComponent.prototype.onSelectEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectEvent.emit(event);
            };
        /**
         * @param {?} height
         * @return {?}
         */
        MonthViewComponent.prototype.onChangeRowHeight = /**
         * @param {?} height
         * @return {?}
         */
            function (height) {
                this.availableSlots = Math.floor((height - this.heightOffset - 20) / this.eventHeight);
                this.weekHeight = height;
                this.setSlotsAndWeeks();
            };
        /**
         * @param {?} day
         * @return {?}
         */
        MonthViewComponent.prototype.onClickMore = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                this.clickMore.emit(day);
            };
        /**
         * @param {?} range
         * @return {?}
         */
        MonthViewComponent.prototype.onSelectRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                this.selectRange.emit(range);
            };
        /**
         * @param {?} range
         * @return {?}
         */
        MonthViewComponent.prototype.onDragRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                this.selectedRange = range;
            };
        /**
         * @return {?}
         */
        MonthViewComponent.prototype.setSlotsAndWeeks = /**
         * @return {?}
         */
            function () {
                if (this.availableSlots >= 0) {
                    var /** @type {?} */ eventMap = this.monthViewSlotsService.generateEventMap(this.events, this.weeks, this.availableSlots);
                    this.slots = eventMap.getSlots(this.eventHeight, this.weekHeight, this.heightOffset);
                    this.weeks = eventMap.getEventsMap(this.availableSlots);
                }
            };
        /**
         * @param {?} date
         * @param {?} startOfWeek
         * @param {?} highlights
         * @return {?}
         */
        MonthViewComponent.prototype.calculateMonthWeeks = /**
         * @param {?} date
         * @param {?} startOfWeek
         * @param {?} highlights
         * @return {?}
         */
            function (date, startOfWeek, highlights) {
                var /** @type {?} */ days = this.dateHelperService.getDaysForMonth(date, startOfWeek, highlights);
                return this.dateHelperService.getWeeksForMonth(days);
            };
        /**
         * @param {?} weeks
         * @return {?}
         */
        MonthViewComponent.prototype.emitDisplayRange = /**
         * @param {?} weeks
         * @return {?}
         */
            function (weeks) {
                if (weeks.length > 0 && weeks[0].length > 0) {
                    var /** @type {?} */ from = weeks[0][0].date;
                    var /** @type {?} */ to = weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date;
                    if (from && to) {
                        this.displayRange.emit({
                            from: from,
                            to: to,
                        });
                    }
                }
            };
        MonthViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-month-view',
                        template: "<div class=\"o-agenda__table-head\">\n\t<div *ngFor=\"let weekday of weekdays\" class=\"o-agenda__table-head-cell\">{{ weekday | weekdayPipe }}</div>\n</div>\n\n<aui-agenda-month-view-calendar\n\t[weeks]=\"weeks\"\n\t[slots]=\"slots\"\n\t[selectedDay]=\"selectedDay\"\n\t[range]=\"selectedRange\"\n\t[eventItemTemplate]=\"eventItemTemplate\"\n\t(rowHeight)=\"onChangeRowHeight($event)\"\n\t(selectEvent)=\"onSelectEvent($event)\"\n\t(selectDay)=\"onSelectDay($event)\"\n\t(selectRange)=\"onSelectRange($event)\"\n\t(clickMore)=\"onClickMore($event)\"\n\t(dragRange)=\"onDragRange($event)\"\n></aui-agenda-month-view-calendar>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        MonthViewComponent.ctorParameters = function () {
            return [
                { type: MonthViewSlotsService },
                { type: DateHelperService }
            ];
        };
        MonthViewComponent.propDecorators = {
            cssClass: [{ type: core.HostBinding, args: ['class.o-agenda__table',] }],
            activeDate: [{ type: core.Input }],
            startDayOfWeek: [{ type: core.Input }],
            highlights: [{ type: core.Input }],
            weekdays: [{ type: core.Input }],
            events: [{ type: core.Input }],
            eventItemTemplate: [{ type: core.Input }],
            displayRange: [{ type: core.Output }],
            selectRange: [{ type: core.Output }],
            selectDay: [{ type: core.Output }],
            selectEvent: [{ type: core.Output }],
            clickMore: [{ type: core.Output }]
        };
        return MonthViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewCalendarComponent = (function () {
        function MonthViewCalendarComponent(elementRef) {
            this.elementRef = elementRef;
            this.cssClass = true;
            this.range = {
                from: null,
                to: null,
            };
            this.rowHeight = new core.EventEmitter();
            this.selectDay = new core.EventEmitter();
            this.selectRange = new core.EventEmitter();
            this.selectEvent = new core.EventEmitter();
            this.clickMore = new core.EventEmitter();
            this.dragRange = new core.EventEmitter();
            this.componentDestroyed$ = new Subject.Subject();
        }
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.currentDay = jsDateUtils.DateHelper.formatDate(new Date(), 'YYYY-MM-DD');
                this.watchRowHeigth()
                    .pipe(operators.takeUntil(this.componentDestroyed$))
                    .subscribe(function (height) {
                    _this.rowHeight.emit(height);
                });
                this.watchDragOver()
                    .pipe(operators.takeUntil(this.componentDestroyed$))
                    .subscribe(function (range) {
                    _this.emitDragRange(range);
                });
                this.watchDrop()
                    .pipe(operators.takeUntil(this.componentDestroyed$))
                    .subscribe(function () {
                    _this.emitSelectRange(_this.range);
                });
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.isToday = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ day = jsDateUtils.DateHelper.formatDate(date, 'YYYY-MM-DD');
                return day === this.currentDay;
            };
        /**
         * @param {?} day
         * @param {?} range
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.isSelected = /**
         * @param {?} day
         * @param {?} range
         * @return {?}
         */
            function (day, range) {
                var /** @type {?} */ currentDay = jsDateUtils.DateHelper.formatDate(day, 'YYYY-MM-DD');
                var /** @type {?} */ from = range && range.from ? jsDateUtils.DateHelper.formatDate(new Date(range.from.toString()), 'YYYY-MM-DD') : null;
                var /** @type {?} */ to = range && range.to ? jsDateUtils.DateHelper.formatDate(new Date(range.to.toString()), 'YYYY-MM-DD') : null;
                return currentDay === this.selectedDay
                    || ((from && new Date(from) <= new Date(currentDay)) && (to && new Date(to) >= new Date(currentDay)));
            };
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.resetRange = /**
         * @return {?}
         */
            function () {
                this.emitDragRange({
                    from: null,
                    to: null,
                });
            };
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.componentDestroyed$.next(true);
                this.componentDestroyed$.complete();
            };
        /**
         * @param {?} day
         * @param {?} date
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.isCurrentMonth = /**
         * @param {?} day
         * @param {?} date
         * @return {?}
         */
            function (day, date) {
                var /** @type {?} */ dayDate = new Date(day);
                var /** @type {?} */ current = new Date(date);
                return dayDate.getMonth() !== current.getMonth();
            };
        /**
         * @param {?} day
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.emitSelectDay = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
                this.selectDay.emit(jsDateUtils.DateHelper.formatDate(day, 'YYYY-MM-DD'));
                this.resetRange();
            };
        /**
         * @param {?} range
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.emitDragRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                this.dragRange.emit(range);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.onSelectEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectEvent.emit(event);
                this.resetRange();
            };
        /**
         * @param {?} day
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.onClickMore = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                this.resetRange();
                this.clickMore.emit(day);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.dragStart = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.selectDay.emit(null);
                this.pressedDay = jsDateUtils.DateHelper.formatDate(date, 'YYYY-MM-DD');
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.touchStart = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.selectDay.emit(null);
                this.pressedDay = jsDateUtils.DateHelper.formatDate(date, 'YYYY-MM-DD');
            };
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.watchRowHeigth = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ weekHeight$ = new Subject.Subject();
                timer.timer(0, 250)
                    .pipe(operators.takeUntil(this.componentDestroyed$))
                    .subscribe(function () {
                    var /** @type {?} */ row = _this.elementRef.nativeElement.querySelector('.o-agenda__table-row');
                    if (row) {
                        weekHeight$.next(row.offsetHeight);
                    }
                });
                return weekHeight$
                    .pipe(operators.distinctUntilChanged());
            };
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.watchDragOver = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ target$ = new Subject.Subject();
                var /** @type {?} */ handleElement = function (element) {
                    if (element && element.parentElement && element.parentElement.getAttribute('date')) {
                        var /** @type {?} */ pressedDay = new Date(_this.pressedDay);
                        var /** @type {?} */ dragOverDate = new Date(element.parentElement.getAttribute('date'));
                        if (pressedDay < dragOverDate) {
                            target$.next({
                                from: _this.pressedDay,
                                to: jsDateUtils.DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                            });
                        }
                        else {
                            target$.next({
                                from: jsDateUtils.DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                                to: _this.pressedDay,
                            });
                        }
                    }
                };
                document.addEventListener('dragover', function (event) {
                    event.preventDefault();
                    var /** @type {?} */ target = (event.target);
                    handleElement(target);
                }, false);
                document.addEventListener('touchmove', function (event) {
                    if (_this.pressedDay) {
                        var /** @type {?} */ touch = event.touches[0];
                        var /** @type {?} */ element = (document.elementFromPoint(touch.clientX, touch.clientY));
                        handleElement(element);
                    }
                }, false);
                return target$
                    .pipe(operators.distinctUntilChanged(function (x, y) {
                    return x.from === y.from && x.to === y.to;
                }));
            };
        /**
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.watchDrop = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ target$ = new Subject.Subject();
                document.addEventListener('drop', function (event) {
                    // prevent default action (open as link for some elements)
                    event.preventDefault();
                    target$.next();
                }, false);
                document.addEventListener('touchend', function () {
                    // prevent default action (open as link for some elements)
                    if (_this.pressedDay) {
                        event.preventDefault();
                        _this.pressedDay = null;
                        target$.next();
                    }
                });
                return target$;
            };
        /**
         * @param {?} range
         * @return {?}
         */
        MonthViewCalendarComponent.prototype.emitSelectRange = /**
         * @param {?} range
         * @return {?}
         */
            function (range) {
                // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
                this.selectRange.emit({
                    from: jsDateUtils.DateHelper.formatDate(/** @type {?} */ (range.from), 'YYYY-MM-DD'),
                    to: jsDateUtils.DateHelper.formatDate(/** @type {?} */ (range.to), 'YYYY-MM-DD'),
                });
            };
        MonthViewCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-month-view-calendar',
                        template: "<div *ngFor=\"let week of weeks\" class=\"o-agenda__table-row\">\n\t<div\n\t\t*ngFor=\"let day of week\"\n\t\t(tap)=\"emitSelectDay(day.date)\"\n\t\t[ngClass]=\"{\n\t\t\t'is-current': isToday(day.date),\n\t\t\t'is-selected': isSelected(day.date, range),\n\t\t\t'is-faded': isCurrentMonth(day.date, weeks[1][0].date)\n\t\t}\"\n\t\t[class]=\"day.highlights\"\n\t\tclass=\"o-agenda__table-row-cell\"\n\t\t[attr.date]=\"day.date\"\n\t\t(press)=\"touchStart(day.date)\"\n\t\t>\n\n\t\t<div (dragstart)=\"dragStart(day.date)\" class=\"o-agenda_drag-select\" draggable=\"true\"></div>\n\n\t\t<span class=\"o-agenda__table-row-cell-header\">\n\t\t\t<span>{{ day.date | date:'d' }}</span>\n\t\t</span>\n\n\t\t<aui-agenda-more-button\n\t\t\t*ngIf=\"day.more\"\n\t\t\t[hiddenEvents]=\"day.more\"\n\t\t\t(clickMore)=\"onClickMore(day.date)\"\n\t\t></aui-agenda-more-button>\n\n\t\t<aui-month-view-dots\n\t\t\t*ngIf=\"day.dots\"\n\t\t\t[dots]=\"day.dots\"\n\t\t></aui-month-view-dots>\n\t</div>\n</div>\n\n<aui-agenda-month-view-event-slots\n\t[slots]=\"slots\"\n\t[eventItemTemplate]=\"eventItemTemplate\"\n\t(selectEvent)=\"onSelectEvent($event)\"\n></aui-agenda-month-view-event-slots>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        MonthViewCalendarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MonthViewCalendarComponent.propDecorators = {
            cssClass: [{ type: core.HostBinding, args: ['class.o-agenda__table-grid',] }],
            weeks: [{ type: core.Input }],
            slots: [{ type: core.Input }],
            eventItemTemplate: [{ type: core.Input }],
            selectedDay: [{ type: core.Input }],
            range: [{ type: core.Input }],
            rowHeight: [{ type: core.Output }],
            selectDay: [{ type: core.Output }],
            selectRange: [{ type: core.Output }],
            selectEvent: [{ type: core.Output }],
            clickMore: [{ type: core.Output }],
            dragRange: [{ type: core.Output }]
        };
        return MonthViewCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewDotsComponent = (function () {
        function MonthViewDotsComponent() {
        }
        MonthViewDotsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-month-view-dots',
                        template: "<div class=\"o-agenda__dots\">\n\t<div *ngFor=\"let dot of dots\" [ngStyle]=\"{ 'background-color': dot }\" class=\"o-agenda__dot\"></div>\n</div>\n",
                    },] },
        ];
        MonthViewDotsComponent.propDecorators = {
            dots: [{ type: core.Input }]
        };
        return MonthViewDotsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewEventSlotComponent = (function () {
        function MonthViewEventSlotComponent() {
        }
        MonthViewEventSlotComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-month-view-event-slot',
                        template: "<ng-template #defaultTemplate let-event=\"event\">\n\t<div class=\"a-event\" [ngStyle]=\"{ 'background-color': event.fullDay ? event.color : null }\" [ngClass]=\"{ 'a-event--light': event.fullDay }\">\n\t\t<div *ngIf=\"!event.fullDay\" class=\"a-event__bar\" [ngStyle]=\"{ 'background-color': event.color }\"></div>\n\n\t\t<div class=\"a-event__content\">\n\t\t\t<div *ngIf=\"event.iconBefore || event.title\" class=\"a-event__main\">\n\t\t\t\t<span *ngIf=\"event.iconBefore\" class=\"{{ event.iconBefore }} a-event__icon\"></span><span *ngIf=\"event.title\" class=\"a-event__title\">{{ event.title }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"event.iconAfter || !event.fullDay\" class=\"a-event__extra\">\n\t\t\t\t<span *ngIf=\"!event.fullDay\" class=\"a-event__meta\">{{ event.startDate | date:'HH:mm' }}</span><span *ngIf=\"event.iconAfter\" class=\"{{ event.iconAfter }} a-event__icon\"></span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-template>\n\n<div class=\"o-agenda__table-event\" [ngStyle]=\"{\n\tleft: display.left,\n\ttop: display.top,\n\twidth: display.width\n}\">\n\t<ng-container *ngTemplateOutlet=\"template ? template : defaultTemplate; context: { event: event }\"></ng-container>\n</div>\n",
                    },] },
        ];
        MonthViewEventSlotComponent.propDecorators = {
            event: [{ type: core.Input }],
            meta: [{ type: core.Input }],
            display: [{ type: core.Input }],
            template: [{ type: core.Input }]
        };
        return MonthViewEventSlotComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthViewEventSlotsComponent = (function () {
        function MonthViewEventSlotsComponent() {
            this.slots = [];
            this.selectEvent = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        MonthViewEventSlotsComponent.prototype.emitSelectEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectEvent.emit(event);
            };
        MonthViewEventSlotsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-month-view-event-slots',
                        template: "<div class=\"aui-agenda-month-view-event-slots\">\n\t<aui-agenda-month-view-event-slot\n\t\t*ngFor=\"let slot of slots\"\n\t\t[event]=\"slot.event\"\n\t\t[meta]=\"slot.meta\"\n\t\t[display]=\"slot.display\"\n\t\t[template]=\"eventItemTemplate\"\n\t\t(click)=\"emitSelectEvent(slot.event)\"\n\t></aui-agenda-month-view-event-slot>\n</div>\n\n",
                    },] },
        ];
        MonthViewEventSlotsComponent.propDecorators = {
            slots: [{ type: core.Input }],
            eventItemTemplate: [{ type: core.Input }],
            selectEvent: [{ type: core.Output }]
        };
        return MonthViewEventSlotsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MoreButtonComponent = (function () {
        function MoreButtonComponent(label) {
            this.label = label;
            this.clickMore = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        MoreButtonComponent.prototype.emitClickMore = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.clickMore.emit();
            };
        MoreButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-more-button',
                        template: "<div class=\"o-agenda__more\">\n\t<button (click)=\"emitClickMore($event)\" *ngIf=\"hiddenEvents > 0\" class=\"o-agenda__more-button\">\n\t\t{{ hiddenEvents }} {{ label }}\n\t</button>\n</div>\n",
                    },] },
        ];
        /** @nocollapse */
        MoreButtonComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MORE_LABEL,] }] }
            ];
        };
        MoreButtonComponent.propDecorators = {
            hiddenEvents: [{ type: core.Input }],
            clickMore: [{ type: core.Output }]
        };
        return MoreButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NavigationComponent = (function () {
        function NavigationComponent() {
            this.cssClass = true;
            this.navigate = new core.EventEmitter();
            this.views = VIEWS;
            this.navigate$ = new Subject.Subject();
            this.componentDestroyed$ = new Subject.Subject();
        }
        /**
         * @return {?}
         */
        NavigationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.navigate$
                    .pipe(operators.takeUntil(this.componentDestroyed$), operators.distinctUntilChanged(), operators.debounceTime(200))
                    .subscribe(function (value) {
                    _this.navigate.emit(value);
                });
            };
        /**
         * @return {?}
         */
        NavigationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.componentDestroyed$.next(true);
                this.componentDestroyed$.complete();
            };
        /**
         * @return {?}
         */
        NavigationComponent.prototype.prev = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ date = new Date(this.activeDate);
                this.changeDate(date, -1);
            };
        /**
         * @return {?}
         */
        NavigationComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ date = new Date(this.activeDate);
                this.changeDate(date, 1);
            };
        /**
         * @return {?}
         */
        NavigationComponent.prototype.goToToday = /**
         * @return {?}
         */
            function () {
                this.navigate$.next(this.today);
            };
        /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
        NavigationComponent.prototype.changeDate = /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
            function (date, orient) {
                if (this.view === VIEWS.DAY) {
                    return this.navigate$.next(this.changeDay(date, orient));
                }
                if (this.view === VIEWS.MONTH) {
                    return this.navigate$.next(this.changeMonth(date, orient));
                }
                if (this.view === VIEWS.YEAR) {
                    return this.navigate$.next(this.changeYear(date, orient));
                }
            };
        /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
        NavigationComponent.prototype.changeDay = /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
            function (date, orient) {
                return new Date(date.getFullYear(), date.getMonth(), date.getDate() + orient);
            };
        /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
        NavigationComponent.prototype.changeMonth = /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
            function (date, orient) {
                return new Date(date.getFullYear(), date.getMonth() + orient, 1);
            };
        /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
        NavigationComponent.prototype.changeYear = /**
         * @param {?} date
         * @param {?} orient
         * @return {?}
         */
            function (date, orient) {
                return new Date(date.getFullYear() + orient, 0, 1);
            };
        NavigationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-agenda-navigation',
                        template: "<h4>\n\t<ng-container *ngIf=\"view === views.DAY\">{{ activeDate | date:'dd/MM/y' }}</ng-container>\n\t<ng-container *ngIf=\"view === views.MONTH\">{{ activeDate | date:'M' | monthPipe }} {{ activeDate | date:'y' }}</ng-container>\n\t<ng-container *ngIf=\"view === views.YEAR\">{{ activeDate | date:'y' }}</ng-container>\n</h4>\n\n<div class=\"o-agenda__nav\">\n\t<button tabindex=\"-1\" type=\"button\" aria-label=\"previous month\" class=\"o-agenda__nav-previous a-button has-icon\" (click)=\"prev()\">\n\t\t<i class=\"fa fa-angle-left\"></i>\n\t</button>\n\n\t<button tabindex=\"0\" type=\"button\" aria-label=\"today\" class=\"a-button\" (click)=\"goToToday()\">\n\t\tVandaag\n\t</button>\n\n\t<button tabindex=\"0\" type=\"button\" aria-label=\"next month\" class=\"o-agenda__nav-next a-button has-icon\" (click)=\"next()\">\n\t\t<i class=\"fa fa-angle-right\"></i>\n\t</button>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        NavigationComponent.propDecorators = {
            cssClass: [{ type: core.HostBinding, args: ['class.o-agenda__header',] }],
            activeDate: [{ type: core.Input }],
            view: [{ type: core.Input }],
            today: [{ type: core.Input }],
            navigate: [{ type: core.Output }]
        };
        return NavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components = [
        AgendaComponent,
        MonthViewComponent,
        MonthViewCalendarComponent,
        MonthViewDotsComponent,
        MonthViewEventSlotComponent,
        MonthViewEventSlotsComponent,
        MoreButtonComponent,
        NavigationComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Services = [
        DateHelperService,
        MonthViewSlotsService,
        SortingService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HammerConfig = (function (_super) {
        __extends(HammerConfig, _super);
        function HammerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrides = /** @type {?} */ ({
                'swipe': { direction: Hammer.DIRECTION_ALL },
            });
            return _this;
        }
        return HammerConfig;
    }(platformBrowser.HammerGestureConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = DEFAULT_WEEKDAY_LABELS, ɵ1 = DEFAULT_MONTH_LABELS, ɵ2 = DEFAULT_MORE_LABEL;
    var AgendaModule = (function () {
        function AgendaModule() {
        }
        /**
         * @param {?} weekdayLabels
         * @param {?} monthLabels
         * @param {?} moreLabel
         * @return {?}
         */
        AgendaModule.forChild = /**
         * @param {?} weekdayLabels
         * @param {?} monthLabels
         * @param {?} moreLabel
         * @return {?}
         */
            function (weekdayLabels, monthLabels, moreLabel) {
                return {
                    ngModule: AgendaModule,
                    providers: [
                        Services,
                        { provide: WEEKDAY_LABELS, useValue: weekdayLabels },
                        { provide: MONTH_LABELS, useValue: monthLabels },
                        { provide: MORE_LABEL, useValue: moreLabel },
                        { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
                    ],
                };
            };
        AgendaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            Pipes,
                            Components,
                        ],
                        exports: [
                            Pipes,
                            Components,
                        ],
                        providers: [
                            Services,
                            { provide: WEEKDAY_LABELS, useValue: ɵ0 },
                            { provide: MONTH_LABELS, useValue: ɵ1 },
                            { provide: MORE_LABEL, useValue: ɵ2 },
                            { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
                        ],
                    },] },
        ];
        return AgendaModule;
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

    exports.AgendaModule = AgendaModule;
    exports.EventMap = EventMap;
    exports.AgendaComponent = AgendaComponent;
    exports.MonthViewComponent = MonthViewComponent;
    exports.MonthViewEventSlotComponent = MonthViewEventSlotComponent;
    exports.MonthViewEventSlotsComponent = MonthViewEventSlotsComponent;
    exports.NavigationComponent = NavigationComponent;
    exports.MonthPipe = MonthPipe;
    exports.WeekdayPipe = WeekdayPipe;
    exports.DateHelperService = DateHelperService;
    exports.MonthViewSlotsService = MonthViewSlotsService;
    exports.SortingService = SortingService;
    exports.DAYS = DAYS;
    exports.VIEWS = VIEWS;
    exports.ɵc = DEFAULT_MONTH_LABELS;
    exports.ɵd = DEFAULT_MORE_LABEL;
    exports.ɵb = DEFAULT_WEEKDAY_LABELS;
    exports.ɵf = MONTH_LABELS;
    exports.ɵg = MORE_LABEL;
    exports.ɵe = WEEKDAY_LABELS;
    exports.ɵh = Components;
    exports.ɵi = MonthViewCalendarComponent;
    exports.ɵj = MonthViewDotsComponent;
    exports.ɵk = MoreButtonComponent;
    exports.ɵm = HammerConfig;
    exports.ɵa = Pipes;
    exports.ɵl = Services;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvYWdlbmRhLmNvbmYudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3BpcGVzL21vbnRoLnBpcGUudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3BpcGVzL3dlZWtkYXkucGlwZS50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvcGlwZXMvaW5kZXgudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3R5cGVzL2FnZW5kYS50eXBlcy50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvc2VydmljZXMvZGF0ZS1oZWxwZXIuc2VydmljZS50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jbGFzc2VzL2V2ZW50LW1hcC5jbGFzcy50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvY29tcG9uZW50cy9tb250aC12aWV3LWNhbGVuZGFyL21vbnRoLXZpZXctY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZG90cy9tb250aC12aWV3LWRvdHMuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9oYW1tZXIuY29uZi50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvYWdlbmRhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9XRUVLREFZX0xBQkVMUyA9IFtcblx0J1N1bmRheScsXG5cdCdNb25kYXknLFxuXHQnVHVlc2RheScsXG5cdCdXZWRuZXNkYXknLFxuXHQnVGh1cnNkYXknLFxuXHQnRmlyZGF5Jyxcblx0J1NhdHVyZGF5Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01PTlRIX0xBQkVMUyA9IFtcblx0J0phbnVhcnknLFxuXHQnRmVicnVhcnknLFxuXHQnTWFyY2gnLFxuXHQnQXByaWwnLFxuXHQnTWF5Jyxcblx0J0p1bmUnLFxuXHQnSnVseScsXG5cdCdBdWd1c3QnLFxuXHQnU2VwdGVtYmVyJyxcblx0J09jdG9iZXInLFxuXHQnTm92ZW1iZXInLFxuXHQnRGVjZW1iZXInLFxuXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9SRV9MQUJFTCA9ICdtb3JlJztcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZ1tdPignd2Vla2RheUxhYmVscycpO1xuZXhwb3J0IGNvbnN0IE1PTlRIX0xBQkVMUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmdbXT4oJ21vbnRoTGFiZWxzJyk7XG5leHBvcnQgY29uc3QgTU9SRV9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdtb3JlTGFiZWwnKTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNT05USF9MQUJFTFMsIERFRkFVTFRfTU9OVEhfTEFCRUxTIH0gZnJvbSAnLi4vYWdlbmRhLmNvbmYnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdtb250aFBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChNT05USF9MQUJFTFMpIHByaXZhdGUgbW9udGhMYWJlbHMgPSBERUZBVUxUX01PTlRIX0xBQkVMU1xuXHQpIHt9XG5cblx0cHVibGljIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogc3RyaW5nIHtcblx0XHRjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cblx0XHRpZiAoaXNOYU4obW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IChtb250aCAtIDEpLnRvU3RyaW5nKCk7XG5cdFx0cmV0dXJuIHRoaXMubW9udGhMYWJlbHNbaW5kZXgudG9TdHJpbmcoKV0gfHwgREVGQVVMVF9NT05USF9MQUJFTFNbaW5kZXgudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXRUVLREFZX0xBQkVMUywgREVGQVVMVF9XRUVLREFZX0xBQkVMUyB9IGZyb20gJy4uL2FnZW5kYS5jb25mJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnd2Vla2RheVBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBXZWVrZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFdFRUtEQVlfTEFCRUxTKSBwcml2YXRlIHdlZWtkYXlMYWJlbHMgPSBERUZBVUxUX1dFRUtEQVlfTEFCRUxTXG5cdCkge31cblxuXHRwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLndlZWtkYXlMYWJlbHNbKHZhbHVlKS50b1N0cmluZygpXSB8fCBERUZBVUxUX1dFRUtEQVlfTEFCRUxTWyh2YWx1ZSkudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IE1vbnRoUGlwZSB9IGZyb20gJy4vbW9udGgucGlwZSc7XG5pbXBvcnQgeyBXZWVrZGF5UGlwZSB9IGZyb20gJy4vd2Vla2RheS5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRNb250aFBpcGUsXG5cdFdlZWtkYXlQaXBlLFxuXTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRJbnRlcmZhY2Uge1xuXHRzdGFydERhdGU6IERhdGU7XG5cdGVuZERhdGU6IERhdGU7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RNZXRhSW50ZXJmYWNlIHtcblx0d2VlazogbnVtYmVyO1xuXHRkYXk6IG51bWJlcjtcblx0c2xvdDogbnVtYmVyO1xuXHRzcGFuOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdERpc3BsYXlJbnRlcmZhY2Uge1xuXHRsZWZ0OiBzdHJpbmc7XG5cdHRvcDogc3RyaW5nO1xuXHR3aWR0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RJbnRlcmZhY2Uge1xuXHRtZXRhPzogU2xvdE1ldGFJbnRlcmZhY2U7XG5cdGRpc3BsYXk/OiBTbG90RGlzcGxheUludGVyZmFjZTtcblx0ZXZlbnQ/OiBFdmVudEludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbG90TWFwSXRlbUludGVyZmFjZSB7XG5cdHNsb3RzOiAoU2xvdEludGVyZmFjZXxib29sZWFuKVtdO1xuXHRldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cbn1cblxuZXhwb3J0IHR5cGUgU2xvdE1hcEludGVyZmFjZSA9IFNsb3RNYXBJdGVtSW50ZXJmYWNlW11bXTtcblxuZXhwb3J0IHR5cGUgRG90TWFwSW50ZXJmYWNlID0gKHN0cmluZylbXVtdW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlSW50ZXJmYWNlIHtcblx0ZnJvbTogRGF0ZXxzdHJpbmc7XG5cdHRvOiBEYXRlfHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlSYW5nZUludGVyZmFjZSB7XG5cdGZyb206IHN0cmluZztcblx0dG86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gREFZUyB7XG5cdFNVTkRBWSxcblx0TU9OREFZLFxuXHRUVUVTREFZLFxuXHRXRURORVNEQVksXG5cdFRIVVJTREFZLFxuXHRGUklEQVksXG5cdFNBVFVSREFZLFxufVxuXG5leHBvcnQgZW51bSBWSUVXUyB7XG5cdERBWSA9ICdEQVknLFxuXHRXRUVLID0gJ1dFRUsnLFxuXHRNT05USCA9ICdNT05USCcsXG5cdFlFQVIgPSAnWUVBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheUludGVyZmFjZSB7XG5cdGRhdGU6IERhdGU7XG5cdC8vIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0Ly8gdG90YWw6IG51bWJlcjtcblx0Ly8gZG90czogc3RyaW5nW107XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBSYW5nZUludGVyZmFjZSA9IChudW1iZXJbXXxEYXRlKVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hMaWdodEludGVyZmFjZSB7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogUmFuZ2VJbnRlcmZhY2U7XG59XG4iLCIvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0UmFuZ2VJbnRlcmZhY2UsXG5cdERBWVMsXG59IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyU2VydmljZSB7XG5cblx0cHVibGljIGdldERheXNGb3JNb250aChkYXRlOiBEYXRlLCBzdGFydERheU9mV2VlazogbnVtYmVyLCByYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlID0gbnVsbCk6IFdlZWtkYXlJbnRlcmZhY2VbXSB7XG5cdFx0Y29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5nZXRGaXJzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBtYXggPSB0aGlzLmRhdGVEaWZmKGZpcnN0RGF5T2ZNb250aCwgbGFzdERheU9mTW9udGgpO1xuXG5cdFx0Y29uc3QgZGF5cyA9IFtcblx0XHRcdHsgZGF0ZTogZmlyc3REYXlPZk1vbnRoLCBoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIGZpcnN0RGF5T2ZNb250aCkgfSxcblx0XHRdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgbmV4dERheSA9IHRoaXMuZ2V0TmV4dERheShkYXlzW2ldLmRhdGUpO1xuXG5cdFx0XHRkYXlzLnB1c2goe1xuXHRcdFx0XHRoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIG5leHREYXkpLFxuXHRcdFx0XHRkYXRlOiBuZXh0RGF5LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRheXM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SGlnaGxpZ2h0cyhyYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcblx0XHRpZiAoIXJhbmdlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJhbmdlKS5maWx0ZXIoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5SYW5nZShyYW5nZVtrZXldLCBkYXRlKTtcblx0XHR9KS5qb2luKCcgJyk7XG5cdH1cblxuXHRwdWJsaWMgaW5SYW5nZShyYW5nZTogUmFuZ2VJbnRlcmZhY2UsIGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcmFuZ2Uuc29tZSgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uaW5kZXhPZihkYXRlLmdldERheSgpKSAhPT0gLTE7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShpdGVtKTtcblx0XHRcdGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbXBhcmVEYXRlcyhkLCBkYXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRXZWVrc0Zvck1vbnRoKGRheXM6IFdlZWtkYXlJbnRlcmZhY2VbXSk6IFdlZWtkYXlJbnRlcmZhY2VbXVtdIHtcblx0XHRjb25zdCBudW1iZXJPZldlZWtzID0gTWF0aC5yb3VuZChkYXlzLmxlbmd0aCAvIDcpO1xuXG5cdFx0cmV0dXJuIEFycmF5KG51bWJlck9mV2Vla3MpLmZpbGwobnVsbCkubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLnNsaWNlKGluZGV4ICogNywgKGluZGV4ICsgMSkgKiA3KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRMYXN0RGF0ZU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuXHR9XG5cblx0cHVibGljIG1vdmVUb0RheU9mV2VlayhkYXRlOiBEYXRlLCBkYXlPZldlZWs6IG51bWJlciwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRsZXQgZGlmZiA9IChkYXlPZldlZWsgLSBkYXRlLmdldERheSgpICsgNyAqIChvcmllbnQgfHwgKyAxKSkgJSA3O1xuXHRcdGNvbnN0IHZhbHVlID0gKGRpZmYgPT09IDApID8gZGlmZiArPSA3ICogKG9yaWVudCB8fCArMSkgOiBkaWZmO1xuXHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcblx0XHRyZXR1cm4gbmV3IERhdGUoZC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgdmFsdWUgKiAxKSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RXZWVrRGF5T2ZNb250aChkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogbnVtYmVyfHN0cmluZyk6IERhdGUge1xuXHRcdGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcblx0XHRpZiAoZmlyc3REYXlPZk1vbnRoLmdldERheSgpID09PSBOdW1iZXIoc3RhcnRPZldlZWspKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsoZmlyc3REYXlPZk1vbnRoLCBOdW1iZXIoc3RhcnRPZldlZWspLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGU6IERhdGUsIHN0YXJ0T2ZXZWVrOiBudW1iZXIpOiBEYXRlIHtcblx0XHRjb25zdCBlbmRPZldlZWsgPSAoc3RhcnRPZldlZWsgPT09IDAgPyA2IDogc3RhcnRPZldlZWsgLSAxKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdERhdGVPZk1vbnRoKGRhdGUpO1xuXHRcdGlmIChsYXN0RGF5T2ZNb250aC5nZXREYXkoKSA9PT0gZW5kT2ZXZWVrKSB7XG5cdFx0XHRyZXR1cm4gbGFzdERheU9mTW9udGg7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlayhsYXN0RGF5T2ZNb250aCwgZW5kT2ZXZWVrLCAxKTtcblx0fVxuXG5cdHB1YmxpYyBnZXROZXh0RGF5KHRvZGF5OiBEYXRlKTogRGF0ZSB7XG5cdFx0Y29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG5cdFx0dG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcblx0XHRyZXR1cm4gdG9tb3Jyb3c7XG5cdH1cblxuXHRwdWJsaWMgZGF0ZURpZmYoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogbnVtYmVyIHtcblx0XHQvLyBDb21wYXJlIGJhc2VkIG9uIGRhdGUsIG5vdCBvbiB0aW1lXG5cdFx0Y29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIHN0YXJ0RGF0ZS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUuZ2V0RnVsbFllYXIoKSwgZW5kRGF0ZS5nZXRNb250aCgpLCBlbmREYXRlLmdldERhdGUoKSk7XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSkgLyAoIDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblx0fVxuXG5cdHB1YmxpYyBjb21wYXJlRGF0ZXMoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGF0ZTFZZWFyID0gZGF0ZTEuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMU1vbnRoID0gZGF0ZTEuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMURhdGUgPSBkYXRlMS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgZGF0ZTJZZWFyID0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMk1vbnRoID0gZGF0ZTIuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMkRhdGUgPSBkYXRlMi5nZXREYXRlKCk7XG5cblx0XHRyZXR1cm4gZGF0ZTFZZWFyID09PSBkYXRlMlllYXIgJiYgZGF0ZTFNb250aCA9PT0gZGF0ZTJNb250aCAmJiBkYXRlMURhdGUgPT09IGRhdGUyRGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBvcmRlcldlZWtEYXlzKHN0YXJ0RGF5T2ZXZWVrOiBEQVlTKTogREFZU1tdIHtcblx0XHRjb25zdCByb3RhdGUgPSBmdW5jdGlvbiAoYXJyYXksIGluZGV4KSB7XG5cdFx0XHRjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdHJldHVybiBhcnJheS5zbGljZShhcnJheUxlbmd0aCAtIGluZGV4KS5jb25jYXQoYXJyYXkuc2xpY2UoMCwgYXJyYXlMZW5ndGggLSBpbmRleCkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgd2Vla2RheXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG5cblx0XHRpZiAoc3RhcnREYXlPZldlZWsgPT09IERBWVMuU1VOREFZKSB7XG5cdFx0XHRyZXR1cm4gd2Vla2RheXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiByb3RhdGUod2Vla2RheXMsIDcgLSBzdGFydERheU9mV2Vlayk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0T25EZXN0cm95LFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVklFV1MsIERBWVMsIERhdGVSYW5nZUludGVyZmFjZSwgRXZlbnRJbnRlcmZhY2UsIEhpZ2hMaWdodEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiYWdlbmRhU2l6ZSQgfCBhc3luY1wiIGNsYXNzPVwiby1hZ2VuZGFcIj5cblx0PGRpdiBjbGFzcz1cIm8tYWdlbmRhX19pbm5lclwiPlxuXHRcdDxhdWktYWdlbmRhLW5hdmlnYXRpb25cblx0XHRcdFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuXHRcdFx0W3ZpZXddPVwidmlld1wiXG5cdFx0XHRbdG9kYXldPVwidG9kYXlcIlxuXHRcdFx0KG5hdmlnYXRlKT1cIm9uTmF2aWdhdGUoJGV2ZW50KVwiXG5cdFx0PjwvYXVpLWFnZW5kYS1uYXZpZ2F0aW9uPlxuXG5cdFx0PGF1aS1hZ2VuZGEtbW9udGgtdmlld1xuXHRcdFx0Km5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiXG5cdFx0XHRbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcblx0XHRcdFt3ZWVrZGF5c109XCJ3ZWVrZGF5c1wiXG5cdFx0XHRbc3RhcnREYXlPZldlZWtdPVwic3RhcnREYXlPZldlZWtcIlxuXHRcdFx0W2V2ZW50c109XCJldmVudHNcIlxuXHRcdFx0W2hpZ2hsaWdodHNdPVwiaGlnaGxpZ2h0c1wiXG5cdFx0XHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwibW9udGhFdmVudEl0ZW1UZW1wbGF0ZVwiXG5cdFx0XHQoc2VsZWN0RGF5KT1cIm9uU2VsZWN0RGF5KCRldmVudClcIlxuXHRcdFx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG5cdFx0XHQoY2xpY2tNb3JlKT1cIm9uQ2xpY2tNb3JlKCRldmVudClcIlxuXHRcdFx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdFx0XHQoZGlzcGxheVJhbmdlKT1cIm9uRGlzcGxheVJhbmdlKCRldmVudClcIlxuXHRcdFx0KHN3aXBlbGVmdCk9XCJzd2lwZSgkZXZlbnQpXCJcblx0XHRcdChzd2lwZXJpZ2h0KT1cInN3aXBlKCRldmVudClcIlxuXHRcdD48L2F1aS1hZ2VuZGEtbW9udGgtdmlldz5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0Ly8gRGVmYXVsdFxuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRzOiBFdmVudEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlldzogVklFV1M7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXG5cdC8vIE1vbnRoIHZpZXdcblx0QElucHV0KCkgcHVibGljIHN0YXJ0RGF5T2ZXZWVrOiBEQVlTID0gREFZUy5NT05EQVk7IC8vIFN0YXJ0IG9mIHRoZSB3ZWVrICgwID0gc3VuZGF5LCAxID0gbW9uZGF5LCAuLi4pXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgbW9udGhFdmVudEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0QE91dHB1dCgpIHB1YmxpYyBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVJhbmdlSW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja01vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFnZW5kYVNpemUkO1xuXHRwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0cHVibGljIHRvZGF5OiBEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2F0Y2hBZ2VuZGFTaXplKCk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLk1PTlRIKSB7XG5cdFx0XHRcdHRoaXMud2Vla2RheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLm9yZGVyV2Vla0RheXMoY2hhbmdlcy5zdGFydERheU9mV2Vlay5jdXJyZW50VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZShlKSB7XG5cdFx0aWYgKGUucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVsZWZ0Jykge1xuXHRcdFx0dGhpcy5uZXh0TW9udGgoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVyaWdodCcpIHtcblx0XHRcdHRoaXMucHJldk1vbnRoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIG9uTmF2aWdhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uRGlzcGxheVJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdERheS5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RXZlbnQoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RFdmVudC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdHB1YmxpYyBvbkNsaWNrTW9yZShkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VG9kYXkoKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblx0XHRyZXR1cm4gZGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2TW9udGgoKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0dGhpcy5vbk5hdmlnYXRlKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgMSkpO1xuXHR9XG5cblx0cHVibGljIG5leHRNb250aCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLm9uTmF2aWdhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAxKSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RSYW5nZShyYW5nZTogRGF0ZVJhbmdlSW50ZXJmYWNlKSB7XG5cdFx0dGhpcy5zZWxlY3RSYW5nZS5lbWl0KHJhbmdlKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hBZ2VuZGFTaXplKCk6IHZvaWQge1xuXHRcdHRoaXMuYWdlbmRhU2l6ZSQgPSB0aW1lcigwLCAyNTApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG5cdFx0XHRcdG1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgod2lkdGgpID0+IHtcblx0XHRcdFx0XHRpZiAod2lkdGggPiA4MDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLWJpZyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLXNtYWxsJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn0iLCJpbXBvcnQgeyBTbG90TWFwSW50ZXJmYWNlLCBTbG90SW50ZXJmYWNlLCBFdmVudEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudE1hcCB7XG5cdHB1YmxpYyBzbG90TWFwOiBTbG90TWFwSW50ZXJmYWNlO1xuXG5cdGNvbnN0cnVjdG9yKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgc2xvdHM6IG51bWJlcikge1xuXHRcdHRoaXMuaW5pdFNsb3RzKHdlZWtzLCBzbG90cyk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdFNsb3RzKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2xvdE1hcCA9IHdlZWtzLm1hcCgod2Vla2RheXMpID0+IHtcblx0XHRcdHJldHVybiB3ZWVrZGF5cy5tYXAoKGRheSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG5cdFx0XHRcdFx0c2xvdHM6IEFycmF5KGF2YWlsYWJsZVNsb3RzKS5maWxsKG51bGwpLFxuXHRcdFx0XHRcdGV2ZW50czogW10sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsbFNsb3Qod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyLCBzcGFuOiBudW1iZXIgPSAxLCBldmVudDogYW55ID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHNbc2xvdF0gPSB7XG5cdFx0XHRcdG1ldGE6IHtcblx0XHRcdFx0XHR3ZWVrLFxuXHRcdFx0XHRcdGRheSxcblx0XHRcdFx0XHRzbG90LFxuXHRcdFx0XHRcdHNwYW4sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50LFxuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGFuOyBpICs9IDEpIHtcblx0XHRcdFx0dGhpcy5maWxsU2xvdCh3ZWVrLCBkYXkgKyBpLCBzbG90KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90c1tzbG90XSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGlzU2xvdEZyZWUod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzW3Nsb3RdID09PSBudWxsO1xuXHR9XG5cblx0cHVibGljIGdldEZyZWVTbG90KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90cy5maW5kSW5kZXgoKG8pID0+IHtcblx0XHRcdHJldHVybiBvID09PSBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIsIHNwYW46IG51bWJlciwgZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNwYW47IGkgKz0gMSkge1xuXHRcdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5ICsgaV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRTbG90cyhldmVudEhlaWdodDogbnVtYmVyLCB3ZWVrSGVpZ2h0OiBudW1iZXIsIGhlaWdodE9mZnNldDogbnVtYmVyKTogU2xvdEludGVyZmFjZVtdIHtcblx0XHRjb25zdCBudW1iZXJPZkRheXMgPSB0aGlzLnNsb3RNYXBbMF0ubGVuZ3RoO1xuXHRcdGNvbnN0IGRheVdpZHRoID0gKCgxIC8gbnVtYmVyT2ZEYXlzKSAqIDEwMCk7XG5cblx0XHRjb25zdCBmbGF0dGVuID0gbGlzdCA9PiBsaXN0LnJlZHVjZShcblx0XHRcdChhLCBiKSA9PiBhLmNvbmNhdChBcnJheS5pc0FycmF5KGIpID8gZmxhdHRlbihiKSA6IGIpLCBbXVxuXHRcdCk7XG5cblx0XHRjb25zdCBzbG90cyA9IHRoaXMuc2xvdE1hcC5tYXAoKG8pID0+IHtcblx0XHRcdHJldHVybiBvLm1hcCgocCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcC5zbG90cztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZsYXR0ZW4oc2xvdHMpLmZpbHRlcigoc2xvdDogU2xvdEludGVyZmFjZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNsb3QgIT09IG51bGwgJiYgc2xvdCAhPT0gdHJ1ZTtcblx0XHR9KS5tYXAoKHNsb3Q6IFNsb3RJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNsb3QsXG5cdFx0XHRcdGRpc3BsYXk6IHtcblx0XHRcdFx0XHRsZWZ0OiAnY2FsYygnICsgZGF5V2lkdGggKiBzbG90Lm1ldGEuZGF5ICsgJyUgKyA0cHgpJyxcblx0XHRcdFx0XHR0b3A6IGhlaWdodE9mZnNldCArICh3ZWVrSGVpZ2h0ICogc2xvdC5tZXRhLndlZWspICsgKHNsb3QubWV0YS5zbG90ICogZXZlbnRIZWlnaHQpICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDogJ2NhbGMoJyArIGRheVdpZHRoICogc2xvdC5tZXRhLnNwYW4gKyAnJSAtIDhweCknLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRFdmVudHNNYXAoYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcC5tYXAoKGRheXMpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLm1hcCgoZGF5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcblx0XHRcdFx0XHR0b3RhbDogZGF5LmV2ZW50cy5sZW5ndGgsXG5cdFx0XHRcdFx0bW9yZTogZGF5LmV2ZW50cy5sZW5ndGggLSBhdmFpbGFibGVTbG90cyxcblx0XHRcdFx0XHRkb3RzOiBkYXkuZXZlbnRzLm1hcCgoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogc3RyaW5nID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudC5jb2xvcjtcblx0XHRcdFx0XHR9KS5maWx0ZXIoKGNvbG9yOiBzdHJpbmcsIHBvczogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhcnJheS5pbmRleE9mKGNvbG9yKSA9PT0gcG9zO1xuXHRcdFx0XHRcdH0pLnNsaWNlKDAsIDMpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWFwIH0gZnJvbSAnLi4vY2xhc3Nlcy9ldmVudC1tYXAuY2xhc3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgc29ydEV2ZW50cyhldmVudHM6IEV2ZW50SW50ZXJmYWNlW10pOiBFdmVudEludGVyZmFjZVtdIHtcblx0XHRyZXR1cm4gZXZlbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdC8vIFNvcnQgYnkgZGF0ZVxuXHRcdFx0Y29uc3Qgc29ydGVkQnlEYXRlID0gdGhpcy5zb3J0QnlEYXRlSGVscGVyKGEuc3RhcnREYXRlLCBiLnN0YXJ0RGF0ZSk7XG5cdFx0XHRpZiAoc29ydGVkQnlEYXRlICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybiBzb3J0ZWRCeURhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNvcnQgYnkgZGlmZlxuXHRcdFx0Y29uc3Qgc29ydGVkQnlTcGFuID0gdGhpcy5zb3J0QnlTcGFuSGVscGVyKGEuc3RhcnREYXRlLCBhLmVuZERhdGUsIGIuc3RhcnREYXRlLCBiLmVuZERhdGUpO1xuXHRcdFx0aWYgKHNvcnRlZEJ5U3BhbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc29ydGVkQnlTcGFuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3J0QnlEYXRlVGltZUhlbHBlcihhLnN0YXJ0RGF0ZSwgYi5zdGFydERhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVIZWxwZXIoYTogRGF0ZSwgYjogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3QgYVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwgYS5nZXRNb250aCgpLCBhLmdldERhdGUoKSk7XG5cdFx0Y29uc3QgYlN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGIuZ2V0RnVsbFllYXIoKSwgYi5nZXRNb250aCgpLCBiLmdldERhdGUoKSk7XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA8IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA+IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVUaW1lSGVscGVyKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuXHRcdGlmIChhIDwgYikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChhID4gYikge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRwdWJsaWMgc29ydEJ5U3BhbkhlbHBlcihhU3RhcnQ6IERhdGUsIGFFbmQ6IERhdGUsIGJTdGFydDogRGF0ZSwgYkVuZDogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3Qgc3BhbkEgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGFTdGFydCwgYUVuZCk7XG5cdFx0Y29uc3Qgc3BhbkIgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGJTdGFydCwgYkVuZCk7XG5cblx0XHRpZiAoc3BhbkEgPiBzcGFuQikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChzcGFuQSA8IHNwYW5CKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIHtcblx0cHVibGljIGV2ZW50TWFwOiBFdmVudE1hcDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSxcblx0XHRwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIGdlbmVyYXRlRXZlbnRNYXAoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdLCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBFdmVudE1hcCB7XG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh3ZWVrc1swXVswXS5kYXRlKTtcblx0XHRjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUod2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZSk7XG5cblx0XHQvLyAxLiBGb3JtYXRcblx0XHRjb25zdCBtYXBwZWRFdmVudHMgPSB0aGlzLmZvcm1hdEV2ZW50cyhldmVudHMpO1xuXG5cdFx0Ly8gMi4gUmVtb3ZlIGV2ZW50cyB3YWFyIGRlIGVuZERhdGUgPCBzdGFydE1vbnRoIG9mIGVuZERhdGUgPiBlbmRNb250aFxuXHRcdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gdGhpcy5maWx0ZXJFdmVudHMobWFwcGVkRXZlbnRzLCBmaXJzdERheSwgbGFzdERheSk7XG5cblx0XHQvLyAzLiBTb3J0ZWVyIHZhbiBvdWQgbmFhciBuaWV1dyBlbiB2YW4gbGFuZyBldmVudCBuYWFyIGtvcnQgZXZlbnRcblx0XHRjb25zdCBzb3J0ZWRFdmVudHM6IEV2ZW50SW50ZXJmYWNlW10gPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLnNvcnRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuXG5cdFx0Ly8gNC4gRmlsbCBFdmVudE1hcFxuXHRcdHRoaXMuZXZlbnRNYXAgPSBuZXcgRXZlbnRNYXAod2Vla3MsIGF2YWlsYWJsZVNsb3RzKTtcblx0XHRzb3J0ZWRFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5zdGFydERhdGUgPCBmaXJzdERheSkge1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZShmaXJzdERheSwgZXZlbnQuZW5kRGF0ZSwgMCwgMCwgZXZlbnQsIHdlZWtzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla3MubGVuZ3RoOyB3ZWVrICs9IDEpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCB3ZWVrc1t3ZWVrXS5sZW5ndGg7IGRheSArPSAxKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRlID0gd2Vla3Nbd2Vla11bZGF5XS5kYXRlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuY29tcGFyZURhdGVzKGV2ZW50LnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGUoZXZlbnQuc3RhcnREYXRlLCBldmVudC5lbmREYXRlLCB3ZWVrLCBkYXksIGV2ZW50LCB3ZWVrcyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCBmb3IgbG9vcCAtLT4gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRkYXkgPSB3ZWVrc1t3ZWVrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdlZWsgPSB3ZWVrcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRNYXA7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0RXZlbnRzKGV2ZW50cykge1xuXHRcdHJldHVybiBldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuXHRcdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSksXG5cdFx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRXZlbnRzKGV2ZW50cywgZmlyc3REYXksIGxhc3REYXkpIHtcblx0XHRyZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShldmVudC5lbmREYXRlKSA+IGZpcnN0RGF5ICYmIG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSkgPCBsYXN0RGF5O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGNhbGN1bGF0ZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBldmVudDogYW55LCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pOiB2b2lkIHtcblx0XHRjb25zdCB3ZWVrZGF5c0xlbmd0aCA9IHdlZWtzWzBdLmxlbmd0aDtcblx0XHRjb25zdCBsZW5ndGhPZkV2ZW50ID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihzdGFydCwgZW5kKTtcblx0XHRjb25zdCBzcGFuID0gbGVuZ3RoT2ZFdmVudCArIDEgPD0gd2Vla2RheXNMZW5ndGggLSBkYXkgPyBsZW5ndGhPZkV2ZW50ICsgMSA6IHdlZWtkYXlzTGVuZ3RoIC0gZGF5O1xuXHRcdGNvbnN0IGRpZmZ0ZXN0ID0gKGxlbmd0aE9mRXZlbnQgLSBzcGFuKSArIDE7XG5cblx0XHR0aGlzLmV2ZW50TWFwLmFkZEV2ZW50KHdlZWssIGRheSwgc3BhbiwgZXZlbnQpO1xuXG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuZXZlbnRNYXAuZ2V0RnJlZVNsb3Qod2VlaywgZGF5KTtcblx0XHRpZiAoc2xvdCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZXZlbnRNYXAuZmlsbFNsb3Qod2VlaywgZGF5LCBzbG90LCBzcGFuLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmZ0ZXN0ID4gMSAmJiB3ZWVrICsgMSA8IHdlZWtzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUod2Vla3Nbd2VlayArIDFdWzBdLmRhdGUsIGVuZCwgd2VlayArIDEsIDAsIGV2ZW50LCB3ZWVrcyk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0QmluZGluZyxcblx0T25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RXZlbnRJbnRlcmZhY2UsXG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdERBWVMsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHRTbG90SW50ZXJmYWNlLFxufSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5pbXBvcnQgeyBNb250aFZpZXdTbG90c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWRcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiB3ZWVrZGF5c1wiIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWQtY2VsbFwiPnt7IHdlZWtkYXkgfCB3ZWVrZGF5UGlwZSB9fTwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXJcblx0W3dlZWtzXT1cIndlZWtzXCJcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W3NlbGVjdGVkRGF5XT1cInNlbGVjdGVkRGF5XCJcblx0W3JhbmdlXT1cInNlbGVjdGVkUmFuZ2VcIlxuXHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHQocm93SGVpZ2h0KT1cIm9uQ2hhbmdlUm93SGVpZ2h0KCRldmVudClcIlxuXHQoc2VsZWN0RXZlbnQpPVwib25TZWxlY3RFdmVudCgkZXZlbnQpXCJcblx0KHNlbGVjdERheSk9XCJvblNlbGVjdERheSgkZXZlbnQpXCJcblx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdChjbGlja01vcmUpPVwib25DbGlja01vcmUoJGV2ZW50KVwiXG5cdChkcmFnUmFuZ2UpPVwib25EcmFnUmFuZ2UoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXI+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9fdGFibGUnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgc3RhcnREYXlPZldlZWs6IERBWVMgPSBEQVlTLk1PTkRBWTsgLy8gU3RhcnQgb2YgdGhlIHdlZWsgKDAgPSBzdW5kYXksIDEgPSBtb25kYXksIC4uLilcblx0QElucHV0KCkgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheVJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0UmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgc2xvdHM6IFNsb3RJbnRlcmZhY2VbXTtcblx0cHVibGljIHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXk6IERhdGU7XG5cdHB1YmxpYyBzZWxlY3RlZFJhbmdlID0ge1xuXHRcdGZyb206IG51bGwsXG5cdFx0dG86IG51bGwsXG5cdH07XG5cblx0cHVibGljIHdlZWtIZWlnaHQ6IG51bWJlcjtcblx0cHVibGljIGV2ZW50SGVpZ2h0ID0gMjg7XG5cdHB1YmxpYyBoZWlnaHRPZmZzZXQgPSAyODtcblx0cHVibGljIGV2ZW50c0J5RGF5OiBhbnk7XG5cdHB1YmxpYyBhdmFpbGFibGVTbG90cyA9IDA7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb250aFZpZXdTbG90c1NlcnZpY2U6IE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5hY3RpdmVEYXRlIHx8IGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGN1bGF0ZU1vbnRoV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLnN0YXJ0RGF5T2ZXZWVrLCB0aGlzLmhpZ2hsaWdodHMpO1xuXHRcdFx0dGhpcy5lbWl0RGlzcGxheVJhbmdlKHRoaXMud2Vla3MpO1xuXHRcdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRheTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBkYXk7XG5cdFx0aWYgKGRheSkge1xuXHRcdFx0dGhpcy5zZWxlY3REYXkuZW1pdChkYXkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRwdWJsaWMgb25DaGFuZ2VSb3dIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gdGhpcy5oZWlnaHRPZmZzZXQgLSAyMCkgLyB0aGlzLmV2ZW50SGVpZ2h0KTtcblx0XHR0aGlzLndlZWtIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25DbGlja01vcmUoZGF5OiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXkpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdHRoaXMuc2VsZWN0UmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25EcmFnUmFuZ2UocmFuZ2UpIHtcblx0XHR0aGlzLnNlbGVjdGVkUmFuZ2UgPSByYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2xvdHNBbmRXZWVrcygpIHtcblx0XHRpZiAodGhpcy5hdmFpbGFibGVTbG90cyA+PSAwKSB7XG5cdFx0XHRjb25zdCBldmVudE1hcCA9IHRoaXMubW9udGhWaWV3U2xvdHNTZXJ2aWNlLmdlbmVyYXRlRXZlbnRNYXAoXG5cdFx0XHRcdHRoaXMuZXZlbnRzLFxuXHRcdFx0XHR0aGlzLndlZWtzLFxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnNsb3RzID0gZXZlbnRNYXAuZ2V0U2xvdHModGhpcy5ldmVudEhlaWdodCwgdGhpcy53ZWVrSGVpZ2h0LCB0aGlzLmhlaWdodE9mZnNldCk7XG5cdFx0XHR0aGlzLndlZWtzID0gZXZlbnRNYXAuZ2V0RXZlbnRzTWFwKHRoaXMuYXZhaWxhYmxlU2xvdHMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTW9udGhXZWVrcyhkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogREFZUywgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlKTogV2Vla2RheUludGVyZmFjZVtdW10ge1xuXHRcdGNvbnN0IGRheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmdldERheXNGb3JNb250aChkYXRlLCBzdGFydE9mV2VlaywgaGlnaGxpZ2h0cyk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuZ2V0V2Vla3NGb3JNb250aChkYXlzKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdERpc3BsYXlSYW5nZSh3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pIHtcblx0XHRpZiAod2Vla3MubGVuZ3RoID4gMCAmJiB3ZWVrc1swXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBmcm9tID0gd2Vla3NbMF1bMF0uZGF0ZTtcblx0XHRcdGNvbnN0IHRvID0gd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZTtcblxuXHRcdFx0aWYgKGZyb20gJiYgdG8pIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmFuZ2UuZW1pdCh7XG5cdFx0XHRcdFx0ZnJvbSxcblx0XHRcdFx0XHR0byxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEVsZW1lbnRSZWYsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxuXHRUZW1wbGF0ZVJlZixcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRFdmVudEludGVyZmFjZSxcblx0V2Vla2RheUludGVyZmFjZSxcblx0U2xvdEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHREYXlSYW5nZUludGVyZmFjZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3LWNhbGVuZGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCIgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtcm93XCI+XG5cdDxkaXZcblx0XHQqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIlxuXHRcdCh0YXApPVwiZW1pdFNlbGVjdERheShkYXkuZGF0ZSlcIlxuXHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdCdpcy1jdXJyZW50JzogaXNUb2RheShkYXkuZGF0ZSksXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkKGRheS5kYXRlLCByYW5nZSksXG5cdFx0XHQnaXMtZmFkZWQnOiBpc0N1cnJlbnRNb250aChkYXkuZGF0ZSwgd2Vla3NbMV1bMF0uZGF0ZSlcblx0XHR9XCJcblx0XHRbY2xhc3NdPVwiZGF5LmhpZ2hsaWdodHNcIlxuXHRcdGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsXCJcblx0XHRbYXR0ci5kYXRlXT1cImRheS5kYXRlXCJcblx0XHQocHJlc3MpPVwidG91Y2hTdGFydChkYXkuZGF0ZSlcIlxuXHRcdD5cblxuXHRcdDxkaXYgKGRyYWdzdGFydCk9XCJkcmFnU3RhcnQoZGF5LmRhdGUpXCIgY2xhc3M9XCJvLWFnZW5kYV9kcmFnLXNlbGVjdFwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cblxuXHRcdDxzcGFuIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsLWhlYWRlclwiPlxuXHRcdFx0PHNwYW4+e3sgZGF5LmRhdGUgfCBkYXRlOidkJyB9fTwvc3Bhbj5cblx0XHQ8L3NwYW4+XG5cblx0XHQ8YXVpLWFnZW5kYS1tb3JlLWJ1dHRvblxuXHRcdFx0Km5nSWY9XCJkYXkubW9yZVwiXG5cdFx0XHRbaGlkZGVuRXZlbnRzXT1cImRheS5tb3JlXCJcblx0XHRcdChjbGlja01vcmUpPVwib25DbGlja01vcmUoZGF5LmRhdGUpXCJcblx0XHQ+PC9hdWktYWdlbmRhLW1vcmUtYnV0dG9uPlxuXG5cdFx0PGF1aS1tb250aC12aWV3LWRvdHNcblx0XHRcdCpuZ0lmPVwiZGF5LmRvdHNcIlxuXHRcdFx0W2RvdHNdPVwiZGF5LmRvdHNcIlxuXHRcdD48L2F1aS1tb250aC12aWV3LWRvdHM+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHNcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W2V2ZW50SXRlbVRlbXBsYXRlXT1cImV2ZW50SXRlbVRlbXBsYXRlXCJcblx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHM+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3Muby1hZ2VuZGFfX3RhYmxlLWdyaWQnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW107XG5cdEBJbnB1dCgpIHB1YmxpYyBzbG90czogU2xvdEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZERheTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgcmFuZ2UgPSB7XG5cdFx0ZnJvbTogbnVsbCxcblx0XHR0bzogbnVsbCxcblx0fTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHJvd0hlaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdERheSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tNb3JlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGRyYWdSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcHJlc3NlZERheTogc3RyaW5nOyAvLyBmb3JtYXQ6IFlZWVktTU0tRERcblx0cHVibGljIGN1cnJlbnREYXk6IHN0cmluZzsgLy8gZm9ybWF0OiBZWVlZLU1NLUREXG5cblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmN1cnJlbnREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUobmV3IERhdGUoKSwgJ1lZWVktTU0tREQnKTtcblxuXHRcdHRoaXMud2F0Y2hSb3dIZWlndGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChoZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodC5lbWl0KGhlaWdodCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcmFnT3ZlcigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJhbmdlKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdERyYWdSYW5nZShyYW5nZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcm9wKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFNlbGVjdFJhbmdlKHRoaXMucmFuZ2UpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgaXNUb2RheShkYXRlOiBEYXRlKSB7XG5cdFx0Y29uc3QgZGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cblx0XHRyZXR1cm4gZGF5ID09PSB0aGlzLmN1cnJlbnREYXk7XG5cdH1cblxuXHRwdWJsaWMgaXNTZWxlY3RlZChkYXk6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiBib29sZWFuIHtcblx0XHRjb25zdCBjdXJyZW50RGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRheSwgJ1lZWVktTU0tREQnKTtcblx0XHRjb25zdCBmcm9tID0gcmFuZ2UgJiYgcmFuZ2UuZnJvbSA/IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShuZXcgRGF0ZShyYW5nZS5mcm9tLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblx0XHRjb25zdCB0byA9IHJhbmdlICYmIHJhbmdlLnRvID8gRGF0ZUhlbHBlci5mb3JtYXREYXRlKG5ldyBEYXRlKHJhbmdlLnRvLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblxuXHRcdHJldHVybiBjdXJyZW50RGF5ID09PSB0aGlzLnNlbGVjdGVkRGF5XG5cdFx0XHR8fCAoKGZyb20gJiYgbmV3IERhdGUoZnJvbSkgPD0gbmV3IERhdGUoY3VycmVudERheSkpICYmICh0byAmJiBuZXcgRGF0ZSh0bykgPj0gbmV3IERhdGUoY3VycmVudERheSkpKTtcblx0fVxuXG5cdHB1YmxpYyByZXNldFJhbmdlKCkge1xuXHRcdHRoaXMuZW1pdERyYWdSYW5nZSh7XG5cdFx0XHRmcm9tOiBudWxsLFxuXHRcdFx0dG86IG51bGwsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgaXNDdXJyZW50TW9udGgoZGF5OiBzdHJpbmcsIGRhdGU6IERhdGUpIHtcblx0XHRjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5KTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoZGF0ZSk7XG5cblx0XHRyZXR1cm4gZGF5RGF0ZS5nZXRNb250aCgpICE9PSBjdXJyZW50LmdldE1vbnRoKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdFNlbGVjdERheShkYXk6IERhdGUpOiB2b2lkIHtcblx0XHQvLyBOZXZlciBlbWl0IGEgc3BlY2lmaWMgZGF5IGFzIGEgYERhdGVgLCBhbHdheXMgdXNlIGEgc3RyaW5nIGluIGBZWVlZLU1NLUREYCBmb3JtYXQuXG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF5LCAnWVlZWS1NTS1ERCcpKTtcblx0XHR0aGlzLnJlc2V0UmFuZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBlbWl0RHJhZ1JhbmdlKHJhbmdlKSB7XG5cdFx0dGhpcy5kcmFnUmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHR9XG5cblx0cHVibGljIG9uQ2xpY2tNb3JlKGRheTogRGF0ZSkge1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHRcdHRoaXMuY2xpY2tNb3JlLmVtaXQoZGF5KTtcblx0fVxuXG5cdHB1YmxpYyBkcmFnU3RhcnQoZGF0ZTogRGF0ZSkge1xuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQobnVsbCk7XG5cdFx0dGhpcy5wcmVzc2VkRGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cdH1cblxuXHRwdWJsaWMgdG91Y2hTdGFydChkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChudWxsKTtcblx0XHR0aGlzLnByZXNzZWREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF0ZSwgJ1lZWVktTU0tREQnKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hSb3dIZWlndGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRjb25zdCB3ZWVrSGVpZ2h0JCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRcdHRpbWVyKDAsIDI1MClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLWFnZW5kYV9fdGFibGUtcm93Jyk7XG5cblx0XHRcdFx0aWYgKHJvdykge1xuXHRcdFx0XHRcdHdlZWtIZWlnaHQkLm5leHQocm93Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHdlZWtIZWlnaHQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hEcmFnT3ZlcigpIHtcblx0XHRjb25zdCB0YXJnZXQkOiBTdWJqZWN0PERheVJhbmdlSW50ZXJmYWNlPiA9IG5ldyBTdWJqZWN0KCk7XG5cblx0XHRjb25zdCBoYW5kbGVFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0ZScpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJlc3NlZERheSA9IG5ldyBEYXRlKHRoaXMucHJlc3NlZERheSk7XG5cdFx0XHRcdGNvbnN0IGRyYWdPdmVyRGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSk7XG5cblx0XHRcdFx0aWYgKHByZXNzZWREYXkgPCBkcmFnT3ZlckRhdGUpIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogdGhpcy5wcmVzc2VkRGF5LFxuXHRcdFx0XHRcdFx0dG86IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkcmFnT3ZlckRhdGUgYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRyYWdPdmVyRGF0ZSBhcyBEYXRlLCAnWVlZWS1NTS1ERCcpLFxuXHRcdFx0XHRcdFx0dG86IHRoaXMucHJlc3NlZERheSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRoYW5kbGVFbGVtZW50KHRhcmdldCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wcmVzc2VkRGF5KSB7XG5cdFx0XHRcdGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcblx0XHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRoYW5kbGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdHJldHVybiB0YXJnZXQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geC5mcm9tID09PSB5LmZyb20gJiYgeC50byA9PT0geS50bztcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoRHJvcCgpIHtcblx0XHRjb25zdCB0YXJnZXQkID0gbmV3IFN1YmplY3QoKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRhcmdldCQubmV4dCgpO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuXHRcdFx0aWYgKHRoaXMucHJlc3NlZERheSkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnByZXNzZWREYXkgPSBudWxsO1xuXHRcdFx0XHR0YXJnZXQkLm5leHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0YXJnZXQkO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdC8vIE5ldmVyIGVtaXQgYSBzcGVjaWZpYyBkYXkgYXMgYSBgRGF0ZWAsIGFsd2F5cyB1c2UgYSBzdHJpbmcgaW4gYFlZWVktTU0tRERgIGZvcm1hdC5cblx0XHR0aGlzLnNlbGVjdFJhbmdlLmVtaXQoe1xuXHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKHJhbmdlLmZyb20gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdHRvOiBEYXRlSGVscGVyLmZvcm1hdERhdGUocmFuZ2UudG8gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbW9udGgtdmlldy1kb3RzJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX2RvdHNcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgZG90IG9mIGRvdHNcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZG90IH1cIiBjbGFzcz1cIm8tYWdlbmRhX19kb3RcIj48L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RG90c0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBkb3RzOiBzdHJpbmdbXTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlLCBTbG90TWV0YUludGVyZmFjZSwgU2xvdERpc3BsYXlJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdCcsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWV2ZW50PVwiZXZlbnRcIj5cblx0PGRpdiBjbGFzcz1cImEtZXZlbnRcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZXZlbnQuZnVsbERheSA/IGV2ZW50LmNvbG9yIDogbnVsbCB9XCIgW25nQ2xhc3NdPVwieyAnYS1ldmVudC0tbGlnaHQnOiBldmVudC5mdWxsRGF5IH1cIj5cblx0XHQ8ZGl2ICpuZ0lmPVwiIWV2ZW50LmZ1bGxEYXlcIiBjbGFzcz1cImEtZXZlbnRfX2JhclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBldmVudC5jb2xvciB9XCI+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1ldmVudF9fY29udGVudFwiPlxuXHRcdFx0PGRpdiAqbmdJZj1cImV2ZW50Lmljb25CZWZvcmUgfHwgZXZlbnQudGl0bGVcIiBjbGFzcz1cImEtZXZlbnRfX21haW5cIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCJldmVudC5pY29uQmVmb3JlXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQmVmb3JlIH19IGEtZXZlbnRfX2ljb25cIj48L3NwYW4+PHNwYW4gKm5nSWY9XCJldmVudC50aXRsZVwiIGNsYXNzPVwiYS1ldmVudF9fdGl0bGVcIj57eyBldmVudC50aXRsZSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyIHx8ICFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19leHRyYVwiPlxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cIiFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19tZXRhXCI+e3sgZXZlbnQuc3RhcnREYXRlIHwgZGF0ZTonSEg6bW0nIH19PC9zcGFuPjxzcGFuICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQWZ0ZXIgfX0gYS1ldmVudF9faWNvblwiPjwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtZXZlbnRcIiBbbmdTdHlsZV09XCJ7XG5cdGxlZnQ6IGRpc3BsYXkubGVmdCxcblx0dG9wOiBkaXNwbGF5LnRvcCxcblx0d2lkdGg6IGRpc3BsYXkud2lkdGhcbn1cIj5cblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlID8gdGVtcGxhdGUgOiBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgZXZlbnQ6IGV2ZW50IH1cIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RXZlbnRTbG90Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGV2ZW50OiBFdmVudEludGVyZmFjZTtcblx0QElucHV0KCkgcHVibGljIG1ldGE6IFNsb3RNZXRhSW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzcGxheTogU2xvdERpc3BsYXlJbnRlcmZhY2U7XG5cdEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90cycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90c1wiPlxuXHQ8YXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3Rcblx0XHQqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90c1wiXG5cdFx0W2V2ZW50XT1cInNsb3QuZXZlbnRcIlxuXHRcdFttZXRhXT1cInNsb3QubWV0YVwiXG5cdFx0W2Rpc3BsYXldPVwic2xvdC5kaXNwbGF5XCJcblx0XHRbdGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHRcdChjbGljayk9XCJlbWl0U2VsZWN0RXZlbnQoc2xvdC5ldmVudClcIlxuXHQ+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdD5cbjwvZGl2PlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFZpZXdFdmVudFNsb3RzQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIHNsb3RzOiBTbG90SW50ZXJmYWNlW10gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblxuXHRwdWJsaWMgZW1pdFNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTU9SRV9MQUJFTCB9IGZyb20gJy4uLy4uL2FnZW5kYS5jb25mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb3JlLWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tYWdlbmRhX19tb3JlXCI+XG5cdDxidXR0b24gKGNsaWNrKT1cImVtaXRDbGlja01vcmUoJGV2ZW50KVwiICpuZ0lmPVwiaGlkZGVuRXZlbnRzID4gMFwiIGNsYXNzPVwiby1hZ2VuZGFfX21vcmUtYnV0dG9uXCI+XG5cdFx0e3sgaGlkZGVuRXZlbnRzIH19IHt7IGxhYmVsIH19XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb3JlQnV0dG9uQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGhpZGRlbkV2ZW50czogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE1PUkVfTEFCRUwpIHB1YmxpYyBsYWJlbFxuXHQpIHt9XG5cblx0cHVibGljIGVtaXRDbGlja01vcmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWSUVXUyB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbmF2aWdhdGlvbicsXG5cdHRlbXBsYXRlOiBgPGg0PlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwidmlldyA9PT0gdmlld3MuREFZXCI+e3sgYWN0aXZlRGF0ZSB8IGRhdGU6J2RkL01NL3knIH19PC9uZy1jb250YWluZXI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiPnt7IGFjdGl2ZURhdGUgfCBkYXRlOidNJyB8IG1vbnRoUGlwZSB9fSB7eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcgPT09IHZpZXdzLllFQVJcIj57eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cbjwvaDQ+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fbmF2XCI+XG5cdDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldmlvdXMgbW9udGhcIiBjbGFzcz1cIm8tYWdlbmRhX19uYXYtcHJldmlvdXMgYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwicHJldigpXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidG9kYXlcIiBjbGFzcz1cImEtYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9Ub2RheSgpXCI+XG5cdFx0VmFuZGFhZ1xuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dCBtb250aFwiIGNsYXNzPVwiby1hZ2VuZGFfX25hdi1uZXh0IGEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuXHRcdDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9faGVhZGVyJykgcHVibGljIGNzc0NsYXNzID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZURhdGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHZpZXc6IFZJRVdTO1xuXHRASW5wdXQoKSBwdWJsaWMgdG9kYXk6IERhdGU7XG5cdEBPdXRwdXQoKSBwdWJsaWMgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXHRwdWJsaWMgbmF2aWdhdGUkOiBTdWJqZWN0PERhdGU+ID0gbmV3IFN1YmplY3QoKTtcblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMuY2hhbmdlRGF0ZShkYXRlLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgbmV4dCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLmNoYW5nZURhdGUoZGF0ZSwgMSk7XG5cdH1cblxuXHRwdWJsaWMgZ29Ub1RvZGF5KCk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy50b2RheSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLkRBWSkge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VEYXkoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuTU9OVEgpIHtcblx0XHRcdHJldHVybiB0aGlzLm5hdmlnYXRlJC5uZXh0KHRoaXMuY2hhbmdlTW9udGgoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuWUVBUikge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VZZWFyKGRhdGUsIG9yaWVudCkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VEYXkoZGF0ZTogRGF0ZSwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgb3JpZW50KTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VNb250aChkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG9yaWVudCwgMSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlWWVhcihkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgKyBvcmllbnQsIDAsIDEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBBZ2VuZGFDb21wb25lbnQgfSBmcm9tICcuL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy1jYWxlbmRhci9tb250aC12aWV3LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC12aWV3LWRvdHMvbW9udGgtdmlldy1kb3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9yZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QWdlbmRhQ29tcG9uZW50LFxuXHRNb250aFZpZXdDb21wb25lbnQsXG5cdE1vbnRoVmlld0NhbGVuZGFyQ29tcG9uZW50LFxuXHRNb250aFZpZXdEb3RzQ29tcG9uZW50LFxuXHRNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQsXG5cdE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQsXG5cdE1vcmVCdXR0b25Db21wb25lbnQsXG5cdE5hdmlnYXRpb25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIH0gZnJvbSAnLi9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ1NlcnZpY2UgfSBmcm9tICcuL3NvcnRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcblx0RGF0ZUhlbHBlclNlcnZpY2UsXG5cdE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0U29ydGluZ1NlcnZpY2UsXG5dO1xuIiwiaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcblx0b3ZlcnJpZGVzID0gPGFueT57XG5cdFx0J3N3aXBlJzogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMICB9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUGlwZXMgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHtcblx0V0VFS0RBWV9MQUJFTFMsXG5cdERFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdE1PTlRIX0xBQkVMUyxcblx0REVGQVVMVF9NT05USF9MQUJFTFMsXG5cdE1PUkVfTEFCRUwsXG5cdERFRkFVTFRfTU9SRV9MQUJFTCxcbn0gZnJvbSAnLi9hZ2VuZGEuY29uZic7XG5pbXBvcnQgeyBIYW1tZXJDb25maWcgfSBmcm9tICcuL2hhbW1lci5jb25mJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQaXBlcyxcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IE1PTlRIX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBNT1JFX0xBQkVMLCB1c2VWYWx1ZTogREVGQVVMVF9NT1JFX0xBQkVMIH0sXG5cdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmRhTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHdlZWtkYXlMYWJlbHM6IHN0cmluZ1tdLFxuXHRcdG1vbnRoTGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb3JlTGFiZWw6IHN0cmluZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFnZW5kYU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRTZXJ2aWNlcyxcblx0XHRcdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PUkVfTEFCRUwsIHVzZVZhbHVlOiBtb3JlTGFiZWwgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiUGlwZSIsIkluamVjdCIsIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJTdWJqZWN0IiwidGltZXIiLCJ0YWtlVW50aWwiLCJtYXAiLCJkaXN0aW5jdFVudGlsQ2hhbmdlZCIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdEJpbmRpbmciLCJEYXRlSGVscGVyIiwiZGVib3VuY2VUaW1lIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJIYW1tZXIuRElSRUNUSU9OX0FMTCIsIkhhbW1lckdlc3R1cmVDb25maWciLCJIQU1NRVJfR0VTVFVSRV9DT05GSUciLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6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
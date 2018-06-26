import { InjectionToken, Pipe, Inject, Injectable, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, HostBinding, NgModule } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { Subject } from 'rxjs/Subject';
import { takeUntil, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { __extends, __assign } from 'tslib';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { DIRECTION_ALL } from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
var /** @type {?} */ WEEKDAY_LABELS = new InjectionToken('weekdayLabels');
var /** @type {?} */ MONTH_LABELS = new InjectionToken('monthLabels');
var /** @type {?} */ MORE_LABEL = new InjectionToken('moreLabel');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthPipe = /** @class */ (function () {
    function MonthPipe(monthLabels) {
        if (monthLabels === void 0) { monthLabels = DEFAULT_MONTH_LABELS; }
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
        { type: Pipe, args: [{
                    name: 'monthPipe',
                },] },
    ];
    /** @nocollapse */
    MonthPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MONTH_LABELS,] }] }
    ]; };
    return MonthPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WeekdayPipe = /** @class */ (function () {
    function WeekdayPipe(weekdayLabels) {
        if (weekdayLabels === void 0) { weekdayLabels = DEFAULT_WEEKDAY_LABELS; }
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
        { type: Pipe, args: [{
                    name: 'weekdayPipe',
                },] },
    ];
    /** @nocollapse */
    WeekdayPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WEEKDAY_LABELS,] }] }
    ]; };
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
var DateHelperService = /** @class */ (function () {
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
        if (range === void 0) { range = null; }
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
        { type: Injectable },
    ];
    return DateHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AgendaComponent = /** @class */ (function () {
    function AgendaComponent(elementRef, dateHelperService) {
        this.elementRef = elementRef;
        this.dateHelperService = dateHelperService;
        this.views = VIEWS;
        // Month view
        this.startDayOfWeek = DAYS.MONDAY;
        this.navigate = new EventEmitter();
        this.selectRange = new EventEmitter();
        this.selectDay = new EventEmitter();
        this.selectEvent = new EventEmitter();
        this.clickMore = new EventEmitter();
        this.weekdays = [1, 2, 3, 4, 5, 6, 0];
        this.today = this.getToday();
        this.componentDestroyed$ = new Subject();
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
        this.agendaSize$ = timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$), map(function () {
            return _this.elementRef.nativeElement.offsetWidth;
        }), distinctUntilChanged())
            .pipe(map(function (width) {
            if (width > 800) {
                return 'o-agenda--big';
            }
            else {
                return 'o-agenda--small';
            }
        }));
    };
    AgendaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda',
                    template: "<div [ngClass]=\"agendaSize$ | async\" class=\"o-agenda\">\n\t<div class=\"o-agenda__inner\">\n\t\t<aui-agenda-navigation\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[view]=\"view\"\n\t\t\t[today]=\"today\"\n\t\t\t(navigate)=\"onNavigate($event)\"\n\t\t></aui-agenda-navigation>\n\n\t\t<aui-agenda-month-view\n\t\t\t*ngIf=\"view === views.MONTH\"\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[weekdays]=\"weekdays\"\n\t\t\t[startDayOfWeek]=\"startDayOfWeek\"\n\t\t\t[events]=\"events\"\n\t\t\t[highlights]=\"highlights\"\n\t\t\t[eventItemTemplate]=\"monthEventItemTemplate\"\n\t\t\t(selectDay)=\"onSelectDay($event)\"\n\t\t\t(selectEvent)=\"onSelectEvent($event)\"\n\t\t\t(clickMore)=\"onClickMore($event)\"\n\t\t\t(selectRange)=\"onSelectRange($event)\"\n\t\t\t(displayRange)=\"onDisplayRange($event)\"\n\t\t\t(swipeleft)=\"swipe($event)\"\n\t\t\t(swiperight)=\"swipe($event)\"\n\t\t></aui-agenda-month-view>\n\t</div>\n</div>\n",
                    styles: [":host{display:block;width:100%;height:100%}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    AgendaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DateHelperService }
    ]; };
    AgendaComponent.propDecorators = {
        events: [{ type: Input }],
        view: [{ type: Input }],
        startDayOfWeek: [{ type: Input }],
        activeDate: [{ type: Input }],
        highlights: [{ type: Input }],
        monthEventItemTemplate: [{ type: Input }],
        navigate: [{ type: Output }],
        selectRange: [{ type: Output }],
        selectDay: [{ type: Output }],
        selectEvent: [{ type: Output }],
        clickMore: [{ type: Output }]
    };
    return AgendaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EventMap = /** @class */ (function () {
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
        if (span === void 0) { span = 1; }
        if (event === void 0) { event = null; }
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
var SortingService = /** @class */ (function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    SortingService.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    return SortingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewSlotsService = /** @class */ (function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    MonthViewSlotsService.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: SortingService }
    ]; };
    return MonthViewSlotsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(monthViewSlotsService, dateHelperService) {
        this.monthViewSlotsService = monthViewSlotsService;
        this.dateHelperService = dateHelperService;
        this.cssClass = true;
        this.startDayOfWeek = DAYS.MONDAY;
        this.weekdays = [1, 2, 3, 4, 5, 6, 0];
        this.displayRange = new EventEmitter();
        this.selectRange = new EventEmitter();
        this.selectDay = new EventEmitter();
        this.selectEvent = new EventEmitter();
        this.clickMore = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'aui-agenda-month-view',
                    template: "<div class=\"o-agenda__table-head\">\n\t<div *ngFor=\"let weekday of weekdays\" class=\"o-agenda__table-head-cell\">{{ weekday | weekdayPipe }}</div>\n</div>\n\n<aui-agenda-month-view-calendar\n\t[weeks]=\"weeks\"\n\t[slots]=\"slots\"\n\t[selectedDay]=\"selectedDay\"\n\t[range]=\"selectedRange\"\n\t[eventItemTemplate]=\"eventItemTemplate\"\n\t(rowHeight)=\"onChangeRowHeight($event)\"\n\t(selectEvent)=\"onSelectEvent($event)\"\n\t(selectDay)=\"onSelectDay($event)\"\n\t(selectRange)=\"onSelectRange($event)\"\n\t(clickMore)=\"onClickMore($event)\"\n\t(dragRange)=\"onDragRange($event)\"\n></aui-agenda-month-view-calendar>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MonthViewComponent.ctorParameters = function () { return [
        { type: MonthViewSlotsService },
        { type: DateHelperService }
    ]; };
    MonthViewComponent.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.o-agenda__table',] }],
        activeDate: [{ type: Input }],
        startDayOfWeek: [{ type: Input }],
        highlights: [{ type: Input }],
        weekdays: [{ type: Input }],
        events: [{ type: Input }],
        eventItemTemplate: [{ type: Input }],
        displayRange: [{ type: Output }],
        selectRange: [{ type: Output }],
        selectDay: [{ type: Output }],
        selectEvent: [{ type: Output }],
        clickMore: [{ type: Output }]
    };
    return MonthViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewCalendarComponent = /** @class */ (function () {
    function MonthViewCalendarComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssClass = true;
        this.range = {
            from: null,
            to: null,
        };
        this.rowHeight = new EventEmitter();
        this.selectDay = new EventEmitter();
        this.selectRange = new EventEmitter();
        this.selectEvent = new EventEmitter();
        this.clickMore = new EventEmitter();
        this.dragRange = new EventEmitter();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    MonthViewCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDay = DateHelper.formatDate(new Date(), 'YYYY-MM-DD');
        this.watchRowHeigth()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function (height) {
            _this.rowHeight.emit(height);
        });
        this.watchDragOver()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function (range) {
            _this.emitDragRange(range);
        });
        this.watchDrop()
            .pipe(takeUntil(this.componentDestroyed$))
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
        var /** @type {?} */ day = DateHelper.formatDate(date, 'YYYY-MM-DD');
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
        var /** @type {?} */ currentDay = DateHelper.formatDate(day, 'YYYY-MM-DD');
        var /** @type {?} */ from = range && range.from ? DateHelper.formatDate(new Date(range.from.toString()), 'YYYY-MM-DD') : null;
        var /** @type {?} */ to = range && range.to ? DateHelper.formatDate(new Date(range.to.toString()), 'YYYY-MM-DD') : null;
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
        this.selectDay.emit(DateHelper.formatDate(day, 'YYYY-MM-DD'));
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
        this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
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
        this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
    };
    /**
     * @return {?}
     */
    MonthViewCalendarComponent.prototype.watchRowHeigth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ weekHeight$ = new Subject();
        timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            var /** @type {?} */ row = _this.elementRef.nativeElement.querySelector('.o-agenda__table-row');
            if (row) {
                weekHeight$.next(row.offsetHeight);
            }
        });
        return weekHeight$
            .pipe(distinctUntilChanged());
    };
    /**
     * @return {?}
     */
    MonthViewCalendarComponent.prototype.watchDragOver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ target$ = new Subject();
        var /** @type {?} */ handleElement = function (element) {
            if (element && element.parentElement && element.parentElement.getAttribute('date')) {
                var /** @type {?} */ pressedDay = new Date(_this.pressedDay);
                var /** @type {?} */ dragOverDate = new Date(element.parentElement.getAttribute('date'));
                if (pressedDay < dragOverDate) {
                    target$.next({
                        from: _this.pressedDay,
                        to: DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                    });
                }
                else {
                    target$.next({
                        from: DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                        to: _this.pressedDay,
                    });
                }
            }
        };
        document.addEventListener('dragover', function (event) {
            event.preventDefault();
            var /** @type {?} */ target = /** @type {?} */ (event.target);
            handleElement(target);
        }, false);
        document.addEventListener('touchmove', function (event) {
            if (_this.pressedDay) {
                var /** @type {?} */ touch = event.touches[0];
                var /** @type {?} */ element = /** @type {?} */ (document.elementFromPoint(touch.clientX, touch.clientY));
                handleElement(element);
            }
        }, false);
        return target$
            .pipe(distinctUntilChanged(function (x, y) {
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
        var /** @type {?} */ target$ = new Subject();
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
            from: DateHelper.formatDate(/** @type {?} */ (range.from), 'YYYY-MM-DD'),
            to: DateHelper.formatDate(/** @type {?} */ (range.to), 'YYYY-MM-DD'),
        });
    };
    MonthViewCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda-month-view-calendar',
                    template: "<div *ngFor=\"let week of weeks\" class=\"o-agenda__table-row\">\n\t<div\n\t\t*ngFor=\"let day of week\"\n\t\t(tap)=\"emitSelectDay(day.date)\"\n\t\t[ngClass]=\"{\n\t\t\t'is-current': isToday(day.date),\n\t\t\t'is-selected': isSelected(day.date, range),\n\t\t\t'is-faded': isCurrentMonth(day.date, weeks[1][0].date)\n\t\t}\"\n\t\t[class]=\"day.highlights\"\n\t\tclass=\"o-agenda__table-row-cell\"\n\t\t[attr.date]=\"day.date\"\n\t\t(press)=\"touchStart(day.date)\"\n\t\t>\n\n\t\t<div (dragstart)=\"dragStart(day.date)\" class=\"o-agenda_drag-select\" draggable=\"true\"></div>\n\n\t\t<span class=\"o-agenda__table-row-cell-header\">\n\t\t\t<span>{{ day.date | date:'d' }}</span>\n\t\t</span>\n\n\t\t<aui-agenda-more-button\n\t\t\t*ngIf=\"day.more\"\n\t\t\t[hiddenEvents]=\"day.more\"\n\t\t\t(clickMore)=\"onClickMore(day.date)\"\n\t\t></aui-agenda-more-button>\n\n\t\t<aui-month-view-dots\n\t\t\t*ngIf=\"day.dots\"\n\t\t\t[dots]=\"day.dots\"\n\t\t></aui-month-view-dots>\n\t</div>\n</div>\n\n<aui-agenda-month-view-event-slots\n\t[slots]=\"slots\"\n\t[eventItemTemplate]=\"eventItemTemplate\"\n\t(selectEvent)=\"onSelectEvent($event)\"\n></aui-agenda-month-view-event-slots>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MonthViewCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MonthViewCalendarComponent.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.o-agenda__table-grid',] }],
        weeks: [{ type: Input }],
        slots: [{ type: Input }],
        eventItemTemplate: [{ type: Input }],
        selectedDay: [{ type: Input }],
        range: [{ type: Input }],
        rowHeight: [{ type: Output }],
        selectDay: [{ type: Output }],
        selectRange: [{ type: Output }],
        selectEvent: [{ type: Output }],
        clickMore: [{ type: Output }],
        dragRange: [{ type: Output }]
    };
    return MonthViewCalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewDotsComponent = /** @class */ (function () {
    function MonthViewDotsComponent() {
    }
    MonthViewDotsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-month-view-dots',
                    template: "<div class=\"o-agenda__dots\">\n\t<div *ngFor=\"let dot of dots\" [ngStyle]=\"{ 'background-color': dot }\" class=\"o-agenda__dot\"></div>\n</div>\n",
                },] },
    ];
    MonthViewDotsComponent.propDecorators = {
        dots: [{ type: Input }]
    };
    return MonthViewDotsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewEventSlotComponent = /** @class */ (function () {
    function MonthViewEventSlotComponent() {
    }
    MonthViewEventSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda-month-view-event-slot',
                    template: "<ng-template #defaultTemplate let-event=\"event\">\n\t<div class=\"a-event\" [ngStyle]=\"{ 'background-color': event.fullDay ? event.color : null }\" [ngClass]=\"{ 'a-event--light': event.fullDay }\">\n\t\t<div *ngIf=\"!event.fullDay\" class=\"a-event__bar\" [ngStyle]=\"{ 'background-color': event.color }\"></div>\n\n\t\t<div class=\"a-event__content\">\n\t\t\t<div *ngIf=\"event.iconBefore || event.title\" class=\"a-event__main\">\n\t\t\t\t<span *ngIf=\"event.iconBefore\" class=\"{{ event.iconBefore }} a-event__icon\"></span><span *ngIf=\"event.title\" class=\"a-event__title\">{{ event.title }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"event.iconAfter || !event.fullDay\" class=\"a-event__extra\">\n\t\t\t\t<span *ngIf=\"!event.fullDay\" class=\"a-event__meta\">{{ event.startDate | date:'HH:mm' }}</span><span *ngIf=\"event.iconAfter\" class=\"{{ event.iconAfter }} a-event__icon\"></span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-template>\n\n<div class=\"o-agenda__table-event\" [ngStyle]=\"{\n\tleft: display.left,\n\ttop: display.top,\n\twidth: display.width\n}\">\n\t<ng-container *ngTemplateOutlet=\"template ? template : defaultTemplate; context: { event: event }\"></ng-container>\n</div>\n",
                },] },
    ];
    MonthViewEventSlotComponent.propDecorators = {
        event: [{ type: Input }],
        meta: [{ type: Input }],
        display: [{ type: Input }],
        template: [{ type: Input }]
    };
    return MonthViewEventSlotComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthViewEventSlotsComponent = /** @class */ (function () {
    function MonthViewEventSlotsComponent() {
        this.slots = [];
        this.selectEvent = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'aui-agenda-month-view-event-slots',
                    template: "<div class=\"aui-agenda-month-view-event-slots\">\n\t<aui-agenda-month-view-event-slot\n\t\t*ngFor=\"let slot of slots\"\n\t\t[event]=\"slot.event\"\n\t\t[meta]=\"slot.meta\"\n\t\t[display]=\"slot.display\"\n\t\t[template]=\"eventItemTemplate\"\n\t\t(click)=\"emitSelectEvent(slot.event)\"\n\t></aui-agenda-month-view-event-slot>\n</div>\n\n",
                },] },
    ];
    MonthViewEventSlotsComponent.propDecorators = {
        slots: [{ type: Input }],
        eventItemTemplate: [{ type: Input }],
        selectEvent: [{ type: Output }]
    };
    return MonthViewEventSlotsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MoreButtonComponent = /** @class */ (function () {
    function MoreButtonComponent(label) {
        this.label = label;
        this.clickMore = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'aui-agenda-more-button',
                    template: "<div class=\"o-agenda__more\">\n\t<button (click)=\"emitClickMore($event)\" *ngIf=\"hiddenEvents > 0\" class=\"o-agenda__more-button\">\n\t\t{{ hiddenEvents }} {{ label }}\n\t</button>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    MoreButtonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MORE_LABEL,] }] }
    ]; };
    MoreButtonComponent.propDecorators = {
        hiddenEvents: [{ type: Input }],
        clickMore: [{ type: Output }]
    };
    return MoreButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.cssClass = true;
        this.navigate = new EventEmitter();
        this.views = VIEWS;
        this.navigate$ = new Subject();
        this.componentDestroyed$ = new Subject();
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
            .pipe(takeUntil(this.componentDestroyed$), distinctUntilChanged(), debounceTime(200))
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
        { type: Component, args: [{
                    selector: 'aui-agenda-navigation',
                    template: "<h4>\n\t<ng-container *ngIf=\"view === views.DAY\">{{ activeDate | date:'dd/MM/y' }}</ng-container>\n\t<ng-container *ngIf=\"view === views.MONTH\">{{ activeDate | date:'M' | monthPipe }} {{ activeDate | date:'y' }}</ng-container>\n\t<ng-container *ngIf=\"view === views.YEAR\">{{ activeDate | date:'y' }}</ng-container>\n</h4>\n\n<div class=\"o-agenda__nav\">\n\t<button tabindex=\"-1\" type=\"button\" aria-label=\"previous month\" class=\"o-agenda__nav-previous a-button has-icon\" (click)=\"prev()\">\n\t\t<i class=\"fa fa-angle-left\"></i>\n\t</button>\n\n\t<button tabindex=\"0\" type=\"button\" aria-label=\"today\" class=\"a-button\" (click)=\"goToToday()\">\n\t\tVandaag\n\t</button>\n\n\t<button tabindex=\"0\" type=\"button\" aria-label=\"next month\" class=\"o-agenda__nav-next a-button has-icon\" (click)=\"next()\">\n\t\t<i class=\"fa fa-angle-right\"></i>\n\t</button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    NavigationComponent.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.o-agenda__header',] }],
        activeDate: [{ type: Input }],
        view: [{ type: Input }],
        today: [{ type: Input }],
        navigate: [{ type: Output }]
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
var HammerConfig = /** @class */ (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = /** @type {?} */ ({
            'swipe': { direction: DIRECTION_ALL },
        });
        return _this;
    }
    return HammerConfig;
}(HammerGestureConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = DEFAULT_WEEKDAY_LABELS, ɵ1 = DEFAULT_MONTH_LABELS, ɵ2 = DEFAULT_MORE_LABEL;
var AgendaModule = /** @class */ (function () {
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
                { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
            ],
        };
    };
    AgendaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
                        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
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

export { AgendaModule, EventMap, AgendaComponent, MonthViewComponent, MonthViewEventSlotComponent, MonthViewEventSlotsComponent, NavigationComponent, MonthPipe, WeekdayPipe, DateHelperService, MonthViewSlotsService, SortingService, DAYS, VIEWS, DEFAULT_MONTH_LABELS as ɵc, DEFAULT_MORE_LABEL as ɵd, DEFAULT_WEEKDAY_LABELS as ɵb, MONTH_LABELS as ɵf, MORE_LABEL as ɵg, WEEKDAY_LABELS as ɵe, Components as ɵh, MonthViewCalendarComponent as ɵi, MonthViewDotsComponent as ɵj, MoreButtonComponent as ɵk, HammerConfig as ɵm, Pipes as ɵa, Services as ɵl };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9hZ2VuZGEuY29uZi50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvcGlwZXMvbW9udGgucGlwZS50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvcGlwZXMvd2Vla2RheS5waXBlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9waXBlcy9pbmRleC50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvdHlwZXMvYWdlbmRhLnR5cGVzLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jbGFzc2VzL2V2ZW50LW1hcC5jbGFzcy50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvY29tcG9uZW50cy9tb250aC12aWV3LWNhbGVuZGFyL21vbnRoLXZpZXctY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZG90cy9tb250aC12aWV3LWRvdHMuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9oYW1tZXIuY29uZi50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvYWdlbmRhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9XRUVLREFZX0xBQkVMUyA9IFtcblx0J1N1bmRheScsXG5cdCdNb25kYXknLFxuXHQnVHVlc2RheScsXG5cdCdXZWRuZXNkYXknLFxuXHQnVGh1cnNkYXknLFxuXHQnRmlyZGF5Jyxcblx0J1NhdHVyZGF5Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01PTlRIX0xBQkVMUyA9IFtcblx0J0phbnVhcnknLFxuXHQnRmVicnVhcnknLFxuXHQnTWFyY2gnLFxuXHQnQXByaWwnLFxuXHQnTWF5Jyxcblx0J0p1bmUnLFxuXHQnSnVseScsXG5cdCdBdWd1c3QnLFxuXHQnU2VwdGVtYmVyJyxcblx0J09jdG9iZXInLFxuXHQnTm92ZW1iZXInLFxuXHQnRGVjZW1iZXInLFxuXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9SRV9MQUJFTCA9ICdtb3JlJztcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZ1tdPignd2Vla2RheUxhYmVscycpO1xuZXhwb3J0IGNvbnN0IE1PTlRIX0xBQkVMUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmdbXT4oJ21vbnRoTGFiZWxzJyk7XG5leHBvcnQgY29uc3QgTU9SRV9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdtb3JlTGFiZWwnKTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNT05USF9MQUJFTFMsIERFRkFVTFRfTU9OVEhfTEFCRUxTIH0gZnJvbSAnLi4vYWdlbmRhLmNvbmYnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdtb250aFBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChNT05USF9MQUJFTFMpIHByaXZhdGUgbW9udGhMYWJlbHMgPSBERUZBVUxUX01PTlRIX0xBQkVMU1xuXHQpIHt9XG5cblx0cHVibGljIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogc3RyaW5nIHtcblx0XHRjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cblx0XHRpZiAoaXNOYU4obW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IChtb250aCAtIDEpLnRvU3RyaW5nKCk7XG5cdFx0cmV0dXJuIHRoaXMubW9udGhMYWJlbHNbaW5kZXgudG9TdHJpbmcoKV0gfHwgREVGQVVMVF9NT05USF9MQUJFTFNbaW5kZXgudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXRUVLREFZX0xBQkVMUywgREVGQVVMVF9XRUVLREFZX0xBQkVMUyB9IGZyb20gJy4uL2FnZW5kYS5jb25mJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnd2Vla2RheVBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBXZWVrZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFdFRUtEQVlfTEFCRUxTKSBwcml2YXRlIHdlZWtkYXlMYWJlbHMgPSBERUZBVUxUX1dFRUtEQVlfTEFCRUxTXG5cdCkge31cblxuXHRwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLndlZWtkYXlMYWJlbHNbKHZhbHVlKS50b1N0cmluZygpXSB8fCBERUZBVUxUX1dFRUtEQVlfTEFCRUxTWyh2YWx1ZSkudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IE1vbnRoUGlwZSB9IGZyb20gJy4vbW9udGgucGlwZSc7XG5pbXBvcnQgeyBXZWVrZGF5UGlwZSB9IGZyb20gJy4vd2Vla2RheS5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRNb250aFBpcGUsXG5cdFdlZWtkYXlQaXBlLFxuXTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRJbnRlcmZhY2Uge1xuXHRzdGFydERhdGU6IERhdGU7XG5cdGVuZERhdGU6IERhdGU7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RNZXRhSW50ZXJmYWNlIHtcblx0d2VlazogbnVtYmVyO1xuXHRkYXk6IG51bWJlcjtcblx0c2xvdDogbnVtYmVyO1xuXHRzcGFuOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdERpc3BsYXlJbnRlcmZhY2Uge1xuXHRsZWZ0OiBzdHJpbmc7XG5cdHRvcDogc3RyaW5nO1xuXHR3aWR0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RJbnRlcmZhY2Uge1xuXHRtZXRhPzogU2xvdE1ldGFJbnRlcmZhY2U7XG5cdGRpc3BsYXk/OiBTbG90RGlzcGxheUludGVyZmFjZTtcblx0ZXZlbnQ/OiBFdmVudEludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbG90TWFwSXRlbUludGVyZmFjZSB7XG5cdHNsb3RzOiAoU2xvdEludGVyZmFjZXxib29sZWFuKVtdO1xuXHRldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cbn1cblxuZXhwb3J0IHR5cGUgU2xvdE1hcEludGVyZmFjZSA9IFNsb3RNYXBJdGVtSW50ZXJmYWNlW11bXTtcblxuZXhwb3J0IHR5cGUgRG90TWFwSW50ZXJmYWNlID0gKHN0cmluZylbXVtdW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlSW50ZXJmYWNlIHtcblx0ZnJvbTogRGF0ZXxzdHJpbmc7XG5cdHRvOiBEYXRlfHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlSYW5nZUludGVyZmFjZSB7XG5cdGZyb206IHN0cmluZztcblx0dG86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gREFZUyB7XG5cdFNVTkRBWSxcblx0TU9OREFZLFxuXHRUVUVTREFZLFxuXHRXRURORVNEQVksXG5cdFRIVVJTREFZLFxuXHRGUklEQVksXG5cdFNBVFVSREFZLFxufVxuXG5leHBvcnQgZW51bSBWSUVXUyB7XG5cdERBWSA9ICdEQVknLFxuXHRXRUVLID0gJ1dFRUsnLFxuXHRNT05USCA9ICdNT05USCcsXG5cdFlFQVIgPSAnWUVBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheUludGVyZmFjZSB7XG5cdGRhdGU6IERhdGU7XG5cdC8vIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0Ly8gdG90YWw6IG51bWJlcjtcblx0Ly8gZG90czogc3RyaW5nW107XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBSYW5nZUludGVyZmFjZSA9IChudW1iZXJbXXxEYXRlKVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hMaWdodEludGVyZmFjZSB7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogUmFuZ2VJbnRlcmZhY2U7XG59XG4iLCIvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0UmFuZ2VJbnRlcmZhY2UsXG5cdERBWVMsXG59IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyU2VydmljZSB7XG5cblx0cHVibGljIGdldERheXNGb3JNb250aChkYXRlOiBEYXRlLCBzdGFydERheU9mV2VlazogbnVtYmVyLCByYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlID0gbnVsbCk6IFdlZWtkYXlJbnRlcmZhY2VbXSB7XG5cdFx0Y29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5nZXRGaXJzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBtYXggPSB0aGlzLmRhdGVEaWZmKGZpcnN0RGF5T2ZNb250aCwgbGFzdERheU9mTW9udGgpO1xuXG5cdFx0Y29uc3QgZGF5cyA9IFtcblx0XHRcdHsgZGF0ZTogZmlyc3REYXlPZk1vbnRoLCBoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIGZpcnN0RGF5T2ZNb250aCkgfSxcblx0XHRdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgbmV4dERheSA9IHRoaXMuZ2V0TmV4dERheShkYXlzW2ldLmRhdGUpO1xuXG5cdFx0XHRkYXlzLnB1c2goe1xuXHRcdFx0XHRoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIG5leHREYXkpLFxuXHRcdFx0XHRkYXRlOiBuZXh0RGF5LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRheXM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SGlnaGxpZ2h0cyhyYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcblx0XHRpZiAoIXJhbmdlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJhbmdlKS5maWx0ZXIoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5SYW5nZShyYW5nZVtrZXldLCBkYXRlKTtcblx0XHR9KS5qb2luKCcgJyk7XG5cdH1cblxuXHRwdWJsaWMgaW5SYW5nZShyYW5nZTogUmFuZ2VJbnRlcmZhY2UsIGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcmFuZ2Uuc29tZSgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uaW5kZXhPZihkYXRlLmdldERheSgpKSAhPT0gLTE7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShpdGVtKTtcblx0XHRcdGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbXBhcmVEYXRlcyhkLCBkYXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRXZWVrc0Zvck1vbnRoKGRheXM6IFdlZWtkYXlJbnRlcmZhY2VbXSk6IFdlZWtkYXlJbnRlcmZhY2VbXVtdIHtcblx0XHRjb25zdCBudW1iZXJPZldlZWtzID0gTWF0aC5yb3VuZChkYXlzLmxlbmd0aCAvIDcpO1xuXG5cdFx0cmV0dXJuIEFycmF5KG51bWJlck9mV2Vla3MpLmZpbGwobnVsbCkubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLnNsaWNlKGluZGV4ICogNywgKGluZGV4ICsgMSkgKiA3KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRMYXN0RGF0ZU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuXHR9XG5cblx0cHVibGljIG1vdmVUb0RheU9mV2VlayhkYXRlOiBEYXRlLCBkYXlPZldlZWs6IG51bWJlciwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRsZXQgZGlmZiA9IChkYXlPZldlZWsgLSBkYXRlLmdldERheSgpICsgNyAqIChvcmllbnQgfHwgKyAxKSkgJSA3O1xuXHRcdGNvbnN0IHZhbHVlID0gKGRpZmYgPT09IDApID8gZGlmZiArPSA3ICogKG9yaWVudCB8fCArMSkgOiBkaWZmO1xuXHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcblx0XHRyZXR1cm4gbmV3IERhdGUoZC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgdmFsdWUgKiAxKSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RXZWVrRGF5T2ZNb250aChkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogbnVtYmVyfHN0cmluZyk6IERhdGUge1xuXHRcdGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcblx0XHRpZiAoZmlyc3REYXlPZk1vbnRoLmdldERheSgpID09PSBOdW1iZXIoc3RhcnRPZldlZWspKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsoZmlyc3REYXlPZk1vbnRoLCBOdW1iZXIoc3RhcnRPZldlZWspLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGU6IERhdGUsIHN0YXJ0T2ZXZWVrOiBudW1iZXIpOiBEYXRlIHtcblx0XHRjb25zdCBlbmRPZldlZWsgPSAoc3RhcnRPZldlZWsgPT09IDAgPyA2IDogc3RhcnRPZldlZWsgLSAxKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdERhdGVPZk1vbnRoKGRhdGUpO1xuXHRcdGlmIChsYXN0RGF5T2ZNb250aC5nZXREYXkoKSA9PT0gZW5kT2ZXZWVrKSB7XG5cdFx0XHRyZXR1cm4gbGFzdERheU9mTW9udGg7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlayhsYXN0RGF5T2ZNb250aCwgZW5kT2ZXZWVrLCAxKTtcblx0fVxuXG5cdHB1YmxpYyBnZXROZXh0RGF5KHRvZGF5OiBEYXRlKTogRGF0ZSB7XG5cdFx0Y29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG5cdFx0dG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcblx0XHRyZXR1cm4gdG9tb3Jyb3c7XG5cdH1cblxuXHRwdWJsaWMgZGF0ZURpZmYoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogbnVtYmVyIHtcblx0XHQvLyBDb21wYXJlIGJhc2VkIG9uIGRhdGUsIG5vdCBvbiB0aW1lXG5cdFx0Y29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIHN0YXJ0RGF0ZS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUuZ2V0RnVsbFllYXIoKSwgZW5kRGF0ZS5nZXRNb250aCgpLCBlbmREYXRlLmdldERhdGUoKSk7XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSkgLyAoIDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblx0fVxuXG5cdHB1YmxpYyBjb21wYXJlRGF0ZXMoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGF0ZTFZZWFyID0gZGF0ZTEuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMU1vbnRoID0gZGF0ZTEuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMURhdGUgPSBkYXRlMS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgZGF0ZTJZZWFyID0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMk1vbnRoID0gZGF0ZTIuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMkRhdGUgPSBkYXRlMi5nZXREYXRlKCk7XG5cblx0XHRyZXR1cm4gZGF0ZTFZZWFyID09PSBkYXRlMlllYXIgJiYgZGF0ZTFNb250aCA9PT0gZGF0ZTJNb250aCAmJiBkYXRlMURhdGUgPT09IGRhdGUyRGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBvcmRlcldlZWtEYXlzKHN0YXJ0RGF5T2ZXZWVrOiBEQVlTKTogREFZU1tdIHtcblx0XHRjb25zdCByb3RhdGUgPSBmdW5jdGlvbiAoYXJyYXksIGluZGV4KSB7XG5cdFx0XHRjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdHJldHVybiBhcnJheS5zbGljZShhcnJheUxlbmd0aCAtIGluZGV4KS5jb25jYXQoYXJyYXkuc2xpY2UoMCwgYXJyYXlMZW5ndGggLSBpbmRleCkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgd2Vla2RheXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG5cblx0XHRpZiAoc3RhcnREYXlPZldlZWsgPT09IERBWVMuU1VOREFZKSB7XG5cdFx0XHRyZXR1cm4gd2Vla2RheXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiByb3RhdGUod2Vla2RheXMsIDcgLSBzdGFydERheU9mV2Vlayk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0T25EZXN0cm95LFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVklFV1MsIERBWVMsIERhdGVSYW5nZUludGVyZmFjZSwgRXZlbnRJbnRlcmZhY2UsIEhpZ2hMaWdodEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiYWdlbmRhU2l6ZSQgfCBhc3luY1wiIGNsYXNzPVwiby1hZ2VuZGFcIj5cblx0PGRpdiBjbGFzcz1cIm8tYWdlbmRhX19pbm5lclwiPlxuXHRcdDxhdWktYWdlbmRhLW5hdmlnYXRpb25cblx0XHRcdFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuXHRcdFx0W3ZpZXddPVwidmlld1wiXG5cdFx0XHRbdG9kYXldPVwidG9kYXlcIlxuXHRcdFx0KG5hdmlnYXRlKT1cIm9uTmF2aWdhdGUoJGV2ZW50KVwiXG5cdFx0PjwvYXVpLWFnZW5kYS1uYXZpZ2F0aW9uPlxuXG5cdFx0PGF1aS1hZ2VuZGEtbW9udGgtdmlld1xuXHRcdFx0Km5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiXG5cdFx0XHRbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcblx0XHRcdFt3ZWVrZGF5c109XCJ3ZWVrZGF5c1wiXG5cdFx0XHRbc3RhcnREYXlPZldlZWtdPVwic3RhcnREYXlPZldlZWtcIlxuXHRcdFx0W2V2ZW50c109XCJldmVudHNcIlxuXHRcdFx0W2hpZ2hsaWdodHNdPVwiaGlnaGxpZ2h0c1wiXG5cdFx0XHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwibW9udGhFdmVudEl0ZW1UZW1wbGF0ZVwiXG5cdFx0XHQoc2VsZWN0RGF5KT1cIm9uU2VsZWN0RGF5KCRldmVudClcIlxuXHRcdFx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG5cdFx0XHQoY2xpY2tNb3JlKT1cIm9uQ2xpY2tNb3JlKCRldmVudClcIlxuXHRcdFx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdFx0XHQoZGlzcGxheVJhbmdlKT1cIm9uRGlzcGxheVJhbmdlKCRldmVudClcIlxuXHRcdFx0KHN3aXBlbGVmdCk9XCJzd2lwZSgkZXZlbnQpXCJcblx0XHRcdChzd2lwZXJpZ2h0KT1cInN3aXBlKCRldmVudClcIlxuXHRcdD48L2F1aS1hZ2VuZGEtbW9udGgtdmlldz5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0Ly8gRGVmYXVsdFxuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRzOiBFdmVudEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlldzogVklFV1M7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXG5cdC8vIE1vbnRoIHZpZXdcblx0QElucHV0KCkgcHVibGljIHN0YXJ0RGF5T2ZXZWVrOiBEQVlTID0gREFZUy5NT05EQVk7IC8vIFN0YXJ0IG9mIHRoZSB3ZWVrICgwID0gc3VuZGF5LCAxID0gbW9uZGF5LCAuLi4pXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgbW9udGhFdmVudEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0QE91dHB1dCgpIHB1YmxpYyBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVJhbmdlSW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja01vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFnZW5kYVNpemUkO1xuXHRwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0cHVibGljIHRvZGF5OiBEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2F0Y2hBZ2VuZGFTaXplKCk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLk1PTlRIKSB7XG5cdFx0XHRcdHRoaXMud2Vla2RheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLm9yZGVyV2Vla0RheXMoY2hhbmdlcy5zdGFydERheU9mV2Vlay5jdXJyZW50VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZShlKSB7XG5cdFx0aWYgKGUucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVsZWZ0Jykge1xuXHRcdFx0dGhpcy5uZXh0TW9udGgoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVyaWdodCcpIHtcblx0XHRcdHRoaXMucHJldk1vbnRoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIG9uTmF2aWdhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uRGlzcGxheVJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdERheS5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RXZlbnQoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RFdmVudC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdHB1YmxpYyBvbkNsaWNrTW9yZShkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VG9kYXkoKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblx0XHRyZXR1cm4gZGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2TW9udGgoKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0dGhpcy5vbk5hdmlnYXRlKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgMSkpO1xuXHR9XG5cblx0cHVibGljIG5leHRNb250aCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLm9uTmF2aWdhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAxKSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RSYW5nZShyYW5nZTogRGF0ZVJhbmdlSW50ZXJmYWNlKSB7XG5cdFx0dGhpcy5zZWxlY3RSYW5nZS5lbWl0KHJhbmdlKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hBZ2VuZGFTaXplKCk6IHZvaWQge1xuXHRcdHRoaXMuYWdlbmRhU2l6ZSQgPSB0aW1lcigwLCAyNTApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG5cdFx0XHRcdG1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgod2lkdGgpID0+IHtcblx0XHRcdFx0XHRpZiAod2lkdGggPiA4MDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLWJpZyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLXNtYWxsJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBTbG90TWFwSW50ZXJmYWNlLCBTbG90SW50ZXJmYWNlLCBFdmVudEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudE1hcCB7XG5cdHB1YmxpYyBzbG90TWFwOiBTbG90TWFwSW50ZXJmYWNlO1xuXG5cdGNvbnN0cnVjdG9yKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgc2xvdHM6IG51bWJlcikge1xuXHRcdHRoaXMuaW5pdFNsb3RzKHdlZWtzLCBzbG90cyk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdFNsb3RzKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2xvdE1hcCA9IHdlZWtzLm1hcCgod2Vla2RheXMpID0+IHtcblx0XHRcdHJldHVybiB3ZWVrZGF5cy5tYXAoKGRheSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG5cdFx0XHRcdFx0c2xvdHM6IEFycmF5KGF2YWlsYWJsZVNsb3RzKS5maWxsKG51bGwpLFxuXHRcdFx0XHRcdGV2ZW50czogW10sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsbFNsb3Qod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyLCBzcGFuOiBudW1iZXIgPSAxLCBldmVudDogYW55ID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHNbc2xvdF0gPSB7XG5cdFx0XHRcdG1ldGE6IHtcblx0XHRcdFx0XHR3ZWVrLFxuXHRcdFx0XHRcdGRheSxcblx0XHRcdFx0XHRzbG90LFxuXHRcdFx0XHRcdHNwYW4sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50LFxuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGFuOyBpICs9IDEpIHtcblx0XHRcdFx0dGhpcy5maWxsU2xvdCh3ZWVrLCBkYXkgKyBpLCBzbG90KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90c1tzbG90XSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGlzU2xvdEZyZWUod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzW3Nsb3RdID09PSBudWxsO1xuXHR9XG5cblx0cHVibGljIGdldEZyZWVTbG90KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90cy5maW5kSW5kZXgoKG8pID0+IHtcblx0XHRcdHJldHVybiBvID09PSBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIsIHNwYW46IG51bWJlciwgZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNwYW47IGkgKz0gMSkge1xuXHRcdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5ICsgaV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRTbG90cyhldmVudEhlaWdodDogbnVtYmVyLCB3ZWVrSGVpZ2h0OiBudW1iZXIsIGhlaWdodE9mZnNldDogbnVtYmVyKTogU2xvdEludGVyZmFjZVtdIHtcblx0XHRjb25zdCBudW1iZXJPZkRheXMgPSB0aGlzLnNsb3RNYXBbMF0ubGVuZ3RoO1xuXHRcdGNvbnN0IGRheVdpZHRoID0gKCgxIC8gbnVtYmVyT2ZEYXlzKSAqIDEwMCk7XG5cblx0XHRjb25zdCBmbGF0dGVuID0gbGlzdCA9PiBsaXN0LnJlZHVjZShcblx0XHRcdChhLCBiKSA9PiBhLmNvbmNhdChBcnJheS5pc0FycmF5KGIpID8gZmxhdHRlbihiKSA6IGIpLCBbXVxuXHRcdCk7XG5cblx0XHRjb25zdCBzbG90cyA9IHRoaXMuc2xvdE1hcC5tYXAoKG8pID0+IHtcblx0XHRcdHJldHVybiBvLm1hcCgocCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcC5zbG90cztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZsYXR0ZW4oc2xvdHMpLmZpbHRlcigoc2xvdDogU2xvdEludGVyZmFjZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNsb3QgIT09IG51bGwgJiYgc2xvdCAhPT0gdHJ1ZTtcblx0XHR9KS5tYXAoKHNsb3Q6IFNsb3RJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNsb3QsXG5cdFx0XHRcdGRpc3BsYXk6IHtcblx0XHRcdFx0XHRsZWZ0OiAnY2FsYygnICsgZGF5V2lkdGggKiBzbG90Lm1ldGEuZGF5ICsgJyUgKyA0cHgpJyxcblx0XHRcdFx0XHR0b3A6IGhlaWdodE9mZnNldCArICh3ZWVrSGVpZ2h0ICogc2xvdC5tZXRhLndlZWspICsgKHNsb3QubWV0YS5zbG90ICogZXZlbnRIZWlnaHQpICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDogJ2NhbGMoJyArIGRheVdpZHRoICogc2xvdC5tZXRhLnNwYW4gKyAnJSAtIDhweCknLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRFdmVudHNNYXAoYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcC5tYXAoKGRheXMpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLm1hcCgoZGF5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcblx0XHRcdFx0XHR0b3RhbDogZGF5LmV2ZW50cy5sZW5ndGgsXG5cdFx0XHRcdFx0bW9yZTogZGF5LmV2ZW50cy5sZW5ndGggLSBhdmFpbGFibGVTbG90cyxcblx0XHRcdFx0XHRkb3RzOiBkYXkuZXZlbnRzLm1hcCgoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogc3RyaW5nID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudC5jb2xvcjtcblx0XHRcdFx0XHR9KS5maWx0ZXIoKGNvbG9yOiBzdHJpbmcsIHBvczogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhcnJheS5pbmRleE9mKGNvbG9yKSA9PT0gcG9zO1xuXHRcdFx0XHRcdH0pLnNsaWNlKDAsIDMpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWFwIH0gZnJvbSAnLi4vY2xhc3Nlcy9ldmVudC1tYXAuY2xhc3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgc29ydEV2ZW50cyhldmVudHM6IEV2ZW50SW50ZXJmYWNlW10pOiBFdmVudEludGVyZmFjZVtdIHtcblx0XHRyZXR1cm4gZXZlbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdC8vIFNvcnQgYnkgZGF0ZVxuXHRcdFx0Y29uc3Qgc29ydGVkQnlEYXRlID0gdGhpcy5zb3J0QnlEYXRlSGVscGVyKGEuc3RhcnREYXRlLCBiLnN0YXJ0RGF0ZSk7XG5cdFx0XHRpZiAoc29ydGVkQnlEYXRlICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybiBzb3J0ZWRCeURhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNvcnQgYnkgZGlmZlxuXHRcdFx0Y29uc3Qgc29ydGVkQnlTcGFuID0gdGhpcy5zb3J0QnlTcGFuSGVscGVyKGEuc3RhcnREYXRlLCBhLmVuZERhdGUsIGIuc3RhcnREYXRlLCBiLmVuZERhdGUpO1xuXHRcdFx0aWYgKHNvcnRlZEJ5U3BhbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc29ydGVkQnlTcGFuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3J0QnlEYXRlVGltZUhlbHBlcihhLnN0YXJ0RGF0ZSwgYi5zdGFydERhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVIZWxwZXIoYTogRGF0ZSwgYjogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3QgYVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwgYS5nZXRNb250aCgpLCBhLmdldERhdGUoKSk7XG5cdFx0Y29uc3QgYlN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGIuZ2V0RnVsbFllYXIoKSwgYi5nZXRNb250aCgpLCBiLmdldERhdGUoKSk7XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA8IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA+IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVUaW1lSGVscGVyKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuXHRcdGlmIChhIDwgYikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChhID4gYikge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRwdWJsaWMgc29ydEJ5U3BhbkhlbHBlcihhU3RhcnQ6IERhdGUsIGFFbmQ6IERhdGUsIGJTdGFydDogRGF0ZSwgYkVuZDogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3Qgc3BhbkEgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGFTdGFydCwgYUVuZCk7XG5cdFx0Y29uc3Qgc3BhbkIgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGJTdGFydCwgYkVuZCk7XG5cblx0XHRpZiAoc3BhbkEgPiBzcGFuQikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChzcGFuQSA8IHNwYW5CKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIHtcblx0cHVibGljIGV2ZW50TWFwOiBFdmVudE1hcDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSxcblx0XHRwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIGdlbmVyYXRlRXZlbnRNYXAoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdLCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBFdmVudE1hcCB7XG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh3ZWVrc1swXVswXS5kYXRlKTtcblx0XHRjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUod2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZSk7XG5cblx0XHQvLyAxLiBGb3JtYXRcblx0XHRjb25zdCBtYXBwZWRFdmVudHMgPSB0aGlzLmZvcm1hdEV2ZW50cyhldmVudHMpO1xuXG5cdFx0Ly8gMi4gUmVtb3ZlIGV2ZW50cyB3YWFyIGRlIGVuZERhdGUgPCBzdGFydE1vbnRoIG9mIGVuZERhdGUgPiBlbmRNb250aFxuXHRcdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gdGhpcy5maWx0ZXJFdmVudHMobWFwcGVkRXZlbnRzLCBmaXJzdERheSwgbGFzdERheSk7XG5cblx0XHQvLyAzLiBTb3J0ZWVyIHZhbiBvdWQgbmFhciBuaWV1dyBlbiB2YW4gbGFuZyBldmVudCBuYWFyIGtvcnQgZXZlbnRcblx0XHRjb25zdCBzb3J0ZWRFdmVudHM6IEV2ZW50SW50ZXJmYWNlW10gPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLnNvcnRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuXG5cdFx0Ly8gNC4gRmlsbCBFdmVudE1hcFxuXHRcdHRoaXMuZXZlbnRNYXAgPSBuZXcgRXZlbnRNYXAod2Vla3MsIGF2YWlsYWJsZVNsb3RzKTtcblx0XHRzb3J0ZWRFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5zdGFydERhdGUgPCBmaXJzdERheSkge1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZShmaXJzdERheSwgZXZlbnQuZW5kRGF0ZSwgMCwgMCwgZXZlbnQsIHdlZWtzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla3MubGVuZ3RoOyB3ZWVrICs9IDEpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCB3ZWVrc1t3ZWVrXS5sZW5ndGg7IGRheSArPSAxKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRlID0gd2Vla3Nbd2Vla11bZGF5XS5kYXRlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuY29tcGFyZURhdGVzKGV2ZW50LnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGUoZXZlbnQuc3RhcnREYXRlLCBldmVudC5lbmREYXRlLCB3ZWVrLCBkYXksIGV2ZW50LCB3ZWVrcyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCBmb3IgbG9vcCAtLT4gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRkYXkgPSB3ZWVrc1t3ZWVrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdlZWsgPSB3ZWVrcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRNYXA7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0RXZlbnRzKGV2ZW50cykge1xuXHRcdHJldHVybiBldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuXHRcdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSksXG5cdFx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRXZlbnRzKGV2ZW50cywgZmlyc3REYXksIGxhc3REYXkpIHtcblx0XHRyZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShldmVudC5lbmREYXRlKSA+IGZpcnN0RGF5ICYmIG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSkgPCBsYXN0RGF5O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGNhbGN1bGF0ZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBldmVudDogYW55LCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pOiB2b2lkIHtcblx0XHRjb25zdCB3ZWVrZGF5c0xlbmd0aCA9IHdlZWtzWzBdLmxlbmd0aDtcblx0XHRjb25zdCBsZW5ndGhPZkV2ZW50ID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihzdGFydCwgZW5kKTtcblx0XHRjb25zdCBzcGFuID0gbGVuZ3RoT2ZFdmVudCArIDEgPD0gd2Vla2RheXNMZW5ndGggLSBkYXkgPyBsZW5ndGhPZkV2ZW50ICsgMSA6IHdlZWtkYXlzTGVuZ3RoIC0gZGF5O1xuXHRcdGNvbnN0IGRpZmZ0ZXN0ID0gKGxlbmd0aE9mRXZlbnQgLSBzcGFuKSArIDE7XG5cblx0XHR0aGlzLmV2ZW50TWFwLmFkZEV2ZW50KHdlZWssIGRheSwgc3BhbiwgZXZlbnQpO1xuXG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuZXZlbnRNYXAuZ2V0RnJlZVNsb3Qod2VlaywgZGF5KTtcblx0XHRpZiAoc2xvdCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZXZlbnRNYXAuZmlsbFNsb3Qod2VlaywgZGF5LCBzbG90LCBzcGFuLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmZ0ZXN0ID4gMSAmJiB3ZWVrICsgMSA8IHdlZWtzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUod2Vla3Nbd2VlayArIDFdWzBdLmRhdGUsIGVuZCwgd2VlayArIDEsIDAsIGV2ZW50LCB3ZWVrcyk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0QmluZGluZyxcblx0T25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RXZlbnRJbnRlcmZhY2UsXG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdERBWVMsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHRTbG90SW50ZXJmYWNlLFxufSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5pbXBvcnQgeyBNb250aFZpZXdTbG90c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWRcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiB3ZWVrZGF5c1wiIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWQtY2VsbFwiPnt7IHdlZWtkYXkgfCB3ZWVrZGF5UGlwZSB9fTwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXJcblx0W3dlZWtzXT1cIndlZWtzXCJcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W3NlbGVjdGVkRGF5XT1cInNlbGVjdGVkRGF5XCJcblx0W3JhbmdlXT1cInNlbGVjdGVkUmFuZ2VcIlxuXHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHQocm93SGVpZ2h0KT1cIm9uQ2hhbmdlUm93SGVpZ2h0KCRldmVudClcIlxuXHQoc2VsZWN0RXZlbnQpPVwib25TZWxlY3RFdmVudCgkZXZlbnQpXCJcblx0KHNlbGVjdERheSk9XCJvblNlbGVjdERheSgkZXZlbnQpXCJcblx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdChjbGlja01vcmUpPVwib25DbGlja01vcmUoJGV2ZW50KVwiXG5cdChkcmFnUmFuZ2UpPVwib25EcmFnUmFuZ2UoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXI+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9fdGFibGUnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgc3RhcnREYXlPZldlZWs6IERBWVMgPSBEQVlTLk1PTkRBWTsgLy8gU3RhcnQgb2YgdGhlIHdlZWsgKDAgPSBzdW5kYXksIDEgPSBtb25kYXksIC4uLilcblx0QElucHV0KCkgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheVJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0UmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgc2xvdHM6IFNsb3RJbnRlcmZhY2VbXTtcblx0cHVibGljIHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXk6IERhdGU7XG5cdHB1YmxpYyBzZWxlY3RlZFJhbmdlID0ge1xuXHRcdGZyb206IG51bGwsXG5cdFx0dG86IG51bGwsXG5cdH07XG5cblx0cHVibGljIHdlZWtIZWlnaHQ6IG51bWJlcjtcblx0cHVibGljIGV2ZW50SGVpZ2h0ID0gMjg7XG5cdHB1YmxpYyBoZWlnaHRPZmZzZXQgPSAyODtcblx0cHVibGljIGV2ZW50c0J5RGF5OiBhbnk7XG5cdHB1YmxpYyBhdmFpbGFibGVTbG90cyA9IDA7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb250aFZpZXdTbG90c1NlcnZpY2U6IE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5hY3RpdmVEYXRlIHx8IGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGN1bGF0ZU1vbnRoV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLnN0YXJ0RGF5T2ZXZWVrLCB0aGlzLmhpZ2hsaWdodHMpO1xuXHRcdFx0dGhpcy5lbWl0RGlzcGxheVJhbmdlKHRoaXMud2Vla3MpO1xuXHRcdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRheTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBkYXk7XG5cdFx0aWYgKGRheSkge1xuXHRcdFx0dGhpcy5zZWxlY3REYXkuZW1pdChkYXkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRwdWJsaWMgb25DaGFuZ2VSb3dIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gdGhpcy5oZWlnaHRPZmZzZXQgLSAyMCkgLyB0aGlzLmV2ZW50SGVpZ2h0KTtcblx0XHR0aGlzLndlZWtIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25DbGlja01vcmUoZGF5OiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXkpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdHRoaXMuc2VsZWN0UmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25EcmFnUmFuZ2UocmFuZ2UpIHtcblx0XHR0aGlzLnNlbGVjdGVkUmFuZ2UgPSByYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2xvdHNBbmRXZWVrcygpIHtcblx0XHRpZiAodGhpcy5hdmFpbGFibGVTbG90cyA+PSAwKSB7XG5cdFx0XHRjb25zdCBldmVudE1hcCA9IHRoaXMubW9udGhWaWV3U2xvdHNTZXJ2aWNlLmdlbmVyYXRlRXZlbnRNYXAoXG5cdFx0XHRcdHRoaXMuZXZlbnRzLFxuXHRcdFx0XHR0aGlzLndlZWtzLFxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnNsb3RzID0gZXZlbnRNYXAuZ2V0U2xvdHModGhpcy5ldmVudEhlaWdodCwgdGhpcy53ZWVrSGVpZ2h0LCB0aGlzLmhlaWdodE9mZnNldCk7XG5cdFx0XHR0aGlzLndlZWtzID0gZXZlbnRNYXAuZ2V0RXZlbnRzTWFwKHRoaXMuYXZhaWxhYmxlU2xvdHMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTW9udGhXZWVrcyhkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogREFZUywgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlKTogV2Vla2RheUludGVyZmFjZVtdW10ge1xuXHRcdGNvbnN0IGRheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmdldERheXNGb3JNb250aChkYXRlLCBzdGFydE9mV2VlaywgaGlnaGxpZ2h0cyk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuZ2V0V2Vla3NGb3JNb250aChkYXlzKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdERpc3BsYXlSYW5nZSh3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pIHtcblx0XHRpZiAod2Vla3MubGVuZ3RoID4gMCAmJiB3ZWVrc1swXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBmcm9tID0gd2Vla3NbMF1bMF0uZGF0ZTtcblx0XHRcdGNvbnN0IHRvID0gd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZTtcblxuXHRcdFx0aWYgKGZyb20gJiYgdG8pIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmFuZ2UuZW1pdCh7XG5cdFx0XHRcdFx0ZnJvbSxcblx0XHRcdFx0XHR0byxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEVsZW1lbnRSZWYsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxuXHRUZW1wbGF0ZVJlZixcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRFdmVudEludGVyZmFjZSxcblx0V2Vla2RheUludGVyZmFjZSxcblx0U2xvdEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHREYXlSYW5nZUludGVyZmFjZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3LWNhbGVuZGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCIgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtcm93XCI+XG5cdDxkaXZcblx0XHQqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIlxuXHRcdCh0YXApPVwiZW1pdFNlbGVjdERheShkYXkuZGF0ZSlcIlxuXHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdCdpcy1jdXJyZW50JzogaXNUb2RheShkYXkuZGF0ZSksXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkKGRheS5kYXRlLCByYW5nZSksXG5cdFx0XHQnaXMtZmFkZWQnOiBpc0N1cnJlbnRNb250aChkYXkuZGF0ZSwgd2Vla3NbMV1bMF0uZGF0ZSlcblx0XHR9XCJcblx0XHRbY2xhc3NdPVwiZGF5LmhpZ2hsaWdodHNcIlxuXHRcdGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsXCJcblx0XHRbYXR0ci5kYXRlXT1cImRheS5kYXRlXCJcblx0XHQocHJlc3MpPVwidG91Y2hTdGFydChkYXkuZGF0ZSlcIlxuXHRcdD5cblxuXHRcdDxkaXYgKGRyYWdzdGFydCk9XCJkcmFnU3RhcnQoZGF5LmRhdGUpXCIgY2xhc3M9XCJvLWFnZW5kYV9kcmFnLXNlbGVjdFwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cblxuXHRcdDxzcGFuIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsLWhlYWRlclwiPlxuXHRcdFx0PHNwYW4+e3sgZGF5LmRhdGUgfCBkYXRlOidkJyB9fTwvc3Bhbj5cblx0XHQ8L3NwYW4+XG5cblx0XHQ8YXVpLWFnZW5kYS1tb3JlLWJ1dHRvblxuXHRcdFx0Km5nSWY9XCJkYXkubW9yZVwiXG5cdFx0XHRbaGlkZGVuRXZlbnRzXT1cImRheS5tb3JlXCJcblx0XHRcdChjbGlja01vcmUpPVwib25DbGlja01vcmUoZGF5LmRhdGUpXCJcblx0XHQ+PC9hdWktYWdlbmRhLW1vcmUtYnV0dG9uPlxuXG5cdFx0PGF1aS1tb250aC12aWV3LWRvdHNcblx0XHRcdCpuZ0lmPVwiZGF5LmRvdHNcIlxuXHRcdFx0W2RvdHNdPVwiZGF5LmRvdHNcIlxuXHRcdD48L2F1aS1tb250aC12aWV3LWRvdHM+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHNcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W2V2ZW50SXRlbVRlbXBsYXRlXT1cImV2ZW50SXRlbVRlbXBsYXRlXCJcblx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHM+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3Muby1hZ2VuZGFfX3RhYmxlLWdyaWQnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW107XG5cdEBJbnB1dCgpIHB1YmxpYyBzbG90czogU2xvdEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZERheTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgcmFuZ2UgPSB7XG5cdFx0ZnJvbTogbnVsbCxcblx0XHR0bzogbnVsbCxcblx0fTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHJvd0hlaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdERheSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tNb3JlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGRyYWdSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcHJlc3NlZERheTogc3RyaW5nOyAvLyBmb3JtYXQ6IFlZWVktTU0tRERcblx0cHVibGljIGN1cnJlbnREYXk6IHN0cmluZzsgLy8gZm9ybWF0OiBZWVlZLU1NLUREXG5cblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmN1cnJlbnREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUobmV3IERhdGUoKSwgJ1lZWVktTU0tREQnKTtcblxuXHRcdHRoaXMud2F0Y2hSb3dIZWlndGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChoZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodC5lbWl0KGhlaWdodCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcmFnT3ZlcigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJhbmdlKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdERyYWdSYW5nZShyYW5nZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcm9wKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFNlbGVjdFJhbmdlKHRoaXMucmFuZ2UpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgaXNUb2RheShkYXRlOiBEYXRlKSB7XG5cdFx0Y29uc3QgZGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cblx0XHRyZXR1cm4gZGF5ID09PSB0aGlzLmN1cnJlbnREYXk7XG5cdH1cblxuXHRwdWJsaWMgaXNTZWxlY3RlZChkYXk6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiBib29sZWFuIHtcblx0XHRjb25zdCBjdXJyZW50RGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRheSwgJ1lZWVktTU0tREQnKTtcblx0XHRjb25zdCBmcm9tID0gcmFuZ2UgJiYgcmFuZ2UuZnJvbSA/IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShuZXcgRGF0ZShyYW5nZS5mcm9tLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblx0XHRjb25zdCB0byA9IHJhbmdlICYmIHJhbmdlLnRvID8gRGF0ZUhlbHBlci5mb3JtYXREYXRlKG5ldyBEYXRlKHJhbmdlLnRvLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblxuXHRcdHJldHVybiBjdXJyZW50RGF5ID09PSB0aGlzLnNlbGVjdGVkRGF5XG5cdFx0XHR8fCAoKGZyb20gJiYgbmV3IERhdGUoZnJvbSkgPD0gbmV3IERhdGUoY3VycmVudERheSkpICYmICh0byAmJiBuZXcgRGF0ZSh0bykgPj0gbmV3IERhdGUoY3VycmVudERheSkpKTtcblx0fVxuXG5cdHB1YmxpYyByZXNldFJhbmdlKCkge1xuXHRcdHRoaXMuZW1pdERyYWdSYW5nZSh7XG5cdFx0XHRmcm9tOiBudWxsLFxuXHRcdFx0dG86IG51bGwsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgaXNDdXJyZW50TW9udGgoZGF5OiBzdHJpbmcsIGRhdGU6IERhdGUpIHtcblx0XHRjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5KTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoZGF0ZSk7XG5cblx0XHRyZXR1cm4gZGF5RGF0ZS5nZXRNb250aCgpICE9PSBjdXJyZW50LmdldE1vbnRoKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdFNlbGVjdERheShkYXk6IERhdGUpOiB2b2lkIHtcblx0XHQvLyBOZXZlciBlbWl0IGEgc3BlY2lmaWMgZGF5IGFzIGEgYERhdGVgLCBhbHdheXMgdXNlIGEgc3RyaW5nIGluIGBZWVlZLU1NLUREYCBmb3JtYXQuXG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF5LCAnWVlZWS1NTS1ERCcpKTtcblx0XHR0aGlzLnJlc2V0UmFuZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBlbWl0RHJhZ1JhbmdlKHJhbmdlKSB7XG5cdFx0dGhpcy5kcmFnUmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHR9XG5cblx0cHVibGljIG9uQ2xpY2tNb3JlKGRheTogRGF0ZSkge1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHRcdHRoaXMuY2xpY2tNb3JlLmVtaXQoZGF5KTtcblx0fVxuXG5cdHB1YmxpYyBkcmFnU3RhcnQoZGF0ZTogRGF0ZSkge1xuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQobnVsbCk7XG5cdFx0dGhpcy5wcmVzc2VkRGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cdH1cblxuXHRwdWJsaWMgdG91Y2hTdGFydChkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChudWxsKTtcblx0XHR0aGlzLnByZXNzZWREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF0ZSwgJ1lZWVktTU0tREQnKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hSb3dIZWlndGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRjb25zdCB3ZWVrSGVpZ2h0JCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRcdHRpbWVyKDAsIDI1MClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLWFnZW5kYV9fdGFibGUtcm93Jyk7XG5cblx0XHRcdFx0aWYgKHJvdykge1xuXHRcdFx0XHRcdHdlZWtIZWlnaHQkLm5leHQocm93Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHdlZWtIZWlnaHQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hEcmFnT3ZlcigpIHtcblx0XHRjb25zdCB0YXJnZXQkOiBTdWJqZWN0PERheVJhbmdlSW50ZXJmYWNlPiA9IG5ldyBTdWJqZWN0KCk7XG5cblx0XHRjb25zdCBoYW5kbGVFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0ZScpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJlc3NlZERheSA9IG5ldyBEYXRlKHRoaXMucHJlc3NlZERheSk7XG5cdFx0XHRcdGNvbnN0IGRyYWdPdmVyRGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSk7XG5cblx0XHRcdFx0aWYgKHByZXNzZWREYXkgPCBkcmFnT3ZlckRhdGUpIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogdGhpcy5wcmVzc2VkRGF5LFxuXHRcdFx0XHRcdFx0dG86IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkcmFnT3ZlckRhdGUgYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRyYWdPdmVyRGF0ZSBhcyBEYXRlLCAnWVlZWS1NTS1ERCcpLFxuXHRcdFx0XHRcdFx0dG86IHRoaXMucHJlc3NlZERheSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRoYW5kbGVFbGVtZW50KHRhcmdldCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wcmVzc2VkRGF5KSB7XG5cdFx0XHRcdGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcblx0XHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRoYW5kbGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdHJldHVybiB0YXJnZXQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geC5mcm9tID09PSB5LmZyb20gJiYgeC50byA9PT0geS50bztcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoRHJvcCgpIHtcblx0XHRjb25zdCB0YXJnZXQkID0gbmV3IFN1YmplY3QoKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRhcmdldCQubmV4dCgpO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuXHRcdFx0aWYgKHRoaXMucHJlc3NlZERheSkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnByZXNzZWREYXkgPSBudWxsO1xuXHRcdFx0XHR0YXJnZXQkLm5leHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0YXJnZXQkO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdC8vIE5ldmVyIGVtaXQgYSBzcGVjaWZpYyBkYXkgYXMgYSBgRGF0ZWAsIGFsd2F5cyB1c2UgYSBzdHJpbmcgaW4gYFlZWVktTU0tRERgIGZvcm1hdC5cblx0XHR0aGlzLnNlbGVjdFJhbmdlLmVtaXQoe1xuXHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKHJhbmdlLmZyb20gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdHRvOiBEYXRlSGVscGVyLmZvcm1hdERhdGUocmFuZ2UudG8gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbW9udGgtdmlldy1kb3RzJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX2RvdHNcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgZG90IG9mIGRvdHNcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZG90IH1cIiBjbGFzcz1cIm8tYWdlbmRhX19kb3RcIj48L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RG90c0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBkb3RzOiBzdHJpbmdbXTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlLCBTbG90TWV0YUludGVyZmFjZSwgU2xvdERpc3BsYXlJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdCcsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWV2ZW50PVwiZXZlbnRcIj5cblx0PGRpdiBjbGFzcz1cImEtZXZlbnRcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZXZlbnQuZnVsbERheSA/IGV2ZW50LmNvbG9yIDogbnVsbCB9XCIgW25nQ2xhc3NdPVwieyAnYS1ldmVudC0tbGlnaHQnOiBldmVudC5mdWxsRGF5IH1cIj5cblx0XHQ8ZGl2ICpuZ0lmPVwiIWV2ZW50LmZ1bGxEYXlcIiBjbGFzcz1cImEtZXZlbnRfX2JhclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBldmVudC5jb2xvciB9XCI+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1ldmVudF9fY29udGVudFwiPlxuXHRcdFx0PGRpdiAqbmdJZj1cImV2ZW50Lmljb25CZWZvcmUgfHwgZXZlbnQudGl0bGVcIiBjbGFzcz1cImEtZXZlbnRfX21haW5cIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCJldmVudC5pY29uQmVmb3JlXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQmVmb3JlIH19IGEtZXZlbnRfX2ljb25cIj48L3NwYW4+PHNwYW4gKm5nSWY9XCJldmVudC50aXRsZVwiIGNsYXNzPVwiYS1ldmVudF9fdGl0bGVcIj57eyBldmVudC50aXRsZSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyIHx8ICFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19leHRyYVwiPlxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cIiFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19tZXRhXCI+e3sgZXZlbnQuc3RhcnREYXRlIHwgZGF0ZTonSEg6bW0nIH19PC9zcGFuPjxzcGFuICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQWZ0ZXIgfX0gYS1ldmVudF9faWNvblwiPjwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtZXZlbnRcIiBbbmdTdHlsZV09XCJ7XG5cdGxlZnQ6IGRpc3BsYXkubGVmdCxcblx0dG9wOiBkaXNwbGF5LnRvcCxcblx0d2lkdGg6IGRpc3BsYXkud2lkdGhcbn1cIj5cblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlID8gdGVtcGxhdGUgOiBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgZXZlbnQ6IGV2ZW50IH1cIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RXZlbnRTbG90Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGV2ZW50OiBFdmVudEludGVyZmFjZTtcblx0QElucHV0KCkgcHVibGljIG1ldGE6IFNsb3RNZXRhSW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzcGxheTogU2xvdERpc3BsYXlJbnRlcmZhY2U7XG5cdEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90cycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90c1wiPlxuXHQ8YXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3Rcblx0XHQqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90c1wiXG5cdFx0W2V2ZW50XT1cInNsb3QuZXZlbnRcIlxuXHRcdFttZXRhXT1cInNsb3QubWV0YVwiXG5cdFx0W2Rpc3BsYXldPVwic2xvdC5kaXNwbGF5XCJcblx0XHRbdGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHRcdChjbGljayk9XCJlbWl0U2VsZWN0RXZlbnQoc2xvdC5ldmVudClcIlxuXHQ+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdD5cbjwvZGl2PlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFZpZXdFdmVudFNsb3RzQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIHNsb3RzOiBTbG90SW50ZXJmYWNlW10gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblxuXHRwdWJsaWMgZW1pdFNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTU9SRV9MQUJFTCB9IGZyb20gJy4uLy4uL2FnZW5kYS5jb25mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb3JlLWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tYWdlbmRhX19tb3JlXCI+XG5cdDxidXR0b24gKGNsaWNrKT1cImVtaXRDbGlja01vcmUoJGV2ZW50KVwiICpuZ0lmPVwiaGlkZGVuRXZlbnRzID4gMFwiIGNsYXNzPVwiby1hZ2VuZGFfX21vcmUtYnV0dG9uXCI+XG5cdFx0e3sgaGlkZGVuRXZlbnRzIH19IHt7IGxhYmVsIH19XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb3JlQnV0dG9uQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGhpZGRlbkV2ZW50czogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE1PUkVfTEFCRUwpIHB1YmxpYyBsYWJlbFxuXHQpIHt9XG5cblx0cHVibGljIGVtaXRDbGlja01vcmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWSUVXUyB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbmF2aWdhdGlvbicsXG5cdHRlbXBsYXRlOiBgPGg0PlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwidmlldyA9PT0gdmlld3MuREFZXCI+e3sgYWN0aXZlRGF0ZSB8IGRhdGU6J2RkL01NL3knIH19PC9uZy1jb250YWluZXI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiPnt7IGFjdGl2ZURhdGUgfCBkYXRlOidNJyB8IG1vbnRoUGlwZSB9fSB7eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcgPT09IHZpZXdzLllFQVJcIj57eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cbjwvaDQ+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fbmF2XCI+XG5cdDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldmlvdXMgbW9udGhcIiBjbGFzcz1cIm8tYWdlbmRhX19uYXYtcHJldmlvdXMgYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwicHJldigpXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidG9kYXlcIiBjbGFzcz1cImEtYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9Ub2RheSgpXCI+XG5cdFx0VmFuZGFhZ1xuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dCBtb250aFwiIGNsYXNzPVwiby1hZ2VuZGFfX25hdi1uZXh0IGEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuXHRcdDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9faGVhZGVyJykgcHVibGljIGNzc0NsYXNzID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZURhdGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHZpZXc6IFZJRVdTO1xuXHRASW5wdXQoKSBwdWJsaWMgdG9kYXk6IERhdGU7XG5cdEBPdXRwdXQoKSBwdWJsaWMgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXHRwdWJsaWMgbmF2aWdhdGUkOiBTdWJqZWN0PERhdGU+ID0gbmV3IFN1YmplY3QoKTtcblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMuY2hhbmdlRGF0ZShkYXRlLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgbmV4dCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLmNoYW5nZURhdGUoZGF0ZSwgMSk7XG5cdH1cblxuXHRwdWJsaWMgZ29Ub1RvZGF5KCk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy50b2RheSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLkRBWSkge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VEYXkoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuTU9OVEgpIHtcblx0XHRcdHJldHVybiB0aGlzLm5hdmlnYXRlJC5uZXh0KHRoaXMuY2hhbmdlTW9udGgoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuWUVBUikge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VZZWFyKGRhdGUsIG9yaWVudCkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VEYXkoZGF0ZTogRGF0ZSwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgb3JpZW50KTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VNb250aChkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG9yaWVudCwgMSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlWWVhcihkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgKyBvcmllbnQsIDAsIDEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBBZ2VuZGFDb21wb25lbnQgfSBmcm9tICcuL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy1jYWxlbmRhci9tb250aC12aWV3LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC12aWV3LWRvdHMvbW9udGgtdmlldy1kb3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9yZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QWdlbmRhQ29tcG9uZW50LFxuXHRNb250aFZpZXdDb21wb25lbnQsXG5cdE1vbnRoVmlld0NhbGVuZGFyQ29tcG9uZW50LFxuXHRNb250aFZpZXdEb3RzQ29tcG9uZW50LFxuXHRNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQsXG5cdE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQsXG5cdE1vcmVCdXR0b25Db21wb25lbnQsXG5cdE5hdmlnYXRpb25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIH0gZnJvbSAnLi9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ1NlcnZpY2UgfSBmcm9tICcuL3NvcnRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcblx0RGF0ZUhlbHBlclNlcnZpY2UsXG5cdE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0U29ydGluZ1NlcnZpY2UsXG5dO1xuIiwiaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcblx0b3ZlcnJpZGVzID0gPGFueT57XG5cdFx0J3N3aXBlJzogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMICB9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUGlwZXMgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHtcblx0V0VFS0RBWV9MQUJFTFMsXG5cdERFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdE1PTlRIX0xBQkVMUyxcblx0REVGQVVMVF9NT05USF9MQUJFTFMsXG5cdE1PUkVfTEFCRUwsXG5cdERFRkFVTFRfTU9SRV9MQUJFTCxcbn0gZnJvbSAnLi9hZ2VuZGEuY29uZic7XG5pbXBvcnQgeyBIYW1tZXJDb25maWcgfSBmcm9tICcuL2hhbW1lci5jb25mJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQaXBlcyxcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IE1PTlRIX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBNT1JFX0xBQkVMLCB1c2VWYWx1ZTogREVGQVVMVF9NT1JFX0xBQkVMIH0sXG5cdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmRhTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHdlZWtkYXlMYWJlbHM6IHN0cmluZ1tdLFxuXHRcdG1vbnRoTGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb3JlTGFiZWw6IHN0cmluZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFnZW5kYU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRTZXJ2aWNlcyxcblx0XHRcdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PUkVfTEFCRUwsIHVzZVZhbHVlOiBtb3JlTGFiZWwgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyLkRJUkVDVElPTl9BTEwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBRWEsc0JBQXNCLEdBQUc7SUFDckMsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtDQUNWLENBQUM7QUFFRixxQkFBYSxvQkFBb0IsR0FBRztJQUNuQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDVixDQUFDO0FBRUYscUJBQWEsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0FBRXpDLHFCQUFhLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBVyxlQUFlLENBQUMsQ0FBQztBQUM1RSxxQkFBYSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQVcsYUFBYSxDQUFDLENBQUM7QUFDeEUscUJBQWEs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
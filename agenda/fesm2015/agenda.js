import { InjectionToken, Pipe, Inject, Injectable, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, HostBinding, NgModule } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { Subject } from 'rxjs/Subject';
import { takeUntil, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { DIRECTION_ALL } from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DEFAULT_WEEKDAY_LABELS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Firday',
    'Saturday',
];
const /** @type {?} */ DEFAULT_MONTH_LABELS = [
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
const /** @type {?} */ DEFAULT_MORE_LABEL = 'more';
const /** @type {?} */ WEEKDAY_LABELS = new InjectionToken('weekdayLabels');
const /** @type {?} */ MONTH_LABELS = new InjectionToken('monthLabels');
const /** @type {?} */ MORE_LABEL = new InjectionToken('moreLabel');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthPipe {
    /**
     * @param {?=} monthLabels
     */
    constructor(monthLabels = DEFAULT_MONTH_LABELS) {
        this.monthLabels = monthLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        const /** @type {?} */ month = parseInt(value, 10);
        if (isNaN(month)) {
            return null;
        }
        const /** @type {?} */ index = (month - 1).toString();
        return this.monthLabels[index.toString()] || DEFAULT_MONTH_LABELS[index.toString()];
    }
}
MonthPipe.decorators = [
    { type: Pipe, args: [{
                name: 'monthPipe',
            },] },
];
/** @nocollapse */
MonthPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MONTH_LABELS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WeekdayPipe {
    /**
     * @param {?=} weekdayLabels
     */
    constructor(weekdayLabels = DEFAULT_WEEKDAY_LABELS) {
        this.weekdayLabels = weekdayLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
    }
}
WeekdayPipe.decorators = [
    { type: Pipe, args: [{
                name: 'weekdayPipe',
            },] },
];
/** @nocollapse */
WeekdayPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WEEKDAY_LABELS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pipes = [
    MonthPipe,
    WeekdayPipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const DAYS = {
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
const VIEWS = {
    DAY: 'DAY',
    WEEK: 'WEEK',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DateHelperService {
    /**
     * @param {?} date
     * @param {?} startDayOfWeek
     * @param {?=} range
     * @return {?}
     */
    getDaysForMonth(date, startDayOfWeek, range = null) {
        const /** @type {?} */ firstDayOfMonth = this.getFirstWeekDayOfMonth(date, startDayOfWeek);
        const /** @type {?} */ lastDayOfMonth = this.getLastWeekDayOfMonth(date, startDayOfWeek);
        const /** @type {?} */ max = this.dateDiff(firstDayOfMonth, lastDayOfMonth);
        const /** @type {?} */ days = [
            { date: firstDayOfMonth, highlights: this.getHighlights(range, firstDayOfMonth) },
        ];
        for (let /** @type {?} */ i = 0; i < max; i += 1) {
            const /** @type {?} */ nextDay = this.getNextDay(days[i].date);
            days.push({
                highlights: this.getHighlights(range, nextDay),
                date: nextDay,
            });
        }
        return days;
    }
    /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    getHighlights(range, date) {
        if (!range) {
            return '';
        }
        return Object.keys(range).filter((key) => {
            return this.inRange(range[key], date);
        }).join(' ');
    }
    /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    inRange(range, date) {
        return range.some((item) => {
            if (Array.isArray(item)) {
                return item.indexOf(date.getDay()) !== -1;
            }
            const /** @type {?} */ d = new Date(item);
            if (!isNaN(d.getTime())) {
                return this.compareDates(d, date);
            }
        });
    }
    /**
     * @param {?} days
     * @return {?}
     */
    getWeeksForMonth(days) {
        const /** @type {?} */ numberOfWeeks = Math.round(days.length / 7);
        return Array(numberOfWeeks).fill(null).map((label, index) => {
            return days.slice(index * 7, (index + 1) * 7);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getLastDateOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    /**
     * @param {?} date
     * @param {?} dayOfWeek
     * @param {?} orient
     * @return {?}
     */
    moveToDayOfWeek(date, dayOfWeek, orient) {
        let /** @type {?} */ diff = (dayOfWeek - date.getDay() + 7 * (orient || +1)) % 7;
        const /** @type {?} */ value = (diff === 0) ? diff += 7 * (orient || +1) : diff;
        const /** @type {?} */ d = new Date(date);
        return new Date(d.setDate(date.getDate() + value * 1));
    }
    /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    getFirstWeekDayOfMonth(date, startOfWeek) {
        const /** @type {?} */ firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        if (firstDayOfMonth.getDay() === Number(startOfWeek)) {
            return firstDayOfMonth;
        }
        return this.moveToDayOfWeek(firstDayOfMonth, Number(startOfWeek), -1);
    }
    /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    getLastWeekDayOfMonth(date, startOfWeek) {
        const /** @type {?} */ endOfWeek = (startOfWeek === 0 ? 6 : startOfWeek - 1);
        const /** @type {?} */ lastDayOfMonth = this.getLastDateOfMonth(date);
        if (lastDayOfMonth.getDay() === endOfWeek) {
            return lastDayOfMonth;
        }
        return this.moveToDayOfWeek(lastDayOfMonth, endOfWeek, 1);
    }
    /**
     * @param {?} today
     * @return {?}
     */
    getNextDay(today) {
        const /** @type {?} */ tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow;
    }
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    dateDiff(startDate, endDate) {
        // Compare based on date, not on time
        const /** @type {?} */ start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const /** @type {?} */ end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    compareDates(date1, date2) {
        const /** @type {?} */ date1Year = date1.getFullYear();
        const /** @type {?} */ date1Month = date1.getMonth();
        const /** @type {?} */ date1Date = date1.getDate();
        const /** @type {?} */ date2Year = date2.getFullYear();
        const /** @type {?} */ date2Month = date2.getMonth();
        const /** @type {?} */ date2Date = date2.getDate();
        return date1Year === date2Year && date1Month === date2Month && date1Date === date2Date;
    }
    /**
     * @param {?} startDayOfWeek
     * @return {?}
     */
    orderWeekDays(startDayOfWeek) {
        const /** @type {?} */ rotate = function (array, index) {
            const /** @type {?} */ arrayLength = array.length;
            return array.slice(arrayLength - index).concat(array.slice(0, arrayLength - index));
        };
        const /** @type {?} */ weekdays = [0, 1, 2, 3, 4, 5, 6];
        if (startDayOfWeek === DAYS.SUNDAY) {
            return weekdays;
        }
        else {
            return rotate(weekdays, 7 - startDayOfWeek);
        }
    }
}
DateHelperService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AgendaComponent {
    /**
     * @param {?} elementRef
     * @param {?} dateHelperService
     */
    constructor(elementRef, dateHelperService) {
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
    ngOnInit() {
        this.watchAgendaSize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.startDayOfWeek) {
            if (this.view === VIEWS.MONTH) {
                this.weekdays = this.dateHelperService.orderWeekDays(changes.startDayOfWeek.currentValue);
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    swipe(e) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onNavigate(date) {
        this.activeDate = new Date(date);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onDisplayRange(range) {
        this.navigate.emit(range);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDay(date) {
        this.selectDay.emit(date);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectEvent(event) {
        this.selectEvent.emit(event);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onClickMore(date) {
        this.clickMore.emit(date);
    }
    /**
     * @return {?}
     */
    getToday() {
        const /** @type {?} */ date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }
    /**
     * @return {?}
     */
    prevMonth() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
    /**
     * @return {?}
     */
    nextMonth() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onSelectRange(range) {
        this.selectRange.emit(range);
    }
    /**
     * @return {?}
     */
    watchAgendaSize() {
        this.agendaSize$ = timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$), map(() => {
            return this.elementRef.nativeElement.offsetWidth;
        }), distinctUntilChanged())
            .pipe(map((width) => {
            if (width > 800) {
                return 'o-agenda--big';
            }
            else {
                return 'o-agenda--small';
            }
        }));
    }
}
AgendaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda',
                template: `<div [ngClass]="agendaSize$ | async" class="o-agenda">
	<div class="o-agenda__inner">
		<aui-agenda-navigation
			[activeDate]="activeDate"
			[view]="view"
			[today]="today"
			(navigate)="onNavigate($event)"
		></aui-agenda-navigation>

		<aui-agenda-month-view
			*ngIf="view === views.MONTH"
			[activeDate]="activeDate"
			[weekdays]="weekdays"
			[startDayOfWeek]="startDayOfWeek"
			[events]="events"
			[highlights]="highlights"
			[eventItemTemplate]="monthEventItemTemplate"
			(selectDay)="onSelectDay($event)"
			(selectEvent)="onSelectEvent($event)"
			(clickMore)="onClickMore($event)"
			(selectRange)="onSelectRange($event)"
			(displayRange)="onDisplayRange($event)"
			(swipeleft)="swipe($event)"
			(swiperight)="swipe($event)"
		></aui-agenda-month-view>
	</div>
</div>
`,
                styles: [`:host{display:block;width:100%;height:100%}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
AgendaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DateHelperService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EventMap {
    /**
     * @param {?} weeks
     * @param {?} slots
     */
    constructor(weeks, slots) {
        this.initSlots(weeks, slots);
    }
    /**
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    initSlots(weeks, availableSlots) {
        this.slotMap = weeks.map((weekdays) => {
            return weekdays.map((day) => {
                return Object.assign({}, day, {
                    slots: Array(availableSlots).fill(null),
                    events: [],
                });
            });
        });
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @param {?=} span
     * @param {?=} event
     * @return {?}
     */
    fillSlot(week, day, slot, span = 1, event = null) {
        if (event) {
            this.slotMap[week][day].slots[slot] = {
                meta: {
                    week,
                    day,
                    slot,
                    span,
                },
                event,
            };
            for (let /** @type {?} */ i = 1; i < span; i += 1) {
                this.fillSlot(week, day + i, slot);
            }
        }
        else {
            this.slotMap[week][day].slots[slot] = true;
        }
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @return {?}
     */
    isSlotFree(week, day, slot) {
        return this.slotMap[week][day].slots[slot] === null;
    }
    /**
     * @param {?} week
     * @param {?} day
     * @return {?}
     */
    getFreeSlot(week, day) {
        return this.slotMap[week][day].slots.findIndex((o) => {
            return o === null;
        });
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} span
     * @param {?} event
     * @return {?}
     */
    addEvent(week, day, span, event) {
        if (event) {
            this.slotMap[week][day].events.push(event);
            for (let /** @type {?} */ i = 1; i < span; i += 1) {
                this.slotMap[week][day + i].events.push(event);
            }
        }
    }
    /**
     * @param {?} eventHeight
     * @param {?} weekHeight
     * @param {?} heightOffset
     * @return {?}
     */
    getSlots(eventHeight, weekHeight, heightOffset) {
        const /** @type {?} */ numberOfDays = this.slotMap[0].length;
        const /** @type {?} */ dayWidth = ((1 / numberOfDays) * 100);
        const /** @type {?} */ flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
        const /** @type {?} */ slots = this.slotMap.map((o) => {
            return o.map((p) => {
                return p.slots;
            });
        });
        return flatten(slots).filter((slot) => {
            return slot !== null && slot !== true;
        }).map((slot) => {
            return Object.assign({}, slot, { display: {
                    left: 'calc(' + dayWidth * slot.meta.day + '% + 4px)',
                    top: heightOffset + (weekHeight * slot.meta.week) + (slot.meta.slot * eventHeight) + 'px',
                    width: 'calc(' + dayWidth * slot.meta.span + '% - 8px)',
                } });
        });
    }
    /**
     * @param {?} availableSlots
     * @return {?}
     */
    getEventsMap(availableSlots) {
        return this.slotMap.map((days) => {
            return days.map((day) => {
                return Object.assign({}, day, {
                    total: day.events.length,
                    more: day.events.length - availableSlots,
                    dots: day.events.map((event) => {
                        return event["color"];
                    }).filter((color, pos, array) => {
                        return array.indexOf(color) === pos;
                    }).slice(0, 3),
                });
            });
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortingService {
    /**
     * @param {?} dateHelperService
     */
    constructor(dateHelperService) {
        this.dateHelperService = dateHelperService;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    sortEvents(events) {
        return events.sort((a, b) => {
            // Sort by date
            const /** @type {?} */ sortedByDate = this.sortByDateHelper(a.startDate, b.startDate);
            if (sortedByDate !== 0) {
                return sortedByDate;
            }
            // Sort by diff
            const /** @type {?} */ sortedBySpan = this.sortBySpanHelper(a.startDate, a.endDate, b.startDate, b.endDate);
            if (sortedBySpan !== 0) {
                return sortedBySpan;
            }
            return this.sortByDateTimeHelper(a.startDate, b.startDate);
        });
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortByDateHelper(a, b) {
        const /** @type {?} */ aStartDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        const /** @type {?} */ bStartDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        if (aStartDate < bStartDate) {
            return -1;
        }
        if (aStartDate > bStartDate) {
            return 1;
        }
        return 0;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortByDateTimeHelper(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    /**
     * @param {?} aStart
     * @param {?} aEnd
     * @param {?} bStart
     * @param {?} bEnd
     * @return {?}
     */
    sortBySpanHelper(aStart, aEnd, bStart, bEnd) {
        const /** @type {?} */ spanA = this.dateHelperService.dateDiff(aStart, aEnd);
        const /** @type {?} */ spanB = this.dateHelperService.dateDiff(bStart, bEnd);
        if (spanA > spanB) {
            return -1;
        }
        if (spanA < spanB) {
            return 1;
        }
        return 0;
    }
}
SortingService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SortingService.ctorParameters = () => [
    { type: DateHelperService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewSlotsService {
    /**
     * @param {?} dateHelperService
     * @param {?} sortingService
     */
    constructor(dateHelperService, sortingService) {
        this.dateHelperService = dateHelperService;
        this.sortingService = sortingService;
    }
    /**
     * @param {?} events
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    generateEventMap(events, weeks, availableSlots) {
        const /** @type {?} */ firstDay = new Date(weeks[0][0].date);
        const /** @type {?} */ lastDay = new Date(weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date);
        // 1. Format
        const /** @type {?} */ mappedEvents = this.formatEvents(events);
        // 2. Remove events waar de endDate < startMonth of endDate > endMonth
        const /** @type {?} */ filteredEvents = this.filterEvents(mappedEvents, firstDay, lastDay);
        // 3. Sorteer van oud naar nieuw en van lang event naar kort event
        const /** @type {?} */ sortedEvents = this.sortingService.sortEvents(filteredEvents);
        // 4. Fill EventMap
        this.eventMap = new EventMap(weeks, availableSlots);
        sortedEvents.forEach((event) => {
            if (event.startDate < firstDay) {
                this.calculate(firstDay, event.endDate, 0, 0, event, weeks);
            }
            else {
                for (let /** @type {?} */ week = 0; week < weeks.length; week += 1) {
                    for (let /** @type {?} */ day = 0; day < weeks[week].length; day += 1) {
                        const /** @type {?} */ date = weeks[week][day].date;
                        if (this.dateHelperService.compareDates(event.startDate, date)) {
                            this.calculate(event.startDate, event.endDate, week, day, event, weeks);
                            // Stop for loop --> improve performance
                            day = weeks[week].length;
                            week = weeks.length - 1;
                        }
                    }
                }
            }
        });
        return this.eventMap;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    formatEvents(events) {
        return events.map((event) => {
            return Object.assign({}, event, {
                startDate: new Date(event.startDate),
                endDate: new Date(event.endDate),
            });
        });
    }
    /**
     * @param {?} events
     * @param {?} firstDay
     * @param {?} lastDay
     * @return {?}
     */
    filterEvents(events, firstDay, lastDay) {
        return events.filter((event) => {
            return new Date(event.endDate) > firstDay && new Date(event.startDate) < lastDay;
        });
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} week
     * @param {?} day
     * @param {?} event
     * @param {?} weeks
     * @return {?}
     */
    calculate(start, end, week, day, event, weeks) {
        const /** @type {?} */ weekdaysLength = weeks[0].length;
        const /** @type {?} */ lengthOfEvent = this.dateHelperService.dateDiff(start, end);
        const /** @type {?} */ span = lengthOfEvent + 1 <= weekdaysLength - day ? lengthOfEvent + 1 : weekdaysLength - day;
        const /** @type {?} */ difftest = (lengthOfEvent - span) + 1;
        this.eventMap.addEvent(week, day, span, event);
        const /** @type {?} */ slot = this.eventMap.getFreeSlot(week, day);
        if (slot !== -1) {
            this.eventMap.fillSlot(week, day, slot, span, event);
        }
        if (difftest > 1 && week + 1 < weeks.length) {
            this.calculate(weeks[week + 1][0].date, end, week + 1, 0, event, weeks);
        }
    }
}
MonthViewSlotsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MonthViewSlotsService.ctorParameters = () => [
    { type: DateHelperService },
    { type: SortingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewComponent {
    /**
     * @param {?} monthViewSlotsService
     * @param {?} dateHelperService
     */
    constructor(monthViewSlotsService, dateHelperService) {
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
    ngOnChanges(changes) {
        if (changes.activeDate || changes.startDayOfWeek) {
            this.weeks = this.calculateMonthWeeks(this.activeDate, this.startDayOfWeek, this.highlights);
            this.emitDisplayRange(this.weeks);
            this.setSlotsAndWeeks();
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    onSelectDay(day) {
        this.selectedDay = day;
        if (day) {
            this.selectDay.emit(day);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectEvent(event) {
        this.selectEvent.emit(event);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    onChangeRowHeight(height) {
        this.availableSlots = Math.floor((height - this.heightOffset - 20) / this.eventHeight);
        this.weekHeight = height;
        this.setSlotsAndWeeks();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    onClickMore(day) {
        this.clickMore.emit(day);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onSelectRange(range) {
        this.selectRange.emit(range);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onDragRange(range) {
        this.selectedRange = range;
    }
    /**
     * @return {?}
     */
    setSlotsAndWeeks() {
        if (this.availableSlots >= 0) {
            const /** @type {?} */ eventMap = this.monthViewSlotsService.generateEventMap(this.events, this.weeks, this.availableSlots);
            this.slots = eventMap.getSlots(this.eventHeight, this.weekHeight, this.heightOffset);
            this.weeks = eventMap.getEventsMap(this.availableSlots);
        }
    }
    /**
     * @param {?} date
     * @param {?} startOfWeek
     * @param {?} highlights
     * @return {?}
     */
    calculateMonthWeeks(date, startOfWeek, highlights) {
        const /** @type {?} */ days = this.dateHelperService.getDaysForMonth(date, startOfWeek, highlights);
        return this.dateHelperService.getWeeksForMonth(days);
    }
    /**
     * @param {?} weeks
     * @return {?}
     */
    emitDisplayRange(weeks) {
        if (weeks.length > 0 && weeks[0].length > 0) {
            const /** @type {?} */ from = weeks[0][0].date;
            const /** @type {?} */ to = weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date;
            if (from && to) {
                this.displayRange.emit({
                    from,
                    to,
                });
            }
        }
    }
}
MonthViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view',
                template: `<div class="o-agenda__table-head">
	<div *ngFor="let weekday of weekdays" class="o-agenda__table-head-cell">{{ weekday | weekdayPipe }}</div>
</div>

<aui-agenda-month-view-calendar
	[weeks]="weeks"
	[slots]="slots"
	[selectedDay]="selectedDay"
	[range]="selectedRange"
	[eventItemTemplate]="eventItemTemplate"
	(rowHeight)="onChangeRowHeight($event)"
	(selectEvent)="onSelectEvent($event)"
	(selectDay)="onSelectDay($event)"
	(selectRange)="onSelectRange($event)"
	(clickMore)="onClickMore($event)"
	(dragRange)="onDragRange($event)"
></aui-agenda-month-view-calendar>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MonthViewComponent.ctorParameters = () => [
    { type: MonthViewSlotsService },
    { type: DateHelperService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewCalendarComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
    ngOnInit() {
        this.currentDay = DateHelper.formatDate(new Date(), 'YYYY-MM-DD');
        this.watchRowHeigth()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((height) => {
            this.rowHeight.emit(height);
        });
        this.watchDragOver()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((range) => {
            this.emitDragRange(range);
        });
        this.watchDrop()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(() => {
            this.emitSelectRange(this.range);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isToday(date) {
        const /** @type {?} */ day = DateHelper.formatDate(date, 'YYYY-MM-DD');
        return day === this.currentDay;
    }
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    isSelected(day, range) {
        const /** @type {?} */ currentDay = DateHelper.formatDate(day, 'YYYY-MM-DD');
        const /** @type {?} */ from = range && range.from ? DateHelper.formatDate(new Date(range.from.toString()), 'YYYY-MM-DD') : null;
        const /** @type {?} */ to = range && range.to ? DateHelper.formatDate(new Date(range.to.toString()), 'YYYY-MM-DD') : null;
        return currentDay === this.selectedDay
            || ((from && new Date(from) <= new Date(currentDay)) && (to && new Date(to) >= new Date(currentDay)));
    }
    /**
     * @return {?}
     */
    resetRange() {
        this.emitDragRange({
            from: null,
            to: null,
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
     * @param {?} day
     * @param {?} date
     * @return {?}
     */
    isCurrentMonth(day, date) {
        const /** @type {?} */ dayDate = new Date(day);
        const /** @type {?} */ current = new Date(date);
        return dayDate.getMonth() !== current.getMonth();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    emitSelectDay(day) {
        // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
        this.selectDay.emit(DateHelper.formatDate(day, 'YYYY-MM-DD'));
        this.resetRange();
    }
    /**
     * @param {?} range
     * @return {?}
     */
    emitDragRange(range) {
        this.dragRange.emit(range);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectEvent(event) {
        this.selectEvent.emit(event);
        this.resetRange();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    onClickMore(day) {
        this.resetRange();
        this.clickMore.emit(day);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dragStart(date) {
        this.selectDay.emit(null);
        this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    touchStart(date) {
        this.selectDay.emit(null);
        this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
    }
    /**
     * @return {?}
     */
    watchRowHeigth() {
        const /** @type {?} */ weekHeight$ = new Subject();
        timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(() => {
            const /** @type {?} */ row = this.elementRef.nativeElement.querySelector('.o-agenda__table-row');
            if (row) {
                weekHeight$.next(row.offsetHeight);
            }
        });
        return weekHeight$
            .pipe(distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    watchDragOver() {
        const /** @type {?} */ target$ = new Subject();
        const /** @type {?} */ handleElement = (element) => {
            if (element && element.parentElement && element.parentElement.getAttribute('date')) {
                const /** @type {?} */ pressedDay = new Date(this.pressedDay);
                const /** @type {?} */ dragOverDate = new Date(element.parentElement.getAttribute('date'));
                if (pressedDay < dragOverDate) {
                    target$.next({
                        from: this.pressedDay,
                        to: DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                    });
                }
                else {
                    target$.next({
                        from: DateHelper.formatDate(/** @type {?} */ (dragOverDate), 'YYYY-MM-DD'),
                        to: this.pressedDay,
                    });
                }
            }
        };
        document.addEventListener('dragover', (event) => {
            event.preventDefault();
            const /** @type {?} */ target = /** @type {?} */ (event.target);
            handleElement(target);
        }, false);
        document.addEventListener('touchmove', (event) => {
            if (this.pressedDay) {
                const /** @type {?} */ touch = event.touches[0];
                const /** @type {?} */ element = /** @type {?} */ (document.elementFromPoint(touch.clientX, touch.clientY));
                handleElement(element);
            }
        }, false);
        return target$
            .pipe(distinctUntilChanged((x, y) => {
            return x.from === y.from && x.to === y.to;
        }));
    }
    /**
     * @return {?}
     */
    watchDrop() {
        const /** @type {?} */ target$ = new Subject();
        document.addEventListener('drop', (event) => {
            // prevent default action (open as link for some elements)
            event.preventDefault();
            target$.next();
        }, false);
        document.addEventListener('touchend', () => {
            // prevent default action (open as link for some elements)
            if (this.pressedDay) {
                event.preventDefault();
                this.pressedDay = null;
                target$.next();
            }
        });
        return target$;
    }
    /**
     * @param {?} range
     * @return {?}
     */
    emitSelectRange(range) {
        // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
        this.selectRange.emit({
            from: DateHelper.formatDate(/** @type {?} */ (range.from), 'YYYY-MM-DD'),
            to: DateHelper.formatDate(/** @type {?} */ (range.to), 'YYYY-MM-DD'),
        });
    }
}
MonthViewCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view-calendar',
                template: `<div *ngFor="let week of weeks" class="o-agenda__table-row">
	<div
		*ngFor="let day of week"
		(tap)="emitSelectDay(day.date)"
		[ngClass]="{
			'is-current': isToday(day.date),
			'is-selected': isSelected(day.date, range),
			'is-faded': isCurrentMonth(day.date, weeks[1][0].date)
		}"
		[class]="day.highlights"
		class="o-agenda__table-row-cell"
		[attr.date]="day.date"
		(press)="touchStart(day.date)"
		>

		<div (dragstart)="dragStart(day.date)" class="o-agenda_drag-select" draggable="true"></div>

		<span class="o-agenda__table-row-cell-header">
			<span>{{ day.date | date:'d' }}</span>
		</span>

		<aui-agenda-more-button
			*ngIf="day.more"
			[hiddenEvents]="day.more"
			(clickMore)="onClickMore(day.date)"
		></aui-agenda-more-button>

		<aui-month-view-dots
			*ngIf="day.dots"
			[dots]="day.dots"
		></aui-month-view-dots>
	</div>
</div>

<aui-agenda-month-view-event-slots
	[slots]="slots"
	[eventItemTemplate]="eventItemTemplate"
	(selectEvent)="onSelectEvent($event)"
></aui-agenda-month-view-event-slots>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MonthViewCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewDotsComponent {
}
MonthViewDotsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-month-view-dots',
                template: `<div class="o-agenda__dots">
	<div *ngFor="let dot of dots" [ngStyle]="{ 'background-color': dot }" class="o-agenda__dot"></div>
</div>
`,
            },] },
];
MonthViewDotsComponent.propDecorators = {
    dots: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewEventSlotComponent {
}
MonthViewEventSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view-event-slot',
                template: `<ng-template #defaultTemplate let-event="event">
	<div class="a-event" [ngStyle]="{ 'background-color': event.fullDay ? event.color : null }" [ngClass]="{ 'a-event--light': event.fullDay }">
		<div *ngIf="!event.fullDay" class="a-event__bar" [ngStyle]="{ 'background-color': event.color }"></div>

		<div class="a-event__content">
			<div *ngIf="event.iconBefore || event.title" class="a-event__main">
				<span *ngIf="event.iconBefore" class="{{ event.iconBefore }} a-event__icon"></span><span *ngIf="event.title" class="a-event__title">{{ event.title }}</span>
			</div>

			<div *ngIf="event.iconAfter || !event.fullDay" class="a-event__extra">
				<span *ngIf="!event.fullDay" class="a-event__meta">{{ event.startDate | date:'HH:mm' }}</span><span *ngIf="event.iconAfter" class="{{ event.iconAfter }} a-event__icon"></span>
			</div>
		</div>
	</div>
</ng-template>

<div class="o-agenda__table-event" [ngStyle]="{
	left: display.left,
	top: display.top,
	width: display.width
}">
	<ng-container *ngTemplateOutlet="template ? template : defaultTemplate; context: { event: event }"></ng-container>
</div>
`,
            },] },
];
MonthViewEventSlotComponent.propDecorators = {
    event: [{ type: Input }],
    meta: [{ type: Input }],
    display: [{ type: Input }],
    template: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthViewEventSlotsComponent {
    constructor() {
        this.slots = [];
        this.selectEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitSelectEvent(event) {
        this.selectEvent.emit(event);
    }
}
MonthViewEventSlotsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view-event-slots',
                template: `<div class="aui-agenda-month-view-event-slots">
	<aui-agenda-month-view-event-slot
		*ngFor="let slot of slots"
		[event]="slot.event"
		[meta]="slot.meta"
		[display]="slot.display"
		[template]="eventItemTemplate"
		(click)="emitSelectEvent(slot.event)"
	></aui-agenda-month-view-event-slot>
</div>

`,
            },] },
];
MonthViewEventSlotsComponent.propDecorators = {
    slots: [{ type: Input }],
    eventItemTemplate: [{ type: Input }],
    selectEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MoreButtonComponent {
    /**
     * @param {?} label
     */
    constructor(label) {
        this.label = label;
        this.clickMore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitClickMore(event) {
        event.stopPropagation();
        this.clickMore.emit();
    }
}
MoreButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-more-button',
                template: `<div class="o-agenda__more">
	<button (click)="emitClickMore($event)" *ngIf="hiddenEvents > 0" class="o-agenda__more-button">
		{{ hiddenEvents }} {{ label }}
	</button>
</div>
`,
            },] },
];
/** @nocollapse */
MoreButtonComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MORE_LABEL,] }] }
];
MoreButtonComponent.propDecorators = {
    hiddenEvents: [{ type: Input }],
    clickMore: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavigationComponent {
    constructor() {
        this.cssClass = true;
        this.navigate = new EventEmitter();
        this.views = VIEWS;
        this.navigate$ = new Subject();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navigate$
            .pipe(takeUntil(this.componentDestroyed$), distinctUntilChanged(), debounceTime(200))
            .subscribe((value) => {
            this.navigate.emit(value);
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
     * @return {?}
     */
    prev() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.changeDate(date, -1);
    }
    /**
     * @return {?}
     */
    next() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.changeDate(date, 1);
    }
    /**
     * @return {?}
     */
    goToToday() {
        this.navigate$.next(this.today);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeDate(date, orient) {
        if (this.view === VIEWS.DAY) {
            return this.navigate$.next(this.changeDay(date, orient));
        }
        if (this.view === VIEWS.MONTH) {
            return this.navigate$.next(this.changeMonth(date, orient));
        }
        if (this.view === VIEWS.YEAR) {
            return this.navigate$.next(this.changeYear(date, orient));
        }
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeDay(date, orient) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + orient);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeMonth(date, orient) {
        return new Date(date.getFullYear(), date.getMonth() + orient, 1);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeYear(date, orient) {
        return new Date(date.getFullYear() + orient, 0, 1);
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-navigation',
                template: `<h4>
	<ng-container *ngIf="view === views.DAY">{{ activeDate | date:'dd/MM/y' }}</ng-container>
	<ng-container *ngIf="view === views.MONTH">{{ activeDate | date:'M' | monthPipe }} {{ activeDate | date:'y' }}</ng-container>
	<ng-container *ngIf="view === views.YEAR">{{ activeDate | date:'y' }}</ng-container>
</h4>

<div class="o-agenda__nav">
	<button tabindex="-1" type="button" aria-label="previous month" class="o-agenda__nav-previous a-button has-icon" (click)="prev()">
		<i class="fa fa-angle-left"></i>
	</button>

	<button tabindex="0" type="button" aria-label="today" class="a-button" (click)="goToToday()">
		Vandaag
	</button>

	<button tabindex="0" type="button" aria-label="next month" class="o-agenda__nav-next a-button has-icon" (click)="next()">
		<i class="fa fa-angle-right"></i>
	</button>
</div>
`,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
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
const /** @type {?} */ Services = [
    DateHelperService,
    MonthViewSlotsService,
    SortingService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = /** @type {?} */ ({
            'swipe': { direction: DIRECTION_ALL },
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = DEFAULT_WEEKDAY_LABELS, ɵ1 = DEFAULT_MONTH_LABELS, ɵ2 = DEFAULT_MORE_LABEL;
class AgendaModule {
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} moreLabel
     * @return {?}
     */
    static forChild(weekdayLabels, monthLabels, moreLabel) {
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
    }
}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9hZ2VuZGEuY29uZi50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvcGlwZXMvbW9udGgucGlwZS50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvcGlwZXMvd2Vla2RheS5waXBlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9waXBlcy9pbmRleC50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvdHlwZXMvYWdlbmRhLnR5cGVzLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jbGFzc2VzL2V2ZW50LW1hcC5jbGFzcy50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvY29tcG9uZW50cy9tb250aC12aWV3LWNhbGVuZGFyL21vbnRoLXZpZXctY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZG90cy9tb250aC12aWV3LWRvdHMuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2FnZW5kYS9saWIvYWdlbmRhL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9hZ2VuZGEvbGliL2FnZW5kYS9oYW1tZXIuY29uZi50cyIsIm5nOi8vYWdlbmRhL2xpYi9hZ2VuZGEvYWdlbmRhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9XRUVLREFZX0xBQkVMUyA9IFtcblx0J1N1bmRheScsXG5cdCdNb25kYXknLFxuXHQnVHVlc2RheScsXG5cdCdXZWRuZXNkYXknLFxuXHQnVGh1cnNkYXknLFxuXHQnRmlyZGF5Jyxcblx0J1NhdHVyZGF5Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01PTlRIX0xBQkVMUyA9IFtcblx0J0phbnVhcnknLFxuXHQnRmVicnVhcnknLFxuXHQnTWFyY2gnLFxuXHQnQXByaWwnLFxuXHQnTWF5Jyxcblx0J0p1bmUnLFxuXHQnSnVseScsXG5cdCdBdWd1c3QnLFxuXHQnU2VwdGVtYmVyJyxcblx0J09jdG9iZXInLFxuXHQnTm92ZW1iZXInLFxuXHQnRGVjZW1iZXInLFxuXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9SRV9MQUJFTCA9ICdtb3JlJztcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZ1tdPignd2Vla2RheUxhYmVscycpO1xuZXhwb3J0IGNvbnN0IE1PTlRIX0xBQkVMUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmdbXT4oJ21vbnRoTGFiZWxzJyk7XG5leHBvcnQgY29uc3QgTU9SRV9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdtb3JlTGFiZWwnKTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNT05USF9MQUJFTFMsIERFRkFVTFRfTU9OVEhfTEFCRUxTIH0gZnJvbSAnLi4vYWdlbmRhLmNvbmYnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdtb250aFBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChNT05USF9MQUJFTFMpIHByaXZhdGUgbW9udGhMYWJlbHMgPSBERUZBVUxUX01PTlRIX0xBQkVMU1xuXHQpIHt9XG5cblx0cHVibGljIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogc3RyaW5nIHtcblx0XHRjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cblx0XHRpZiAoaXNOYU4obW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IChtb250aCAtIDEpLnRvU3RyaW5nKCk7XG5cdFx0cmV0dXJuIHRoaXMubW9udGhMYWJlbHNbaW5kZXgudG9TdHJpbmcoKV0gfHwgREVGQVVMVF9NT05USF9MQUJFTFNbaW5kZXgudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXRUVLREFZX0xBQkVMUywgREVGQVVMVF9XRUVLREFZX0xBQkVMUyB9IGZyb20gJy4uL2FnZW5kYS5jb25mJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnd2Vla2RheVBpcGUnLFxufSlcbmV4cG9ydCBjbGFzcyBXZWVrZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFdFRUtEQVlfTEFCRUxTKSBwcml2YXRlIHdlZWtkYXlMYWJlbHMgPSBERUZBVUxUX1dFRUtEQVlfTEFCRUxTXG5cdCkge31cblxuXHRwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLndlZWtkYXlMYWJlbHNbKHZhbHVlKS50b1N0cmluZygpXSB8fCBERUZBVUxUX1dFRUtEQVlfTEFCRUxTWyh2YWx1ZSkudG9TdHJpbmcoKV07XG5cdH1cbn1cbiIsImltcG9ydCB7IE1vbnRoUGlwZSB9IGZyb20gJy4vbW9udGgucGlwZSc7XG5pbXBvcnQgeyBXZWVrZGF5UGlwZSB9IGZyb20gJy4vd2Vla2RheS5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRNb250aFBpcGUsXG5cdFdlZWtkYXlQaXBlLFxuXTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRJbnRlcmZhY2Uge1xuXHRzdGFydERhdGU6IERhdGU7XG5cdGVuZERhdGU6IERhdGU7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RNZXRhSW50ZXJmYWNlIHtcblx0d2VlazogbnVtYmVyO1xuXHRkYXk6IG51bWJlcjtcblx0c2xvdDogbnVtYmVyO1xuXHRzcGFuOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdERpc3BsYXlJbnRlcmZhY2Uge1xuXHRsZWZ0OiBzdHJpbmc7XG5cdHRvcDogc3RyaW5nO1xuXHR3aWR0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RJbnRlcmZhY2Uge1xuXHRtZXRhPzogU2xvdE1ldGFJbnRlcmZhY2U7XG5cdGRpc3BsYXk/OiBTbG90RGlzcGxheUludGVyZmFjZTtcblx0ZXZlbnQ/OiBFdmVudEludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbG90TWFwSXRlbUludGVyZmFjZSB7XG5cdHNsb3RzOiAoU2xvdEludGVyZmFjZXxib29sZWFuKVtdO1xuXHRldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cbn1cblxuZXhwb3J0IHR5cGUgU2xvdE1hcEludGVyZmFjZSA9IFNsb3RNYXBJdGVtSW50ZXJmYWNlW11bXTtcblxuZXhwb3J0IHR5cGUgRG90TWFwSW50ZXJmYWNlID0gKHN0cmluZylbXVtdW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlSW50ZXJmYWNlIHtcblx0ZnJvbTogRGF0ZXxzdHJpbmc7XG5cdHRvOiBEYXRlfHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlSYW5nZUludGVyZmFjZSB7XG5cdGZyb206IHN0cmluZztcblx0dG86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gREFZUyB7XG5cdFNVTkRBWSxcblx0TU9OREFZLFxuXHRUVUVTREFZLFxuXHRXRURORVNEQVksXG5cdFRIVVJTREFZLFxuXHRGUklEQVksXG5cdFNBVFVSREFZLFxufVxuXG5leHBvcnQgZW51bSBWSUVXUyB7XG5cdERBWSA9ICdEQVknLFxuXHRXRUVLID0gJ1dFRUsnLFxuXHRNT05USCA9ICdNT05USCcsXG5cdFlFQVIgPSAnWUVBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheUludGVyZmFjZSB7XG5cdGRhdGU6IERhdGU7XG5cdC8vIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0Ly8gdG90YWw6IG51bWJlcjtcblx0Ly8gZG90czogc3RyaW5nW107XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBSYW5nZUludGVyZmFjZSA9IChudW1iZXJbXXxEYXRlKVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hMaWdodEludGVyZmFjZSB7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogUmFuZ2VJbnRlcmZhY2U7XG59XG4iLCIvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0UmFuZ2VJbnRlcmZhY2UsXG5cdERBWVMsXG59IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyU2VydmljZSB7XG5cblx0cHVibGljIGdldERheXNGb3JNb250aChkYXRlOiBEYXRlLCBzdGFydERheU9mV2VlazogbnVtYmVyLCByYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlID0gbnVsbCk6IFdlZWtkYXlJbnRlcmZhY2VbXSB7XG5cdFx0Y29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5nZXRGaXJzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGUsIHN0YXJ0RGF5T2ZXZWVrKTtcblx0XHRjb25zdCBtYXggPSB0aGlzLmRhdGVEaWZmKGZpcnN0RGF5T2ZNb250aCwgbGFzdERheU9mTW9udGgpO1xuXG5cdFx0Y29uc3QgZGF5cyA9IFtcblx0XHRcdHsgZGF0ZTogZmlyc3REYXlPZk1vbnRoLCBoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIGZpcnN0RGF5T2ZNb250aCkgfSxcblx0XHRdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgbmV4dERheSA9IHRoaXMuZ2V0TmV4dERheShkYXlzW2ldLmRhdGUpO1xuXG5cdFx0XHRkYXlzLnB1c2goe1xuXHRcdFx0XHRoaWdobGlnaHRzOiB0aGlzLmdldEhpZ2hsaWdodHMocmFuZ2UsIG5leHREYXkpLFxuXHRcdFx0XHRkYXRlOiBuZXh0RGF5LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRheXM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SGlnaGxpZ2h0cyhyYW5nZTogSGlnaExpZ2h0SW50ZXJmYWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcblx0XHRpZiAoIXJhbmdlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJhbmdlKS5maWx0ZXIoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5SYW5nZShyYW5nZVtrZXldLCBkYXRlKTtcblx0XHR9KS5qb2luKCcgJyk7XG5cdH1cblxuXHRwdWJsaWMgaW5SYW5nZShyYW5nZTogUmFuZ2VJbnRlcmZhY2UsIGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcmFuZ2Uuc29tZSgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uaW5kZXhPZihkYXRlLmdldERheSgpKSAhPT0gLTE7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShpdGVtKTtcblx0XHRcdGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbXBhcmVEYXRlcyhkLCBkYXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRXZWVrc0Zvck1vbnRoKGRheXM6IFdlZWtkYXlJbnRlcmZhY2VbXSk6IFdlZWtkYXlJbnRlcmZhY2VbXVtdIHtcblx0XHRjb25zdCBudW1iZXJPZldlZWtzID0gTWF0aC5yb3VuZChkYXlzLmxlbmd0aCAvIDcpO1xuXG5cdFx0cmV0dXJuIEFycmF5KG51bWJlck9mV2Vla3MpLmZpbGwobnVsbCkubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLnNsaWNlKGluZGV4ICogNywgKGluZGV4ICsgMSkgKiA3KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRMYXN0RGF0ZU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuXHR9XG5cblx0cHVibGljIG1vdmVUb0RheU9mV2VlayhkYXRlOiBEYXRlLCBkYXlPZldlZWs6IG51bWJlciwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRsZXQgZGlmZiA9IChkYXlPZldlZWsgLSBkYXRlLmdldERheSgpICsgNyAqIChvcmllbnQgfHwgKyAxKSkgJSA3O1xuXHRcdGNvbnN0IHZhbHVlID0gKGRpZmYgPT09IDApID8gZGlmZiArPSA3ICogKG9yaWVudCB8fCArMSkgOiBkaWZmO1xuXHRcdGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcblx0XHRyZXR1cm4gbmV3IERhdGUoZC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgdmFsdWUgKiAxKSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RXZWVrRGF5T2ZNb250aChkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogbnVtYmVyfHN0cmluZyk6IERhdGUge1xuXHRcdGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcblx0XHRpZiAoZmlyc3REYXlPZk1vbnRoLmdldERheSgpID09PSBOdW1iZXIoc3RhcnRPZldlZWspKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsoZmlyc3REYXlPZk1vbnRoLCBOdW1iZXIoc3RhcnRPZldlZWspLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TGFzdFdlZWtEYXlPZk1vbnRoKGRhdGU6IERhdGUsIHN0YXJ0T2ZXZWVrOiBudW1iZXIpOiBEYXRlIHtcblx0XHRjb25zdCBlbmRPZldlZWsgPSAoc3RhcnRPZldlZWsgPT09IDAgPyA2IDogc3RhcnRPZldlZWsgLSAxKTtcblx0XHRjb25zdCBsYXN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0TGFzdERhdGVPZk1vbnRoKGRhdGUpO1xuXHRcdGlmIChsYXN0RGF5T2ZNb250aC5nZXREYXkoKSA9PT0gZW5kT2ZXZWVrKSB7XG5cdFx0XHRyZXR1cm4gbGFzdERheU9mTW9udGg7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlayhsYXN0RGF5T2ZNb250aCwgZW5kT2ZXZWVrLCAxKTtcblx0fVxuXG5cdHB1YmxpYyBnZXROZXh0RGF5KHRvZGF5OiBEYXRlKTogRGF0ZSB7XG5cdFx0Y29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG5cdFx0dG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcblx0XHRyZXR1cm4gdG9tb3Jyb3c7XG5cdH1cblxuXHRwdWJsaWMgZGF0ZURpZmYoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogbnVtYmVyIHtcblx0XHQvLyBDb21wYXJlIGJhc2VkIG9uIGRhdGUsIG5vdCBvbiB0aW1lXG5cdFx0Y29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIHN0YXJ0RGF0ZS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUuZ2V0RnVsbFllYXIoKSwgZW5kRGF0ZS5nZXRNb250aCgpLCBlbmREYXRlLmdldERhdGUoKSk7XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSkgLyAoIDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblx0fVxuXG5cdHB1YmxpYyBjb21wYXJlRGF0ZXMoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGF0ZTFZZWFyID0gZGF0ZTEuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMU1vbnRoID0gZGF0ZTEuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMURhdGUgPSBkYXRlMS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgZGF0ZTJZZWFyID0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBkYXRlMk1vbnRoID0gZGF0ZTIuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXRlMkRhdGUgPSBkYXRlMi5nZXREYXRlKCk7XG5cblx0XHRyZXR1cm4gZGF0ZTFZZWFyID09PSBkYXRlMlllYXIgJiYgZGF0ZTFNb250aCA9PT0gZGF0ZTJNb250aCAmJiBkYXRlMURhdGUgPT09IGRhdGUyRGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBvcmRlcldlZWtEYXlzKHN0YXJ0RGF5T2ZXZWVrOiBEQVlTKTogREFZU1tdIHtcblx0XHRjb25zdCByb3RhdGUgPSBmdW5jdGlvbiAoYXJyYXksIGluZGV4KSB7XG5cdFx0XHRjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdHJldHVybiBhcnJheS5zbGljZShhcnJheUxlbmd0aCAtIGluZGV4KS5jb25jYXQoYXJyYXkuc2xpY2UoMCwgYXJyYXlMZW5ndGggLSBpbmRleCkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgd2Vla2RheXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG5cblx0XHRpZiAoc3RhcnREYXlPZldlZWsgPT09IERBWVMuU1VOREFZKSB7XG5cdFx0XHRyZXR1cm4gd2Vla2RheXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiByb3RhdGUod2Vla2RheXMsIDcgLSBzdGFydERheU9mV2Vlayk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0T25EZXN0cm95LFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVklFV1MsIERBWVMsIERhdGVSYW5nZUludGVyZmFjZSwgRXZlbnRJbnRlcmZhY2UsIEhpZ2hMaWdodEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiYWdlbmRhU2l6ZSQgfCBhc3luY1wiIGNsYXNzPVwiby1hZ2VuZGFcIj5cblx0PGRpdiBjbGFzcz1cIm8tYWdlbmRhX19pbm5lclwiPlxuXHRcdDxhdWktYWdlbmRhLW5hdmlnYXRpb25cblx0XHRcdFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuXHRcdFx0W3ZpZXddPVwidmlld1wiXG5cdFx0XHRbdG9kYXldPVwidG9kYXlcIlxuXHRcdFx0KG5hdmlnYXRlKT1cIm9uTmF2aWdhdGUoJGV2ZW50KVwiXG5cdFx0PjwvYXVpLWFnZW5kYS1uYXZpZ2F0aW9uPlxuXG5cdFx0PGF1aS1hZ2VuZGEtbW9udGgtdmlld1xuXHRcdFx0Km5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiXG5cdFx0XHRbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcblx0XHRcdFt3ZWVrZGF5c109XCJ3ZWVrZGF5c1wiXG5cdFx0XHRbc3RhcnREYXlPZldlZWtdPVwic3RhcnREYXlPZldlZWtcIlxuXHRcdFx0W2V2ZW50c109XCJldmVudHNcIlxuXHRcdFx0W2hpZ2hsaWdodHNdPVwiaGlnaGxpZ2h0c1wiXG5cdFx0XHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwibW9udGhFdmVudEl0ZW1UZW1wbGF0ZVwiXG5cdFx0XHQoc2VsZWN0RGF5KT1cIm9uU2VsZWN0RGF5KCRldmVudClcIlxuXHRcdFx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG5cdFx0XHQoY2xpY2tNb3JlKT1cIm9uQ2xpY2tNb3JlKCRldmVudClcIlxuXHRcdFx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdFx0XHQoZGlzcGxheVJhbmdlKT1cIm9uRGlzcGxheVJhbmdlKCRldmVudClcIlxuXHRcdFx0KHN3aXBlbGVmdCk9XCJzd2lwZSgkZXZlbnQpXCJcblx0XHRcdChzd2lwZXJpZ2h0KT1cInN3aXBlKCRldmVudClcIlxuXHRcdD48L2F1aS1hZ2VuZGEtbW9udGgtdmlldz5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0Ly8gRGVmYXVsdFxuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRzOiBFdmVudEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlldzogVklFV1M7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXG5cdC8vIE1vbnRoIHZpZXdcblx0QElucHV0KCkgcHVibGljIHN0YXJ0RGF5T2ZXZWVrOiBEQVlTID0gREFZUy5NT05EQVk7IC8vIFN0YXJ0IG9mIHRoZSB3ZWVrICgwID0gc3VuZGF5LCAxID0gbW9uZGF5LCAuLi4pXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgbW9udGhFdmVudEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0QE91dHB1dCgpIHB1YmxpYyBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVJhbmdlSW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja01vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFnZW5kYVNpemUkO1xuXHRwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0cHVibGljIHRvZGF5OiBEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2F0Y2hBZ2VuZGFTaXplKCk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLk1PTlRIKSB7XG5cdFx0XHRcdHRoaXMud2Vla2RheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLm9yZGVyV2Vla0RheXMoY2hhbmdlcy5zdGFydERheU9mV2Vlay5jdXJyZW50VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZShlKSB7XG5cdFx0aWYgKGUucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVsZWZ0Jykge1xuXHRcdFx0dGhpcy5uZXh0TW9udGgoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZS50eXBlID09PSAnc3dpcGVyaWdodCcpIHtcblx0XHRcdHRoaXMucHJldk1vbnRoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIG9uTmF2aWdhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uRGlzcGxheVJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdERheS5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RXZlbnQoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RFdmVudC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdHB1YmxpYyBvbkNsaWNrTW9yZShkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VG9kYXkoKTogRGF0ZSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblx0XHRyZXR1cm4gZGF0ZTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2TW9udGgoKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0dGhpcy5vbk5hdmlnYXRlKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgMSkpO1xuXHR9XG5cblx0cHVibGljIG5leHRNb250aCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLm9uTmF2aWdhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAxKSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RSYW5nZShyYW5nZTogRGF0ZVJhbmdlSW50ZXJmYWNlKSB7XG5cdFx0dGhpcy5zZWxlY3RSYW5nZS5lbWl0KHJhbmdlKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hBZ2VuZGFTaXplKCk6IHZvaWQge1xuXHRcdHRoaXMuYWdlbmRhU2l6ZSQgPSB0aW1lcigwLCAyNTApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG5cdFx0XHRcdG1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgod2lkdGgpID0+IHtcblx0XHRcdFx0XHRpZiAod2lkdGggPiA4MDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLWJpZyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnby1hZ2VuZGEtLXNtYWxsJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBTbG90TWFwSW50ZXJmYWNlLCBTbG90SW50ZXJmYWNlLCBFdmVudEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudE1hcCB7XG5cdHB1YmxpYyBzbG90TWFwOiBTbG90TWFwSW50ZXJmYWNlO1xuXG5cdGNvbnN0cnVjdG9yKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgc2xvdHM6IG51bWJlcikge1xuXHRcdHRoaXMuaW5pdFNsb3RzKHdlZWtzLCBzbG90cyk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdFNsb3RzKHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSwgYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2xvdE1hcCA9IHdlZWtzLm1hcCgod2Vla2RheXMpID0+IHtcblx0XHRcdHJldHVybiB3ZWVrZGF5cy5tYXAoKGRheSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG5cdFx0XHRcdFx0c2xvdHM6IEFycmF5KGF2YWlsYWJsZVNsb3RzKS5maWxsKG51bGwpLFxuXHRcdFx0XHRcdGV2ZW50czogW10sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsbFNsb3Qod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyLCBzcGFuOiBudW1iZXIgPSAxLCBldmVudDogYW55ID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHNbc2xvdF0gPSB7XG5cdFx0XHRcdG1ldGE6IHtcblx0XHRcdFx0XHR3ZWVrLFxuXHRcdFx0XHRcdGRheSxcblx0XHRcdFx0XHRzbG90LFxuXHRcdFx0XHRcdHNwYW4sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50LFxuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGFuOyBpICs9IDEpIHtcblx0XHRcdFx0dGhpcy5maWxsU2xvdCh3ZWVrLCBkYXkgKyBpLCBzbG90KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90c1tzbG90XSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGlzU2xvdEZyZWUod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc2xvdDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzW3Nsb3RdID09PSBudWxsO1xuXHR9XG5cblx0cHVibGljIGdldEZyZWVTbG90KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90cy5maW5kSW5kZXgoKG8pID0+IHtcblx0XHRcdHJldHVybiBvID09PSBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIsIHNwYW46IG51bWJlciwgZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNwYW47IGkgKz0gMSkge1xuXHRcdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5ICsgaV0uZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRTbG90cyhldmVudEhlaWdodDogbnVtYmVyLCB3ZWVrSGVpZ2h0OiBudW1iZXIsIGhlaWdodE9mZnNldDogbnVtYmVyKTogU2xvdEludGVyZmFjZVtdIHtcblx0XHRjb25zdCBudW1iZXJPZkRheXMgPSB0aGlzLnNsb3RNYXBbMF0ubGVuZ3RoO1xuXHRcdGNvbnN0IGRheVdpZHRoID0gKCgxIC8gbnVtYmVyT2ZEYXlzKSAqIDEwMCk7XG5cblx0XHRjb25zdCBmbGF0dGVuID0gbGlzdCA9PiBsaXN0LnJlZHVjZShcblx0XHRcdChhLCBiKSA9PiBhLmNvbmNhdChBcnJheS5pc0FycmF5KGIpID8gZmxhdHRlbihiKSA6IGIpLCBbXVxuXHRcdCk7XG5cblx0XHRjb25zdCBzbG90cyA9IHRoaXMuc2xvdE1hcC5tYXAoKG8pID0+IHtcblx0XHRcdHJldHVybiBvLm1hcCgocCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcC5zbG90cztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZsYXR0ZW4oc2xvdHMpLmZpbHRlcigoc2xvdDogU2xvdEludGVyZmFjZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNsb3QgIT09IG51bGwgJiYgc2xvdCAhPT0gdHJ1ZTtcblx0XHR9KS5tYXAoKHNsb3Q6IFNsb3RJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNsb3QsXG5cdFx0XHRcdGRpc3BsYXk6IHtcblx0XHRcdFx0XHRsZWZ0OiAnY2FsYygnICsgZGF5V2lkdGggKiBzbG90Lm1ldGEuZGF5ICsgJyUgKyA0cHgpJyxcblx0XHRcdFx0XHR0b3A6IGhlaWdodE9mZnNldCArICh3ZWVrSGVpZ2h0ICogc2xvdC5tZXRhLndlZWspICsgKHNsb3QubWV0YS5zbG90ICogZXZlbnRIZWlnaHQpICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDogJ2NhbGMoJyArIGRheVdpZHRoICogc2xvdC5tZXRhLnNwYW4gKyAnJSAtIDhweCknLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRFdmVudHNNYXAoYXZhaWxhYmxlU2xvdHM6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcC5tYXAoKGRheXMpID0+IHtcblx0XHRcdHJldHVybiBkYXlzLm1hcCgoZGF5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcblx0XHRcdFx0XHR0b3RhbDogZGF5LmV2ZW50cy5sZW5ndGgsXG5cdFx0XHRcdFx0bW9yZTogZGF5LmV2ZW50cy5sZW5ndGggLSBhdmFpbGFibGVTbG90cyxcblx0XHRcdFx0XHRkb3RzOiBkYXkuZXZlbnRzLm1hcCgoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogc3RyaW5nID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudC5jb2xvcjtcblx0XHRcdFx0XHR9KS5maWx0ZXIoKGNvbG9yOiBzdHJpbmcsIHBvczogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhcnJheS5pbmRleE9mKGNvbG9yKSA9PT0gcG9zO1xuXHRcdFx0XHRcdH0pLnNsaWNlKDAsIDMpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWFwIH0gZnJvbSAnLi4vY2xhc3Nlcy9ldmVudC1tYXAuY2xhc3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgc29ydEV2ZW50cyhldmVudHM6IEV2ZW50SW50ZXJmYWNlW10pOiBFdmVudEludGVyZmFjZVtdIHtcblx0XHRyZXR1cm4gZXZlbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdC8vIFNvcnQgYnkgZGF0ZVxuXHRcdFx0Y29uc3Qgc29ydGVkQnlEYXRlID0gdGhpcy5zb3J0QnlEYXRlSGVscGVyKGEuc3RhcnREYXRlLCBiLnN0YXJ0RGF0ZSk7XG5cdFx0XHRpZiAoc29ydGVkQnlEYXRlICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybiBzb3J0ZWRCeURhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNvcnQgYnkgZGlmZlxuXHRcdFx0Y29uc3Qgc29ydGVkQnlTcGFuID0gdGhpcy5zb3J0QnlTcGFuSGVscGVyKGEuc3RhcnREYXRlLCBhLmVuZERhdGUsIGIuc3RhcnREYXRlLCBiLmVuZERhdGUpO1xuXHRcdFx0aWYgKHNvcnRlZEJ5U3BhbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc29ydGVkQnlTcGFuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3J0QnlEYXRlVGltZUhlbHBlcihhLnN0YXJ0RGF0ZSwgYi5zdGFydERhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVIZWxwZXIoYTogRGF0ZSwgYjogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3QgYVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwgYS5nZXRNb250aCgpLCBhLmdldERhdGUoKSk7XG5cdFx0Y29uc3QgYlN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGIuZ2V0RnVsbFllYXIoKSwgYi5nZXRNb250aCgpLCBiLmdldERhdGUoKSk7XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA8IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoYVN0YXJ0RGF0ZSA+IGJTdGFydERhdGUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeURhdGVUaW1lSGVscGVyKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuXHRcdGlmIChhIDwgYikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChhID4gYikge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRwdWJsaWMgc29ydEJ5U3BhbkhlbHBlcihhU3RhcnQ6IERhdGUsIGFFbmQ6IERhdGUsIGJTdGFydDogRGF0ZSwgYkVuZDogRGF0ZSk6IG51bWJlciB7XG5cdFx0Y29uc3Qgc3BhbkEgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGFTdGFydCwgYUVuZCk7XG5cdFx0Y29uc3Qgc3BhbkIgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmRhdGVEaWZmKGJTdGFydCwgYkVuZCk7XG5cblx0XHRpZiAoc3BhbkEgPiBzcGFuQikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdGlmIChzcGFuQSA8IHNwYW5CKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIHtcblx0cHVibGljIGV2ZW50TWFwOiBFdmVudE1hcDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSxcblx0XHRwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIGdlbmVyYXRlRXZlbnRNYXAoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdLCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBFdmVudE1hcCB7XG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh3ZWVrc1swXVswXS5kYXRlKTtcblx0XHRjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUod2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZSk7XG5cblx0XHQvLyAxLiBGb3JtYXRcblx0XHRjb25zdCBtYXBwZWRFdmVudHMgPSB0aGlzLmZvcm1hdEV2ZW50cyhldmVudHMpO1xuXG5cdFx0Ly8gMi4gUmVtb3ZlIGV2ZW50cyB3YWFyIGRlIGVuZERhdGUgPCBzdGFydE1vbnRoIG9mIGVuZERhdGUgPiBlbmRNb250aFxuXHRcdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gdGhpcy5maWx0ZXJFdmVudHMobWFwcGVkRXZlbnRzLCBmaXJzdERheSwgbGFzdERheSk7XG5cblx0XHQvLyAzLiBTb3J0ZWVyIHZhbiBvdWQgbmFhciBuaWV1dyBlbiB2YW4gbGFuZyBldmVudCBuYWFyIGtvcnQgZXZlbnRcblx0XHRjb25zdCBzb3J0ZWRFdmVudHM6IEV2ZW50SW50ZXJmYWNlW10gPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLnNvcnRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuXG5cdFx0Ly8gNC4gRmlsbCBFdmVudE1hcFxuXHRcdHRoaXMuZXZlbnRNYXAgPSBuZXcgRXZlbnRNYXAod2Vla3MsIGF2YWlsYWJsZVNsb3RzKTtcblx0XHRzb3J0ZWRFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5zdGFydERhdGUgPCBmaXJzdERheSkge1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZShmaXJzdERheSwgZXZlbnQuZW5kRGF0ZSwgMCwgMCwgZXZlbnQsIHdlZWtzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla3MubGVuZ3RoOyB3ZWVrICs9IDEpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCB3ZWVrc1t3ZWVrXS5sZW5ndGg7IGRheSArPSAxKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRlID0gd2Vla3Nbd2Vla11bZGF5XS5kYXRlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuY29tcGFyZURhdGVzKGV2ZW50LnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGUoZXZlbnQuc3RhcnREYXRlLCBldmVudC5lbmREYXRlLCB3ZWVrLCBkYXksIGV2ZW50LCB3ZWVrcyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCBmb3IgbG9vcCAtLT4gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRkYXkgPSB3ZWVrc1t3ZWVrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdlZWsgPSB3ZWVrcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRNYXA7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0RXZlbnRzKGV2ZW50cykge1xuXHRcdHJldHVybiBldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuXHRcdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSksXG5cdFx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRXZlbnRzKGV2ZW50cywgZmlyc3REYXksIGxhc3REYXkpIHtcblx0XHRyZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShldmVudC5lbmREYXRlKSA+IGZpcnN0RGF5ICYmIG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSkgPCBsYXN0RGF5O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGNhbGN1bGF0ZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBldmVudDogYW55LCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pOiB2b2lkIHtcblx0XHRjb25zdCB3ZWVrZGF5c0xlbmd0aCA9IHdlZWtzWzBdLmxlbmd0aDtcblx0XHRjb25zdCBsZW5ndGhPZkV2ZW50ID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihzdGFydCwgZW5kKTtcblx0XHRjb25zdCBzcGFuID0gbGVuZ3RoT2ZFdmVudCArIDEgPD0gd2Vla2RheXNMZW5ndGggLSBkYXkgPyBsZW5ndGhPZkV2ZW50ICsgMSA6IHdlZWtkYXlzTGVuZ3RoIC0gZGF5O1xuXHRcdGNvbnN0IGRpZmZ0ZXN0ID0gKGxlbmd0aE9mRXZlbnQgLSBzcGFuKSArIDE7XG5cblx0XHR0aGlzLmV2ZW50TWFwLmFkZEV2ZW50KHdlZWssIGRheSwgc3BhbiwgZXZlbnQpO1xuXG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuZXZlbnRNYXAuZ2V0RnJlZVNsb3Qod2VlaywgZGF5KTtcblx0XHRpZiAoc2xvdCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZXZlbnRNYXAuZmlsbFNsb3Qod2VlaywgZGF5LCBzbG90LCBzcGFuLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmZ0ZXN0ID4gMSAmJiB3ZWVrICsgMSA8IHdlZWtzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUod2Vla3Nbd2VlayArIDFdWzBdLmRhdGUsIGVuZCwgd2VlayArIDEsIDAsIGV2ZW50LCB3ZWVrcyk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0QmluZGluZyxcblx0T25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RXZlbnRJbnRlcmZhY2UsXG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdERBWVMsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHRTbG90SW50ZXJmYWNlLFxufSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5pbXBvcnQgeyBNb250aFZpZXdTbG90c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWRcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiB3ZWVrZGF5c1wiIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWQtY2VsbFwiPnt7IHdlZWtkYXkgfCB3ZWVrZGF5UGlwZSB9fTwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXJcblx0W3dlZWtzXT1cIndlZWtzXCJcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W3NlbGVjdGVkRGF5XT1cInNlbGVjdGVkRGF5XCJcblx0W3JhbmdlXT1cInNlbGVjdGVkUmFuZ2VcIlxuXHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHQocm93SGVpZ2h0KT1cIm9uQ2hhbmdlUm93SGVpZ2h0KCRldmVudClcIlxuXHQoc2VsZWN0RXZlbnQpPVwib25TZWxlY3RFdmVudCgkZXZlbnQpXCJcblx0KHNlbGVjdERheSk9XCJvblNlbGVjdERheSgkZXZlbnQpXCJcblx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdChjbGlja01vcmUpPVwib25DbGlja01vcmUoJGV2ZW50KVwiXG5cdChkcmFnUmFuZ2UpPVwib25EcmFnUmFuZ2UoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXI+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9fdGFibGUnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgc3RhcnREYXlPZldlZWs6IERBWVMgPSBEQVlTLk1PTkRBWTsgLy8gU3RhcnQgb2YgdGhlIHdlZWsgKDAgPSBzdW5kYXksIDEgPSBtb25kYXksIC4uLilcblx0QElucHV0KCkgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheVJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0UmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgc2xvdHM6IFNsb3RJbnRlcmZhY2VbXTtcblx0cHVibGljIHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXk6IERhdGU7XG5cdHB1YmxpYyBzZWxlY3RlZFJhbmdlID0ge1xuXHRcdGZyb206IG51bGwsXG5cdFx0dG86IG51bGwsXG5cdH07XG5cblx0cHVibGljIHdlZWtIZWlnaHQ6IG51bWJlcjtcblx0cHVibGljIGV2ZW50SGVpZ2h0ID0gMjg7XG5cdHB1YmxpYyBoZWlnaHRPZmZzZXQgPSAyODtcblx0cHVibGljIGV2ZW50c0J5RGF5OiBhbnk7XG5cdHB1YmxpYyBhdmFpbGFibGVTbG90cyA9IDA7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb250aFZpZXdTbG90c1NlcnZpY2U6IE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5hY3RpdmVEYXRlIHx8IGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGN1bGF0ZU1vbnRoV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLnN0YXJ0RGF5T2ZXZWVrLCB0aGlzLmhpZ2hsaWdodHMpO1xuXHRcdFx0dGhpcy5lbWl0RGlzcGxheVJhbmdlKHRoaXMud2Vla3MpO1xuXHRcdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRheTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBkYXk7XG5cdFx0aWYgKGRheSkge1xuXHRcdFx0dGhpcy5zZWxlY3REYXkuZW1pdChkYXkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRwdWJsaWMgb25DaGFuZ2VSb3dIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gdGhpcy5oZWlnaHRPZmZzZXQgLSAyMCkgLyB0aGlzLmV2ZW50SGVpZ2h0KTtcblx0XHR0aGlzLndlZWtIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25DbGlja01vcmUoZGF5OiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXkpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdHRoaXMuc2VsZWN0UmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25EcmFnUmFuZ2UocmFuZ2UpIHtcblx0XHR0aGlzLnNlbGVjdGVkUmFuZ2UgPSByYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2xvdHNBbmRXZWVrcygpIHtcblx0XHRpZiAodGhpcy5hdmFpbGFibGVTbG90cyA+PSAwKSB7XG5cdFx0XHRjb25zdCBldmVudE1hcCA9IHRoaXMubW9udGhWaWV3U2xvdHNTZXJ2aWNlLmdlbmVyYXRlRXZlbnRNYXAoXG5cdFx0XHRcdHRoaXMuZXZlbnRzLFxuXHRcdFx0XHR0aGlzLndlZWtzLFxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnNsb3RzID0gZXZlbnRNYXAuZ2V0U2xvdHModGhpcy5ldmVudEhlaWdodCwgdGhpcy53ZWVrSGVpZ2h0LCB0aGlzLmhlaWdodE9mZnNldCk7XG5cdFx0XHR0aGlzLndlZWtzID0gZXZlbnRNYXAuZ2V0RXZlbnRzTWFwKHRoaXMuYXZhaWxhYmxlU2xvdHMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTW9udGhXZWVrcyhkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogREFZUywgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlKTogV2Vla2RheUludGVyZmFjZVtdW10ge1xuXHRcdGNvbnN0IGRheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmdldERheXNGb3JNb250aChkYXRlLCBzdGFydE9mV2VlaywgaGlnaGxpZ2h0cyk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuZ2V0V2Vla3NGb3JNb250aChkYXlzKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdERpc3BsYXlSYW5nZSh3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pIHtcblx0XHRpZiAod2Vla3MubGVuZ3RoID4gMCAmJiB3ZWVrc1swXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBmcm9tID0gd2Vla3NbMF1bMF0uZGF0ZTtcblx0XHRcdGNvbnN0IHRvID0gd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZTtcblxuXHRcdFx0aWYgKGZyb20gJiYgdG8pIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmFuZ2UuZW1pdCh7XG5cdFx0XHRcdFx0ZnJvbSxcblx0XHRcdFx0XHR0byxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEVsZW1lbnRSZWYsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxuXHRUZW1wbGF0ZVJlZixcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3RpbWVyJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRFdmVudEludGVyZmFjZSxcblx0V2Vla2RheUludGVyZmFjZSxcblx0U2xvdEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHREYXlSYW5nZUludGVyZmFjZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3LWNhbGVuZGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCIgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtcm93XCI+XG5cdDxkaXZcblx0XHQqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIlxuXHRcdCh0YXApPVwiZW1pdFNlbGVjdERheShkYXkuZGF0ZSlcIlxuXHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdCdpcy1jdXJyZW50JzogaXNUb2RheShkYXkuZGF0ZSksXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkKGRheS5kYXRlLCByYW5nZSksXG5cdFx0XHQnaXMtZmFkZWQnOiBpc0N1cnJlbnRNb250aChkYXkuZGF0ZSwgd2Vla3NbMV1bMF0uZGF0ZSlcblx0XHR9XCJcblx0XHRbY2xhc3NdPVwiZGF5LmhpZ2hsaWdodHNcIlxuXHRcdGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsXCJcblx0XHRbYXR0ci5kYXRlXT1cImRheS5kYXRlXCJcblx0XHQocHJlc3MpPVwidG91Y2hTdGFydChkYXkuZGF0ZSlcIlxuXHRcdD5cblxuXHRcdDxkaXYgKGRyYWdzdGFydCk9XCJkcmFnU3RhcnQoZGF5LmRhdGUpXCIgY2xhc3M9XCJvLWFnZW5kYV9kcmFnLXNlbGVjdFwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cblxuXHRcdDxzcGFuIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvdy1jZWxsLWhlYWRlclwiPlxuXHRcdFx0PHNwYW4+e3sgZGF5LmRhdGUgfCBkYXRlOidkJyB9fTwvc3Bhbj5cblx0XHQ8L3NwYW4+XG5cblx0XHQ8YXVpLWFnZW5kYS1tb3JlLWJ1dHRvblxuXHRcdFx0Km5nSWY9XCJkYXkubW9yZVwiXG5cdFx0XHRbaGlkZGVuRXZlbnRzXT1cImRheS5tb3JlXCJcblx0XHRcdChjbGlja01vcmUpPVwib25DbGlja01vcmUoZGF5LmRhdGUpXCJcblx0XHQ+PC9hdWktYWdlbmRhLW1vcmUtYnV0dG9uPlxuXG5cdFx0PGF1aS1tb250aC12aWV3LWRvdHNcblx0XHRcdCpuZ0lmPVwiZGF5LmRvdHNcIlxuXHRcdFx0W2RvdHNdPVwiZGF5LmRvdHNcIlxuXHRcdD48L2F1aS1tb250aC12aWV3LWRvdHM+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHNcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W2V2ZW50SXRlbVRlbXBsYXRlXT1cImV2ZW50SXRlbVRlbXBsYXRlXCJcblx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHM+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3Muby1hZ2VuZGFfX3RhYmxlLWdyaWQnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW107XG5cdEBJbnB1dCgpIHB1YmxpYyBzbG90czogU2xvdEludGVyZmFjZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXZlbnRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZERheTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgcmFuZ2UgPSB7XG5cdFx0ZnJvbTogbnVsbCxcblx0XHR0bzogbnVsbCxcblx0fTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHJvd0hlaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdERheSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tNb3JlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGRyYWdSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcHJlc3NlZERheTogc3RyaW5nOyAvLyBmb3JtYXQ6IFlZWVktTU0tRERcblx0cHVibGljIGN1cnJlbnREYXk6IHN0cmluZzsgLy8gZm9ybWF0OiBZWVlZLU1NLUREXG5cblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmN1cnJlbnREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUobmV3IERhdGUoKSwgJ1lZWVktTU0tREQnKTtcblxuXHRcdHRoaXMud2F0Y2hSb3dIZWlndGgoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChoZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodC5lbWl0KGhlaWdodCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcmFnT3ZlcigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJhbmdlKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdERyYWdSYW5nZShyYW5nZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMud2F0Y2hEcm9wKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFNlbGVjdFJhbmdlKHRoaXMucmFuZ2UpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgaXNUb2RheShkYXRlOiBEYXRlKSB7XG5cdFx0Y29uc3QgZGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cblx0XHRyZXR1cm4gZGF5ID09PSB0aGlzLmN1cnJlbnREYXk7XG5cdH1cblxuXHRwdWJsaWMgaXNTZWxlY3RlZChkYXk6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpOiBib29sZWFuIHtcblx0XHRjb25zdCBjdXJyZW50RGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRheSwgJ1lZWVktTU0tREQnKTtcblx0XHRjb25zdCBmcm9tID0gcmFuZ2UgJiYgcmFuZ2UuZnJvbSA/IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShuZXcgRGF0ZShyYW5nZS5mcm9tLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblx0XHRjb25zdCB0byA9IHJhbmdlICYmIHJhbmdlLnRvID8gRGF0ZUhlbHBlci5mb3JtYXREYXRlKG5ldyBEYXRlKHJhbmdlLnRvLnRvU3RyaW5nKCkpLCAnWVlZWS1NTS1ERCcpIDogbnVsbDtcblxuXHRcdHJldHVybiBjdXJyZW50RGF5ID09PSB0aGlzLnNlbGVjdGVkRGF5XG5cdFx0XHR8fCAoKGZyb20gJiYgbmV3IERhdGUoZnJvbSkgPD0gbmV3IERhdGUoY3VycmVudERheSkpICYmICh0byAmJiBuZXcgRGF0ZSh0bykgPj0gbmV3IERhdGUoY3VycmVudERheSkpKTtcblx0fVxuXG5cdHB1YmxpYyByZXNldFJhbmdlKCkge1xuXHRcdHRoaXMuZW1pdERyYWdSYW5nZSh7XG5cdFx0XHRmcm9tOiBudWxsLFxuXHRcdFx0dG86IG51bGwsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgaXNDdXJyZW50TW9udGgoZGF5OiBzdHJpbmcsIGRhdGU6IERhdGUpIHtcblx0XHRjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5KTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoZGF0ZSk7XG5cblx0XHRyZXR1cm4gZGF5RGF0ZS5nZXRNb250aCgpICE9PSBjdXJyZW50LmdldE1vbnRoKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdFNlbGVjdERheShkYXk6IERhdGUpOiB2b2lkIHtcblx0XHQvLyBOZXZlciBlbWl0IGEgc3BlY2lmaWMgZGF5IGFzIGEgYERhdGVgLCBhbHdheXMgdXNlIGEgc3RyaW5nIGluIGBZWVlZLU1NLUREYCBmb3JtYXQuXG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF5LCAnWVlZWS1NTS1ERCcpKTtcblx0XHR0aGlzLnJlc2V0UmFuZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBlbWl0RHJhZ1JhbmdlKHJhbmdlKSB7XG5cdFx0dGhpcy5kcmFnUmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHR9XG5cblx0cHVibGljIG9uQ2xpY2tNb3JlKGRheTogRGF0ZSkge1xuXHRcdHRoaXMucmVzZXRSYW5nZSgpO1xuXHRcdHRoaXMuY2xpY2tNb3JlLmVtaXQoZGF5KTtcblx0fVxuXG5cdHB1YmxpYyBkcmFnU3RhcnQoZGF0ZTogRGF0ZSkge1xuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQobnVsbCk7XG5cdFx0dGhpcy5wcmVzc2VkRGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cdH1cblxuXHRwdWJsaWMgdG91Y2hTdGFydChkYXRlOiBEYXRlKSB7XG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChudWxsKTtcblx0XHR0aGlzLnByZXNzZWREYXkgPSBEYXRlSGVscGVyLmZvcm1hdERhdGUoZGF0ZSwgJ1lZWVktTU0tREQnKTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hSb3dIZWlndGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRjb25zdCB3ZWVrSGVpZ2h0JCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRcdHRpbWVyKDAsIDI1MClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLWFnZW5kYV9fdGFibGUtcm93Jyk7XG5cblx0XHRcdFx0aWYgKHJvdykge1xuXHRcdFx0XHRcdHdlZWtIZWlnaHQkLm5leHQocm93Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHdlZWtIZWlnaHQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgd2F0Y2hEcmFnT3ZlcigpIHtcblx0XHRjb25zdCB0YXJnZXQkOiBTdWJqZWN0PERheVJhbmdlSW50ZXJmYWNlPiA9IG5ldyBTdWJqZWN0KCk7XG5cblx0XHRjb25zdCBoYW5kbGVFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0ZScpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJlc3NlZERheSA9IG5ldyBEYXRlKHRoaXMucHJlc3NlZERheSk7XG5cdFx0XHRcdGNvbnN0IGRyYWdPdmVyRGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSk7XG5cblx0XHRcdFx0aWYgKHByZXNzZWREYXkgPCBkcmFnT3ZlckRhdGUpIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogdGhpcy5wcmVzc2VkRGF5LFxuXHRcdFx0XHRcdFx0dG86IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkcmFnT3ZlckRhdGUgYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXQkLm5leHQoe1xuXHRcdFx0XHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRyYWdPdmVyRGF0ZSBhcyBEYXRlLCAnWVlZWS1NTS1ERCcpLFxuXHRcdFx0XHRcdFx0dG86IHRoaXMucHJlc3NlZERheSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRoYW5kbGVFbGVtZW50KHRhcmdldCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wcmVzc2VkRGF5KSB7XG5cdFx0XHRcdGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcblx0XHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRoYW5kbGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdHJldHVybiB0YXJnZXQkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geC5mcm9tID09PSB5LmZyb20gJiYgeC50byA9PT0geS50bztcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoRHJvcCgpIHtcblx0XHRjb25zdCB0YXJnZXQkID0gbmV3IFN1YmplY3QoKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRhcmdldCQubmV4dCgpO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuXHRcdFx0aWYgKHRoaXMucHJlc3NlZERheSkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnByZXNzZWREYXkgPSBudWxsO1xuXHRcdFx0XHR0YXJnZXQkLm5leHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0YXJnZXQkO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdC8vIE5ldmVyIGVtaXQgYSBzcGVjaWZpYyBkYXkgYXMgYSBgRGF0ZWAsIGFsd2F5cyB1c2UgYSBzdHJpbmcgaW4gYFlZWVktTU0tRERgIGZvcm1hdC5cblx0XHR0aGlzLnNlbGVjdFJhbmdlLmVtaXQoe1xuXHRcdFx0ZnJvbTogRGF0ZUhlbHBlci5mb3JtYXREYXRlKHJhbmdlLmZyb20gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdHRvOiBEYXRlSGVscGVyLmZvcm1hdERhdGUocmFuZ2UudG8gYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbW9udGgtdmlldy1kb3RzJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX2RvdHNcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgZG90IG9mIGRvdHNcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZG90IH1cIiBjbGFzcz1cIm8tYWdlbmRhX19kb3RcIj48L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RG90c0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBkb3RzOiBzdHJpbmdbXTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SW50ZXJmYWNlLCBTbG90TWV0YUludGVyZmFjZSwgU2xvdERpc3BsYXlJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdCcsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWV2ZW50PVwiZXZlbnRcIj5cblx0PGRpdiBjbGFzcz1cImEtZXZlbnRcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZXZlbnQuZnVsbERheSA/IGV2ZW50LmNvbG9yIDogbnVsbCB9XCIgW25nQ2xhc3NdPVwieyAnYS1ldmVudC0tbGlnaHQnOiBldmVudC5mdWxsRGF5IH1cIj5cblx0XHQ8ZGl2ICpuZ0lmPVwiIWV2ZW50LmZ1bGxEYXlcIiBjbGFzcz1cImEtZXZlbnRfX2JhclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBldmVudC5jb2xvciB9XCI+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1ldmVudF9fY29udGVudFwiPlxuXHRcdFx0PGRpdiAqbmdJZj1cImV2ZW50Lmljb25CZWZvcmUgfHwgZXZlbnQudGl0bGVcIiBjbGFzcz1cImEtZXZlbnRfX21haW5cIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCJldmVudC5pY29uQmVmb3JlXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQmVmb3JlIH19IGEtZXZlbnRfX2ljb25cIj48L3NwYW4+PHNwYW4gKm5nSWY9XCJldmVudC50aXRsZVwiIGNsYXNzPVwiYS1ldmVudF9fdGl0bGVcIj57eyBldmVudC50aXRsZSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyIHx8ICFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19leHRyYVwiPlxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cIiFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19tZXRhXCI+e3sgZXZlbnQuc3RhcnREYXRlIHwgZGF0ZTonSEg6bW0nIH19PC9zcGFuPjxzcGFuICpuZ0lmPVwiZXZlbnQuaWNvbkFmdGVyXCIgY2xhc3M9XCJ7eyBldmVudC5pY29uQWZ0ZXIgfX0gYS1ldmVudF9faWNvblwiPjwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fdGFibGUtZXZlbnRcIiBbbmdTdHlsZV09XCJ7XG5cdGxlZnQ6IGRpc3BsYXkubGVmdCxcblx0dG9wOiBkaXNwbGF5LnRvcCxcblx0d2lkdGg6IGRpc3BsYXkud2lkdGhcbn1cIj5cblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlID8gdGVtcGxhdGUgOiBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgZXZlbnQ6IGV2ZW50IH1cIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RXZlbnRTbG90Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGV2ZW50OiBFdmVudEludGVyZmFjZTtcblx0QElucHV0KCkgcHVibGljIG1ldGE6IFNsb3RNZXRhSW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzcGxheTogU2xvdERpc3BsYXlJbnRlcmZhY2U7XG5cdEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90cycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90c1wiPlxuXHQ8YXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3Rcblx0XHQqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90c1wiXG5cdFx0W2V2ZW50XT1cInNsb3QuZXZlbnRcIlxuXHRcdFttZXRhXT1cInNsb3QubWV0YVwiXG5cdFx0W2Rpc3BsYXldPVwic2xvdC5kaXNwbGF5XCJcblx0XHRbdGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHRcdChjbGljayk9XCJlbWl0U2VsZWN0RXZlbnQoc2xvdC5ldmVudClcIlxuXHQ+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdD5cbjwvZGl2PlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFZpZXdFdmVudFNsb3RzQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIHNsb3RzOiBTbG90SW50ZXJmYWNlW10gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblxuXHRwdWJsaWMgZW1pdFNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTU9SRV9MQUJFTCB9IGZyb20gJy4uLy4uL2FnZW5kYS5jb25mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb3JlLWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tYWdlbmRhX19tb3JlXCI+XG5cdDxidXR0b24gKGNsaWNrKT1cImVtaXRDbGlja01vcmUoJGV2ZW50KVwiICpuZ0lmPVwiaGlkZGVuRXZlbnRzID4gMFwiIGNsYXNzPVwiby1hZ2VuZGFfX21vcmUtYnV0dG9uXCI+XG5cdFx0e3sgaGlkZGVuRXZlbnRzIH19IHt7IGxhYmVsIH19XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb3JlQnV0dG9uQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGhpZGRlbkV2ZW50czogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE1PUkVfTEFCRUwpIHB1YmxpYyBsYWJlbFxuXHQpIHt9XG5cblx0cHVibGljIGVtaXRDbGlja01vcmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWSUVXUyB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbmF2aWdhdGlvbicsXG5cdHRlbXBsYXRlOiBgPGg0PlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwidmlldyA9PT0gdmlld3MuREFZXCI+e3sgYWN0aXZlRGF0ZSB8IGRhdGU6J2RkL01NL3knIH19PC9uZy1jb250YWluZXI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3ID09PSB2aWV3cy5NT05USFwiPnt7IGFjdGl2ZURhdGUgfCBkYXRlOidNJyB8IG1vbnRoUGlwZSB9fSB7eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcgPT09IHZpZXdzLllFQVJcIj57eyBhY3RpdmVEYXRlIHwgZGF0ZToneScgfX08L25nLWNvbnRhaW5lcj5cbjwvaDQ+XG5cbjxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fbmF2XCI+XG5cdDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldmlvdXMgbW9udGhcIiBjbGFzcz1cIm8tYWdlbmRhX19uYXYtcHJldmlvdXMgYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwicHJldigpXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidG9kYXlcIiBjbGFzcz1cImEtYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9Ub2RheSgpXCI+XG5cdFx0VmFuZGFhZ1xuXHQ8L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dCBtb250aFwiIGNsYXNzPVwiby1hZ2VuZGFfX25hdi1uZXh0IGEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuXHRcdDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9faGVhZGVyJykgcHVibGljIGNzc0NsYXNzID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZURhdGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHZpZXc6IFZJRVdTO1xuXHRASW5wdXQoKSBwdWJsaWMgdG9kYXk6IERhdGU7XG5cdEBPdXRwdXQoKSBwdWJsaWMgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdHB1YmxpYyB2aWV3cyA9IFZJRVdTO1xuXHRwdWJsaWMgbmF2aWdhdGUkOiBTdWJqZWN0PERhdGU+ID0gbmV3IFN1YmplY3QoKTtcblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMuY2hhbmdlRGF0ZShkYXRlLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgbmV4dCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLmNoYW5nZURhdGUoZGF0ZSwgMSk7XG5cdH1cblxuXHRwdWJsaWMgZ29Ub1RvZGF5KCk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy50b2RheSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZpZXcgPT09IFZJRVdTLkRBWSkge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VEYXkoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuTU9OVEgpIHtcblx0XHRcdHJldHVybiB0aGlzLm5hdmlnYXRlJC5uZXh0KHRoaXMuY2hhbmdlTW9udGgoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuWUVBUikge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VZZWFyKGRhdGUsIG9yaWVudCkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VEYXkoZGF0ZTogRGF0ZSwgb3JpZW50OiBudW1iZXIpOiBEYXRlIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICsgb3JpZW50KTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VNb250aChkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG9yaWVudCwgMSk7XG5cdH1cblxuXHRwdWJsaWMgY2hhbmdlWWVhcihkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgKyBvcmllbnQsIDAsIDEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBBZ2VuZGFDb21wb25lbnQgfSBmcm9tICcuL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy1jYWxlbmRhci9tb250aC12aWV3LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC12aWV3LWRvdHMvbW9udGgtdmlldy1kb3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdC9tb250aC12aWV3LWV2ZW50LXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXctZXZlbnQtc2xvdHMvbW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9yZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbW9yZS1idXR0b24vbW9yZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QWdlbmRhQ29tcG9uZW50LFxuXHRNb250aFZpZXdDb21wb25lbnQsXG5cdE1vbnRoVmlld0NhbGVuZGFyQ29tcG9uZW50LFxuXHRNb250aFZpZXdEb3RzQ29tcG9uZW50LFxuXHRNb250aFZpZXdFdmVudFNsb3RDb21wb25lbnQsXG5cdE1vbnRoVmlld0V2ZW50U2xvdHNDb21wb25lbnQsXG5cdE1vcmVCdXR0b25Db21wb25lbnQsXG5cdE5hdmlnYXRpb25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIH0gZnJvbSAnLi9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ1NlcnZpY2UgfSBmcm9tICcuL3NvcnRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcblx0RGF0ZUhlbHBlclNlcnZpY2UsXG5cdE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0U29ydGluZ1NlcnZpY2UsXG5dO1xuIiwiaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcblx0b3ZlcnJpZGVzID0gPGFueT57XG5cdFx0J3N3aXBlJzogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMICB9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUGlwZXMgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHtcblx0V0VFS0RBWV9MQUJFTFMsXG5cdERFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdE1PTlRIX0xBQkVMUyxcblx0REVGQVVMVF9NT05USF9MQUJFTFMsXG5cdE1PUkVfTEFCRUwsXG5cdERFRkFVTFRfTU9SRV9MQUJFTCxcbn0gZnJvbSAnLi9hZ2VuZGEuY29uZic7XG5pbXBvcnQgeyBIYW1tZXJDb25maWcgfSBmcm9tICcuL2hhbW1lci5jb25mJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQaXBlcyxcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IE1PTlRIX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBNT1JFX0xBQkVMLCB1c2VWYWx1ZTogREVGQVVMVF9NT1JFX0xBQkVMIH0sXG5cdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmRhTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHdlZWtkYXlMYWJlbHM6IHN0cmluZ1tdLFxuXHRcdG1vbnRoTGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb3JlTGFiZWw6IHN0cmluZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFnZW5kYU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRTZXJ2aWNlcyxcblx0XHRcdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PUkVfTEFCRUwsIHVzZVZhbHVlOiBtb3JlTGFiZWwgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbIkhhbW1lci5ESVJFQ1RJT05fQUxMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUJBRWEsc0JBQXNCLEdBQUc7SUFDckMsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtDQUNWLENBQUM7QUFFRix1QkFBYSxvQkFBb0IsR0FBRztJQUNuQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDVixDQUFDO0FBRUYsdUJBQWEsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0FBRXpDLHVCQUFhLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBVyxlQUFlLENBQUMsQ0FBQztBQUM1RSx1QkFBYSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQVcsYUFBYSxDQUFDLENBQUM7QUFDeEUsdUJBQWEsVUFBVSxHQUFHLElBQUksY0FBYyxD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
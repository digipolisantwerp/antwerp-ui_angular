/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, TemplateRef, HostBinding, } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/observable/timer';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { DateHelper } from '@acpaas-ui/js-date-utils';
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
export { MonthViewCalendarComponent };
function MonthViewCalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewCalendarComponent.prototype.cssClass;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.weeks;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.slots;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.eventItemTemplate;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.selectedDay;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.range;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.rowHeight;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.selectDay;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.selectRange;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.selectEvent;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.clickMore;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.dragRange;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.pressedDay;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.currentDay;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.componentDestroyed$;
    /** @type {?} */
    MonthViewCalendarComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy1jYWxlbmRhci9tb250aC12aWV3LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUdWLFdBQVcsRUFDWCxXQUFXLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUE4RXJELG9DQUNTO1FBQUEsZUFBVSxHQUFWLFVBQVU7d0JBeEIwQyxJQUFJO3FCQU16QztZQUN2QixJQUFJLEVBQUUsSUFBSTtZQUNWLEVBQUUsRUFBRSxJQUFJO1NBQ1I7eUJBRTRCLElBQUksWUFBWSxFQUFVO3lCQUMxQixJQUFJLFlBQVksRUFBVTsyQkFDeEIsSUFBSSxZQUFZLEVBQXFCOzJCQUNyQyxJQUFJLFlBQVksRUFBa0I7eUJBQ3BDLElBQUksWUFBWSxFQUFFO3lCQUNsQixJQUFJLFlBQVksRUFBRTttQ0FLQyxJQUFJLE9BQU8sRUFBVztLQUlsRTs7OztJQUVHLDZDQUFROzs7OztRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxjQUFjLEVBQUU7YUFDbkIsSUFBSSxDQUNKLFNBQVMs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ckMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1NBQ0QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0lBR1Isb0RBQWU7Ozs7Y0FBQyxLQUF5Qjs7UUFFaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVLG1CQUFDLEtBQUssQ0FBQyxJQUFZLEdBQUUsWUFBWSxDQUFDO1lBQzdELEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxtQkFBQyxLQUFLLENBQUMsRUFBVSxHQUFFLFlBQVksQ0FBQztTQUN6RCxDQUFDLENBQUM7OztnQkFqUUosU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSwwcENBdUNWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFoRUEsVUFBVTs7OzJCQWtFVCxXQUFXLFNBQUMsNEJBQTRCO3dCQUV4QyxLQUFLO3dCQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBS0wsTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07OEJBQ04sTUFBTTs0QkFDTixNQUFNOzRCQUNOLE1BQU07O3FDQXhGUjs7U0F1RWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRFbGVtZW50UmVmLFxuXHRPbkluaXQsXG5cdE9uRGVzdHJveSxcblx0VGVtcGxhdGVSZWYsXG5cdEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHtcblx0RXZlbnRJbnRlcmZhY2UsXG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdFNsb3RJbnRlcmZhY2UsXG5cdERhdGVSYW5nZUludGVyZmFjZSxcblx0RGF5UmFuZ2VJbnRlcmZhY2UsXG59IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldy1jYWxlbmRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLXJvd1wiPlxuXHQ8ZGl2XG5cdFx0Km5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCJcblx0XHQodGFwKT1cImVtaXRTZWxlY3REYXkoZGF5LmRhdGUpXCJcblx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHQnaXMtY3VycmVudCc6IGlzVG9kYXkoZGF5LmRhdGUpLFxuXHRcdFx0J2lzLXNlbGVjdGVkJzogaXNTZWxlY3RlZChkYXkuZGF0ZSwgcmFuZ2UpLFxuXHRcdFx0J2lzLWZhZGVkJzogaXNDdXJyZW50TW9udGgoZGF5LmRhdGUsIHdlZWtzWzFdWzBdLmRhdGUpXG5cdFx0fVwiXG5cdFx0W2NsYXNzXT1cImRheS5oaWdobGlnaHRzXCJcblx0XHRjbGFzcz1cIm8tYWdlbmRhX190YWJsZS1yb3ctY2VsbFwiXG5cdFx0W2F0dHIuZGF0ZV09XCJkYXkuZGF0ZVwiXG5cdFx0KHByZXNzKT1cInRvdWNoU3RhcnQoZGF5LmRhdGUpXCJcblx0XHQ+XG5cblx0XHQ8ZGl2IChkcmFnc3RhcnQpPVwiZHJhZ1N0YXJ0KGRheS5kYXRlKVwiIGNsYXNzPVwiby1hZ2VuZGFfZHJhZy1zZWxlY3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG5cblx0XHQ8c3BhbiBjbGFzcz1cIm8tYWdlbmRhX190YWJsZS1yb3ctY2VsbC1oZWFkZXJcIj5cblx0XHRcdDxzcGFuPnt7IGRheS5kYXRlIHwgZGF0ZTonZCcgfX08L3NwYW4+XG5cdFx0PC9zcGFuPlxuXG5cdFx0PGF1aS1hZ2VuZGEtbW9yZS1idXR0b25cblx0XHRcdCpuZ0lmPVwiZGF5Lm1vcmVcIlxuXHRcdFx0W2hpZGRlbkV2ZW50c109XCJkYXkubW9yZVwiXG5cdFx0XHQoY2xpY2tNb3JlKT1cIm9uQ2xpY2tNb3JlKGRheS5kYXRlKVwiXG5cdFx0PjwvYXVpLWFnZW5kYS1tb3JlLWJ1dHRvbj5cblxuXHRcdDxhdWktbW9udGgtdmlldy1kb3RzXG5cdFx0XHQqbmdJZj1cImRheS5kb3RzXCJcblx0XHRcdFtkb3RzXT1cImRheS5kb3RzXCJcblx0XHQ+PC9hdWktbW9udGgtdmlldy1kb3RzPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG48YXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3RzXG5cdFtzbG90c109XCJzbG90c1wiXG5cdFtldmVudEl0ZW1UZW1wbGF0ZV09XCJldmVudEl0ZW1UZW1wbGF0ZVwiXG5cdChzZWxlY3RFdmVudCk9XCJvblNlbGVjdEV2ZW50KCRldmVudClcIlxuPjwvYXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3RzPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld0NhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm8tYWdlbmRhX190YWJsZS1ncmlkJykgcHVibGljIGNzc0NsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgd2Vla3M6IFdlZWtkYXlJbnRlcmZhY2VbXVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgc2xvdHM6IFNsb3RJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWREYXk6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHJhbmdlID0ge1xuXHRcdGZyb206IG51bGwsXG5cdFx0dG86IG51bGwsXG5cdH07XG5cblx0QE91dHB1dCgpIHB1YmxpYyByb3dIZWlnaHQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5UmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBkcmFnUmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHByZXNzZWREYXk6IHN0cmluZzsgLy8gZm9ybWF0OiBZWVlZLU1NLUREXG5cdHB1YmxpYyBjdXJyZW50RGF5OiBzdHJpbmc7IC8vIGZvcm1hdDogWVlZWS1NTS1ERFxuXG5cdHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jdXJyZW50RGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKG5ldyBEYXRlKCksICdZWVlZLU1NLUREJyk7XG5cblx0XHR0aGlzLndhdGNoUm93SGVpZ3RoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dIZWlnaHQuZW1pdChoZWlnaHQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLndhdGNoRHJhZ092ZXIoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyYW5nZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXREcmFnUmFuZ2UocmFuZ2UpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLndhdGNoRHJvcCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RSYW5nZSh0aGlzLnJhbmdlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGlzVG9kYXkoZGF0ZTogRGF0ZSkge1xuXHRcdGNvbnN0IGRheSA9IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXRlLCAnWVlZWS1NTS1ERCcpO1xuXG5cdFx0cmV0dXJuIGRheSA9PT0gdGhpcy5jdXJyZW50RGF5O1xuXHR9XG5cblx0cHVibGljIGlzU2VsZWN0ZWQoZGF5OiBEYXRlLCByYW5nZTogRGF0ZVJhbmdlSW50ZXJmYWNlKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY3VycmVudERheSA9IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXksICdZWVlZLU1NLUREJyk7XG5cdFx0Y29uc3QgZnJvbSA9IHJhbmdlICYmIHJhbmdlLmZyb20gPyBEYXRlSGVscGVyLmZvcm1hdERhdGUobmV3IERhdGUocmFuZ2UuZnJvbS50b1N0cmluZygpKSwgJ1lZWVktTU0tREQnKSA6IG51bGw7XG5cdFx0Y29uc3QgdG8gPSByYW5nZSAmJiByYW5nZS50byA/IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShuZXcgRGF0ZShyYW5nZS50by50b1N0cmluZygpKSwgJ1lZWVktTU0tREQnKSA6IG51bGw7XG5cblx0XHRyZXR1cm4gY3VycmVudERheSA9PT0gdGhpcy5zZWxlY3RlZERheVxuXHRcdFx0fHwgKChmcm9tICYmIG5ldyBEYXRlKGZyb20pIDw9IG5ldyBEYXRlKGN1cnJlbnREYXkpKSAmJiAodG8gJiYgbmV3IERhdGUodG8pID49IG5ldyBEYXRlKGN1cnJlbnREYXkpKSk7XG5cdH1cblxuXHRwdWJsaWMgcmVzZXRSYW5nZSgpIHtcblx0XHR0aGlzLmVtaXREcmFnUmFuZ2Uoe1xuXHRcdFx0ZnJvbTogbnVsbCxcblx0XHRcdHRvOiBudWxsLFxuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIGlzQ3VycmVudE1vbnRoKGRheTogc3RyaW5nLCBkYXRlOiBEYXRlKSB7XG5cdFx0Y29uc3QgZGF5RGF0ZSA9IG5ldyBEYXRlKGRheSk7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBEYXRlKGRhdGUpO1xuXG5cdFx0cmV0dXJuIGRheURhdGUuZ2V0TW9udGgoKSAhPT0gY3VycmVudC5nZXRNb250aCgpO1xuXHR9XG5cblx0cHVibGljIGVtaXRTZWxlY3REYXkoZGF5OiBEYXRlKTogdm9pZCB7XG5cdFx0Ly8gTmV2ZXIgZW1pdCBhIHNwZWNpZmljIGRheSBhcyBhIGBEYXRlYCwgYWx3YXlzIHVzZSBhIHN0cmluZyBpbiBgWVlZWS1NTS1ERGAgZm9ybWF0LlxuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQoRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRheSwgJ1lZWVktTU0tREQnKSk7XG5cdFx0dGhpcy5yZXNldFJhbmdlKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdERyYWdSYW5nZShyYW5nZSkge1xuXHRcdHRoaXMuZHJhZ1JhbmdlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RXZlbnQoZXZlbnQ6IEV2ZW50SW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RFdmVudC5lbWl0KGV2ZW50KTtcblx0XHR0aGlzLnJlc2V0UmFuZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBvbkNsaWNrTW9yZShkYXk6IERhdGUpIHtcblx0XHR0aGlzLnJlc2V0UmFuZ2UoKTtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KGRheSk7XG5cdH1cblxuXHRwdWJsaWMgZHJhZ1N0YXJ0KGRhdGU6IERhdGUpIHtcblx0XHR0aGlzLnNlbGVjdERheS5lbWl0KG51bGwpO1xuXHRcdHRoaXMucHJlc3NlZERheSA9IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXRlLCAnWVlZWS1NTS1ERCcpO1xuXHR9XG5cblx0cHVibGljIHRvdWNoU3RhcnQoZGF0ZTogRGF0ZSkge1xuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQobnVsbCk7XG5cdFx0dGhpcy5wcmVzc2VkRGF5ID0gRGF0ZUhlbHBlci5mb3JtYXREYXRlKGRhdGUsICdZWVlZLU1NLUREJyk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoUm93SGVpZ3RoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0Y29uc3Qgd2Vla0hlaWdodCQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0XHR0aW1lcigwLCAyNTApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCByb3cgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuby1hZ2VuZGFfX3RhYmxlLXJvdycpO1xuXG5cdFx0XHRcdGlmIChyb3cpIHtcblx0XHRcdFx0XHR3ZWVrSGVpZ2h0JC5uZXh0KHJvdy5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB3ZWVrSGVpZ2h0JFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoRHJhZ092ZXIoKSB7XG5cdFx0Y29uc3QgdGFyZ2V0JDogU3ViamVjdDxEYXlSYW5nZUludGVyZmFjZT4gPSBuZXcgU3ViamVjdCgpO1xuXG5cdFx0Y29uc3QgaGFuZGxlRWxlbWVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSkge1xuXG5cdFx0XHRcdGNvbnN0IHByZXNzZWREYXkgPSBuZXcgRGF0ZSh0aGlzLnByZXNzZWREYXkpO1xuXHRcdFx0XHRjb25zdCBkcmFnT3ZlckRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRlJykpO1xuXG5cdFx0XHRcdGlmIChwcmVzc2VkRGF5IDwgZHJhZ092ZXJEYXRlKSB7XG5cdFx0XHRcdFx0dGFyZ2V0JC5uZXh0KHtcblx0XHRcdFx0XHRcdGZyb206IHRoaXMucHJlc3NlZERheSxcblx0XHRcdFx0XHRcdHRvOiBEYXRlSGVscGVyLmZvcm1hdERhdGUoZHJhZ092ZXJEYXRlIGFzIERhdGUsICdZWVlZLU1NLUREJyksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0JC5uZXh0KHtcblx0XHRcdFx0XHRcdGZyb206IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkcmFnT3ZlckRhdGUgYXMgRGF0ZSwgJ1lZWVktTU0tREQnKSxcblx0XHRcdFx0XHRcdHRvOiB0aGlzLnByZXNzZWREYXksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0aGFuZGxlRWxlbWVudCh0YXJnZXQpO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMucHJlc3NlZERheSkge1xuXHRcdFx0XHRjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0aGFuZGxlRWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cblx0XHRyZXR1cm4gdGFyZ2V0JFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHguZnJvbSA9PT0geS5mcm9tICYmIHgudG8gPT09IHkudG87XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSB3YXRjaERyb3AoKSB7XG5cdFx0Y29uc3QgdGFyZ2V0JCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0YXJnZXQkLm5leHQoKTtcblx0XHR9LCBmYWxzZSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcblx0XHRcdGlmICh0aGlzLnByZXNzZWREYXkpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5wcmVzc2VkRGF5ID0gbnVsbDtcblx0XHRcdFx0dGFyZ2V0JC5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGFyZ2V0JDtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdFJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpIHtcblx0XHQvLyBOZXZlciBlbWl0IGEgc3BlY2lmaWMgZGF5IGFzIGEgYERhdGVgLCBhbHdheXMgdXNlIGEgc3RyaW5nIGluIGBZWVlZLU1NLUREYCBmb3JtYXQuXG5cdFx0dGhpcy5zZWxlY3RSYW5nZS5lbWl0KHtcblx0XHRcdGZyb206IERhdGVIZWxwZXIuZm9ybWF0RGF0ZShyYW5nZS5mcm9tIGFzIERhdGUsICdZWVlZLU1NLUREJyksXG5cdFx0XHR0bzogRGF0ZUhlbHBlci5mb3JtYXREYXRlKHJhbmdlLnRvIGFzIERhdGUsICdZWVlZLU1NLUREJyksXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
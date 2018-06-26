/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef, HostBinding, } from '@angular/core';
import { DAYS, } from '../../types/agenda.types';
import { MonthViewSlotsService } from '../../services/month-view-slots.service';
import { DateHelperService } from '../../services/date-helper.service';
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
export { MonthViewComponent };
function MonthViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewComponent.prototype.cssClass;
    /** @type {?} */
    MonthViewComponent.prototype.activeDate;
    /** @type {?} */
    MonthViewComponent.prototype.startDayOfWeek;
    /** @type {?} */
    MonthViewComponent.prototype.highlights;
    /** @type {?} */
    MonthViewComponent.prototype.weekdays;
    /** @type {?} */
    MonthViewComponent.prototype.events;
    /** @type {?} */
    MonthViewComponent.prototype.eventItemTemplate;
    /** @type {?} */
    MonthViewComponent.prototype.displayRange;
    /** @type {?} */
    MonthViewComponent.prototype.selectRange;
    /** @type {?} */
    MonthViewComponent.prototype.selectDay;
    /** @type {?} */
    MonthViewComponent.prototype.selectEvent;
    /** @type {?} */
    MonthViewComponent.prototype.clickMore;
    /** @type {?} */
    MonthViewComponent.prototype.slots;
    /** @type {?} */
    MonthViewComponent.prototype.weeks;
    /** @type {?} */
    MonthViewComponent.prototype.selectedDay;
    /** @type {?} */
    MonthViewComponent.prototype.selectedRange;
    /** @type {?} */
    MonthViewComponent.prototype.weekHeight;
    /** @type {?} */
    MonthViewComponent.prototype.eventHeight;
    /** @type {?} */
    MonthViewComponent.prototype.heightOffset;
    /** @type {?} */
    MonthViewComponent.prototype.eventsByDay;
    /** @type {?} */
    MonthViewComponent.prototype.availableSlots;
    /** @type {?} */
    MonthViewComponent.prototype.monthViewSlotsService;
    /** @type {?} */
    MonthViewComponent.prototype.dateHelperService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLFdBQVcsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR04sSUFBSSxHQUlKLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0lBdUR0RSw0QkFDUyx1QkFDQTtRQURBLDBCQUFxQixHQUFyQixxQkFBcUI7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQjt3QkFoQzhCLElBQUk7OEJBR3JCLElBQUksQ0FBQyxNQUFNO3dCQUdmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUl4QixJQUFJLFlBQVksRUFBc0I7MkJBQ3ZDLElBQUksWUFBWSxFQUFzQjt5QkFDeEMsSUFBSSxZQUFZLEVBQVE7MkJBQ3RCLElBQUksWUFBWSxFQUFrQjt5QkFDcEMsSUFBSSxZQUFZLEVBQUU7cUJBR1YsRUFBRTs2QkFFaEI7WUFDdEIsSUFBSSxFQUFFLElBQUk7WUFDVixFQUFFLEVBQUUsSUFBSTtTQUNSOzJCQUdvQixFQUFFOzRCQUNELEVBQUU7OEJBRUEsQ0FBQztLQUtyQjs7Ozs7SUFFRyx3Q0FBVzs7OztjQUFDLE9BQU87UUFDekIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFD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SyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTVFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDdEIsSUFBSSxNQUFBO29CQUNKLEVBQUUsSUFBQTtpQkFDRixDQUFDLENBQUM7YUFDSDtTQUNEOzs7Z0JBNUhGLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscW5CQWlCVjtvQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBeEJRLHFCQUFxQjtnQkFDckIsaUJBQWlCOzs7MkJBeUJ4QixXQUFXLFNBQUMsdUJBQXVCOzZCQUVuQyxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFFTCxLQUFLO3lCQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkFFTCxNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNOzRCQUNOLE1BQU07OzZCQTVEUjs7U0E2Q2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRUZW1wbGF0ZVJlZixcblx0SG9zdEJpbmRpbmcsXG5cdE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdEV2ZW50SW50ZXJmYWNlLFxuXHRXZWVrZGF5SW50ZXJmYWNlLFxuXHREQVlTLFxuXHRIaWdoTGlnaHRJbnRlcmZhY2UsXG5cdERhdGVSYW5nZUludGVyZmFjZSxcblx0U2xvdEludGVyZmFjZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuaW1wb3J0IHsgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9udGgtdmlldy1zbG90cy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tYWdlbmRhX190YWJsZS1oZWFkXCI+XG5cdDxkaXYgKm5nRm9yPVwibGV0IHdlZWtkYXkgb2Ygd2Vla2RheXNcIiBjbGFzcz1cIm8tYWdlbmRhX190YWJsZS1oZWFkLWNlbGxcIj57eyB3ZWVrZGF5IHwgd2Vla2RheVBpcGUgfX08L2Rpdj5cbjwvZGl2PlxuXG48YXVpLWFnZW5kYS1tb250aC12aWV3LWNhbGVuZGFyXG5cdFt3ZWVrc109XCJ3ZWVrc1wiXG5cdFtzbG90c109XCJzbG90c1wiXG5cdFtzZWxlY3RlZERheV09XCJzZWxlY3RlZERheVwiXG5cdFtyYW5nZV09XCJzZWxlY3RlZFJhbmdlXCJcblx0W2V2ZW50SXRlbVRlbXBsYXRlXT1cImV2ZW50SXRlbVRlbXBsYXRlXCJcblx0KHJvd0hlaWdodCk9XCJvbkNoYW5nZVJvd0hlaWdodCgkZXZlbnQpXCJcblx0KHNlbGVjdEV2ZW50KT1cIm9uU2VsZWN0RXZlbnQoJGV2ZW50KVwiXG5cdChzZWxlY3REYXkpPVwib25TZWxlY3REYXkoJGV2ZW50KVwiXG5cdChzZWxlY3RSYW5nZSk9XCJvblNlbGVjdFJhbmdlKCRldmVudClcIlxuXHQoY2xpY2tNb3JlKT1cIm9uQ2xpY2tNb3JlKCRldmVudClcIlxuXHQoZHJhZ1JhbmdlKT1cIm9uRHJhZ1JhbmdlKCRldmVudClcIlxuPjwvYXVpLWFnZW5kYS1tb250aC12aWV3LWNhbGVuZGFyPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBIb3N0QmluZGluZygnY2xhc3Muby1hZ2VuZGFfX3RhYmxlJykgcHVibGljIGNzc0NsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcHVibGljIHN0YXJ0RGF5T2ZXZWVrOiBEQVlTID0gREFZUy5NT05EQVk7IC8vIFN0YXJ0IG9mIHRoZSB3ZWVrICgwID0gc3VuZGF5LCAxID0gbW9uZGF5LCAuLi4pXG5cdEBJbnB1dCgpIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdoTGlnaHRJbnRlcmZhY2U7XG5cblx0QElucHV0KCkgcHVibGljIHdlZWtkYXlzOiBEQVlTW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgMF07XG5cdEBJbnB1dCgpIHB1YmxpYyBldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cdEBJbnB1dCgpIHB1YmxpYyBldmVudEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAT3V0cHV0KCkgcHVibGljIGRpc3BsYXlSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVJhbmdlSW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja01vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNsb3RzOiBTbG90SW50ZXJmYWNlW107XG5cdHB1YmxpYyB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10gPSBbXTtcblx0cHVibGljIHNlbGVjdGVkRGF5OiBEYXRlO1xuXHRwdWJsaWMgc2VsZWN0ZWRSYW5nZSA9IHtcblx0XHRmcm9tOiBudWxsLFxuXHRcdHRvOiBudWxsLFxuXHR9O1xuXG5cdHB1YmxpYyB3ZWVrSGVpZ2h0OiBudW1iZXI7XG5cdHB1YmxpYyBldmVudEhlaWdodCA9IDI4O1xuXHRwdWJsaWMgaGVpZ2h0T2Zmc2V0ID0gMjg7XG5cdHB1YmxpYyBldmVudHNCeURheTogYW55O1xuXHRwdWJsaWMgYXZhaWxhYmxlU2xvdHMgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbW9udGhWaWV3U2xvdHNTZXJ2aWNlOiBNb250aFZpZXdTbG90c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBkYXRlSGVscGVyU2VydmljZTogRGF0ZUhlbHBlclNlcnZpY2Vcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuYWN0aXZlRGF0ZSB8fCBjaGFuZ2VzLnN0YXJ0RGF5T2ZXZWVrKSB7XG5cdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxjdWxhdGVNb250aFdlZWtzKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5zdGFydERheU9mV2VlaywgdGhpcy5oaWdobGlnaHRzKTtcblx0XHRcdHRoaXMuZW1pdERpc3BsYXlSYW5nZSh0aGlzLndlZWtzKTtcblx0XHRcdHRoaXMuc2V0U2xvdHNBbmRXZWVrcygpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdERheShkYXk6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRGF5ID0gZGF5O1xuXHRcdGlmIChkYXkpIHtcblx0XHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQoZGF5KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHR9XG5cblx0cHVibGljIG9uQ2hhbmdlUm93SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5hdmFpbGFibGVTbG90cyA9IE1hdGguZmxvb3IoKGhlaWdodCAtIHRoaXMuaGVpZ2h0T2Zmc2V0IC0gMjApIC8gdGhpcy5ldmVudEhlaWdodCk7XG5cdFx0dGhpcy53ZWVrSGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuc2V0U2xvdHNBbmRXZWVrcygpO1xuXHR9XG5cblx0cHVibGljIG9uQ2xpY2tNb3JlKGRheTogRGF0ZSkge1xuXHRcdHRoaXMuY2xpY2tNb3JlLmVtaXQoZGF5KTtcblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdFJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpIHtcblx0XHR0aGlzLnNlbGVjdFJhbmdlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHVibGljIG9uRHJhZ1JhbmdlKHJhbmdlKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFJhbmdlID0gcmFuZ2U7XG5cdH1cblxuXHRwcml2YXRlIHNldFNsb3RzQW5kV2Vla3MoKSB7XG5cdFx0aWYgKHRoaXMuYXZhaWxhYmxlU2xvdHMgPj0gMCkge1xuXHRcdFx0Y29uc3QgZXZlbnRNYXAgPSB0aGlzLm1vbnRoVmlld1Nsb3RzU2VydmljZS5nZW5lcmF0ZUV2ZW50TWFwKFxuXHRcdFx0XHR0aGlzLmV2ZW50cyxcblx0XHRcdFx0dGhpcy53ZWVrcyxcblx0XHRcdFx0dGhpcy5hdmFpbGFibGVTbG90c1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5zbG90cyA9IGV2ZW50TWFwLmdldFNsb3RzKHRoaXMuZXZlbnRIZWlnaHQsIHRoaXMud2Vla0hlaWdodCwgdGhpcy5oZWlnaHRPZmZzZXQpO1xuXHRcdFx0dGhpcy53ZWVrcyA9IGV2ZW50TWFwLmdldEV2ZW50c01hcCh0aGlzLmF2YWlsYWJsZVNsb3RzKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZU1vbnRoV2Vla3MoZGF0ZTogRGF0ZSwgc3RhcnRPZldlZWs6IERBWVMsIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZSk6IFdlZWtkYXlJbnRlcmZhY2VbXVtdIHtcblx0XHRjb25zdCBkYXlzID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5nZXREYXlzRm9yTW9udGgoZGF0ZSwgc3RhcnRPZldlZWssIGhpZ2hsaWdodHMpO1xuXHRcdHJldHVybiB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmdldFdlZWtzRm9yTW9udGgoZGF5cyk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXREaXNwbGF5UmFuZ2Uod2Vla3M6IFdlZWtkYXlJbnRlcmZhY2VbXVtdKSB7XG5cdFx0aWYgKHdlZWtzLmxlbmd0aCA+IDAgJiYgd2Vla3NbMF0ubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgZnJvbSA9IHdlZWtzWzBdWzBdLmRhdGU7XG5cdFx0XHRjb25zdCB0byA9IHdlZWtzW3dlZWtzLmxlbmd0aCAtIDFdW3dlZWtzW3dlZWtzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIDFdLmRhdGU7XG5cblx0XHRcdGlmIChmcm9tICYmIHRvKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJhbmdlLmVtaXQoe1xuXHRcdFx0XHRcdGZyb20sXG5cdFx0XHRcdFx0dG8sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19
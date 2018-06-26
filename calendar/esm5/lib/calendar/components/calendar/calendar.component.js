/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS } from '../../calendar.conf';
import { CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA } from '../../types/calendar.types';
import { CalendarService } from '../../services/calendar.service';
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
export { CalendarComponent };
function CalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarComponent.prototype.range;
    /** @type {?} */
    CalendarComponent.prototype.weekdayLabels;
    /** @type {?} */
    CalendarComponent.prototype.monthLabels;
    /** @type {?} */
    CalendarComponent.prototype.selectDate;
    /** @type {?} */
    CalendarComponent.prototype.CALENDAR_VIEW_MONTH;
    /** @type {?} */
    CalendarComponent.prototype.CALENDAR_VIEW_YEAR;
    /** @type {?} */
    CalendarComponent.prototype.CALENDAR_VIEW_DECENNIA;
    /** @type {?} */
    CalendarComponent.prototype.activeDate;
    /** @type {?} */
    CalendarComponent.prototype.activeView;
    /** @type {?} */
    CalendarComponent.prototype.headerLabel;
    /** @type {?} */
    CalendarComponent.prototype.moduleMonthLabels;
    /** @type {?} */
    CalendarComponent.prototype.moduleWeekdayLabels;
    /** @type {?} */
    CalendarComponent.prototype.calendarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUl2QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFakUsT0FBTyxFQUNOLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsdUJBQXVCLEVBQ3ZCLCtCQUErQixFQUMvQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFHTixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUF3RGpFLDJCQUN1QyxpQkFBaUQsRUFDL0MsbUJBQXFELEVBQ3JGOzZGQUYrRTttR0FDTTtRQUR2RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWdDO1FBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBa0M7UUFDckYsb0JBQWUsR0FBZixlQUFlOzBCQVpELElBQUksWUFBWSxFQUFFO21DQUVaLG1CQUFtQjtrQ0FDcEIsa0JBQWtCO3NDQUNkLHNCQUFzQjswQkFFMUIsbUJBQW1COzJCQUMxQixFQUFFO0tBTW5COzs7O0lBRUosb0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzlE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LEVBQUUsc3lDQW1DVjtvQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0RBZ0JFLE1BQU0sU0FBQyxxQkFBcUI7Z0RBQzVCLE1BQU0sU0FBQyx1QkFBdUI7Z0JBMUR4QixlQUFlOzs7K0JBMkN0QixLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLE1BQU07OzRCQTFFUjs7U0FxRWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2UsIERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMU1xufSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7XG5cdFdlZWtkYXlMYWJlbHNDb25maWcsXG5cdE1vbnRoTGFiZWxzQ29uZmlnLFxuXHRDQUxFTkRBUl9WSUVXX01PTlRILFxuXHRDQUxFTkRBUl9WSUVXX1lFQVIsXG5cdENBTEVOREFSX1ZJRVdfREVDRU5OSUFcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fbmF2XCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b3JpZ2UgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoLTEpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibS1kYXRlcGlja2VyX190aXRsZSBhLWJ1dHRvblwiIChjbGljayk9XCJzd2l0Y2hWaWV3KClcIj5cbiAgICAgICAge3sgaGVhZGVyTGFiZWwgfCB0aXRsZWNhc2UgfX1cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ2b2xnZW5kZSBtYWFuZFwiIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwidXBkYXRlQWN0aXZlRGF0ZSgxKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxhdWktY2FsZW5kYXItbW9udGhcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEhcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbcmFuZ2VdPVwicmFuZ2VcIlxuICAgIFt3ZWVrZGF5TGFiZWxzXT1cIndlZWtkYXlMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLW1vbnRoPlxuPGF1aS1jYWxlbmRhci15ZWFyXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX1lFQVJcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbbW9udGhMYWJlbHNdPVwibW9udGhMYWJlbHNcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLXllYXI+XG48YXVpLWNhbGVuZGFyLWRlY2VubmlhXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXItZGVjZW5uaWE+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcmFuZ2U6IERhdGVSYW5nZTtcblx0QElucHV0KCkgd2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZztcblx0QElucHV0KCkgbW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19NT05USCA9IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX1lFQVIgPSBDQUxFTkRBUl9WSUVXX1lFQVI7XG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBID0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQTtcblx0cHVibGljIGFjdGl2ZURhdGU6IERhdGU7XG5cdHB1YmxpYyBhY3RpdmVWaWV3OiBzdHJpbmcgPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgaGVhZGVyTGFiZWwgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHVibGljIG1vZHVsZU1vbnRoTGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdFx0QEluamVjdChDQUxFTkRBUl9XRUVLREFZX0xBQkVMUykgcHVibGljIG1vZHVsZVdlZWtkYXlMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRcdHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2Vcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMud2Vla2RheUxhYmVscyA9IHRoaXMud2Vla2RheUxhYmVscyB8fCB0aGlzLm1vZHVsZVdlZWtkYXlMYWJlbHM7XG5cdFx0dGhpcy5tb250aExhYmVscyA9IHRoaXMubW9udGhMYWJlbHMgfHwgdGhpcy5tb2R1bGVNb250aExhYmVscztcblx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDbG9zZXN0RGF0ZUZvclJhbmdlKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5yYW5nZSk7XG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGNoYW5nZXMuc2VsZWN0ZWREYXRlICYmIGNoYW5nZXMuc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZSA/IGNoYW5nZXMuc2VsZWN0ZWREYXRlIDogbnVsbDtcblxuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLm1vbnRoTGFiZWxzICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0c2VsZWN0ZWREYXRlICYmXG5cdFx0XHQhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKHNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUsIHNlbGVjdGVkRGF0ZS5wcmV2aW91c1ZhbHVlKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQWN0aXZlRGF0ZShmYWN0b3I6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZSA/IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRNb250aChhY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGZhY3Rvcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArICgxMiAqIGZhY3RvcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZURhdGUgPSBhY3RpdmVEYXRlO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcoZmFjdG9yOiBudW1iZXIgPSAxKTogdm9pZCB7XG5cdFx0Y29uc3Qgdmlld3MgPSBbQ0FMRU5EQVJfVklFV19NT05USCwgQ0FMRU5EQVJfVklFV19ZRUFSLCBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXTtcblxuXHRcdGNvbnN0IGN1cnJWaWV3ID0gdmlld3MuaW5kZXhPZih0aGlzLmFjdGl2ZVZpZXcpO1xuXHRcdGxldCBuZXh0VmlldyA9IChjdXJyVmlldyArIGZhY3RvcikgPj0gdmlld3MubGVuZ3RoID8gMCA6IGN1cnJWaWV3ICsgZmFjdG9yO1xuXHRcdG5leHRWaWV3ID0gbmV4dFZpZXcgPCAwID8gdmlld3MubGVuZ3RoIC0gMSA6IG5leHRWaWV3O1xuXG5cdFx0dGhpcy5hY3RpdmVWaWV3ID0gdmlld3NbbmV4dFZpZXddO1xuXG5cdFx0Ly8gcmVzZXQgYWN0aXZlRGF0ZSB3aGVuIHJldHVybmluZyB0byBtb250aCB2aWV3IHdpdGhvdXQgbW9kZWwgdXBkYXRlXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlICYmIG5leHRWaWV3ID09PSAwICYmIGZhY3RvciA9PT0gMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0dXBkYXRlSGVhZGVyTGFiZWwoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmFjdGl2ZVZpZXcpIHtcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19NT05USDpcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IHRoaXMubW9udGhMYWJlbHNbdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCldICsgJyAnICsgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX1lFQVI6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBTdHJpbmcodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0Y29uc3Qgc3RhcnRZZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSBgJHtzdGFydFllYXJ9IC0gJHtzdGFydFllYXIgKyAxMX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwaWNrRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcGxldGUgPSB0aGlzLmFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdCh7XG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0Y29tcGxldGU6IGNvbXBsZXRlLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFjb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5zd2l0Y2hWaWV3KC0xKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
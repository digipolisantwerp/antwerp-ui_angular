/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS } from '../../calendar.conf';
import { CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA } from '../../types/calendar.types';
import { CalendarService } from '../../services/calendar.service';
export class CalendarComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUl2QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFakUsT0FBTyxFQUNOLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsdUJBQXVCLEVBQ3ZCLCtCQUErQixFQUMvQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFHTixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQTBDbEUsTUFBTTs7Ozs7O0lBY0wsWUFDdUMsb0JBQW9CLDZCQUE2QixFQUMvQyxzQkFBc0IsK0JBQStCLEVBQ3JGO1FBRjhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7UUFDL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQztRQUNyRixvQkFBZSxHQUFmLGVBQWU7MEJBWkQsSUFBSSxZQUFZLEVBQUU7bUNBRVosbUJBQW1CO2tDQUNwQixrQkFBa0I7c0NBQ2Qsc0JBQXNCOzBCQUUxQixtQkFBbUI7MkJBQzFCLEVBQUU7S0FNbkI7Ozs7SUFFSixRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFD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Q0FBQyxNQUFNO2FBQy9DOzs7OzRDQWdCRSxNQUFNLFNBQUMscUJBQXFCOzRDQUM1QixNQUFNLFNBQUMsdUJBQXVCO1lBMUR4QixlQUFlOzs7MkJBMkN0QixLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVSYW5nZSwgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7XG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTXG59IGZyb20gJy4uLy4uL2NhbGVuZGFyLmNvbmYnO1xuaW1wb3J0IHtcblx0V2Vla2RheUxhYmVsc0NvbmZpZyxcblx0TW9udGhMYWJlbHNDb25maWcsXG5cdENBTEVOREFSX1ZJRVdfTU9OVEgsXG5cdENBTEVOREFSX1ZJRVdfWUVBUixcblx0Q0FMRU5EQVJfVklFV19ERUNFTk5JQVxufSBmcm9tICcuLi8uLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1kYXRlcGlja2VyX19uYXZcIj5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInZvcmlnZSBtYWFuZFwiIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwidXBkYXRlQWN0aXZlRGF0ZSgtMSlcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX3RpdGxlIGEtYnV0dG9uXCIgKGNsaWNrKT1cInN3aXRjaFZpZXcoKVwiPlxuICAgICAgICB7eyBoZWFkZXJMYWJlbCB8IHRpdGxlY2FzZSB9fVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInZvbGdlbmRlIG1hYW5kXCIgY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIChjbGljayk9XCJ1cGRhdGVBY3RpdmVEYXRlKDEpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuPGF1aS1jYWxlbmRhci1tb250aFxuICAgICpuZ0lmPVwiYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19NT05USFwiXG4gICAgW3NlbGVjdGVkRGF0ZV09XCJzZWxlY3RlZERhdGVcIlxuICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgIFtyYW5nZV09XCJyYW5nZVwiXG4gICAgW3dlZWtkYXlMYWJlbHNdPVwid2Vla2RheUxhYmVsc1wiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXItbW9udGg+XG48YXVpLWNhbGVuZGFyLXllYXJcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfWUVBUlwiXG4gICAgW3NlbGVjdGVkRGF0ZV09XCJzZWxlY3RlZERhdGVcIlxuICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgIFttb250aExhYmVsc109XCJtb250aExhYmVsc1wiXG4gICAgKHNlbGVjdERhdGUpPVwicGlja0RhdGUoJGV2ZW50KVwiXG4+PC9hdWktY2FsZW5kYXIteWVhcj5cbjxhdWktY2FsZW5kYXItZGVjZW5uaWFcbiAgICAqbmdJZj1cImFjdGl2ZVZpZXcgPT09IENBTEVOREFSX1ZJRVdfREVDRU5OSUFcIlxuICAgIFtzZWxlY3RlZERhdGVdPVwic2VsZWN0ZWREYXRlXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAoc2VsZWN0RGF0ZSk9XCJwaWNrRGF0ZSgkZXZlbnQpXCJcbj48L2F1aS1jYWxlbmRhci1kZWNlbm5pYT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSB3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWc7XG5cdEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBDQUxFTkRBUl9WSUVXX01PTlRIID0gQ0FMRU5EQVJfVklFV19NT05USDtcblx0cHVibGljIENBTEVOREFSX1ZJRVdfWUVBUiA9IENBTEVOREFSX1ZJRVdfWUVBUjtcblx0cHVibGljIENBTEVOREFSX1ZJRVdfREVDRU5OSUEgPSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBO1xuXHRwdWJsaWMgYWN0aXZlRGF0ZTogRGF0ZTtcblx0cHVibGljIGFjdGl2ZVZpZXc6IHN0cmluZyA9IENBTEVOREFSX1ZJRVdfTU9OVEg7XG5cdHB1YmxpYyBoZWFkZXJMYWJlbCA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfTU9OVEhfTEFCRUxTKSBwdWJsaWMgbW9kdWxlTW9udGhMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyxcblx0XHRASW5qZWN0KENBTEVOREFSX1dFRUtEQVlfTEFCRUxTKSBwdWJsaWMgbW9kdWxlV2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZVxuXHQpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy53ZWVrZGF5TGFiZWxzID0gdGhpcy53ZWVrZGF5TGFiZWxzIHx8IHRoaXMubW9kdWxlV2Vla2RheUxhYmVscztcblx0XHR0aGlzLm1vbnRoTGFiZWxzID0gdGhpcy5tb250aExhYmVscyB8fCB0aGlzLm1vZHVsZU1vbnRoTGFiZWxzO1xuXHRcdHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENsb3Nlc3REYXRlRm9yUmFuZ2UodGhpcy5hY3RpdmVEYXRlLCB0aGlzLnJhbmdlKTtcblx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRlID0gY2hhbmdlcy5zZWxlY3RlZERhdGUgJiYgY2hhbmdlcy5zZWxlY3RlZERhdGUuY3VycmVudFZhbHVlID8gY2hhbmdlcy5zZWxlY3RlZERhdGUgOiBudWxsO1xuXG5cdFx0aWYgKFxuXHRcdFx0dHlwZW9mIHRoaXMubW9udGhMYWJlbHMgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0XHRzZWxlY3RlZERhdGUgJiZcblx0XHRcdCFEYXRlSGVscGVyLmRhdGVzQXJlRXF1YWwoc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZSwgc2VsZWN0ZWREYXRlLnByZXZpb3VzVmFsdWUpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcblx0XHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVBY3RpdmVEYXRlKGZhY3RvcjogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdGlmIChmYWN0b3IgPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhY3RpdmVEYXRlID0gdGhpcy5hY3RpdmVEYXRlID8gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKSA6IG5ldyBEYXRlKCk7XG5cblx0XHRzd2l0Y2ggKHRoaXMuYWN0aXZlVmlldykge1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX01PTlRIOlxuXHRcdFx0XHRhY3RpdmVEYXRlLnNldE1vbnRoKGFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGZhY3Rvcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX1lFQVI6XG5cdFx0XHRcdGFjdGl2ZURhdGUuc2V0RnVsbFllYXIoYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZmFjdG9yKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfREVDRU5OSUE6XG5cdFx0XHRcdGFjdGl2ZURhdGUuc2V0RnVsbFllYXIoYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgKDEyICogZmFjdG9yKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlRGF0ZSA9IGFjdGl2ZURhdGU7XG5cdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHR9XG5cblx0c3dpdGNoVmlldyhmYWN0b3I6IG51bWJlciA9IDEpOiB2b2lkIHtcblx0XHRjb25zdCB2aWV3cyA9IFtDQUxFTkRBUl9WSUVXX01PTlRILCBDQUxFTkRBUl9WSUVXX1lFQVIsIENBTEVOREFSX1ZJRVdfREVDRU5OSUFdO1xuXG5cdFx0Y29uc3QgY3VyclZpZXcgPSB2aWV3cy5pbmRleE9mKHRoaXMuYWN0aXZlVmlldyk7XG5cdFx0bGV0IG5leHRWaWV3ID0gKGN1cnJWaWV3ICsgZmFjdG9yKSA+PSB2aWV3cy5sZW5ndGggPyAwIDogY3VyclZpZXcgKyBmYWN0b3I7XG5cdFx0bmV4dFZpZXcgPSBuZXh0VmlldyA8IDAgPyB2aWV3cy5sZW5ndGggLSAxIDogbmV4dFZpZXc7XG5cblx0XHR0aGlzLmFjdGl2ZVZpZXcgPSB2aWV3c1tuZXh0Vmlld107XG5cblx0XHQvLyByZXNldCBhY3RpdmVEYXRlIHdoZW4gcmV0dXJuaW5nIHRvIG1vbnRoIHZpZXcgd2l0aG91dCBtb2RlbCB1cGRhdGVcblx0XHRpZiAodGhpcy5zZWxlY3RlZERhdGUgJiYgbmV4dFZpZXcgPT09IDAgJiYgZmFjdG9yID09PSAxKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcblx0XHR9XG5cblx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdH1cblxuXHR1cGRhdGVIZWFkZXJMYWJlbCgpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHRoaXMuYWN0aXZlVmlldykge1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX01PTlRIOlxuXHRcdFx0XHR0aGlzLmhlYWRlckxhYmVsID0gdGhpcy5tb250aExhYmVsc1t0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKV0gKyAnICcgKyB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfWUVBUjpcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IFN0cmluZyh0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBDQUxFTkRBUl9WSUVXX0RFQ0VOTklBOlxuXHRcdFx0XHRjb25zdCBzdGFydFllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dGhpcy5oZWFkZXJMYWJlbCA9IGAke3N0YXJ0WWVhcn0gLSAke3N0YXJ0WWVhciArIDExfWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHRjb25zdCBjb21wbGV0ZSA9IHRoaXMuYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19NT05USDtcblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHtcblx0XHRcdGRhdGU6IGRhdGUsXG5cdFx0XHRjb21wbGV0ZTogY29tcGxldGUsXG5cdFx0fSk7XG5cblx0XHRpZiAoIWNvbXBsZXRlKSB7XG5cdFx0XHR0aGlzLnN3aXRjaFZpZXcoLTEpO1xuXHRcdH1cblx0fVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef, HostBinding, } from '@angular/core';
import { DAYS, } from '../../types/agenda.types';
import { MonthViewSlotsService } from '../../services/month-view-slots.service';
import { DateHelperService } from '../../services/date-helper.service';
export class MonthViewComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLFdBQVcsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR04sSUFBSSxHQUlKLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUF3QnZFLE1BQU07Ozs7O0lBK0JMLFlBQ1MsdUJBQ0E7UUFEQSwwQkFBcUIsR0FBckIscUJBQXFCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUI7d0JBaEM4QixJQUFJOzhCQUdyQixJQUFJLENBQUMsTUFBTTt3QkFHZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFJeEIsSUFBSSxZQUFZLEVBQXNCOzJCQUN2QyxJQUFJLFlBQVksRUFBc0I7eUJBQ3hDLElBQUksWUFBWSxFQUFROzJCQUN0QixJQUFJLFlBQVksRUFBa0I7eUJBQ3BDLElBQUksWUFBWSxFQUFFO3FCQUdWLEVBQUU7NkJBRWhCO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsRUFBRSxFQUFFLElBQUk7U0FDUjsyQkFHb0IsRUFBRTs0QkFDRCxFQUFFOzhCQUVBLENBQUM7S0FLckI7Ozs7O0lBRUcsV0FBVyxDQUFDLE9BQU87UUFDekIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMs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QyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUN0QixJQUFJO29CQUNKLEVBQUU7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0g7U0FDRDs7OztZQTVIRixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCVjtnQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQXhCUSxxQkFBcUI7WUFDckIsaUJBQWlCOzs7dUJBeUJ4QixXQUFXLFNBQUMsdUJBQXVCO3lCQUVuQyxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFFTCxLQUFLO3FCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFFTCxNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNO3dCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0QmluZGluZyxcblx0T25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RXZlbnRJbnRlcmZhY2UsXG5cdFdlZWtkYXlJbnRlcmZhY2UsXG5cdERBWVMsXG5cdEhpZ2hMaWdodEludGVyZmFjZSxcblx0RGF0ZVJhbmdlSW50ZXJmYWNlLFxuXHRTbG90SW50ZXJmYWNlLFxufSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5pbXBvcnQgeyBNb250aFZpZXdTbG90c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWRcIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiB3ZWVrZGF5c1wiIGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWhlYWQtY2VsbFwiPnt7IHdlZWtkYXkgfCB3ZWVrZGF5UGlwZSB9fTwvZGl2PlxuPC9kaXY+XG5cbjxhdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXJcblx0W3dlZWtzXT1cIndlZWtzXCJcblx0W3Nsb3RzXT1cInNsb3RzXCJcblx0W3NlbGVjdGVkRGF5XT1cInNlbGVjdGVkRGF5XCJcblx0W3JhbmdlXT1cInNlbGVjdGVkUmFuZ2VcIlxuXHRbZXZlbnRJdGVtVGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHQocm93SGVpZ2h0KT1cIm9uQ2hhbmdlUm93SGVpZ2h0KCRldmVudClcIlxuXHQoc2VsZWN0RXZlbnQpPVwib25TZWxlY3RFdmVudCgkZXZlbnQpXCJcblx0KHNlbGVjdERheSk9XCJvblNlbGVjdERheSgkZXZlbnQpXCJcblx0KHNlbGVjdFJhbmdlKT1cIm9uU2VsZWN0UmFuZ2UoJGV2ZW50KVwiXG5cdChjbGlja01vcmUpPVwib25DbGlja01vcmUoJGV2ZW50KVwiXG5cdChkcmFnUmFuZ2UpPVwib25EcmFnUmFuZ2UoJGV2ZW50KVwiXG4+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctY2FsZW5kYXI+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5vLWFnZW5kYV9fdGFibGUnKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBwdWJsaWMgc3RhcnREYXlPZldlZWs6IERBWVMgPSBEQVlTLk1PTkRBWTsgLy8gU3RhcnQgb2YgdGhlIHdlZWsgKDAgPSBzdW5kYXksIDEgPSBtb25kYXksIC4uLilcblx0QElucHV0KCkgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgd2Vla2RheXM6IERBWVNbXSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAwXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheVJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0UmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgc2xvdHM6IFNsb3RJbnRlcmZhY2VbXTtcblx0cHVibGljIHdlZWtzOiBXZWVrZGF5SW50ZXJmYWNlW11bXSA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXk6IERhdGU7XG5cdHB1YmxpYyBzZWxlY3RlZFJhbmdlID0ge1xuXHRcdGZyb206IG51bGwsXG5cdFx0dG86IG51bGwsXG5cdH07XG5cblx0cHVibGljIHdlZWtIZWlnaHQ6IG51bWJlcjtcblx0cHVibGljIGV2ZW50SGVpZ2h0ID0gMjg7XG5cdHB1YmxpYyBoZWlnaHRPZmZzZXQgPSAyODtcblx0cHVibGljIGV2ZW50c0J5RGF5OiBhbnk7XG5cdHB1YmxpYyBhdmFpbGFibGVTbG90cyA9IDA7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb250aFZpZXdTbG90c1NlcnZpY2U6IE1vbnRoVmlld1Nsb3RzU2VydmljZSxcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5hY3RpdmVEYXRlIHx8IGNoYW5nZXMuc3RhcnREYXlPZldlZWspIHtcblx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGN1bGF0ZU1vbnRoV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLnN0YXJ0RGF5T2ZXZWVrLCB0aGlzLmhpZ2hsaWdodHMpO1xuXHRcdFx0dGhpcy5lbWl0RGlzcGxheVJhbmdlKHRoaXMud2Vla3MpO1xuXHRcdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0RGF5KGRheTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSBkYXk7XG5cdFx0aWYgKGRheSkge1xuXHRcdFx0dGhpcy5zZWxlY3REYXkuZW1pdChkYXkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRwdWJsaWMgb25DaGFuZ2VSb3dIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gdGhpcy5oZWlnaHRPZmZzZXQgLSAyMCkgLyB0aGlzLmV2ZW50SGVpZ2h0KTtcblx0XHR0aGlzLndlZWtIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zZXRTbG90c0FuZFdlZWtzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25DbGlja01vcmUoZGF5OiBEYXRlKSB7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdChkYXkpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdHRoaXMuc2VsZWN0UmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25EcmFnUmFuZ2UocmFuZ2UpIHtcblx0XHR0aGlzLnNlbGVjdGVkUmFuZ2UgPSByYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2xvdHNBbmRXZWVrcygpIHtcblx0XHRpZiAodGhpcy5hdmFpbGFibGVTbG90cyA+PSAwKSB7XG5cdFx0XHRjb25zdCBldmVudE1hcCA9IHRoaXMubW9udGhWaWV3U2xvdHNTZXJ2aWNlLmdlbmVyYXRlRXZlbnRNYXAoXG5cdFx0XHRcdHRoaXMuZXZlbnRzLFxuXHRcdFx0XHR0aGlzLndlZWtzLFxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZVNsb3RzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnNsb3RzID0gZXZlbnRNYXAuZ2V0U2xvdHModGhpcy5ldmVudEhlaWdodCwgdGhpcy53ZWVrSGVpZ2h0LCB0aGlzLmhlaWdodE9mZnNldCk7XG5cdFx0XHR0aGlzLndlZWtzID0gZXZlbnRNYXAuZ2V0RXZlbnRzTWFwKHRoaXMuYXZhaWxhYmxlU2xvdHMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTW9udGhXZWVrcyhkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogREFZUywgaGlnaGxpZ2h0czogSGlnaExpZ2h0SW50ZXJmYWNlKTogV2Vla2RheUludGVyZmFjZVtdW10ge1xuXHRcdGNvbnN0IGRheXMgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlLmdldERheXNGb3JNb250aChkYXRlLCBzdGFydE9mV2VlaywgaGlnaGxpZ2h0cyk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuZ2V0V2Vla3NGb3JNb250aChkYXlzKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdERpc3BsYXlSYW5nZSh3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pIHtcblx0XHRpZiAod2Vla3MubGVuZ3RoID4gMCAmJiB3ZWVrc1swXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBmcm9tID0gd2Vla3NbMF1bMF0uZGF0ZTtcblx0XHRcdGNvbnN0IHRvID0gd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZTtcblxuXHRcdFx0aWYgKGZyb20gJiYgdG8pIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmFuZ2UuZW1pdCh7XG5cdFx0XHRcdFx0ZnJvbSxcblx0XHRcdFx0XHR0byxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=
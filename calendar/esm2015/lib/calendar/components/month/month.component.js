/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { get } from 'lodash-es';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS } from '../../calendar.conf';
import { CalendarService } from '../../services/calendar.service';
export class CalendarMonthComponent {
    /**
     * @param {?=} moduleWeekdayLabels
     * @param {?=} calendarService
     */
    constructor(moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS, calendarService) {
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
    ngOnInit() {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ selectedDateChanged = this.hasChanged(changes, 'selectedDate');
        const /** @type {?} */ activeDateChanged = this.hasChanged(changes, 'activeDate');
        const /** @type {?} */ monthChanged = activeDateChanged && !DateHelper.datesAreEqual([
            changes["activeDate"].currentValue,
            changes["activeDate"].previousValue,
        ], 'M');
        const /** @type {?} */ selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();
        this.current = this.getCurrentDate();
        this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;
        let /** @type {?} */ newDates = [];
        if (selectedDateChanged) {
            newDates = this.calendarService.getMonthForDate(this.selectedDate);
        }
        else if (activeDateChanged && monthChanged) {
            newDates = this.calendarService.getMonthForDate(this.activeDate);
        }
        else {
            return;
        }
        const /** @type {?} */ range = this.calendarService.getRangesForDate(this.activeDate, this.range);
        this.dates = newDates.map(week => week.map(day => (Object.assign({}, day, { available: this.dayIsAvailable(day, range) }))));
    }
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    pickDate(event, day) {
        event.stopPropagation(); // Stop propagation so the modal doesn't close
        let /** @type {?} */ selectedDate = new Date(this.activeDate);
        if (day.padding) {
            const /** @type {?} */ month = day.date > 20 ? -1 : 1;
            selectedDate = DateHelper.updateMonth(selectedDate, selectedDate.getMonth() + month);
        }
        this.selectDate.emit(DateHelper.updateDate(selectedDate, day.date));
    }
    /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    hasChanged(changes, prop) {
        const /** @type {?} */ current = get(changes, `${prop}.currentValue`);
        const /** @type {?} */ previous = get(changes, `${prop}.previousValue`);
        const /** @type {?} */ currentValue = current instanceof Date ? current.valueOf() : 0;
        const /** @type {?} */ previousValue = previous instanceof Date ? previous.valueOf() : 0;
        return !!currentValue && currentValue !== previousValue;
    }
    /**
     * @return {?}
     */
    getCurrentDate() {
        const /** @type {?} */ current = new Date();
        const /** @type {?} */ monthHasChanged = !DateHelper.datesAreEqual([this.activeDate, current], ['M', 'Y']);
        return monthHasChanged ? -1 : current.getDate();
    }
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    dayIsAvailable(day, range) {
        let /** @type {?} */ dateRange = range.current;
        if (day.padding) {
            dateRange = day.date > 20 ? range.before : range.after;
        }
        return dateRange.indexOf(day.date) < 0;
    }
}
CalendarMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-month',
                template: `<table>
    <thead>
        <tr class="m-datepicker__days">
            <th *ngFor="let day of weekdayLabels" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>
        </tr>
    </thead>

    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let week of dates">
            <td *ngFor="let day of week">
                <button
                    tabindex="0"
                    type="button"
                    [ngClass]="{
                        'is-faded': !day.date || day.padding,
                        'is-selected': !day.padding && day.date === selectedDay,
                        'is-current': !day.padding && day.date === current
                    }"
                    (click)="pickDate($event, day)"
                    [disabled]="!day.available"
                >{{ day.date }}</button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CalendarMonthComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
    { type: CalendarService }
];
CalendarMonthComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    range: [{ type: Input }],
    weekdayLabels: [{ type: Input }],
    selectDate: [{ type: Output }]
};
function CalendarMonthComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarMonthComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarMonthComponent.prototype.activeDate;
    /** @type {?} */
    CalendarMonthComponent.prototype.range;
    /** @type {?} */
    CalendarMonthComponent.prototype.weekdayLabels;
    /** @type {?} */
    CalendarMonthComponent.prototype.selectDate;
    /** @type {?} */
    CalendarMonthComponent.prototype.dates;
    /** @type {?} */
    CalendarMonthComponent.prototype.selectedDay;
    /** @type {?} */
    CalendarMonthComponent.prototype.current;
    /** @type {?} */
    CalendarMonthComponent.prototype.moduleWeekdayLabels;
    /** @type {?} */
    CalendarMonthComponent.prototype.calendarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUl2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sRUFBeUIsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLCtCQUErQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBaUNsRSxNQUFNOzs7OztJQVdMLFlBQzBDLHNCQUFzQiwrQkFBK0IsRUFDdEY7UUFEaUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQztRQUN0RixvQkFBZSxHQUFmLGVBQWU7NkJBVHNCLCtCQUErQjswQkFDdEQsSUFBSSxZQUFZLEVBQUU7cUJBRW5CLEVBQUU7MkJBQ0gsQ0FBQyxDQUFDO0tBTW5COzs7O0lBRUosUUFBUTtRQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7S0FDcEU7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLHVCQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JFLHVCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLHVCQUFNLFlBQVksR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFVB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WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgRGF5LCBNb250aCwgRGF0ZVJhbmdlLCBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlTWFwLCBXZWVrZGF5TGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItbW9udGgnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fZGF5c1wiPlxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla2RheUxhYmVsc1wiIHRpdGxlPXt7ZGF5fX0+e3sgZGF5IHwgc2xpY2U6MDoyIHwgdGl0bGVjYXNlIH19PC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuXG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgZGF0ZXNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtZmFkZWQnOiAhZGF5LmRhdGUgfHwgZGF5LnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IHNlbGVjdGVkRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIGRheSlcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRheS5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgID57eyBkYXkuZGF0ZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHJhbmdlOiBEYXRlUmFuZ2U7XG5cdEBJbnB1dCgpIHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgZGF0ZXM6IE1vbnRoID0gW107XG5cdHB1YmxpYyBzZWxlY3RlZERheSA9IC0xO1xuXHRwdWJsaWMgY3VycmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgbW9kdWxlV2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZVxuXHQpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy53ZWVrZGF5TGFiZWxzID0gdGhpcy53ZWVrZGF5TGFiZWxzIHx8IHRoaXMubW9kdWxlV2Vla2RheUxhYmVscztcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZERhdGVDaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKGNoYW5nZXMsICdzZWxlY3RlZERhdGUnKTtcblx0XHRjb25zdCBhY3RpdmVEYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnYWN0aXZlRGF0ZScpO1xuXHRcdGNvbnN0IG1vbnRoQ2hhbmdlZCA9IGFjdGl2ZURhdGVDaGFuZ2VkICYmICFEYXRlSGVscGVyLmRhdGVzQXJlRXF1YWwoW1xuXHRcdFx0Y2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSxcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlLFxuXHRcdF0sICdNJyk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXlDaGFuZ2VkID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG5cblx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnREYXRlKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERheSA9IHNlbGVjdGVkRGF5Q2hhbmdlZCA/IHRoaXMuc2VsZWN0ZWREYXRlLmdldERhdGUoKSA6IC0xO1xuXG5cdFx0bGV0IG5ld0RhdGVzID0gW107XG5cblx0XHRpZiAoc2VsZWN0ZWREYXRlQ2hhbmdlZCkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aXZlRGF0ZUNoYW5nZWQgJiYgbW9udGhDaGFuZ2VkKSB7XG5cdFx0XHRuZXdEYXRlcyA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRSYW5nZXNGb3JEYXRlKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5yYW5nZSk7XG5cblx0XHR0aGlzLmRhdGVzID0gbmV3RGF0ZXMubWFwKHdlZWsgPT4gd2Vlay5tYXAoZGF5ID0+ICh7Li4uZGF5LCBhdmFpbGFibGU6IHRoaXMuZGF5SXNBdmFpbGFibGUoZGF5LCByYW5nZSkgfSkpKTtcblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXk6IERheSk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBTdG9wIHByb3BhZ2F0aW9uIHNvIHRoZSBtb2RhbCBkb2Vzbid0IGNsb3NlXG5cblx0XHRsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblxuXHRcdGlmIChkYXkucGFkZGluZykge1xuXHRcdFx0Y29uc3QgbW9udGggPSBkYXkuZGF0ZSA+IDIwID8gLTEgOiAxO1xuXHRcdFx0c2VsZWN0ZWREYXRlID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChzZWxlY3RlZERhdGUsIHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpICsgbW9udGgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KERhdGVIZWxwZXIudXBkYXRlRGF0ZShzZWxlY3RlZERhdGUsIGRheS5kYXRlKSk7XG5cdH1cblxuXHRwcml2YXRlIGhhc0NoYW5nZWQoY2hhbmdlczogU2ltcGxlQ2hhbmdlcywgcHJvcDogc3RyaW5nKTogQm9vbGVhbiB7XG5cdFx0Y29uc3QgY3VycmVudCA9IGdldChjaGFuZ2VzLCBgJHtwcm9wfS5jdXJyZW50VmFsdWVgKTtcblx0XHRjb25zdCBwcmV2aW91cyA9IGdldChjaGFuZ2VzLCBgJHtwcm9wfS5wcmV2aW91c1ZhbHVlYCk7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gY3VycmVudCBpbnN0YW5jZW9mIERhdGUgPyBjdXJyZW50LnZhbHVlT2YoKSA6IDA7XG5cdFx0Y29uc3QgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzIGluc3RhbmNlb2YgRGF0ZSA/IHByZXZpb3VzLnZhbHVlT2YoKSA6IDA7XG5cblx0XHRyZXR1cm4gISFjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBwcmV2aW91c1ZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDdXJyZW50RGF0ZSgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IG1vbnRoSGFzQ2hhbmdlZCA9ICFEYXRlSGVscGVyLmRhdGVzQXJlRXF1YWwoXG5cdFx0XHRbdGhpcy5hY3RpdmVEYXRlLCBjdXJyZW50XSxcblx0XHRcdFsnTScsICdZJ11cblx0XHQpO1xuXG5cdFx0cmV0dXJuIG1vbnRoSGFzQ2hhbmdlZCA/IC0xIDogY3VycmVudC5nZXREYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGRheUlzQXZhaWxhYmxlKGRheTogRGF5LCByYW5nZTogRGF0ZVJhbmdlTWFwKTogQm9vbGVhbiB7XG5cdFx0bGV0IGRhdGVSYW5nZSA9IHJhbmdlLmN1cnJlbnQ7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGRhdGVSYW5nZSA9IGRheS5kYXRlID4gMjAgPyByYW5nZS5iZWZvcmUgOiByYW5nZS5hZnRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0ZVJhbmdlLmluZGV4T2YoZGF5LmRhdGUpIDwgMDtcblx0fVxufVxuIl19
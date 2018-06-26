/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { get, chunk } from 'lodash-es';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS } from '../../calendar.conf';
export class CalendarYearComponent {
    /**
     * @param {?=} moduleMonthLabels
     */
    constructor(moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS) {
        this.moduleMonthLabels = moduleMonthLabels;
        this.monthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
        this.selectDate = new EventEmitter();
        this.selectedMonth = -1;
        this.current = '';
        this.months = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        const /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        const /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        const /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = chunk(this.monthLabels, 4);
        }
    }
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    pickDate(event, date) {
        event.stopPropagation();
        let /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    }
}
CalendarYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-year',
                template: `<table>
    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let group of months">
            <td *ngFor="let month of group">
                <button tabindex="0" type="button" [ngClass]="{
                    'is-current': month === current,
                    'is-selected': month === monthLabels[selectedMonth]
                }" (click)="pickDate($event, month)">
                    {{ month | titlecase }}
                </button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CalendarYearComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] }
];
CalendarYearComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    monthLabels: [{ type: Input }],
    selectDate: [{ type: Output }]
};
function CalendarYearComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarYearComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarYearComponent.prototype.activeDate;
    /** @type {?} */
    CalendarYearComponent.prototype.monthLabels;
    /** @type {?} */
    CalendarYearComponent.prototype.selectDate;
    /** @type {?} */
    CalendarYearComponent.prototype.selectedMonth;
    /** @type {?} */
    CalendarYearComponent.prototype.current;
    /** @type {?} */
    CalendarYearComponent.prototype.months;
    /** @type {?} */
    CalendarYearComponent.prototype.moduleMonthLabels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jb21wb25lbnRzL3llYXIveWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUd2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFzQjNGLE1BQU07Ozs7SUFVTCxZQUN1QyxvQkFBb0IsNkJBQTZCO1FBQWpELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7MkJBUjlDLDZCQUE2QjswQkFDaEQsSUFBSSxZQUFZLEVBQUU7NkJBRWxCLENBQUMsQ0FBQzt1QkFDUixFQUFFO3NCQUNjLEVBQUU7S0FJL0I7Ozs7O0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLHVCQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDN0QsdUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsdUJBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEgsdUJBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUUsRUFBRSxDQUFDLENBQUMsT0FBTyxpQkFBYyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNEOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBaUIsRUFBRSxJQUFZO1FBQ3ZDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixxQkFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DOzs7WUF4REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Q0FjVjtnQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7Ozs0Q0FZRSxNQUFNLFNBQUMscUJBQXFCOzs7MkJBVjdCLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0LCBjaHVuayB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBDQUxFTkRBUl9NT05USF9MQUJFTFMsIENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBNb250aExhYmVsc0NvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNhbGVuZGFyLXllYXInLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGJvZHkgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2NhbGVuZGFyXCI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgbW9udGhzXCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IG1vbnRoIG9mIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAnaXMtY3VycmVudCc6IG1vbnRoID09PSBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiBtb250aCA9PT0gbW9udGhMYWJlbHNbc2VsZWN0ZWRNb250aF1cbiAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cInBpY2tEYXRlKCRldmVudCwgbW9udGgpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG1vbnRoIHwgdGl0bGVjYXNlIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG48L3RhYmxlPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyWWVhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgYWN0aXZlRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgbW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFM7XG5cdEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBzZWxlY3RlZE1vbnRoID0gLTE7XG5cdHB1YmxpYyBjdXJyZW50ID0gJyc7XG5cdHB1YmxpYyBtb250aHM6IEFycmF5PHN0cmluZ1tdPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfTU9OVEhfTEFCRUxTKSBwdWJsaWMgbW9kdWxlTW9udGhMYWJlbHMgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMU1xuXHQpIHt9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUnKTtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBjdXJyZW50VmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IHNlbGVjdGVkTW9udGhDaGFuZ2VkID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBjdXJyZW50WWVhciA9PT0gY3VycmVudC5nZXRGdWxsWWVhcigpID8gdGhpcy5tb250aExhYmVsc1tjdXJyZW50LmdldE1vbnRoKCldIDogJyc7XG5cblx0XHR0aGlzLnNlbGVjdGVkTW9udGggPSBzZWxlY3RlZE1vbnRoQ2hhbmdlZCA/IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgOiAtMTtcblxuXHRcdGlmIChjaGFuZ2VzLm1vbnRoTGFiZWxzKSB7XG5cdFx0XHR0aGlzLm1vbnRoTGFiZWxzID0gdGhpcy5tb250aExhYmVscyB8fCB0aGlzLm1vZHVsZU1vbnRoTGFiZWxzO1xuXHRcdFx0dGhpcy5tb250aHMgPSBjaHVuayh0aGlzLm1vbnRoTGFiZWxzLCA0KTtcblx0XHR9XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF0ZTogc3RyaW5nKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHRzZWxlY3RlZERhdGUgPSBEYXRlSGVscGVyLnVwZGF0ZU1vbnRoKHNlbGVjdGVkRGF0ZSwgdGhpcy5tb250aExhYmVscy5pbmRleE9mKGRhdGUpKTtcblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHNlbGVjdGVkRGF0ZSk7XG5cdH1cbn1cbiJdfQ==
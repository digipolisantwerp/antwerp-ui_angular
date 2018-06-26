/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { get, chunk } from 'lodash-es';
export class CalendarDecenniaComponent {
    constructor() {
        this.selectDate = new EventEmitter();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        const /** @type {?} */ previousValue = get(changes, 'activeDate.previousValue');
        const /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        const /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        const /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    }
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    pickDate(event, date) {
        event.stopPropagation();
        const /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    }
    /**
     * @return {?}
     */
    updateYears() {
        const /** @type {?} */ years = [];
        const /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (let /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = chunk(years, 4);
    }
}
CalendarDecenniaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-calendar-decennia',
                template: `<table>
    <tbody class="m-datepicker__calendar">
        <tr *ngFor="let group of years">
            <td *ngFor="let year of group">
                <button tabindex="0" type="button" [ngClass]="{
                    'is-current': year === current,
                    'is-selected': year === selectedYear
                }" (click)="pickDate($event, year)">
                    {{ year }}
                </button>
            </td>
        </tr>
    </tbody>
</table>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
CalendarDecenniaComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeDate: [{ type: Input }],
    selectDate: [{ type: Output }]
};
function CalendarDecenniaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarDecenniaComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarDecenniaComponent.prototype.activeDate;
    /** @type {?} */
    CalendarDecenniaComponent.prototype.selectDate;
    /** @type {?} */
    CalendarDecenniaComponent.prototype.years;
    /** @type {?} */
    CalendarDecenniaComponent.prototype.selectedYear;
    /** @type {?} */
    CalendarDecenniaComponent.prototype.current;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjZW5uaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBSXZCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBcUJ2QyxNQUFNOzswQkFHa0IsSUFBSSxZQUFZLEVBQUU7cUJBRTFCLEVBQUU7NEJBQ0ssQ0FBQyxDQUFDO3VCQUNQLENBQUMsQ0FBQzs7Ozs7SUFFbkIsUUFBUTtRQUNQLHVCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3JDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyx1QkFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdELHVCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDL0QsdUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsdUJBQU0sWUFBWSxHQUFHLGFBQWEsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsdUJBQU0sVUFBVSxHQUFHLFlBQVksR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFFakYsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdGOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBaUIsRUFBRSxJQUFZO1FBQ3ZDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4Qix1QkFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFTyxXQUFXO1FBQ2xCLHVCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakQsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7O1lBaEU5QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztDQWNWO2dCQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7MkJBRUMsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0LCBjaHVuayB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhci1kZWNlbm5pYScsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiB5ZWFyc1wiPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAnaXMtY3VycmVudCc6IHllYXIgPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IHllYXIgPT09IHNlbGVjdGVkWWVhclxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCB5ZWFyKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB5ZWFyIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG48L3RhYmxlPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgYWN0aXZlRGF0ZTogRGF0ZTtcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHllYXJzID0gW107XG5cdHB1YmxpYyBzZWxlY3RlZFllYXIgPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAtMTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHR0aGlzLmN1cnJlbnQgPSBjdXJyZW50LmdldEZ1bGxZZWFyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBnZXQoY2hhbmdlcywgJ2FjdGl2ZURhdGUucHJldmlvdXNWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3QgcHJldmlvdXNZZWFyID0gcHJldmlvdXNWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91c1ZhbHVlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0XHRjb25zdCBvdXRPZlJhbmdlID0gcHJldmlvdXNZZWFyID4gY3VycmVudFllYXIgfHwgcHJldmlvdXNZZWFyICsgMTEgPCBjdXJyZW50WWVhcjtcblxuXHRcdGlmIChjdXJyZW50WWVhciA+PSAwICYmIG91dE9mUmFuZ2UpIHtcblx0XHRcdHRoaXMudXBkYXRlWWVhcnMoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHRoaXMuc2VsZWN0ZWREYXRlIGluc3RhbmNlb2YgRGF0ZSA/IHRoaXMuc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBudW1iZXIpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0c2VsZWN0ZWREYXRlLnNldEZ1bGxZZWFyKGRhdGUpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlWWVhcnMoKTogdm9pZCB7XG5cdFx0Y29uc3QgeWVhcnMgPSBbXTtcblx0XHRjb25zdCBhY3RpdmVZZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0XHRmb3IgKGxldCBpID0gYWN0aXZlWWVhcjsgaSA8IGFjdGl2ZVllYXIgKyAxMjsgaSArPSAxKSB7XG5cdFx0XHR5ZWFycy5wdXNoKGkpO1xuXHRcdH1cblxuXHRcdHRoaXMueWVhcnMgPSBjaHVuayh5ZWFycywgNCk7XG5cdH1cbn1cbiJdfQ==
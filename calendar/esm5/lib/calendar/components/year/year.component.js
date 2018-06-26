/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { get, chunk } from 'lodash-es';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS } from '../../calendar.conf';
var CalendarYearComponent = /** @class */ (function () {
    function CalendarYearComponent(moduleMonthLabels) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
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
    CalendarYearComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        var /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = chunk(this.monthLabels, 4);
        }
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarYearComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    };
    CalendarYearComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar-year',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of months\">\n            <td *ngFor=\"let month of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': month === current,\n                    'is-selected': month === monthLabels[selectedMonth]\n                }\" (click)=\"pickDate($event, month)\">\n                    {{ month | titlecase }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarYearComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] }
    ]; };
    CalendarYearComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeDate: [{ type: Input }],
        monthLabels: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarYearComponent;
}());
export { CalendarYearComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jb21wb25lbnRzL3llYXIveWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUd2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBZ0MxRiwrQkFDdUMsaUJBQWlEOzZGQUFBO1FBQWpELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0M7MkJBUjlDLDZCQUE2QjswQkFDaEQsSUFBSSxZQUFZLEVBQUU7NkJBRWxCLENBQUMsQ0FBQzt1QkFDUixFQUFFO3NCQUNjLEVBQUU7S0FJL0I7Ozs7O0lBRUosMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLHFCQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDN0QscUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYscUJBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEgscUJBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUUsRUFBRSxDQUFDLENBQUMsT0FBTyxpQkFBYyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNEOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQWlCLEVBQUUsSUFBWTtRQUN2QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIscUJBQUksWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuQzs7Z0JBeERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsdWhCQWNWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnREFZRSxNQUFNLFNBQUMscUJBQXFCOzs7K0JBVjdCLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLE1BQU07O2dDQXhDUjs7U0FvQ2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCwgY2h1bmsgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLmNvbmYnO1xuaW1wb3J0IHsgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuLi8uLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jYWxlbmRhci15ZWFyJyxcblx0dGVtcGxhdGU6IGA8dGFibGU+XG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIG1vbnRoc1wiPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBtb250aCBvZiBncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiBtb250aCA9PT0gY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgJ2lzLXNlbGVjdGVkJzogbW9udGggPT09IG1vbnRoTGFiZWxzW3NlbGVjdGVkTW9udGhdXG4gICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIG1vbnRoKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBtb250aCB8IHRpdGxlY2FzZSB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclllYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBJbnB1dCgpIG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgc2VsZWN0ZWRNb250aCA9IC0xO1xuXHRwdWJsaWMgY3VycmVudCA9ICcnO1xuXHRwdWJsaWMgbW9udGhzOiBBcnJheTxzdHJpbmdbXT4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHVibGljIG1vZHVsZU1vbnRoTGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFNcblx0KSB7fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBnZXQoY2hhbmdlcywgJ2FjdGl2ZURhdGUuY3VycmVudFZhbHVlJyk7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudFZhbHVlLmdldEZ1bGxZZWFyKCkgOiAtMTtcblx0XHRjb25zdCBzZWxlY3RlZE1vbnRoQ2hhbmdlZCA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMuc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudFllYXIgPT09IGN1cnJlbnQuZ2V0RnVsbFllYXIoKSA/IHRoaXMubW9udGhMYWJlbHNbY3VycmVudC5nZXRNb250aCgpXSA6ICcnO1xuXG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gc2VsZWN0ZWRNb250aENoYW5nZWQgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNb250aCgpIDogLTE7XG5cblx0XHRpZiAoY2hhbmdlcy5tb250aExhYmVscykge1xuXHRcdFx0dGhpcy5tb250aExhYmVscyA9IHRoaXMubW9udGhMYWJlbHMgfHwgdGhpcy5tb2R1bGVNb250aExhYmVscztcblx0XHRcdHRoaXMubW9udGhzID0gY2h1bmsodGhpcy5tb250aExhYmVscywgNCk7XG5cdFx0fVxuXHR9XG5cblx0cGlja0RhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGU6IHN0cmluZykge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0c2VsZWN0ZWREYXRlID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChzZWxlY3RlZERhdGUsIHRoaXMubW9udGhMYWJlbHMuaW5kZXhPZihkYXRlKSk7XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChzZWxlY3RlZERhdGUpO1xuXHR9XG59XG4iXX0=
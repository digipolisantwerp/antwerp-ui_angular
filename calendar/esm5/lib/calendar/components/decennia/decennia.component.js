/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { get, chunk } from 'lodash-es';
var CalendarDecenniaComponent = /** @class */ (function () {
    function CalendarDecenniaComponent() {
        this.selectDate = new EventEmitter();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = get(changes, 'activeDate.currentValue');
        var /** @type {?} */ previousValue = get(changes, 'activeDate.previousValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        var /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    };
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.updateYears = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ years = [];
        var /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (var /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = chunk(years, 4);
    };
    CalendarDecenniaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-calendar-decennia',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of years\">\n            <td *ngFor=\"let year of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': year === current,\n                    'is-selected': year === selectedYear\n                }\" (click)=\"pickDate($event, year)\">\n                    {{ year }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    CalendarDecenniaComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeDate: [{ type: Input }],
        selectDate: [{ type: Output }]
    };
    return CalendarDecenniaComponent;
}());
export { CalendarDecenniaComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjZW5uaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBSXZCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7MEJBd0JmLElBQUksWUFBWSxFQUFFO3FCQUUxQixFQUFFOzRCQUNLLENBQUMsQ0FBQzt1QkFDUCxDQUFDLENBQUM7Ozs7O0lBRW5CLDRDQUFROzs7SUFBUjtRQUNDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3JDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxxQkFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdELHFCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDL0QscUJBQU0sV0FBVyxHQUFHLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYscUJBQU0sWUFBWSxHQUFHLGFBQWEsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYscUJBQU0sVUFBVSxHQUFHLFlBQVksR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFFakYsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdGOzs7Ozs7SUFFRCw0Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQWlCLEVBQUUsSUFBWTtRQUN2QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIscUJBQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRU8sK0NBQVc7Ozs7UUFDbEIscUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqRCxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztnQkFoRTlCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsdWZBY1Y7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7K0JBRUMsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07O29DQWxDUjs7U0ErQmEseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCwgY2h1bmsgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItZGVjZW5uaWEnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGJvZHkgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2NhbGVuZGFyXCI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgeWVhcnNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiBncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiB5ZWFyID09PSBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiB5ZWFyID09PSBzZWxlY3RlZFllYXJcbiAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cInBpY2tEYXRlKCRldmVudCwgeWVhcilcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyB5ZWFycyA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWRZZWFyID0gLTE7XG5cdHB1YmxpYyBjdXJyZW50ID0gLTE7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG5cdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudC5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUnKTtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWUnKTtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBjdXJyZW50VmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IHByZXZpb3VzWWVhciA9IHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gcHJldmlvdXNWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgb3V0T2ZSYW5nZSA9IHByZXZpb3VzWWVhciA+IGN1cnJlbnRZZWFyIHx8IHByZXZpb3VzWWVhciArIDExIDwgY3VycmVudFllYXI7XG5cblx0XHRpZiAoY3VycmVudFllYXIgPj0gMCAmJiBvdXRPZlJhbmdlKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVllYXJzKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkRGF0ZSBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF0ZTogbnVtYmVyKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRjb25zdCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZS5zZXRGdWxsWWVhcihkYXRlKTtcblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVllYXJzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHllYXJzID0gW107XG5cdFx0Y29uc3QgYWN0aXZlWWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGFjdGl2ZVllYXI7IGkgPCBhY3RpdmVZZWFyICsgMTI7IGkgKz0gMSkge1xuXHRcdFx0eWVhcnMucHVzaChpKTtcblx0XHR9XG5cblx0XHR0aGlzLnllYXJzID0gY2h1bmsoeWVhcnMsIDQpO1xuXHR9XG59XG4iXX0=
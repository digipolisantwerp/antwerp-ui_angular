/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS } from '../agenda.conf';
export class WeekdayPipe {
    /**
     * @param {?=} weekdayLabels
     */
    constructor(weekdayLabels = DEFAULT_WEEKDAY_LABELS) {
        this.weekdayLabels = weekdayLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
    }
}
WeekdayPipe.decorators = [
    { type: Pipe, args: [{
                name: 'weekdayPipe',
            },] },
];
/** @nocollapse */
WeekdayPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WEEKDAY_LABELS,] }] }
];
function WeekdayPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekdayPipe.prototype.weekdayLabels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9waXBlcy93ZWVrZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEUsTUFBTTs7OztJQUNMLFlBQ2lDLGdCQUFnQixzQkFBc0I7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0tBQ25FOzs7OztJQUVHLFNBQVMsQ0FBQyxLQUFhO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7WUFUN0YsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2FBQ25COzs7OzRDQUdFLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdFRUtEQVlfTEFCRUxTLCBERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0gZnJvbSAnLi4vYWdlbmRhLmNvbmYnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICd3ZWVrZGF5UGlwZScsXG59KVxuZXhwb3J0IGNsYXNzIFdlZWtkYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgd2Vla2RheUxhYmVscyA9IERFRkFVTFRfV0VFS0RBWV9MQUJFTFNcblx0KSB7fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMud2Vla2RheUxhYmVsc1sodmFsdWUpLnRvU3RyaW5nKCldIHx8IERFRkFVTFRfV0VFS0RBWV9MQUJFTFNbKHZhbHVlKS50b1N0cmluZygpXTtcblx0fVxufVxuIl19
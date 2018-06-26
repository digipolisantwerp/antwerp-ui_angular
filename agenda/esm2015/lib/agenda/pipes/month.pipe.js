/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { MONTH_LABELS, DEFAULT_MONTH_LABELS } from '../agenda.conf';
export class MonthPipe {
    /**
     * @param {?=} monthLabels
     */
    constructor(monthLabels = DEFAULT_MONTH_LABELS) {
        this.monthLabels = monthLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        const /** @type {?} */ month = parseInt(value, 10);
        if (isNaN(month)) {
            return null;
        }
        const /** @type {?} */ index = (month - 1).toString();
        return this.monthLabels[index.toString()] || DEFAULT_MONTH_LABELS[index.toString()];
    }
}
MonthPipe.decorators = [
    { type: Pipe, args: [{
                name: 'monthPipe',
            },] },
];
/** @nocollapse */
MonthPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MONTH_LABELS,] }] }
];
function MonthPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthPipe.prototype.monthLabels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvcGlwZXMvbW9udGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtwRSxNQUFNOzs7O0lBQ0wsWUFDK0IsY0FBYyxvQkFBb0I7UUFBbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO0tBQzdEOzs7OztJQUVHLFNBQVMsQ0FBQyxLQUFVO1FBQzFCLHVCQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQsdUJBQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7O1lBaEJyRixJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7YUFDakI7Ozs7NENBR0UsTUFBTSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTU9OVEhfTEFCRUxTLCBERUZBVUxUX01PTlRIX0xBQkVMUyB9IGZyb20gJy4uL2FnZW5kYS5jb25mJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbW9udGhQaXBlJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoTU9OVEhfTEFCRUxTKSBwcml2YXRlIG1vbnRoTGFiZWxzID0gREVGQVVMVF9NT05USF9MQUJFTFNcblx0KSB7fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgbW9udGggPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG5cdFx0aWYgKGlzTmFOKG1vbnRoKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXggPSAobW9udGggLSAxKS50b1N0cmluZygpO1xuXHRcdHJldHVybiB0aGlzLm1vbnRoTGFiZWxzW2luZGV4LnRvU3RyaW5nKCldIHx8IERFRkFVTFRfTU9OVEhfTEFCRUxTW2luZGV4LnRvU3RyaW5nKCldO1xuXHR9XG59XG4iXX0=
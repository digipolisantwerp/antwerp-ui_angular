/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS } from '../agenda.conf';
var WeekdayPipe = /** @class */ (function () {
    function WeekdayPipe(weekdayLabels) {
        if (weekdayLabels === void 0) { weekdayLabels = DEFAULT_WEEKDAY_LABELS; }
        this.weekdayLabels = weekdayLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    WeekdayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
    };
    WeekdayPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'weekdayPipe',
                },] },
    ];
    /** @nocollapse */
    WeekdayPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WEEKDAY_LABELS,] }] }
    ]; };
    return WeekdayPipe;
}());
export { WeekdayPipe };
function WeekdayPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekdayPipe.prototype.weekdayLabels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9waXBlcy93ZWVrZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBTXZFLHFCQUNpQyxhQUFzQzs4RUFBQTtRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7S0FDbkU7Ozs7O0lBRUcsK0JBQVM7Ozs7Y0FBQyxLQUFhO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7OztnQkFUN0YsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxhQUFhO2lCQUNuQjs7OztnREFHRSxNQUFNLFNBQUMsY0FBYzs7c0JBVHhCOztTQU9hLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV0VFS0RBWV9MQUJFTFMsIERFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSBmcm9tICcuLi9hZ2VuZGEuY29uZic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3dlZWtkYXlQaXBlJyxcbn0pXG5leHBvcnQgY2xhc3MgV2Vla2RheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChXRUVLREFZX0xBQkVMUykgcHJpdmF0ZSB3ZWVrZGF5TGFiZWxzID0gREVGQVVMVF9XRUVLREFZX0xBQkVMU1xuXHQpIHt9XG5cblx0cHVibGljIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy53ZWVrZGF5TGFiZWxzWyh2YWx1ZSkudG9TdHJpbmcoKV0gfHwgREVGQVVMVF9XRUVLREFZX0xBQkVMU1sodmFsdWUpLnRvU3RyaW5nKCldO1xuXHR9XG59XG4iXX0=
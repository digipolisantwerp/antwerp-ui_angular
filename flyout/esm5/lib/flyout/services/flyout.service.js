/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var FlyoutService = /** @class */ (function () {
    function FlyoutService() {
        this.subject = new Subject();
    }
    /**
     * @return {?}
     */
    FlyoutService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.subject.next({
            close: true,
        });
    };
    FlyoutService.decorators = [
        { type: Injectable },
    ];
    return FlyoutService;
}());
export { FlyoutService };
function FlyoutService_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutService.prototype.subject;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0L3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozt1QkFPckIsSUFBSSxPQUFPLEVBQWU7Ozs7O0lBRXBDLDZCQUFLOzs7O1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7OztnQkFSSixVQUFVOzt3QkFMWDs7U0FNYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmltcG9ydCB7IEZseW91dFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZseW91dFNlcnZpY2Uge1xuXHQvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG5cdHB1YmxpYyBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rmx5b3V0U3RhdGU+KCk7XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMuc3ViamVjdC5uZXh0KHtcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=
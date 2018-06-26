/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class FlyoutService {
    constructor() {
        this.subject = new Subject();
    }
    /**
     * @return {?}
     */
    close() {
        this.subject.next({
            close: true,
        });
    }
}
FlyoutService.decorators = [
    { type: Injectable },
];
function FlyoutService_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutService.prototype.subject;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0L3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLdkMsTUFBTTs7dUJBRVksSUFBSSxPQUFPLEVBQWU7Ozs7O0lBRXBDLEtBQUs7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQzs7OztZQVJKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0IHsgRmx5b3V0U3RhdGUgfSBmcm9tICcuLi90eXBlcy9mbHlvdXQudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmx5b3V0U2VydmljZSB7XG5cdC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcblx0cHVibGljIHN1YmplY3QgPSBuZXcgU3ViamVjdDxGbHlvdXRTdGF0ZT4oKTtcblxuXHRwdWJsaWMgY2xvc2UoKSB7XG5cdFx0dGhpcy5zdWJqZWN0Lm5leHQoe1xuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
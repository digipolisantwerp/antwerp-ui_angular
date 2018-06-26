/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { FlyoutService } from '../services/flyout.service';
export class FlyoutCloseDirective {
    /**
     * @param {?} flyoutService
     */
    constructor(flyoutService) {
        this.flyoutService = flyoutService;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.flyoutService.close();
    }
}
FlyoutCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyoutClose]',
                exportAs: 'auiFlyoutClose',
            },] },
];
/** @nocollapse */
FlyoutCloseDirective.ctorParameters = () => [
    { type: FlyoutService }
];
FlyoutCloseDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }]
};
function FlyoutCloseDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutCloseDirective.prototype.flyoutService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZseW91dC8iLCJzb3VyY2VzIjpbImxpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQtY2xvc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNM0QsTUFBTTs7OztJQUVMLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0tBQUk7Ozs7SUFHN0MsT0FBTztRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7OztZQVhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2FBQzFCOzs7O1lBTFEsYUFBYTs7O3NCQVVwQixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGbHlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmx5b3V0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0Q2xvc2VdJyxcblx0ZXhwb3J0QXM6ICdhdWlGbHlvdXRDbG9zZScsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dENsb3NlRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZseW91dFNlcnZpY2U6IEZseW91dFNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snKVxuXHRwdWJsaWMgb25DbGljaygpIHtcblx0XHR0aGlzLmZseW91dFNlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19
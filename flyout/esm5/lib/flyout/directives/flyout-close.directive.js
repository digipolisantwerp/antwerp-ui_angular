/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { FlyoutService } from '../services/flyout.service';
var FlyoutCloseDirective = /** @class */ (function () {
    function FlyoutCloseDirective(flyoutService) {
        this.flyoutService = flyoutService;
    }
    /**
     * @return {?}
     */
    FlyoutCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.flyoutService.close();
    };
    FlyoutCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyoutClose]',
                    exportAs: 'auiFlyoutClose',
                },] },
    ];
    /** @nocollapse */
    FlyoutCloseDirective.ctorParameters = function () { return [
        { type: FlyoutService }
    ]; };
    FlyoutCloseDirective.propDecorators = {
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return FlyoutCloseDirective;
}());
export { FlyoutCloseDirective };
function FlyoutCloseDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutCloseDirective.prototype.flyoutService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZseW91dC8iLCJzb3VyY2VzIjpbImxpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQtY2xvc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBUTFELDhCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtLQUFJOzs7O0lBRzdDLHNDQUFPOzs7SUFEZDtRQUVDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7O2dCQVhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMxQjs7OztnQkFMUSxhQUFhOzs7MEJBVXBCLFlBQVksU0FBQyxPQUFPOzsrQkFYdEI7O1NBT2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mbHlvdXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGbHlvdXRDbG9zZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dENsb3NlJyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0Q2xvc2VEaXJlY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmx5b3V0U2VydmljZTogRmx5b3V0U2VydmljZSkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdHB1YmxpYyBvbkNsaWNrKCkge1xuXHRcdHRoaXMuZmx5b3V0U2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iXX0=
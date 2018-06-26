/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { GAService } from '../services/ga.service';
var GaEventDirective = /** @class */ (function () {
    function GaEventDirective(el, gaService) {
        this.el = el;
        this.gaService = gaService;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    GaEventDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ nativeEl = this.el.nativeElement;
        if (this.gaEvent) {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText, this.gaEvent);
        }
        else {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText);
        }
    };
    GaEventDirective.decorators = [
        { type: Directive, args: [{ selector: '[auiGaEvent]' },] },
    ];
    /** @nocollapse */
    GaEventDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GAService }
    ]; };
    GaEventDirective.propDecorators = {
        gaEvent: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return GaEventDirective;
}());
export { GaEventDirective };
function GaEventDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    GaEventDirective.prototype.gaEvent;
    /** @type {?} */
    GaEventDirective.prototype.el;
    /** @type {?} */
    GaEventDirective.prototype.gaService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5hbHl0aWNzLyIsInNvdXJjZXMiOlsibGliL2FuYWx5dGljcy9kaXJlY3RpdmVzL2V2ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBTWxELDBCQUFvQixFQUFjLEVBQVUsU0FBb0I7UUFBNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7S0FBSTs7Ozs7SUFHcEUsa0NBQU87Ozs7SUFEUCxVQUNRLENBQUM7UUFDUixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkc7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RjtLQUNEOztnQkFmRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O2dCQUpuQixVQUFVO2dCQUVyQixTQUFTOzs7MEJBSWhCLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7MkJBVmxDOztTQUthLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2F1aUdhRXZlbnRdJyB9KVxuZXhwb3J0IGNsYXNzIEdhRXZlbnREaXJlY3RpdmUge1xuXHRASW5wdXQoKSBnYUV2ZW50OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBnYVNlcnZpY2U6IEdBU2VydmljZSkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG5cdG9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IG5hdGl2ZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG5cdFx0aWYgKHRoaXMuZ2FFdmVudCkge1xuXHRcdFx0dGhpcy5nYVNlcnZpY2UudHJpZ2dlckV2ZW50KG5hdGl2ZUVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgJ2NsaWNrJywgbmF0aXZlRWwuaW5uZXJUZXh0LCB0aGlzLmdhRXZlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdhU2VydmljZS50cmlnZ2VyRXZlbnQobmF0aXZlRWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLCAnY2xpY2snLCBuYXRpdmVFbC5pbm5lclRleHQpO1xuXHRcdH1cblx0fVxufVxuIl19
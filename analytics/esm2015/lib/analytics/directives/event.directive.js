/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { GAService } from '../services/ga.service';
export class GaEventDirective {
    /**
     * @param {?} el
     * @param {?} gaService
     */
    constructor(el, gaService) {
        this.el = el;
        this.gaService = gaService;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        const /** @type {?} */ nativeEl = this.el.nativeElement;
        if (this.gaEvent) {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText, this.gaEvent);
        }
        else {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText);
        }
    }
}
GaEventDirective.decorators = [
    { type: Directive, args: [{ selector: '[auiGaEvent]' },] },
];
/** @nocollapse */
GaEventDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GAService }
];
GaEventDirective.propDecorators = {
    gaEvent: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
function GaEventDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    GaEventDirective.prototype.gaEvent;
    /** @type {?} */
    GaEventDirective.prototype.el;
    /** @type {?} */
    GaEventDirective.prototype.gaService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5hbHl0aWNzLyIsInNvdXJjZXMiOlsibGliL2FuYWx5dGljcy9kaXJlY3RpdmVzL2V2ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTTs7Ozs7SUFHTCxZQUFvQixFQUFjLEVBQVUsU0FBb0I7UUFBNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7S0FBSTs7Ozs7SUFHcEUsT0FBTyxDQUFDLENBQUM7UUFDUix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkc7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RjtLQUNEOzs7WUFmRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O1lBSm5CLFVBQVU7WUFFckIsU0FBUzs7O3NCQUloQixLQUFLO3NCQUlMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thdWlHYUV2ZW50XScgfSlcbmV4cG9ydCBjbGFzcyBHYUV2ZW50RGlyZWN0aXZlIHtcblx0QElucHV0KCkgZ2FFdmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZ2FTZXJ2aWNlOiBHQVNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRvbkNsaWNrKGUpIHtcblx0XHRjb25zdCBuYXRpdmVFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuXHRcdGlmICh0aGlzLmdhRXZlbnQpIHtcblx0XHRcdHRoaXMuZ2FTZXJ2aWNlLnRyaWdnZXJFdmVudChuYXRpdmVFbC50YWdOYW1lLnRvTG93ZXJDYXNlKCksICdjbGljaycsIG5hdGl2ZUVsLmlubmVyVGV4dCwgdGhpcy5nYUV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nYVNlcnZpY2UudHJpZ2dlckV2ZW50KG5hdGl2ZUVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgJ2NsaWNrJywgbmF0aXZlRWwuaW5uZXJUZXh0KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
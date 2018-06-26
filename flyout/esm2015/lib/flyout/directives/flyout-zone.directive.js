/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
export class FlyoutZoneDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.class = true;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    contains(element) {
        if (this.auiFlyoutZone === false) {
            return false;
        }
        return this.element.contains(element);
    }
}
FlyoutZoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyoutZone]',
                exportAs: 'auiFlyoutZone',
            },] },
];
/** @nocollapse */
FlyoutZoneDirective.ctorParameters = () => [
    { type: ElementRef }
];
FlyoutZoneDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.m-flyout__content',] }],
    auiFlyoutZone: [{ type: Input }]
};
function FlyoutZoneDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutZoneDirective.prototype.class;
    /** @type {?} */
    FlyoutZoneDirective.prototype.auiFlyoutZone;
    /** @type {?} */
    FlyoutZoneDirective.prototype.element;
    /** @type {?} */
    FlyoutZoneDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LXpvbmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmx5b3V0LyIsInNvdXJjZXMiOlsibGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC16b25lLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0xRSxNQUFNOzs7O0lBUUwsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkFOTSxJQUFJO1FBT25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDN0M7Ozs7O0lBRU0sUUFBUSxDQUFDLE9BQW9CO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7WUFyQnZDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTthQUN6Qjs7OztZQUxtQixVQUFVOzs7b0JBUTVCLFdBQVcsU0FBQyx5QkFBeUI7NEJBRXJDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0Wm9uZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dFpvbmUnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRab25lRGlyZWN0aXZlIHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0X19jb250ZW50JykgY2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlGbHlvdXRab25lOiBib29sZWFuO1xuXG5cdHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdHB1YmxpYyBjb250YWlucyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmF1aUZseW91dFpvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5jb250YWlucyhlbGVtZW50KTtcblx0fVxufVxuIl19
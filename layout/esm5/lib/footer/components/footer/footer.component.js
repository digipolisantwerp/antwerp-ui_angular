/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { FooterContentDirective } from '../../directives/content.directive';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasCols = this.footerContent !== undefined;
        var /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-footer',
                    template: "<footer class=\"aui-footer\" [ngClass]=\"{'extended': isExtended}\">\n    <ng-content select=\"[auiFooterContent]\"></ng-content>\n    <ng-content select=\"[auiFooterBottom]\"></ng-content>\n</footer>\n",
                    styles: [":host{display:block}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FooterComponent.propDecorators = {
        footerContent: [{ type: ContentChild, args: [FooterContentDirective,] }]
    };
    return FooterComponent;
}());
export { FooterComponent };
function FooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FooterComponent.prototype.footerContent;
    /** @type {?} */
    FooterComponent.prototype.isExtended;
    /** @type {?} */
    FooterComponent.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9mb290ZXIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQXVCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQWdCM0UseUJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzBCQUZiLEtBQUs7S0FFWTs7OztJQUU5QywrQ0FBcUI7OztJQUFyQjtRQUNDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQztRQUNqRCxxQkFBTSxZQUFZLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFakQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hCO0tBQ0Q7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw0TUFJVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWIrRSxpQkFBaUI7OztnQ0FlL0YsWUFBWSxTQUFDLHNCQUFzQjs7MEJBZnJDOztTQWNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGZvb3RlciBjbGFzcz1cImF1aS1mb290ZXJcIiBbbmdDbGFzc109XCJ7J2V4dGVuZGVkJzogaXNFeHRlbmRlZH1cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpRm9vdGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUZvb3RlckJvdHRvbV1cIj48L25nLWNvbnRlbnQ+XG48L2Zvb3Rlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdEBDb250ZW50Q2hpbGQoRm9vdGVyQ29udGVudERpcmVjdGl2ZSkgZm9vdGVyQ29udGVudDogRm9vdGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGlzRXh0ZW5kZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuXHRcdGNvbnN0IGhhc0NvbHMgPSB0aGlzLmZvb3RlckNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNDb2xzICE9PSB0aGlzLmlzRXh0ZW5kZWQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmlzRXh0ZW5kZWQgPSBoYXNDb2xzO1xuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=
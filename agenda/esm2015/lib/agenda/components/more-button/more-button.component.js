/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MORE_LABEL } from '../../agenda.conf';
export class MoreButtonComponent {
    /**
     * @param {?} label
     */
    constructor(label) {
        this.label = label;
        this.clickMore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitClickMore(event) {
        event.stopPropagation();
        this.clickMore.emit();
    }
}
MoreButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-more-button',
                template: `<div class="o-agenda__more">
	<button (click)="emitClickMore($event)" *ngIf="hiddenEvents > 0" class="o-agenda__more-button">
		{{ hiddenEvents }} {{ label }}
	</button>
</div>
`,
            },] },
];
/** @nocollapse */
MoreButtonComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MORE_LABEL,] }] }
];
MoreButtonComponent.propDecorators = {
    hiddenEvents: [{ type: Input }],
    clickMore: [{ type: Output }]
};
function MoreButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MoreButtonComponent.prototype.hiddenEvents;
    /** @type {?} */
    MoreButtonComponent.prototype.clickMore;
    /** @type {?} */
    MoreButtonComponent.prototype.label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9jb21wb25lbnRzL21vcmUtYnV0dG9uL21vcmUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVy9DLE1BQU07Ozs7SUFJTCxZQUM0QixLQUFLO1FBQUwsVUFBSyxHQUFMLEtBQUssQ0FBQTt5QkFISixJQUFJLFlBQVksRUFBRTtLQUkzQzs7Ozs7SUFFRyxhQUFhLENBQUMsS0FBaUI7UUFDckMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7WUFuQnZCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7O0NBS1Y7YUFDQTs7Ozs0Q0FNRSxNQUFNLFNBQUMsVUFBVTs7OzJCQUpsQixLQUFLO3dCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1PUkVfTEFCRUwgfSBmcm9tICcuLi8uLi9hZ2VuZGEuY29uZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9yZS1idXR0b24nLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvLWFnZW5kYV9fbW9yZVwiPlxuXHQ8YnV0dG9uIChjbGljayk9XCJlbWl0Q2xpY2tNb3JlKCRldmVudClcIiAqbmdJZj1cImhpZGRlbkV2ZW50cyA+IDBcIiBjbGFzcz1cIm8tYWdlbmRhX19tb3JlLWJ1dHRvblwiPlxuXHRcdHt7IGhpZGRlbkV2ZW50cyB9fSB7eyBsYWJlbCB9fVxuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9yZUJ1dHRvbkNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBoaWRkZW5FdmVudHM6IG51bWJlcjtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja01vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChNT1JFX0xBQkVMKSBwdWJsaWMgbGFiZWxcblx0KSB7fVxuXG5cdHB1YmxpYyBlbWl0Q2xpY2tNb3JlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5jbGlja01vcmUuZW1pdCgpO1xuXHR9XG59XG4iXX0=
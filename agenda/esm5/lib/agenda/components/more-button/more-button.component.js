/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MORE_LABEL } from '../../agenda.conf';
var MoreButtonComponent = /** @class */ (function () {
    function MoreButtonComponent(label) {
        this.label = label;
        this.clickMore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MoreButtonComponent.prototype.emitClickMore = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.clickMore.emit();
    };
    MoreButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda-more-button',
                    template: "<div class=\"o-agenda__more\">\n\t<button (click)=\"emitClickMore($event)\" *ngIf=\"hiddenEvents > 0\" class=\"o-agenda__more-button\">\n\t\t{{ hiddenEvents }} {{ label }}\n\t</button>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    MoreButtonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MORE_LABEL,] }] }
    ]; };
    MoreButtonComponent.propDecorators = {
        hiddenEvents: [{ type: Input }],
        clickMore: [{ type: Output }]
    };
    return MoreButtonComponent;
}());
export { MoreButtonComponent };
function MoreButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MoreButtonComponent.prototype.hiddenEvents;
    /** @type {?} */
    MoreButtonComponent.prototype.clickMore;
    /** @type {?} */
    MoreButtonComponent.prototype.label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9jb21wb25lbnRzL21vcmUtYnV0dG9uL21vcmUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQWU5Qyw2QkFDNEIsS0FBSztRQUFMLFVBQUssR0FBTCxLQUFLLENBQUE7eUJBSEosSUFBSSxZQUFZLEVBQUU7S0FJM0M7Ozs7O0lBRUcsMkNBQWE7Ozs7Y0FBQyxLQUFpQjtRQUNyQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O2dCQW5CdkIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxvTUFLVjtpQkFDQTs7OztnREFNRSxNQUFNLFNBQUMsVUFBVTs7OytCQUpsQixLQUFLOzRCQUNMLE1BQU07OzhCQWZSOztTQWFhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTU9SRV9MQUJFTCB9IGZyb20gJy4uLy4uL2FnZW5kYS5jb25mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb3JlLWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tYWdlbmRhX19tb3JlXCI+XG5cdDxidXR0b24gKGNsaWNrKT1cImVtaXRDbGlja01vcmUoJGV2ZW50KVwiICpuZ0lmPVwiaGlkZGVuRXZlbnRzID4gMFwiIGNsYXNzPVwiby1hZ2VuZGFfX21vcmUtYnV0dG9uXCI+XG5cdFx0e3sgaGlkZGVuRXZlbnRzIH19IHt7IGxhYmVsIH19XG5cdDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb3JlQnV0dG9uQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGhpZGRlbkV2ZW50czogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE1PUkVfTEFCRUwpIHB1YmxpYyBsYWJlbFxuXHQpIHt9XG5cblx0cHVibGljIGVtaXRDbGlja01vcmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==
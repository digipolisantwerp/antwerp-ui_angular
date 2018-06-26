/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FlyoutButtonSize } from '../../types/flyout-button.types';
var FlyoutButtonComponent = /** @class */ (function () {
    function FlyoutButtonComponent() {
        this.buttonClassNames = {
            tiny: 'a-button--tiny',
            small: 'a-button--small',
            auto: '',
            large: 'a-button--large',
        };
        this.buttonSize = FlyoutButtonSize.Auto;
        this.outline = false;
        this.flyoutOpen = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    FlyoutButtonComponent.prototype.handleFlyoutChanged = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.flyoutOpen = open;
    };
    FlyoutButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-flyout-button',
                    template: "<div auiFlyout [align]=\"align\" [size]=\"flyoutSize\" (opened)=\"handleFlyoutChanged(true)\" (closed)=\"handleFlyoutChanged(false)\">\n    <button auiFlyoutAction title=\"{{ title }}\" [ngClass]=\"[buttonClassNames[buttonSize], (icon && label) ? 'has-icon-left' : '', (icon && !label) ? 'has-icon' : '', outline ? 'a-button-outline' : 'a-button']\">\n        <span class=\"{{ icon }}\"></span>\n        {{ label }}\n    </button>\n    <div auiFlyoutZone>\n        <ng-container *ngIf=\"flyoutOpen\">\n            <ng-content></ng-content>\n        </ng-container>\n    </div>\n</div>\n",
                },] },
    ];
    FlyoutButtonComponent.propDecorators = {
        title: [{ type: Input }],
        label: [{ type: Input }],
        icon: [{ type: Input }],
        align: [{ type: Input }],
        buttonSize: [{ type: Input }],
        flyoutSize: [{ type: Input }],
        outline: [{ type: Input }]
    };
    return FlyoutButtonComponent;
}());
export { FlyoutButtonComponent };
function FlyoutButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutButtonComponent.prototype.buttonClassNames;
    /** @type {?} */
    FlyoutButtonComponent.prototype.title;
    /** @type {?} */
    FlyoutButtonComponent.prototype.label;
    /** @type {?} */
    FlyoutButtonComponent.prototype.icon;
    /** @type {?} */
    FlyoutButtonComponent.prototype.align;
    /** @type {?} */
    FlyoutButtonComponent.prototype.buttonSize;
    /** @type {?} */
    FlyoutButtonComponent.prototype.flyoutSize;
    /** @type {?} */
    FlyoutButtonComponent.prototype.outline;
    /** @type {?} */
    FlyoutButtonComponent.prototype.flyoutOpen;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0LWJ1dHRvbi9jb21wb25lbnRzL2ZseW91dC1idXR0b24vZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Z0NBa0J4QztZQUN6QixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsaUJBQWlCO1NBQ3hCOzBCQU11QyxnQkFBZ0IsQ0FBQyxJQUFJO3VCQUUxQyxLQUFLOzBCQUVKLEtBQUs7Ozs7OztJQUVsQixtREFBbUI7Ozs7Y0FBQyxJQUFhO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzs7Z0JBbEN4QixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDRrQkFXVjtpQkFDQTs7O3dCQVNDLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7O2dDQWpDUDs7U0FtQmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGbHlvdXRCdXR0b25TaXplIH0gZnJvbSAnLi4vLi4vdHlwZXMvZmx5b3V0LWJ1dHRvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1mbHlvdXQtYnV0dG9uJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGF1aUZseW91dCBbYWxpZ25dPVwiYWxpZ25cIiBbc2l6ZV09XCJmbHlvdXRTaXplXCIgKG9wZW5lZCk9XCJoYW5kbGVGbHlvdXRDaGFuZ2VkKHRydWUpXCIgKGNsb3NlZCk9XCJoYW5kbGVGbHlvdXRDaGFuZ2VkKGZhbHNlKVwiPlxuICAgIDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIHRpdGxlPVwie3sgdGl0bGUgfX1cIiBbbmdDbGFzc109XCJbYnV0dG9uQ2xhc3NOYW1lc1tidXR0b25TaXplXSwgKGljb24gJiYgbGFiZWwpID8gJ2hhcy1pY29uLWxlZnQnIDogJycsIChpY29uICYmICFsYWJlbCkgPyAnaGFzLWljb24nIDogJycsIG91dGxpbmUgPyAnYS1idXR0b24tb3V0bGluZScgOiAnYS1idXR0b24nXVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7IGljb24gfX1cIj48L3NwYW4+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBhdWlGbHlvdXRab25lPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmx5b3V0T3BlblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QnV0dG9uQ29tcG9uZW50IHtcblx0cHVibGljIGJ1dHRvbkNsYXNzTmFtZXMgPSB7XG5cdFx0dGlueTogJ2EtYnV0dG9uLS10aW55Jyxcblx0XHRzbWFsbDogJ2EtYnV0dG9uLS1zbWFsbCcsXG5cdFx0YXV0bzogJycsXG5cdFx0bGFyZ2U6ICdhLWJ1dHRvbi0tbGFyZ2UnLFxuXHR9O1xuXG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGljb246IHN0cmluZztcblx0QElucHV0KCkgYWxpZ246IHN0cmluZztcblx0QElucHV0KCkgYnV0dG9uU2l6ZTogRmx5b3V0QnV0dG9uU2l6ZSA9IEZseW91dEJ1dHRvblNpemUuQXV0bztcblx0QElucHV0KCkgZmx5b3V0U2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cblx0cHVibGljIGZseW91dE9wZW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgaGFuZGxlRmx5b3V0Q2hhbmdlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5mbHlvdXRPcGVuID0gb3Blbjtcblx0fVxufVxuIl19
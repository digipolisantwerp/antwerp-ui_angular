/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FlyoutButtonSize } from '../../types/flyout-button.types';
export class FlyoutButtonComponent {
    constructor() {
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
    handleFlyoutChanged(open) {
        this.flyoutOpen = open;
    }
}
FlyoutButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-flyout-button',
                template: `<div auiFlyout [align]="align" [size]="flyoutSize" (opened)="handleFlyoutChanged(true)" (closed)="handleFlyoutChanged(false)">
    <button auiFlyoutAction title="{{ title }}" [ngClass]="[buttonClassNames[buttonSize], (icon && label) ? 'has-icon-left' : '', (icon && !label) ? 'has-icon' : '', outline ? 'a-button-outline' : 'a-button']">
        <span class="{{ icon }}"></span>
        {{ label }}
    </button>
    <div auiFlyoutZone>
        <ng-container *ngIf="flyoutOpen">
            <ng-content></ng-content>
        </ng-container>
    </div>
</div>
`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0LWJ1dHRvbi9jb21wb25lbnRzL2ZseW91dC1idXR0b24vZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBaUJuRSxNQUFNOztnQ0FDcUI7WUFDekIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLGlCQUFpQjtTQUN4QjswQkFNdUMsZ0JBQWdCLENBQUMsSUFBSTt1QkFFMUMsS0FBSzswQkFFSixLQUFLOzs7Ozs7SUFFbEIsbUJBQW1CLENBQUMsSUFBYTtRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7OztZQWxDeEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXVjthQUNBOzs7b0JBU0MsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmx5b3V0QnV0dG9uU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2ZseW91dC1idXR0b24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmx5b3V0LWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQgW2FsaWduXT1cImFsaWduXCIgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIChvcGVuZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZCh0cnVlKVwiIChjbG9zZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZChmYWxzZSlcIj5cbiAgICA8YnV0dG9uIGF1aUZseW91dEFjdGlvbiB0aXRsZT1cInt7IHRpdGxlIH19XCIgW25nQ2xhc3NdPVwiW2J1dHRvbkNsYXNzTmFtZXNbYnV0dG9uU2l6ZV0sIChpY29uICYmIGxhYmVsKSA/ICdoYXMtaWNvbi1sZWZ0JyA6ICcnLCAoaWNvbiAmJiAhbGFiZWwpID8gJ2hhcy1pY29uJyA6ICcnLCBvdXRsaW5lID8gJ2EtYnV0dG9uLW91dGxpbmUnIDogJ2EtYnV0dG9uJ11cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBpY29uIH19XCI+PC9zcGFuPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgYXVpRmx5b3V0Wm9uZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZseW91dE9wZW5cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEJ1dHRvbkNvbXBvbmVudCB7XG5cdHB1YmxpYyBidXR0b25DbGFzc05hbWVzID0ge1xuXHRcdHRpbnk6ICdhLWJ1dHRvbi0tdGlueScsXG5cdFx0c21hbGw6ICdhLWJ1dHRvbi0tc21hbGwnLFxuXHRcdGF1dG86ICcnLFxuXHRcdGxhcmdlOiAnYS1idXR0b24tLWxhcmdlJyxcblx0fTtcblxuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJ1dHRvblNpemU6IEZseW91dEJ1dHRvblNpemUgPSBGbHlvdXRCdXR0b25TaXplLkF1dG87XG5cdEBJbnB1dCgpIGZseW91dFNpemU6IHN0cmluZztcblx0QElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG5cdHB1YmxpYyBmbHlvdXRPcGVuID0gZmFsc2U7XG5cblx0cHVibGljIGhhbmRsZUZseW91dENoYW5nZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZmx5b3V0T3BlbiA9IG9wZW47XG5cdH1cbn1cbiJdfQ==
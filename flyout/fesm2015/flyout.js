import { Directive, ElementRef, Input, HostBinding, Injectable, ContentChild, Output, EventEmitter, Host, HostListener, Inject, PLATFORM_ID, NgModule, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subject as Subject$1 } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutZoneDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutService {
    constructor() {
        this.subject = new Subject();
    }
    /**
     * @return {?}
     */
    close() {
        this.subject.next({
            close: true,
        });
    }
}
FlyoutService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const FlyoutSize = {
    Auto: 'auto',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Full: 'full',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutDirective {
    /**
     * @param {?} elementRef
     * @param {?} flyoutService
     */
    constructor(elementRef, flyoutService) {
        this.elementRef = elementRef;
        this.flyoutService = flyoutService;
        this.flyoutClass = true;
        this.class = '';
        this.size = FlyoutSize.Auto;
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.flyoutOpened = false;
        this.destroyed$ = new Subject$1();
        this.element = this.elementRef.nativeElement;
        this.flyoutService.subject
            .pipe(takeUntil(this.destroyed$))
            .subscribe((res) => {
            this.close();
        });
    }
    /**
     * @return {?}
     */
    get flyoutAlignRight() {
        return this.align === 'right';
    }
    /**
     * @return {?}
     */
    get flyoutSmall() {
        return this.size === 'small';
    }
    /**
     * @return {?}
     */
    get flyoutMedium() {
        return this.size === 'medium';
    }
    /**
     * @return {?}
     */
    get flyoutLarge() {
        return this.size === 'large';
    }
    /**
     * @return {?}
     */
    get flyoutFull() {
        return this.size === 'full';
    }
    /**
     * @return {?}
     */
    get flyoutOpen() {
        return this.flyoutOpened;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next(true);
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.flyoutOpened) {
            this.flyoutOpened = true;
            this.opened.emit(undefined);
        }
    }
    /**
     * @return {?}
     */
    close() {
        if (this.flyoutOpened) {
            this.flyoutOpened = false;
            this.closed.emit(undefined);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isInClosableZone(element) {
        if (!this.flyoutZone) {
            return false;
        }
        return this.flyoutZone.contains(element);
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.flyoutOpened;
    }
}
FlyoutDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyout]',
                exportAs: 'auiFlyout',
            },] },
];
/** @nocollapse */
FlyoutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: FlyoutService }
];
FlyoutDirective.propDecorators = {
    flyoutClass: [{ type: HostBinding, args: ['class.m-flyout',] }],
    flyoutAlignRight: [{ type: HostBinding, args: ['class.m-flyout--right',] }],
    flyoutSmall: [{ type: HostBinding, args: ['class.m-flyout--sm',] }],
    flyoutMedium: [{ type: HostBinding, args: ['class.m-flyout--md',] }],
    flyoutLarge: [{ type: HostBinding, args: ['class.m-flyout--lg',] }],
    flyoutFull: [{ type: HostBinding, args: ['class.m-flyout--full',] }],
    flyoutOpen: [{ type: HostBinding, args: ['class.is-open',] }],
    class: [{ type: Input }],
    size: [{ type: Input }],
    align: [{ type: Input }],
    toggleClick: [{ type: Input }],
    activateOnFocus: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    flyoutZone: [{ type: ContentChild, args: [FlyoutZoneDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutActionDirective {
    /**
     * @param {?} flyout
     * @param {?} platformId
     * @param {?} elementRef
     */
    constructor(flyout, platformId, elementRef) {
        this.flyout = flyout;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.class = true;
        /**
         * This property is needed for dropdown not to open and instantly closed
         * because the click event will be fired after the focus event so the click event will close the flyout
         */
        this.openedByFocus = false;
        // Define this method in the constructor so "this" points to "this class"
        this.closeDropdownOnOutsideClick = (event) => {
            this.closeIfInClosableZone(event);
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isPlatformBrowser()) {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.flyout.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.flyout.isOpened() && this.flyout.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.openedByFocus = true;
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (event.relatedTarget && !this.flyout.isInClosableZone(/** @type {?} */ (event.relatedTarget))
            && event.relatedTarget !== this.elementRef.nativeElement) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.flyout.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (!this.flyout.isOpened()) {
            return;
        }
        this.flyout.close();
        document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkIfInClosableZone(event) {
        return !this.flyout.isInClosableZone(/** @type {?} */ (event.target))
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeIfInClosableZone(event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.checkIfInClosableZone(event)) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
    }
}
FlyoutActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyoutAction]',
                exportAs: 'auiFlyoutAction',
            },] },
];
/** @nocollapse */
FlyoutActionDirective.ctorParameters = () => [
    { type: FlyoutDirective, decorators: [{ type: Host }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
FlyoutActionDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.aui-flyout-action',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutCloseDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives = [
    FlyoutActionDirective,
    FlyoutCloseDirective,
    FlyoutZoneDirective,
    FlyoutDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Services = [
    FlyoutService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutModule {
}
FlyoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    Directives,
                ],
                exports: [
                    Directives,
                ],
                providers: [
                    Services,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const FlyoutButtonSize = {
    Auto: 'auto',
    Tiny: 'tiny',
    Small: 'small',
    Large: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    FlyoutButtonComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutButtonModule {
}
FlyoutButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FlyoutModule,
                ],
                declarations: [
                    Components,
                ],
                exports: [
                    Components,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FlyoutModule, FlyoutActionDirective, FlyoutCloseDirective, FlyoutZoneDirective, FlyoutDirective, FlyoutService, FlyoutSize, FlyoutButtonModule, FlyoutButtonComponent, FlyoutButtonSize, Components as ɵc, Directives as ɵa, Services as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC16b25lLmRpcmVjdGl2ZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvc2VydmljZXMvZmx5b3V0LnNlcnZpY2UudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3R5cGVzL2ZseW91dC50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1hY3Rpb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9mbHlvdXQubW9kdWxlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC1idXR0b24vdHlwZXMvZmx5b3V0LWJ1dHRvbi50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0Wm9uZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dFpvbmUnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRab25lRGlyZWN0aXZlIHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0X19jb250ZW50JykgY2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlGbHlvdXRab25lOiBib29sZWFuO1xuXG5cdHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdHB1YmxpYyBjb250YWlucyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmF1aUZseW91dFpvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5jb250YWlucyhlbGVtZW50KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmltcG9ydCB7IEZseW91dFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZseW91dFNlcnZpY2Uge1xuXHQvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG5cdHB1YmxpYyBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rmx5b3V0U3RhdGU+KCk7XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMuc3ViamVjdC5uZXh0KHtcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgZW51bSBGbHlvdXRTaXplIHtcblx0QXV0byA9ICdhdXRvJyxcblx0U21hbGwgPSAnc21hbGwnLFxuXHRNZWRpdW0gPSAnbWVkaXVtJyxcblx0TGFyZ2UgPSAnbGFyZ2UnLFxuXHRGdWxsID0gJ2Z1bGwnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZseW91dFN0YXRlIHtcblx0Y2xvc2U6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdENvbnRlbnRDaGlsZCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mbHlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBGbHlvdXRTaXplIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0XScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dCcpIGZseW91dENsYXNzID0gdHJ1ZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tcmlnaHQnKSBnZXQgZmx5b3V0QWxpZ25SaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gJ3JpZ2h0Jztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1zbScpIGdldCBmbHlvdXRTbWFsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLW1kJykgZ2V0IGZseW91dE1lZGl1bSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1sZycpIGdldCBmbHlvdXRMYXJnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLWZ1bGwnKSBnZXQgZmx5b3V0RnVsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnZnVsbCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgZ2V0IGZseW91dE9wZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0T3BlbmVkO1xuXHR9XG5cblx0QElucHV0KCkgcHVibGljIGNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBGbHlvdXRTaXplID0gRmx5b3V0U2l6ZS5BdXRvO1xuXHRASW5wdXQoKSBwdWJsaWMgYWxpZ246IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHRvZ2dsZUNsaWNrID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2YXRlT25Gb2N1cyA9IGZhbHNlO1xuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZChGbHlvdXRab25lRGlyZWN0aXZlKSBwdWJsaWMgZmx5b3V0Wm9uZTogRmx5b3V0Wm9uZURpcmVjdGl2ZTtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRwcml2YXRlIGZseW91dE9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZseW91dFNlcnZpY2U6IEZseW91dFNlcnZpY2UpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMuZmx5b3V0U2VydmljZS5zdWJqZWN0XG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5mbHlvdXRPcGVuZWQpIHtcblx0XHRcdHRoaXMuZmx5b3V0T3BlbmVkID0gdHJ1ZTtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQodW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0T3BlbmVkKSB7XG5cdFx0XHR0aGlzLmZseW91dE9wZW5lZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCh1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpc0luQ2xvc2FibGVab25lKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmZseW91dFpvbmUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRab25lLmNvbnRhaW5zKGVsZW1lbnQpO1xuXHR9XG5cblx0cHVibGljIGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZseW91dE9wZW5lZDtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEhvc3QsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dEFjdGlvbl0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dEFjdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEFjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktZmx5b3V0LWFjdGlvbicpIGNsYXNzID0gdHJ1ZTtcblxuXHQvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG5lZWRlZCBmb3IgZHJvcGRvd24gbm90IHRvIG9wZW4gYW5kIGluc3RhbnRseSBjbG9zZWRcbiAgICAgKiBiZWNhdXNlIHRoZSBjbGljayBldmVudCB3aWxsIGJlIGZpcmVkIGFmdGVyIHRoZSBmb2N1cyBldmVudCBzbyB0aGUgY2xpY2sgZXZlbnQgd2lsbCBjbG9zZSB0aGUgZmx5b3V0XG4gICAgICovXG5cdHByaXZhdGUgb3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRwcml2YXRlIGNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBIb3N0KCkgcHVibGljIGZseW91dDogRmx5b3V0RGlyZWN0aXZlLFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0XHQvLyBEZWZpbmUgdGhpcyBtZXRob2QgaW4gdGhlIGNvbnN0cnVjdG9yIHNvIFwidGhpc1wiIHBvaW50cyB0byBcInRoaXMgY2xhc3NcIlxuXHRcdHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZUlmSW5DbG9zYWJsZVpvbmUoZXZlbnQpO1xuXHRcdH07XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdG9uQ2xpY2soKSB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0LmFjdGl2YXRlT25Gb2N1cyAmJiB0aGlzLm9wZW5lZEJ5Rm9jdXMpIHtcblx0XHRcdHRoaXMub3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpICYmIHRoaXMuZmx5b3V0LnRvZ2dsZUNsaWNrKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcblx0b25Gb2N1cygpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuZWRCeUZvY3VzID0gdHJ1ZTtcblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG5cdG9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC5yZWxhdGVkVGFyZ2V0KVxuXHRcdFx0JiYgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvcGVuKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5jbG9zZSgpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmSW5DbG9zYWJsZVpvbmUoZXZlbnQpIHtcblx0XHRyZXR1cm4gIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC50YXJnZXQpXG5cdFx0XHRcdCYmIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcblx0XHRcdFx0JiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlSWZJbkNsb3NhYmxlWm9uZShldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNoZWNrSWZJbkNsb3NhYmxlWm9uZShldmVudCkpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzUGxhdGZvcm1Ccm93c2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dENsb3NlXScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Q2xvc2UnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRDbG9zZURpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmbHlvdXRTZXJ2aWNlOiBGbHlvdXRTZXJ2aWNlKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0cHVibGljIG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5mbHlvdXRTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Q2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRGbHlvdXRBY3Rpb25EaXJlY3RpdmUsXG5cdEZseW91dENsb3NlRGlyZWN0aXZlLFxuXHRGbHlvdXRab25lRGlyZWN0aXZlLFxuXHRGbHlvdXREaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4vZmx5b3V0LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdEZseW91dFNlcnZpY2UsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRNb2R1bGUge31cbiIsImV4cG9ydCBlbnVtIEZseW91dEJ1dHRvblNpemUge1xuXHRBdXRvID0gJ2F1dG8nLFxuXHRUaW55ID0gJ3RpbnknLFxuXHRTbWFsbCA9ICdzbWFsbCcsXG5cdExhcmdlID0gJ2xhcmdlJyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmx5b3V0QnV0dG9uU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2ZseW91dC1idXR0b24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmx5b3V0LWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQgW2FsaWduXT1cImFsaWduXCIgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIChvcGVuZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZCh0cnVlKVwiIChjbG9zZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZChmYWxzZSlcIj5cbiAgICA8YnV0dG9uIGF1aUZseW91dEFjdGlvbiB0aXRsZT1cInt7IHRpdGxlIH19XCIgW25nQ2xhc3NdPVwiW2J1dHRvbkNsYXNzTmFtZXNbYnV0dG9uU2l6ZV0sIChpY29uICYmIGxhYmVsKSA/ICdoYXMtaWNvbi1sZWZ0JyA6ICcnLCAoaWNvbiAmJiAhbGFiZWwpID8gJ2hhcy1pY29uJyA6ICcnLCBvdXRsaW5lID8gJ2EtYnV0dG9uLW91dGxpbmUnIDogJ2EtYnV0dG9uJ11cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBpY29uIH19XCI+PC9zcGFuPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgYXVpRmx5b3V0Wm9uZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZseW91dE9wZW5cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEJ1dHRvbkNvbXBvbmVudCB7XG5cdHB1YmxpYyBidXR0b25DbGFzc05hbWVzID0ge1xuXHRcdHRpbnk6ICdhLWJ1dHRvbi0tdGlueScsXG5cdFx0c21hbGw6ICdhLWJ1dHRvbi0tc21hbGwnLFxuXHRcdGF1dG86ICcnLFxuXHRcdGxhcmdlOiAnYS1idXR0b24tLWxhcmdlJyxcblx0fTtcblxuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJ1dHRvblNpemU6IEZseW91dEJ1dHRvblNpemUgPSBGbHlvdXRCdXR0b25TaXplLkF1dG87XG5cdEBJbnB1dCgpIGZseW91dFNpemU6IHN0cmluZztcblx0QElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG5cdHB1YmxpYyBmbHlvdXRPcGVuID0gZmFsc2U7XG5cblx0cHVibGljIGhhbmRsZUZseW91dENoYW5nZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZmx5b3V0T3BlbiA9IG9wZW47XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRGbHlvdXRCdXR0b25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJy4uL2ZseW91dC9mbHlvdXQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QnV0dG9uTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFjQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3FCQU5NLElBQUk7UUFPbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUM3Qzs7Ozs7SUFFTSxRQUFRLENBQUMsT0FBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OztZQXJCdkMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxp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
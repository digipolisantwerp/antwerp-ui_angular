import { Directive, ElementRef, Input, HostBinding, Injectable, ContentChild, Output, EventEmitter, Host, HostListener, Inject, PLATFORM_ID, NgModule, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subject as Subject$1 } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutZoneDirective = /** @class */ (function () {
    function FlyoutZoneDirective(elementRef) {
        this.elementRef = elementRef;
        this.class = true;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    FlyoutZoneDirective.prototype.contains = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.auiFlyoutZone === false) {
            return false;
        }
        return this.element.contains(element);
    };
    FlyoutZoneDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyoutZone]',
                    exportAs: 'auiFlyoutZone',
                },] },
    ];
    /** @nocollapse */
    FlyoutZoneDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlyoutZoneDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.m-flyout__content',] }],
        auiFlyoutZone: [{ type: Input }]
    };
    return FlyoutZoneDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutService = /** @class */ (function () {
    function FlyoutService() {
        this.subject = new Subject();
    }
    /**
     * @return {?}
     */
    FlyoutService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.subject.next({
            close: true,
        });
    };
    FlyoutService.decorators = [
        { type: Injectable },
    ];
    return FlyoutService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FlyoutSize = {
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
var FlyoutDirective = /** @class */ (function () {
    function FlyoutDirective(elementRef, flyoutService) {
        var _this = this;
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
            .subscribe(function (res) {
            _this.close();
        });
    }
    Object.defineProperty(FlyoutDirective.prototype, "flyoutAlignRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.align === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutMedium", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutFull", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'full';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.flyoutOpened;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next(true);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.flyoutOpened) {
            this.flyoutOpened = true;
            this.opened.emit(undefined);
        }
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.flyoutOpened) {
            this.flyoutOpened = false;
            this.closed.emit(undefined);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    FlyoutDirective.prototype.isInClosableZone = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this.flyoutZone) {
            return false;
        }
        return this.flyoutZone.contains(element);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.flyoutOpened;
    };
    FlyoutDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyout]',
                    exportAs: 'auiFlyout',
                },] },
    ];
    /** @nocollapse */
    FlyoutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FlyoutService }
    ]; };
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
    return FlyoutDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutActionDirective = /** @class */ (function () {
    function FlyoutActionDirective(flyout, platformId, elementRef) {
        var _this = this;
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
        this.closeDropdownOnOutsideClick = function (event) {
            _this.closeIfInClosableZone(event);
        };
    }
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isPlatformBrowser()) {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.openedByFocus = true;
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (event.relatedTarget && !this.flyout.isInClosableZone(/** @type {?} */ (event.relatedTarget))
            && event.relatedTarget !== this.elementRef.nativeElement) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.flyout.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (!this.flyout.isOpened()) {
            return;
        }
        this.flyout.close();
        document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.checkIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.flyout.isInClosableZone(/** @type {?} */ (event.target))
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.closeIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.checkIfInClosableZone(event)) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.isPlatformBrowser = /**
     * @return {?}
     */
    function () {
        return isPlatformBrowser(this.platformId);
    };
    FlyoutActionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyoutAction]',
                    exportAs: 'auiFlyoutAction',
                },] },
    ];
    /** @nocollapse */
    FlyoutActionDirective.ctorParameters = function () { return [
        { type: FlyoutDirective, decorators: [{ type: Host }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    FlyoutActionDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.aui-flyout-action',] }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return FlyoutActionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    FlyoutActionDirective,
    FlyoutCloseDirective,
    FlyoutZoneDirective,
    FlyoutDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    FlyoutService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutModule = /** @class */ (function () {
    function FlyoutModule() {
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
    return FlyoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FlyoutButtonSize = {
    Auto: 'auto',
    Tiny: 'tiny',
    Small: 'small',
    Large: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    FlyoutButtonComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutButtonModule = /** @class */ (function () {
    function FlyoutButtonModule() {
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
    return FlyoutButtonModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC16b25lLmRpcmVjdGl2ZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvc2VydmljZXMvZmx5b3V0LnNlcnZpY2UudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3R5cGVzL2ZseW91dC50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1hY3Rpb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9mbHlvdXQubW9kdWxlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC1idXR0b24vdHlwZXMvZmx5b3V0LWJ1dHRvbi50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0Wm9uZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dFpvbmUnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRab25lRGlyZWN0aXZlIHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0X19jb250ZW50JykgY2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlGbHlvdXRab25lOiBib29sZWFuO1xuXG5cdHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdHB1YmxpYyBjb250YWlucyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmF1aUZseW91dFpvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5jb250YWlucyhlbGVtZW50KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmltcG9ydCB7IEZseW91dFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZseW91dFNlcnZpY2Uge1xuXHQvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG5cdHB1YmxpYyBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rmx5b3V0U3RhdGU+KCk7XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMuc3ViamVjdC5uZXh0KHtcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgZW51bSBGbHlvdXRTaXplIHtcblx0QXV0byA9ICdhdXRvJyxcblx0U21hbGwgPSAnc21hbGwnLFxuXHRNZWRpdW0gPSAnbWVkaXVtJyxcblx0TGFyZ2UgPSAnbGFyZ2UnLFxuXHRGdWxsID0gJ2Z1bGwnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZseW91dFN0YXRlIHtcblx0Y2xvc2U6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdENvbnRlbnRDaGlsZCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mbHlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBGbHlvdXRTaXplIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0XScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dCcpIGZseW91dENsYXNzID0gdHJ1ZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tcmlnaHQnKSBnZXQgZmx5b3V0QWxpZ25SaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gJ3JpZ2h0Jztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1zbScpIGdldCBmbHlvdXRTbWFsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLW1kJykgZ2V0IGZseW91dE1lZGl1bSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1sZycpIGdldCBmbHlvdXRMYXJnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLWZ1bGwnKSBnZXQgZmx5b3V0RnVsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnZnVsbCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgZ2V0IGZseW91dE9wZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0T3BlbmVkO1xuXHR9XG5cblx0QElucHV0KCkgcHVibGljIGNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBGbHlvdXRTaXplID0gRmx5b3V0U2l6ZS5BdXRvO1xuXHRASW5wdXQoKSBwdWJsaWMgYWxpZ246IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHRvZ2dsZUNsaWNrID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2YXRlT25Gb2N1cyA9IGZhbHNlO1xuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZChGbHlvdXRab25lRGlyZWN0aXZlKSBwdWJsaWMgZmx5b3V0Wm9uZTogRmx5b3V0Wm9uZURpcmVjdGl2ZTtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRwcml2YXRlIGZseW91dE9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZseW91dFNlcnZpY2U6IEZseW91dFNlcnZpY2UpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMuZmx5b3V0U2VydmljZS5zdWJqZWN0XG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5mbHlvdXRPcGVuZWQpIHtcblx0XHRcdHRoaXMuZmx5b3V0T3BlbmVkID0gdHJ1ZTtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQodW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0T3BlbmVkKSB7XG5cdFx0XHR0aGlzLmZseW91dE9wZW5lZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCh1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpc0luQ2xvc2FibGVab25lKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmZseW91dFpvbmUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRab25lLmNvbnRhaW5zKGVsZW1lbnQpO1xuXHR9XG5cblx0cHVibGljIGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZseW91dE9wZW5lZDtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEhvc3QsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dEFjdGlvbl0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dEFjdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEFjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktZmx5b3V0LWFjdGlvbicpIGNsYXNzID0gdHJ1ZTtcblxuXHQvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG5lZWRlZCBmb3IgZHJvcGRvd24gbm90IHRvIG9wZW4gYW5kIGluc3RhbnRseSBjbG9zZWRcbiAgICAgKiBiZWNhdXNlIHRoZSBjbGljayBldmVudCB3aWxsIGJlIGZpcmVkIGFmdGVyIHRoZSBmb2N1cyBldmVudCBzbyB0aGUgY2xpY2sgZXZlbnQgd2lsbCBjbG9zZSB0aGUgZmx5b3V0XG4gICAgICovXG5cdHByaXZhdGUgb3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRwcml2YXRlIGNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBIb3N0KCkgcHVibGljIGZseW91dDogRmx5b3V0RGlyZWN0aXZlLFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0XHQvLyBEZWZpbmUgdGhpcyBtZXRob2QgaW4gdGhlIGNvbnN0cnVjdG9yIHNvIFwidGhpc1wiIHBvaW50cyB0byBcInRoaXMgY2xhc3NcIlxuXHRcdHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZUlmSW5DbG9zYWJsZVpvbmUoZXZlbnQpO1xuXHRcdH07XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdG9uQ2xpY2soKSB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0LmFjdGl2YXRlT25Gb2N1cyAmJiB0aGlzLm9wZW5lZEJ5Rm9jdXMpIHtcblx0XHRcdHRoaXMub3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpICYmIHRoaXMuZmx5b3V0LnRvZ2dsZUNsaWNrKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcblx0b25Gb2N1cygpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuZWRCeUZvY3VzID0gdHJ1ZTtcblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG5cdG9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC5yZWxhdGVkVGFyZ2V0KVxuXHRcdFx0JiYgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvcGVuKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5jbG9zZSgpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmSW5DbG9zYWJsZVpvbmUoZXZlbnQpIHtcblx0XHRyZXR1cm4gIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC50YXJnZXQpXG5cdFx0XHRcdCYmIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcblx0XHRcdFx0JiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlSWZJbkNsb3NhYmxlWm9uZShldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNoZWNrSWZJbkNsb3NhYmxlWm9uZShldmVudCkpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzUGxhdGZvcm1Ccm93c2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dENsb3NlXScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Q2xvc2UnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRDbG9zZURpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmbHlvdXRTZXJ2aWNlOiBGbHlvdXRTZXJ2aWNlKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0cHVibGljIG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5mbHlvdXRTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Q2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRGbHlvdXRBY3Rpb25EaXJlY3RpdmUsXG5cdEZseW91dENsb3NlRGlyZWN0aXZlLFxuXHRGbHlvdXRab25lRGlyZWN0aXZlLFxuXHRGbHlvdXREaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4vZmx5b3V0LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdEZseW91dFNlcnZpY2UsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRNb2R1bGUge31cbiIsImV4cG9ydCBlbnVtIEZseW91dEJ1dHRvblNpemUge1xuXHRBdXRvID0gJ2F1dG8nLFxuXHRUaW55ID0gJ3RpbnknLFxuXHRTbWFsbCA9ICdzbWFsbCcsXG5cdExhcmdlID0gJ2xhcmdlJyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmx5b3V0QnV0dG9uU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2ZseW91dC1idXR0b24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmx5b3V0LWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQgW2FsaWduXT1cImFsaWduXCIgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIChvcGVuZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZCh0cnVlKVwiIChjbG9zZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZChmYWxzZSlcIj5cbiAgICA8YnV0dG9uIGF1aUZseW91dEFjdGlvbiB0aXRsZT1cInt7IHRpdGxlIH19XCIgW25nQ2xhc3NdPVwiW2J1dHRvbkNsYXNzTmFtZXNbYnV0dG9uU2l6ZV0sIChpY29uICYmIGxhYmVsKSA/ICdoYXMtaWNvbi1sZWZ0JyA6ICcnLCAoaWNvbiAmJiAhbGFiZWwpID8gJ2hhcy1pY29uJyA6ICcnLCBvdXRsaW5lID8gJ2EtYnV0dG9uLW91dGxpbmUnIDogJ2EtYnV0dG9uJ11cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBpY29uIH19XCI+PC9zcGFuPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgYXVpRmx5b3V0Wm9uZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZseW91dE9wZW5cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEJ1dHRvbkNvbXBvbmVudCB7XG5cdHB1YmxpYyBidXR0b25DbGFzc05hbWVzID0ge1xuXHRcdHRpbnk6ICdhLWJ1dHRvbi0tdGlueScsXG5cdFx0c21hbGw6ICdhLWJ1dHRvbi0tc21hbGwnLFxuXHRcdGF1dG86ICcnLFxuXHRcdGxhcmdlOiAnYS1idXR0b24tLWxhcmdlJyxcblx0fTtcblxuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJ1dHRvblNpemU6IEZseW91dEJ1dHRvblNpemUgPSBGbHlvdXRCdXR0b25TaXplLkF1dG87XG5cdEBJbnB1dCgpIGZseW91dFNpemU6IHN0cmluZztcblx0QElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG5cdHB1YmxpYyBmbHlvdXRPcGVuID0gZmFsc2U7XG5cblx0cHVibGljIGhhbmRsZUZseW91dENoYW5nZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZmx5b3V0T3BlbiA9IG9wZW47XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRGbHlvdXRCdXR0b25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJy4uL2ZseW91dC9mbHlvdXQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QnV0dG9uTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFjQyw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkFOTSxJQUFJO1FBT25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDN0M7Ozs7O0lBRU0sc0NBQVE7Ozs7Y0FBQyxPQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBckJ2QyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFF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
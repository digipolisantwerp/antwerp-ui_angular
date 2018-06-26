(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('flyout', ['exports', '@angular/core', 'rxjs/Subject', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global.flyout = {}),global.ng.core,global.rxjs.Subject,global.rxjs,global.rxjs.operators,global.ng.common));
}(this, (function (exports,core,Subject,rxjs,operators,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutZoneDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[auiFlyoutZone]',
                        exportAs: 'auiFlyoutZone',
                    },] },
        ];
        /** @nocollapse */
        FlyoutZoneDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        FlyoutZoneDirective.propDecorators = {
            class: [{ type: core.HostBinding, args: ['class.m-flyout__content',] }],
            auiFlyoutZone: [{ type: core.Input }]
        };
        return FlyoutZoneDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutService = (function () {
        function FlyoutService() {
            this.subject = new Subject.Subject();
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
            { type: core.Injectable },
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
    var FlyoutDirective = (function () {
        function FlyoutDirective(elementRef, flyoutService) {
            var _this = this;
            this.elementRef = elementRef;
            this.flyoutService = flyoutService;
            this.flyoutClass = true;
            this.class = '';
            this.size = FlyoutSize.Auto;
            this.toggleClick = true;
            this.activateOnFocus = false;
            this.opened = new core.EventEmitter();
            this.closed = new core.EventEmitter();
            this.flyoutOpened = false;
            this.destroyed$ = new rxjs.Subject();
            this.element = this.elementRef.nativeElement;
            this.flyoutService.subject
                .pipe(operators.takeUntil(this.destroyed$))
                .subscribe(function (res) {
                _this.close();
            });
        }
        Object.defineProperty(FlyoutDirective.prototype, "flyoutAlignRight", {
            get: /**
             * @return {?}
             */ function () {
                return this.align === 'right';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutDirective.prototype, "flyoutSmall", {
            get: /**
             * @return {?}
             */ function () {
                return this.size === 'small';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutDirective.prototype, "flyoutMedium", {
            get: /**
             * @return {?}
             */ function () {
                return this.size === 'medium';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutDirective.prototype, "flyoutLarge", {
            get: /**
             * @return {?}
             */ function () {
                return this.size === 'large';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutDirective.prototype, "flyoutFull", {
            get: /**
             * @return {?}
             */ function () {
                return this.size === 'full';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutDirective.prototype, "flyoutOpen", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[auiFlyout]',
                        exportAs: 'auiFlyout',
                    },] },
        ];
        /** @nocollapse */
        FlyoutDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: FlyoutService }
            ];
        };
        FlyoutDirective.propDecorators = {
            flyoutClass: [{ type: core.HostBinding, args: ['class.m-flyout',] }],
            flyoutAlignRight: [{ type: core.HostBinding, args: ['class.m-flyout--right',] }],
            flyoutSmall: [{ type: core.HostBinding, args: ['class.m-flyout--sm',] }],
            flyoutMedium: [{ type: core.HostBinding, args: ['class.m-flyout--md',] }],
            flyoutLarge: [{ type: core.HostBinding, args: ['class.m-flyout--lg',] }],
            flyoutFull: [{ type: core.HostBinding, args: ['class.m-flyout--full',] }],
            flyoutOpen: [{ type: core.HostBinding, args: ['class.is-open',] }],
            class: [{ type: core.Input }],
            size: [{ type: core.Input }],
            align: [{ type: core.Input }],
            toggleClick: [{ type: core.Input }],
            activateOnFocus: [{ type: core.Input }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }],
            flyoutZone: [{ type: core.ContentChild, args: [FlyoutZoneDirective,] }]
        };
        return FlyoutDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutActionDirective = (function () {
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
                return common.isPlatformBrowser(this.platformId);
            };
        FlyoutActionDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[auiFlyoutAction]',
                        exportAs: 'auiFlyoutAction',
                    },] },
        ];
        /** @nocollapse */
        FlyoutActionDirective.ctorParameters = function () {
            return [
                { type: FlyoutDirective, decorators: [{ type: core.Host }] },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: core.ElementRef }
            ];
        };
        FlyoutActionDirective.propDecorators = {
            class: [{ type: core.HostBinding, args: ['class.aui-flyout-action',] }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            onFocus: [{ type: core.HostListener, args: ['focus',] }],
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return FlyoutActionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutCloseDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[auiFlyoutClose]',
                        exportAs: 'auiFlyoutClose',
                    },] },
        ];
        /** @nocollapse */
        FlyoutCloseDirective.ctorParameters = function () {
            return [
                { type: FlyoutService }
            ];
        };
        FlyoutCloseDirective.propDecorators = {
            onClick: [{ type: core.HostListener, args: ['click',] }]
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
    var FlyoutModule = (function () {
        function FlyoutModule() {
        }
        FlyoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var FlyoutButtonComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'aui-flyout-button',
                        template: "<div auiFlyout [align]=\"align\" [size]=\"flyoutSize\" (opened)=\"handleFlyoutChanged(true)\" (closed)=\"handleFlyoutChanged(false)\">\n    <button auiFlyoutAction title=\"{{ title }}\" [ngClass]=\"[buttonClassNames[buttonSize], (icon && label) ? 'has-icon-left' : '', (icon && !label) ? 'has-icon' : '', outline ? 'a-button-outline' : 'a-button']\">\n        <span class=\"{{ icon }}\"></span>\n        {{ label }}\n    </button>\n    <div auiFlyoutZone>\n        <ng-container *ngIf=\"flyoutOpen\">\n            <ng-content></ng-content>\n        </ng-container>\n    </div>\n</div>\n",
                    },] },
        ];
        FlyoutButtonComponent.propDecorators = {
            title: [{ type: core.Input }],
            label: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            align: [{ type: core.Input }],
            buttonSize: [{ type: core.Input }],
            flyoutSize: [{ type: core.Input }],
            outline: [{ type: core.Input }]
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
    var FlyoutButtonModule = (function () {
        function FlyoutButtonModule() {
        }
        FlyoutButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.FlyoutModule = FlyoutModule;
    exports.FlyoutActionDirective = FlyoutActionDirective;
    exports.FlyoutCloseDirective = FlyoutCloseDirective;
    exports.FlyoutZoneDirective = FlyoutZoneDirective;
    exports.FlyoutDirective = FlyoutDirective;
    exports.FlyoutService = FlyoutService;
    exports.FlyoutSize = FlyoutSize;
    exports.FlyoutButtonModule = FlyoutButtonModule;
    exports.FlyoutButtonComponent = FlyoutButtonComponent;
    exports.FlyoutButtonSize = FlyoutButtonSize;
    exports.ɵc = Components;
    exports.ɵa = Directives;
    exports.ɵb = Services;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQtem9uZS5kaXJlY3RpdmUudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC90eXBlcy9mbHlvdXQudHlwZXMudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L2RpcmVjdGl2ZXMvZmx5b3V0LmRpcmVjdGl2ZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQtYWN0aW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQtY2xvc2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9zZXJ2aWNlcy9pbmRleC50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZmx5b3V0Lm1vZHVsZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL3R5cGVzL2ZseW91dC1idXR0b24udHlwZXMudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0LWJ1dHRvbi9jb21wb25lbnRzL2ZseW91dC1idXR0b24vZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0LWJ1dHRvbi9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC1idXR0b24vZmx5b3V0LWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dFpvbmVdJyxcblx0ZXhwb3J0QXM6ICdhdWlGbHlvdXRab25lJyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0Wm9uZURpcmVjdGl2ZSB7XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dF9fY29udGVudCcpIGNsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgYXVpRmx5b3V0Wm9uZTogYm9vbGVhbjtcblxuXHRwdWJsaWMgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblxuXHRwdWJsaWMgY29udGFpbnMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5hdWlGbHlvdXRab25lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5pbXBvcnQgeyBGbHlvdXRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL2ZseW91dC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbHlvdXRTZXJ2aWNlIHtcblx0Ly8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuXHRwdWJsaWMgc3ViamVjdCA9IG5ldyBTdWJqZWN0PEZseW91dFN0YXRlPigpO1xuXG5cdHB1YmxpYyBjbG9zZSgpIHtcblx0XHR0aGlzLnN1YmplY3QubmV4dCh7XG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxufVxuIiwiZXhwb3J0IGVudW0gRmx5b3V0U2l6ZSB7XG5cdEF1dG8gPSAnYXV0bycsXG5cdFNtYWxsID0gJ3NtYWxsJyxcblx0TWVkaXVtID0gJ21lZGl1bScsXG5cdExhcmdlID0gJ2xhcmdlJyxcblx0RnVsbCA9ICdmdWxsJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbHlvdXRTdGF0ZSB7XG5cdGNsb3NlOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRDb250ZW50Q2hpbGQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0SG9zdEJpbmRpbmcsXG5cdE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZseW91dFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC16b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbHlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmx5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmx5b3V0U2l6ZSB9IGZyb20gJy4uL3R5cGVzL2ZseW91dC50eXBlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dF0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dCcsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQnKSBmbHlvdXRDbGFzcyA9IHRydWU7XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLXJpZ2h0JykgZ2V0IGZseW91dEFsaWduUmlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09ICdyaWdodCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tc20nKSBnZXQgZmx5b3V0U21hbGwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1tZCcpIGdldCBmbHlvdXRNZWRpdW0oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21lZGl1bSc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tbGcnKSBnZXQgZmx5b3V0TGFyZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1mdWxsJykgZ2V0IGZseW91dEZ1bGwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2Z1bGwnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MuaXMtb3BlbicpIGdldCBmbHlvdXRPcGVuKCkge1xuXHRcdHJldHVybiB0aGlzLmZseW91dE9wZW5lZDtcblx0fVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBjbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogRmx5b3V0U2l6ZSA9IEZseW91dFNpemUuQXV0bztcblx0QElucHV0KCkgcHVibGljIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b2dnbGVDbGljayA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmF0ZU9uRm9jdXMgPSBmYWxzZTtcblx0QE91dHB1dCgpIHB1YmxpYyBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBDb250ZW50Q2hpbGQoRmx5b3V0Wm9uZURpcmVjdGl2ZSkgcHVibGljIGZseW91dFpvbmU6IEZseW91dFpvbmVEaXJlY3RpdmU7XG5cblx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSBmbHlvdXRPcGVuZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBmbHlvdXRTZXJ2aWNlOiBGbHlvdXRTZXJ2aWNlKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmZseW91dFNlcnZpY2Uuc3ViamVjdFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlbigpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuZmx5b3V0T3BlbmVkKSB7XG5cdFx0XHR0aGlzLmZseW91dE9wZW5lZCA9IHRydWU7XG5cdFx0XHR0aGlzLm9wZW5lZC5lbWl0KHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNsb3NlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dE9wZW5lZCkge1xuXHRcdFx0dGhpcy5mbHlvdXRPcGVuZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2xvc2VkLmVtaXQodW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaXNJbkNsb3NhYmxlWm9uZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5mbHlvdXRab25lKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0Wm9uZS5jb250YWlucyhlbGVtZW50KTtcblx0fVxuXG5cdHB1YmxpYyBpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRPcGVuZWQ7XG5cdH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBIb3N0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbHlvdXREaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC5kaXJlY3RpdmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGbHlvdXRBY3Rpb25dJyxcblx0ZXhwb3J0QXM6ICdhdWlGbHlvdXRBY3Rpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRBY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWZseW91dC1hY3Rpb24nKSBjbGFzcyA9IHRydWU7XG5cblx0LyoqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBuZWVkZWQgZm9yIGRyb3Bkb3duIG5vdCB0byBvcGVuIGFuZCBpbnN0YW50bHkgY2xvc2VkXG4gICAgICogYmVjYXVzZSB0aGUgY2xpY2sgZXZlbnQgd2lsbCBiZSBmaXJlZCBhZnRlciB0aGUgZm9jdXMgZXZlbnQgc28gdGhlIGNsaWNrIGV2ZW50IHdpbGwgY2xvc2UgdGhlIGZseW91dFxuICAgICAqL1xuXHRwcml2YXRlIG9wZW5lZEJ5Rm9jdXMgPSBmYWxzZTtcblx0cHJpdmF0ZSBjbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2s6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASG9zdCgpIHB1YmxpYyBmbHlvdXQ6IEZseW91dERpcmVjdGl2ZSxcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7XG5cdFx0Ly8gRGVmaW5lIHRoaXMgbWV0aG9kIGluIHRoZSBjb25zdHJ1Y3RvciBzbyBcInRoaXNcIiBwb2ludHMgdG8gXCJ0aGlzIGNsYXNzXCJcblx0XHR0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdHRoaXMuY2xvc2VJZkluQ2xvc2FibGVab25lKGV2ZW50KTtcblx0XHR9O1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snKVxuXHRvbkNsaWNrKCkge1xuXHRcdGlmICh0aGlzLmZseW91dC5hY3RpdmF0ZU9uRm9jdXMgJiYgdGhpcy5vcGVuZWRCeUZvY3VzKSB7XG5cdFx0XHR0aGlzLm9wZW5lZEJ5Rm9jdXMgPSBmYWxzZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mbHlvdXQuaXNPcGVuZWQoKSAmJiB0aGlzLmZseW91dC50b2dnbGVDbGljaykge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdmb2N1cycpXG5cdG9uRm9jdXMoKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMub3BlbmVkQnlGb2N1cyA9IHRydWU7XG5cdFx0dGhpcy5mbHlvdXQub3BlbigpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuXHRvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5yZWxhdGVkVGFyZ2V0ICYmICF0aGlzLmZseW91dC5pc0luQ2xvc2FibGVab25lKDxIVE1MRWxlbWVudD4gZXZlbnQucmVsYXRlZFRhcmdldClcblx0XHRcdCYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG5cdFx0XHR0aGlzLmZseW91dC5jbG9zZSgpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHRvZ2dsZSgpIHtcblx0XHRpZiAodGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb3BlbigpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5mbHlvdXQub3BlbigpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHR9XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZkluQ2xvc2FibGVab25lKGV2ZW50KSB7XG5cdFx0cmV0dXJuICF0aGlzLmZseW91dC5pc0luQ2xvc2FibGVab25lKDxIVE1MRWxlbWVudD4gZXZlbnQudGFyZ2V0KVxuXHRcdFx0XHQmJiBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG5cdFx0XHRcdCYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZUlmSW5DbG9zYWJsZVpvbmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jaGVja0lmSW5DbG9zYWJsZVpvbmUoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmZseW91dC5jbG9zZSgpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc1BsYXRmb3JtQnJvd3NlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mbHlvdXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGbHlvdXRDbG9zZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dENsb3NlJyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0Q2xvc2VEaXJlY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmx5b3V0U2VydmljZTogRmx5b3V0U2VydmljZSkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdHB1YmxpYyBvbkNsaWNrKCkge1xuXHRcdHRoaXMuZmx5b3V0U2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBGbHlvdXRBY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC1hY3Rpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dENsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi9mbHlvdXQtY2xvc2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC16b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbHlvdXREaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0Rmx5b3V0QWN0aW9uRGlyZWN0aXZlLFxuXHRGbHlvdXRDbG9zZURpcmVjdGl2ZSxcblx0Rmx5b3V0Wm9uZURpcmVjdGl2ZSxcblx0Rmx5b3V0RGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuL2ZseW91dC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuXHRGbHlvdXRTZXJ2aWNlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZXJ2aWNlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0TW9kdWxlIHt9XG4iLCJleHBvcnQgZW51bSBGbHlvdXRCdXR0b25TaXplIHtcblx0QXV0byA9ICdhdXRvJyxcblx0VGlueSA9ICd0aW55Jyxcblx0U21hbGwgPSAnc21hbGwnLFxuXHRMYXJnZSA9ICdsYXJnZScsXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZseW91dEJ1dHRvblNpemUgfSBmcm9tICcuLi8uLi90eXBlcy9mbHlvdXQtYnV0dG9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZseW91dC1idXR0b24nLFxuXHR0ZW1wbGF0ZTogYDxkaXYgYXVpRmx5b3V0IFthbGlnbl09XCJhbGlnblwiIFtzaXplXT1cImZseW91dFNpemVcIiAob3BlbmVkKT1cImhhbmRsZUZseW91dENoYW5nZWQodHJ1ZSlcIiAoY2xvc2VkKT1cImhhbmRsZUZseW91dENoYW5nZWQoZmFsc2UpXCI+XG4gICAgPGJ1dHRvbiBhdWlGbHlvdXRBY3Rpb24gdGl0bGU9XCJ7eyB0aXRsZSB9fVwiIFtuZ0NsYXNzXT1cIltidXR0b25DbGFzc05hbWVzW2J1dHRvblNpemVdLCAoaWNvbiAmJiBsYWJlbCkgPyAnaGFzLWljb24tbGVmdCcgOiAnJywgKGljb24gJiYgIWxhYmVsKSA/ICdoYXMtaWNvbicgOiAnJywgb3V0bGluZSA/ICdhLWJ1dHRvbi1vdXRsaW5lJyA6ICdhLWJ1dHRvbiddXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgaWNvbiB9fVwiPjwvc3Bhbj5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGF1aUZseW91dFpvbmU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmbHlvdXRPcGVuXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRCdXR0b25Db21wb25lbnQge1xuXHRwdWJsaWMgYnV0dG9uQ2xhc3NOYW1lcyA9IHtcblx0XHR0aW55OiAnYS1idXR0b24tLXRpbnknLFxuXHRcdHNtYWxsOiAnYS1idXR0b24tLXNtYWxsJyxcblx0XHRhdXRvOiAnJyxcblx0XHRsYXJnZTogJ2EtYnV0dG9uLS1sYXJnZScsXG5cdH07XG5cblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xuXHRASW5wdXQoKSBidXR0b25TaXplOiBGbHlvdXRCdXR0b25TaXplID0gRmx5b3V0QnV0dG9uU2l6ZS5BdXRvO1xuXHRASW5wdXQoKSBmbHlvdXRTaXplOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcblxuXHRwdWJsaWMgZmx5b3V0T3BlbiA9IGZhbHNlO1xuXG5cdHB1YmxpYyBoYW5kbGVGbHlvdXRDaGFuZ2VkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmZseW91dE9wZW4gPSBvcGVuO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBGbHlvdXRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2ZseW91dC1idXR0b24vZmx5b3V0LWJ1dHRvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Rmx5b3V0QnV0dG9uQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGbHlvdXRNb2R1bGUgfSBmcm9tICcuLi9mbHlvdXQvZmx5b3V0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEJ1dHRvbk1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkhvc3RCaW5kaW5nIiwiSW5wdXQiLCJTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsInRha2VVbnRpbCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZCIsImlzUGxhdGZvcm1Ccm93c2VyIiwiSG9zdCIsIkluamVjdCIsIlBMQVRGT1JNX0lEIiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWNDLDZCQUFvQixVQUFzQjtZQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3lCQU5NLElBQUk7WUFPbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJ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
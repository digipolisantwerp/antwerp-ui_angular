(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@acpaas-ui/js-notification-store'), require('@angular/router'), require('rxjs/operators'), require('@angular/common'), require('@acpaas-ui/ngx-components/utils')) :
    typeof define === 'function' && define.amd ? define('notifications', ['exports', '@angular/core', '@acpaas-ui/js-notification-store', '@angular/router', 'rxjs/operators', '@angular/common', '@acpaas-ui/ngx-components/utils'], factory) :
    (factory((global.notifications = {}),global.ng.core,null,global.ng.router,global.rxjs.operators,global.ng.common,null));
}(this, (function (exports,core,jsNotificationStore,router,operators,common,utils) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NotificationsService = (function () {
        function NotificationsService() {
            return new jsNotificationStore.NotificationStore();
        }
        NotificationsService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        NotificationsService.ctorParameters = function () { return []; };
        return NotificationsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ NOTIFICATIONS_INITIAL_MESSAGES = new core.InjectionToken('initialMessages');
    var /** @type {?} */ NOTIFICATIONS_INITIAL_OPTIONS = new core.InjectionToken('initialOptions');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = {}, ɵ1 = {};
    var NotificationsModule = (function () {
        function NotificationsModule(messages, options) {
            this.messages = messages;
            this.options = options;
            jsNotificationStore.NotificationStore.messages = messages;
            jsNotificationStore.NotificationStore.options = options;
        }
        /**
         * @param {?} messages
         * @param {?} options
         * @return {?}
         */
        NotificationsModule.forRoot = /**
         * @param {?} messages
         * @param {?} options
         * @return {?}
         */
            function (messages, options) {
                return {
                    ngModule: NotificationsModule,
                    providers: [
                        NotificationsService,
                        { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: messages },
                        { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: options },
                    ],
                };
            };
        NotificationsModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            NotificationsService,
                            { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: ɵ0 },
                            { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: ɵ1 },
                        ],
                    },] },
        ];
        /** @nocollapse */
        NotificationsModule.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [NOTIFICATIONS_INITIAL_MESSAGES,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [NOTIFICATIONS_INITIAL_OPTIONS,] }] }
            ];
        };
        return NotificationsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ STATUSBAR_AVAILABLE_TYPES = new core.InjectionToken('availableTypes');
    var /** @type {?} */ STATUSBAR_DEFAULT_TYPES = {
        I: {
            type: 'info',
            icon: 'fa fa-info',
            classList: 'info',
        },
        E: {
            type: 'error',
            icon: 'fa fa-warning',
            classList: 'error',
        },
        W: {
            type: 'warning',
            icon: 'fa fa-warning',
            classList: 'warning',
        },
        S: {
            type: 'success',
            icon: 'fa fa-check',
            classList: 'success',
        },
        N: {
            type: 'notification',
            icon: 'fa fa-bell-o',
            classList: 'notification',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var StatusbarComponent = (function () {
        function StatusbarComponent(availableTypes, router$$1) {
            var _this = this;
            this.availableTypes = availableTypes;
            this.router = router$$1;
            this.notifications = [];
            this.remainingMessage = {
                singular: '%{remaining} more',
                plural: '%{remaining} more',
            };
            this.clearNotification = new core.EventEmitter();
            this.activeNotification = null;
            this.typeClasses = {};
            this.iconMap = {};
            this.replaceMap = {
                remaining: 0,
            };
            Object.getOwnPropertyNames(availableTypes)
                .forEach(function (type) {
                _this.typeClasses[type] = availableTypes[type].classList;
                _this.iconMap[type] = availableTypes[type].icon;
            });
        }
        /**
         * @return {?}
         */
        StatusbarComponent.prototype.clearListeners = /**
         * @return {?}
         */
            function () {
                if (this.notificationTimer) {
                    clearTimeout(this.notificationTimer);
                }
                if (this.scopeListener) {
                    this.scopeListener.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        StatusbarComponent.prototype.setListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.activeNotification.timer) {
                    this.notificationTimer = setTimeout(this.onClearNotification.bind(this), this.activeNotification.timer);
                }
                if (this.activeNotification.scope === 'page') {
                    this.scopeListener = this.router.events
                        .pipe(operators.filter(function (updatedRoute) {
                        return updatedRoute instanceof router.NavigationStart;
                    }))
                        .subscribe((function (updatedRoute) {
                        if (updatedRoute.url !== _this.router.url) {
                            _this.onClearNotification();
                        }
                    }).bind(this));
                }
            };
        /**
         * @return {?}
         */
        StatusbarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.clearListeners();
                if (Array.isArray(this.notifications) && !!this.notifications.length) {
                    this.activeNotification = this.notifications.slice(-1)[0];
                    this.replaceMap = {
                        remaining: this.notifications.length - 1,
                    };
                }
                else {
                    this.activeNotification = null;
                    this.replaceMap = {
                        remaining: 0,
                    };
                }
                if (this.activeNotification) {
                    this.setListeners();
                }
            };
        /**
         * @return {?}
         */
        StatusbarComponent.prototype.onClearNotification = /**
         * @return {?}
         */
            function () {
                this.clearNotification.emit(this.activeNotification);
            };
        StatusbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-statusbar',
                        template: "<div class=\"o-statusbar\" *ngIf=\"activeNotification\" [ngClass]=\"typeClasses[activeNotification.type]\">\n    <span class=\"o-statusbar__status\" [ngClass]=\"iconMap[activeNotification.type]\"></span>\n\n    <div class=\"o-statusbar__notification\">\n        <p>\n            <span [innerHTML]=\"activeNotification.message\"></span>\n            <span *ngIf=\"notifications.length > 1\">(<span [innerHTML]=\"remainingMessage | pluralizeLabel:replaceMap.remaining | interpolateLabel:replaceMap\"></span>)</span>\n        </p>\n    </div>\n\n    <button class=\"a-button has-icon\" (click)=\"onClearNotification()\">\n        <span class=\"fa fa-times\"></span>\n    </button>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        StatusbarComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [STATUSBAR_AVAILABLE_TYPES,] }] },
                { type: router.Router }
            ];
        };
        StatusbarComponent.propDecorators = {
            notifications: [{ type: core.Input }],
            remainingMessage: [{ type: core.Input }],
            clearNotification: [{ type: core.Output }]
        };
        return StatusbarComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components = [
        StatusbarComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0$1 = STATUSBAR_DEFAULT_TYPES;
    var StatusbarModule = (function () {
        function StatusbarModule() {
        }
        /**
         * @param {?} availableTypes
         * @return {?}
         */
        StatusbarModule.forChild = /**
         * @param {?} availableTypes
         * @return {?}
         */
            function (availableTypes) {
                return {
                    ngModule: StatusbarModule,
                    providers: [
                        { provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes },
                    ],
                };
            };
        StatusbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            utils.LabelsModule,
                        ],
                        declarations: __spread(Components),
                        exports: __spread(Components),
                        providers: [
                            { provide: STATUSBAR_AVAILABLE_TYPES, useValue: ɵ0$1 },
                        ],
                    },] },
        ];
        return StatusbarModule;
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

    exports.NotificationsService = NotificationsService;
    exports.NOTIFICATIONS_INITIAL_MESSAGES = NOTIFICATIONS_INITIAL_MESSAGES;
    exports.NOTIFICATIONS_INITIAL_OPTIONS = NOTIFICATIONS_INITIAL_OPTIONS;
    exports.NotificationsModule = NotificationsModule;
    exports.StatusbarComponent = StatusbarComponent;
    exports.STATUSBAR_AVAILABLE_TYPES = STATUSBAR_AVAILABLE_TYPES;
    exports.STATUSBAR_DEFAULT_TYPES = STATUSBAR_DEFAULT_TYPES;
    exports.StatusbarModule = StatusbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMvc2VydmljZXMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIiwibmc6Ly9ub3RpZmljYXRpb25zL2xpYi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29uZi50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZS50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbmYudHMiLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnRzIixudWxsLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9zdGF0dXMtYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TdG9yZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtbm90aWZpY2F0aW9uLXN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0cmV0dXJuIG5ldyBOb3RpZmljYXRpb25TdG9yZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTID0gbmV3IEluamVjdGlvblRva2VuKCdpbml0aWFsTWVzc2FnZXMnKTtcbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05TX0lOSVRJQUxfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignaW5pdGlhbE9wdGlvbnMnKTtcbiIsImltcG9ydCB7XG5cdEluamVjdCxcblx0T3B0aW9uYWwsXG5cdE5nTW9kdWxlLFxuXHRNb2R1bGVXaXRoUHJvdmlkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblN0b3JlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1ub3RpZmljYXRpb24tc3RvcmUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7XG5cdE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUyxcblx0Tk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsXG59IGZyb20gJy4vbm90aWZpY2F0aW9ucy5jb25mJztcbmltcG9ydCB7XG5cdE5vdGlmaWNhdGlvbnNNZXNzYWdlcyxcblx0Tm90aWZpY2F0aW9uc09wdGlvbnMsXG59IGZyb20gJy4vdHlwZXMvbm90aWZpY2F0aW9ucy50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTLCB1c2VWYWx1ZToge30gfSxcblx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLCB1c2VWYWx1ZToge30gfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdG1lc3NhZ2VzOiBOb3RpZmljYXRpb25zTWVzc2FnZXMsXG5cdFx0b3B0aW9uczogTm90aWZpY2F0aW9uc09wdGlvbnNcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOb3RpZmljYXRpb25zTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUywgdXNlVmFsdWU6IG1lc3NhZ2VzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUykgcHJpdmF0ZSBtZXNzYWdlcyxcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnNcblx0KSB7XG5cdFx0Tm90aWZpY2F0aW9uU3RvcmUubWVzc2FnZXMgPSBtZXNzYWdlcztcblx0XHROb3RpZmljYXRpb25TdG9yZS5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgfSBmcm9tICcuL3R5cGVzL3N0YXR1cy1iYXIudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdGF0dXNiYXJBdmFpbGFibGVUeXBlcz4oJ2F2YWlsYWJsZVR5cGVzJyk7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUzogU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgPSB7XG5cdEk6IHtcblx0XHR0eXBlOiAnaW5mbycsXG5cdFx0aWNvbjogJ2ZhIGZhLWluZm8nLFxuXHRcdGNsYXNzTGlzdDogJ2luZm8nLFxuXHR9LFxuXHRFOiB7XG5cdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRpY29uOiAnZmEgZmEtd2FybmluZycsXG5cdFx0Y2xhc3NMaXN0OiAnZXJyb3InLFxuXHR9LFxuXHRXOiB7XG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxuXHRcdGljb246ICdmYSBmYS13YXJuaW5nJyxcblx0XHRjbGFzc0xpc3Q6ICd3YXJuaW5nJyxcblx0fSxcblx0Uzoge1xuXHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRpY29uOiAnZmEgZmEtY2hlY2snLFxuXHRcdGNsYXNzTGlzdDogJ3N1Y2Nlc3MnLFxuXHR9LFxuXHROOiB7XG5cdFx0dHlwZTogJ25vdGlmaWNhdGlvbicsXG5cdFx0aWNvbjogJ2ZhIGZhLWJlbGwtbycsXG5cdFx0Y2xhc3NMaXN0OiAnbm90aWZpY2F0aW9uJyxcblx0fSxcbn07XG4iLCJpbXBvcnQge1xuXHRJbmplY3QsXG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPbkNoYW5nZXMsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICdAYWNwYWFzLXVpL2pzLW5vdGlmaWNhdGlvbi1zdG9yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLFxufSBmcm9tICcuLi8uLi9zdGF0dXMtYmFyLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc3RhdHVzYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1zdGF0dXNiYXJcIiAqbmdJZj1cImFjdGl2ZU5vdGlmaWNhdGlvblwiIFtuZ0NsYXNzXT1cInR5cGVDbGFzc2VzW2FjdGl2ZU5vdGlmaWNhdGlvbi50eXBlXVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiby1zdGF0dXNiYXJfX3N0YXR1c1wiIFtuZ0NsYXNzXT1cImljb25NYXBbYWN0aXZlTm90aWZpY2F0aW9uLnR5cGVdXCI+PC9zcGFuPlxuXG4gICAgPGRpdiBjbGFzcz1cIm8tc3RhdHVzYmFyX19ub3RpZmljYXRpb25cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImFjdGl2ZU5vdGlmaWNhdGlvbi5tZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJub3RpZmljYXRpb25zLmxlbmd0aCA+IDFcIj4oPHNwYW4gW2lubmVySFRNTF09XCJyZW1haW5pbmdNZXNzYWdlIHwgcGx1cmFsaXplTGFiZWw6cmVwbGFjZU1hcC5yZW1haW5pbmcgfCBpbnRlcnBvbGF0ZUxhYmVsOnJlcGxhY2VNYXBcIj48L3NwYW4+KTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm9uQ2xlYXJOb3RpZmljYXRpb24oKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcblx0QElucHV0KCkgcmVtYWluaW5nTWVzc2FnZTogTGFiZWwgPSB7XG5cdFx0c2luZ3VsYXI6ICcle3JlbWFpbmluZ30gbW9yZScsXG5cdFx0cGx1cmFsOiAnJXtyZW1haW5pbmd9IG1vcmUnLFxuXHR9O1xuXHRAT3V0cHV0KCkgY2xlYXJOb3RpZmljYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFjdGl2ZU5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uID0gbnVsbDtcblx0cHVibGljIHR5cGVDbGFzc2VzOiBhbnkgPSB7fTtcblx0cHVibGljIGljb25NYXA6IGFueSA9IHt9O1xuXHRwdWJsaWMgcmVwbGFjZU1hcCA9IHtcblx0XHRyZW1haW5pbmc6IDAsXG5cdH07XG5cblx0cHJpdmF0ZSBub3RpZmljYXRpb25UaW1lcjtcblx0cHJpdmF0ZSBzY29wZUxpc3RlbmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUykgcHJpdmF0ZSBhdmFpbGFibGVUeXBlcyxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGF2YWlsYWJsZVR5cGVzKVxuXHRcdFx0LmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRcdHRoaXMudHlwZUNsYXNzZXNbdHlwZV0gPSBhdmFpbGFibGVUeXBlc1t0eXBlXS5jbGFzc0xpc3Q7XG5cdFx0XHRcdHRoaXMuaWNvbk1hcFt0eXBlXSA9IGF2YWlsYWJsZVR5cGVzW3R5cGVdLmljb247XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyTGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvblRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5ub3RpZmljYXRpb25UaW1lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NvcGVMaXN0ZW5lcikge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0TGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbi50aW1lcikge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uLmJpbmQodGhpcyksIHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uLnRpbWVyKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmVOb3RpZmljYXRpb24uc2NvcGUgPT09ICdwYWdlJykge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcih1cGRhdGVkUm91dGUgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRSb3V0ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHVwZGF0ZWRSb3V0ZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHVwZGF0ZWRSb3V0ZS51cmwgIT09IHRoaXMucm91dGVyLnVybCkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm5vdGlmaWNhdGlvbnMpICYmICEhdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMuc2xpY2UoLTEpWzBdO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggLSAxLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSBudWxsO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IDAsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbikge1xuXHRcdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0XHR9XG5cdH1cblxuXHRvbkNsZWFyTm90aWZpY2F0aW9uKCkge1xuXHRcdHRoaXMuY2xlYXJOb3RpZmljYXRpb24uZW1pdCh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbik7XG5cdH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IFN0YXR1c2JhckNvbXBvbmVudCB9IGZyb20gJy4vc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTdGF0dXNiYXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMYWJlbHNNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGF0dXNiYXJBdmFpbGFibGVUeXBlcyB9IGZyb20gJy4vdHlwZXMvc3RhdHVzLWJhci50eXBlcyc7XG5pbXBvcnQgeyBTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9IGZyb20gJy4vc3RhdHVzLWJhci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsIHVzZVZhbHVlOiBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNiYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0YXZhaWxhYmxlVHlwZXM6IFN0YXR1c2JhckF2YWlsYWJsZVR5cGVzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RhdHVzYmFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUywgdXNlVmFsdWU6IGF2YWlsYWJsZVR5cGVzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25TdG9yZSIsIkluamVjdGFibGUiLCJJbmplY3Rpb25Ub2tlbiIsIk5nTW9kdWxlIiwiSW5qZWN0Iiwicm91dGVyIiwiRXZlbnRFbWl0dGVyIiwiZmlsdGVyIiwiTmF2aWdhdGlvblN0YXJ0IiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJSb3V0ZXIiLCJJbnB1dCIsIk91dHB1dCIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkxhYmVsc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBS0M7WUFDQyxPQUFPLElBQUlBLHFDQUFpQixFQUFFLENBQUM7U0FDL0I7O29CQUpEQyxlQUFVOzs7O21DQUhYOzs7Ozs7O0FDQUEseUJBRWEsOEJBQThCLEdBQUcsSUFBSUMsbUJBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3BGLHlCQUFhLDZCQUE2QixHQUFHLElBQUlBLG1CQUFjLENBQUMsZ0JBQWdCLENBQUM7Ozs7OztBQ0hqRixhQXFCdUQsRUFBRSxPQUNILEVBQUU7O1FBa0J2RCw2QkFDaUQsUUFBUSxFQUNULE9BQU87WUFETixhQUFRLEdBQVIsUUFBUSxDQUFBO1lBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBQTtZQUV0REYscUNBQWlCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN0Q0EscUNBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUNwQzs7Ozs7O1FBcEJNLDJCQUFPOzs7OztZQUFkLFVBQ0MsUUFBK0IsRUFDL0IsT0FBNkI7Z0JBRTdCLE9BQU87b0JBQ04sUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTt3QkFDL0QsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtxQkFDN0Q7aUJBQ0QsQ0FBQzthQUNGOztvQkFwQkRHLGFBQVEsU0FBQzt3QkFDVCxTQUFTLEVBQUU7NEJBQ1Ysb0JBQW9COzRCQUNwQixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLElBQUksRUFBRTs0QkFDekQsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxJQUFJLEVBQUU7eUJBQ3hEO3FCQUNEOzs7Ozt3REFpQkVDLFdBQU0sU0FBQyw4QkFBOEI7d0RBQ3JDQSxXQUFNLFNBQUMsNkJBQTZCOzs7a0NBMUN2Qzs7Ozs7Ozs7Ozs7O0FDQUEseUJBSWEseUJBQXlCLEdBQUcsSUFBSUYsbUJBQWMsQ0FBMEIsZ0JBQWdCLENBQUMsQ0FBQztBQUV2Ryx5QkFBYSx1QkFBdUIsR0FBNEI7UUFDL0QsQ0FBQyxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsWUFBWTtZQUNsQixTQUFTLEVBQUUsTUFBTTtTQUNqQjtRQUNELENBQUMsRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLE9BQU87U0FDbEI7UUFDRCxDQUFDLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxlQUFlO1lBQ3JCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCO1FBQ0QsQ0FBQyxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsYUFBYTtZQUNuQixTQUFTLEVBQUUsU0FBUztTQUNwQjtRQUNELENBQUMsRUFBRTtZQUNGLElBQUksRUFBRSxjQUFjO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLFNBQVMsRUFBRSxjQUFjO1NBQ3pCO0tBQ0Q7Ozs7OztBQ2hDRDtRQXdEQyw0QkFDNEMsY0FBYyxFQUNqREc7WUFGVCxpQkFTQztZQVIyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtZQUNqRCxXQUFNLEdBQU5BLFNBQU07aUNBbkIwQixFQUFFO29DQUNSO2dCQUNsQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixNQUFNLEVBQUUsbUJBQW1CO2FBQzNCO3FDQUM2QixJQUFJQyxpQkFBWSxFQUFFO3NDQUVOLElBQUk7K0JBQ3BCLEVBQUU7MkJBQ04sRUFBRTs4QkFDSjtnQkFDbkIsU0FBUyxFQUFFLENBQUM7YUFDWjtZQVNBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7aUJBQ3hDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ1osS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDL0MsQ0FBQyxDQUFDO1NBQ0o7Ozs7UUFFRCwyQ0FBYzs7O1lBQWQ7Z0JBQ0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzNCLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDckM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQzthQUNEOzs7O1FBRUQseUNBQVk7OztZQUFaO2dCQUFBLGlCQWtCQztnQkFqQkEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO29CQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4RztnQkFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO29CQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTt5QkFDckMsSUFBSSxDQUNKQyxnQkFBTSxDQUFDLFVBQUEsWUFBWTt3QkFDbEIsT0FBTyxZQUFZLFlBQVlDLHNCQUFlLENBQUM7cUJBQy9DLENBQUMsQ0FDRjt5QkFDQSxTQUFTLENBQUMsQ0FBQyxVQUFBLFlBQVk7d0JBQ3ZCLElBQUksWUFBWSxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTs0QkFDekMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7eUJBQzNCO3FCQUNELEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2hCO2FBQ0Q7Ozs7UUFFRCx3Q0FBVzs7O1lBQVg7Z0JBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV0QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDckUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxVQUFVLEdBQUc7d0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO3FCQUN4QyxDQUFDO2lCQUNGO3FCQUFNO29CQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7b0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUc7d0JBQ2pCLFNBQVMsRUFBRSxDQUFDO3FCQUNaLENBQUM7aUJBQ0Y7Z0JBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDcEI7YUFDRDs7OztRQUVELGdEQUFtQjs7O1lBQW5CO2dCQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDckQ7O29CQXBHREMsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsaXJCQWNWO3dCQUNBLGVBQWUsRUFBRUMsNEJBQXVCLENBQUMsTUFBTTtxQkFDL0M7Ozs7O3dEQW9CRU4sV0FBTSxTQUFDLHlCQUF5Qjt3QkFoRDFCTyxhQUFNOzs7O29DQThCYkMsVUFBSzt1Q0FDTEEsVUFBSzt3Q0FJTEMsV0FBTTs7aUNBNUNSOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxvQkFpR3VCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFFRDtRQUNJLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0FDcElELElBRU8scUJBQU0sVUFBVSxHQUFHO1FBQ3pCLGtCQUFrQjtLQUNsQixDQUFDOzs7Ozs7ZUNvQmdELHVCQUF1Qjs7Ozs7Ozs7UUFJakUsd0JBQVE7Ozs7WUFBZixVQUNDLGNBQXVDO2dCQUV2QyxPQUFPO29CQUNOLFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtxQkFDaEU7aUJBQ0QsQ0FBQzthQUNGOztvQkEzQkRWLGFBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JXLG1CQUFZOzRCQUNaQyxtQkFBWTs0QkFFWkMsa0JBQVk7eUJBQ1o7d0JBQ0QsWUFBWSxXQUNSLFVBQVUsQ0FDYjt3QkFDRCxPQUFPLFdBQ0gsVUFBVSxDQUNiO3dCQUNELFNBQVMsRUFBRTs0QkFDVixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLE1BQXlCLEVBQUU7eUJBQ3pFO3FCQUNEOzs4QkExQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
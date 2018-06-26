import { Injectable, InjectionToken, Inject, NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/js-notification-store';
import { Router, NavigationStart, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        return new NotificationStore();
    }
    NotificationsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NotificationsService.ctorParameters = function () { return []; };
    return NotificationsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ NOTIFICATIONS_INITIAL_MESSAGES = new InjectionToken('initialMessages');
var /** @type {?} */ NOTIFICATIONS_INITIAL_OPTIONS = new InjectionToken('initialOptions');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = {}, ɵ1 = {};
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule(messages, options) {
        this.messages = messages;
        this.options = options;
        NotificationStore.messages = messages;
        NotificationStore.options = options;
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
        { type: NgModule, args: [{
                    providers: [
                        NotificationsService,
                        { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: ɵ0 },
                        { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: ɵ1 },
                    ],
                },] },
    ];
    /** @nocollapse */
    NotificationsModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NOTIFICATIONS_INITIAL_MESSAGES,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [NOTIFICATIONS_INITIAL_OPTIONS,] }] }
    ]; };
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
var /** @type {?} */ STATUSBAR_AVAILABLE_TYPES = new InjectionToken('availableTypes');
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
var StatusbarComponent = /** @class */ (function () {
    function StatusbarComponent(availableTypes, router) {
        var _this = this;
        this.availableTypes = availableTypes;
        this.router = router;
        this.notifications = [];
        this.remainingMessage = {
            singular: '%{remaining} more',
            plural: '%{remaining} more',
        };
        this.clearNotification = new EventEmitter();
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
                .pipe(filter(function (updatedRoute) {
                return updatedRoute instanceof NavigationStart;
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
        { type: Component, args: [{
                    selector: 'aui-statusbar',
                    template: "<div class=\"o-statusbar\" *ngIf=\"activeNotification\" [ngClass]=\"typeClasses[activeNotification.type]\">\n    <span class=\"o-statusbar__status\" [ngClass]=\"iconMap[activeNotification.type]\"></span>\n\n    <div class=\"o-statusbar__notification\">\n        <p>\n            <span [innerHTML]=\"activeNotification.message\"></span>\n            <span *ngIf=\"notifications.length > 1\">(<span [innerHTML]=\"remainingMessage | pluralizeLabel:replaceMap.remaining | interpolateLabel:replaceMap\"></span>)</span>\n        </p>\n    </div>\n\n    <button class=\"a-button has-icon\" (click)=\"onClearNotification()\">\n        <span class=\"fa fa-times\"></span>\n    </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    StatusbarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [STATUSBAR_AVAILABLE_TYPES,] }] },
        { type: Router }
    ]; };
    StatusbarComponent.propDecorators = {
        notifications: [{ type: Input }],
        remainingMessage: [{ type: Input }],
        clearNotification: [{ type: Output }]
    };
    return StatusbarComponent;
}());

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
var StatusbarModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        LabelsModule,
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

export { NotificationsService, NOTIFICATIONS_INITIAL_MESSAGES, NOTIFICATIONS_INITIAL_OPTIONS, NotificationsModule, StatusbarComponent, STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES, StatusbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvbm90aWZpY2F0aW9ucy9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb25mLnRzIiwibmc6Ly9ub3RpZmljYXRpb25zL2xpYi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMubW9kdWxlLnRzIiwibmc6Ly9ub3RpZmljYXRpb25zL2xpYi9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29uZi50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9jb21wb25lbnRzL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQudHMiLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9zdGF0dXMtYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TdG9yZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtbm90aWZpY2F0aW9uLXN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0cmV0dXJuIG5ldyBOb3RpZmljYXRpb25TdG9yZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTID0gbmV3IEluamVjdGlvblRva2VuKCdpbml0aWFsTWVzc2FnZXMnKTtcbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05TX0lOSVRJQUxfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignaW5pdGlhbE9wdGlvbnMnKTtcbiIsImltcG9ydCB7XG5cdEluamVjdCxcblx0T3B0aW9uYWwsXG5cdE5nTW9kdWxlLFxuXHRNb2R1bGVXaXRoUHJvdmlkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblN0b3JlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1ub3RpZmljYXRpb24tc3RvcmUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7XG5cdE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUyxcblx0Tk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsXG59IGZyb20gJy4vbm90aWZpY2F0aW9ucy5jb25mJztcbmltcG9ydCB7XG5cdE5vdGlmaWNhdGlvbnNNZXNzYWdlcyxcblx0Tm90aWZpY2F0aW9uc09wdGlvbnMsXG59IGZyb20gJy4vdHlwZXMvbm90aWZpY2F0aW9ucy50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTLCB1c2VWYWx1ZToge30gfSxcblx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLCB1c2VWYWx1ZToge30gfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdG1lc3NhZ2VzOiBOb3RpZmljYXRpb25zTWVzc2FnZXMsXG5cdFx0b3B0aW9uczogTm90aWZpY2F0aW9uc09wdGlvbnNcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOb3RpZmljYXRpb25zTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUywgdXNlVmFsdWU6IG1lc3NhZ2VzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUykgcHJpdmF0ZSBtZXNzYWdlcyxcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnNcblx0KSB7XG5cdFx0Tm90aWZpY2F0aW9uU3RvcmUubWVzc2FnZXMgPSBtZXNzYWdlcztcblx0XHROb3RpZmljYXRpb25TdG9yZS5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgfSBmcm9tICcuL3R5cGVzL3N0YXR1cy1iYXIudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdGF0dXNiYXJBdmFpbGFibGVUeXBlcz4oJ2F2YWlsYWJsZVR5cGVzJyk7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUzogU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgPSB7XG5cdEk6IHtcblx0XHR0eXBlOiAnaW5mbycsXG5cdFx0aWNvbjogJ2ZhIGZhLWluZm8nLFxuXHRcdGNsYXNzTGlzdDogJ2luZm8nLFxuXHR9LFxuXHRFOiB7XG5cdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRpY29uOiAnZmEgZmEtd2FybmluZycsXG5cdFx0Y2xhc3NMaXN0OiAnZXJyb3InLFxuXHR9LFxuXHRXOiB7XG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxuXHRcdGljb246ICdmYSBmYS13YXJuaW5nJyxcblx0XHRjbGFzc0xpc3Q6ICd3YXJuaW5nJyxcblx0fSxcblx0Uzoge1xuXHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRpY29uOiAnZmEgZmEtY2hlY2snLFxuXHRcdGNsYXNzTGlzdDogJ3N1Y2Nlc3MnLFxuXHR9LFxuXHROOiB7XG5cdFx0dHlwZTogJ25vdGlmaWNhdGlvbicsXG5cdFx0aWNvbjogJ2ZhIGZhLWJlbGwtbycsXG5cdFx0Y2xhc3NMaXN0OiAnbm90aWZpY2F0aW9uJyxcblx0fSxcbn07XG4iLCJpbXBvcnQge1xuXHRJbmplY3QsXG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPbkNoYW5nZXMsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICdAYWNwYWFzLXVpL2pzLW5vdGlmaWNhdGlvbi1zdG9yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLFxufSBmcm9tICcuLi8uLi9zdGF0dXMtYmFyLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc3RhdHVzYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1zdGF0dXNiYXJcIiAqbmdJZj1cImFjdGl2ZU5vdGlmaWNhdGlvblwiIFtuZ0NsYXNzXT1cInR5cGVDbGFzc2VzW2FjdGl2ZU5vdGlmaWNhdGlvbi50eXBlXVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiby1zdGF0dXNiYXJfX3N0YXR1c1wiIFtuZ0NsYXNzXT1cImljb25NYXBbYWN0aXZlTm90aWZpY2F0aW9uLnR5cGVdXCI+PC9zcGFuPlxuXG4gICAgPGRpdiBjbGFzcz1cIm8tc3RhdHVzYmFyX19ub3RpZmljYXRpb25cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImFjdGl2ZU5vdGlmaWNhdGlvbi5tZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJub3RpZmljYXRpb25zLmxlbmd0aCA+IDFcIj4oPHNwYW4gW2lubmVySFRNTF09XCJyZW1haW5pbmdNZXNzYWdlIHwgcGx1cmFsaXplTGFiZWw6cmVwbGFjZU1hcC5yZW1haW5pbmcgfCBpbnRlcnBvbGF0ZUxhYmVsOnJlcGxhY2VNYXBcIj48L3NwYW4+KTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm9uQ2xlYXJOb3RpZmljYXRpb24oKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcblx0QElucHV0KCkgcmVtYWluaW5nTWVzc2FnZTogTGFiZWwgPSB7XG5cdFx0c2luZ3VsYXI6ICcle3JlbWFpbmluZ30gbW9yZScsXG5cdFx0cGx1cmFsOiAnJXtyZW1haW5pbmd9IG1vcmUnLFxuXHR9O1xuXHRAT3V0cHV0KCkgY2xlYXJOb3RpZmljYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFjdGl2ZU5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uID0gbnVsbDtcblx0cHVibGljIHR5cGVDbGFzc2VzOiBhbnkgPSB7fTtcblx0cHVibGljIGljb25NYXA6IGFueSA9IHt9O1xuXHRwdWJsaWMgcmVwbGFjZU1hcCA9IHtcblx0XHRyZW1haW5pbmc6IDAsXG5cdH07XG5cblx0cHJpdmF0ZSBub3RpZmljYXRpb25UaW1lcjtcblx0cHJpdmF0ZSBzY29wZUxpc3RlbmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUykgcHJpdmF0ZSBhdmFpbGFibGVUeXBlcyxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGF2YWlsYWJsZVR5cGVzKVxuXHRcdFx0LmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRcdHRoaXMudHlwZUNsYXNzZXNbdHlwZV0gPSBhdmFpbGFibGVUeXBlc1t0eXBlXS5jbGFzc0xpc3Q7XG5cdFx0XHRcdHRoaXMuaWNvbk1hcFt0eXBlXSA9IGF2YWlsYWJsZVR5cGVzW3R5cGVdLmljb247XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyTGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvblRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5ub3RpZmljYXRpb25UaW1lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NvcGVMaXN0ZW5lcikge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0TGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbi50aW1lcikge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uLmJpbmQodGhpcyksIHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uLnRpbWVyKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmVOb3RpZmljYXRpb24uc2NvcGUgPT09ICdwYWdlJykge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcih1cGRhdGVkUm91dGUgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRSb3V0ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHVwZGF0ZWRSb3V0ZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHVwZGF0ZWRSb3V0ZS51cmwgIT09IHRoaXMucm91dGVyLnVybCkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm5vdGlmaWNhdGlvbnMpICYmICEhdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMuc2xpY2UoLTEpWzBdO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggLSAxLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSBudWxsO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IDAsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbikge1xuXHRcdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0XHR9XG5cdH1cblxuXHRvbkNsZWFyTm90aWZpY2F0aW9uKCkge1xuXHRcdHRoaXMuY2xlYXJOb3RpZmljYXRpb24uZW1pdCh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbik7XG5cdH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c2JhckNvbXBvbmVudCB9IGZyb20gJy4vc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTdGF0dXNiYXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMYWJlbHNNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGF0dXNiYXJBdmFpbGFibGVUeXBlcyB9IGZyb20gJy4vdHlwZXMvc3RhdHVzLWJhci50eXBlcyc7XG5pbXBvcnQgeyBTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9IGZyb20gJy4vc3RhdHVzLWJhci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsIHVzZVZhbHVlOiBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNiYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0YXZhaWxhYmxlVHlwZXM6IFN0YXR1c2JhckF2YWlsYWJsZVR5cGVzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RhdHVzYmFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUywgdXNlVmFsdWU6IGF2YWlsYWJsZVR5cGVzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUtDO1FBQ0MsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7S0FDL0I7O2dCQUpELFVBQVU7Ozs7K0JBSFg7Ozs7Ozs7QUNBQSxxQkFFYSw4QkFBOEIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3BGLHFCQUFhLDZCQUE2QixHQUFHLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7QUNIakYsU0FxQnVELEVBQUUsT0FDSCxFQUFFOztJQWtCdkQsNkJBQ2lELFFBQVEsRUFDVCxPQUFPO1FBRE4sYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUNULFlBQU8sR0FBUCxPQUFPLENBQUE7UUFFdEQsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN0QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3BDOzs7Ozs7SUFwQk0sMkJBQU87Ozs7O0lBQWQs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
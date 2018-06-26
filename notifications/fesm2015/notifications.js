import { Injectable, InjectionToken, Inject, NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/js-notification-store';
import { Router, NavigationStart, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationsService {
    constructor() {
        return new NotificationStore();
    }
}
NotificationsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ NOTIFICATIONS_INITIAL_MESSAGES = new InjectionToken('initialMessages');
const /** @type {?} */ NOTIFICATIONS_INITIAL_OPTIONS = new InjectionToken('initialOptions');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = {}, ɵ1 = {};
class NotificationsModule {
    /**
     * @param {?} messages
     * @param {?} options
     */
    constructor(messages, options) {
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
    static forRoot(messages, options) {
        return {
            ngModule: NotificationsModule,
            providers: [
                NotificationsService,
                { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: messages },
                { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: options },
            ],
        };
    }
}
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
NotificationsModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NOTIFICATIONS_INITIAL_MESSAGES,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NOTIFICATIONS_INITIAL_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ STATUSBAR_AVAILABLE_TYPES = new InjectionToken('availableTypes');
const /** @type {?} */ STATUSBAR_DEFAULT_TYPES = {
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
class StatusbarComponent {
    /**
     * @param {?} availableTypes
     * @param {?} router
     */
    constructor(availableTypes, router) {
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
            .forEach(type => {
            this.typeClasses[type] = availableTypes[type].classList;
            this.iconMap[type] = availableTypes[type].icon;
        });
    }
    /**
     * @return {?}
     */
    clearListeners() {
        if (this.notificationTimer) {
            clearTimeout(this.notificationTimer);
        }
        if (this.scopeListener) {
            this.scopeListener.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    setListeners() {
        if (this.activeNotification.timer) {
            this.notificationTimer = setTimeout(this.onClearNotification.bind(this), this.activeNotification.timer);
        }
        if (this.activeNotification.scope === 'page') {
            this.scopeListener = this.router.events
                .pipe(filter(updatedRoute => {
                return updatedRoute instanceof NavigationStart;
            }))
                .subscribe((updatedRoute => {
                if (updatedRoute.url !== this.router.url) {
                    this.onClearNotification();
                }
            }).bind(this));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @return {?}
     */
    onClearNotification() {
        this.clearNotification.emit(this.activeNotification);
    }
}
StatusbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-statusbar',
                template: `<div class="o-statusbar" *ngIf="activeNotification" [ngClass]="typeClasses[activeNotification.type]">
    <span class="o-statusbar__status" [ngClass]="iconMap[activeNotification.type]"></span>

    <div class="o-statusbar__notification">
        <p>
            <span [innerHTML]="activeNotification.message"></span>
            <span *ngIf="notifications.length > 1">(<span [innerHTML]="remainingMessage | pluralizeLabel:replaceMap.remaining | interpolateLabel:replaceMap"></span>)</span>
        </p>
    </div>

    <button class="a-button has-icon" (click)="onClearNotification()">
        <span class="fa fa-times"></span>
    </button>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
StatusbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [STATUSBAR_AVAILABLE_TYPES,] }] },
    { type: Router }
];
StatusbarComponent.propDecorators = {
    notifications: [{ type: Input }],
    remainingMessage: [{ type: Input }],
    clearNotification: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    StatusbarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0$1 = STATUSBAR_DEFAULT_TYPES;
class StatusbarModule {
    /**
     * @param {?} availableTypes
     * @return {?}
     */
    static forChild(availableTypes) {
        return {
            ngModule: StatusbarModule,
            providers: [
                { provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes },
            ],
        };
    }
}
StatusbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LabelsModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    { provide: STATUSBAR_AVAILABLE_TYPES, useValue: ɵ0$1 },
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

export { NotificationsService, NOTIFICATIONS_INITIAL_MESSAGES, NOTIFICATIONS_INITIAL_OPTIONS, NotificationsModule, StatusbarComponent, STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES, StatusbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvbm90aWZpY2F0aW9ucy9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb25mLnRzIiwibmc6Ly9ub3RpZmljYXRpb25zL2xpYi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMubW9kdWxlLnRzIiwibmc6Ly9ub3RpZmljYXRpb25zL2xpYi9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29uZi50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9jb21wb25lbnRzL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQudHMiLCJuZzovL25vdGlmaWNhdGlvbnMvbGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbm90aWZpY2F0aW9ucy9saWIvc3RhdHVzLWJhci9zdGF0dXMtYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TdG9yZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtbm90aWZpY2F0aW9uLXN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0cmV0dXJuIG5ldyBOb3RpZmljYXRpb25TdG9yZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTID0gbmV3IEluamVjdGlvblRva2VuKCdpbml0aWFsTWVzc2FnZXMnKTtcbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05TX0lOSVRJQUxfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignaW5pdGlhbE9wdGlvbnMnKTtcbiIsImltcG9ydCB7XG5cdEluamVjdCxcblx0T3B0aW9uYWwsXG5cdE5nTW9kdWxlLFxuXHRNb2R1bGVXaXRoUHJvdmlkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblN0b3JlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1ub3RpZmljYXRpb24tc3RvcmUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7XG5cdE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUyxcblx0Tk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsXG59IGZyb20gJy4vbm90aWZpY2F0aW9ucy5jb25mJztcbmltcG9ydCB7XG5cdE5vdGlmaWNhdGlvbnNNZXNzYWdlcyxcblx0Tm90aWZpY2F0aW9uc09wdGlvbnMsXG59IGZyb20gJy4vdHlwZXMvbm90aWZpY2F0aW9ucy50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTLCB1c2VWYWx1ZToge30gfSxcblx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLCB1c2VWYWx1ZToge30gfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdG1lc3NhZ2VzOiBOb3RpZmljYXRpb25zTWVzc2FnZXMsXG5cdFx0b3B0aW9uczogTm90aWZpY2F0aW9uc09wdGlvbnNcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOb3RpZmljYXRpb25zTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUywgdXNlVmFsdWU6IG1lc3NhZ2VzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUykgcHJpdmF0ZSBtZXNzYWdlcyxcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnNcblx0KSB7XG5cdFx0Tm90aWZpY2F0aW9uU3RvcmUubWVzc2FnZXMgPSBtZXNzYWdlcztcblx0XHROb3RpZmljYXRpb25TdG9yZS5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgfSBmcm9tICcuL3R5cGVzL3N0YXR1cy1iYXIudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdGF0dXNiYXJBdmFpbGFibGVUeXBlcz4oJ2F2YWlsYWJsZVR5cGVzJyk7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUzogU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgPSB7XG5cdEk6IHtcblx0XHR0eXBlOiAnaW5mbycsXG5cdFx0aWNvbjogJ2ZhIGZhLWluZm8nLFxuXHRcdGNsYXNzTGlzdDogJ2luZm8nLFxuXHR9LFxuXHRFOiB7XG5cdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRpY29uOiAnZmEgZmEtd2FybmluZycsXG5cdFx0Y2xhc3NMaXN0OiAnZXJyb3InLFxuXHR9LFxuXHRXOiB7XG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxuXHRcdGljb246ICdmYSBmYS13YXJuaW5nJyxcblx0XHRjbGFzc0xpc3Q6ICd3YXJuaW5nJyxcblx0fSxcblx0Uzoge1xuXHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRpY29uOiAnZmEgZmEtY2hlY2snLFxuXHRcdGNsYXNzTGlzdDogJ3N1Y2Nlc3MnLFxuXHR9LFxuXHROOiB7XG5cdFx0dHlwZTogJ25vdGlmaWNhdGlvbicsXG5cdFx0aWNvbjogJ2ZhIGZhLWJlbGwtbycsXG5cdFx0Y2xhc3NMaXN0OiAnbm90aWZpY2F0aW9uJyxcblx0fSxcbn07XG4iLCJpbXBvcnQge1xuXHRJbmplY3QsXG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPbkNoYW5nZXMsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICdAYWNwYWFzLXVpL2pzLW5vdGlmaWNhdGlvbi1zdG9yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLFxufSBmcm9tICcuLi8uLi9zdGF0dXMtYmFyLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc3RhdHVzYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1zdGF0dXNiYXJcIiAqbmdJZj1cImFjdGl2ZU5vdGlmaWNhdGlvblwiIFtuZ0NsYXNzXT1cInR5cGVDbGFzc2VzW2FjdGl2ZU5vdGlmaWNhdGlvbi50eXBlXVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiby1zdGF0dXNiYXJfX3N0YXR1c1wiIFtuZ0NsYXNzXT1cImljb25NYXBbYWN0aXZlTm90aWZpY2F0aW9uLnR5cGVdXCI+PC9zcGFuPlxuXG4gICAgPGRpdiBjbGFzcz1cIm8tc3RhdHVzYmFyX19ub3RpZmljYXRpb25cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImFjdGl2ZU5vdGlmaWNhdGlvbi5tZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJub3RpZmljYXRpb25zLmxlbmd0aCA+IDFcIj4oPHNwYW4gW2lubmVySFRNTF09XCJyZW1haW5pbmdNZXNzYWdlIHwgcGx1cmFsaXplTGFiZWw6cmVwbGFjZU1hcC5yZW1haW5pbmcgfCBpbnRlcnBvbGF0ZUxhYmVsOnJlcGxhY2VNYXBcIj48L3NwYW4+KTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cIm9uQ2xlYXJOb3RpZmljYXRpb24oKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcblx0QElucHV0KCkgcmVtYWluaW5nTWVzc2FnZTogTGFiZWwgPSB7XG5cdFx0c2luZ3VsYXI6ICcle3JlbWFpbmluZ30gbW9yZScsXG5cdFx0cGx1cmFsOiAnJXtyZW1haW5pbmd9IG1vcmUnLFxuXHR9O1xuXHRAT3V0cHV0KCkgY2xlYXJOb3RpZmljYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGFjdGl2ZU5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uID0gbnVsbDtcblx0cHVibGljIHR5cGVDbGFzc2VzOiBhbnkgPSB7fTtcblx0cHVibGljIGljb25NYXA6IGFueSA9IHt9O1xuXHRwdWJsaWMgcmVwbGFjZU1hcCA9IHtcblx0XHRyZW1haW5pbmc6IDAsXG5cdH07XG5cblx0cHJpdmF0ZSBub3RpZmljYXRpb25UaW1lcjtcblx0cHJpdmF0ZSBzY29wZUxpc3RlbmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUykgcHJpdmF0ZSBhdmFpbGFibGVUeXBlcyxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGF2YWlsYWJsZVR5cGVzKVxuXHRcdFx0LmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRcdHRoaXMudHlwZUNsYXNzZXNbdHlwZV0gPSBhdmFpbGFibGVUeXBlc1t0eXBlXS5jbGFzc0xpc3Q7XG5cdFx0XHRcdHRoaXMuaWNvbk1hcFt0eXBlXSA9IGF2YWlsYWJsZVR5cGVzW3R5cGVdLmljb247XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyTGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvblRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5ub3RpZmljYXRpb25UaW1lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NvcGVMaXN0ZW5lcikge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0TGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbi50aW1lcikge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uLmJpbmQodGhpcyksIHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uLnRpbWVyKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmVOb3RpZmljYXRpb24uc2NvcGUgPT09ICdwYWdlJykge1xuXHRcdFx0dGhpcy5zY29wZUxpc3RlbmVyID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcih1cGRhdGVkUm91dGUgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRSb3V0ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHVwZGF0ZWRSb3V0ZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHVwZGF0ZWRSb3V0ZS51cmwgIT09IHRoaXMucm91dGVyLnVybCkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkNsZWFyTm90aWZpY2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm5vdGlmaWNhdGlvbnMpICYmICEhdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMuc2xpY2UoLTEpWzBdO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggLSAxLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hY3RpdmVOb3RpZmljYXRpb24gPSBudWxsO1xuXHRcdFx0dGhpcy5yZXBsYWNlTWFwID0ge1xuXHRcdFx0XHRyZW1haW5pbmc6IDAsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbikge1xuXHRcdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0XHR9XG5cdH1cblxuXHRvbkNsZWFyTm90aWZpY2F0aW9uKCkge1xuXHRcdHRoaXMuY2xlYXJOb3RpZmljYXRpb24uZW1pdCh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbik7XG5cdH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c2JhckNvbXBvbmVudCB9IGZyb20gJy4vc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTdGF0dXNiYXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMYWJlbHNNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGF0dXNiYXJBdmFpbGFibGVUeXBlcyB9IGZyb20gJy4vdHlwZXMvc3RhdHVzLWJhci50eXBlcyc7XG5pbXBvcnQgeyBTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9IGZyb20gJy4vc3RhdHVzLWJhci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsIHVzZVZhbHVlOiBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNiYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0YXZhaWxhYmxlVHlwZXM6IFN0YXR1c2JhckF2YWlsYWJsZVR5cGVzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RhdHVzYmFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUywgdXNlVmFsdWU6IGF2YWlsYWJsZVR5cGVzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBS0M7UUFDQyxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQztLQUMvQjs7O1lBSkQsVUFBVTs7Ozs7Ozs7O0FDSFgsdUJBRWEsOEJBQThCLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNwRix1QkFBYSw2QkFBNkIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7O0FDSGpGLFdBcUJ1RCxFQUFFLE9BQ0gsRUFBRTtBQUd4RDs7Ozs7SUFlQyxZQUNpRCxRQUFRLEVBQ1QsT0FBTztRQUROLGFBQVEsR0FBUixRQUFRLENBQUE7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBRXRELGlCQUFpQixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDdEMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUNwQzs7Ozs7O0lBcEJELE9BQU8sT0FBTyxDQUNiLFFB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
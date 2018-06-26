/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, NgModule, } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/js-notification-store';
import { NotificationsService } from './services/notifications.service';
import { NOTIFICATIONS_INITIAL_MESSAGES, NOTIFICATIONS_INITIAL_OPTIONS, } from './notifications.conf';
const ɵ0 = {}, ɵ1 = {};
export class NotificationsModule {
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
function NotificationsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationsModule.prototype.messages;
    /** @type {?} */
    NotificationsModule.prototype.options;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixNQUFNLEVBRU4sUUFBUSxHQUVSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFDTiw4QkFBOEIsRUFDOUIsNkJBQTZCLEdBQzdCLE1BQU0sc0JBQXNCLENBQUM7V0FTeUIsRUFBRSxPQUNILEVBQUU7QUFHeEQsTUFBTTs7Ozs7SUFlTCxZQUNpRCxRQUFRLEVBQ1QsT0FBTztRQUROLGFBQVEsR0FBUixRQUFRLENBQUE7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBRXRELGlCQUFpQixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDdEMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUNwQzs7Ozs7O0lBcEJELE1BQU0sQ0FBQyxPQUFPLENBQ2IsUUFBK0IsRUFDL0IsT0FBNkI7UUFFN0IsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1Ysb0JBQW9CO2dCQUNwQixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUMvRCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2FBQzdEO1NBQ0QsQ0FBQztLQUNGOzs7WUFwQkQsUUFBUSxTQUFDO2dCQUNULFNBQVMsRUFBRTtvQkFDVixvQkFBb0I7b0JBQ3BCLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsSUFBSSxFQUFFO29CQUN6RCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLElBQUksRUFBRTtpQkFDeEQ7YUFDRDs7Ozs0Q0FpQkUsTUFBTSxTQUFDLDhCQUE4Qjs0Q0FDckMsTUFBTSxTQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEluamVjdCxcblx0T3B0aW9uYWwsXG5cdE5nTW9kdWxlLFxuXHRNb2R1bGVXaXRoUHJvdmlkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblN0b3JlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1ub3RpZmljYXRpb24tc3RvcmUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7XG5cdE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUyxcblx0Tk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsXG59IGZyb20gJy4vbm90aWZpY2F0aW9ucy5jb25mJztcbmltcG9ydCB7XG5cdE5vdGlmaWNhdGlvbnNNZXNzYWdlcyxcblx0Tm90aWZpY2F0aW9uc09wdGlvbnMsXG59IGZyb20gJy4vdHlwZXMvbm90aWZpY2F0aW9ucy50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX01FU1NBR0VTLCB1c2VWYWx1ZToge30gfSxcblx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLCB1c2VWYWx1ZToge30gfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdG1lc3NhZ2VzOiBOb3RpZmljYXRpb25zTWVzc2FnZXMsXG5cdFx0b3B0aW9uczogTm90aWZpY2F0aW9uc09wdGlvbnNcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOb3RpZmljYXRpb25zTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUywgdXNlVmFsdWU6IG1lc3NhZ2VzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogTk9USUZJQ0FUSU9OU19JTklUSUFMX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUykgcHJpdmF0ZSBtZXNzYWdlcyxcblx0XHRASW5qZWN0KE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnNcblx0KSB7XG5cdFx0Tm90aWZpY2F0aW9uU3RvcmUubWVzc2FnZXMgPSBtZXNzYWdlcztcblx0XHROb3RpZmljYXRpb25TdG9yZS5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufVxuIl19
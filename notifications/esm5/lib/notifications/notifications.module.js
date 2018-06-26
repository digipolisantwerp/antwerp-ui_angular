/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, NgModule, } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/js-notification-store';
import { NotificationsService } from './services/notifications.service';
import { NOTIFICATIONS_INITIAL_MESSAGES, NOTIFICATIONS_INITIAL_OPTIONS, } from './notifications.conf';
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
export { NotificationsModule };
function NotificationsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationsModule.prototype.messages;
    /** @type {?} */
    NotificationsModule.prototype.options;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixNQUFNLEVBRU4sUUFBUSxHQUVSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFDTiw4QkFBOEIsRUFDOUIsNkJBQTZCLEdBQzdCLE1BQU0sc0JBQXNCLENBQUM7U0FTeUIsRUFBRSxPQUNILEVBQUU7O0lBa0J2RCw2QkFDaUQsUUFBUSxFQUNULE9BQU87UUFETixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUV0RCxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDcEM7Ozs7OztJQXBCTSwyQkFBTzs7Ozs7SUFBZCxVQUNDLFFBQStCLEVBQy9CLE9BQTZCO1FBRTdCLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNWLG9CQUFvQjtnQkFDcEIsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtnQkFDL0QsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTthQUM3RDtTQUNELENBQUM7S0FDRjs7Z0JBcEJELFFBQVEsU0FBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLElBQUksRUFBRTt3QkFDekQsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxJQUFJLEVBQUU7cUJBQ3hEO2lCQUNEOzs7O2dEQWlCRSxNQUFNLFNBQUMsOEJBQThCO2dEQUNyQyxNQUFNLFNBQUMsNkJBQTZCOzs4QkExQ3ZDOztTQXlCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbmplY3QsXG5cdE9wdGlvbmFsLFxuXHROZ01vZHVsZSxcblx0TW9kdWxlV2l0aFByb3ZpZGVycyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TdG9yZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtbm90aWZpY2F0aW9uLXN0b3JlJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1xuXHROT1RJRklDQVRJT05TX0lOSVRJQUxfTUVTU0FHRVMsXG5cdE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLFxufSBmcm9tICcuL25vdGlmaWNhdGlvbnMuY29uZic7XG5pbXBvcnQge1xuXHROb3RpZmljYXRpb25zTWVzc2FnZXMsXG5cdE5vdGlmaWNhdGlvbnNPcHRpb25zLFxufSBmcm9tICcuL3R5cGVzL25vdGlmaWNhdGlvbnMudHlwZXMnO1xuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFtcblx0XHROb3RpZmljYXRpb25zU2VydmljZSxcblx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9NRVNTQUdFUywgdXNlVmFsdWU6IHt9IH0sXG5cdFx0eyBwcm92aWRlOiBOT1RJRklDQVRJT05TX0lOSVRJQUxfT1BUSU9OUywgdXNlVmFsdWU6IHt9IH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChcblx0XHRtZXNzYWdlczogTm90aWZpY2F0aW9uc01lc3NhZ2VzLFxuXHRcdG9wdGlvbnM6IE5vdGlmaWNhdGlvbnNPcHRpb25zXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogTm90aWZpY2F0aW9uc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHROb3RpZmljYXRpb25zU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBOT1RJRklDQVRJT05TX0lOSVRJQUxfTUVTU0FHRVMsIHVzZVZhbHVlOiBtZXNzYWdlcyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE5PVElGSUNBVElPTlNfSU5JVElBTF9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChOT1RJRklDQVRJT05TX0lOSVRJQUxfTUVTU0FHRVMpIHByaXZhdGUgbWVzc2FnZXMsXG5cdFx0QEluamVjdChOT1RJRklDQVRJT05TX0lOSVRJQUxfT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zXG5cdCkge1xuXHRcdE5vdGlmaWNhdGlvblN0b3JlLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG5cdFx0Tm90aWZpY2F0aW9uU3RvcmUub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cbn1cbiJdfQ==
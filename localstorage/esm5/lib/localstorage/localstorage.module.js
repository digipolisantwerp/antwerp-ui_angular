/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { LocalstorageService, } from './services/localstorage.service';
import { LOCALSTORAGE_CONFIG, DEFAULT_LOCALSTORAGE_CONFIG, } from './localstorage.conf';
var ɵ0 = DEFAULT_LOCALSTORAGE_CONFIG, ɵ1 = window;
var LocalstorageModule = /** @class */ (function () {
    function LocalstorageModule(localstorageService) {
        this.localstorageService = localstorageService;
    }
    /**
     * @param {?=} localstorageConfig
     * @return {?}
     */
    LocalstorageModule.forRoot = /**
     * @param {?=} localstorageConfig
     * @return {?}
     */
    function (localstorageConfig) {
        if (localstorageConfig === void 0) { localstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG; }
        return {
            ngModule: LocalstorageModule,
            providers: [
                { provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
                { provide: WINDOW, useValue: window },
                LocalstorageService,
            ],
        };
    };
    LocalstorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    providers: [
                        { provide: LOCALSTORAGE_CONFIG, useValue: ɵ0 },
                        { provide: WINDOW, useValue: ɵ1 },
                        LocalstorageService,
                    ],
                },] },
    ];
    /** @nocollapse */
    LocalstorageModule.ctorParameters = function () { return [
        { type: LocalstorageService }
    ]; };
    return LocalstorageModule;
}());
export { LocalstorageModule };
function LocalstorageModule_tsickle_Closure_declarations() {
    /** @type {?} */
    LocalstorageModule.prototype.localstorageService;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBS3pELE9BQU8sRUFDTixtQkFBbUIsR0FDbkIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLDJCQUEyQixHQUMzQixNQUFNLHFCQUFxQixDQUFDO1NBTWUsMkJBQTJCLE9BQ3hDLE1BQU07O0lBa0JwQyw0QkFDUztRQUFBLHdCQUFtQixHQUFuQixtQkFBbUI7S0FDeEI7Ozs7O0lBZkcsMEJBQU87Ozs7SUFBZCxVQUNDLGtCQUFvRTtRQUFwRSxtQ0FBQSxFQUFBLGdEQUFvRTtRQUVwRSxNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzlELEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyQyxtQkFBbUI7YUFDbkI7U0FDRCxDQUFDO0tBQ0Y7O2dCQXJCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsSUFBNkIsRUFBRTt3QkFDdkUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBUSxFQUFFO3dCQUNyQyxtQkFBbUI7cUJBQ25CO2lCQUNEOzs7O2dCQWZBLG1CQUFtQjs7NkJBUHBCOztTQXVCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7XG5cdExvY2Fsc3RvcmFnZUNvbmZpZyxcbn0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHtcblx0TG9jYWxzdG9yYWdlU2VydmljZSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuXHRMT0NBTFNUT1JBR0VfQ09ORklHLFxuXHRERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcsXG59IGZyb20gJy4vbG9jYWxzdG9yYWdlLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTE9DQUxTVE9SQUdFX0NPTkZJRywgdXNlVmFsdWU6IERFRkFVTFRfTE9DQUxTVE9SQUdFX0NPTkZJRyB9LFxuXHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0TG9jYWxzdG9yYWdlU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0bG9jYWxzdG9yYWdlQ29uZmlnOiBMb2NhbHN0b3JhZ2VDb25maWcgPSBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBMb2NhbHN0b3JhZ2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTFNUT1JBR0VfQ09ORklHLCB1c2VWYWx1ZTogbG9jYWxzdG9yYWdlQ29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0XHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2Vcblx0KSB7fVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { WindowModule } from '@acpaas-ui/ngx-components/utils';
import { Services } from './services/index';
import { Directives } from './directives/index';
import { GTM_CONFIG, GTM_CONFIG_DEFAULT } from './analytics.conf';
var ɵ0 = GTM_CONFIG_DEFAULT;
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AnalyticsModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        config = tslib_1.__assign({}, GTM_CONFIG_DEFAULT, config);
        return {
            ngModule: AnalyticsModule,
            providers: [
                { provide: GTM_CONFIG, useValue: config },
                Services,
            ],
        };
    };
    AnalyticsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        WindowModule,
                    ],
                    providers: [
                        { provide: GTM_CONFIG, useValue: ɵ0 },
                        Services,
                    ],
                    declarations: [
                        Directives,
                    ],
                    exports: [
                        Directives,
                    ],
                },] },
    ];
    return AnalyticsModule;
}());
export { AnalyticsModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztTQVEvQixrQkFBa0I7Ozs7Ozs7O0lBVzdDLHdCQUFROzs7O0lBQWYsVUFBZ0IsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUMxQixNQUFNLHdCQUNGLGtCQUFrQixFQUNsQixNQUFNLENBQ1QsQ0FBQztRQUVGLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDekMsUUFBUTthQUNSO1NBQ0QsQ0FBQztLQUNGOztnQkE3QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFvQixFQUFFO3dCQUNyRCxRQUFRO3FCQUNSO29CQUNELFlBQVksRUFBRTt3QkFDYixVQUFVO3FCQUNWO29CQUNELE9BQU8sRUFBRTt3QkFDUixVQUFVO3FCQUNWO2lCQUNEOzswQkF4QkQ7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaW5kb3dNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuXG5pbXBvcnQgeyBHVE1fQ09ORklHLCBHVE1fQ09ORklHX0RFRkFVTFQgfSBmcm9tICcuL2FuYWx5dGljcy5jb25mJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0V2luZG93TW9kdWxlLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IEdUTV9DT05GSUcsIHVzZVZhbHVlOiBHVE1fQ09ORklHX0RFRkFVTFQgfSxcblx0XHRTZXJ2aWNlcyxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc01vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChjb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdGNvbmZpZyA9IHtcblx0XHRcdC4uLkdUTV9DT05GSUdfREVGQVVMVCxcblx0XHRcdC4uLmNvbmZpZyxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBBbmFseXRpY3NNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBHVE1fQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXG5cdFx0XHRcdFNlcnZpY2VzLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=
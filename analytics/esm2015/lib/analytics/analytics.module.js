/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { WindowModule } from '@acpaas-ui/ngx-components/utils';
import { Services } from './services/index';
import { Directives } from './directives/index';
import { GTM_CONFIG, GTM_CONFIG_DEFAULT } from './analytics.conf';
const ɵ0 = GTM_CONFIG_DEFAULT;
export class AnalyticsModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        config = Object.assign({}, GTM_CONFIG_DEFAULT, config);
        return {
            ngModule: AnalyticsModule,
            providers: [
                { provide: GTM_CONFIG, useValue: config },
                Services,
            ],
        };
    }
}
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO1dBUS9CLGtCQUFrQjtBQVVyRCxNQUFNOzs7OztJQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDMUIsTUFBTSxxQkFDRixrQkFBa0IsRUFDbEIsTUFBTSxDQUNULENBQUM7UUFFRixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLFFBQVE7YUFDUjtTQUNELENBQUM7S0FDRjs7O1lBN0JELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsSUFBb0IsRUFBRTtvQkFDckQsUUFBUTtpQkFDUjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsVUFBVTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtpQkFDVjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV2luZG93TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuaW1wb3J0IHsgR1RNX0NPTkZJRywgR1RNX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi9hbmFseXRpY3MuY29uZic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFdpbmRvd01vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBHVE1fQ09ORklHLCB1c2VWYWx1ZTogR1RNX0NPTkZJR19ERUZBVUxUIH0sXG5cdFx0U2VydmljZXMsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoY29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRjb25maWcgPSB7XG5cdFx0XHQuLi5HVE1fQ09ORklHX0RFRkFVTFQsXG5cdFx0XHQuLi5jb25maWcsXG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQW5hbHl0aWNzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogR1RNX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuXHRcdFx0XHRTZXJ2aWNlcyxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19
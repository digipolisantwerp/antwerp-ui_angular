/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Pipes } from './pipes/index';
import { Components } from './components/index';
import { Services } from './services/index';
import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS, MONTH_LABELS, DEFAULT_MONTH_LABELS, MORE_LABEL, DEFAULT_MORE_LABEL, } from './agenda.conf';
import { HammerConfig } from './hammer.conf';
var ɵ0 = DEFAULT_WEEKDAY_LABELS, ɵ1 = DEFAULT_MONTH_LABELS, ɵ2 = DEFAULT_MORE_LABEL;
var AgendaModule = /** @class */ (function () {
    function AgendaModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} moreLabel
     * @return {?}
     */
    AgendaModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} moreLabel
     * @return {?}
     */
    function (weekdayLabels, monthLabels, moreLabel) {
        return {
            ngModule: AgendaModule,
            providers: [
                Services,
                { provide: WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: MONTH_LABELS, useValue: monthLabels },
                { provide: MORE_LABEL, useValue: moreLabel },
                { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
            ],
        };
    };
    AgendaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        Pipes,
                        Components,
                    ],
                    exports: [
                        Pipes,
                        Components,
                    ],
                    providers: [
                        Services,
                        { provide: WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: MONTH_LABELS, useValue: ɵ1 },
                        { provide: MORE_LABEL, useValue: ɵ2 },
                        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
                    ],
                },] },
    ];
    return AgendaModule;
}());
export { AgendaModule };
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvYWdlbmRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU1QyxPQUFPLEVBQ04sY0FBYyxFQUNkLHNCQUFzQixFQUN0QixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixrQkFBa0IsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztTQWlCTixzQkFBc0IsT0FDeEIsb0JBQW9CLE9BQ3RCLGtCQUFrQjs7Ozs7Ozs7OztJQUs3QyxxQkFBUTs7Ozs7O0lBQWYsVUFDQyxhQUF1QixFQUN2QixXQUFxQixFQUNyQixTQUFpQjtRQUVqQixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtnQkFDcEQsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ2hELEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2dCQUM1QyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2FBQzFEO1NBQ0QsQ0FBQztLQUNGOztnQkFwQ0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixLQUFLO3dCQUNMLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLEtBQUs7d0JBQ0wsVUFBVTtxQkFDVjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsUUFBUTt3QkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxJQUF3QixFQUFFO3dCQUM3RCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxJQUFzQixFQUFFO3dCQUN6RCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFvQixFQUFFO3dCQUNyRCxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO3FCQUMxRDtpQkFDRDs7dUJBdENEOztTQXVDYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUGlwZXMgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHtcblx0V0VFS0RBWV9MQUJFTFMsXG5cdERFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdE1PTlRIX0xBQkVMUyxcblx0REVGQVVMVF9NT05USF9MQUJFTFMsXG5cdE1PUkVfTEFCRUwsXG5cdERFRkFVTFRfTU9SRV9MQUJFTCxcbn0gZnJvbSAnLi9hZ2VuZGEuY29uZic7XG5pbXBvcnQgeyBIYW1tZXJDb25maWcgfSBmcm9tICcuL2hhbW1lci5jb25mJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQaXBlcyxcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IE1PTlRIX0xBQkVMUywgdXNlVmFsdWU6IERFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBNT1JFX0xBQkVMLCB1c2VWYWx1ZTogREVGQVVMVF9NT1JFX0xBQkVMIH0sXG5cdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmRhTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHdlZWtkYXlMYWJlbHM6IHN0cmluZ1tdLFxuXHRcdG1vbnRoTGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb3JlTGFiZWw6IHN0cmluZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFnZW5kYU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRTZXJ2aWNlcyxcblx0XHRcdFx0eyBwcm92aWRlOiBXRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PUkVfTEFCRUwsIHVzZVZhbHVlOiBtb3JlTGFiZWwgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJDb25maWcgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19
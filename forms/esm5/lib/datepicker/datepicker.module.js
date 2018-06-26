/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { CalendarModule, CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS } from '@acpaas-ui/ngx-components/calendar';
import { MaskModule } from '../mask';
import { Components } from './components';
import { DATEPICKER_ERROR_LABELS, DATEPICKER_DEFAULT_ERROR_LABELS } from './datepicker.conf';
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS, ɵ2 = DATEPICKER_DEFAULT_ERROR_LABELS;
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} errorLabels
     * @return {?}
     */
    DatepickerModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} errorLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels, errorLabels) {
        return {
            ngModule: DatepickerModule,
            providers: [
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
                { provide: DATEPICKER_ERROR_LABELS, useValue: errorLabels },
            ],
        };
    };
    DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CalendarModule,
                        FlyoutModule,
                        MaskModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: [
                        { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                        { provide: DATEPICKER_ERROR_LABELS, useValue: ɵ2 },
                    ],
                },] },
    ];
    return DatepickerModule;
}());
export { DatepickerModule };
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUNOLGNBQWMsRUFDZCx1QkFBdUIsRUFDdkIsK0JBQStCLEVBQy9CLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLCtCQUErQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7U0FtQjdDLCtCQUErQixPQUNqQyw2QkFBNkIsT0FDM0IsK0JBQStCOzs7Ozs7Ozs7O0lBSXZFLHlCQUFROzs7Ozs7SUFBZixVQUNDLGFBQXVCLEVBQ3ZCLFdBQXFCLEVBQ3JCLFdBQWtDO1FBRWxDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7Z0JBQzdELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDM0Q7U0FDRCxDQUFDO0tBQ0Y7O2dCQW5DRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixVQUFVO3FCQUNWO29CQUNELFlBQVksbUJBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxDQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLElBQWlDLEVBQUU7d0JBQy9FLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsSUFBK0IsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUFpQyxFQUFFO3FCQUMvRTtpQkFDRDs7MkJBdkNEOztTQXdDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGbHlvdXRNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2ZseW91dCc7XG5pbXBvcnQge1xuXHRDYWxlbmRhck1vZHVsZSxcblx0Q0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFNcbn0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jYWxlbmRhcic7XG5cbmltcG9ydCB7IE1hc2tNb2R1bGUgfSBmcm9tICcuLi9tYXNrJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEQVRFUElDS0VSX0VSUk9SX0xBQkVMUywgREFURVBJQ0tFUl9ERUZBVUxUX0VSUk9SX0xBQkVMUyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25mJztcbmltcG9ydCB7IERhdGVwaWNrZXJFcnJvckxhYmVscyB9IGZyb20gJy4vdHlwZXMvZGF0ZXBpY2tlci50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRDYWxlbmRhck1vZHVsZSxcblx0XHRGbHlvdXRNb2R1bGUsXG5cdFx0TWFza01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9LFxuXHRcdHsgcHJvdmlkZTogREFURVBJQ0tFUl9FUlJPUl9MQUJFTFMsIHVzZVZhbHVlOiBEQVRFUElDS0VSX0RFRkFVTFRfRVJST1JfTEFCRUxTIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0d2Vla2RheUxhYmVsczogc3RyaW5nW10sXG5cdFx0bW9udGhMYWJlbHM6IHN0cmluZ1tdLFxuXHRcdGVycm9yTGFiZWxzOiBEYXRlcGlja2VyRXJyb3JMYWJlbHNcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBEYXRlcGlja2VyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiB3ZWVrZGF5TGFiZWxzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCB1c2VWYWx1ZTogbW9udGhMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBEQVRFUElDS0VSX0VSUk9SX0xBQkVMUywgdXNlVmFsdWU6IGVycm9yTGFiZWxzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==
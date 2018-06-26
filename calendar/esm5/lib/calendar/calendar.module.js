/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components/index';
import { Services } from './services/index';
import { Pipes } from './pipes/index';
import { CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS } from './calendar.conf';
import { CalendarService } from './services/calendar.service';
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    CalendarModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    };
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        Components,
                        Pipes,
                    ],
                    exports: [
                        Components,
                        Pipes,
                    ],
                    providers: [
                        Services,
                        { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                    ],
                },] },
    ];
    return CalendarModule;
}());
export { CalendarModule };
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsK0JBQStCLEVBQy9CLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7U0FnQmQsK0JBQStCLE9BQ2pDLDZCQUE2Qjs7Ozs7Ozs7O0lBSW5FLHVCQUFROzs7OztJQUFmLFVBQ0MsYUFBa0MsRUFDbEMsV0FBOEI7UUFFOUIsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNWLGVBQWU7Z0JBQ2YsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtnQkFDN0QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUN6RDtTQUNELENBQUM7S0FDRjs7Z0JBL0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsVUFBVTt3QkFDVixLQUFLO3FCQUNMO29CQUNELE9BQU8sRUFBRTt3QkFDUixVQUFVO3dCQUNWLEtBQUs7cUJBQ0w7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUFpQyxFQUFFO3dCQUMvRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLElBQStCLEVBQUU7cUJBQzNFO2lCQUNEOzt5QkFqQ0Q7O1NBa0NhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUGlwZXMgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcblxuaW1wb3J0IHtcblx0Q0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFNcbn0gZnJvbSAnLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IFdlZWtkYXlMYWJlbHNDb25maWcsIE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRcdFBpcGVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHRQaXBlcyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IENBTEVOREFSX01PTlRIX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWcsXG5cdFx0bW9udGhMYWJlbHM6IE1vbnRoTGFiZWxzQ29uZmlnXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQ2FsZW5kYXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0Q2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCB1c2VWYWx1ZTogd2Vla2RheUxhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENBTEVOREFSX01PTlRIX0xBQkVMUywgdXNlVmFsdWU6IG1vbnRoTGFiZWxzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==
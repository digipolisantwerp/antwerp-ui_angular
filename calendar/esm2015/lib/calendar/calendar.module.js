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
const ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
export class CalendarModule {
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    static forChild(weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    }
}
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
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsK0JBQStCLEVBQy9CLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7V0FnQmQsK0JBQStCLE9BQ2pDLDZCQUE2QjtBQUczRSxNQUFNOzs7Ozs7SUFDTCxNQUFNLENBQUMsUUFBUSxDQUNkLGFBQWtDLEVBQ2xDLFdBQThCO1FBRTlCLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVixlQUFlO2dCQUNmLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7Z0JBQzdELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDekQ7U0FDRCxDQUFDO0tBQ0Y7OztZQS9CRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLFVBQVU7b0JBQ1YsS0FBSztpQkFDTDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtvQkFDVixLQUFLO2lCQUNMO2dCQUNELFNBQVMsRUFBRTtvQkFDVixRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsSUFBaUMsRUFBRTtvQkFDL0UsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxJQUErQixFQUFFO2lCQUMzRTthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbmltcG9ydCB7XG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG59IGZyb20gJy4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQgeyBXZWVrZGF5TGFiZWxzQ29uZmlnLCBNb250aExhYmVsc0NvbmZpZyB9IGZyb20gJy4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHRQaXBlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0UGlwZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRcdG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdENhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=
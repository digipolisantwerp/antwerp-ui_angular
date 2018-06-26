/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';
import { Components } from './components';
import { Services } from './services';
import { UPLOAD_VALIDATION_MESSAGES } from './upload.conf';
const ɵ0 = {};
export class UploadModule {
    /**
     * @param {?=} validationMessages
     * @return {?}
     */
    static forChild(validationMessages = {}) {
        return {
            ngModule: UploadModule,
            providers: [
                { provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages },
            ],
        };
    }
}
UploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    ProgressBarModule,
                    FormsModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    ...Services,
                    { provide: UPLOAD_VALIDATION_MESSAGES, useValue: ɵ0 },
                ],
            },] },
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUEwQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZUFBZSxDQUFDO1dBa0JSLEVBQUU7QUFHckQsTUFBTTs7Ozs7SUFDTCxNQUFNLENBQUMsUUFBUSxDQUNkLHFCQUF5QyxFQUFFO1FBRTNDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7YUFDckU7U0FDRCxDQUFDO0tBQ0Y7OztZQTVCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7b0JBQ1gsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxJQUFJLEVBQUU7aUJBQ3JEO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3Byb2dyZXNzLWJhcic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTIH0gZnJvbSAnLi91cGxvYWQuY29uZic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRQcm9ncmVzc0Jhck1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLlNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMsIHVzZVZhbHVlOiB7fSB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0dmFsaWRhdGlvbk1lc3NhZ2VzOiBWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fVxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFVwbG9hZE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTLCB1c2VWYWx1ZTogdmFsaWRhdGlvbk1lc3NhZ2VzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==
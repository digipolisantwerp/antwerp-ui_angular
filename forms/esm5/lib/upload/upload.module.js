/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';
import { Components } from './components';
import { Services } from './services';
import { UPLOAD_VALIDATION_MESSAGES } from './upload.conf';
var ɵ0 = {};
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    /**
     * @param {?=} validationMessages
     * @return {?}
     */
    UploadModule.forChild = /**
     * @param {?=} validationMessages
     * @return {?}
     */
    function (validationMessages) {
        if (validationMessages === void 0) { validationMessages = {}; }
        return {
            ngModule: UploadModule,
            providers: [
                { provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages },
            ],
        };
    };
    UploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        CommonModule,
                        ProgressBarModule,
                        FormsModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: tslib_1.__spread(Services, [
                        { provide: UPLOAD_VALIDATION_MESSAGES, useValue: ɵ0 },
                    ]),
                },] },
    ];
    return UploadModule;
}());
export { UploadModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztTQWtCUixFQUFFOzs7Ozs7OztJQUk3QyxxQkFBUTs7OztJQUFmLFVBQ0Msa0JBQTJDO1FBQTNDLG1DQUFBLEVBQUEsdUJBQTJDO1FBRTNDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7YUFDckU7U0FDRCxDQUFDO0tBQ0Y7O2dCQTVCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1g7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxVQUFVLENBQ2I7b0JBQ0QsU0FBUyxtQkFDTCxRQUFRO3dCQUNYLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsSUFBSSxFQUFFO3NCQUNyRDtpQkFDRDs7dUJBN0JEOztTQThCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9wcm9ncmVzcy1iYXInO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUyB9IGZyb20gJy4vdXBsb2FkLmNvbmYnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi90eXBlcy91cGxvYWQudHlwZXMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UHJvZ3Jlc3NCYXJNb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5TZXJ2aWNlcyxcblx0XHR7IHByb3ZpZGU6IFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTLCB1c2VWYWx1ZToge30gfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdHZhbGlkYXRpb25NZXNzYWdlczogVmFsaWRhdGlvbk1lc3NhZ2VzID0ge31cblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBVcGxvYWRNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUywgdXNlVmFsdWU6IHZhbGlkYXRpb25NZXNzYWdlcyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=
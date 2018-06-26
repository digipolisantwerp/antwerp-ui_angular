/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';
import { Components } from './components';
import { STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES } from './status-bar.conf';
const ɵ0 = STATUSBAR_DEFAULT_TYPES;
export class StatusbarModule {
    /**
     * @param {?} availableTypes
     * @return {?}
     */
    static forChild(availableTypes) {
        return {
            ngModule: StatusbarModule,
            providers: [
                { provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes },
            ],
        };
    }
}
StatusbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LabelsModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    { provide: STATUSBAR_AVAILABLE_TYPES, useValue: ɵ0 },
                ],
            },] },
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7V0FnQnJDLHVCQUF1QjtBQUd6RSxNQUFNOzs7OztJQUNMLE1BQU0sQ0FBQyxRQUFRLENBQ2QsY0FBdUM7UUFFdkMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7YUFDaEU7U0FDRCxDQUFDO0tBQ0Y7OztZQTNCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFFWixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxJQUF5QixFQUFFO2lCQUN6RTthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMYWJlbHNNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGF0dXNiYXJBdmFpbGFibGVUeXBlcyB9IGZyb20gJy4vdHlwZXMvc3RhdHVzLWJhci50eXBlcyc7XG5pbXBvcnQgeyBTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9IGZyb20gJy4vc3RhdHVzLWJhci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsIHVzZVZhbHVlOiBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNiYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0YXZhaWxhYmxlVHlwZXM6IFN0YXR1c2JhckF2YWlsYWJsZVR5cGVzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RhdHVzYmFyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUywgdXNlVmFsdWU6IGF2YWlsYWJsZVR5cGVzIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==
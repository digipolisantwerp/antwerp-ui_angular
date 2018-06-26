/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';
import { Components } from './components';
import { STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES } from './status-bar.conf';
var ɵ0 = STATUSBAR_DEFAULT_TYPES;
var StatusbarModule = /** @class */ (function () {
    function StatusbarModule() {
    }
    /**
     * @param {?} availableTypes
     * @return {?}
     */
    StatusbarModule.forChild = /**
     * @param {?} availableTypes
     * @return {?}
     */
    function (availableTypes) {
        return {
            ngModule: StatusbarModule,
            providers: [
                { provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes },
            ],
        };
    };
    StatusbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        LabelsModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: [
                        { provide: STATUSBAR_AVAILABLE_TYPES, useValue: ɵ0 },
                    ],
                },] },
    ];
    return StatusbarModule;
}());
export { StatusbarModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO1NBZ0JyQyx1QkFBdUI7Ozs7Ozs7O0lBSWpFLHdCQUFROzs7O0lBQWYsVUFDQyxjQUF1QztRQUV2QyxNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTthQUNoRTtTQUNELENBQUM7S0FDRjs7Z0JBM0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUVaLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxVQUFVLENBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsSUFBeUIsRUFBRTtxQkFDekU7aUJBQ0Q7OzBCQTFCRDs7U0EyQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTGFiZWxzTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgfSBmcm9tICcuL3R5cGVzL3N0YXR1cy1iYXIudHlwZXMnO1xuaW1wb3J0IHsgU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUywgU1RBVFVTQkFSX0RFRkFVTFRfVFlQRVMgfSBmcm9tICcuL3N0YXR1cy1iYXIuY29uZic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLFxuXG5cdFx0TGFiZWxzTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTLCB1c2VWYWx1ZTogU1RBVFVTQkFSX0RFRkFVTFRfVFlQRVMgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzYmFyTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdGF2YWlsYWJsZVR5cGVzOiBTdGF0dXNiYXJBdmFpbGFibGVUeXBlc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0YXR1c2Jhck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsIHVzZVZhbHVlOiBhdmFpbGFibGVUeXBlcyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=
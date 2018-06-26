/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components/index';
import { PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT } from './pagination.conf';
var ɵ0 = PAGINATION_LABELS_DEFAULT;
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @param {?} paginationLabels
     * @return {?}
     */
    PaginationModule.forChild = /**
     * @param {?} paginationLabels
     * @return {?}
     */
    function (paginationLabels) {
        return {
            ngModule: PaginationModule,
            providers: [
                { provide: PAGINATION_LABELS, useValue: paginationLabels },
            ],
        };
    };
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: [
                        { provide: PAGINATION_LABELS, useValue: ɵ0 },
                    ],
                },] },
    ];
    return PaginationModule;
}());
export { PaginationModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO1NBYXZDLHlCQUF5Qjs7Ozs7Ozs7SUFJM0QseUJBQVE7Ozs7SUFBZixVQUNDLGdCQUFrQztRQUVsQyxNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7YUFDMUQ7U0FDRCxDQUFDO0tBQ0Y7O2dCQXhCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxVQUFVLENBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsSUFBMkIsRUFBRTtxQkFDbkU7aUJBQ0Q7OzJCQXBCRDs7U0FxQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkxhYmVscyB9IGZyb20gJy4vdHlwZXMvcGFnaW5hdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBQQUdJTkFUSU9OX0xBQkVMUywgUEFHSU5BVElPTl9MQUJFTFNfREVGQVVMVCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogUEFHSU5BVElPTl9MQUJFTFMsIHVzZVZhbHVlOiBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0cGFnaW5hdGlvbkxhYmVsczogUGFnaW5hdGlvbkxhYmVsc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBQQUdJTkFUSU9OX0xBQkVMUywgdXNlVmFsdWU6IHBhZ2luYXRpb25MYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19
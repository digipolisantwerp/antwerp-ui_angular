/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components/index';
import { PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT } from './pagination.conf';
const ɵ0 = PAGINATION_LABELS_DEFAULT;
export class PaginationModule {
    /**
     * @param {?} paginationLabels
     * @return {?}
     */
    static forChild(paginationLabels) {
        return {
            ngModule: PaginationModule,
            providers: [
                { provide: PAGINATION_LABELS, useValue: paginationLabels },
            ],
        };
    }
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    { provide: PAGINATION_LABELS, useValue: ɵ0 },
                ],
            },] },
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7V0FhdkMseUJBQXlCO0FBR25FLE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FDZCxnQkFBa0M7UUFFbEMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQzFEO1NBQ0QsQ0FBQztLQUNGOzs7WUF4QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxJQUEyQixFQUFFO2lCQUNuRTthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkxhYmVscyB9IGZyb20gJy4vdHlwZXMvcGFnaW5hdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBQQUdJTkFUSU9OX0xBQkVMUywgUEFHSU5BVElPTl9MQUJFTFNfREVGQVVMVCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogUEFHSU5BVElPTl9MQUJFTFMsIHVzZVZhbHVlOiBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0cGFnaW5hdGlvbkxhYmVsczogUGFnaW5hdGlvbkxhYmVsc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBQQUdJTkFUSU9OX0xBQkVMUywgdXNlVmFsdWU6IHBhZ2luYXRpb25MYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19
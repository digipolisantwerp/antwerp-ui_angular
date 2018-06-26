/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';
import { Components } from './components/index';
import { ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL } from './item-counter.conf';
var ɵ0 = undefined, ɵ1 = undefined;
var ItemCounterModule = /** @class */ (function () {
    function ItemCounterModule() {
    }
    /**
     * @param {?} itemCounterLabel
     * @param {?} itemsPerPageLabel
     * @return {?}
     */
    ItemCounterModule.forChild = /**
     * @param {?} itemCounterLabel
     * @param {?} itemsPerPageLabel
     * @return {?}
     */
    function (itemCounterLabel, itemsPerPageLabel) {
        return {
            ngModule: ItemCounterModule,
            providers: [
                { provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
                { provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel },
            ],
        };
    };
    ItemCounterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        LabelsModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: [
                        { provide: ITEM_COUNTER_LABEL, useValue: ɵ0 },
                        { provide: ITEMS_PER_PAGE_LABEL, useValue: ɵ1 },
                    ],
                },] },
    ];
    return ItemCounterModule;
}());
export { ItemCounterModule };
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQVMsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7U0FlcEMsU0FBUyxPQUNQLFNBQVM7Ozs7Ozs7OztJQUk5QywwQkFBUTs7Ozs7SUFBZixVQUNDLGdCQUF1QixFQUN2QixpQkFBd0I7UUFFeEIsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2dCQUMzRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7YUFDOUQ7U0FDRCxDQUFDO0tBQ0Y7O2dCQTdCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxZQUFZO3FCQUNaO29CQUNELFlBQVksbUJBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxDQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLElBQVcsRUFBRTt3QkFDcEQsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxJQUFXLEVBQUU7cUJBQ3REO2lCQUNEOzs0QkExQkQ7O1NBMkJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMYWJlbHNNb2R1bGUsIExhYmVsIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5pbXBvcnQgeyBJVEVNX0NPVU5URVJfTEFCRUwsIElURU1TX1BFUl9QQUdFX0xBQkVMIH0gZnJvbSAnLi9pdGVtLWNvdW50ZXIuY29uZic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0TGFiZWxzTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBJVEVNX0NPVU5URVJfTEFCRUwsIHVzZVZhbHVlOiB1bmRlZmluZWQgfSxcblx0XHR7IHByb3ZpZGU6IElURU1TX1BFUl9QQUdFX0xBQkVMLCB1c2VWYWx1ZTogdW5kZWZpbmVkIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db3VudGVyTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKFxuXHRcdGl0ZW1Db3VudGVyTGFiZWw6IExhYmVsLFxuXHRcdGl0ZW1zUGVyUGFnZUxhYmVsOiBMYWJlbFxuXHQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEl0ZW1Db3VudGVyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogSVRFTV9DT1VOVEVSX0xBQkVMLCB1c2VWYWx1ZTogaXRlbUNvdW50ZXJMYWJlbCB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IElURU1TX1BFUl9QQUdFX0xBQkVMLCB1c2VWYWx1ZTogaXRlbXNQZXJQYWdlTGFiZWwgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19
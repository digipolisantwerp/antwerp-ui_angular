/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { LocalstorageReduxPlugin } from './localstorage/localstorage.enhancer';
var LocalstorageStoreModule = /** @class */ (function () {
    function LocalstorageStoreModule() {
    }
    LocalstorageStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgReduxModule],
                    providers: [LocalstorageReduxPlugin],
                },] },
    ];
    return LocalstorageStoreModule;
}());
export { LocalstorageStoreModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2xvY2Fsc3RvcmFnZS9zdG9yZS9zdG9yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztnQkFFOUUsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxDQUFFLGFBQWEsQ0FBRTtvQkFDMUIsU0FBUyxFQUFFLENBQUUsdUJBQXVCLENBQUU7aUJBQ3RDOztrQ0FQRDs7U0FRYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSZWR1eE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVJlZHV4UGx1Z2luIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmVuaGFuY2VyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBOZ1JlZHV4TW9kdWxlIF0sXG5cdHByb3ZpZGVyczogWyBMb2NhbHN0b3JhZ2VSZWR1eFBsdWdpbiBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VTdG9yZU1vZHVsZSB7fVxuIl19
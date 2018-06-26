/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, } from '@angular/core';
import { get } from 'lodash-es';
var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent() {
    }
    Object.defineProperty(SidebarItemComponent.prototype, "itemClassList", {
        get: /**
         * @return {?}
         */
        function () {
            return "o-sidebar__item " + get(this.item, 'classList', '');
        },
        enumerable: true,
        configurable: true
    });
    SidebarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-sidebar-item',
                    template: "<ng-container *ngIf=\"item.href\">\n\t<a href=\"{{item.href}}\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n<ng-container *ngIf=\"item.routerLink\">\n\t<a [routerLink]=\"item.routerLink\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n\n<ng-container *ngFor=\"let itm of item.items\">\n\t<aui-sidebar-item [item]=\"itm\"></aui-sidebar-item>\n</ng-container>\n",
                },] },
    ];
    SidebarItemComponent.propDecorators = {
        itemClassList: [{ type: HostBinding, args: ['class',] }],
        item: [{ type: Input }]
    };
    return SidebarItemComponent;
}());
export { SidebarItemComponent };
function SidebarItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SidebarItemComponent.prototype.item;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0lBeUIvQixzQkFBaUMsK0NBQWE7Ozs7UUFBOUM7WUFDQyxNQUFNLENBQUMscUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUcsQ0FBQztTQUM1RDs7O09BQUE7O2dCQXZCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDRsQkFnQlY7aUJBQ0E7OztnQ0FFQyxXQUFXLFNBQUMsT0FBTzt1QkFHbkIsS0FBSzs7K0JBakNQOztTQTZCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBTaWRlYmFySXRlbSB9IGZyb20gJy4uLy4uL3R5cGVzL3NpZGViYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc2lkZWJhci1pdGVtJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5ocmVmXCI+XG5cdDxhIGhyZWY9XCJ7e2l0ZW0uaHJlZn19XCIgW3N0eWxlLmJvcmRlci1jb2xvcl09XCJpdGVtLnRoZW1lPy5jb2xvclwiPlxuXHRcdDxpbWcgKm5nSWY9XCJpdGVtLmljb25cIiBzcmM9XCJ7e2l0ZW0uaWNvbn19XCIgLz5cblx0XHQ8aDIgY2xhc3M9XCJoNVwiPnt7aXRlbS5sYWJlbH19PC9oMj5cblx0PC9hPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5yb3V0ZXJMaW5rXCI+XG5cdDxhIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiaXRlbS50aGVtZT8uY29sb3JcIj5cblx0XHQ8aW1nICpuZ0lmPVwiaXRlbS5pY29uXCIgc3JjPVwie3tpdGVtLmljb259fVwiIC8+XG5cdFx0PGgyIGNsYXNzPVwiaDVcIj57e2l0ZW0ubGFiZWx9fTwvaDI+XG5cdDwvYT5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdG0gb2YgaXRlbS5pdGVtc1wiPlxuXHQ8YXVpLXNpZGViYXItaXRlbSBbaXRlbV09XCJpdG1cIj48L2F1aS1zaWRlYmFyLWl0ZW0+XG48L25nLWNvbnRhaW5lcj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJJdGVtQ29tcG9uZW50IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIHB1YmxpYyBnZXQgaXRlbUNsYXNzTGlzdCgpIHtcblx0XHRyZXR1cm4gYG8tc2lkZWJhcl9faXRlbSAke2dldCh0aGlzLml0ZW0sICdjbGFzc0xpc3QnLCAnJyl9YDtcblx0fVxuXHRASW5wdXQoKSBwdWJsaWMgaXRlbTogU2lkZWJhckl0ZW07XG59XG4iXX0=
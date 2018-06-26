/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.closeOnSelected = true;
        this.title = 'Onderweg';
        this.open = false;
        this.items = [];
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    SidebarComponent.prototype.toggle = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = !this.open; }
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.itemClicked = /**
     * @return {?}
     */
    function () {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-sidebar',
                    template: "<div class=\"o-sidebar {{ open ? 'o-sidebar--open' : '' }}\">\n\t<div class=\"o-sidebar__header\">\n\t\t<button class=\"a-button a-button-transparent has-icon\" (click)=\"toggle(false)\">\n\t\t\t<i class=\"icon-close\"></i>\n\t\t</button>\n\t\t<h1 class=\"h6\">{{ title | uppercase }}</h1>\n\t</div>\n\t<div class=\"o-sidebar__items\">\n\t\t<aui-sidebar-item *ngFor=\"let item of items\" [item]=\"item\" (click)=\"itemClicked()\"></aui-sidebar-item>\n\t</div>\n\t<ng-content select=\".o-sidebar__footer\"></ng-content>\n</div>\n\n<div class=\"m-overlay\"\n\t*ngIf=\"open\"\n\t(click)=\"toggle(false)\">\n</div>\n",
                    styles: [".m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}"],
                },] },
    ];
    SidebarComponent.propDecorators = {
        closeOnSelected: [{ type: Input }],
        title: [{ type: Input }],
        open: [{ type: Input }],
        items: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return SidebarComponent;
}());
export { SidebarComponent };
function SidebarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SidebarComponent.prototype.closeOnSelected;
    /** @type {?} */
    SidebarComponent.prototype.title;
    /** @type {?} */
    SidebarComponent.prototype.open;
    /** @type {?} */
    SidebarComponent.prototype.items;
    /** @type {?} */
    SidebarComponent.prototype.opened;
    /** @type {?} */
    SidebarComponent.prototype.closed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OzsrQkEyQnBDLElBQUk7cUJBQ2QsVUFBVTtvQkFDWCxLQUFLO3FCQUNXLEVBQUU7c0JBRUssSUFBSSxZQUFZLEVBQVE7c0JBQ3hCLElBQUksWUFBWSxFQUFROzs7Ozs7SUFFL0QsaUNBQU07Ozs7Y0FBQyxJQUEwQjtRQUExQixxQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxJQUFJO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25COzs7OztJQUdLLHNDQUFXOzs7O1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7OztnQkE1Q0YsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsc21CQWlCVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyw2UUFBNlEsQ0FBQztpQkFDdlI7OztrQ0FFQyxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUVMLE1BQU07eUJBQ04sTUFBTTs7MkJBakNSOztTQTBCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaWRlYmFySXRlbSwgU2lkZWJhclN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2lkZWJhci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zaWRlYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1zaWRlYmFyIHt7IG9wZW4gPyAnby1zaWRlYmFyLS1vcGVuJyA6ICcnIH19XCI+XG5cdDxkaXYgY2xhc3M9XCJvLXNpZGViYXJfX2hlYWRlclwiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi10cmFuc3BhcmVudCBoYXMtaWNvblwiIChjbGljayk9XCJ0b2dnbGUoZmFsc2UpXCI+XG5cdFx0XHQ8aSBjbGFzcz1cImljb24tY2xvc2VcIj48L2k+XG5cdFx0PC9idXR0b24+XG5cdFx0PGgxIGNsYXNzPVwiaDZcIj57eyB0aXRsZSB8IHVwcGVyY2FzZSB9fTwvaDE+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiby1zaWRlYmFyX19pdGVtc1wiPlxuXHRcdDxhdWktc2lkZWJhci1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW2l0ZW1dPVwiaXRlbVwiIChjbGljayk9XCJpdGVtQ2xpY2tlZCgpXCI+PC9hdWktc2lkZWJhci1pdGVtPlxuXHQ8L2Rpdj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiLm8tc2lkZWJhcl9fZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJtLW92ZXJsYXlcIlxuXHQqbmdJZj1cIm9wZW5cIlxuXHQoY2xpY2spPVwidG9nZ2xlKGZhbHNlKVwiPlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgLm0tc2lkZWJhcntoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dHJhbnNpdGlvbjp3aWR0aCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSl9Lm0tc2lkZWJhci0tb3Blbnt3aWR0aDoyMi41cmVtfS5tLXNpZGViYXJfX2NvbnRlbnR7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3dpZHRoOjIyLjVyZW07aGVpZ2h0OjEwMCV9Lm0tc2lkZWJhcl9fY29udGVudC0tcGFkZGluZ3twYWRkaW5nOjNyZW19YF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgY2xvc2VPblNlbGVjdGVkID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIHRpdGxlID0gJ09uZGVyd2VnJztcblx0QElucHV0KCkgcHVibGljIG9wZW4gPSBmYWxzZTtcblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBTaWRlYmFySXRlbVtdID0gW107XG5cblx0QE91dHB1dCgpIHB1YmxpYyBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRwdWJsaWMgdG9nZ2xlKG9wZW46IGJvb2xlYW4gPSAhdGhpcy5vcGVuKSB7XG5cdFx0dGhpcy5vcGVuID0gb3BlbjtcblxuXHRcdGlmIChvcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW5lZC5lbWl0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2VkLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaXRlbUNsaWNrZWQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2xvc2VPblNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZShmYWxzZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=
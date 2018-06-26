/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SidebarComponent {
    constructor() {
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
    toggle(open = !this.open) {
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    }
    /**
     * @return {?}
     */
    itemClicked() {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-sidebar',
                template: `<div class="o-sidebar {{ open ? 'o-sidebar--open' : '' }}">
	<div class="o-sidebar__header">
		<button class="a-button a-button-transparent has-icon" (click)="toggle(false)">
			<i class="icon-close"></i>
		</button>
		<h1 class="h6">{{ title | uppercase }}</h1>
	</div>
	<div class="o-sidebar__items">
		<aui-sidebar-item *ngFor="let item of items" [item]="item" (click)="itemClicked()"></aui-sidebar-item>
	</div>
	<ng-content select=".o-sidebar__footer"></ng-content>
</div>

<div class="m-overlay"
	*ngIf="open"
	(click)="toggle(false)">
</div>
`,
                styles: [`.m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEwQnZFLE1BQU07OytCQUM2QixJQUFJO3FCQUNkLFVBQVU7b0JBQ1gsS0FBSztxQkFDVyxFQUFFO3NCQUVLLElBQUksWUFBWSxFQUFRO3NCQUN4QixJQUFJLFlBQVksRUFBUTs7Ozs7O0lBRS9ELE1BQU0sQ0FBQyxPQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25COzs7OztJQUdLLFdBQVc7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjs7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMsNlFBQTZRLENBQUM7YUFDdlI7Ozs4QkFFQyxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUVMLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNpZGViYXJJdGVtLCBTaWRlYmFyU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcy9zaWRlYmFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNpZGViYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvLXNpZGViYXIge3sgb3BlbiA/ICdvLXNpZGViYXItLW9wZW4nIDogJycgfX1cIj5cblx0PGRpdiBjbGFzcz1cIm8tc2lkZWJhcl9faGVhZGVyXCI+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLXRyYW5zcGFyZW50IGhhcy1pY29uXCIgKGNsaWNrKT1cInRvZ2dsZShmYWxzZSlcIj5cblx0XHRcdDxpIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvaT5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8aDEgY2xhc3M9XCJoNlwiPnt7IHRpdGxlIHwgdXBwZXJjYXNlIH19PC9oMT5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJvLXNpZGViYXJfX2l0ZW1zXCI+XG5cdFx0PGF1aS1zaWRlYmFyLWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbaXRlbV09XCJpdGVtXCIgKGNsaWNrKT1cIml0ZW1DbGlja2VkKClcIj48L2F1aS1zaWRlYmFyLWl0ZW0+XG5cdDwvZGl2PlxuXHQ8bmctY29udGVudCBzZWxlY3Q9XCIuby1zaWRlYmFyX19mb290ZXJcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tb3ZlcmxheVwiXG5cdCpuZ0lmPVwib3BlblwiXG5cdChjbGljayk9XCJ0b2dnbGUoZmFsc2UpXCI+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1zaWRlYmFye2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjt3aWR0aDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2l0aW9uOndpZHRoIC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1zaWRlYmFyLS1vcGVue3dpZHRoOjIyLjVyZW19Lm0tc2lkZWJhcl9fY29udGVudHtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87d2lkdGg6MjIuNXJlbTtoZWlnaHQ6MTAwJX0ubS1zaWRlYmFyX19jb250ZW50LS1wYWRkaW5ne3BhZGRpbmc6M3JlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uU2VsZWN0ZWQgPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnT25kZXJ3ZWcnO1xuXHRASW5wdXQoKSBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbXM6IFNpZGViYXJJdGVtW10gPSBbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHB1YmxpYyB0b2dnbGUob3BlbjogYm9vbGVhbiA9ICF0aGlzLm9wZW4pIHtcblx0XHR0aGlzLm9wZW4gPSBvcGVuO1xuXG5cdFx0aWYgKG9wZW4pIHtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpdGVtQ2xpY2tlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uU2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMudG9nZ2xlKGZhbHNlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
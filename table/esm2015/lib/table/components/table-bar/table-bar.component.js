/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Filter } from '@acpaas-ui/ngx-components/utils';
export class TableBarComponent {
    constructor() {
        this.filters = [];
        this.filter = new EventEmitter();
        this.open = false;
        this.invisibleItems = false;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.countInvisibleItems();
    }
    /**
     * @param {?} rectContainer
     * @param {?} rectChild
     * @return {?}
     */
    isInVisible(rectContainer, rectChild) {
        return rectContainer.bottom < rectChild.top;
    }
    /**
     * @return {?}
     */
    countInvisibleItems() {
        const /** @type {?} */ rectContainer = this.ref.nativeElement.getBoundingClientRect();
        const /** @type {?} */ childNodes = this.ref.nativeElement.childNodes;
        for (let /** @type {?} */ i = childNodes.length - 1; i >= 0; i--) {
            const /** @type {?} */ o = childNodes[i];
            if (o.nodeName === 'AUI-TABLE-BAR-ITEM' && o.getBoundingClientRect) {
                const /** @type {?} */ rectChild = o.getBoundingClientRect();
                if (this.isInVisible(rectContainer, rectChild)) {
                    this.invisibleItems = true;
                    break;
                }
            }
            if (i === 0) {
                this.invisibleItems = false;
            }
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.open = !this.open;
    }
}
TableBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-table-bar',
                template: `<div class="aui-table-bar">
	<div class="filters" #ref [ngClass]="{open: open}">
		<ng-content select="[auiTableBarItem]"></ng-content>
		<div class="aui-table-bar-item" *ngIf="open">
			<button class="a-button a-button--transparent" (click)="toggle()">Show less...</button>
		</div>
	</div>
	<div class="show-more" *ngIf="!open && invisibleItems">
		<button class="a-button a-button--transparent" (click)="toggle()">Show more...</button>
	</div>

	<ng-content select="[auiTableBarSearch]"></ng-content>
</div>
`,
            },] },
];
TableBarComponent.propDecorators = {
    filters: [{ type: Input }],
    testFilter: [{ type: Input }],
    filter: [{ type: Output }],
    ref: [{ type: ViewChild, args: ['ref',] }]
};
function TableBarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TableBarComponent.prototype.filters;
    /** @type {?} */
    TableBarComponent.prototype.testFilter;
    /** @type {?} */
    TableBarComponent.prototype.filter;
    /** @type {?} */
    TableBarComponent.prototype.open;
    /** @type {?} */
    TableBarComponent.prototype.invisibleItems;
    /** @type {?} */
    TableBarComponent.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtYmFyL3RhYmxlLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWUsU0FBUyxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW1CekQsTUFBTTs7dUJBQ3dCLEVBQUU7c0JBRVosSUFBSSxZQUFZLEVBQUU7b0JBQ3ZCLEtBQUs7OEJBQ0ssS0FBSzs7Ozs7SUFJdEIsU0FBUztRQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOzs7Ozs7O0lBR3JCLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUztRQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOzs7OztJQUd0QyxtQkFBbUI7UUFDekIsdUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckUsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pELHVCQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxvQkFBb0IsSUFBSSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSx1QkFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLEtBQUssQ0FBQztpQkFDTjthQUNEO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRDs7Ozs7SUFHSyxNQUFNO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7WUF2RHhCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0NBYVY7YUFDQTs7O3NCQUVDLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxNQUFNO2tCQUlOLFNBQVMsU0FBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLXRhYmxlLWJhclwiPlxuXHQ8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiICNyZWYgW25nQ2xhc3NdPVwie29wZW46IG9wZW59XCI+XG5cdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aVRhYmxlQmFySXRlbV1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS10YWJsZS1iYXItaXRlbVwiICpuZ0lmPVwib3BlblwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLS10cmFuc3BhcmVudFwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlNob3cgbGVzcy4uLjwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInNob3ctbW9yZVwiICpuZ0lmPVwiIW9wZW4gJiYgaW52aXNpYmxlSXRlbXNcIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXRyYW5zcGFyZW50XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+U2hvdyBtb3JlLi4uPC9idXR0b24+XG5cdDwvZGl2PlxuXG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlUYWJsZUJhclNlYXJjaF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG5cdEBJbnB1dCgpIGZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cdEBJbnB1dCgpIHRlc3RGaWx0ZXI6IEZpbHRlcjtcblx0QE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG9wZW4gPSBmYWxzZTtcblx0cHVibGljIGludmlzaWJsZUl0ZW1zID0gZmFsc2U7XG5cblx0QFZpZXdDaGlsZCgncmVmJykgcmVmO1xuXG5cdHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG5cdFx0dGhpcy5jb3VudEludmlzaWJsZUl0ZW1zKCk7XG5cdH1cblxuXHRwdWJsaWMgaXNJblZpc2libGUocmVjdENvbnRhaW5lciwgcmVjdENoaWxkKSB7XG5cdFx0cmV0dXJuIHJlY3RDb250YWluZXIuYm90dG9tIDwgcmVjdENoaWxkLnRvcDtcblx0fVxuXG5cdHB1YmxpYyBjb3VudEludmlzaWJsZUl0ZW1zKCkge1xuXHRcdGNvbnN0IHJlY3RDb250YWluZXIgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG5cblx0XHRmb3IgKGxldCBpID0gY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgbyA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAoby5ub2RlTmFtZSA9PT0gJ0FVSS1UQUJMRS1CQVItSVRFTScgJiYgby5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0Y29uc3QgcmVjdENoaWxkID0gby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKHRoaXMuaXNJblZpc2libGUocmVjdENvbnRhaW5lciwgcmVjdENoaWxkKSkge1xuXHRcdFx0XHRcdHRoaXMuaW52aXNpYmxlSXRlbXMgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuaW52aXNpYmxlSXRlbXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG5cdH1cbn1cbiJdfQ==
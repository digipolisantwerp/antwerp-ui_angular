/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Filter } from '@acpaas-ui/ngx-components/utils';
var TableBarComponent = /** @class */ (function () {
    function TableBarComponent() {
        this.filters = [];
        this.filter = new EventEmitter();
        this.open = false;
        this.invisibleItems = false;
    }
    /**
     * @return {?}
     */
    TableBarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.countInvisibleItems();
    };
    /**
     * @param {?} rectContainer
     * @param {?} rectChild
     * @return {?}
     */
    TableBarComponent.prototype.isInVisible = /**
     * @param {?} rectContainer
     * @param {?} rectChild
     * @return {?}
     */
    function (rectContainer, rectChild) {
        return rectContainer.bottom < rectChild.top;
    };
    /**
     * @return {?}
     */
    TableBarComponent.prototype.countInvisibleItems = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ rectContainer = this.ref.nativeElement.getBoundingClientRect();
        var /** @type {?} */ childNodes = this.ref.nativeElement.childNodes;
        for (var /** @type {?} */ i = childNodes.length - 1; i >= 0; i--) {
            var /** @type {?} */ o = childNodes[i];
            if (o.nodeName === 'AUI-TABLE-BAR-ITEM' && o.getBoundingClientRect) {
                var /** @type {?} */ rectChild = o.getBoundingClientRect();
                if (this.isInVisible(rectContainer, rectChild)) {
                    this.invisibleItems = true;
                    break;
                }
            }
            if (i === 0) {
                this.invisibleItems = false;
            }
        }
    };
    /**
     * @return {?}
     */
    TableBarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    TableBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-bar',
                    template: "<div class=\"aui-table-bar\">\n\t<div class=\"filters\" #ref [ngClass]=\"{open: open}\">\n\t\t<ng-content select=\"[auiTableBarItem]\"></ng-content>\n\t\t<div class=\"aui-table-bar-item\" *ngIf=\"open\">\n\t\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show less...</button>\n\t\t</div>\n\t</div>\n\t<div class=\"show-more\" *ngIf=\"!open && invisibleItems\">\n\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show more...</button>\n\t</div>\n\n\t<ng-content select=\"[auiTableBarSearch]\"></ng-content>\n</div>\n",
                },] },
    ];
    TableBarComponent.propDecorators = {
        filters: [{ type: Input }],
        testFilter: [{ type: Input }],
        filter: [{ type: Output }],
        ref: [{ type: ViewChild, args: ['ref',] }]
    };
    return TableBarComponent;
}());
export { TableBarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtYmFyL3RhYmxlLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWUsU0FBUyxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O3VCQW9CM0IsRUFBRTtzQkFFWixJQUFJLFlBQVksRUFBRTtvQkFDdkIsS0FBSzs4QkFDSyxLQUFLOzs7OztJQUl0QixxQ0FBUzs7OztRQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOzs7Ozs7O0lBR3JCLHVDQUFXOzs7OztjQUFDLGFBQWEsRUFBRSxTQUFTO1FBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7Ozs7O0lBR3RDLCtDQUFtQjs7OztRQUN6QixxQkFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNyRSxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBRXJELEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakQscUJBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLHFCQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsS0FBSyxDQUFDO2lCQUNOO2FBQ0Q7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUM1QjtTQUNEOzs7OztJQUdLLGtDQUFNOzs7O1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7OztnQkF2RHhCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHdqQkFhVjtpQkFDQTs7OzBCQUVDLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxNQUFNO3NCQUlOLFNBQVMsU0FBQyxLQUFLOzs0QkEzQmpCOztTQW9CYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS10YWJsZS1iYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdGFibGUtYmFyXCI+XG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCIgI3JlZiBbbmdDbGFzc109XCJ7b3Blbjogb3Blbn1cIj5cblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpVGFibGVCYXJJdGVtXVwiPjwvbmctY29udGVudD5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLXRhYmxlLWJhci1pdGVtXCIgKm5nSWY9XCJvcGVuXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXRyYW5zcGFyZW50XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+U2hvdyBsZXNzLi4uPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwic2hvdy1tb3JlXCIgKm5nSWY9XCIhb3BlbiAmJiBpbnZpc2libGVJdGVtc1wiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tdHJhbnNwYXJlbnRcIiAoY2xpY2spPVwidG9nZ2xlKClcIj5TaG93IG1vcmUuLi48L2J1dHRvbj5cblx0PC9kaXY+XG5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aVRhYmxlQmFyU2VhcmNoXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblx0QElucHV0KCkgZmlsdGVyczogRmlsdGVyW10gPSBbXTtcblx0QElucHV0KCkgdGVzdEZpbHRlcjogRmlsdGVyO1xuXHRAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRwdWJsaWMgaW52aXNpYmxlSXRlbXMgPSBmYWxzZTtcblxuXHRAVmlld0NoaWxkKCdyZWYnKSByZWY7XG5cblx0cHVibGljIG5nRG9DaGVjaygpIHtcblx0XHR0aGlzLmNvdW50SW52aXNpYmxlSXRlbXMoKTtcblx0fVxuXG5cdHB1YmxpYyBpc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpIHtcblx0XHRyZXR1cm4gcmVjdENvbnRhaW5lci5ib3R0b20gPCByZWN0Q2hpbGQudG9wO1xuXHR9XG5cblx0cHVibGljIGNvdW50SW52aXNpYmxlSXRlbXMoKSB7XG5cdFx0Y29uc3QgcmVjdENvbnRhaW5lciA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgY2hpbGROb2RlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcblxuXHRcdGZvciAobGV0IGkgPSBjaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdGlmIChvLm5vZGVOYW1lID09PSAnQVVJLVRBQkxFLUJBUi1JVEVNJyAmJiBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRjb25zdCByZWN0Q2hpbGQgPSBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAodGhpcy5pc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpKSB7XG5cdFx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGkgPT09IDApIHtcblx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5vcGVuID0gIXRoaXMub3Blbjtcblx0fVxufVxuIl19
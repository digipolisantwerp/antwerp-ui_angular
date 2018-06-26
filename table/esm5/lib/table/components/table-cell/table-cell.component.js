/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
var TableCellComponent = /** @class */ (function () {
    function TableCellComponent(viewContainerRef, componentFactoryResolver, changeDetectionRef) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
    }
    /**
     * @return {?}
     */
    TableCellComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.loadComponent();
        }
    };
    /**
     * @return {?}
     */
    TableCellComponent.prototype.hasComponent = /**
     * @return {?}
     */
    function () {
        return !!this.component;
    };
    /**
     * @return {?}
     */
    TableCellComponent.prototype.loadComponent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var /** @type {?} */ viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();
        var /** @type {?} */ componentRef = viewContainerRef.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).data = this.value;
        this.changeDetectionRef.detectChanges();
    };
    TableCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-cell',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ value }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableCellComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    TableCellComponent.propDecorators = {
        component: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableCellComponent;
}());
export { TableCellComponent };
function TableCellComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TableCellComponent.prototype.component;
    /** @type {?} */
    TableCellComponent.prototype.value;
    /** @type {?} */
    TableCellComponent.prototype.viewContainerRef;
    /** @type {?} */
    TableCellComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    TableCellComponent.prototype.changeDetectionRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLWNlbGwvdGFibGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUV4QixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQzs7SUFhdEIsNEJBQ1Esa0JBQ0MsMEJBQ0E7UUFGRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2YsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCO0tBQ3RCOzs7O0lBRUUsd0NBQVc7Ozs7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUdLLHlDQUFZOzs7O1FBQ2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHbEIsMENBQWE7Ozs7UUFDbkIscUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRixxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekIscUJBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLG1CQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7OztnQkFqQ3pDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNEdBRVY7aUJBQ0E7Ozs7Z0JBVkEsZ0JBQWdCO2dCQUhoQix3QkFBd0I7Z0JBSXhCLGlCQUFpQjs7OzRCQVdoQixLQUFLO3dCQUNMLEtBQUs7OzZCQW5CUDs7U0FpQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRPbkNoYW5nZXMsXG5cdFR5cGUsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlLWNlbGwnLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAqbmdJZj1cImhhc0NvbXBvbmVudCgpXCI+PC9uZy10ZW1wbGF0ZT5cbjxzcGFuICpuZ0lmPVwiIWhhc0NvbXBvbmVudCgpXCI+e3sgdmFsdWUgfX08L3NwYW4+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=
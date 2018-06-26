/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent(viewContainerRef, componentFactoryResolver, changeDetectionRef) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
    }
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.ngOnChanges = /**
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
    TableHeaderComponent.prototype.hasComponent = /**
     * @return {?}
     */
    function () {
        return !!this.component;
    };
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.loadComponent = /**
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
    TableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-header',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ label }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    TableHeaderComponent.propDecorators = {
        component: [{ type: Input }],
        label: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableHeaderComponent;
}());
export { TableHeaderComponent };
function TableHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TableHeaderComponent.prototype.component;
    /** @type {?} */
    TableHeaderComponent.prototype.label;
    /** @type {?} */
    TableHeaderComponent.prototype.value;
    /** @type {?} */
    TableHeaderComponent.prototype.viewContainerRef;
    /** @type {?} */
    TableHeaderComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    TableHeaderComponent.prototype.changeDetectionRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUV4QixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQzs7SUFjdEIsOEJBQ1Esa0JBQ0MsMEJBQ0E7UUFGRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2YsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCO0tBQ3RCOzs7O0lBRUUsMENBQVc7Ozs7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUdLLDJDQUFZOzs7O1FBQ2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHbEIsNENBQWE7Ozs7UUFDbkIscUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRixxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekIscUJBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLG1CQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7OztnQkFsQ3pDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsNEdBRVY7aUJBQ0E7Ozs7Z0JBVkEsZ0JBQWdCO2dCQUhoQix3QkFBd0I7Z0JBSXhCLGlCQUFpQjs7OzRCQVdoQixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7K0JBcEJQOztTQWlCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdE9uQ2hhbmdlcyxcblx0VHlwZSxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Q2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgKm5nSWY9XCJoYXNDb21wb25lbnQoKVwiPjwvbmctdGVtcGxhdGU+XG48c3BhbiAqbmdJZj1cIiFoYXNDb21wb25lbnQoKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgdmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=
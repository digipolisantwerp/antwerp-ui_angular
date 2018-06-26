/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
export class TableHeaderComponent {
    /**
     * @param {?} viewContainerRef
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectionRef
     */
    constructor(viewContainerRef, componentFactoryResolver, changeDetectionRef) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.component) {
            this.loadComponent();
        }
    }
    /**
     * @return {?}
     */
    hasComponent() {
        return !!this.component;
    }
    /**
     * @return {?}
     */
    loadComponent() {
        const /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        const /** @type {?} */ viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();
        const /** @type {?} */ componentRef = viewContainerRef.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).data = this.value;
        this.changeDetectionRef.detectChanges();
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-table-header',
                template: `<ng-template *ngIf="hasComponent()"></ng-template>
<span *ngIf="!hasComponent()">{{ label }}</span>
`,
            },] },
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
TableHeaderComponent.propDecorators = {
    component: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUV4QixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNOzs7Ozs7SUFLTCxZQUNRLGtCQUNDLDBCQUNBO1FBRkQscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNmLDZCQUF3QixHQUF4Qix3QkFBd0I7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQjtLQUN0Qjs7OztJQUVFLFdBQVc7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUdLLFlBQVk7UUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUdsQixhQUFhO1FBQ25CLHVCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0YsdUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpCLHVCQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RSxtQkFBTyxZQUFZLENBQUMsUUFBUSxFQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1lBbEN6QyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztDQUVWO2FBQ0E7Ozs7WUFWQSxnQkFBZ0I7WUFIaEIsd0JBQXdCO1lBSXhCLGlCQUFpQjs7O3dCQVdoQixLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0T25DaGFuZ2VzLFxuXHRUeXBlLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS10YWJsZS1oZWFkZXInLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAqbmdJZj1cImhhc0NvbXBvbmVudCgpXCI+PC9uZy10ZW1wbGF0ZT5cbjxzcGFuICpuZ0lmPVwiIWhhc0NvbXBvbmVudCgpXCI+e3sgbGFiZWwgfX08L3NwYW4+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIGNvbXBvbmVudDogVHlwZTxhbnk+O1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSB2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkgeyB9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0dGhpcy5sb2FkQ29tcG9uZW50KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGhhc0NvbXBvbmVudCgpIHtcblx0XHRyZXR1cm4gISF0aGlzLmNvbXBvbmVudDtcblx0fVxuXG5cdHB1YmxpYyBsb2FkQ29tcG9uZW50KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG5cdFx0Y29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZjtcblx0XHR2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHQoPENlbGw+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5kYXRhID0gdGhpcy52YWx1ZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==
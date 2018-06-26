/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ComponentFactoryResolver, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
export class TableCellComponent {
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
TableCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-table-cell',
                template: `<ng-template *ngIf="hasComponent()"></ng-template>
<span *ngIf="!hasComponent()">{{ value }}</span>
`,
            },] },
];
/** @nocollapse */
TableCellComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
TableCellComponent.propDecorators = {
    component: [{ type: Input }],
    value: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLWNlbGwvdGFibGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUV4QixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNOzs7Ozs7SUFJTCxZQUNRLGtCQUNDLDBCQUNBO1FBRkQscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNmLDZCQUF3QixHQUF4Qix3QkFBd0I7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQjtLQUN0Qjs7OztJQUVFLFdBQVc7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUdLLFlBQVk7UUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUdsQixhQUFhO1FBQ25CLHVCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0YsdUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpCLHVCQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RSxtQkFBTyxZQUFZLENBQUMsUUFBUSxFQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1lBakN6QyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOztDQUVWO2FBQ0E7Ozs7WUFWQSxnQkFBZ0I7WUFIaEIsd0JBQXdCO1lBSXhCLGlCQUFpQjs7O3dCQVdoQixLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdE9uQ2hhbmdlcyxcblx0VHlwZSxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Q2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtY2VsbCcsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICpuZ0lmPVwiaGFzQ29tcG9uZW50KClcIj48L25nLXRlbXBsYXRlPlxuPHNwYW4gKm5nSWY9XCIhaGFzQ29tcG9uZW50KClcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIGNvbXBvbmVudDogVHlwZTxhbnk+O1xuXHRASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkgeyB9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0dGhpcy5sb2FkQ29tcG9uZW50KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGhhc0NvbXBvbmVudCgpIHtcblx0XHRyZXR1cm4gISF0aGlzLmNvbXBvbmVudDtcblx0fVxuXG5cdHB1YmxpYyBsb2FkQ29tcG9uZW50KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG5cdFx0Y29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZjtcblx0XHR2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHQoPENlbGw+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5kYXRhID0gdGhpcy52YWx1ZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==
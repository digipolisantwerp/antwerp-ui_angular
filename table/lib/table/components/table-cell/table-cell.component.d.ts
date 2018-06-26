import { ComponentFactoryResolver, OnChanges, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
export declare class TableCellComponent implements OnChanges {
    viewContainerRef: ViewContainerRef;
    private componentFactoryResolver;
    private changeDetectionRef;
    component: Type<any>;
    value: string;
    constructor(viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, changeDetectionRef: ChangeDetectorRef);
    ngOnChanges(): void;
    hasComponent(): boolean;
    loadComponent(): void;
}

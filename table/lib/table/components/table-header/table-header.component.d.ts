import { ComponentFactoryResolver, OnChanges, Type, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
export declare class TableHeaderComponent implements OnChanges {
    viewContainerRef: ViewContainerRef;
    private componentFactoryResolver;
    private changeDetectionRef;
    component: Type<any>;
    label: string;
    value: any;
    constructor(viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, changeDetectionRef: ChangeDetectorRef);
    ngOnChanges(): void;
    hasComponent(): boolean;
    loadComponent(): void;
}

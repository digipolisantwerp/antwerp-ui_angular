import {ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnChanges, Type, ViewContainerRef} from '@angular/core';
import {Cell} from '../../types/table.types';

@Component({
  selector: 'aui-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent implements OnChanges {
  @Input() component: Type<any>;
  @Input() label: string;
  @Input() value: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }

  public ngOnChanges() {
    if (this.component) {
      this.loadComponent();
    }
  }

  public hasComponent() {
    return !!this.component;
  }

  public loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as Cell).data = this.value;
    this.changeDetectionRef.detectChanges();
  }
}

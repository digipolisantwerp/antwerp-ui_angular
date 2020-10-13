import {
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef
} from '@angular/core';
import {Cell, CellWithMetadata, ConstructableCell} from '../../types/table.types';
import {TableHelperService} from '../../services/table-helper.service';
import {hasMetadata} from './table-cell.helpers';

@Component({
  selector: 'aui-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnChanges {
  @Input() component: ConstructableCell;
  @Input() columnClass: () => string;
  @Input() value: string;

  constructor(
    public tableHelper: TableHelperService,
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (!changes.component) {
      return;
    }

    if (changes.component.currentValue !== changes.component.previousValue) {
      this.loadComponent(this.component);
      this.changeDetectionRef.detectChanges();
    }
  }

  public hasComponent() {
    return !!this.component;
  }

  public loadComponent(component: ConstructableCell): ComponentRef<Cell> {
    const componentFactory: ComponentFactory<Cell> = hasMetadata(component) ?
      this.componentFactoryResolver.resolveComponentFactory((component as CellWithMetadata).instance)
      : this.componentFactoryResolver.resolveComponentFactory((component) as Type<Cell>);

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.value;
    if (hasMetadata(component)) {
      componentRef.instance.metadata = (component as CellWithMetadata).metadata;
    }
    return componentRef;
  }
}

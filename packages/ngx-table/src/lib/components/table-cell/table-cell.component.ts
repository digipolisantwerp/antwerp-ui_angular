import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef
} from '@angular/core';
import {Cell} from '../../types/table.types';
import { TableHelperService } from '../../services/table-helper.service';

@Component({
  selector: 'aui-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnChanges {
  @Input() component: Type<any>;
  @Input() columnClass: Type<any>;
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
      this.loadComponent();
    }
  }

  public hasComponent() {
    return !!this.component;
  }

  public hasColumnClass() {
    return !!this.columnClass;
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

import {
	Component,
	Input,
	ComponentFactoryResolver,
	OnChanges,
	Type,
	ViewContainerRef,
	ChangeDetectorRef
} from '@angular/core';
import { Cell } from '../../types/table.types';

@Component({
	selector: 'aui-table-cell',
	templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnChanges {
	@Input() component: Type<any>;
	@Input() value: string;

	constructor(
		public viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver,
		private changeDetectionRef: ChangeDetectorRef
	) { }

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
		(<Cell>componentRef.instance).data = this.value;
		this.changeDetectionRef.detectChanges();
	}
}

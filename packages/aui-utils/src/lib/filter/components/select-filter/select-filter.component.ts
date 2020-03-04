import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FilterComponent } from '../../types/filter.types';

@Component({
	selector: 'aui-select-filter',
	templateUrl: './select-filter.component.html',
})
export class SelectFilterComponent implements OnInit, FilterComponent {
	@Input() filter;
	@Output() update = new EventEmitter();
	public value;

	public ngOnInit() {
		if (this.filter) {
			this.value = this.filter.value;
		}
	}

	public onFilter(value) {
		this.update.emit(value);
	}
}

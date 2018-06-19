import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FilterComponent } from '../../types/filter.types';

@Component({
	selector: 'aui-input-filter',
	templateUrl: './input-filter.component.html',
})
export class InputFilterComponent implements OnInit, FilterComponent {
	@Input() filter;
	@Output() update = new EventEmitter();
	public value;

	ngOnInit() {
		if (this.filter) {
			this.value = this.filter.value;
		}
	}

	public onFilter(value) {
		this.update.emit(value);
	}
}

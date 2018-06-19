import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FilterComponent } from '../../types/filter.types';

@Component({
	selector: 'aui-checkbox-filter',
	templateUrl: './checkbox-filter.component.html',
})
export class CheckboxFilterComponent implements OnInit, FilterComponent {
	@Input() filter;
	@Output() update = new EventEmitter();
	public value;

	public ngOnInit() {
		if (this.filter) {
			this.value = this.filter.value;
		}
		this.onFilter();
	}

	public onFilter() {
		const value = this.filter.options.filter(option => {
			return option.checked;
		});
		this.update.emit(value);
	}
}

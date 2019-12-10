import { Component, Input, Output, EventEmitter } from '@angular/core';
import ShortUniqueId from 'short-unique-id';

import { TableHelperService } from '../../services/table-helper.service';

@Component({
	selector: 'aui-column-selector',
	templateUrl: './column-selector.component.html',
})
export class ColumnSelectorComponent {
	@Input() columns;
	@Output() update = new EventEmitter();
	public id: number;
	public currentTarget;

	private uid = new ShortUniqueId();

	constructor(public tableHelper: TableHelperService) {
		this.id = this.uid.randomUUID(8);
	}

	public updateDisplay(e, index) {
		if (e.target.checked) {
			this.columns[index].hidden = false;
			this.enableChildren(this.columns[index]);
		} else {
			this.columns[index].hidden = true;
			this.disableChildren(this.columns[index]);
		}

		this.emitColumns();
	}

	public enableChildren(parent) {
		this.columns = this.columns.map((o) => {
			if (o.parent && o.disabled && o.parent.indexOf(parent.value) !== -1) {
				o.disabled = false;
				this.enableChildren(o);
			}

			return o;
		});
	}

	public disableChildren(parent) {
		this.columns = this.columns.map((o) => {
			if (o.parent && !o.disabled && o.parent.indexOf(parent.value) !== -1) {
				o.disabled = true;
				o.hidden = true;
				this.disableChildren(o);
			}

			return o;
		});
	}

	public move(key, i) {
		const index = this.columns.findIndex((o) => {
			return this.tableHelper.getValue(o) === this.tableHelper.getValue(key);
		});
		const target = index + i;

		if (target < 0 || target > this.columns.length - 1) {
			return;
		}

		this.columns.splice(index, 1); // Delete previous key position
		this.columns.splice(target, 0 , key); // Add new position

		// Use timeout to fix re-rendering issue
		setTimeout(() => {
			this.currentTarget = target;
		});

		this.emitColumns();
	}

	public emitColumns() {
		this.update.emit(this.columns);
	}
}

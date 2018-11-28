import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'aui-pane',
	templateUrl: './pane.component.html',
})
export class PaneComponent {
	@Input() opened = false;
	@Input() side = 'left';
	@Input() backdrop = true;
	@Output() open = new EventEmitter();
	@Output() close = new EventEmitter();

	public togglePane() {
		(this.opened ? this.closePane() : this.openPane());
	}

	public openPane() {
		this.opened = true;
		this.open.emit();
	}

	public closePane() {
		this.opened = false;
		this.close.emit();
	}
}

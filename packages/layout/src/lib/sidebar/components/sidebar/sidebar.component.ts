import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SidebarItem, SidebarState } from '../../types/sidebar.types';

@Component({
	selector: 'aui-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [
		'./sidebar.component.scss',
	],
})
export class SidebarComponent {
	@Input() public closeOnSelected = true;
	@Input() public title = 'Onderweg';
	@Input() public open = false;
	@Input() public items: SidebarItem[] = [];

	@Output() public opened: EventEmitter<void> = new EventEmitter<void>();
	@Output() public closed: EventEmitter<void> = new EventEmitter<void>();

	public toggle(open: boolean = !this.open) {
		this.open = open;

		if (open) {
			this.opened.emit();
		} else {
			this.closed.emit();
		}
	}

	public itemClicked(): void {
		if (this.closeOnSelected) {
			this.toggle(false);
		}
	}
}

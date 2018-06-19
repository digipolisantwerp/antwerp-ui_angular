import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
	selector: 'styleguide-registry',
	templateUrl: './registry.component.html',
	styleUrls: [
		'./registry.component.scss',
	],
})
export class RegistryComponent {
	@Input() public items: Routes;

	public togglePane(pane: any): void {
		if (pane.opened) {
			pane.closePane();
		} else {
			pane.openPane();
		}
	}
}

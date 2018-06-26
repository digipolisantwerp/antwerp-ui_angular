import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
	selector: 'guide-registry',
	templateUrl: './registry.component.html',
	styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
	@Input() public items: Routes;
}

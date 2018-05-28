import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import { Components } from './components/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlyoutModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class LeafletModule {
}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import { Components } from './components';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FlyoutModule
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

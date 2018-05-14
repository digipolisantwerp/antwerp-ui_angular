import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/flyout';
import { LeafletComponent } from './leaflet/leaflet.component';
import {
    LeafletDragControlComponent, LeafletDrawControlComponent, LeafletFullscreenControlComponent,
    LeafletLocateControlComponent, LeafletZoomControlComponent, LeafletControlComponent
} from './leaflet/controls';

const components = [
    LeafletComponent,
    LeafletControlComponent,
    LeafletDragControlComponent,
    LeafletDrawControlComponent,
    LeafletFullscreenControlComponent,
    LeafletLocateControlComponent,
    LeafletZoomControlComponent
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FlyoutModule
    ],
    declarations: components,
    exports: components
})
export class LeafletModule {
}

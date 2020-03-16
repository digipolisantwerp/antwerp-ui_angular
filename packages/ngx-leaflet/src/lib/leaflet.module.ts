import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';
import {LeafletControlComponent} from './components/controls/leaflet-control/leaflet-control.component';
import {LeafletDragControlComponent} from './components/controls/leaflet-drag-control/leaflet-drag-control.component';
import {LeafletDrawControlComponent} from './components/controls/leaflet-draw-control/leaflet-draw-control.component';
import {LeafletFullscreenControlComponent} from './components/controls/leaflet-fullscreen-control/leaflet-fullscreen-control.component';
import {LeafletLocateControlComponent} from './components/controls/leaflet-locate-control/leaflet-locate-control.component';
import {LeafletZoomControlComponent} from './components/controls/leaflet-zoom-control/leaflet-zoom-control.component';
import {LeafletComponent} from './components/leaflet/leaflet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlyoutModule,
  ],
  declarations: [
    LeafletControlComponent,
    LeafletDragControlComponent,
    LeafletDrawControlComponent,
    LeafletFullscreenControlComponent,
    LeafletLocateControlComponent,
    LeafletZoomControlComponent,
    LeafletComponent,
  ],
  exports: [
    LeafletControlComponent,
    LeafletDragControlComponent,
    LeafletDrawControlComponent,
    LeafletFullscreenControlComponent,
    LeafletLocateControlComponent,
    LeafletZoomControlComponent,
    LeafletComponent,
  ],
})
export class LeafletModule {
}

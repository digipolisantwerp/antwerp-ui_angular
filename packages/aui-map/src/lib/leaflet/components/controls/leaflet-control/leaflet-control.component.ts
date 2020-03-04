import {Component, Input} from '@angular/core';

@Component({
  selector: 'aui-leaflet-control',
  templateUrl: './leaflet-control.component.html',
})
export class LeafletControlComponent {
  @Input() icon: string;
  @Input() disabled: boolean;
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'aui-leaflet-control',
    template: `<button class="aui-leaflet__control a-button a-button--small has-icon" [disabled]="disabled">
        <i [class]="'fa fa-' + icon"></i>
    </button>`
})
export class LeafletControlComponent {
    @Input() icon: string;
    @Input() disabled: boolean;
}

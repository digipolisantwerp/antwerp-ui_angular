import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'aui-pane',
  templateUrl: './pane.component.html',
})
export class PaneComponent {
  @Input() id = 'aui-pane-' + Math.random().toString(36).substring(2);
  @Input() opened = false;
  @Input() side = 'left';
  @Input() backdrop = true;
  @Input() ariaLabel = 'Paneel';
  @Input() ariaLabelClose = 'Sluit paneel';
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

import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';

import {MORE_LABEL} from '../../agenda.conf';

@Component({
  selector: 'aui-agenda-more-button',
  templateUrl: './more-button.component.html',
})
export class MoreButtonComponent {
  @Input() public hiddenEvents: number;
  @Output() public clickMore = new EventEmitter();

  constructor(
    @Inject(MORE_LABEL) public label
  ) {
  }

  public emitClickMore(event: MouseEvent) {
    event.stopPropagation();
    this.clickMore.emit();
  }
}

import {Component, Input, TemplateRef} from '@angular/core';

import {EventInterface, SlotDisplayInterface, SlotMetaInterface} from '../../types/agenda.types';

@Component({
  selector: 'aui-agenda-month-view-event-slot',
  templateUrl: './month-view-event-slot.component.html',
})
export class MonthViewEventSlotComponent {
  @Input() public event: EventInterface;
  @Input() public meta: SlotMetaInterface;
  @Input() public display: SlotDisplayInterface;
  @Input() public template: TemplateRef<any>;
}

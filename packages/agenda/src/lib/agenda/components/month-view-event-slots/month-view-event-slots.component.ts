import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

import { EventInterface, SlotInterface } from '../../interfaces';

@Component({
	selector: 'aui-agenda-month-view-event-slots',
	templateUrl: './month-view-event-slots.component.html',
})
export class MonthViewEventSlotsComponent {
	@Input() public slots: SlotInterface[] = [];
	@Input() public eventItemTemplate: TemplateRef<any>;
	@Output() public selectEvent = new EventEmitter<EventInterface>();

	public emitSelectEvent(event: EventInterface): void {
		this.selectEvent.emit(event);
	}
}

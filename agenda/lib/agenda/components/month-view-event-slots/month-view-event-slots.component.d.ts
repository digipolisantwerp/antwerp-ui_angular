import { TemplateRef, EventEmitter } from '@angular/core';
import { EventInterface, SlotInterface } from '../../types/agenda.types';
export declare class MonthViewEventSlotsComponent {
    slots: SlotInterface[];
    eventItemTemplate: TemplateRef<any>;
    selectEvent: EventEmitter<EventInterface>;
    emitSelectEvent(event: EventInterface): void;
}

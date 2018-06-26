import { SlotMapInterface, SlotInterface, WeekdayInterface } from '../types/agenda.types';
export declare class EventMap {
    slotMap: SlotMapInterface;
    constructor(weeks: WeekdayInterface[][], slots: number);
    initSlots(weeks: WeekdayInterface[][], availableSlots: number): void;
    fillSlot(week: number, day: number, slot: number, span?: number, event?: any): void;
    isSlotFree(week: number, day: number, slot: number): boolean;
    getFreeSlot(week: number, day: number): number;
    addEvent(week: number, day: number, span: number, event: any): void;
    getSlots(eventHeight: number, weekHeight: number, heightOffset: number): SlotInterface[];
    getEventsMap(availableSlots: number): any;
}

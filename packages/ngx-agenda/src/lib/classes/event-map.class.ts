import {EventInterface, SlotInterface, SlotMapInterface, WeekdayInterface} from '../types/agenda.types';

export class EventMap {
  public slotMap: SlotMapInterface;

  constructor(weeks: WeekdayInterface[][], slots: number) {
    this.initSlots(weeks, slots);
  }

  public initSlots(weeks: WeekdayInterface[][], availableSlots: number): void {
    this.slotMap = weeks.map((weekdays) => {
      return weekdays.map((day) => {
        return Object.assign({}, day, {
          slots: Array(availableSlots).fill(null),
          events: [],
        });
      });
    });
  }

  public fillSlot(week: number, day: number, slot: number, span: number = 1, event: any = null): void {
    if (event) {
      this.slotMap[week][day].slots[slot] = {
        meta: {
          week,
          day,
          slot,
          span,
        },
        event,
      };

      for (let i = 1; i < span; i += 1) {
        this.fillSlot(week, day + i, slot);
      }

    } else {
      this.slotMap[week][day].slots[slot] = true;
    }
  }

  public isSlotFree(week: number, day: number, slot: number): boolean {
    return this.slotMap[week][day].slots[slot] === null;
  }

  public getFreeSlot(week: number, day: number): number {
    return this.slotMap[week][day].slots.findIndex((o) => {
      return o === null;
    });
  }

  public addEvent(week: number, day: number, span: number, event: any): void {
    if (event) {
      this.slotMap[week][day].events.push(event);

      for (let i = 1; i < span; i += 1) {
        this.slotMap[week][day + i].events.push(event);
      }
    }
  }

  public getSlots(eventHeight: number, weekHeight: number, heightOffset: number): SlotInterface[] {
    const numberOfDays = this.slotMap[0].length;
    const dayWidth = ((1 / numberOfDays) * 100);

    const flatten = list => list.reduce(
      (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );

    const slots = this.slotMap.map((o) => {
      return o.map((p) => {
        return p.slots;
      });
    });

    return flatten(slots).filter((slot: SlotInterface) => {
      return slot !== null && slot !== true;
    }).map((slot: SlotInterface) => {
      return {
        ...slot,
        display: {
          left: 'calc(' + dayWidth * slot.meta.day + '% + 4px)',
          top: heightOffset + (weekHeight * slot.meta.week) + (slot.meta.slot * eventHeight) + 'px',
          width: 'calc(' + dayWidth * slot.meta.span + '% - 8px)',
        },
      };
    });
  }

  public getEventsMap(availableSlots: number): any {
    return this.slotMap.map((days) => {
      return days.map((day) => {
        return Object.assign({}, day, {
          total: day.events.length,
          more: day.events.length - availableSlots,
          dots: day.events.map((event: EventInterface): string => {
            return event.color;
          }).filter((color: string, pos: number, array: string[]): boolean => {
            return array.indexOf(color) === pos;
          }).slice(0, 3),
        });
      });
    });
  }
}

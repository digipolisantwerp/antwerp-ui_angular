export interface EventInterface {
  startDate: Date;
  endDate: Date;
  title: string;

  [propName: string]: any;
}

export interface SlotMetaInterface {
  week: number;
  day: number;
  slot: number;
  span: number;
}

export interface SlotDisplayInterface {
  left: string;
  top: string;
  width: string;
}

export interface SlotInterface {
  meta?: SlotMetaInterface;
  display?: SlotDisplayInterface;
  event?: EventInterface;
}

export interface SlotMapItemInterface {
  slots: (SlotInterface | boolean)[];
  events: EventInterface[];

}

export type SlotMapInterface = SlotMapItemInterface[][];

export type DotMapInterface = (string)[][][];

export interface DateRangeInterface {
  from: Date | string;
  to: Date | string;
}

export interface DayRangeInterface {
  from: string;
  to: string;
}

export enum DAYS {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export enum VIEWS {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export interface WeekdayInterface {
  date: Date;
  // events: EventInterface[];
  // total: number;
  // dots: string[];
  [propName: string]: any;
}

export type RangeInterface = (number[] | Date)[];

export interface HighLightInterface {
  [propName: string]: RangeInterface;
}

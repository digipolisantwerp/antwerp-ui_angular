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
export declare type SlotMapInterface = SlotMapItemInterface[][];
export declare type DotMapInterface = (string)[][][];
export interface DateRangeInterface {
    from: Date | string;
    to: Date | string;
}
export interface DayRangeInterface {
    from: string;
    to: string;
}
export declare enum DAYS {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
}
export declare enum VIEWS {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    YEAR = "YEAR",
}
export interface WeekdayInterface {
    date: Date;
    [propName: string]: any;
}
export declare type RangeInterface = (number[] | Date)[];
export interface HighLightInterface {
    [propName: string]: RangeInterface;
}

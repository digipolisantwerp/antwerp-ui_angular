export declare const CALENDAR_VIEW_MONTH = "CALENDAR_VIEW_MONTH";
export declare const CALENDAR_VIEW_YEAR = "CALENDAR_VIEW_YEAR";
export declare const CALENDAR_VIEW_DECENNIA = "CALENDAR_VIEW_DECENNIA";
export declare type WeekdayLabelsConfig = string[];
export declare type MonthLabelsConfig = string[];
export interface DatepickerResult {
    date: Date;
    complete: Boolean;
}
export interface DateRangeMap {
    before: number[];
    current: number[];
    after: number[];
}

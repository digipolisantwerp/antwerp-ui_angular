export type DateRange = Array<Date|number>;

export declare interface GeneratorOptions {
    startOfWeek?: number;
    asc?: boolean;
    offset?: number;
    dayOffset?: number;
    padding?: boolean;
    generatePadding?: boolean;
    range?: DateRange;
}

export declare interface Day {
    date: number|null;
    padding?: boolean;
    available: boolean;
}

export declare type Week = Day[];

export declare type Month = Week[];

export declare interface FormattingOptions {
    leadingZero: boolean;
    monthLabels: string[];
    weekdayLabels: string[];
}

export declare class DateHelper {
    static getWeekday(date: Date, startOfWeek?: number): number;
    static getStartOfWeek(date: Date, startOfWeek?: number): number;
    static getEndOfWeek(date: Date, startOfWeek?: number): number;
    static getMonthLength(date: Date): number;
    static getFirstWeekdayOfMonth(date: Date, startOfWeek?: number): number;
    static getLastWeekdayOfMonth(date: Date, startOfWeek?: number): number;
    static datesAreEqual(dates: Date[], specifier?: string|string[]): boolean;
    static dateValuesAreEqual(dates: Date[], comparator: string): boolean;
    static updateDate(date: Date, day: number): Date;
    static updateMonth(date: Date, month: number): Date;
    static formatDate(date: Date, format: string, options?: FormattingOptions): string;
    static addLeadingZero(value: number|string, addLeadingZero?: boolean): string;
    static parseDate(date: any): null|Date;
    static dateOutOfRange(date: Date, range: number[]): boolean;
    static closestDateForRange(date: Date, range: number[]): null|Date;
}

export declare class DateGenerator {
    static generateMonth(date: Date, options?: GeneratorOptions): Month;
    static generateWeek(start?: number, options?: GeneratorOptions, padding?: number[]): Week;
    static generatePadding(date: Date, count: number, fromStart?: boolean): number[];
    static generateRange(date: Date, ranges: DateRange, options: GeneratorOptions): number[];
}

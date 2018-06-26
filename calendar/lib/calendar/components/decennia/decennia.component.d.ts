import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class CalendarDecenniaComponent implements OnInit, OnChanges {
    selectedDate: Date;
    activeDate: Date;
    selectDate: EventEmitter<{}>;
    years: any[];
    selectedYear: number;
    current: number;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    pickDate(event: MouseEvent, date: number): void;
    private updateYears();
}
